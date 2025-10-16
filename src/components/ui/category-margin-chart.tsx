'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { BarChart3 } from 'lucide-react';

const data = [
  { name: 'Bouquês Premium', value: 68.5, revenue: 15600, color: '#10b981' },
  { name: 'Arranjos Decorativos', value: 45.2, revenue: 8900, color: '#3b82f6' },
  { name: 'Plantas e Vasos', value: 32.1, revenue: 8700, color: '#8b5cf6' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${percent.toFixed(1)}%`}
    </text>
  );
};

export function CategoryMarginChart() {
  return (
    <div className="w-full">
      {/* Header com estilo padronizado */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Margem por Categoria
            </h3>
            <p className="text-gray-500 mt-1 text-sm">
              Análise de rentabilidade por categoria
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo do gráfico */}
      <div className="p-4">
        <div className="flex items-center justify-center gap-6">
          {/* Legenda Esquerda */}
          <div className="flex flex-col gap-4 text-xs">
            {data.slice(0, 2).map((entry, index) => (
              <div key={`legend-left-${index}`} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div className="text-left">
                   <div className="text-gray-800 font-medium text-sm">{entry.name}</div>
                   <div className="text-gray-500 text-xs">Margem: {entry.value}%</div>
                   <div className="text-gray-600 text-xs font-medium">+R$ {entry.revenue.toLocaleString('pt-BR')}</div>
                 </div>
              </div>
            ))}
          </div>

          {/* Gráfico de Pizza - centralizado */}
          <div className="flex-shrink-0" style={{ width: '240px', height: '240px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  formatter={(value: number, name: string) => [
                    `${value}%`,
                    'Margem de Lucro'
                  ]}
                  labelFormatter={(label) => `Categoria: ${label}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legenda Direita */}
          <div className="flex flex-col gap-4 text-xs">
            {data.slice(2, 3).map((entry, index) => (
              <div key={`legend-right-${index}`} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div className="text-left">
                   <div className="text-gray-800 font-medium text-sm">{entry.name}</div>
                   <div className="text-gray-500 text-xs">Margem: {entry.value}%</div>
                   <div className="text-gray-600 text-xs font-medium">+R$ {entry.revenue.toLocaleString('pt-BR')}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Resumo estatístico */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-gray-900">
                {((data.reduce((acc, item) => acc + item.value, 0) / data.length)).toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Margem Média</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">
                R$ {data.reduce((acc, item) => acc + item.revenue, 0).toLocaleString('pt-BR')}
              </div>
              <div className="text-xs text-gray-500">Receita Total</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">
                {Math.max(...data.map(item => item.value)).toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Melhor Margem</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}