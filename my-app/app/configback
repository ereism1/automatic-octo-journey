# ==========================================
# .env - Variáveis de Ambiente
# ==========================================
# IMPORTANTE: Nunca commite este arquivo no Git!
# Adicione .env no .gitignore

# SendGrid
SENDGRID_API_KEY=SG.sua-api-key-aqui
SENDGRID_FROM_EMAIL=noreply@seudominio.com

# Servidor
PORT=3001

# ==========================================
# .env.example - Modelo para outros devs
# ==========================================
# Copie para .env e preencha com seus valores

SENDGRID_API_KEY=sua_api_key_do_sendgrid
SENDGRID_FROM_EMAIL=seu-email-verificado@exemplo.com
PORT=3001

# ==========================================
# .gitignore
# ==========================================

# Dependências
node_modules/

# Variáveis de ambiente
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# ==========================================
# package.json
# ==========================================

{
  "name": "focusboard-backend",
  "version": "1.0.0",
  "description": "Backend do FocusBoard com integração SendGrid",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "node test-email.js"
  },
  "dependencies": {
    "@sendgrid/mail": "^7.7.0",
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

# ==========================================
# INSTRUÇÕES DE INSTALAÇÃO
# ==========================================

# 1. Criar pasta do projeto
mkdir focusboard-backend
cd focusboard-backend

# 2. Inicializar Node.js
npm init -y

# 3. Instalar dependências
npm install express @sendgrid/mail cors dotenv

# 4. Instalar nodemon (desenvolvimento)
npm install --save-dev nodemon

# 5. Criar arquivo .env
# Copie o conteúdo do .env.example acima

# 6. Criar arquivo server.js
# Copie o código do servidor

# 7. Rodar o servidor
npm start

# Ou em modo desenvolvimento (auto-reload):
npm run dev

# ==========================================
# COMANDOS ÚTEIS
# ==========================================

# Instalar tudo de uma vez:
npm install express @sendgrid/mail cors dotenv && npm install --save-dev nodemon

# Testar se está funcionando:
curl http://localhost:3001

# Ver logs em tempo real:
npm run dev