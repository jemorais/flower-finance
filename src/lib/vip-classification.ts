// Sistema de Classificação VIP
// Critérios: Ticket médio R$ 200+ E compra nos últimos 3 meses

export interface CustomerData {
  id: string;
  name: string;
  totalSpent: number;
  orderCount: number;
  lastPurchaseDate: string;
}

export interface VIPStatus {
  isVIP: boolean;
  averageTicket: number;
  daysSinceLastPurchase: number;
  totalSpent: number;
  orderCount: number;
}

/**
 * Calcula se um cliente é VIP baseado nos critérios definidos
 * @param customer Dados do cliente
 * @returns Status VIP do cliente
 */
export function calculateVIPStatus(customer: CustomerData): VIPStatus {
  const averageTicket = customer.orderCount > 0 ? customer.totalSpent / customer.orderCount : 0;
  const lastPurchase = new Date(customer.lastPurchaseDate);
  const today = new Date();
  const daysSinceLastPurchase = Math.floor((today.getTime() - lastPurchase.getTime()) / (1000 * 60 * 60 * 24));
  
  // Critérios VIP:
  // 1. Ticket médio >= R$ 200
  // 2. Compra nos últimos 90 dias (3 meses)
  const hasMinimumTicket = averageTicket >= 200;
  const isRecentCustomer = daysSinceLastPurchase <= 90;
  
  const isVIP = hasMinimumTicket && isRecentCustomer;
  
  return {
    isVIP,
    averageTicket,
    daysSinceLastPurchase,
    totalSpent: customer.totalSpent,
    orderCount: customer.orderCount
  };
}

/**
 * Filtra apenas clientes VIP de uma lista
 * @param customers Lista de clientes
 * @returns Lista apenas com clientes VIP
 */
export function getVIPCustomers(customers: CustomerData[]): (CustomerData & { vipStatus: VIPStatus })[] {
  return customers
    .map(customer => ({
      ...customer,
      vipStatus: calculateVIPStatus(customer)
    }))
    .filter(customer => customer.vipStatus.isVIP);
}

/**
 * Conta quantos clientes VIP existem
 * @param customers Lista de clientes
 * @returns Número de clientes VIP
 */
export function countVIPCustomers(customers: CustomerData[]): number {
  return customers.filter(customer => calculateVIPStatus(customer).isVIP).length;
}

/**
 * Calcula estatísticas dos clientes VIP
 * @param customers Lista de clientes
 * @returns Estatísticas dos clientes VIP
 */
export function getVIPStatistics(customers: CustomerData[]) {
  const vipCustomers = getVIPCustomers(customers);
  const totalVIPs = vipCustomers.length;
  
  if (totalVIPs === 0) {
    return {
      totalVIPs: 0,
      averageVIPTicket: 0,
      totalVIPRevenue: 0,
      vipPercentage: 0
    };
  }
  
  const totalVIPRevenue = vipCustomers.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const averageVIPTicket = vipCustomers.reduce((sum, customer) => sum + customer.vipStatus.averageTicket, 0) / totalVIPs;
  const vipPercentage = (totalVIPs / customers.length) * 100;
  
  return {
    totalVIPs,
    averageVIPTicket: Math.round(averageVIPTicket),
    totalVIPRevenue,
    vipPercentage: Math.round(vipPercentage * 10) / 10
  };
}