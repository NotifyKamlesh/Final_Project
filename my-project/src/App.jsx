import { Route, Routes } from "react-router-dom";
import Loginn from "./pages/Loginn";

import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import CSVReader from "./pages/CSVReader.jsx";

function App() {
  return (
    <main>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/upload" element={<CSVReader />} />
          </Route>
          <Route path="/login" element={<Loginn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
