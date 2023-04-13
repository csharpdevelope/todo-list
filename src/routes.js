import { Completed, Dashboard, Important, UnCompleted } from "./page";
import TodatTask from "./page/important/TodatTask";

export const routes = [
    {
        id: 1,
        name: "Today's task",
        url: "/today",
        component: <TodatTask />
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
        url: "/completed",
        component: <Completed />
    },
    {
        id: 5,
        name: "Unfinished tasks",
        url: "/uncompleted",
        component: <UnCompleted />
    }
];