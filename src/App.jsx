import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Maps from './pages/Maps';
import AFD from './pages/AFD';
import Login from './pages/Login';

// Projects
import FreeWifi from './pages/Projects/FreeWifi';
import ILCDB from './pages/Projects/ILCDB';
import EGov from './pages/Projects/EGov';
import Cybersecurity from './pages/Projects/Cybersecurity';
import GovNet from './pages/Projects/GovNet';
import ELGU from './pages/Projects/ELGU';
import IIDB from './pages/Projects/IIDB';
import NIPPSB from './pages/Projects/NIPPSB';

// Admin
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageProjects from './pages/Admin/ManageProjects';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageCarousel from './pages/Admin/ManageCarousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login (no main layout) */}
        <Route path="/login" element={<Login />} />

        {/* Admin routes (own layout) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><AdminDashboard /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><ManageProjects /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><ManageUsers /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/carousel"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><ManageCarousel /></AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Main portal routes */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/afd" element={<AFD />} />
                <Route path="/projects/free-wifi" element={<FreeWifi />} />
                <Route path="/projects/ilcdb" element={<ILCDB />} />
                <Route path="/projects/egov" element={<EGov />} />
                <Route path="/projects/cybersecurity" element={<Cybersecurity />} />
                <Route path="/projects/govnet" element={<GovNet />} />
                <Route path="/projects/elgu" element={<ELGU />} />
                <Route path="/projects/iidb" element={<IIDB />} />
                <Route path="/projects/nippsb" element={<NIPPSB />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

