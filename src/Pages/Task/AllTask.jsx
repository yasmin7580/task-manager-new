import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router';
import DeleteTaskButton from './DeleteTaskButton';

const AllTask = () => {

    const { data: tasks, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/tasks")
            return data

        }
    })





    return (
        <div className='grid grid-cols-5 gap-3 '>
            {
                tasks?.map((task) =>
                    <div className='border p-4 space-y-2' key={task._id}>
                        <h1>{task.name}</h1>
                        <h1>{task.description}</h1>
                        <div className='flex gap-2'>
                            <DeleteTaskButton className='btn btn-error' id={task._id} refetch={refetch}> Delete</DeleteTaskButton>
                            <Link to={`/task/${task._id}`} className='btn btn-info'>View</Link>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default AllTask;