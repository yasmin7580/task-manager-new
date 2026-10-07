import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Check, CheckCheck, CheckSquare, Edit, EllipsisVertical, Trash } from 'lucide-react';
import React, { useRef } from 'react';
import { useParams } from 'react-router';
import DeleteTaskButton from './DeleteTaskButton';
import toast from 'react-hot-toast';

const TaskDetails = () => {
    const { id } = useParams()
    console.log(id);
    const modalRef = useRef()


    const { data: task, isLoading, refetch } = useQuery({
        queryKey: ["task", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/task/${id}`) // status = complete
            return data
        }
    })
    console.log(task);
    if (isLoading) {
        return <div>Loading...</div>
    }
    const handleStatus = async () => {
        console.log("ready to work");
        const update = { status: "complete" }
        const toastId = toast.loading("Updating")


        try {
            // imgbb // 
            const { data } = await axios.patch(`http://localhost:3000/task/${task._id}`, update) // //
            if (data.modifiedCount !== 1) {
                throw new Error("Failed to update Status")
            }

            await refetch() // 
            toast.dismiss(toastId)
            toast.success("Updated Successfully")

        } catch (error) {
            toast.dismiss(toastId)
            toast.error(error.message || "Failed to update status")

        }


    }


    const handleUpdateForm = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = Object.fromEntries(new FormData(form))
        console.log(formData);
        const toastId = toast.loading("Updating Task")
        try {
            const { data } = await axios.patch(`http://localhost:3000/task/${task._id}`, formData)
            if (data.modifiedCount !== 1) {
                throw new Error("Failed to update task")
            }
            await refetch()
            toast.dismiss(toastId)
            toast.success("Update Task Successfully")
            modalRef.current.close()
            

        } catch (error) {
            toast.dismiss(toastId)
            toast.error(error.message || "Failed to update task")

        }



    }


    return (
        <div>
            <div className='flex justify-end'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><EllipsisVertical size={16} /></div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => modalRef.current.showModal()}><a><Edit size={16}></Edit>Edit</a></li>
                        <li className='text-red-500 '><DeleteTaskButton id={id} ><a className='flex items-center gap-2'><Trash size={16}></Trash>Delete</a></DeleteTaskButton></li>
                        {task.status === "pending" &&
                            <li onClick={handleStatus} className='text-green-500'><a><CheckSquare size={16}></CheckSquare>Complete</a></li>}
                    </ul>
                </div>
            </div>
            <div className='border w-max p-5 rounded-2xl'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-2xl font-bold text-cyan-500'>{task.name}</h1>
                    <span className='badge badge-info capitalize'>{task.status}</span>
                </div>
                <p className='tracking-wider'>{task.description}</p>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog ref={modalRef} className="modal backdrop-blur-[2px]">
                <div className="modal-box border border-slate-700 p-8 rounded-2xl bg-slate-900 shadow-2xl shadow-cyan-500/10">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>







                    <form onSubmit={handleUpdateForm} className=''>
                        <label className='block text-sm font-medium text-slate-200 mb-2'>
                            Task Name
                        </label>

                        <input
                            className='input w-full mb-4 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none'
                            type="text"
                            name="name"
                            placeholder='Enter task name'
                            defaultValue={task.name}
                        />

                        <label className='block text-sm font-medium text-slate-200 mb-2'>
                            Description
                        </label>

                        <input
                            className='textarea w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none'
                            type="text"
                            name="description"
                            placeholder='Enter task description'
                            defaultValue={task.description}
                        />
                        <button
                            type="submit"
                            className="w-full mt-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition duration-200 shadow-lg shadow-cyan-500/20"
                        >
                            Update Task
                        </button>
                    </form>














                </div>
            </dialog>
        </div>
    );
};

export default TaskDetails;