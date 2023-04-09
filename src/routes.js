import { Dashboard, Important } from "./page";

export const routes = [
    {
        id: 1,
        name: "Today's task",
        url: "/today",
        component: <Important />
    },
    {
        id: 2,
        name: "All tasks",
        url: "/",
        component: <Dashboard />
    },
    {
        id: 3,
        name: "Important task",
        url: "/important",
        component: <Important />
    }, 
    {
        id: 4,
        name: "Task done",
        url: "/completed"
    },
    {
        id: 5,
        name: "Uncomplete",
        url: "/uncompleted"
    }
];