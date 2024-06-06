const express = require('express');
const app = express();
const port = 4000;

// Configuração do middleware CORS no Express
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitações de qualquer origem
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
    next();
});

// Lista de palavras para "pão" em diversas línguas
const words = [
  "pão",       // Português
  "bread",     // Inglês
  "pan",       // Espanhol
  "pain",      // Francês
  "pane",      // Italiano
  "brot",      // Alemão
  "brood",     // Holandês
  "brød",      // Dinamarquês
  "chleb",     // Polonês
  "leipä",     // Finlandês
  "kenyér",    // Húngaro
  "pa",        // Albanês
  "ψωμί",      // Grego (psomí)
  "хлеб",      // Russo (khleb)
  "パン",       // Japonês (pan)
  "빵",        // Coreano (ppang)
  "naan",      // Hindi (नान)
  "roti",      // Indonésio/Malaio
  "khobz",     // Árabe (خبز)
  "paine",     // Romeno
  "bröd",      // Sueco
  "ekmek",     // Turco
  "lechem"     // Hebraico (לחם)
];

// Função para obter uma palavra aleatória
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

// Rota para obter uma palavra aleatória
app.get('/palavra-aleatoria', (req, res) => {
  const word = getRandomWord();
  res.json({ palavra: word });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
