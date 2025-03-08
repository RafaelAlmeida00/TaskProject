// src/routes.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Loading from "./components/loading/load";
import AuthMiddleware from "./config/auth/authmiddlware";

const AuthPage = lazy(() => import("./pages/auth/auth"));
const ErrorPage = lazy(() => import("./pages/error/error"));
const NotFoundPage = lazy(() => import("./pages/notfound/notfound"));
const SystemIndex = lazy(() => import("./pages/system/index"));

const RoutesComponent = () => {
  return (
    <Router>
      <AuthMiddleware>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/system/*" element={<SystemIndex />}>
            </Route>
          </Routes>
        </Suspense>
      </AuthMiddleware>
    </Router>
  );
};

export default RoutesComponent;
