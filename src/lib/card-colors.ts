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
  PINK: {
    border: "border-l-pink-400",
    background: "bg-pink-50/50",
    title: "text-pink-700",
    icon: "text-pink-500",
    value: "text-pink-800",
    text: "text-pink-600"
  },
  PURPLE: {
    border: "border-l-purple-400",
    background: "bg-purple-50/50",
    title: "text-purple-700",
    icon: "text-purple-500",
    value: "text-purple-800",
    text: "text-purple-600"
  },
  MAGENTA: {
    border: "border-l-fuchsia-400",
    background: "bg-fuchsia-50/50",
    title: "text-fuchsia-700",
    icon: "text-fuchsia-500",
    value: "text-fuchsia-800",
    text: "text-fuchsia-600"
  },
  ROSE: {
    border: "border-l-rose-400",
    background: "bg-rose-50/50",
    title: "text-rose-700",
    icon: "text-rose-500",
    value: "text-rose-800",
    text: "text-rose-600"
  },
  PINK_ALT: {
    border: "border-l-pink-400",
    background: "bg-pink-50/50",
    title: "text-pink-700",
    icon: "text-pink-500",
    value: "text-pink-800",
    text: "text-pink-600"
  },
  RED: {
    border: "border-l-red-400",
    background: "bg-red-50/50",
    title: "text-red-700",
    icon: "text-red-500",
    value: "text-red-800",
    text: "text-red-600"
  },
  ORANGE: {
    border: "border-l-orange-400",
    background: "bg-orange-50/50",
    title: "text-orange-700",
    icon: "text-orange-500",
    value: "text-orange-800",
    text: "text-orange-600"
  },
  YELLOW: {
    border: "border-l-yellow-400",
    background: "bg-yellow-50/50",
    title: "text-yellow-700",
    icon: "text-yellow-500",
    value: "text-yellow-800",
    text: "text-yellow-600"
  },
  PINK_VARIANT: {
    border: "border-l-pink-400",
    background: "bg-pink-50/50",
    title: "text-pink-700",
    icon: "text-pink-500",
    value: "text-pink-800",
    text: "text-pink-600"
  }
} as const;