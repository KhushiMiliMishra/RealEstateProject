import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

import DashboardPage from "../pages/agent/DashboardPage";
import PropertiesPage from "../pages/agent/PropertiesPage";
import PropertyFormPage from "../pages/agent/PropertyFormPage";
import LeadsPage from "../pages/agent/LeadsPage";
import AnalyticsPage from "../pages/agent/AnalyticsPage";
import ProfilePage from "../pages/agent/ProfilePage";

import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import ModerationPage from "../pages/admin/ModerationPage";
import AgentManagementPage from "../pages/admin/AgentManagementPage";
import PlatformAnalyticsPage from "../pages/admin/PlatformAnalyticsPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<LoginPage />} />

      {/* Agent Routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/properties/new" element={<PropertyFormPage />} />
      <Route path="/leads" element={<LeadsPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboardPage />}
      />

      <Route
        path="/admin/moderation"
        element={<ModerationPage />}
      />

      <Route
        path="/admin/agents"
        element={<AgentManagementPage />}
      />

      <Route
        path="/admin/analytics"
        element={<PlatformAnalyticsPage />}
      />
    </Routes>
  );
}