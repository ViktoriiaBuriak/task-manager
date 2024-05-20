import { Suspense, lazy, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const TaskPage = lazy(() => import("../pages/TaskPage/TaskPage"));
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback="...loading">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/task"
              element={
                <PrivateRoute>
                  <TaskPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
