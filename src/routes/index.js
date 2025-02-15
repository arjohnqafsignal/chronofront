import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import Verify from "../pages/Authentication/Verify";
import ResetPassword from "../pages/Authentication/ResetPassword";

  // Dashboard
import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/verification/verify", component: Verify },
	{ path: "/password/reset", component: ResetPassword },
];

export { authProtectedRoutes, publicRoutes };
