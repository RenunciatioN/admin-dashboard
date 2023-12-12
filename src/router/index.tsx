import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// import { KeysPage } from "pages/KeysPage";
// import { LogsPage } from "pages/LogsPage";
// import { SettingsPage } from "pages/SettingsPage";
// import { UsersPage } from "pages/UsersPage";
import LoginPage from "pages/LoginPage";
import { HomePage } from "pages/HomePage";
import { AuthProvider } from "providers/AuthProvider";
import { ErrorFallback } from "components/ErrorFallback";
import { NotFound } from "sсreens/404/NotFound";
import { routes } from "constants/routes.constants";

const KeysPage = lazy(() => import("pages/KeysPage"));
const LogsPage = lazy(() => import("pages/LogsPage"));
const SettingsPage = lazy(() => import("pages/SettingsPage"));
const UsersPage = lazy(() => import("pages/UsersPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <HomePage />
            </AuthProvider>
        ),
        errorElement: <ErrorFallback />,
    },
    {
        path: routes.users,
        element: (
            <AuthProvider>
                <Suspense>
                    <UsersPage />
                </Suspense>
            </AuthProvider>
        ),
        errorElement: <ErrorFallback />,
    },
    {
        path: routes.keys,
        element: (
            <AuthProvider>
                <Suspense>
                    <KeysPage />
                </Suspense>
            </AuthProvider>
        ),
        errorElement: <ErrorFallback />,
    },
    {
        path: routes.settings,
        element: (
            <AuthProvider>
                <Suspense>
                    <SettingsPage />
                </Suspense>
            </AuthProvider>
        ),
        errorElement: <ErrorFallback />,
    },
    {
        path: routes.logs,
        element: (
            <AuthProvider>
                <Suspense>
                    <LogsPage />
                </Suspense>
            </AuthProvider>
        ),
        errorElement: <ErrorFallback />,
    },
    {
        path: routes.login,
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
