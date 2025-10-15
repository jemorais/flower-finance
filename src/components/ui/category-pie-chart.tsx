'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';

const data = [
  { name: 'Rosas', value: 3200, color: '#ec4899' },
  { name: 'Orquídeas', value: 2800, color: '#8b5cf6' },
  { name: 'Arranjos para Eventos', value: 2400, color: '#06b6d4' },
  { name: 'Plantas Ornamentais', value: 1800, color: '#10b981' },
  { name: 'Suprimentos/Acessórios', value: 1200, color: '#f59e0b' },
  { name: 'Serviços de Jardinagem', value: 900, color: '#ef4444' },
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
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function CategoryPieChart() {
  return (
    <div className="w-full">
      {/* Header com estilo padronizado */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" />
              Categorias de Produtos
            </h3>
            <p className="text-gray-500 mt-1 text-sm">
              Distribuição de vendas por categoria
            </p>
          </div>
        </div>
      </div>
      
      {/* Conteúdo do gráfico */}
      <div className="p-4">
        <div className="flex items-center justify-center gap-6">
          {/* Legenda Esquerda */}
          <div className="flex flex-col gap-3 text-xs">
            {data.slice(0, 3).map((entry, index) => (
              <div key={`legend-left-${index}`} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div className="text-left">
                   <div className="text-gray-800 font-medium text-xs">{entry.name}</div>
                   <div className="text-gray-500 text-[10px]">R$ {entry.value.toLocaleString('pt-BR')}</div>
                 </div>
              </div>
            ))}
          </div>

          {/* Gráfico de Pizza - centralizado */}
          <div className="flex-shrink-0" style={{ width: '220px', height: '220px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
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
                  formatter={(value: number) => [`R$ ${value.toLocaleString()}`, 'Valor']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legenda Direita */}
          <div className="flex flex-col gap-3 text-xs">
            {data.slice(3, 6).map((entry, index) => (
              <div key={`legend-right-${index}`} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div className="text-left">
                   <div className="text-gray-800 font-medium text-xs">{entry.name}</div>
                   <div className="text-gray-500 text-[10px]">R$ {entry.value.toLocaleString('pt-BR')}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}