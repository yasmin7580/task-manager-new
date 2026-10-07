import axios from "axios";
import toast from "react-hot-toast";

// console.log()

const AddTask = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = Object.fromEntries(new FormData(form))
        console.log(formData);
        const toastId = toast.loading("Task Adding")
        try {
            await axios.post("http://localhost:3000/task", formData)
            toast.dismiss(toastId)
            toast.success("Task Added Successfully")
            form.reset()

        } catch (error) {
            toast.dismiss(toastId)
            toast.error(error.message || "Failed to add task")

        }


    }
    return (
        <div className='min-h-screen bg-slate-950 flex items-center justify-center'>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} className='border border-slate-700 p-8 rounded-2xl bg-slate-900 shadow-2xl shadow-cyan-500/10'>
                    <label className='block text-sm font-medium text-slate-200 mb-2'>
                        Task Name
                    </label>

                    <input
                        className='input w-96 mb-4 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none'
                        type="text"
                        name="name"
                        placeholder='Enter task name'
                    />

                    <label className='block text-sm font-medium text-slate-200 mb-2'>
                        Description
                    </label>

                    <input
                        className='textarea w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none'
                        type="text"
                        name="description"
                        placeholder='Enter task description'
                    />
                    <button
                        type="submit"
                        className="w-full mt-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition duration-200 shadow-lg shadow-cyan-500/20"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
