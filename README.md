# Flower Finance 🌸

Sistema moderno de gestão financeira desenvolvido especialmente para floriculturas. O Flower Finance oferece controle completo das finanças do seu negócio com uma interface intuitiva e recursos específicos para o setor floricultor.

## 🚀 Tecnologias

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Componentes**: shadcn/ui (estilo New York)
- **Formulários**: React Hook Form + Zod
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **Backend**: Firebase (Auth + Firestore)
- **Linting**: Biome

## 📁 Estrutura do Projeto

```
flower-finance/
├── src/
│   ├── app/                 # App Router (Next.js 15)
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página inicial
│   ├── components/         # Componentes reutilizáveis
│   │   └── ui/            # Componentes shadcn/ui
│   ├── lib/               # Utilitários e configurações
│   │   ├── mock-data/     # Dados de exemplo
│   │   ├── security/      # Configurações de segurança
│   │   └── utils.ts       # Funções utilitárias
│   └── hooks/             # Custom hooks
├── public/                # Arquivos estáticos
├── docs/                  # Documentação
└── components.json        # Configuração shadcn/ui
```

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Linting e formatação
npm run lint
npm run format
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🎯 Funcionalidades Planejadas

### ✅ Implementado
- Configuração base do projeto
- Setup de ferramentas de desenvolvimento
- Estrutura de pastas

### 🚧 Em Desenvolvimento
- Sistema de autenticação
- Dashboard principal
- Gestão de transações

### 📋 Próximas Etapas
- Relatórios e gráficos
- Categorização automática
- Metas financeiras
- Exportação de dados

## 🔒 Segurança

- Validação de inputs com Zod
- Proteção CSRF nativa do Next.js
- Autenticação segura via Firebase Auth
- Headers de segurança configurados
- Sanitização de dados

## 📱 Responsividade

Interface otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
