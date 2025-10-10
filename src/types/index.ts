// Tipos de usuário e autenticação
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Tipos específicos para floricultura
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  cost: number;
  stock: number;
  description?: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  margin: number; // margem padrão da categoria
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  address: CustomerAddress;
  loyaltyPoints: number;
  totalSpent: number;
  registrationDate: Date;
  preferredContactMethod: 'whatsapp' | 'sms' | 'email';
  notes?: string;
  totalPurchases?: number;
  lastPurchase?: Date;
  preferences?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerAddress {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Sale {
  id: string;
  customerId?: string;
  customer?: Customer;
  items: SaleItem[];
  subtotal: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  status: SaleStatus;
  notes?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SaleItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  total: number;
}

export type PaymentMethod = 'cash' | 'card' | 'pix' | 'transfer';
export type SaleStatus = 'pending' | 'completed' | 'cancelled';

export interface SeasonalEvent {
  id: string;
  name: string;
  date: Date;
  type: 'romantic' | 'family' | 'religious' | 'celebration';
  description?: string;
  suggestedProducts: string[];
  promotionSuggestion?: string;
  expectedDemandIncrease: number;
  preparationDays: number;
  isActive: boolean;
  createdAt?: Date;
}

// Tipos de relatórios específicos para floricultura
export interface ProductReport {
  product: Product;
  totalSold: number;
  revenue: number;
  profit: number;
  margin: number;
}

export interface CategoryReport {
  category: ProductCategory;
  totalSold: number;
  revenue: number;
  profit: number;
  averageMargin: number;
  topProducts: ProductReport[];
}

export interface CustomerReport {
  customer: Customer;
  totalPurchases: number;
  totalSpent: number;
  averageTicket: number;
  lastPurchase: Date;
  loyaltyLevel: 'bronze' | 'silver' | 'gold' | 'diamond';
}

// Tipos de transações financeiras
export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  description: string;
  category: TransactionCategory;
  type: TransactionType;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type TransactionType = 'income' | 'expense';

export interface TransactionCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: TransactionType;
}

// Tipos de relatórios e dashboard
export interface DashboardData {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  monthlyData: MonthlyData[];
  recentTransactions: Transaction[];
  categoryBreakdown: CategoryBreakdown[];
}

export interface MonthlyData {
  month: string;
  income: number;
  expenses: number;
  balance: number;
}

export interface CategoryBreakdown {
  category: TransactionCategory;
  amount: number;
  percentage: number;
  transactionCount: number;
}

// Tipos de formulários
export interface TransactionFormData {
  amount: number;
  description: string;
  categoryId: string;
  type: TransactionType;
  date: Date;
}

export interface UserProfileFormData {
  name: string;
  email: string;
  avatar?: string;
}

// Tipos de configurações
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  budgetAlerts: boolean;
  monthlyReports: boolean;
}

// Tipos de API
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

// Tipos de componentes
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

// Tipos de hooks
export interface UseTransactionsReturn {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  addTransaction: (data: TransactionFormData) => Promise<void>;
  updateTransaction: (id: string, data: Partial<TransactionFormData>) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  updateProfile: (data: Partial<UserProfileFormData>) => Promise<void>;
}