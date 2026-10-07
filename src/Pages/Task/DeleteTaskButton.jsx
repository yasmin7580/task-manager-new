import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const DeleteTaskButton = ({ id, className, children, refetch }) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        console.log("delete");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading("Deleting")
                try {
                    const { data } = await axios.delete(`http://localhost:3000/task/${id}`) // response
                    if (data.deletedCount !== 1) {
                        throw new Error("Failed to delete")
                    }
                    if (!refetch) {
                        navigate("/all-tasks")
                    }
                    else {
                        await refetch()
                    }
                    toast.dismiss(toastId)
                    toast.success("Task Deleted Successfully")


                } catch (error) {
                    toast.dismiss(toastId)
                    toast.error(error.message || "Something went wrong")
                }
            }
        });

    }

    return (
        <button onClick={handleDelete} className={className || ""}> {children}</button>

    );
};

export default DeleteTaskButton;