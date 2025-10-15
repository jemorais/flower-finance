/**
 * Utilitário para determinar cores de cards automaticamente
 * Regra: Positivo = Verde, Negativo = Vermelho
 */

export interface CardColorScheme {
  border: string;
  background: string;
  title: string;
  icon: string;
  value: string;
  text: string;
}

/**
 * Determina o esquema de cores baseado no valor e tendência
 * @param trend - Tendência em porcentagem (ex: "+15%", "-5%", "0%")
 * @param isPositiveMetric - Se true, valores maiores são bons (padrão: true)
 * @returns Esquema de cores para o card
 */
export function getCardColors(
  trend: string, 
  isPositiveMetric: boolean = true
): CardColorScheme {
  // Extrai o número da tendência (remove +, -, %)
  const trendValue = parseFloat(trend.replace(/[+%]/g, ''));
  
  // Determina se é positivo ou negativo
  const isPositive = isPositiveMetric ? trendValue > 0 : trendValue < 0;
  
  if (isPositive) {
    // Verde para valores positivos
    return {
      border: "border-l-green-400",
      background: "bg-green-50/50",
      title: "text-green-700",
      icon: "text-green-500",
      value: "text-green-800",
      text: "text-green-600"
    };
  } else {
    // Vermelho para valores negativos
    return {
      border: "border-l-red-400",
      background: "bg-red-50/50",
      title: "text-red-700",
      icon: "text-red-500",
      value: "text-red-800",
      text: "text-red-600"
    };
  }
}

/**
 * Esquemas de cores pré-definidos para casos especiais
 */
export const CARD_COLORS = {
  GREEN: {
    border: "border-l-green-400",
    background: "bg-green-50/50",
    title: "text-green-700",
    icon: "text-green-500",
    value: "text-green-800",
    text: "text-green-600"
  },
  RED: {
    border: "border-l-red-400",
    background: "bg-red-50/50",
    title: "text-red-700",
    icon: "text-red-500",
    value: "text-red-800",
    text: "text-red-600"
  },
  BLUE: {
    border: "border-l-blue-400",
    background: "bg-blue-50/50",
    title: "text-blue-700",
    icon: "text-blue-500",
    value: "text-blue-800",
    text: "text-blue-600"
  },
  PURPLE: {
    border: "border-l-purple-400",
    background: "bg-purple-50/50",
    title: "text-purple-700",
    icon: "text-purple-500",
    value: "text-purple-800",
    text: "text-purple-600"
  }
} as const;