import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import theme from "./theme";
import NotFound from "./pages/NotFound";
import StreamPage from "./pages/Stream";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/streams/:id",
        element: <StreamPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <main className="App">
            <CssBaseline />
            <RouterProvider router={router} />
        </main>
    </ThemeProvider>
);
