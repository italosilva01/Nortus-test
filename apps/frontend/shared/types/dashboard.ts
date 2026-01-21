export interface KpiValue {
  valor: number;
  variacao: number;
}

export interface TrendData {
  name: string;
  data: number[];
}

export interface KpisTrend {
  labels: string[];
  arpuTrend: TrendData;
  conversionTrend: TrendData;
  churnTrend: TrendData;
  retentionTrend: TrendData;
}

export interface KpisResume {
  arpu: KpiValue;
  conversion: KpiValue;
  retention: KpiValue;
  churn: KpiValue;
}

export interface Segment {
  nome: string;
  valor: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  secureType: string;
  monthValue: number;
  status: string;
  renewalDate: string;
  location: string;
}

export interface ActiveClientsFilters {
  status: string[];
  secureType: string[];
  locations: string[];
}

export interface ActiveClients {
  filters: ActiveClientsFilters;
  data: Client[];
}

export interface DashboardData {
  kpisTrend: KpisTrend;
  kpisResume: KpisResume;
  segments: Segment[];
  activeClients: ActiveClients;
}

export interface DashboardFilters {
  status: string;
  secureType: string;
  location: string;
}

