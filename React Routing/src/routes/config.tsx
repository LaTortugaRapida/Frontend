import { createBrowserRouter } from "react-router-dom";
import { UserList } from "../pages/UserList";
import { AddUser } from "../pages/AddUser";
import { EditUser } from "../pages/EditUser";
import { Layout } from "../pages/Layout";
import { NotFound } from "../pages/NotFound";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            { path: "", element: <UserList /> },
            { path: "add", element: <AddUser /> },
            { path: "users/edit/:id", element: <EditUser /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
