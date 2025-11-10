// test-email.js - Script para testar o envio de emails
// Execute: node test-email.js

const axios = require('axios');

const API_URL = 'http://localhost:3001';

// ==========================================
// FUNÇÕES DE TESTE
// ==========================================

async function testarResumo() {
  console.log('\n📊 Testando envio de resumo diário...\n');
  
  try {
    const response = await axios.post(`${API_URL}/api/enviar-resumo`, {
      email: 'seu-email@exemplo.com', // ⚠️ ALTERE PARA SEU EMAIL!
      userName: 'João Developer',
      sessions: 8,
      minutes: 200,
      tasksCompleted: 5,
      tasks: [
        'Implementar autenticação',
        'Corrigir bugs no frontend',
        'Revisar PRs da equipe',
        'Documentar API',
        'Meeting com cliente'
      ],
      streak: 7
    });
    
    console.log('✅ Sucesso:', response.data.message);
  } catch (error) {
    console.error('❌ Erro:', error.response?.data || error.message);
  }
}

async function testarStreak() {
  console.log('\n🔥 Testando notificação de streak...\n');
  
  try {
    const response = await axios.post(`${API_URL}/api/enviar-streak`, {
      email: 'seu-email@exemplo.com', // ⚠️ ALTERE PARA SEU EMAIL!
      userName: 'João Developer',
      streak: 30
    });
    
    console.log('✅ Sucesso:', response.data.message);
  } catch (error) {
    console.error('❌ Erro:', error.response?.data || error.message);
  }
}

async function testarBoasVindas() {
  console.log('\n👋 Testando email de boas-vindas...\n');
  
  try {
    const response = await axios.post(`${API_URL}/api/enviar-boas-vindas`, {
      email: 'seu-email@exemplo.com', // ⚠️ ALTERE PARA SEU EMAIL!
      userName: 'João Developer'
    });
    
    console.log('✅ Sucesso:', response.data.message);
  } catch (error) {
    console.error('❌ Erro:', error.response?.data || error.message);
  }
}

async function verificarServidor() {
  console.log('\n🔍 Verificando se o servidor está rodando...\n');
  
  try {
    const response = await axios.get(API_URL);
    console.log('✅ Servidor OK:', response.data.message);
    console.log('📡 Endpoints disponíveis:', response.data.endpoints);
    return true;
  } catch (error) {
    console.error('❌ Servidor não está rodando!');
    console.error('💡 Execute: npm start');
    return false;
  }
}

// ==========================================
// TESTE CURL (alternativa sem axios)
// ==========================================

function mostrarComandosCurl() {
  console.log('\n📝 COMANDOS CURL PARA TESTAR (copie e cole no terminal):\n');
  
  console.log('1️⃣ Testar resumo diário:');
  console.log(`
curl -X POST http://localhost:3001/api/enviar-resumo \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "seu-email@exemplo.com",
    "userName": "Seu Nome",
    "sessions": 8,
    "minutes": 200,
    "tasksCompleted": 5,
    "tasks": ["Task 1", "Task 2"],
    "streak": 7
  }'
  `);
  
  console.log('\n2️⃣ Testar notificação de streak:');
  console.log(`
curl -X POST http://localhost:3001/api/enviar-streak \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "seu-email@exemplo.com",
    "userName": "Seu Nome",
    "streak": 30
  }'
  `);
  
  console.log('\n3️⃣ Testar boas-vindas:');
  console.log(`
curl -X POST http://localhost:3001/api/enviar-boas-vindas \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "seu-email@exemplo.com",
    "userName": "Seu Nome"
  }'
  `);
}

// ==========================================
// EXECUTAR TESTES
// ==========================================

async function executarTodos() {
  console.log('╔════════════════════════════════════════╗');
  console.log('║   🧪 TESTES DO FOCUSBOARD BACKEND      ║');
  console.log('╚════════════════════════════════════════╝');
  
  const servidorOK = await verificarServidor();
  
  if (!servidorOK) {
    console.log('\n❌ Servidor não está disponível. Inicie-o primeiro!');
    return;
  }
  
  console.log('\n⚠️  IMPORTANTE: Altere o email nos testes para o seu!');
  console.log('Pressione CTRL+C para cancelar ou aguarde 3 segundos...\n');
  
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await testarBoasVindas();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await testarResumo();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await testarStreak();
  
  console.log('\n✅ Testes concluídos! Verifique sua caixa de entrada.');
  console.log('📧 Não esqueça de checar a pasta de SPAM também!\n');
}

// ==========================================
// MENU INTERATIVO
// ==========================================

function mostrarMenu() {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║      📧 MENU DE TESTES - EMAILS        ║');
  console.log('╚════════════════════════════════════════╝\n');
  console.log('1 - Testar TODOS os emails');
  console.log('2 - Testar apenas resumo diário');
  console.log('3 - Testar apenas notificação de streak');
  console.log('4 - Testar apenas boas-vindas');
  console.log('5 - Verificar servidor');
  console.log('6 - Mostrar comandos CURL');
  console.log('0 - Sair\n');
}

// Verificar se tem argumentos
const args = process.argv.slice(2);

if (args.length === 0) {
  // Executar todos os testes se não passar argumentos
  executarTodos().catch(console.error);
} else {
  // Executar teste específico
  const comando = args[0];
  
  switch(comando) {
    case 'resumo':
      testarResumo();
      break;
    case 'streak':
      testarStreak();
      break;
    case 'boas-vindas':
      testarBoasVindas();
      break;
    case 'verificar':
      verificarServidor();
      break;
    case 'curl':
      mostrarComandosCurl();
      break;
    default:
      console.log('❌ Comando inválido!');
      console.log('Use: node test-email.js [resumo|streak|boas-vindas|verificar|curl]');
      console.log('Ou execute sem argumentos para testar tudo.');
  }
}

// ==========================================
// INSTRUÇÕES DE USO
// ==========================================

/*
COMO USAR ESTE SCRIPT:

1. Instalar axios (se ainda não tiver):
   npm install axios

2. Executar todos os testes:
   node test-email.js

3. Executar teste específico:
   node test-email.js resumo
   node test-email.js streak
   node test-email.js boas-vindas
   node test-email.js verificar
   node test-email.js curl

4. ANTES DE EXECUTAR:
   - ⚠️ Altere 'seu-email@exemplo.com' para seu email real
   - Certifique-se que o servidor está rodando (npm start)
   - Verifique se o .env está configurado corretamente

5. TROUBLESHOOTING:
   - Erro de conexão? → Verifique se o servidor está rodando
   - Email não chegou? → Verifique spam e API key do SendGrid
   - Erro 400? → Verifique os campos obrigatórios
*/