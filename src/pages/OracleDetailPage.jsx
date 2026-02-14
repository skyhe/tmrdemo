import { useParams } from 'react-router-dom';

export default function OracleDetailPage() {
  const { id } = useParams();

  return (
    <section className="card-stack">
      <h1>OracleDetailPage</h1>
      <p>当前 Oracle ID：{id}</p>
    </section>
  );
}
