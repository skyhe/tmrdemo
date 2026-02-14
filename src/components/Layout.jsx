import { Link, useLocation, useNavigate } from 'react-router-dom';

const mockBalance = 128.4;

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="nav-left">
          {!isHome ? (
            <button className="back-btn" type="button" onClick={() => navigate(-1)}>
              ← 返回
            </button>
          ) : (
            <span className="brand">TMR Demo</span>
          )}
        </div>

        <nav className="nav-links">
          <Link to="/">首页</Link>
          <Link to="/chat">对话</Link>
        </nav>

        <div className="balance">余额：{mockBalance.toFixed(2)} TMR</div>
      </header>

      <main className="responsive-container">{children}</main>
    </div>
  );
}
