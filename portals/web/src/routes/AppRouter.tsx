import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import DepartmentSelectionPage from "../pages/Departments/DepartmentSelectionPage";
import { ROUTES } from "./routes";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />}/>
        <Route path={ROUTES.DEPARTMENTS} element={<DepartmentSelectionPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

