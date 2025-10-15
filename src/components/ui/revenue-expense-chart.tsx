'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { month: 'Jul', receitas: 5200, despesas: 3800 },
  { month: 'Ago', receitas: 5600, despesas: 4200 },
  { month: 'Set', receitas: 5400, despesas: 3900 },
  { month: 'Out', receitas: 6200, despesas: 4500 },
  { month: 'Nov', receitas: 5900, despesas: 4100 },
  { month: 'Dez', receitas: 6800, despesas: 5200 },
];

export function RevenueExpenseChart() {
  return (
    <div className="w-full">
      {/* Header com estilo padronizado */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Receitas vs. Despesas
            </h3>
            <p className="text-gray-500 mt-1 text-sm">
              Últimos 6 meses
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo do gráfico */}
      <div className="p-4">
        <div className="relative">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#e5e7eb"
              />
              <YAxis 
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                stroke="#e5e7eb"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value: number, name: string) => [
                  `R$ ${value.toLocaleString()}`,
                  name === 'receitas' ? 'Receitas' : 'Despesas'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="receitas" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="despesas" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}