export type SupplierCategory = 'finance' | 'technology' | 'general';

export interface Supplier {
  id: string;
  name: string;
  category: SupplierCategory;
  tags: string[];
  summary: string;
  supportedIntents: string[];
}

export interface OracleQuestion {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isToday: boolean;
  status: 'open' | 'resolved';
  supplierId: string;
}

export interface SourceReference {
  type: 'internal' | 'external';
  title: string;
  link: string;
  publishedAt: string;
}

export interface Methodology {
  framework: string;
  sampling: string;
  qualityControl: string;
}

export interface DeliveryContent {
  scenario: string;
  qa: {
    question: string;
    answer: string;
  };
  marketCopy: {
    headline: string;
    body: string;
    cta: string;
  };
  references: SourceReference[];
  methodology: Methodology;
}
