// Sistema de Notificações - WhatsApp/SMS
// Este arquivo contém as funções para envio de notificações automáticas

export interface NotificationConfig {
  whatsappApiKey?: string;
  smsApiKey?: string;
  whatsappNumber?: string;
  enableWhatsApp: boolean;
  enableSMS: boolean;
}

export interface NotificationMessage {
  to: string;
  message: string;
  type: 'whatsapp' | 'sms';
  template?: 'birthday' | 'promotion' | 'reminder' | 'custom';
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  birthDate: Date;
  loyaltyPoints: number;
}

// Templates de mensagens
export const messageTemplates = {
  birthday: (customerName: string, loyaltyPoints: number) => 
    `🎉 Feliz Aniversário, ${customerName}! 🌸\n\nA Flower Finance deseja um dia especial para você! Como presente, você ganhou 50 pontos extras na sua conta de fidelidade.\n\nSeus pontos atuais: ${loyaltyPoints + 50}\n\nVenha nos visitar e escolha suas flores favoritas! 💐`,
  
  promotion: (customerName: string, promotionDetails: string) =>
    `🌺 Olá ${customerName}!\n\nTemos uma promoção especial para você: ${promotionDetails}\n\nAproveite esta oferta exclusiva na Flower Finance! 🌸\n\nVálido até o final da semana.`,
  
  reminder: (customerName: string, eventName: string, daysUntil: number) =>
    `🌹 Lembrete especial, ${customerName}!\n\n${eventName} está chegando em ${daysUntil} dias! Não esqueça de preparar um presente especial.\n\nA Flower Finance tem as melhores opções para você! 💐`,
  
  loyaltyReward: (customerName: string, points: number, discount: number) =>
    `⭐ Parabéns ${customerName}!\n\nVocê acumulou ${points} pontos de fidelidade e ganhou R$ ${discount} de desconto na sua próxima compra!\n\nVenha resgatar na Flower Finance! 🌸`
};

// Simulação de API do WhatsApp (Twilio, etc.)
export class WhatsAppService {
  private apiKey: string;
  private fromNumber: string;

  constructor(apiKey: string, fromNumber: string) {
    this.apiKey = apiKey;
    this.fromNumber = fromNumber;
  }

  async sendMessage(to: string, message: string): Promise<boolean> {
    try {
      // Simulação de envio via API do WhatsApp
      console.log('📱 Enviando WhatsApp para:', to);
      console.log('📝 Mensagem:', message);
      
      // Em produção, aqui seria a chamada real para a API
      // const response = await fetch('https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: new URLSearchParams({
      //     From: `whatsapp:${this.fromNumber}`,
      //     To: `whatsapp:${to}`,
      //     Body: message,
      //   }),
      // });
      
      // Simulação de sucesso
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      console.error('Erro ao enviar WhatsApp:', error);
      return false;
    }
  }
}

// Simulação de API de SMS
export class SMSService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendSMS(to: string, message: string): Promise<boolean> {
    try {
      // Simulação de envio via API de SMS
      console.log('📱 Enviando SMS para:', to);
      console.log('📝 Mensagem:', message);
      
      // Em produção, aqui seria a chamada real para a API
      // const response = await fetch('https://api.sms-provider.com/send', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${this.apiKey}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     to: to,
      //     message: message,
      //   }),
      // });
      
      // Simulação de sucesso
      await new Promise(resolve => setTimeout(resolve, 800));
      return true;
    } catch (error) {
      console.error('Erro ao enviar SMS:', error);
      return false;
    }
  }
}

// Classe principal do sistema de notificações
export class NotificationService {
  private whatsappService?: WhatsAppService;
  private smsService?: SMSService;
  private config: NotificationConfig;

  constructor(config: NotificationConfig) {
    this.config = config;
    
    if (config.enableWhatsApp && config.whatsappApiKey && config.whatsappNumber) {
      this.whatsappService = new WhatsAppService(config.whatsappApiKey, config.whatsappNumber);
    }
    
    if (config.enableSMS && config.smsApiKey) {
      this.smsService = new SMSService(config.smsApiKey);
    }
  }

  async sendNotification(notification: NotificationMessage): Promise<boolean> {
    try {
      if (notification.type === 'whatsapp' && this.whatsappService) {
        return await this.whatsappService.sendMessage(notification.to, notification.message);
      } else if (notification.type === 'sms' && this.smsService) {
        return await this.smsService.sendSMS(notification.to, notification.message);
      }
      return false;
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
      return false;
    }
  }

  // Enviar mensagem de aniversário
  async sendBirthdayMessage(customer: Customer, preferredMethod: 'whatsapp' | 'sms' = 'whatsapp'): Promise<boolean> {
    const message = messageTemplates.birthday(customer.name, customer.loyaltyPoints);
    
    return await this.sendNotification({
      to: customer.phone,
      message,
      type: preferredMethod,
      template: 'birthday'
    });
  }

  // Enviar promoção personalizada
  async sendPromotionMessage(customer: Customer, promotionDetails: string, preferredMethod: 'whatsapp' | 'sms' = 'whatsapp'): Promise<boolean> {
    const message = messageTemplates.promotion(customer.name, promotionDetails);
    
    return await this.sendNotification({
      to: customer.phone,
      message,
      type: preferredMethod,
      template: 'promotion'
    });
  }

  // Enviar lembrete de evento sazonal
  async sendSeasonalReminder(customer: Customer, eventName: string, daysUntil: number, preferredMethod: 'whatsapp' | 'sms' = 'whatsapp'): Promise<boolean> {
    const message = messageTemplates.reminder(customer.name, eventName, daysUntil);
    
    return await this.sendNotification({
      to: customer.phone,
      message,
      type: preferredMethod,
      template: 'reminder'
    });
  }

  // Enviar notificação de pontos de fidelidade
  async sendLoyaltyReward(customer: Customer, discount: number, preferredMethod: 'whatsapp' | 'sms' = 'whatsapp'): Promise<boolean> {
    const message = messageTemplates.loyaltyReward(customer.name, customer.loyaltyPoints, discount);
    
    return await this.sendNotification({
      to: customer.phone,
      message,
      type: preferredMethod,
      template: 'custom'
    });
  }
}

// Função para verificar aniversários do dia e enviar mensagens
export async function checkAndSendBirthdayMessages(customers: Customer[], notificationService: NotificationService): Promise<void> {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const birthdayCustomers = customers.filter(customer => {
    const birthDate = new Date(customer.birthDate);
    return birthDate.getMonth() === todayMonth && birthDate.getDate() === todayDay;
  });

  console.log(`🎂 Encontrados ${birthdayCustomers.length} aniversariantes hoje`);

  for (const customer of birthdayCustomers) {
    try {
      const success = await notificationService.sendBirthdayMessage(customer);
      if (success) {
        console.log(`✅ Mensagem de aniversário enviada para ${customer.name}`);
      } else {
        console.log(`❌ Falha ao enviar mensagem para ${customer.name}`);
      }
    } catch (error) {
      console.error(`Erro ao processar aniversário de ${customer.name}:`, error);
    }
  }
}

// Função para verificar eventos sazonais próximos
export async function checkSeasonalEvents(customers: Customer[], notificationService: NotificationService): Promise<void> {
  const today = new Date();
  const seasonalEvents = [
    { name: 'Dia dos Namorados', date: new Date(today.getFullYear(), 1, 14) }, // 14 de fevereiro
    { name: 'Dia das Mulheres', date: new Date(today.getFullYear(), 2, 8) }, // 8 de março
    { name: 'Páscoa', date: new Date(today.getFullYear(), 3, 9) }, // Aproximado
    { name: 'Dia das Mães', date: new Date(today.getFullYear(), 4, 14) }, // Segunda domingo de maio
    { name: 'Dia dos Pais', date: new Date(today.getFullYear(), 7, 13) }, // Segunda domingo de agosto
    { name: 'Natal', date: new Date(today.getFullYear(), 11, 25) } // 25 de dezembro
  ];

  for (const event of seasonalEvents) {
    const daysUntil = Math.ceil((event.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Enviar lembrete 7 dias antes do evento
    if (daysUntil === 7) {
      console.log(`📅 Enviando lembretes para ${event.name} (${daysUntil} dias)`);
      
      // Enviar para clientes VIP (mais de R$ 2000 gastos)
      const vipCustomers = customers.filter(c => c.loyaltyPoints > 200);
      
      for (const customer of vipCustomers) {
        try {
          await notificationService.sendSeasonalReminder(customer, event.name, daysUntil);
          console.log(`✅ Lembrete de ${event.name} enviado para ${customer.name}`);
        } catch (error) {
          console.error(`Erro ao enviar lembrete para ${customer.name}:`, error);
        }
      }
    }
  }
}

// Configuração padrão para desenvolvimento/teste
export const defaultNotificationConfig: NotificationConfig = {
  enableWhatsApp: true,
  enableSMS: true,
  whatsappApiKey: process.env.WHATSAPP_API_KEY || 'demo-key',
  smsApiKey: process.env.SMS_API_KEY || 'demo-key',
  whatsappNumber: process.env.WHATSAPP_NUMBER || '+5511999999999'
};

// Instância padrão do serviço
export const notificationService = new NotificationService(defaultNotificationConfig);