// server.js - Backend do FocusBoard com SendGrid
// Instalar dependências: npm install express @sendgrid/mail cors dotenv

const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ========================================
// TEMPLATES DE EMAIL
// ========================================

const emailTemplates = {
  // Email de resumo diário
  dailySummary: (data) => ({
    subject: `📊 Seu resumo de ${data.date} - FocusBoard`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; color: white; }
          .header h1 { margin: 0; font-size: 28px; }
          .content { padding: 40px; }
          .stats { display: flex; justify-content: space-around; margin: 30px 0; }
          .stat { text-align: center; }
          .stat-value { font-size: 48px; font-weight: bold; color: #667eea; margin: 10px 0; }
          .stat-label { color: #666; font-size: 14px; text-transform: uppercase; }
          .tasks { background: #f9f9f9; padding: 20px; border-radius: 12px; margin: 20px 0; }
          .task { padding: 10px 0; border-bottom: 1px solid #eee; }
          .task:last-child { border-bottom: none; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .button { display: inline-block; padding: 14px 32px; background: #667eea; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 FocusBoard</h1>
            <p>Resumo do seu dia de produtividade</p>
          </div>
          
          <div class="content">
            <h2>Olá, ${data.userName}! 👋</h2>
            <p>Aqui está o resumo da sua produtividade em <strong>${data.date}</strong>:</p>
            
            <div class="stats">
              <div class="stat">
                <div class="stat-value">${data.sessions}</div>
                <div class="stat-label">Sessões</div>
              </div>
              <div class="stat">
                <div class="stat-value">${data.minutes}</div>
                <div class="stat-label">Minutos</div>
              </div>
              <div class="stat">
                <div class="stat-value">${data.tasksCompleted}</div>
                <div class="stat-label">Tarefas</div>
              </div>
            </div>
            
            ${data.tasks && data.tasks.length > 0 ? `
              <h3>✅ Tarefas Concluídas</h3>
              <div class="tasks">
                ${data.tasks.map(task => `<div class="task">✓ ${task}</div>`).join('')}
              </div>
            ` : ''}
            
            ${data.streak > 1 ? `
              <p style="text-align: center; font-size: 18px; margin: 30px 0;">
                🔥 Você está em um streak de <strong>${data.streak} dias</strong>! Continue assim!
              </p>
            ` : ''}
            
            <div style="text-align: center;">
              <a href="https://focusboard.app" class="button">Continuar Focando →</a>
            </div>
          </div>
          
          <div class="footer">
            <p>FocusBoard - Produtividade para devs remotos</p>
            <p>Você está recebendo este email porque ativou os resumos diários.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  // Email de conquista de streak
  streakMilestone: (data) => ({
    subject: `🔥 Incrível! ${data.streak} dias de streak no FocusBoard!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; text-align: center; padding: 60px 40px; }
          .emoji { font-size: 120px; margin: 20px 0; }
          h1 { color: #333; font-size: 36px; margin: 20px 0; }
          .streak-number { font-size: 72px; font-weight: bold; color: #ff6b6b; margin: 20px 0; }
          .button { display: inline-block; padding: 14px 32px; background: #ff6b6b; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="emoji">🎉</div>
          <h1>Conquista Desbloqueada!</h1>
          <p style="font-size: 18px; color: #666;">Você manteve o foco por</p>
          <div class="streak-number">${data.streak}</div>
          <p style="font-size: 24px; font-weight: bold; color: #333;">dias consecutivos! 🔥</p>
          <p style="color: #666; margin: 30px 0;">Continue nesse ritmo incrível! Cada dia conta.</p>
          <a href="https://focusboard.app" class="button">Ver Minhas Estatísticas →</a>
        </div>
      </body>
      </html>
    `
  }),

  // Email de boas-vindas
  welcome: (data) => ({
    subject: '🎉 Bem-vindo ao FocusBoard!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; color: white; }
          .content { padding: 40px; }
          .tip { background: #f0f4ff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
          .button { display: inline-block; padding: 14px 32px; background: #667eea; color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 Bem-vindo ao FocusBoard!</h1>
          </div>
          <div class="content">
            <h2>Olá, ${data.userName}! 👋</h2>
            <p>Estamos muito felizes em ter você conosco! O FocusBoard vai te ajudar a manter o foco e aumentar sua produtividade.</p>
            
            <h3>📚 Para começar:</h3>
            <div class="tip">
              <strong>1. Técnica Pomodoro:</strong> Trabalhe focado por 25 minutos, depois faça uma pausa de 5 minutos.
            </div>
            <div class="tip">
              <strong>2. Adicione Tarefas:</strong> Liste o que você precisa fazer hoje.
            </div>
            <div class="tip">
              <strong>3. Use Sons Ambientes:</strong> Escolha um som que te ajuda a concentrar.
            </div>
            
            <div style="text-align: center;">
              <a href="https://focusboard.app" class="button">Começar Agora →</a>
            </div>
            
            <p style="color: #666; margin-top: 30px;">Dica: Tente manter um streak diário para construir o hábito de produtividade!</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};

// ========================================
// ROTAS DA API
// ========================================

// Rota de teste
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'FocusBoard API está rodando!',
    endpoints: [
      'POST /api/enviar-resumo',
      'POST /api/enviar-streak',
      'POST /api/enviar-boas-vindas'
    ]
  });
});

// Enviar resumo diário
app.post('/api/enviar-resumo', async (req, res) => {
  try {
    const { email, userName, sessions, minutes, tasksCompleted, tasks, streak } = req.body;
    
    // Validação básica
    if (!email || !userName) {
      return res.status(400).json({ 
        error: 'Email e nome são obrigatórios' 
      });
    }
    
    const today = new Date().toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
    
    const template = emailTemplates.dailySummary({
      userName,
      date: today,
      sessions: sessions || 0,
      minutes: minutes || 0,
      tasksCompleted: tasksCompleted || 0,
      tasks: tasks || [],
      streak: streak || 0
    });
    
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL, // Email verificado no SendGrid
      subject: template.subject,
      html: template.html,
    };
    
    await sgMail.send(msg);
    
    res.json({ 
      success: true, 
      message: 'Email de resumo enviado com sucesso!' 
    });
    
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
});

// Enviar notificação de streak
app.post('/api/enviar-streak', async (req, res) => {
  try {
    const { email, userName, streak } = req.body;
    
    if (!email || !streak) {
      return res.status(400).json({ 
        error: 'Email e streak são obrigatórios' 
      });
    }
    
    const template = emailTemplates.streakMilestone({ streak });
    
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: template.subject,
      html: template.html,
    };
    
    await sgMail.send(msg);
    
    res.json({ 
      success: true, 
      message: 'Email de streak enviado!' 
    });
    
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
});

// Enviar boas-vindas
app.post('/api/enviar-boas-vindas', async (req, res) => {
  try {
    const { email, userName } = req.body;
    
    if (!email || !userName) {
      return res.status(400).json({ 
        error: 'Email e nome são obrigatórios' 
      });
    }
    
    const template = emailTemplates.welcome({ userName });
    
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,(blingservice@outlook.com)
      subject: template.subject,
      html: template.html,
    };
    
    await sgMail.send(msg);
    
    res.json({ 
      success: true, 
      message: 'Email de boas-vindas enviado!' 
    });
    
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
});

// ========================================
// INICIAR SERVIDOR
// ========================================

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📧 SendGrid configurado!`);
  console.log(`\nEndpoints disponíveis:`);
  console.log(`  GET  http://localhost:${PORT}/`);
  console.log(`  POST http://localhost:${PORT}/api/enviar-resumo`);
  console.log(`  POST http://localhost:${PORT}/api/enviar-streak`);
  console.log(`  POST http://localhost:${PORT}/api/enviar-boas-vindas`);
});

module.exports = app;