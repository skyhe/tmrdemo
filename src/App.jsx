import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import OracleDetailPage from './pages/OracleDetailPage';
import SupplierDetailPage from './pages/SupplierDetailPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/oracle/:id" element={<OracleDetailPage />} />
        <Route path="/supplier/:id" element={<SupplierDetailPage />} />
      </Routes>
    </Layout>
  );
}
