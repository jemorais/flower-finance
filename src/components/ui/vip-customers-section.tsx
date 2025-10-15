'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Calendar } from 'lucide-react';
import { mockCustomers } from '@/lib/mock-data/customers';
import { getVIPCustomers } from '@/lib/vip-classification';

export function VIPCustomersSection() {
  const vipCustomers = getVIPCustomers(mockCustomers);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="p-0">
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                Clientes VIP
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                {vipCustomers.length} cliente(s) com ticket médio R$ 200+ e compra recente
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {vipCustomers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Nenhum cliente VIP encontrado</p>
            <p className="text-sm mt-1">Critérios: Ticket médio R$ 200+ e compra nos últimos 3 meses</p>
          </div>
        ) : (
          <div className="space-y-4">
            {vipCustomers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {customer.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{customer.name}</p>
                      <Badge className="bg-yellow-500 text-white text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        VIP
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Ticket: {formatCurrency(customer.vipStatus.averageTicket)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {getDaysAgo(customer.lastPurchaseDate)} dias atrás
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-700">{formatCurrency(customer.totalSpent)}</p>
                  <p className="text-sm text-gray-600">{customer.orderCount} pedidos</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}