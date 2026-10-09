# 🚀 Deploy do BOT GAME CUSTOM (Pacote PRONTO)

Este diretório contém o **bundle.js** que junta TODOS os arquivos do bot em **UM ÚNICO arquivo JS** para você hospedar facilmente!

## 📦 Arquivos do pacote

- **bundle.js** → o BOT TODO em 1 arquivo (contém: index.js + database.js + commands/* + events/* + games/* + lib/* + deploy-commands)
- **package.json** → dependências mínimas (discord.js / sql.js / dotenv)
- **discloud.config** → configuração para hospedar na Discloud (512MB RAM, auto restart)
- **Procfile** → deploy no Render / Railway / Heroku (worker)
- **render.yaml** → serviço pronto para Render
- **.env.example** → modelo das variáveis que precisa preencher
- **.gitignore** → ignora .env e database.db (não suba ao GitHub!)

## 🛠️ Como usar (passo a passo)

### Opção A) Discloud (host pago/grátis para bots)

1. Crie conta em https://discloudbot.com
2. Edite o arquivo **discloud.config** e cole o seu ID na linha `ID=` (e NAME se quiser mudar)
3. Crie um arquivo **.env** nesta pasta com:
   ```
   DISCORD_TOKEN=seu_token_aqui
   CLIENT_ID=1557819845591175291
   GUILD_ID=1540306960795312229
   GUILD_ID_2=1331027702857072791
   NODE_OPTIONS=--max-old-space-size=448
   ```
4. ZIPPE **TUDO** desta pasta (bundle.js + package.json + discloud.config + .env + Procfile...)
5. Envie o ZIP no painel da Discloud
6. Pronto! O bot vai ligar.

### Opção B) Render (grátis com limitação)

1. Crie conta em https://render.com
2. Crie **New → Web Service** (ou Private Worker)
3. Conecte um repositório só com os arquivos desta pasta
4. Environment Variables cole as mesmas do .env: `DISCORD_TOKEN, CLIENT_ID, GUILD_ID, GUILD_ID_2, NODE_OPTIONS=--max-old-space-size=448`
5. Build Command: `npm install`
6. Start Command: `npm start` (ele roda `node bundle.js`)
7. Deploy

### Opção C) Rodar local

1. Cole o .env com as variáveis na pasta `DEPLOY_BOT_PRONTO`
2. `npm install`
3. `npm start` (vai rodar `node bundle.js`)

## 🔑 Informações fixas do BOT

- **Nome:** GAME CUSTOM#2881
- **Client ID:** 1557819845591175291
- **Convidar (com permissões):** https://discord.com/api/oauth2/authorize?client_id=1557819845591175291&permissions=8&scope=bot%20applications.commands
- **2 Servidores:** Comunidade ktx 1540306960795312229 / Mecânica Blue Custom 1331027702857072791

## 🎮 Comandos do bot (11)

```
/ajuda
/gp saldo | doar
/perfil ver | criar nome: | editar nome:
/config rankingcanal set/off | paineljogos set/off | cargosniveis on/off set remover listar novato canalparabens
/paineljogos canal:#opcional
/jogos listar | externos | jogar | rank | cancelar
/loja
/addgp usuario:@ quantidade:GP
/rankjogo jogo:GERAL|jogo
/conquistas
/rivalidade usuario:@
```

## ⚠️ Avisos

1. **NÃO ESQUEÇA o NODE_OPTIONS=--max-old-space-size=448** no Discloud MID (512MB)
2. Não coloque .env / database.db em repositórios públicos!
3. O arquivo bundle.js **auto-carrega o dotenv**. As variáveis `process.env` são todas lidas primeiro.
4. Se precisar re-gerar o bundle: rode `node scripts/build-bot-bundle.js` na raiz do projeto.
