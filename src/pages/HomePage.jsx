import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="card-stack">
      <h1>HomePage</h1>
      <p>欢迎来到前端骨架示例，你可以从这里进入聊天或详情页。</p>
      <div className="quick-links">
        <Link className="card-link" to="/chat">
          打开 ChatPage
        </Link>
        <Link className="card-link" to="/oracle/42">
          查看 Oracle #42
        </Link>
        <Link className="card-link" to="/supplier/7">
          查看 Supplier #7
        </Link>
      </div>
    </section>
  );
}
