import { useParams } from 'react-router-dom';

export default function SupplierDetailPage() {
  const { id } = useParams();

  return (
    <section className="card-stack">
      <h1>SupplierDetailPage</h1>
      <p>当前 Supplier ID：{id}</p>
    </section>
  );
}
