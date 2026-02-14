import { deliveries, oracleQuestions, suppliers } from './data';
import { withRandomDelay } from './delay';
import type { DeliveryContent, OracleQuestion, Supplier } from './types';

const sortByCreatedAtDesc = (items: OracleQuestion[]): OracleQuestion[] =>
  [...items].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

export const mockApi = {
  async getSuppliersByIntent(intent: string): Promise<Supplier[]> {
    return withRandomDelay(() =>
      suppliers.filter((supplier) => supplier.supportedIntents.includes(intent)),
    );
  },

  async getSupplierById(id: string): Promise<Supplier | null> {
    return withRandomDelay(() => suppliers.find((supplier) => supplier.id === id) ?? null);
  },

  async getOracleById(id: string): Promise<OracleQuestion | null> {
    return withRandomDelay(() => oracleQuestions.find((oracle) => oracle.id === id) ?? null);
  },

  async getOracleQuestions(options?: { onlyToday?: boolean }): Promise<OracleQuestion[]> {
    return withRandomDelay(() => {
      const filtered = options?.onlyToday
        ? oracleQuestions.filter((question) => question.isToday)
        : oracleQuestions;

      return sortByCreatedAtDesc(filtered);
    });
  },

  async getDeliveryByScenario(scenario: string): Promise<DeliveryContent | null> {
    return withRandomDelay(() => deliveries.find((delivery) => delivery.scenario === scenario) ?? null);
  },
};
