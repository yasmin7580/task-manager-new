import { createBrowserRouter } from "react-router";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import AddTask from "./Pages/Task/AddTask";
import AllTask from "./Pages/Task/AllTask";
import TaskDetails from "./Pages/Task/TaskDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/add-task",
                Component: AddTask
            },
            {
                path: "/all-tasks",
                Component: AllTask
            },
            {
                path: "task/:id",
                Component: TaskDetails
            }
        ]
    },
]);
export default router