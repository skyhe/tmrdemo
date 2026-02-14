import { useEffect, useState } from 'react';
import { mockApi } from '../mock/mockApi';
import type { DeliveryContent, OracleQuestion, Supplier } from '../mock/types';

interface OracleDashboardState {
  todayQuestions: OracleQuestion[];
  selectedSupplier: Supplier | null;
  delivery: DeliveryContent | null;
}

export const OracleDashboard = (): JSX.Element => {
  const [state, setState] = useState<OracleDashboardState>({
    todayQuestions: [],
    selectedSupplier: null,
    delivery: null,
  });

  useEffect(() => {
    const load = async () => {
      const [todayQuestions, selectedSupplier, delivery] = await Promise.all([
        mockApi.getOracleQuestions({ onlyToday: true }),
        mockApi.getSupplierById('sup-tech-vertex'),
        mockApi.getDeliveryByScenario('oracle_support'),
      ]);

      setState({ todayQuestions, selectedSupplier, delivery });
    };

    void load();
  }, []);

  return (
    <section>
      <h2>Oracle Dashboard</h2>
      <p>今日问题数：{state.todayQuestions.length}</p>
      <p>默认供应商：{state.selectedSupplier?.name ?? '暂无'}</p>
      <p>交付场景：{state.delivery?.scenario ?? '暂无'}</p>
    </section>
  );
};
