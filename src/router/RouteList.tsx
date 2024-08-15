import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import DashboardLayout from "../views/layout/DashboardLayout";
import Login from "../views/Login";
import React from "react";
import {PrivateRoute} from "./PrivateRoute";
import {isAuthenticated} from "../services/AuthenticationService";
import {role} from "../services/AuthenticationService";
import {AdminRoutes} from "./AdminRoutes";
import {CompanyRoutes} from "./CompanyRoutes";
import ForgotPassword from "../views/ForgotPassword";
import ResetPassword from "../views/ResetPassword";
import ResetPasswordLinkExpired from "../views/ResetPasswordLinkExpired";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/"  element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                    <DashboardLayout />
                </PrivateRoute>
            }>

                {role === 'admin' && (
                    AdminRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))
                )}

                {role === 'company' && (
                    CompanyRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))
                )}

            </Route>

             <Route path="/login"  element={
                isAuthenticated() ? <Navigate to="/companies" replace={true} /> : <Login />
            }/>

            {/* Forgot Password */}
            <Route path="/forgot-password"  element={<ForgotPassword />}/>
            {/* Forgot Password */}
            <Route path="/reset-password/:token"  element={<ResetPassword />}/>
            {/* Reset Password Link Expired*/}
            <Route path="/reset-password/expired"  element={<ResetPasswordLinkExpired />}/>
        </Routes>
    )
}

export default RouteList;