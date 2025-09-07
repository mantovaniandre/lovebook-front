# 💕 LoveBook Frontend

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-FF6D00?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

## 🌟 Sobre o Projeto

**LoveBook Frontend** é uma aplicação web elegante e intuitiva desenvolvida em Angular para uma plataforma especializada em livros românticos. A interface oferece uma experiência única de compra e descoberta de livros do gênero romance, conectando-se perfeitamente com a API backend para funcionalidades completas de e-commerce.

### 🔗 Backend Repository

Este projeto funciona em conjunto com o **LoveBook API**:
- 🎯 **Backend Repository**: [lovebook-api](https://github.com/mantovaniandre/lovebook-api)
- 🚀 **Tecnologias Backend**: Java, Spring Boot, MariaDB, JWT

## ⚡ Principais Funcionalidades

- 🏠 **Home Page**: Catálogo especializado em livros românticos
- 🔐 **Autenticação**: Sistema completo de login e registro
- 💕 **Livros Românticos**: Navegação otimizada por gênero romântico
- 🛒 **Carrinho de Compras**: Gestão intuitiva de itens selecionados
- 💳 **Sistema de Compras**: Finalização de pedidos streamlined
- 👤 **Minha Conta**: Gerenciamento de perfil personalizado
- 📝 **Meus Comentários**: Sistema de reviews e avaliações
- 🛍️ **Minhas Compras**: Histórico detalhado de pedidos
- 📚 **Cadastro de Livros**: Painel administrativo completo
- ✏️ **Edição de Livros**: Gerenciamento de catálogo
- 🔍 **Saiba Mais**: Detalhes aprofundados dos livros

## 🛠 Tecnologias Utilizadas

- **Framework**: Angular 12
- **Linguagem**: TypeScript 4.3
- **UI Framework**: Angular Material 13
- **Estilização**: Bootstrap 5, Bootstrap Icons
- **Navegação**: Syncfusion Angular Navigations
- **HTTP Client**: HttpClient nativo do Angular
- **State Management**: RxJS 6.6
- **Cookies**: ngx-cookie
- **Gestos**: HammerJS
- **Testes**: Jasmine, Karma

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js 14+ 
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/mantovaniandre/lovebook-front.git
cd lovebook-front/lovebook
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure a URL da API
Edite o arquivo de configuração para apontar para sua API backend:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api' // URL da sua API Spring Boot
};
```

### 4. Execute a aplicação
```bash
# Desenvolvimento
npm start
# ou
ng serve

# Build de produção
npm run build
# ou
ng build
```

A aplicação estará disponível em: `http://localhost:4200`

## 🏗 Arquitetura do Projeto

```
src/
├── app/
│   ├── dashboard/             # Painel administrativo
│   ├── edit-book/            # Edição de livros
│   ├── edition-books/        # Gestão de edições
│   ├── Guards/               # Proteção de rotas
│   ├── home/                 # Página inicial
│   ├── interceptors/         # Interceptadores HTTP
│   ├── know-more/            # Detalhes dos livros
│   ├── login/                # Autenticação
│   ├── models/               # Modelos TypeScript
│   ├── my-account/           # Perfil do usuário
│   ├── my-comments/          # Comentários do usuário
│   ├── my-shopping/          # Histórico de compras
│   ├── register-book/        # Cadastro de livros
│   ├── services/             # Serviços da aplicação
│   ├── shopping-cart/        # Carrinho de compras
│   ├── user-registration/    # Registro de usuários
│   ├── app.component.*       # Componente raiz
│   ├── app.module.ts        # Módulo principal
│   └── app.routing.ts       # Configuração de rotas
├── assets/                   # Recursos estáticos
├── environments/             # Configurações de ambiente
└── styles.css               # Estilos globais
```

## 🎨 Componentes Principais

### 🏠 **Home Component**
- Vitrine especializada em romance
- Navegação por categorias românticas
- Destaques e recomendações personalizadas

### 🛒 **Shopping Cart Component**
- Interface intuitiva de carrinho
- Cálculos em tempo real
- Integração com checkout

### 👤 **User Account Components**
- Perfil personalizado
- Preferências de leitura
- Histórico de atividades

### 📚 **Book Management**
- CRUD completo para administradores
- Upload de capas
- Gerenciamento de categorias românticas

### 💕 **Specialized Romance Features**
- Filtros por subgêneros românticos
- Recomendações baseadas em preferências
- Sistema de favoritos

## 🔧 Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Build e observar mudanças
npm run watch

# Análise de código
ng lint
```

## 🧪 Testando a Aplicação

### Executar Testes
```bash
# Testes unitários
npm test

# Testes em modo watch
ng test --watch

# Cobertura de testes
ng test --code-coverage
```

### Ambiente de Desenvolvimento
1. Inicie a API Spring Boot na porta 8080
2. Execute `npm start`
3. Acesse `http://localhost:4200`
4. Teste o fluxo completo de compra

## 🔒 Autenticação e Segurança

- **JWT Authentication**: Token-based authentication
- **Route Guards**: Proteção de rotas sensíveis
- **Interceptors**: Tratamento automático de headers
- **Session Management**: Gestão segura de sessões
- **Role-based Access**: Controle por perfil de usuário

## 📱 Design e UX

- **Material Design**: Componentes Angular Material
- **Responsive Layout**: Interface adaptável
- **Bootstrap Grid**: Sistema de grid flexível
- **Romance Theme**: Design temático para romance
- **Intuitive Navigation**: Navegação otimizada para descoberta

## 🚀 Deploy

### Build de Produção
```bash
ng build --prod
```

### Deploy na Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist/lovebook-frontnew
```

### Deploy no Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy no Firebase Hosting
```bash
npm install -g firebase-tools
ng add @angular/fire
ng deploy
```

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

**André Mantovani** - Desenvolvedor Full Stack

- 💼 [LinkedIn](https://linkedin.com/in/mantovaniandre)
- 📧 Email: andreluizdiasmantovani@gmail.com
- 🌐 Site: https://amantovani.netlify.app/
- 🐙 GitHub: [@mantovaniandre](https://github.com/mantovaniandre)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

### 🔗 Projetos Relacionados
- [LoveBook API](https://github.com/mantovaniandre/lovebook-api) - API REST Java/Spring Boot
- [BookWise Frontend](https://github.com/mantovaniandre/bookwise-frontend) - E-commerce Angular
- [BookWise Backend](https://github.com/mantovaniandre/bookwise-backend) - API Python/Flask
- [Outros projetos no meu perfil](https://github.com/mantovaniandre)

---
*Desenvolvido com ❤️ por [André Mantovani](https://github.com/mantovaniandre)*