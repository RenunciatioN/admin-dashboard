import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import router from "./router";

const queryClient = new QueryClient();

const App: FC = () => {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>

            <Toaster />
        </div>
    );
};

export { App };
