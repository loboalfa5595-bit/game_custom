// ============================================================
// BOT BUNDLE — GAME CUSTOM (gerado em 2026-10-09T11:38:15.632Z)
// Uso: node bundle.js   (c/ variáveis de ambiente do .env)
// Hospedagem: Discloud, Render, Railway, Replit etc.
// ============================================================

'use strict';

// Carrega variáveis de ambiente (.env / DISCORD_TOKEN etc.)
try { require('dotenv').config({ override: false }); } catch (_) {}

const __BOT_MODULE__ = {};
globalThis.__BOT_MODULE__ = __BOT_MODULE__;

// Imports Node globais usados nos wrappers IIFE e makeRequire:
const path = require('path');
const fs = require('fs');
const Module = require('module');

(function __INSTALL_BUNDLE_SHIMS__() {
  try {
    const fs = require('fs');
    const path = require('path');
    const Module = require('module');
    const origReadDirSync = fs.readdirSync.bind(fs);
    const origResolve = Module._resolveFilename;
    const origLoad = Module._load;
    const BUNDLED_CMDS = new Set([
      'ajuda','gp','perfil','config','paineljogos','jogos','loja','addgp','rankjogo','conquistas','rivalidade'
    ]);
    const BUNDLED_EVTS = new Set(['ready','interactionCreate']);
    fs.readdirSync = function(dir, opts) {
      const d = String(dir).replace(/\\/g,'/');
      if (/[/\\]commands$/.test(d)) return Array.from(BUNDLED_CMDS).map(n=>n+'.js');
      if (/[/\\]events$/.test(d))   return Array.from(BUNDLED_EVTS).map(n=>n+'.js');
      return origReadDirSync(dir, opts);
    };
    // Mapa require -> módulo no __BOT_MODULE__ (relativo + basename)
    const BASENAME_MAP = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
    function mapRequest(request) {
      const r = String(request).replace(/\\/g,'/');
      const s = r.replace(/\.js$/,'');
      const m = {
        './database':'database','../database':'database','../../database':'database',
        './deploy-commands':'deployCommands',
        './lib/gamesInfo':'gamesInfo','../lib/gamesInfo':'gamesInfo','../../lib/gamesInfo':'gamesInfo',
        './lib/achievements':'achievements','../lib/achievements':'achievements','../../lib/achievements':'achievements',
        './events/ready':'events_ready','../events/ready':'events_ready',
        './events/interactionCreate':'events_interactionCreate','../events/interactionCreate':'events_interactionCreate',
        './commands/ajuda':'cmd_ajuda','../commands/ajuda':'cmd_ajuda',
        './commands/gp':'cmd_gp','../commands/gp':'cmd_gp',
        './commands/perfil':'cmd_perfil','../commands/perfil':'cmd_perfil',
        './commands/config':'cmd_config','../commands/config':'cmd_config',
        './commands/paineljogos':'cmd_paineljogos','../commands/paineljogos':'cmd_paineljogos',
        './commands/jogos':'cmd_jogos','../commands/jogos':'cmd_jogos',
        './commands/loja':'cmd_loja','../commands/loja':'cmd_loja',
        './commands/addgp':'cmd_addgp','../commands/addgp':'cmd_addgp',
        './commands/rankjogo':'cmd_rankjogo','../commands/rankjogo':'cmd_rankjogo',
        './commands/conquistas':'cmd_conquistas','../commands/conquistas':'cmd_conquistas',
        './commands/rivalidade':'cmd_rivalidade','../commands/rivalidade':'cmd_rivalidade',
        './commands/games/ppt':'game_ppt','../commands/games/ppt':'game_ppt','../../commands/games/ppt':'game_ppt',
        './commands/games/carasimples':'game_carasimples','../commands/games/carasimples':'game_carasimples','../../commands/games/carasimples':'game_carasimples',
        './commands/games/forca':'game_forca','../commands/games/forca':'game_forca','../../commands/games/forca':'game_forca',
        './commands/games/quiz':'game_quiz','../commands/games/quiz':'game_quiz','../../commands/games/quiz':'game_quiz',
        './commands/games/memoria':'game_memoria','../commands/games/memoria':'game_memoria','../../commands/games/memoria':'game_memoria',
        './commands/games/roletacores':'game_roletacores','../commands/games/roletacores':'game_roletacores','../../commands/games/roletacores':'game_roletacores'
      };
      if (m[r])  return m[r];
      if (m[s])  return m[s];
      // Fallback por basename (caminhos absolutos / normalizados)
      const lastBar = Math.max(r.lastIndexOf('/'), r.lastIndexOf('\\'));
      const base = lastBar >= 0 ? r.slice(lastBar + 1) : r;
      if (BASENAME_MAP[base])       return BASENAME_MAP[base];
      const baseNoJs = base.replace(/\.js$/,'');
      if (BASENAME_MAP[baseNoJs])   return BASENAME_MAP[baseNoJs];
      return null;
    }
    Module._resolveFilename = function(request, parent, isMain, options) {
      const bundleKey = mapRequest(request);
      if (bundleKey) {
        __BOT_MODULE__[bundleKey] = __BOT_MODULE__[bundleKey] || {};
        return '/__BOT_RESERVED_PATH__/' + bundleKey;
      }
      return origResolve.call(this, request, parent, isMain, options);
    };
    Module._load = function(request, parent, isMain) {
      let k = null;
      if (typeof request === 'string') {
        // Tenta 1: caminho artificial do resolveFilename
        const match = request.match(/__BOT_RESERVED_PATH__[\/\\]([^\/\\]+)$/);
        if (match) {
          k = match[1];
        } else {
          // Tenta 2: fallback por basename do request qualquer (caminho absoluto etc.)
          const r2 = request.replace(/\\/g,'/');
          const last2 = Math.max(r2.lastIndexOf('/'), r2.lastIndexOf('\\'));
          const b2 = last2 >= 0 ? r2.slice(last2 + 1) : r2;
          if (BASENAME_MAP[b2])       k = BASENAME_MAP[b2];
          else if (BASENAME_MAP[b2.replace(/\.js$/,'')]) k = BASENAME_MAP[b2.replace(/\.js$/,'')];
        }
      }
      if (k && Object.prototype.hasOwnProperty.call(__BOT_MODULE__, k)) return __BOT_MODULE__[k];
      return origLoad.call(this, request, parent, isMain);
    };
    // Corrige __dirname nos wrappers injetando um fake global por wrapper? Simples: expor global __BOT_DIRNAME__
    Object.defineProperty(global, '__BOT_DIRNAME__', { value: process.cwd(), writable: false, configurable: true });
  } catch(e) {
    console.warn('[bundle shim] Aviso:', (e && e.message) || e);
  }
})();

// Inicializa TODOS os módulos como objetos vazios (igual CommonJS nativo)
// Garante que require('./database') no index funcione mesmo antes do wrapper database rodar
__BOT_MODULE__.database = __BOT_MODULE__.database || {};
__BOT_MODULE__.deployCommands = __BOT_MODULE__.deployCommands || {};
__BOT_MODULE__.gamesInfo = __BOT_MODULE__.gamesInfo || {};
__BOT_MODULE__.achievements = __BOT_MODULE__.achievements || {};
__BOT_MODULE__.game_ppt = __BOT_MODULE__.game_ppt || {};
__BOT_MODULE__.game_carasimples = __BOT_MODULE__.game_carasimples || {};
__BOT_MODULE__.game_forca = __BOT_MODULE__.game_forca || {};
__BOT_MODULE__.game_quiz = __BOT_MODULE__.game_quiz || {};
__BOT_MODULE__.game_memoria = __BOT_MODULE__.game_memoria || {};
__BOT_MODULE__.game_roletacores = __BOT_MODULE__.game_roletacores || {};
__BOT_MODULE__.cmd_ajuda = __BOT_MODULE__.cmd_ajuda || {};
__BOT_MODULE__.cmd_gp = __BOT_MODULE__.cmd_gp || {};
__BOT_MODULE__.cmd_perfil = __BOT_MODULE__.cmd_perfil || {};
__BOT_MODULE__.cmd_config = __BOT_MODULE__.cmd_config || {};
__BOT_MODULE__.cmd_paineljogos = __BOT_MODULE__.cmd_paineljogos || {};
__BOT_MODULE__.cmd_jogos = __BOT_MODULE__.cmd_jogos || {};
__BOT_MODULE__.cmd_loja = __BOT_MODULE__.cmd_loja || {};
__BOT_MODULE__.cmd_addgp = __BOT_MODULE__.cmd_addgp || {};
__BOT_MODULE__.cmd_rankjogo = __BOT_MODULE__.cmd_rankjogo || {};
__BOT_MODULE__.cmd_conquistas = __BOT_MODULE__.cmd_conquistas || {};
__BOT_MODULE__.cmd_rivalidade = __BOT_MODULE__.cmd_rivalidade || {};
__BOT_MODULE__.events_ready = __BOT_MODULE__.events_ready || {};
__BOT_MODULE__.events_interactionCreate = __BOT_MODULE__.events_interactionCreate || {};
__BOT_MODULE__.index = __BOT_MODULE__.index || {};

const __makeReq_database__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "database.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_database__ = { exports: __BOT_MODULE__.database };
// -------- database.js --------
(function (module, exports, require, __dirname, __filename) {
const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

const dbEvents = new EventEmitter();

let dbPath = path.join(__dirname, 'database.db');
if (process.env.DATABASE_PATH) {
  try {
    fs.mkdirSync(path.dirname(process.env.DATABASE_PATH), { recursive: true });
    dbPath = process.env.DATABASE_PATH;
  } catch (_) {}
} else if (
  process.env.RENDER === 'true' ||
  process.env.RENDER_EXTERNAL_URL ||
  (fs.existsSync('/var/data') && fs.statSync('/var/data').isDirectory())
) {
  try {
    fs.mkdirSync('/var/data', { recursive: true });
    dbPath = '/var/data/database.db';
  } catch (_) {}
}
console.log(`[DB] Usando arquivo de banco: ${dbPath}`);

let db;
let readyPromise = null;

function save() {
  try {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(dbPath, buffer);
  } catch (e) {
    console.error('[DB save error]', e.message);
  }
}

function colunaExiste(tabela, coluna) {
  try {
    const stmt = db.prepare(`PRAGMA table_info(${tabela})`);
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (String(row.name).toLowerCase() === String(coluna).toLowerCase()) {
        stmt.free();
        return true;
      }
    }
    stmt.free();
    return false;
  } catch (e) {
    return false;
  }
}

function adicionarColunaSeFaltar(tabela, coluna, definicao) {
  if (!colunaExiste(tabela, coluna)) {
    try {
      db.run(`ALTER TABLE ${tabela} ADD COLUMN ${coluna} ${definicao}`);
      console.log(`[DB migrate] Coluna ${tabela}.${coluna} adicionada.`);
      return true;
    } catch (e) {
      console.error(`[DB migrate] Falha ao adicionar ${tabela}.${coluna}:`, e.message);
      return false;
    }
  }
  return false;
}

function tabelaExiste(nome) {
  try {
    const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name = ?");
    stmt.bind([nome]);
    const ok = stmt.step() ? true : false;
    stmt.free();
    return ok;
  } catch (e) {
    return false;
  }
}

function open() {
  if (readyPromise) return readyPromise;

  readyPromise = Promise.resolve()
    .then(() => initSqlJs())
    .then((mod) => {
      let fileBuffer = null;
      if (fs.existsSync(dbPath)) {
        try { fileBuffer = fs.readFileSync(dbPath); } catch (_) {}
      }
      db = new mod.Database(fileBuffer);

      db.run(`
        CREATE TABLE IF NOT EXISTS guild_config (
          guild_id TEXT PRIMARY KEY,
          nickname_template TEXT DEFAULT '[{TAG}] {NOME} | {ID}',
          bot_name TEXT DEFAULT 'Bot Setagem',
          bot_model TEXT DEFAULT 'v1.0',
          set_form_channel_id TEXT,
          set_approval_channel_id TEXT,
          set_log_channel_id TEXT,
          set_form_title TEXT DEFAULT 'Formulário de Setagem',
          set_form_description TEXT DEFAULT 'Preencha os campos abaixo para solicitar sua setagem. Um administrador irá analisar.',
          set_form_image TEXT,
          set_form_color TEXT DEFAULT '#ff0040',
          set_form_footer TEXT DEFAULT 'Sistema de Setagem AI Studio',
          set_form_dm_enabled INTEGER DEFAULT 1,
          set_form_dm_message TEXT DEFAULT 'Olá {USER}! Sua solicitação de setagem foi **{STATUS}**.\n\nCargo: [{TAG}] {NOME} | {ID}\nResponsável: {STAFF}\n{OBS}',
          set_form_require_approval INTEGER DEFAULT 1,
          set_form_role_required TEXT,
          set_form_role_assignment INTEGER DEFAULT 1,
          autodel_enabled INTEGER DEFAULT 1,
          autodel_seconds INTEGER DEFAULT 15
        );
      `);

      const colunasGuildConfig = [
        ['nickname_template', "TEXT DEFAULT '[{TAG}] {NOME} | {ID}'"],
        ['bot_name', "TEXT DEFAULT 'Bot Setagem'"],
        ['bot_model', "TEXT DEFAULT 'v1.0'"],
        ['set_form_channel_id', 'TEXT'],
        ['set_approval_channel_id', 'TEXT'],
        ['set_log_channel_id', 'TEXT'],
        ['set_form_title', "TEXT DEFAULT 'Formulário de Setagem'"],
        ['set_form_description', "TEXT DEFAULT 'Preencha os campos abaixo para solicitar sua setagem. Um administrador irá analisar.'"],
        ['set_form_image', 'TEXT'],
        ['set_form_color', "TEXT DEFAULT '#ff0040'"],
        ['set_form_footer', "TEXT DEFAULT 'Sistema de Setagem AI Studio'"],
        ['set_form_dm_enabled', 'INTEGER DEFAULT 1'],
        ['set_form_dm_message', "TEXT DEFAULT 'Olá {USER}! Sua solicitação de setagem foi **{STATUS}**.\n\nCargo: [{TAG}] {NOME} | {ID}\nResponsável: {STAFF}\n{OBS}'"],
        ['set_form_require_approval', 'INTEGER DEFAULT 1'],
        ['set_form_role_required', 'TEXT'],
        ['set_form_role_assignment', 'INTEGER DEFAULT 1'],
        ['autodel_enabled', 'INTEGER DEFAULT 1'],
        ['autodel_seconds', 'INTEGER DEFAULT 15'],
        ['ranking_channel_id', 'TEXT'],
        ['ranking_message_id', 'TEXT'],
        ['ranking_update_minutes', 'INTEGER DEFAULT 10'],
        ['painel_jogos_channel_id', 'TEXT'],
        ['painel_jogos_message_id', 'TEXT'],
        ['cargos_niveis_enabled', 'INTEGER DEFAULT 0'],
        ['xp_por_gp', 'INTEGER DEFAULT 10'],
        ['novato_role_id', 'TEXT'],
        ['nivel_up_channel_id', 'TEXT'],
      ];
      for (const [col, def] of colunasGuildConfig) {
        adicionarColunaSeFaltar('guild_config', col, def);
      }

      db.run(`
        CREATE TABLE IF NOT EXISTS cargos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          guild_id TEXT NOT NULL,
          nome TEXT NOT NULL,
          tag TEXT NOT NULL,
          discord_role_id TEXT,
          UNIQUE(guild_id, nome),
          UNIQUE(guild_id, tag)
        );
      `);
      adicionarColunaSeFaltar('cargos', 'discord_role_id', 'TEXT');

      db.run(`
        CREATE TABLE IF NOT EXISTS membros_setados (
          user_id TEXT PRIMARY KEY,
          guild_id TEXT NOT NULL,
          nome TEXT NOT NULL,
          identificador TEXT NOT NULL,
          cargo_tag TEXT NOT NULL,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          approved_by TEXT,
          approved_at TEXT
        );
      `);
      const colunasMembros = [
        ['guild_id', 'TEXT NOT NULL'],
        ['created_at', 'TEXT DEFAULT CURRENT_TIMESTAMP'],
        ['approved_by', 'TEXT'],
        ['approved_at', 'TEXT'],
      ];
      for (const [col, def] of colunasMembros) {
        adicionarColunaSeFaltar('membros_setados', col, def);
      }

      if (!tabelaExiste('setagems_pendentes')) {
        db.run(`
          CREATE TABLE setagems_pendentes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            guild_id TEXT NOT NULL,
            user_id TEXT NOT NULL,
            nome TEXT NOT NULL,
            identificador TEXT NOT NULL,
            cargo_tag TEXT NOT NULL,
            requested_at TEXT DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'PENDENTE',
            approver_id TEXT,
            approved_at TEXT,
            reason TEXT,
            approval_message_id TEXT,
            approval_channel_id TEXT,
            dm_notified INTEGER DEFAULT 0
          );
        `);
        console.log('[DB migrate] Tabela setagems_pendentes criada.');
      } else {
        const colunasPend = [
          ['requested_at', 'TEXT DEFAULT CURRENT_TIMESTAMP'],
          ['status', "TEXT DEFAULT 'PENDENTE'"],
          ['approver_id', 'TEXT'],
          ['approved_at', 'TEXT'],
          ['reason', 'TEXT'],
          ['approval_message_id', 'TEXT'],
          ['approval_channel_id', 'TEXT'],
          ['dm_notified', 'INTEGER DEFAULT 0'],
        ];
        for (const [col, def] of colunasPend) {
          adicionarColunaSeFaltar('setagems_pendentes', col, def);
        }
      }

      db.run(`
        CREATE TABLE IF NOT EXISTS game_players (
          user_id TEXT NOT NULL,
          guild_id TEXT NOT NULL,
          global_xp INTEGER DEFAULT 0,
          global_elo INTEGER DEFAULT 1000,
          nivel INTEGER DEFAULT 1,
          titulo_atual TEXT,
          coins_gp INTEGER DEFAULT 0,
          embed_color TEXT,
          conquistas_json TEXT DEFAULT '[]',
          PRIMARY KEY (user_id, guild_id)
        );
      `);
      const colunasPlayers = [
        ['global_xp', 'INTEGER DEFAULT 0'],
        ['global_elo', 'INTEGER DEFAULT 1000'],
        ['nivel', 'INTEGER DEFAULT 1'],
        ['titulo_atual', 'TEXT'],
        ['coins_gp', 'INTEGER DEFAULT 0'],
        ['embed_color', 'TEXT'],
        ['conquistas_json', "TEXT DEFAULT '[]'"],
        ['nickname_gamer', 'TEXT'],
        ['perfil_criado', 'INTEGER DEFAULT 0'],
        ['created_at', 'TEXT DEFAULT CURRENT_TIMESTAMP'],
      ];
      for (const [col, def] of colunasPlayers) adicionarColunaSeFaltar('game_players', col, def);

      db.run(`
        CREATE TABLE IF NOT EXISTS level_roles (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          guild_id TEXT NOT NULL,
          nivel INTEGER NOT NULL,
          role_id TEXT NOT NULL,
          UNIQUE(guild_id, nivel)
        );
      `);
      adicionarColunaSeFaltar('level_roles', 'guild_id', 'TEXT NOT NULL');
      adicionarColunaSeFaltar('level_roles', 'nivel', 'INTEGER NOT NULL');
      adicionarColunaSeFaltar('level_roles', 'role_id', 'TEXT NOT NULL');

      db.run(`
        CREATE TABLE IF NOT EXISTS game_matches (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          jogo TEXT NOT NULL,
          guild_id TEXT NOT NULL,
          user1_id TEXT,
          user2_id TEXT,
          resultado_user1 TEXT,
          resultado_user2 TEXT,
          gp_awarded INTEGER DEFAULT 0,
          detalhes_json TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
      `);
      const colunasMatches = [
        ['jogo', 'TEXT NOT NULL'],
        ['user1_id', 'TEXT'],
        ['user2_id', 'TEXT'],
        ['resultado_user1', 'TEXT'],
        ['resultado_user2', 'TEXT'],
        ['gp_awarded', 'INTEGER DEFAULT 0'],
        ['detalhes_json', 'TEXT'],
        ['created_at', 'TEXT DEFAULT CURRENT_TIMESTAMP'],
      ];
      for (const [col, def] of colunasMatches) adicionarColunaSeFaltar('game_matches', col, def);

      db.run(`
        CREATE TABLE IF NOT EXISTS game_rankings (
          user_id TEXT NOT NULL,
          jogo TEXT NOT NULL,
          guild_id TEXT NOT NULL,
          xp INTEGER DEFAULT 0,
          elo INTEGER DEFAULT 1000,
          vitorias INTEGER DEFAULT 0,
          derrotas INTEGER DEFAULT 0,
          empates INTEGER DEFAULT 0,
          melhor_streak INTEGER DEFAULT 0,
          streak_atual INTEGER DEFAULT 0,
          PRIMARY KEY (user_id, jogo, guild_id)
        );
      `);
      const colunasRankings = [
        ['xp', 'INTEGER DEFAULT 0'],
        ['elo', 'INTEGER DEFAULT 1000'],
        ['vitorias', 'INTEGER DEFAULT 0'],
        ['derrotas', 'INTEGER DEFAULT 0'],
        ['empates', 'INTEGER DEFAULT 0'],
        ['melhor_streak', 'INTEGER DEFAULT 0'],
        ['streak_atual', 'INTEGER DEFAULT 0'],
      ];
      for (const [col, def] of colunasRankings) adicionarColunaSeFaltar('game_rankings', col, def);

      db.run(`
        CREATE TABLE IF NOT EXISTS game_rivalidades (
          guild_id TEXT NOT NULL,
          user1_id TEXT NOT NULL,
          user2_id TEXT NOT NULL,
          wins1 INTEGER DEFAULT 0,
          wins2 INTEGER DEFAULT 0,
          empates INTEGER DEFAULT 0,
          ultimo_match TEXT,
          PRIMARY KEY (guild_id, user1_id, user2_id)
        );
      `);
      const colunasRiv = [
        ['wins1', 'INTEGER DEFAULT 0'],
        ['wins2', 'INTEGER DEFAULT 0'],
        ['empates', 'INTEGER DEFAULT 0'],
        ['ultimo_match', 'TEXT'],
      ];
      for (const [col, def] of colunasRiv) adicionarColunaSeFaltar('game_rivalidades', col, def);

      db.run(`
        CREATE TABLE IF NOT EXISTS game_achievements (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id TEXT NOT NULL,
          achievement_id TEXT NOT NULL,
          unlocked_at TEXT DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(user_id, achievement_id)
        );
      `);
      adicionarColunaSeFaltar('game_achievements', 'achievement_id', 'TEXT NOT NULL');
      adicionarColunaSeFaltar('game_achievements', 'unlocked_at', 'TEXT DEFAULT CURRENT_TIMESTAMP');

      db.run(`
        CREATE TABLE IF NOT EXISTS game_shop_purchases (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id TEXT NOT NULL,
          guild_id TEXT NOT NULL,
          item_id TEXT NOT NULL,
          tipo TEXT,
          preco_gp INTEGER DEFAULT 0,
          valor TEXT,
          purchased_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
      `);
      const colunasShop = [
        ['user_id', 'TEXT NOT NULL'],
        ['guild_id', 'TEXT NOT NULL'],
        ['item_id', 'TEXT NOT NULL'],
        ['tipo', 'TEXT'],
        ['preco_gp', 'INTEGER DEFAULT 0'],
        ['valor', 'TEXT'],
        ['purchased_at', 'TEXT DEFAULT CURRENT_TIMESTAMP'],
      ];
      for (const [col, def] of colunasShop) adicionarColunaSeFaltar('game_shop_purchases', col, def);

      save();
      return db;
    })
    .catch((err) => {
      readyPromise = null;
      console.error('[DB init] falhou:', err);
      throw err;
    });

  return readyPromise;
}

function calcularNivel(xp) {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 100)));
}

function calcularELO(r1, r2, s1, k = 32) {
  const e1 = 1 / (1 + Math.pow(10, (r2 - r1) / 400));
  const e2 = 1 - e1;
  return [
    Math.round(r1 + k * (s1 - e1)),
    Math.round(r2 + k * ((1 - s1) - e2)),
  ];
}

async function getOrInitPlayer(userId, guildId) {
  if (!db) await open();
  const stmt = db.prepare('SELECT * FROM game_players WHERE user_id = ? AND guild_id = ?');
  stmt.bind([userId, guildId]);
  let p = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  if (!p) {
    db.run(
      'INSERT INTO game_players (user_id, guild_id, global_xp, global_elo, nivel, coins_gp) VALUES (?, ?, 0, 1000, 1, 0)',
      [userId, guildId]
    );
    save();
    const s2 = db.prepare('SELECT * FROM game_players WHERE user_id = ? AND guild_id = ?');
    s2.bind([userId, guildId]);
    p = s2.step() ? s2.getAsObject() : null;
    s2.free();
  }
  if (!p) return null;
  p.global_xp = Number(p.global_xp) || 0;
  p.nivel = Number(p.nivel) || 1;
  p.coins_gp = Number(p.coins_gp) || 0;
  p.global_elo = Number(p.global_elo) || 1000;
  const nivelCalc = calcularNivel(p.global_xp);
  if (nivelCalc !== p.nivel) {
    db.run('UPDATE game_players SET nivel = ? WHERE user_id = ? AND guild_id = ?', [nivelCalc, userId, guildId]);
    p.nivel = nivelCalc;
    save();
  }
  return p;
}

async function addPlayerXP(userId, guildId, xpDelta, jogo, eloDelta = 0) {
  const p = await getOrInitPlayer(userId, guildId);
  if (!p) return null;
  const nivelAnterior = Number(p.nivel) || 1;
  const novoXP = p.global_xp + Math.max(0, xpDelta);
  const novoNivel = calcularNivel(novoXP);
  const novoElo = Math.max(100, p.global_elo + eloDelta);
  db.run(
    'UPDATE game_players SET global_xp = ?, nivel = ?, global_elo = ? WHERE user_id = ? AND guild_id = ?',
    [novoXP, novoNivel, novoElo, userId, guildId]
  );
  save();

  if (jogo) {
    const sR = db.prepare('SELECT * FROM game_rankings WHERE user_id = ? AND jogo = ? AND guild_id = ?');
    sR.bind([userId, jogo, guildId]);
    let r = sR.step() ? sR.getAsObject() : null;
    sR.free();
    if (!r) {
      db.run(
        'INSERT INTO game_rankings (user_id, jogo, guild_id, xp, elo) VALUES (?, ?, ?, ?, 1000)',
        [userId, jogo, guildId, Math.max(0, xpDelta), eloDelta || 0]
      );
    } else {
      db.run(
        'UPDATE game_rankings SET xp = xp + ?, elo = MAX(100, elo + ?) WHERE user_id = ? AND jogo = ? AND guild_id = ?',
        [Math.max(0, xpDelta), eloDelta, userId, jogo, guildId]
      );
    }
    save();
  }

  if (novoNivel > nivelAnterior) {
    setImmediate(() => {
      try {
        dbEvents.emit('levelUp', { userId, guildId, nivelAntigo: nivelAnterior, nivelNovo: novoNivel, xpAntigo: p.global_xp, xpNovo: novoXP });
      } catch (e) {
        console.error('[dbEvents levelUp]', e.message);
      }
    });
  }

  return { ...p, global_xp: novoXP, nivel: novoNivel, global_elo: novoElo, nivelAnterior, nivelSubiu: novoNivel > nivelAnterior };
}

async function setLevelRole(guildId, nivel, roleId) {
  if (!db) await open();
  if (!db) return false;
  const nivelInt = Math.max(1, Math.floor(Number(nivel) || 1));
  try {
    const s = db.prepare('SELECT id FROM level_roles WHERE guild_id = ? AND nivel = ?');
    s.bind([guildId, nivelInt]);
    const tem = s.step() ? s.getAsObject() : null;
    s.free();
    if (tem) {
      db.run('UPDATE level_roles SET role_id = ? WHERE id = ?', [String(roleId), tem.id]);
    } else {
      db.run('INSERT INTO level_roles (guild_id, nivel, role_id) VALUES (?, ?, ?)', [guildId, nivelInt, String(roleId)]);
    }
    save();
    return true;
  } catch (e) {
    console.error('[setLevelRole err]', e.message);
    return false;
  }
}

async function removeLevelRole(guildId, nivel) {
  if (!db) await open();
  if (!db) return false;
  const nivelInt = Math.max(1, Math.floor(Number(nivel) || 1));
  try {
    db.run('DELETE FROM level_roles WHERE guild_id = ? AND nivel = ?', [guildId, nivelInt]);
    save();
    return true;
  } catch (e) {
    console.error('[removeLevelRole err]', e.message);
    return false;
  }
}

async function listLevelRoles(guildId) {
  if (!db) await open();
  if (!db) return [];
  try {
    const s = db.prepare('SELECT nivel, role_id FROM level_roles WHERE guild_id = ? ORDER BY nivel ASC');
    s.bind([guildId]);
    const rows = [];
    while (s.step()) rows.push(s.getAsObject());
    s.free();
    return rows.map(r => ({ nivel: Number(r.nivel) || 0, role_id: String(r.role_id) }));
  } catch (e) {
    console.error('[listLevelRoles err]', e.message);
    return [];
  }
}

async function findRoleForLevel(guildId, nivel) {
  const lista = await listLevelRoles(guildId);
  if (!lista.length) return null;
  const nivelInt = Math.max(1, Math.floor(Number(nivel) || 1));
  let escolhida = null;
  for (const r of lista) {
    if (r.nivel <= nivelInt) escolhida = r;
  }
  return escolhida;
}

async function setGuildConfigField(guildId, field, value) {
  if (!db) await open();
  if (!db) return false;
  const camposPermitidos = ['novato_role_id', 'nivel_up_channel_id', 'cargos_niveis_enabled', 'ranking_channel_id', 'ranking_message_id', 'painel_jogos_channel_id', 'painel_jogos_message_id'];
  if (!camposPermitidos.includes(String(field))) return false;
  try {
    const s = db.prepare('SELECT guild_id FROM guild_config WHERE guild_id = ?');
    s.bind([guildId]);
    const tem = s.step();
    s.free();
    if (tem) {
      db.run(`UPDATE guild_config SET ${field} = ? WHERE guild_id = ?`, [value, guildId]);
    } else {
      const colunas = ['guild_id', field];
      const marks = ['?', '?'];
      db.run(`INSERT INTO guild_config (${colunas.join(', ')}) VALUES (${marks.join(', ')})`, [guildId, value]);
    }
    save();
    return true;
  } catch (e) {
    console.error('[setGuildConfigField err]', e.message);
    return false;
  }
}

async function getGuildConfig(guildId) {
  if (!db) await open();
  if (!db) return null;
  try {
    const s = db.prepare('SELECT * FROM guild_config WHERE guild_id = ?');
    s.bind([guildId]);
    const cfg = s.step() ? s.getAsObject() : null;
    s.free();
    return cfg || { guild_id: guildId, novato_role_id: null, nivel_up_channel_id: null, cargos_niveis_enabled: 0 };
  } catch (e) {
    console.error('[getGuildConfig err]', e.message);
    return null;
  }
}

async function setPlayerNickname(userId, guildId, nickname) {
  if (!db) await open();
  if (!db) return false;
  try {
    const limpo = String(nickname || '').trim().slice(0, 32);
    if (!limpo) return false;
    db.run(
      'UPDATE game_players SET nickname_gamer = ?, perfil_criado = 1 WHERE user_id = ? AND guild_id = ?',
      [limpo, userId, guildId]
    );
    const changes = db.getRowsModified ? db.getRowsModified() : 1;
    if (changes === 0) {
      db.run(
        'INSERT INTO game_players (user_id, guild_id, global_xp, global_elo, nivel, coins_gp, nickname_gamer, perfil_criado) VALUES (?, ?, 0, 1000, 1, 0, ?, 1)',
        [userId, guildId, limpo]
      );
    }
    save();
    return true;
  } catch (e) {
    console.error('[setPlayerNickname err]', e.message);
    return false;
  }
}

async function addPlayerGP(userId, guildId, gpDelta) {
  const p = await getOrInitPlayer(userId, guildId);
  if (!p) return null;
  const novo = Math.max(0, p.coins_gp + gpDelta);
  db.run('UPDATE game_players SET coins_gp = ? WHERE user_id = ? AND guild_id = ?', [novo, userId, guildId]);
  save();
  return novo;
}

async function updateGameResult(guildId, jogo, user1Id, user2Id, resultadoUser1, gpUser1 = 0, gpUser2 = 0, detalhes = null) {
  const resU1 = String(resultadoUser1 || 'DERROTA').toUpperCase();
  const resU2 = user2Id
    ? (resU1 === 'VITORIA' ? 'DERROTA' : resU1 === 'DERROTA' ? 'VITORIA' : 'EMPATE')
    : resU1;

  const stmt = db.run(
    `INSERT INTO game_matches (jogo, guild_id, user1_id, user2_id, resultado_user1, resultado_user2, gp_awarded, detalhes_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [jogo, guildId, user1Id, user2Id || null, resU1, resU2, (gpUser1 + gpUser2), detalhes ? JSON.stringify(detalhes) : null]
  );
  const matchId = stmt.lastInsertRowid;
  save();

  const deltaXPPorResultado = { VITORIA: 20, DERROTA: 4, EMPATE: 10, WO_V: 15, WO_D: 2 };
  let elo1 = 0, elo2 = 0;
  if (user2Id) {
    const p1 = await getOrInitPlayer(user1Id, guildId);
    const p2 = await getOrInitPlayer(user2Id, guildId);
    const s1 = resU1 === 'VITORIA' ? 1 : resU1 === 'EMPATE' ? 0.5 : 0;
    [elo1, elo2] = calcularELO(p1.global_elo, p2.global_elo, s1);
    elo1 = elo1 - p1.global_elo;
    elo2 = elo2 - p2.global_elo;
  }

  const atualizarUm = async (uid, res, xpExtra, gp, eloD) => {
    if (!uid) return;
    await addPlayerXP(uid, guildId, (deltaXPPorResultado[res] || 5) + (xpExtra || 0), jogo, eloD);
    if (gp) await addPlayerGP(uid, guildId, gp);
    const tipo = res === 'VITORIA' || res === 'WO_V' ? 'vitoria' : res === 'EMPATE' ? 'empate' : 'derrota';
    const sR = db.prepare('SELECT * FROM game_rankings WHERE user_id = ? AND jogo = ? AND guild_id = ?');
    sR.bind([uid, jogo, guildId]);
    let r = sR.step() ? sR.getAsObject() : null;
    sR.free();
    if (!r) {
      db.run(
        `INSERT INTO game_rankings (user_id, jogo, guild_id, ${tipo === 'vitoria' ? 'vitorias' : tipo === 'empate' ? 'empates' : 'derrotas'}, streak_atual, melhor_streak)
         VALUES (?, ?, ?, 1, ?, ?)`,
        [uid, jogo, guildId, tipo === 'vitoria' ? 1 : 0, tipo === 'vitoria' ? 1 : 0]
      );
    } else {
      const col = tipo === 'vitoria' ? 'vitorias' : tipo === 'empate' ? 'empates' : 'derrotas';
      const streakAdd = tipo === 'vitoria' ? 1 : 0;
      const novaStreak = tipo === 'vitoria' ? (Number(r.streak_atual) || 0) + 1 : 0;
      const melhStreak = Math.max(Number(r.melhor_streak) || 0, novaStreak);
      db.run(
        `UPDATE game_rankings SET ${col} = ${col} + 1, streak_atual = ?, melhor_streak = ? WHERE user_id = ? AND jogo = ? AND guild_id = ?`,
        [novaStreak, melhStreak, uid, jogo, guildId]
      );
    }
    save();
  };

  await atualizarUm(user1Id, resU1, 0, gpUser1, elo1);
  if (user2Id) await atualizarUm(user2Id, resU2, 0, gpUser2, elo2);

  if (user2Id) {
    const [uA, uB] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];
    const inv = user1Id < user2Id ? 1 : -1;
    const w1Add = (resU1 === 'VITORIA' ? 1 : 0) * (inv === 1 ? 1 : 0) + (resU2 === 'VITORIA' ? 1 : 0) * (inv === -1 ? 1 : 0);
    const w2Add = (resU1 === 'VITORIA' ? 1 : 0) * (inv === -1 ? 1 : 0) + (resU2 === 'VITORIA' ? 1 : 0) * (inv === 1 ? 1 : 0);
    const empAdd = resU1 === 'EMPATE' ? 1 : 0;
    const sRiv = db.prepare('SELECT * FROM game_rivalidades WHERE guild_id = ? AND user1_id = ? AND user2_id = ?');
    sRiv.bind([guildId, uA, uB]);
    let riv = sRiv.step() ? sRiv.getAsObject() : null;
    sRiv.free();
    if (!riv) {
      db.run(
        'INSERT INTO game_rivalidades (guild_id, user1_id, user2_id, wins1, wins2, empates, ultimo_match) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [guildId, uA, uB, w1Add, w2Add, empAdd, new Date().toISOString()]
      );
    } else {
      db.run(
        `UPDATE game_rivalidades SET wins1 = wins1 + ?, wins2 = wins2 + ?, empates = empates + ?, ultimo_match = ?
         WHERE guild_id = ? AND user1_id = ? AND user2_id = ?`,
        [w1Add, w2Add, empAdd, new Date().toISOString(), guildId, uA, uB]
      );
    }
    save();
  }

  return { matchId, resU1, resU2, elo1, elo2 };
}

async function getRanking(guildId, jogo = null, limite = 10, global = false) {
  if (!db) await open();
  let stmt;
  if (jogo) {
    stmt = db.prepare(
      global
        ? `SELECT user_id, SUM(xp) as xp, SUM(elo) as elo, SUM(vitorias) as v, SUM(derrotas) as d, SUM(empates) as e
           FROM game_rankings WHERE jogo = ? GROUP BY user_id ORDER BY xp DESC LIMIT ?`
        : `SELECT user_id, xp, elo, vitorias as v, derrotas as d, empates as e
           FROM game_rankings WHERE jogo = ? AND guild_id = ? ORDER BY xp DESC LIMIT ?`
    );
    stmt.bind(global ? [jogo, limite] : [jogo, guildId, limite]);
  } else {
    stmt = db.prepare(
      global
        ? `SELECT user_id, SUM(global_xp) as xp, AVG(global_elo) as elo
           FROM game_players GROUP BY user_id ORDER BY xp DESC LIMIT ?`
        : `SELECT user_id, global_xp as xp, global_elo as elo, nivel, coins_gp
           FROM game_players WHERE guild_id = ? ORDER BY global_xp DESC LIMIT ?`
    );
    stmt.bind(global ? [limite] : [guildId, limite]);
  }
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

async function getPlayerMatches(userId, guildId, limite = 10, jogo = null) {
  if (!db) await open();
  let sql = `SELECT * FROM game_matches WHERE guild_id = ? AND (user1_id = ? OR user2_id = ?)`;
  const params = [guildId, userId, userId];
  if (jogo) { sql += ` AND jogo = ?`; params.push(jogo); }
  sql += ` ORDER BY created_at DESC LIMIT ?`;
  params.push(limite);
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

async function getRivalidade(guildId, user1Id, user2Id) {
  if (!db) await open();
  const [uA, uB] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];
  const inv = user1Id < user2Id ? 1 : -1;
  const s = db.prepare('SELECT * FROM game_rivalidades WHERE guild_id = ? AND user1_id = ? AND user2_id = ?');
  s.bind([guildId, uA, uB]);
  const raw = s.step() ? s.getAsObject() : null;
  s.free();
  if (!raw) return null;
  return {
    user1_wins: inv === 1 ? raw.wins1 : raw.wins2,
    user2_wins: inv === 1 ? raw.wins2 : raw.wins1,
    empates: raw.empates,
    ultimo_match: raw.ultimo_match,
    total: (Number(raw.wins1) || 0) + (Number(raw.wins2) || 0) + (Number(raw.empates) || 0),
  };
}

async function unlockAchievement(userId, achievementId) {
  if (!db) await open();
  try {
    const stmt = db.run(
      'INSERT OR IGNORE INTO game_achievements (user_id, achievement_id) VALUES (?, ?)',
      [userId, achievementId]
    );
    save();
    return stmt.getRowsModified() > 0;
  } catch (_) { return false; }
}

async function getAchievements(userId) {
  if (!db) await open();
  const stmt = db.prepare('SELECT achievement_id, unlocked_at FROM game_achievements WHERE user_id = ? ORDER BY unlocked_at DESC');
  stmt.bind([userId]);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

async function shopPurchase(userId, guildId, itemId, tipo, precoGP, valor) {
  const p = await getOrInitPlayer(userId, guildId);
  if (!p || Number(p.coins_gp) < precoGP) return { ok: false, motivo: 'Saldo insuficiente' };
  db.run('UPDATE game_players SET coins_gp = coins_gp - ? WHERE user_id = ? AND guild_id = ?', [precoGP, userId, guildId]);
  db.run(
    'INSERT INTO game_shop_purchases (user_id, guild_id, item_id, tipo, preco_gp, valor) VALUES (?, ?, ?, ?, ?, ?)',
    [userId, guildId, itemId, tipo, precoGP, valor || null]
  );
  save();
  return { ok: true, novoSaldo: Number(p.coins_gp) - precoGP };
}

async function setPlayerTitulo(userId, guildId, titulo) {
  if (!db) await open();
  db.run('UPDATE game_players SET titulo_atual = ? WHERE user_id = ? AND guild_id = ?', [titulo || null, userId, guildId]);
  save();
}

async function setPlayerEmbedColor(userId, guildId, corHex) {
  if (!db) await open();
  db.run('UPDATE game_players SET embed_color = ? WHERE user_id = ? AND guild_id = ?', [corHex || null, userId, guildId]);
  save();
}

const defaultCargos = [
  { nome: 'Membro', tag: 'MBR' },
  { nome: 'Vendedor', tag: 'VEN' },
  { nome: 'Gerente', tag: 'GER' },
  { nome: 'Administrador', tag: 'ADM' },
  { nome: 'Dono', tag: 'DONO' },
];

async function initGuild(guildId) {
  if (!db) await open();
  const stmt = db.prepare('SELECT guild_id FROM guild_config WHERE guild_id = ?');
  stmt.bind([guildId]);
  const existing = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();

  if (!existing) {
    db.run('INSERT INTO guild_config (guild_id) VALUES (?)', [guildId]);
    for (const c of defaultCargos) {
      try {
        db.run(
          'INSERT INTO cargos (guild_id, nome, tag) VALUES (?, ?, ?)',
          [guildId, c.nome, c.tag]
        );
      } catch (_) {}
    }
    save();
  }
}

async function getGuildConfig(guildId) {
  await initGuild(guildId);
  const stmt = db.prepare('SELECT * FROM guild_config WHERE guild_id = ?');
  stmt.bind([guildId]);
  let result = null;
  if (stmt.step()) result = stmt.getAsObject();
  stmt.free();
  return result;
}

async function updateGuildConfig(guildId, fields) {
  await initGuild(guildId);
  const keys = Object.keys(fields);
  if (keys.length === 0) return;
  const sets = keys.map((k) => `${k} = ?`).join(', ');
  const values = keys.map((k) => fields[k]);
  values.push(guildId);
  db.run(`UPDATE guild_config SET ${sets} WHERE guild_id = ?`, values);
  save();
}

async function getAllGuildConfigs() {
  await open();
  const stmt = db.prepare('SELECT * FROM guild_config');
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

async function getCargos(guildId) {
  await initGuild(guildId);
  const stmt = db.prepare('SELECT * FROM cargos WHERE guild_id = ? ORDER BY id');
  stmt.bind([guildId]);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

async function getCargoByTag(guildId, tag) {
  await initGuild(guildId);
  const stmt = db.prepare('SELECT * FROM cargos WHERE guild_id = ? AND tag = ?');
  stmt.bind([guildId, tag]);
  let r = null;
  if (stmt.step()) r = stmt.getAsObject();
  stmt.free();
  return r;
}

async function addCargo(guildId, nome, tag, discordRoleId) {
  await initGuild(guildId);
  db.run(
    'INSERT INTO cargos (guild_id, nome, tag, discord_role_id) VALUES (?, ?, ?, ?)',
    [guildId, nome, tag, discordRoleId || null]
  );
  save();
  return { changes: 1 };
}

async function updateCargoDiscordRole(guildId, tag, discordRoleId) {
  await initGuild(guildId);
  db.run(
    'UPDATE cargos SET discord_role_id = ? WHERE guild_id = ? AND tag = ?',
    [discordRoleId || null, guildId, tag]
  );
  save();
}

async function removeCargo(guildId, nomeOuTag) {
  await initGuild(guildId);
  const stmt = db.prepare(
    'DELETE FROM cargos WHERE guild_id = ? AND (nome = ? OR tag = ?)'
  );
  stmt.bind([guildId, nomeOuTag, nomeOuTag]);
  stmt.step();
  stmt.free();
  save();
  return { changes: db.getRowsModified() };
}

async function upsertMembro(data) {
  if (!db) await open();
  db.run(
    `
    INSERT INTO membros_setados (user_id, guild_id, nome, identificador, cargo_tag, approved_by, approved_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      guild_id = excluded.guild_id,
      nome = excluded.nome,
      identificador = excluded.identificador,
      cargo_tag = excluded.cargo_tag,
      approved_by = excluded.approved_by,
      approved_at = excluded.approved_at
    `,
    [
      data.user_id, data.guild_id, data.nome, data.identificador, data.cargo_tag,
      data.approved_by || null, data.approved_at || null,
    ]
  );
  save();
  return { changes: 1 };
}

async function getMembro(userId) {
  if (!db) await open();
  const stmt = db.prepare('SELECT * FROM membros_setados WHERE user_id = ?');
  stmt.bind([userId]);
  let result = null;
  if (stmt.step()) result = stmt.getAsObject();
  stmt.free();
  return result;
}

async function criarSetagemPendente(data) {
  if (!db) await open();
  const stmt = db.run(
    `INSERT INTO setagems_pendentes
      (guild_id, user_id, nome, identificador, cargo_tag, approval_channel_id, approval_message_id)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.guild_id, data.user_id, data.nome, data.identificador, data.cargo_tag,
      data.approval_channel_id || null, data.approval_message_id || null,
    ]
  );
  save();
  return { id: stmt.lastInsertRowid };
}

async function getSetagemPendente(id) {
  if (!db) await open();
  const stmt = db.prepare('SELECT * FROM setagems_pendentes WHERE id = ?');
  stmt.bind([id]);
  let r = null;
  if (stmt.step()) r = stmt.getAsObject();
  stmt.free();
  return r;
}

async function getSetagensPendentesPorGuild(guildId) {
  if (!db) await open();
  const stmt = db.prepare(
    "SELECT * FROM setagems_pendentes WHERE guild_id = ? AND status = 'PENDENTE' ORDER BY requested_at DESC"
  );
  stmt.bind([guildId]);
  const r = [];
  while (stmt.step()) r.push(stmt.getAsObject());
  stmt.free();
  return r;
}

async function atualizarStatusSetagem(id, fields) {
  if (!db) await open();
  const keys = Object.keys(fields);
  if (keys.length === 0) return;
  const sets = keys.map((k) => `${k} = ?`).join(', ');
  const values = keys.map((k) => fields[k]);
  values.push(id);
  db.run(`UPDATE setagems_pendentes SET ${sets} WHERE id = ?`, values);
  save();
}

module.exports = {
  open,
  initGuild,
  getGuildConfig,
  updateGuildConfig,
  getAllGuildConfigs,
  getCargos,
  getCargoByTag,
  addCargo,
  updateCargoDiscordRole,
  removeCargo,
  upsertMembro,
  getMembro,
  criarSetagemPendente,
  getSetagemPendente,
  getSetagensPendentesPorGuild,
  atualizarStatusSetagem,
  calcularNivel,
  calcularELO,
  getOrInitPlayer,
  addPlayerXP,
  addPlayerGP,
  updateGameResult,
  getRanking,
  getPlayerMatches,
  getRivalidade,
  unlockAchievement,
  getAchievements,
  shopPurchase,
  setPlayerTitulo,
  setPlayerEmbedColor,
  setLevelRole,
  removeLevelRole,
  listLevelRoles,
  findRoleForLevel,
  setGuildConfigField,
  setPlayerNickname,
  dbEvents,
};


})(__mod_obj_database__, __mod_obj_database__.exports, __makeReq_database__, path.dirname(path.resolve(process.cwd(), "database.js")), path.resolve(process.cwd(), "database.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.database = __mod_obj_database__.exports;

const __makeReq_deployCommands__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "deploy-commands.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_deployCommands__ = { exports: __BOT_MODULE__.deployCommands };
// -------- deploy-commands.js --------
(function (module, exports, require, __dirname, __filename) {
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

const GUILD_IDS = [
  '1331027702857072791',
  '1540306960795312229',
];

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((f) => f.endsWith('.js'));

for (const file of commandFiles) {
  const cmd = require(path.join(commandsPath, file));
  if ('data' in cmd) commands.push(cmd.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
const clientId = process.env.CLIENT_ID;

(async () => {
  try {
    console.log(`Registrando ${commands.length} comandos em ${GUILD_IDS.length} servidores...`);
    for (const gid of GUILD_IDS) {
      try {
        const data = await rest.put(
          Routes.applicationGuildCommands(clientId, gid),
          { body: commands }
        );
        console.log(`✅ [OK] Servidor ${gid}: ${data.length} comandos registrados`);
      } catch (err) {
        console.log(`❌ [FALHA] Servidor ${gid}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error('Erro geral:', err);
  }
})();


})(__mod_obj_deployCommands__, __mod_obj_deployCommands__.exports, __makeReq_deployCommands__, path.dirname(path.resolve(process.cwd(), "deploy-commands.js")), path.resolve(process.cwd(), "deploy-commands.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.deployCommands = __mod_obj_deployCommands__.exports;

const __makeReq_gamesInfo__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "lib/gamesInfo.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_gamesInfo__ = { exports: __BOT_MODULE__.gamesInfo };
// -------- lib/gamesInfo.js --------
(function (module, exports, require, __dirname, __filename) {
const MINI_JOGOS = [
  {
    id: 'ppt',
    nome: 'Pedra Papel Tesoura',
    emoji: '✊',
    descricao: 'Clássico melhor de 5 (primeiro a 5 vitórias) contra IA ou outro membro.',
    jogadores: '1v1 ou vs IA',
    duracao: '~2 min',
    tipo: '1v1',
    xpBase: 15,
  },
  {
    id: 'pptspock',
    nome: 'PPT Lagarto Spock',
    emoji: '🖖',
    descricao: 'Versão extendida do PPT com 5 opções. Melhor de 5.',
    jogadores: '1v1 ou vs IA',
    duracao: '~2 min',
    tipo: '1v1',
    xpBase: 18,
  },
  {
    id: 'caracoroa',
    nome: 'Cara ou Coroa',
    emoji: '🪙',
    descricao: 'Sorteio clássico de moeda. Aposta GP obrigatória em 1v1.',
    jogadores: '2 jogadores ou vs IA',
    duracao: '~10 seg',
    tipo: 'sorteio',
    xpBase: 5,
  },
  {
    id: 'parouimpar',
    nome: 'Par ou Ímpar',
    emoji: '0️⃣',
    descricao: 'Mostre 0 a 5 dedos. Soma decide o vencedor. Melhor de 5.',
    jogadores: '1v1',
    duracao: '~1 min',
    tipo: '1v1',
    xpBase: 10,
  },
  {
    id: 'dados',
    nome: 'Dados D20 + D6',
    emoji: '🎲',
    descricao: 'Rola 1 dado e maior valor vence (2-6 jogadores).',
    jogadores: '2 a 6 jogadores',
    duracao: '~30 seg',
    tipo: 'party',
    xpBase: 12,
  },
  {
    id: 'roletacores',
    nome: 'Roleta de Cores',
    emoji: '🎨',
    descricao: 'Aposte em PRETO, VERMELHO ou BRANCO. Preto/Vermelho = 2x. Branco = 10x.',
    jogadores: 'Single ou 1v1 (valor vs aposta oposta)',
    duracao: '~20 seg',
    tipo: 'sorteio',
    xpBase: 10,
  },
  {
    id: 'forca',
    nome: 'Forca',
    emoji: '🪢',
    descricao: 'Acerte a palavra antes do boneco ser enforcado.',
    jogadores: 'Single Player',
    duracao: '~2 min',
    tipo: 'single',
    xpBase: 15,
  },
  {
    id: 'quiz',
    nome: 'Quiz Trivia',
    emoji: '❓',
    descricao: '10 perguntas de múltipla escolha (até 6 jogadores).',
    jogadores: '1 a 6 jogadores',
    duracao: '~3 min',
    tipo: 'party',
    xpBase: 30,
  },
  {
    id: 'roleta',
    nome: 'Roleta Russa',
    emoji: '🔫',
    descricao: '6 câmaras. Sorteio. Último sobrevivente vence.',
    jogadores: '2 a 6 jogadores',
    duracao: '~1 min',
    tipo: 'party',
    xpBase: 15,
  },
  {
    id: 'blackjack',
    nome: 'Blackjack (21)',
    emoji: '🃏',
    descricao: 'Chegue mais perto de 21 que o dealer (IA).',
    jogadores: 'Single Player',
    duracao: '~1 min',
    tipo: 'single',
    xpBase: 15,
  },
  {
    id: 'adivinha',
    nome: 'Adivinha o Número',
    emoji: '🔢',
    descricao: 'Acerte o número de 1 a 100 em até 10 tentativas.',
    jogadores: 'Single Player',
    duracao: '~1 min',
    tipo: 'single',
    xpBase: 15,
  },
  {
    id: 'verdade',
    nome: 'Verdade ou Desafio',
    emoji: '🎭',
    descricao: 'Sorteie cartas com perguntas/desafios divertidos.',
    jogadores: '2 a 10 jogadores',
    duracao: 'Livre',
    tipo: 'party',
    xpBase: 5,
  },
  {
    id: 'memoria',
    nome: 'Jogo da Memória',
    emoji: '🧠',
    descricao: 'Encontre os 8 pares em um grid 4x4.',
    jogadores: 'Single Player',
    duracao: '~2 min',
    tipo: 'single',
    xpBase: 20,
  },
  {
    id: 'batalhanaval',
    nome: 'Batalha Naval',
    emoji: '⚓',
    descricao: 'Posicione seus navios e afunde os do oponente. Melhor de 5 não se aplica (uma partida).',
    jogadores: '1v1',
    duracao: '~3 min',
    tipo: '1v1',
    xpBase: 25,
  },
  {
    id: 'conecta4',
    nome: 'Conecta 4',
    emoji: '🔴',
    descricao: '4 fichas em linha vencem. Tabuleiro 7x6.',
    jogadores: '1v1',
    duracao: '~2 min',
    tipo: '1v1',
    xpBase: 25,
  },
];

const JOGOS_EXTERNOS = [
  {
    cat: '🎯 Casuais .io',
    items: [
      { nome: 'Skribbl.io', desc: 'Desenhe e adivinhe palavras em grupo', link: 'https://skribbl.io' },
      { nome: 'Gartic.io', desc: 'Pictionary online em português', link: 'https://gartic.io' },
      { nome: 'Gartic Phone', desc: 'Telefone sem fio com desenhos', link: 'https://garticphone.com' },
      { nome: 'Krunker.io', desc: 'FPS rápido, estilo Minecraft', link: 'https://krunker.io' },
      { nome: 'Slither.io', desc: 'Snake multiplayer gigante', link: 'http://slither.io' },
      { nome: 'Agar.io', desc: 'Coma células e domine o mapa', link: 'https://agar.io' },
      { nome: 'Diep.io', desc: 'Tanques evolutivos multiplayer', link: 'https://diep.io' },
      { nome: 'Hole.io', desc: 'Seja o buraco que come a cidade', link: 'https://hole-io.com' },
      { nome: 'Paper.io 2', desc: 'Conquiste território desenhando', link: 'https://paper-io.com' },
      { nome: 'Wormate.io', desc: 'Snake com power-ups', link: 'https://wormate.io' },
    ],
  },
  {
    cat: '🧩 Puzzle & Palavras',
    items: [
      { nome: 'Chess.com', desc: 'Xadrez online + tutoriais', link: 'https://chess.com' },
      { nome: 'Lichess', desc: 'Xadrez 100% grátis e open source', link: 'https://lichess.org' },
      { nome: 'Wordle (PT)', desc: 'Acerte a palavra em 6 tentativas', link: 'https://term.ooo' },
      { nome: '2048', desc: 'Combine números até 2048', link: 'https://play2048.co' },
      { nome: 'Set Game', desc: 'Jogo de cartas de percepção visual', link: 'https://setgame.com/set/puzzle' },
      { nome: 'Campo Minado Online', desc: 'O clássico minesweeper', link: 'https://minesweeper.online' },
      { nome: 'Sudoku.com', desc: 'Sudoku em 4 níveis', link: 'https://sudoku.com' },
      { nome: 'Mahjong Solitário', desc: 'Combine peças de mahjong', link: 'https://mahjongg.com' },
    ],
  },
  {
    cat: '🔫 Tiro / FPS',
    items: [
      { nome: 'Valorant Tracker', desc: 'Perfil, rank e estatísticas de Valorant', link: 'https://tracker.gg/valorant' },
      { nome: 'HLTV (CS2)', desc: 'Ranking, partidas e notícias de CS', link: 'https://hltv.org' },
      { nome: 'Apex Legends Status', desc: 'Estatísticas de Apex Legends', link: 'https://apexlegendsstatus.com' },
      { nome: 'Shell Shockers', desc: 'FPS com ovos armados', link: 'https://shellshock.io' },
      { nome: 'Warfare Area', desc: 'Multiplayer FPS 2D top-down', link: 'https://warfare-area.com' },
    ],
  },
  {
    cat: '🪂 Battle Royale',
    items: [
      { nome: 'Fortnite.gg', desc: 'Perfis e loja do Fortnite', link: 'https://fortnite.gg' },
      { nome: 'PUBG Lookup', desc: 'Estatísticas de PUBG', link: 'https://pubglookup.com' },
      { nome: 'CoD Warzone Stats', desc: 'Perfil de Warzone / MW3', link: 'https://cod.tracker.gg/warzone' },
    ],
  },
  {
    cat: '⚔️ MOBA',
    items: [
      { nome: 'OP.GG (LoL)', desc: 'Builds, runas e perfis de LoL', link: 'https://op.gg' },
      { nome: 'OpenDota (Dota 2)', desc: 'Estatísticas avançadas Dota2', link: 'https://opendota.com' },
      { nome: 'Porofessor Wild Rift', desc: 'Wild Rift profile + builds', link: 'https://porofessor.gg' },
    ],
  },
  {
    cat: '🏎️ Racing / Esportes',
    items: [
      { nome: 'Rocket League Tracker', desc: 'Estatísticas e MMR de RL', link: 'https://rl.tracker.gg' },
      { nome: 'F1 Fantasy', desc: 'Fantasy de Formula 1', link: 'https://fantasy.formula1.com' },
    ],
  },
  {
    cat: '🏰 Estratégia',
    items: [
      { nome: 'Tribal Wars', desc: 'MMO de estratégia medieval', link: 'https://tribalwars.com.br' },
      { nome: 'Travian', desc: 'Estratégia por turnos online', link: 'https://travian.com.br' },
      { nome: 'Risk Online', desc: 'War clássico no navegador', link: 'https://riskonline.app' },
    ],
  },
  {
    cat: '🎉 Social / Party',
    items: [
      { nome: 'Broken Picture Phone', desc: 'Jackbox style - desenhe e adivinhe', link: 'https://brokenpicturephone.com' },
      { nome: 'Codenames (horsepaste)', desc: 'Jogo de espiões em equipe', link: 'https://horsepaste.com' },
      { nome: 'Spyfall', desc: 'Descubra quem é o espião', link: 'https://spyfall.adrianocola.com' },
      { nome: 'Among Us Matchmaking', desc: 'Encontre partidas de Among Us', link: 'https://amongusmatchmaking.com' },
    ],
  },
];

const PALAVRAS_FORCA = {
  geral: [
    'cadeira', 'telefone', 'guitarra', 'violao', 'computador', 'janela', 'mochila', 'caderno',
    'copacabana', 'passaro', 'elefante', 'girafa', 'dinossauro', 'borboleta', 'abacaxi',
    'melancia', 'chocolate', 'pizza', 'lasanha', 'paralelepipedo', 'maracatu', 'futebol',
    'basquete', 'volei', 'handebol', 'carnaval', 'praia', 'montanha', 'biblioteca',
  ],
  tecnologia: [
    'javascript', 'typescript', 'python', 'programacao', 'algoritmo', 'discord', 'internet',
    'smartphone', 'processador', 'servidor', 'hacker', 'criptografia', 'blockchain', 'navegador',
    'keyboard', 'mouse', 'monitor', 'impressora', 'firewall', 'cloudflare', 'database', 'backend',
    'frontend', 'react', 'angular', 'flutter', 'kubernetes', 'docker',
  ],
  games: [
    'minecraft', 'fortnite', 'valorant', 'leaguelends', 'counterstrike', 'zelda', 'mario',
    'pokemon', 'sonic', 'tetris', 'gta', 'reddead', 'bloodborne', 'skyrim', 'fallout',
    'cyberpunk', 'witcher', 'bioshock', 'portal', 'half-life', 'overwatch', 'apex', 'roblox',
    'stardew', 'hollowknight', 'darkestsouls', 'sekiro', 'eldenring',
  ],
  animes: [
    'naruto', 'dragonball', 'onepiece', 'attackontitan', 'jujutsukaisen', 'chainsawman',
    'demonslayer', 'myheroacademia', 'deathnote', 'codegeass', 'onepunchman', 'hunterxhunter',
    'tokyoghoul', 'pokemon', 'evangelion', 'cavaleiroszodiaco', 'sailormoon', 'bleach',
    'inuyasha', 'fullmetalalchemist', 'spyxfamily', 'conan', 'narutoshippuden',
  ],
  futebol: [
    'brasil', 'argentina', 'franca', 'alemanha', 'espanha', 'itália', 'portugal', 'inglaterra',
    'neymar', 'messi', 'ronaldo', 'pele', 'maradona', 'zidane', 'cristiano', 'mbappe',
    'haaland', 'flamengo', 'palmeiras', 'santos', 'corinthians', 'saopaulo', 'botafogo',
    'barcelona', 'realmadrid', 'machester', 'liverpool', 'bayern', 'juventus',
  ],
};

const PERGUNTAS_QUIZ = [
  { cat: 'Geral', pergunta: 'Qual é a capital do Brasil?', alt: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], resp: 0 },
  { cat: 'Geral', pergunta: 'Quantos planetas existem no sistema solar?', alt: ['7', '8', '9', '10'], resp: 1 },
  { cat: 'Geral', pergunta: 'Quanto tempo a Terra leva para dar uma volta no Sol?', alt: ['1 dia', '1 mês', '1 ano', '100 dias'], resp: 2 },
  { cat: 'Geek', pergunta: 'Qual o logo vermelho circular e com cantos cortados da Nintendo?', alt: ['PlayStation', 'Switch', 'NES', 'Mario'], resp: 1 },
  { cat: 'Geek', pergunta: 'Em qual jogo aparece o personagem Geralt de Rivia?', alt: ['The Witcher', 'Skyrim', 'Dark Souls', 'Dragon Age'], resp: 0 },
  { cat: 'Geek', pergunta: 'Qual o nome da nave de Han Solo em Star Wars?', alt: ['Millennium Falcon', 'X-Wing', 'Enterprise', 'Tardis'], resp: 0 },
  { cat: 'Geek', pergunta: 'Quantos episódios existem na primeira saga Dragon Ball Z (Saiyajin a Boo)?', alt: ['100', '150', '291', '500'], resp: 2 },
  { cat: 'Games', pergunta: 'Qual é o nome do protagonista de Minecraft?', alt: ['Notch', 'Steve', 'Alex', 'Herobrine'], resp: 1 },
  { cat: 'Games', pergunta: 'Em que ano foi lançado o primeiro GTA?', alt: ['1997', '2001', '2005', '1990'], resp: 0 },
  { cat: 'Games', pergunta: 'Qual é o agente/sentinela com um pássaro falcão em Valorant?', alt: ['Jett', 'Sova', 'Cypher', 'Skye'], resp: 3 },
  { cat: 'Esportes', pergunta: 'Quantos jogadores tem um time de futebol?', alt: ['7', '9', '11', '15'], resp: 2 },
  { cat: 'Esportes', pergunta: 'Quem ganhou a Copa do Mundo de 2022?', alt: ['Brasil', 'França', 'Argentina', 'Alemanha'], resp: 2 },
  { cat: 'Esportes', pergunta: 'Em que esporte se usa a palavra "love" para zero pontos?', alt: ['Tênis', 'Futebol', 'Volei', 'Beisebol'], resp: 0 },
  { cat: 'Ciência', pergunta: 'Qual é o símbolo químico do Ouro?', alt: ['Au', 'Ag', 'Fe', 'Cu'], resp: 0 },
  { cat: 'Ciência', pergunta: 'Qual o maior planeta do sistema solar?', alt: ['Saturno', 'Terra', 'Júpiter', 'Netuno'], resp: 2 },
  { cat: 'Ciência', pergunta: 'Quem formulou a teoria da relatividade?', alt: ['Newton', 'Einstein', 'Tesla', 'Darwin'], resp: 1 },
  { cat: 'História', pergunta: 'Em que ano o Brasil foi descoberto?', alt: ['1492', '1500', '1600', '1822'], resp: 1 },
  { cat: 'História', pergunta: 'Quem foi o primeiro presidente do Brasil?', alt: ['Dom Pedro I', 'Deodoro da Fonseca', 'Getúlio Vargas', 'Juscelino'], resp: 1 },
  { cat: 'História', pergunta: 'Em que ano caiu o Muro de Berlim?', alt: ['1945', '1989', '1991', '2001'], resp: 1 },
  { cat: 'Geral', pergunta: 'Qual o país com maior população do mundo?', alt: ['Índia', 'China', 'EUA', 'Rússia'], resp: 0 },
  { cat: 'Geral', pergunta: 'Qual o maior oceano do planeta?', alt: ['Atlântico', 'Índico', 'Pacífico', 'Ártico'], resp: 2 },
  { cat: 'Geek', pergunta: 'Qual é o verdadeiro nome do Batman?', alt: ['Tony Stark', 'Bruce Wayne', 'Clark Kent', 'Peter Parker'], resp: 1 },
  { cat: 'Geek', pergunta: 'Qual anime tem o protagonista Monkey D. Luffy?', alt: ['Naruto', 'Bleach', 'One Piece', 'Fairy Tail'], resp: 2 },
  { cat: 'Games', pergunta: 'Qual o nome do modo clássico de "corrida de tanques" na série Mario Kart?', alt: ['Grand Prix', 'Time Trial', 'Battle', 'Rainbow Road'], resp: 0 },
  { cat: 'Geral', pergunta: 'Qual animal é conhecido como o "Rei da Selva"?', alt: ['Elefante', 'Leão', 'Tigre', 'Gorila'], resp: 1 },
];

const CARTAS_VO_D = [
  { tipo: 'verdade', texto: 'Qual foi a coisa mais vergonhosa que você já fez na escola?' },
  { tipo: 'verdade', texto: 'Qual o seu maior medo irracional?' },
  { tipo: 'verdade', texto: 'Você já mentiu para sair de um encontro/rolê? Qual foi a desculpa?' },
  { tipo: 'verdade', texto: 'Quantos namoros/sérios você já teve?' },
  { tipo: 'verdade', texto: 'Qual o maior segredo que já guardou de um amigo?' },
  { tipo: 'verdade', texto: 'Qual personagem fictício você acha que seria seu melhor amigo?' },
  { tipo: 'desafio', texto: 'Mande um audio de 10s cantando o hino do seu time (ou qualquer outro).' },
  { tipo: 'desafio', texto: 'Faça uma selfie engraçada agora e envie no canal.' },
  { tipo: 'desafio', texto: 'Imite a voz do seu professor ou chefe por 1 minuto.' },
  { tipo: 'desafio', texto: 'Coloque um emoji aleatório na sua foto de perfil por 10 minutos.' },
  { tipo: 'desafio', texto: 'Escreva um haicai (5/7/5 sílabas) sobre o servidor agora.' },
  { tipo: 'desafio', texto: 'Chame um membro aleatório e diga "você é incrível" no privado.' },
  { tipo: 'ambos', texto: 'Ou: Beije o membro mais próximo (virtual) OR Conte algo embaraçoso do último mês.' },
  { tipo: 'ambos', texto: 'Ou: Dance por 30 segundos (ou mande a letra de uma música) OR Conte o primeiro sonho que lembra.' },
];

const TRACKER_JOGOS = [
  { id: 'valorant', nome: 'Valorant', emoji: '🔴', link: 'https://tracker.gg/valorant', plataformas: ['PC (Riot ID)'] },
  { id: 'cs2', nome: 'CS2 / CS:GO', emoji: '💨', link: 'https://tracker.gg/csgo', plataformas: ['Steam ID'] },
  { id: 'lol', nome: 'League of Legends', emoji: '⚔️', link: 'https://tracker.gg/lol', plataformas: ['BR / NA / EUW', 'Summoner Name'] },
  { id: 'fortnite', nome: 'Fortnite', emoji: '🪂', link: 'https://tracker.gg/fortnite', plataformas: ['Epic / PSN / Xbox', 'Nickname'] },
  { id: 'rocket', nome: 'Rocket League', emoji: '🚗', link: 'https://rl.tracker.gg', plataformas: ['Steam / Epic / PSN', 'Nickname'] },
  { id: 'apex', nome: 'Apex Legends', emoji: '🦾', link: 'https://tracker.gg/apex', plataformas: ['Origin / PSN / Xbox', 'Nickname'] },
  { id: 'cod', nome: 'Call of Duty', emoji: '💣', link: 'https://cod.tracker.gg/warzone', plataformas: ['Activision ID', 'PSN / Xbox / Battlenet'] },
];

module.exports = {
  MINI_JOGOS,
  JOGOS_EXTERNOS,
  PALAVRAS_FORCA,
  PERGUNTAS_QUIZ,
  CARTAS_VO_D,
  TRACKER_JOGOS,
};


})(__mod_obj_gamesInfo__, __mod_obj_gamesInfo__.exports, __makeReq_gamesInfo__, path.dirname(path.resolve(process.cwd(), "lib/gamesInfo.js")), path.resolve(process.cwd(), "lib/gamesInfo.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.gamesInfo = __mod_obj_gamesInfo__.exports;

const __makeReq_achievements__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "lib/achievements.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_achievements__ = { exports: __BOT_MODULE__.achievements };
// -------- lib/achievements.js --------
(function (module, exports, require, __dirname, __filename) {
const ACHIEVEMENTS = {
  AC01: { id: 'AC01', nome: '🥾 Primeiros Passos', desc: 'Jogou sua primeira partida', gpReward: 10 },
  AC02: { id: 'AC02', nome: '🏆 Vitória Inaugural', desc: 'Conseguiu sua primeira vitória', gpReward: 20 },
  AC03: { id: 'AC03', nome: '🎯 Maratonista', desc: 'Jogou 10 partidas', gpReward: 30 },
  AC04: { id: 'AC04', nome: '💪 Dedicado', desc: 'Jogou 100 partidas', gpReward: 200 },
  AC05: { id: 'AC05', nome: '💎 Perfeito', desc: 'Venceu PPT 3x0 sem perder rodada', gpReward: 50 },
  AC06: { id: 'AC06', nome: '🧠 Mestre da Forca', desc: 'Ganhou forca sem errar nenhuma letra', gpReward: 75 },
  AC07: { id: 'AC07', nome: '🎓 Quiz Master', desc: 'Acertou 10/10 no Quiz', gpReward: 100 },
  AC08: { id: 'AC08', nome: '🍀 Sortudo', desc: 'Ganhou a Roleta Russa de primeira', gpReward: 40 },
  AC09: { id: 'AC09', nome: '🃏 Blackjack 21', desc: 'Fez exatamente 21 no Blackjack', gpReward: 60 },
  AC10: { id: 'AC10', nome: '🔮 Adivinho Prodígio', desc: 'Acertou número em ≤3 tentativas', gpReward: 50 },
  AC11: { id: 'AC11', nome: '🧘 Memória Fotográfica', desc: 'Terminou Memória em ≤20 segundos', gpReward: 80 },
  AC12: { id: 'AC12', nome: '⚓ Almirante Implacável', desc: 'Venceu Batalha Naval sem perder navio', gpReward: 100 },
  AC13: { id: 'AC13', nome: '♟️ Estrategista', desc: 'Vitória Conecta 4 em ≤10 jogadas', gpReward: 60 },
  AC14: { id: 'AC14', nome: '🥉 Top 3', desc: 'Ficou no Top 3 do servidor', gpReward: 100 },
  AC15: { id: 'AC15', nome: '👑 Rei do Servidor', desc: 'Número 1 no ranking global do servidor', gpReward: 300 },
  AC16: { id: 'AC16', nome: '🔥 Implacável', desc: '10 vitórias consecutivas', gpReward: 150 },
  AC17: { id: 'AC17', nome: '⚔️ Rival de Sangue', desc: '20 partidas contra o mesmo oponente', gpReward: 50 },
  AC18: { id: 'AC18', nome: '🤝 Sociável', desc: 'Jogou com 10 membros diferentes', gpReward: 50 },
  AC19: { id: 'AC19', nome: '🎖️ Veterano', desc: 'Atingiu o Nível 20', gpReward: 200 },
  AC20: { id: 'AC20', nome: '⭐ Lendário', desc: 'Atingiu o Nível 50', gpReward: 1000 },
  AC21: { id: 'AC21', nome: '🎲 Sortudo nos Dados', desc: 'Tirou 20 natural em um D20', gpReward: 40 },
  AC22: { id: 'AC22', nome: '🖖 Spock Salva', desc: 'Venceu usando Spock no PPT-Lagarto-Spock', gpReward: 30 },
  AC23: { id: 'AC23', nome: '💵 Primeira Compra', desc: 'Comprou algo na Loja pela primeira vez', gpReward: 15 },
  AC24: { id: 'AC24', nome: '🎰 Giro da Sorte', desc: 'Ganhou 500+ GP na Roleta da Loja', gpReward: 75 },
  AC25: { id: 'AC25', nome: '💎 Imortal', desc: 'Nível 100 atingido', gpReward: 5000 },
};

const TITULOS_LOJA = [
  { id: 't_rei', nome: '👑 Rei', preco: 200, tipo: 'titulo' },
  { id: 't_rainha', nome: '👸 Rainha', preco: 200, tipo: 'titulo' },
  { id: 't_raposo', nome: '🦊 Raposo', preco: 150, tipo: 'titulo' },
  { id: 't_lobo', nome: '🐺 Lobo Alfa', preco: 300, tipo: 'titulo' },
  { id: 't_fenix', nome: '🔥 Fênix', preco: 400, tipo: 'titulo' },
  { id: 't_gamer', nome: '🎮 Gamer Pro', preco: 250, tipo: 'titulo' },
  { id: 't_vampiro', nome: '🧛 Vampiro', preco: 350, tipo: 'titulo' },
  { id: 't_mago', nome: '🧙‍♂️ Mago', preco: 350, tipo: 'titulo' },
  { id: 't_ninja', nome: '🥷 Ninja', preco: 300, tipo: 'titulo' },
  { id: 't_unicornio', nome: '🦄 Unicórnio', preco: 500, tipo: 'titulo' },
  { id: 't_deus', nome: '⚡ Deus Grego', preco: 1000, tipo: 'titulo' },
  { id: 't_brabo', nome: '💎 Brabo Demais', preco: 750, tipo: 'titulo' },
  { id: 't_padawan', nome: '⚔️ Padawan', preco: 100, tipo: 'titulo' },
  { id: 't_jedi', nome: '🛸 Mestre Jedi', preco: 600, tipo: 'titulo' },
  { id: 't_robo', nome: '🤖 Robô de Guerra', preco: 400, tipo: 'titulo' },
];

const CORES_LOJA = [
  { id: 'c_azul', nome: 'Azul Elétrico', cor: '#3498db', preco: 200, tipo: 'cor' },
  { id: 'c_verde', nome: 'Verde Neon', cor: '#2ecc71', preco: 200, tipo: 'cor' },
  { id: 'c_roxo', nome: 'Roxo Cósmico', cor: '#9b59b6', preco: 200, tipo: 'cor' },
  { id: 'c_amarelo', nome: 'Amarelo Ouro', cor: '#f1c40f', preco: 200, tipo: 'cor' },
  { id: 'c_laranja', nome: 'Laranja Queimado', cor: '#e67e22', preco: 200, tipo: 'cor' },
  { id: 'c_ciano', nome: 'Ciano Água', cor: '#1abc9c', preco: 200, tipo: 'cor' },
  { id: 'c_rosa', nome: 'Rosa Choque', cor: '#ff69b4', preco: 250, tipo: 'cor' },
  { id: 'c_branco', nome: 'Branco Puro', cor: '#ffffff', preco: 250, tipo: 'cor' },
  { id: 'c_rainbow', nome: '🌈 Rainbow (rotativo)', cor: 'rainbow', preco: 1000, tipo: 'cor' },
];

const PREMIO_ROLETA = [
  { peso: 30, tipo: 'gp', valor: 20, nome: '20 GP' },
  { peso: 25, tipo: 'gp', valor: 50, nome: '50 GP' },
  { peso: 15, tipo: 'gp', valor: 100, nome: '100 GP' },
  { peso: 8, tipo: 'gp', valor: 200, nome: '200 GP' },
  { peso: 5, tipo: 'xp', valor: 100, nome: '100 XP' },
  { peso: 5, tipo: 'xp', valor: 250, nome: '250 XP' },
  { peso: 5, tipo: 'titulo', valor: 't_ninja', nome: 'Título 🥷 Ninja' },
  { peso: 4, tipo: 'gp', valor: 500, nome: '🔥 500 GP' },
  { peso: 2, tipo: 'cor', valor: 'c_roxo', nome: 'Cor Roxa Neon' },
  { peso: 1, tipo: 'gp', valor: 1500, nome: '💎 JACKPOT 1500 GP' },
];

function sortearPremio() {
  const total = PREMIO_ROLETA.reduce((s, p) => s + p.peso, 0);
  let r = Math.random() * total;
  for (const p of PREMIO_ROLETA) {
    if (r < p.peso) return p;
    r -= p.peso;
  }
  return PREMIO_ROLETA[0];
}

module.exports = { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, PREMIO_ROLETA, sortearPremio };


})(__mod_obj_achievements__, __mod_obj_achievements__.exports, __makeReq_achievements__, path.dirname(path.resolve(process.cwd(), "lib/achievements.js")), path.resolve(process.cwd(), "lib/achievements.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.achievements = __mod_obj_achievements__.exports;

const __makeReq_game_ppt__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/ppt.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_ppt__ = { exports: __BOT_MODULE__.game_ppt };
// -------- commands/games/ppt.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('../../database');
const { registrarPartida, removerPartida } = require('../jogos');

const OPCOES_PPT = [
  { id: 'pedra', nome: 'Pedra', emoji: '✊', vence: ['tesoura'] },
  { id: 'papel', nome: 'Papel', emoji: '✋', vence: ['pedra'] },
  { id: 'tesoura', nome: 'Tesoura', emoji: '✌️', vence: ['papel'] },
];

const OPCOES_SPOCK = [
  { id: 'pedra', nome: 'Pedra', emoji: '✊', vence: ['tesoura', 'lagarto'] },
  { id: 'papel', nome: 'Papel', emoji: '✋', vence: ['pedra', 'spock'] },
  { id: 'tesoura', nome: 'Tesoura', emoji: '✌️', vence: ['papel', 'lagarto'] },
  { id: 'lagarto', nome: 'Lagarto', emoji: '🦎', vence: ['papel', 'spock'] },
  { id: 'spock', nome: 'Spock', emoji: '🖖', vence: ['pedra', 'tesoura'] },
];

function comparar(op1, op2, opcoes) {
  if (op1 === op2) return 0;
  const a = opcoes.find((o) => o.id === op1);
  return a && a.vence.includes(op2) ? 1 : -1;
}

async function criar({ interaction, client, jogo, donoId, oponente, desafiado, apostaGP, conviteDM = false }) {
  try {
    const guildId = interaction.guildId;
    const isSpock = jogo.id === 'pptspock';
    const opcoes = isSpock ? OPCOES_SPOCK : OPCOES_PPT;
    const vsIA = !oponente;
    const user1Id = donoId;
    const user2Id = vsIA ? null : oponente;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;

    let placarP1 = 0;
    let placarP2 = 0;
    let rodada = 1;
    let escolhaP1 = null;
    let escolhaP2 = null;
    let fase = 'escolha_p1';
    let terminou = false;
    let usouSpockP1 = false;
    let usouSpockP2 = false;
    let rodadasP1Ganhou = 0;

    const p1User = await client.users.fetch(user1Id).catch(() => null);
    const p2User = vsIA ? null : await client.users.fetch(user2Id).catch(() => null);

    function tituloPlacar() {
      const t1 = p1User ? p1User.tag : 'Jogador 1';
      const t2 = vsIA ? '🤖 IA' : (p2User ? p2User.tag : 'Jogador 2');
      return `**${t1}** \`${placarP1}\` x \`${placarP2}\` **${t2}**`;
    }

    function montarBotoes(desabilitado = false, jogadorAtivo = null) {
      const rows = [];
      const chunk1 = opcoes.slice(0, 3);
      const chunk2 = opcoes.slice(3);
      const buildRow = (lista) =>
        new ActionRowBuilder().addComponents(
          lista.map((o) =>
            new ButtonBuilder()
              .setCustomId(`jogos:${jogoId}:${o.id}`)
              .setLabel(o.nome)
              .setEmoji(o.emoji)
              .setStyle(ButtonStyle.Primary)
              .setDisabled(desabilitado)
          )
        );
      rows.push(buildRow(chunk1));
      if (chunk2.length) rows.push(buildRow(chunk2));
      return rows;
    }

    function jogadorAtualId() {
      if (vsIA) return user1Id;
      if (fase === 'escolha_p1') return user1Id;
      return user2Id;
    }

    function textoFase() {
      if (fase === 'resultado') return '⏳ Processando...';
      if (vsIA) {
        return `${p1User || 'Você'}, faça sua escolha abaixo para a **Rodada ${rodada}**!`;
      }
      if (fase === 'escolha_p1') {
        return `🟢 **Rodada ${rodada}**: ${p1User || 'Jogador 1'} faça sua escolha primeiro.`;
      }
      return `🔴 **Rodada ${rodada}**: Agora é a vez de ${p2User || 'Jogador 2'} escolher.`;
    }

    function montarEmbed(campoExtra = null, resultadoRodada = null) {
      const nomeJogo = isSpock ? '🖖 PPT Lagarto-Spock' : '✊ Pedra Papel Tesoura';
      const e = new EmbedBuilder()
        .setTitle(`${nomeJogo} • Melhor de 5 (primeiro a 5)`)
        .setColor('#ff0040')
        .addFields({ name: '🏆 Placar', value: tituloPlacar(), inline: false })
        .addFields({ name: fase === 'resultado' ? '📢 Resultado da Rodada' : '🕹️ Fase Atual', value: resultadoRodada || textoFase(), inline: false });
      if (!vsIA && apostaGP > 0) {
        e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP cada (vencedor leva tudo: ${apostaGP * 2} GP)`, inline: false });
      }
      if (vsIA) {
        e.addFields({ name: '💠 Premiação', value: 'Vitória = **+5 GP fixos** + XP por nível', inline: false });
      }
      if (campoExtra) e.addFields(campoExtra);
      e.setFooter({ text: `Rodada ${rodada} • Melhor de 5 • ${vsIA ? 'Modo vs IA' : 'Duelo 1v1'}` });
      return e;
    }

    async function finalizar(resultadoP1) {
      terminou = true;
      const detalhes = {
        placar: [placarP1, placarP2],
        modo: vsIA ? 'IA' : '1v1',
        jogo: jogoId,
      };
      let gpP1 = 0;
      let gpP2 = 0;

      if (vsIA) {
        if (resultadoP1 === 'VITORIA') {
          gpP1 = 5;
        }
      } else {
        if (apostaGP > 0) {
          if (resultadoP1 === 'VITORIA') { gpP1 = apostaGP * 2; gpP2 = 0; }
          else if (resultadoP1 === 'DERROTA') { gpP2 = apostaGP * 2; gpP1 = 0; }
          else { gpP1 = apostaGP; gpP2 = apostaGP; }
        }
      }
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resultadoP1, gpP1, gpP2, detalhes);

      if (gpP1 > 0) {
        await db.addPlayerGP(user1Id, guildId, gpP1).catch(() => {});
      }
      if (gpP2 > 0 && user2Id) {
        await db.addPlayerGP(user2Id, guildId, gpP2).catch(() => {});
      }

      const primeiraPartidaP1 = (await db.getPlayerMatches(user1Id, guildId, 1, jogoId)).length <= 1;
      if (primeiraPartidaP1) {
        const un = await db.unlockAchievement(user1Id, 'AC01');
        if (un) await db.addPlayerGP(user1Id, guildId, 10);
      }
      if (!vsIA) {
        const primeiraPartidaP2 = (await db.getPlayerMatches(user2Id, guildId, 1, jogoId)).length <= 1;
        if (primeiraPartidaP2) {
          const un2 = await db.unlockAchievement(user2Id, 'AC01');
          if (un2) await db.addPlayerGP(user2Id, guildId, 10);
        }
      }

      const vencedorId = resultadoP1 === 'VITORIA' ? user1Id : (resultadoP1 === 'DERROTA' ? user2Id : null);
      if (vencedorId) {
        const vm = await db.getRivalidade(guildId, user1Id, user2Id || 'IA_X');
        const totalAntes = vm ? vm.total : 0;
        const primeiraVitoria = totalAntes === 0;
        if (primeiraVitoria) {
          const un = await db.unlockAchievement(vencedorId, 'AC02');
          if (un) await db.addPlayerGP(vencedorId, guildId, 20);
        }
      }

      if (!isSpock && (placarP1 === 5 && placarP2 === 0)) {
        const un = await db.unlockAchievement(user1Id, 'AC05');
        if (un) await db.addPlayerGP(user1Id, guildId, 50);
      }
      if (!isSpock && user2Id && placarP2 === 5 && placarP1 === 0) {
        const un = await db.unlockAchievement(user2Id, 'AC05');
        if (un) await db.addPlayerGP(user2Id, guildId, 50);
      }

      if (isSpock) {
        if (resultadoP1 === 'VITORIA' && usouSpockP1) {
          const un = await db.unlockAchievement(user1Id, 'AC22');
          if (un) await db.addPlayerGP(user1Id, guildId, 30);
        }
        if (user2Id && resultadoP1 === 'DERROTA' && usouSpockP2) {
          const un = await db.unlockAchievement(user2Id, 'AC22');
          if (un) await db.addPlayerGP(user2Id, guildId, 30);
        }
      }

      const resultadoTexto =
        resultadoP1 === 'VITORIA'
          ? `🎉 ${p1User || 'Jogador 1'} **venceu** a partida ${placarP1} x ${placarP2}!`
          : resultadoP1 === 'DERROTA'
          ? `💀 ${vsIA ? '🤖 IA' : (p2User || 'Jogador 2')} **venceu** a partida ${placarP2} x ${placarP1}!`
          : `🤝 Partida **empatada** (improvável em Md5)!`;

      const embed = new EmbedBuilder()
        .setTitle(`${isSpock ? '🖖 PPT Lagarto-Spock' : '✊ Pedra Papel Tesoura'} • Partida Finalizada`)
        .setColor('#ff0040')
        .addFields(
          { name: '🏆 Placar Final', value: tituloPlacar(), inline: false },
          { name: '📢 Resultado', value: resultadoTexto, inline: false }
        )
        .setFooter({ text: `✅ XP, GP e ELO atualizados • Partida registrada` });

      if (resultadoP1 === 'VITORIA' && gpP1 > 0) embed.addFields({ name: '💰 GP recebido', value: `+${gpP1} GP para ${p1User?.tag || 'Você'}`, inline: false });
      if (resultadoP1 === 'DERROTA' && gpP2 > 0 && p2User) embed.addFields({ name: '💰 GP recebido', value: `+${gpP2} GP para ${p2User.tag}`, inline: false });

      await interaction.editReply({ embeds: [embed], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function processarRodada() {
      fase = 'resultado';
      let op1 = opcoes.find((o) => o.id === escolhaP1);
      let op2 = opcoes.find((o) => o.id === escolhaP2);
      if (!op2 && vsIA) {
        const ai = opcoes[Math.floor(Math.random() * opcoes.length)];
        escolhaP2 = ai.id;
        op2 = ai;
      }
      const res = comparar(escolhaP1, escolhaP2, opcoes);
      let resultadoRodada;
      if (res === 0) {
        resultadoRodada = `🟰 **Empate!** ${op1.emoji} ${op1.nome} = ${op2.emoji} ${op2.nome}. Ninguém pontua.`;
      } else if (res === 1) {
        placarP1++;
        rodadasP1Ganhou++;
        resultadoRodada = `✅ **Ponto para ${p1User?.tag || 'Jogador 1'}!** ${op1.emoji} ${op1.nome} **vence** ${op2.emoji} ${op2.nome}.`;
      } else {
        placarP2++;
        resultadoRodada = `✅ **Ponto para ${vsIA ? '🤖 IA' : (p2User?.tag || 'Jogador 2')}!** ${op2.emoji} ${op2.nome} **vence** ${op1.emoji} ${op1.nome}.`;
      }

      if (escolhaP1 === 'spock') usouSpockP1 = true;
      if (escolhaP2 === 'spock') usouSpockP2 = true;

      const embed = montarEmbed(null, resultadoRodada);
      await interaction.editReply({ embeds: [embed], components: montarBotoes(true) }).catch(() => {});

      const p1Ganhou = placarP1 >= 5;
      const p2Ganhou = placarP2 >= 5;

      setTimeout(async () => {
        if (p1Ganhou || p2Ganhou) {
          await finalizar(p1Ganhou ? 'VITORIA' : (p2Ganhou ? 'DERROTA' : 'EMPATE'));
        } else {
          rodada++;
          escolhaP1 = null;
          escolhaP2 = null;
          fase = 'escolha_p1';
          await interaction.editReply({
            embeds: [montarEmbed()],
            components: montarBotoes(false),
          }).catch(() => {});
        }
      }, 1800);
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id].filter(Boolean),
      async handleButton(btnInteraction, _client, partes) {
        try {
          if (terminou) return;
          const uid = btnInteraction.user.id;
          const esperado = jogadorAtualId();
          if (uid !== esperado) {
            await btnInteraction.reply({ content: '⚠️ Não é sua vez de jogar!', ephemeral: true }).catch(() => {});
            return;
          }
          const opId = partes[0];
          const opValida = opcoes.find((o) => o.id === opId);
          if (!opValida) return;

          try { await btnInteraction.deferUpdate(); } catch (_) {}

          if (fase === 'escolha_p1') {
            escolhaP1 = opId;
            if (vsIA) {
              fase = 'escolha_p2';
              await processarRodada();
            } else {
              fase = 'escolha_p2';
              await interaction.editReply({
                embeds: [montarEmbed({ name: '✅ Escolha feita', value: `${p1User?.tag || 'Jogador 1'} já escolheu. Agora aguarde ${p2User?.tag || 'Jogador 2'}.`, inline: false })],
                components: montarBotoes(false),
              }).catch(() => {});
            }
          } else if (fase === 'escolha_p2') {
            escolhaP2 = opId;
            await processarRodada();
          }
        } catch (err) {
          console.error('[ppt handleButton err]', err);
          if (!btnInteraction.replied && !btnInteraction.deferred) {
            try { await btnInteraction.reply({ content: '❌ Erro no jogo.', ephemeral: true }).catch(() => {}); } catch (_) {}
          }
        }
      },
      async cancelar(_motivo) {
        if (terminou) return;
        terminou = true;
        if (!vsIA && apostaGP > 0) {
          await db.addPlayerGP(user1Id, guildId, apostaGP).catch(() => {});
          await db.addPlayerGP(user2Id, guildId, apostaGP).catch(() => {});
        }
        try {
          const embed = new EmbedBuilder()
            .setTitle(`${isSpock ? '🖖 PPT' : '✊ PPT'} • Cancelado`)
            .setColor('#ff0040')
            .setDescription('⏹️ A partida foi cancelada.')
            .setFooter({ text: !vsIA && apostaGP > 0 ? '💰 Apostas devolvidas.' : '' });
          await interaction.editReply({ embeds: [embed], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);

    await interaction.editReply({
      embeds: [montarEmbed()],
      components: montarBotoes(false),
    }).catch(() => {});

    return partida;
  } catch (err) {
    console.error('[ppt criar err]', err);
    try {
      await interaction.editReply({ content: '❌ Erro ao criar partida de PPT: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {});
    } catch (_) {}
    return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_ppt__, __mod_obj_game_ppt__.exports, __makeReq_game_ppt__, path.dirname(path.resolve(process.cwd(), "commands/games/ppt.js")), path.resolve(process.cwd(), "commands/games/ppt.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_ppt = __mod_obj_game_ppt__.exports;

const __makeReq_game_carasimples__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/carasimples.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_carasimples__ = { exports: __BOT_MODULE__.game_carasimples };
// -------- commands/games/carasimples.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('../../database');
const { CARTAS_VO_D } = require('../../lib/gamesInfo');
const { registrarPartida, removerPartida } = require('../jogos');

function uid(user, fallback = '?') {
  try { return user ? (user.tag || user.username || fallback) : fallback; }
  catch (_) { return fallback; }
}

async function desbloquearAC01(userId, guildId, jogoId) {
  const lista = await db.getPlayerMatches(userId, guildId, 1, jogoId);
  if (lista.length <= 1) {
    const un = await db.unlockAchievement(userId, 'AC01');
    if (un) await db.addPlayerGP(userId, guildId, 10);
  }
}

async function desbloquearAC02(userId, guildId) {
  const un = await db.unlockAchievement(userId, 'AC02');
  if (un) await db.addPlayerGP(userId, guildId, 20);
}

async function criarCaraCoroa({ interaction, client, jogo, donoId, oponente, desafiado, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const vsIA = !oponente;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const user1Id = donoId;
    const user2Id = vsIA ? null : oponente;
    const p1User = await client.users.fetch(user1Id).catch(() => null);
    const p2User = vsIA ? null : await client.users.fetch(user2Id).catch(() => null);

    let escolhaP1 = null;
    let escolhaP2 = null;
    let resultado = null;
    let fase = vsIA ? 'escolha_p1' : 'escolha_p1';
    let terminou = false;

    function botoesEscolha(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:cara`).setLabel('Cara').setEmoji('👤').setStyle(ButtonStyle.Primary).setDisabled(disabled),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:coroa`).setLabel('Coroa').setEmoji('👑').setStyle(ButtonStyle.Secondary).setDisabled(disabled)
        ),
      ];
    }

    function montarEmbed(campoExtra = null) {
      const e = new EmbedBuilder()
        .setTitle('🪙 Cara ou Coroa')
        .setColor('#ff0040')
        .setDescription(
          vsIA
            ? `Escolha **Cara** ou **Coroa** e veremos a sorte! (${p1User || 'Você'} vs 🤖 IA)`
            : `Duelo: **${p1User?.tag || 'Jogador 1'}** vs **${p2User?.tag || 'Jogador 2'}**`
        );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP cada`, inline: false });
      const faseTxt =
        fase === 'escolha_p1' ? `🟢 ${p1User?.tag || 'Jogador 1'}: escolha Cara ou Coroa.`
        : fase === 'escolha_p2' ? `🔴 ${p2User?.tag || 'Jogador 2'}: escolha Cara ou Coroa.`
        : fase === 'resultado' ? (resultado || '') : '';
      e.addFields({ name: fase === 'resultado' ? '📢 Resultado' : '🕹️ Fase', value: faseTxt || '...', inline: false });
      if (campoExtra) e.addFields(campoExtra);
      return e;
    }

    async function finalizar(vencedor) {
      terminou = true;
      const resP1 = vencedor === user1Id ? 'VITORIA' : vencedor === 'EMPATE' ? 'EMPATE' : 'DERROTA';
      let gp1 = 0, gp2 = 0;
      if (vsIA) {
        if (resP1 === 'VITORIA') gp1 = 5;
      } else {
        if (apostaGP > 0) {
          if (resP1 === 'VITORIA') { gp1 = apostaGP * 2; gp2 = 0; }
          else if (resP1 === 'DERROTA') { gp2 = apostaGP * 2; gp1 = 0; }
          else { gp1 = apostaGP; gp2 = apostaGP; }
        }
      }
      const detalhes = { cara_coroa: { escolhaP1, escolhaP2, sorteio: resultado } };
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resP1, gp1, gp2, detalhes);
      if (gp1 > 0) await db.addPlayerGP(user1Id, guildId, gp1).catch(() => {});
      if (gp2 > 0) await db.addPlayerGP(user2Id, guildId, gp2).catch(() => {});
      await desbloquearAC01(user1Id, guildId, jogoId);
      if (!vsIA) await desbloquearAC01(user2Id, guildId, jogoId);
      if (vencedor && vencedor !== 'EMPATE') await desbloquearAC02(vencedor, guildId);

      const txt =
        vencedor === 'EMPATE' ? '🤝 Empate!'
        : vencedor === user1Id ? `🎉 **${p1User?.tag || 'Jogador 1'} venceu!**`
        : `💀 **${vsIA ? '🤖 IA' : (p2User?.tag || 'Jogador 2')} venceu!**`;

      const embed = new EmbedBuilder()
        .setTitle('🪙 Cara ou Coroa • Finalizado')
        .setColor('#ff0040')
        .addFields({ name: '📢 Resultado', value: `${resultado}\n\n${txt}`, inline: false });
      if (apostaGP > 0 && (gp1 > 0 || gp2 > 0)) {
        const partes = [];
        if (gp1 > 0) partes.push(`+${gp1} GP → ${p1User?.tag || 'Jogador 1'}`);
        if (gp2 > 0) partes.push(`+${gp2} GP → ${p2User?.tag || 'Jogador 2'}`);
        embed.addFields({ name: '💰 GP recebido', value: partes.join('\n'), inline: false });
      }
      await interaction.editReply({ embeds: [embed], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function processar() {
      fase = 'resultado';
      const opcoes = ['Cara 👤', 'Coroa 👑'];
      const sorteado = Math.random() < 0.5 ? 'cara' : 'coroa';
      const nomeSorteado = sorteado === 'cara' ? opcoes[0] : opcoes[1];
      resultado = `A moeda caiu em **${nomeSorteado}**!\n` +
        `${p1User?.tag || 'Jogador 1'} escolheu **${escolhaP1 === 'cara' ? opcoes[0] : opcoes[1]}**.` +
        (!vsIA ? `\n${p2User?.tag || 'Jogador 2'} escolheu **${escolhaP2 === 'cara' ? opcoes[0] : opcoes[1]}**.` : '');
      const acertouP1 = escolhaP1 === sorteado;
      const acertouP2 = vsIA ? (escolhaP1 !== sorteado) : (escolhaP2 === sorteado);
      let vencedor = 'EMPATE';
      if (acertouP1 && !acertouP2) vencedor = user1Id;
      else if (acertouP2 && !acertouP1) vencedor = vsIA ? 'IA' : user2Id;
      await interaction.editReply({ embeds: [montarEmbed()], components: botoesEscolha(true) }).catch(() => {});
      setTimeout(() => finalizar(vencedor === 'IA' ? null : vencedor), 1500);
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id].filter(Boolean),
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const op = partes[0];
          if (op !== 'cara' && op !== 'coroa') return;
          const esperado = fase === 'escolha_p1' ? user1Id : (fase === 'escolha_p2' ? user2Id : null);
          if (!esperado || btn.user.id !== esperado) {
            await btn.reply({ content: '⚠️ Não é sua vez!', ephemeral: true }).catch(() => {});
            return;
          }
          try { await btn.deferUpdate(); } catch (_) {}
          if (fase === 'escolha_p1') {
            escolhaP1 = op;
            if (vsIA) {
              await processar();
            } else {
              fase = 'escolha_p2';
              await interaction.editReply({
                embeds: [montarEmbed({ name: '✅ Jogada feita', value: `${p1User?.tag || 'Jogador 1'} escolheu. Agora ${p2User?.tag || 'Jogador 2'}.`, inline: false })],
                components: botoesEscolha(false),
              }).catch(() => {});
            }
          } else if (fase === 'escolha_p2') {
            escolhaP2 = op;
            await processar();
          }
        } catch (err) {
          console.error('[caracoroa btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) {
          await db.addPlayerGP(user1Id, guildId, apostaGP).catch(() => {});
          if (!vsIA) await db.addPlayerGP(user2Id, guildId, apostaGP).catch(() => {});
        }
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🪙 Cancelado').setColor('#ff0040').setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesEscolha(false) }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[caracoroa criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro ao iniciar: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarParOuImpar({ interaction, client, jogo, donoId, oponente, desafiado, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const vsIA = !oponente;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const user1Id = donoId;
    const user2Id = vsIA ? null : oponente;
    const p1User = await client.users.fetch(user1Id).catch(() => null);
    const p2User = vsIA ? null : await client.users.fetch(user2Id).catch(() => null);

    let placarP1 = 0;
    let placarP2 = 0;
    let rodada = 1;
    let fase = 'escolha_tipo';
    let escolhaTipoP1 = null;
    let dedosP1 = null;
    let dedosP2 = null;
    let terminou = false;
    let resultado = '';
    let resultadoRodada = null;

    function tituloPlacar() {
      const t1 = p1User ? p1User.tag : 'Jogador 1';
      const t2 = vsIA ? '🤖 IA' : (p2User ? p2User.tag : 'Jogador 2');
      return `**${t1}** \`${placarP1}\` x \`${placarP2}\` **${t2}**`;
    }

    function botoesTipo(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:tipo:par`).setLabel('Par').setEmoji('0️⃣').setStyle(ButtonStyle.Primary).setDisabled(disabled),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:tipo:impar`).setLabel('Ímpar').setEmoji('1️⃣').setStyle(ButtonStyle.Secondary).setDisabled(disabled)
        ),
      ];
    }
    function botoesDedos(disabled = false) {
      const botoes = [0,1,2,3,4,5].map(n =>
        new ButtonBuilder()
          .setCustomId(`jogos:${jogoId}:dedos:${n}`)
          .setLabel(String(n))
          .setEmoji(['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'][n])
          .setStyle(ButtonStyle.Primary)
          .setDisabled(disabled)
      );
      return [new ActionRowBuilder().addComponents(botoes)];
    }
    function botoesAtuais(disabled = false) {
      if (fase === 'escolha_tipo') return botoesTipo(disabled);
      if (fase === 'resultado') return botoesDedos(true);
      return botoesDedos(disabled);
    }

    function montarEmbed(extra = null, resRodada = null) {
      const e = new EmbedBuilder()
        .setTitle('0️⃣ Par ou Ímpar • Melhor de 5 (primeiro a 5)')
        .setColor('#ff0040')
        .setDescription(
          vsIA
            ? `Mostre 0 a 5 dedos e veja se a soma é Par ou Ímpar! (${p1User || 'Você'} vs 🤖 IA)`
            : `Duelo: **${p1User?.tag || 'J1'}** vs **${p2User?.tag || 'J2'}**`
        )
        .addFields({ name: '🏆 Placar', value: tituloPlacar(), inline: false });
      if (!vsIA && apostaGP > 0) {
        e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP cada (vencedor leva tudo: ${apostaGP * 2} GP)`, inline: false });
      }
      if (vsIA) {
        e.addFields({ name: '💠 Premiação', value: 'Vitória = **+5 GP fixos** + XP por nível', inline: false });
      }
      let txt = '';
      if (fase === 'escolha_tipo') txt = `🟢 **Rodada ${rodada}**: ${p1User?.tag || 'Jogador 1'}, escolha **Par** ou **Ímpar**.`;
      else if (fase === 'escolha_p1_dedos') txt = `✋ **Rodada ${rodada}**: ${p1User?.tag || 'Jogador 1'}, quantos dedos (0-5)?`;
      else if (fase === 'escolha_p2_dedos') txt = `🤚 **Rodada ${rodada}**: ${vsIA ? '🤖 IA vai jogar...' : (p2User?.tag || 'Jogador 2') + ', quantos dedos (0-5)?'}`;
      else if (fase === 'resultado') txt = resRodada || resultado;
      e.addFields({ name: fase === 'resultado' ? '📢 Resultado da Rodada' : '🕹️ Fase Atual', value: txt || '...', inline: false });
      if (extra) e.addFields(extra);
      e.setFooter({ text: `Rodada ${rodada} • Melhor de 5 • ${vsIA ? 'Modo vs IA' : 'Duelo 1v1'}` });
      return e;
    }

    async function finalizar(resultadoP1) {
      terminou = true;
      const detalhes = {
        placar: [placarP1, placarP2],
        modo: vsIA ? 'IA' : '1v1',
        jogo: jogoId,
      };
      let gp1 = 0, gp2 = 0;
      if (vsIA) {
        if (resultadoP1 === 'VITORIA') gp1 = 5;
      } else {
        if (apostaGP > 0) {
          if (resultadoP1 === 'VITORIA') { gp1 = apostaGP * 2; gp2 = 0; }
          else if (resultadoP1 === 'DERROTA') { gp2 = apostaGP * 2; gp1 = 0; }
          else { gp1 = apostaGP; gp2 = apostaGP; }
        }
      }
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resultadoP1, gp1, gp2, detalhes);
      if (gp1 > 0) await db.addPlayerGP(user1Id, guildId, gp1).catch(() => {});
      if (gp2 > 0 && user2Id) await db.addPlayerGP(user2Id, guildId, gp2).catch(() => {});
      await desbloquearAC01(user1Id, guildId, jogoId);
      if (!vsIA) await desbloquearAC01(user2Id, guildId, jogoId);
      const vencedorId = resultadoP1 === 'VITORIA' ? user1Id : (resultadoP1 === 'DERROTA' ? user2Id : null);
      if (vencedorId) await desbloquearAC02(vencedorId, guildId);

      const resultadoTexto =
        resultadoP1 === 'VITORIA'
          ? `🎉 ${p1User || 'Jogador 1'} **venceu** a partida ${placarP1} x ${placarP2}!`
          : resultadoP1 === 'DERROTA'
          ? `💀 ${vsIA ? '🤖 IA' : (p2User || 'Jogador 2')} **venceu** a partida ${placarP2} x ${placarP1}!`
          : `🤝 Partida **empatada** (improvável em Md5)!`;

      const embed = new EmbedBuilder()
        .setTitle('0️⃣ Par ou Ímpar • Partida Finalizada')
        .setColor('#ff0040')
        .addFields(
          { name: '🏆 Placar Final', value: tituloPlacar(), inline: false },
          { name: '📢 Resultado', value: resultadoTexto, inline: false }
        )
        .setFooter({ text: `✅ XP, GP e ELO atualizados • Partida registrada` });

      if (resultadoP1 === 'VITORIA' && gp1 > 0) embed.addFields({ name: '💰 GP recebido', value: `+${gp1} GP para ${p1User?.tag || 'Você'}`, inline: false });
      if (resultadoP1 === 'DERROTA' && gp2 > 0 && p2User) embed.addFields({ name: '💰 GP recebido', value: `+${gp2} GP para ${p2User.tag}`, inline: false });

      await interaction.editReply({ embeds: [embed], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function processarResultado() {
      fase = 'resultado';
      const soma = dedosP1 + dedosP2;
      const somaTipo = soma % 2 === 0 ? 'par' : 'impar';
      const p1GanhouRodada = somaTipo === escolhaTipoP1;
      if (p1GanhouRodada) {
        placarP1++;
      } else {
        placarP2++;
      }
      resultadoRodada =
        `**Soma:** ${dedosP1} + ${dedosP2} = **${soma}** (**${somaTipo === 'par' ? 'Par 0️⃣' : 'Ímpar 1️⃣'}**)\n` +
        `${p1User?.tag || 'J1'} escolheu **${escolhaTipoP1 === 'par' ? 'Par' : 'Ímpar'}** e mostrou ${dedosP1} dedos.\n` +
        `${vsIA ? '🤖 IA' : (p2User?.tag || 'J2')} mostrou ${dedosP2} dedos.\n\n` +
        (p1GanhouRodada
          ? `✅ **Ponto para ${p1User?.tag || 'Jogador 1'}!**`
          : `✅ **Ponto para ${vsIA ? '🤖 IA' : (p2User?.tag || 'Jogador 2')}!**`);

      const embed = montarEmbed(null, resultadoRodada);
      await interaction.editReply({ embeds: [embed], components: botoesAtuais(true) }).catch(() => {});

      const p1GanhouPartida = placarP1 >= 5;
      const p2GanhouPartida = placarP2 >= 5;

      setTimeout(async () => {
        if (p1GanhouPartida || p2GanhouPartida) {
          await finalizar(p1GanhouPartida ? 'VITORIA' : (p2GanhouPartida ? 'DERROTA' : 'EMPATE'));
        } else {
          rodada++;
          escolhaTipoP1 = null;
          dedosP1 = null;
          dedosP2 = null;
          resultadoRodada = null;
          fase = 'escolha_tipo';
          await interaction.editReply({
            embeds: [montarEmbed()],
            components: botoesAtuais(false),
          }).catch(() => {});
        }
      }, 1800);
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id].filter(Boolean),
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const tipo = partes[0];
          const esperado =
            fase === 'escolha_tipo' ? user1Id
            : fase === 'escolha_p1_dedos' ? user1Id
            : fase === 'escolha_p2_dedos' ? user2Id
            : null;
          if (!esperado || btn.user.id !== esperado) {
            await btn.reply({ content: '⚠️ Não é sua vez!', ephemeral: true }).catch(() => {});
            return;
          }
          try { await btn.deferUpdate(); } catch (_) {}
          if (tipo === 'tipo') {
            const t = partes[1];
            if (t !== 'par' && t !== 'impar') return;
            escolhaTipoP1 = t;
            fase = 'escolha_p1_dedos';
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesAtuais(false) }).catch(() => {});
          } else if (tipo === 'dedos') {
            const n = Number(partes[1]);
            if (isNaN(n) || n < 0 || n > 5) return;
            if (fase === 'escolha_p1_dedos') {
              dedosP1 = n;
              if (vsIA) {
                dedosP2 = Math.floor(Math.random() * 6);
                fase = 'escolha_p2_dedos';
                await processarResultado();
              } else {
                fase = 'escolha_p2_dedos';
                await interaction.editReply({
                  embeds: [montarEmbed({ name: '✅ Jogada feita', value: `${p1User?.tag || 'J1'} jogou. Agora ${p2User?.tag || 'J2'}.`, inline: false })],
                  components: botoesAtuais(false),
                }).catch(() => {});
              }
            } else if (fase === 'escolha_p2_dedos') {
              dedosP2 = n;
              await processarResultado();
            }
          }
        } catch (err) {
          console.error('[parouimpar btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) {
          await db.addPlayerGP(user1Id, guildId, apostaGP).catch(() => {});
          if (!vsIA) await db.addPlayerGP(user2Id, guildId, apostaGP).catch(() => {});
        }
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('0️⃣ Cancelado').setColor('#ff0040').setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesAtuais(false) }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[parouimpar criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro ao iniciar: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarDados({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;

    let jogadores = [{ id: donoId, entrouEm: Date.now() }];
    let fase = 'lobby';
    let lobbyAberto = true;
    let terminou = false;
    let timerLobby = null;
    let resultados = [];
    const MAX = 6;
    const LOBBY_MS = 30 * 1000;

    function botoesLobby(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:entrar`).setLabel('🎲 Entrar no Jogo').setStyle(ButtonStyle.Success).setDisabled(disabled || jogadores.length >= MAX),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:comecar`).setLabel('▶️ Começar').setStyle(ButtonStyle.Primary).setDisabled(disabled || !lobbyAberto || jogadores.length < 2 || jogadores[0].id !== donoId)
        ),
      ];
    }

    async function montarEmbedLobby(extra = null) {
      const dono = await client.users.fetch(donoId).catch(() => null);
      const tags = await Promise.all(jogadores.map(async (j) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return u ? u.tag : `<@${j.id}>`;
      }));
      const faltam = Math.max(0, 2 - jogadores.length);
      const e = new EmbedBuilder()
        .setTitle('🎲 Dados D20 • Lobby')
        .setColor('#ff0040')
        .setDescription('Maior valor no D20 vence! De 2 a 6 jogadores.')
        .addFields(
          { name: `👥 Jogadores (${jogadores.length}/${MAX})`, value: tags.map((t, i) => `${i === 0 ? '👑 ' : ''}${i + 1}. ${t}`).join('\n'), inline: false },
          { name: '⏳ Status', value: lobbyAberto
            ? (faltam > 0
                ? `Faltam **${faltam}** jogador(es) para começar. Lobby fecha em **30s**.`
                : `Lobby aberto. Quando todos entrarem, **${dono?.tag || 'o dono'}** clica em Começar.`)
            : '🔒 Lobby fechado.', inline: false }
        );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP por jogador (vencedor leva tudo)`, inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    async function finalizar(ganhadoresIds, d20PorJogador) {
      terminou = true;
      const total = jogadores.length;
      const primeiro = jogadores[0].id;
      for (let i = 0; i < total; i++) {
        const jid = jogadores[i].id;
        await desbloquearAC01(jid, guildId, jogoId);
        if (d20PorJogador[jid] === 20) {
          const un = await db.unlockAchievement(jid, 'AC21');
          if (un) await db.addPlayerGP(jid, guildId, 40);
        }
      }

      const detalhes = { dados: d20PorJogador, jogadores: jogadores.map(j => j.id) };
      if (ganhadoresIds.length === 1) {
        const vencedor = ganhadoresIds[0];
        await desbloquearAC02(vencedor, guildId);
        for (let i = 0; i < total; i++) {
          const jid = jogadores[i].id;
          let res = 'DERROTA';
          let gp = 0;
          if (jid === vencedor) {
            res = 'VITORIA';
            if (total <= 1) gp = 5;
            else if (apostaGP > 0) gp = apostaGP * total;
          }
          if (gp > 0) await db.addPlayerGP(jid, guildId, gp).catch(() => {});
          const u2 = i === 0 ? (jogadores[1]?.id || null) : primeiro;
          await db.updateGameResult(guildId, jogoId, jid, i === 0 ? u2 : null, res, i === 0 ? gp : 0, i === 0 ? 0 : (jogadores[1]?.id === vencedor ? gp : 0), detalhes).catch(() => {});
        }
      } else {
        for (let i = 0; i < total; i++) {
          const jid = jogadores[i].id;
          const ehGanhador = ganhadoresIds.includes(jid);
          const res = ganhadoresIds.length > 0 ? (ehGanhador ? 'EMPATE' : 'DERROTA') : 'EMPATE';
          const gp = (ehGanhador && apostaGP > 0) ? Math.floor((apostaGP * total) / ganhadoresIds.length) : 0;
          if (gp > 0) await db.addPlayerGP(jid, guildId, gp).catch(() => {});
          const u2 = i === 0 ? (jogadores[1]?.id || null) : primeiro;
          await db.updateGameResult(guildId, jogoId, jid, u2, res, i === 0 ? gp : 0, 0, detalhes).catch(() => {});
        }
      }

      const tags = await Promise.all(jogadores.map(async (j) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        const t = u ? u.tag : `<@${j.id}>`;
        return `🎲 **${t}** → \`${d20PorJogador[j.id]}\`${d20PorJogador[j.id] === 20 ? ' ⭐ NATURAL 20!' : ''}`;
      }));
      const gTags = await Promise.all(ganhadoresIds.map(async (id) => {
        const u = await client.users.fetch(id).catch(() => null);
        return u ? u.tag : `<@${id}>`;
      }));
      const e = new EmbedBuilder()
        .setTitle('🎲 Dados D20 • Finalizado')
        .setColor('#ff0040')
        .addFields(
          { name: '📜 Resultados', value: tags.join('\n'), inline: false },
          { name: ganhadoresIds.length === 1 ? '🏆 Vencedor' : '🏆 Vencedores (empate)', value: ganhadoresIds.length ? gTags.join(', ') : '—', inline: false }
        );
      if (apostaGP > 0 && ganhadoresIds.length) {
        const cada = Math.floor((apostaGP * total) / ganhadoresIds.length);
        e.addFields({ name: '💰 GP recebido', value: `${cada} GP para cada vencedor (poço de ${apostaGP * total} GP)`, inline: false });
      }
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function comecarRodada() {
      if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
      lobbyAberto = false;
      fase = 'rolagem';
      const d20PorJogador = {};
      for (const j of jogadores) d20PorJogador[j.id] = Math.floor(Math.random() * 20) + 1;
      const tags = await Promise.all(jogadores.map(async (j) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return u ? u.tag : `<@${j.id}>`;
      }));
      const e = new EmbedBuilder()
        .setTitle('🎲 Rolando os dados...')
        .setColor('#ff0040')
        .setDescription('🎰 *Dados rolando, aguarde...*')
        .addFields({ name: '👥 Jogadores', value: tags.map((t, i) => `${i + 1}. ${t}`).join('\n'), inline: false });
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});

      setTimeout(async () => {
        let maior = -1;
        for (const id in d20PorJogador) if (d20PorJogador[id] > maior) maior = d20PorJogador[id];
        const ganhadoresIds = Object.keys(d20PorJogador).filter((id) => d20PorJogador[id] === maior);
        await finalizar(ganhadoresIds, d20PorJogador);
      }, 2000);
    }

    const partida = {
      donoId,
      jogadores: jogadores.map(j => j.id),
      get user1_id() { return jogadores[0]?.id; },
      get user2_id() { return jogadores[1]?.id || null; },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (acao === 'entrar') {
            if (!lobbyAberto) { await btn.reply({ content: '⚠️ Lobby já fechou!', ephemeral: true }).catch(() => {}); return; }
            if (jogadores.some((j) => j.id === btn.user.id)) { await btn.reply({ content: '⚠️ Você já está no jogo!', ephemeral: true }).catch(() => {}); return; }
            if (jogadores.length >= MAX) { await btn.reply({ content: '⚠️ Lobby cheio (máximo 6).', ephemeral: true }).catch(() => {}); return; }
            if (apostaGP > 0) {
              const p = await db.getOrInitPlayer(btn.user.id, guildId);
              if (Number(p?.coins_gp || 0) < apostaGP) {
                await btn.reply({ content: `❌ Saldo insuficiente (precisa de ${apostaGP} GP). Saldo: **${p?.coins_gp || 0}**`, ephemeral: true }).catch(() => {});
                return;
              }
            }
            jogadores.push({ id: btn.user.id, entrouEm: Date.now() });
            partida.jogadores = jogadores.map(j => j.id);
            try { await btn.deferUpdate(); } catch (_) {}
            await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
          } else if (acao === 'comecar') {
            if (btn.user.id !== donoId) { await btn.reply({ content: '⚠️ Apenas o dono da sala pode começar.', ephemeral: true }).catch(() => {}); return; }
            if (jogadores.length < 2) { await btn.reply({ content: '⚠️ Precisa de pelo menos 2 jogadores.', ephemeral: true }).catch(() => {}); return; }
            try { await btn.deferUpdate(); } catch (_) {}
            await comecarRodada();
          }
        } catch (err) {
          console.error('[dados btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
        if (apostaGP > 0) {
          for (const j of jogadores) await db.addPlayerGP(j.id, guildId, apostaGP).catch(() => {});
        }
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🎲 Cancelado').setColor('#ff0040').setDescription('⏹️ Jogo cancelado.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
    timerLobby = setTimeout(async () => {
      if (terminou || fase !== 'lobby') return;
      if (jogadores.length < 2) {
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🎲 Lobby expirou').setColor('#ff0040').setDescription('⏳ Nenhum outro jogador entrou em 30s.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
        terminou = true;
      } else {
        await comecarRodada();
      }
    }, LOBBY_MS);

    return partida;
  } catch (err) {
    console.error('[dados criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro ao iniciar: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarVerdadeDesafio({ interaction, client, jogo, donoId }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;

    let jogadores = [{ id: donoId, entrouEm: Date.now() }];
    let fase = 'lobby';
    let lobbyAberto = true;
    let terminou = false;
    let timerLobby = null;
    let cartaAtual = null;
    let jogadorAtualIdx = 0;
    const MIN = 2;
    const MAX = 10;
    const LOBBY_MS = 30 * 1000;
    const MAX_CARTAS = 15;
    let cartasUsadas = 0;
    let usouSortePrimeira = false;

    function botoesLobby(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:entrar`).setLabel('🎭 Entrar').setStyle(ButtonStyle.Success).setDisabled(disabled || !lobbyAberto || jogadores.length >= MAX),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:comecar`).setLabel('▶️ Começar').setStyle(ButtonStyle.Primary).setDisabled(disabled || !lobbyAberto || jogadores.length < MIN || jogadores[0].id !== donoId)
        ),
      ];
    }
    function botoesJogo(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:proxima`).setLabel('🎴 Próxima Carta').setStyle(ButtonStyle.Primary).setDisabled(disabled),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:passar`).setLabel('⏭️ Pular vez').setStyle(ButtonStyle.Secondary).setDisabled(disabled),
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:encerrar`).setLabel('🏁 Encerrar').setStyle(ButtonStyle.Danger).setDisabled(disabled)
        ),
      ];
    }

    async function montarEmbedLobby(extra = null) {
      const dono = await client.users.fetch(donoId).catch(() => null);
      const tags = await Promise.all(jogadores.map(async (j) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return u ? u.tag : `<@${j.id}>`;
      }));
      const faltam = Math.max(0, MIN - jogadores.length);
      const e = new EmbedBuilder()
        .setTitle('🎭 Verdade ou Desafio • Lobby')
        .setColor('#ff0040')
        .setDescription('Jogo social para rir muito! 2 a 10 jogadores.')
        .addFields({ name: `👥 Jogadores (${jogadores.length}/${MAX})`, value: tags.map((t, i) => `${i === 0 ? '👑 ' : ''}${i + 1}. ${t}`).join('\n'), inline: false })
        .addFields({ name: '⏳ Status', value: lobbyAberto
          ? (faltam > 0 ? `Faltam **${faltam}** jogador(es). Lobby fecha em **30s**.` : `Lobby aberto. **${dono?.tag || 'O dono'}** clique em Começar quando quiser.`)
          : '🔒 Lobby fechado.', inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    async function montarEmbedJogo(cartaExtra = null) {
      const jAtual = jogadores[jogadorAtualIdx];
      const uAtual = jAtual ? await client.users.fetch(jAtual.id).catch(() => null) : null;
      const carta = cartaExtra || cartaAtual;
      const tipoTxt = carta?.tipo === 'verdade' ? '💬 VERDADE' : carta?.tipo === 'desafio' ? '🔥 DESAFIO' : '🎭 AMBOS (escolha um)';
      const e = new EmbedBuilder()
        .setTitle('🎭 Verdade ou Desafio')
        .setColor('#ff0040')
        .addFields(
          { name: '🙋 Jogador da vez', value: uAtual ? `${uAtual.tag} (Rodada ${cartasUsadas + 1}/${MAX_CARTAS})` : '—', inline: false },
          { name: `🎴 Carta • ${tipoTxt}`, value: carta ? carta.texto : '*Clique em "Próxima Carta" para começar.*', inline: false }
        );
      return e;
    }

    async function encerrar(cancelado = false) {
      if (terminou) return;
      terminou = true;
      if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
      for (const j of jogadores) {
        await desbloquearAC01(j.id, guildId, jogoId);
      }
      if (!cancelado && cartasUsadas >= 1 && !usouSortePrimeira) {
        if (jogadores.length >= 2) {
          const primeiro = jogadores[0];
          await db.unlockAchievement(primeiro.id, 'AC08').catch(() => {});
        }
      }
      try {
        const tags = await Promise.all(jogadores.map(async (j) => {
          const u = await client.users.fetch(j.id).catch(() => null);
          return u ? u.tag : `<@${j.id}>`;
        }));
        const e = new EmbedBuilder()
          .setTitle(cancelado ? '🎭 Cancelado' : '🎭 Fim de Jogo')
          .setColor('#ff0040')
          .addFields({ name: cancelado ? '⏹️ Partida encerrada' : '🏁 Até a próxima!', value: cancelado ? 'Jogo encerrado.' : `Foram ${cartasUsadas} carta(s). Obrigado por jogar!`, inline: false })
          .addFields({ name: '👥 Participantes', value: tags.join(', '), inline: false });
        await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      } catch (_) {}
      removerPartida(jogoId, canalId);
    }

    function sortearCarta() {
      const lista = CARTAS_VO_D && Array.isArray(CARTAS_VO_D) && CARTAS_VO_D.length ? CARTAS_VO_D : [
        { tipo: 'verdade', texto: 'Qual foi o último sonho que você lembra?' },
        { tipo: 'desafio', texto: 'Descreva o membro mais engraçado do servidor.' },
      ];
      return lista[Math.floor(Math.random() * lista.length)];
    }

    async function comecar() {
      if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
      lobbyAberto = false;
      fase = 'jogando';
      cartasUsadas = 0;
      usouSortePrimeira = jogadores.length === 0;
      jogadorAtualIdx = 0;
      cartaAtual = null;
      await interaction.editReply({ embeds: [await montarEmbedJogo()], components: botoesJogo(false) }).catch(() => {});
    }

    const partida = {
      donoId,
      jogadores: jogadores.map(j => j.id),
      get user1_id() { return jogadores[0]?.id; },
      get user2_id() { return jogadores[1]?.id || null; },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (fase === 'lobby') {
            if (acao === 'entrar') {
              if (!lobbyAberto) { await btn.reply({ content: '⚠️ Lobby fechado!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.some((j) => j.id === btn.user.id)) { await btn.reply({ content: '⚠️ Você já está no jogo!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.length >= MAX) { await btn.reply({ content: '⚠️ Lobby cheio (máximo 10).', ephemeral: true }).catch(() => {}); return; }
              jogadores.push({ id: btn.user.id, entrouEm: Date.now() });
              partida.jogadores = jogadores.map(j => j.id);
              try { await btn.deferUpdate(); } catch (_) {}
              await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
            } else if (acao === 'comecar') {
              if (btn.user.id !== donoId) { await btn.reply({ content: '⚠️ Apenas o dono da sala pode começar.', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.length < MIN) { await btn.reply({ content: '⚠️ Precisa de pelo menos 2 jogadores.', ephemeral: true }).catch(() => {}); return; }
              try { await btn.deferUpdate(); } catch (_) {}
              await comecar();
            }
          } else if (fase === 'jogando') {
            if (acao === 'proxima') {
              if (!jogadores.some(j => j.id === btn.user.id)) {
                await btn.reply({ content: '⚠️ Apenas jogadores da rodada.', ephemeral: true }).catch(() => {}); return;
              }
              try { await btn.deferUpdate(); } catch (_) {}
              cartaAtual = sortearCarta();
              cartasUsadas++;
              if (cartasUsadas >= MAX_CARTAS) {
                await interaction.editReply({ embeds: [await montarEmbedJogo(cartaAtual)], components: botoesJogo(true) }).catch(() => {});
                setTimeout(() => encerrar(false), 3500);
                return;
              }
              jogadorAtualIdx = (jogadorAtualIdx + 1) % jogadores.length;
              await interaction.editReply({ embeds: [await montarEmbedJogo(cartaAtual)], components: botoesJogo(false) }).catch(() => {});
            } else if (acao === 'passar') {
              if (!jogadores.some(j => j.id === btn.user.id)) {
                await btn.reply({ content: '⚠️ Apenas jogadores da rodada.', ephemeral: true }).catch(() => {}); return;
              }
              try { await btn.deferUpdate(); } catch (_) {}
              jogadorAtualIdx = (jogadorAtualIdx + 1) % jogadores.length;
              await interaction.editReply({ embeds: [await montarEmbedJogo(cartaAtual)], components: botoesJogo(false) }).catch(() => {});
            } else if (acao === 'encerrar') {
              if (btn.user.id !== donoId) { await btn.reply({ content: '⚠️ Apenas o dono pode encerrar.', ephemeral: true }).catch(() => {}); return; }
              try { await btn.deferUpdate(); } catch (_) {}
              await encerrar(true);
            }
          }
        } catch (err) {
          console.error('[verdade btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        await encerrar(true);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});

    timerLobby = setTimeout(async () => {
      if (terminou || fase !== 'lobby') return;
      if (jogadores.length < MIN) {
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🎭 Lobby expirou').setColor('#ff0040').setDescription('⏳ Não houve jogadores suficientes em 30s.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
        terminou = true;
      } else {
        await comecar();
      }
    }, LOBBY_MS);

    return partida;
  } catch (err) {
    console.error('[verdade criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro ao iniciar: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criar(args) {
  const jogo = args.jogo;
  const id = jogo?.id;
  switch (id) {
    case 'caracoroa': return criarCaraCoroa(args);
    case 'parouimpar': return criarParOuImpar(args);
    case 'dados': return criarDados(args);
    case 'verdade': return criarVerdadeDesafio(args);
    default:
      try {
        await args.interaction.editReply(`⚠️ Jogo **${id}** não existe em carasimples.js.`);
      } catch (_) {}
      return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_carasimples__, __mod_obj_game_carasimples__.exports, __makeReq_game_carasimples__, path.dirname(path.resolve(process.cwd(), "commands/games/carasimples.js")), path.resolve(process.cwd(), "commands/games/carasimples.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_carasimples = __mod_obj_game_carasimples__.exports;

const __makeReq_game_forca__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/forca.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_forca__ = { exports: __BOT_MODULE__.game_forca };
// -------- commands/games/forca.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const db = require('../../database');
const { PALAVRAS_FORCA } = require('../../lib/gamesInfo');
const { registrarPartida, removerPartida } = require('../jogos');

const COR = '#ff0040';

async function desbloquearAC01(userId, guildId, jogoId) {
  const lista = await db.getPlayerMatches(userId, guildId, 1, jogoId);
  if (lista.length <= 1) {
    const un = await db.unlockAchievement(userId, 'AC01');
    if (un) await db.addPlayerGP(userId, guildId, 10);
  }
}

async function desbloquearAC02(userId, guildId) {
  const un = await db.unlockAchievement(userId, 'AC02');
  if (un) await db.addPlayerGP(userId, guildId, 20);
}

const FORCA_ESTAGIOS = [
  '```\n  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========\n```',
  '```\n  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========\n```',
];

async function criarForca({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const userId = donoId;
    const user = await client.users.fetch(userId).catch(() => null);

    let temaSelecionado = null;
    let palavra = '';
    let letrasCertas = new Set();
    let letrasErradas = new Set();
    let erros = 0;
    let dicaUsada = false;
    let terminou = false;
    let fase = 'tema';

    function botoesTema() {
      const temas = Object.keys(PALAVRAS_FORCA);
      const labels = { geral: '📚 Geral', tecnologia: '💻 Tecnologia', games: '🎮 Games', animes: '🎌 Animes', futebol: '⚽ Futebol' };
      return [new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId(`jogos:${jogoId}:tema`)
          .setPlaceholder('Escolha um tema...')
          .addOptions(temas.map(t => ({ label: labels[t] || t, value: t })))
      )];
    }

    function botoesLetras() {
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const rows = [];
      const estilos = (l) => {
        const L = l.toLowerCase();
        if (letrasCertas.has(L)) return ButtonStyle.Success;
        if (letrasErradas.has(L)) return ButtonStyle.Danger;
        return ButtonStyle.Primary;
      };
      const disabled = (l) => letrasCertas.has(l.toLowerCase()) || letrasErradas.has(l.toLowerCase()) || terminou;
      for (let i = 0; i < 3; i++) {
        const chunk = letras.slice(i * 9, (i + 1) * 9);
        rows.push(new ActionRowBuilder().addComponents(
          chunk.map(l => new ButtonBuilder()
            .setCustomId(`jogos:${jogoId}:letra:${l}`)
            .setLabel(l)
            .setStyle(estilos(l))
            .setDisabled(disabled(l)))
        ));
      }
      const extraRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`jogos:${jogoId}:dica`)
          .setLabel(dicaUsada ? '💡 Dica já usada' : '💡 Dica (-5 XP)')
          .setStyle(ButtonStyle.Secondary)
          .setDisabled(dicaUsada || terminou)
      );
      rows.push(extraRow);
      return rows;
    }

    function montarPalavra() {
      return palavra.split('').map(l => letrasCertas.has(l.toLowerCase()) ? `**${l.toUpperCase()}**` : '\\_').join(' ');
    }

    function montarEmbed(extra = null) {
      const e = new EmbedBuilder().setTitle('🪢 Jogo da Forca').setColor(COR);
      if (fase === 'tema') {
        e.setDescription(`Olá ${user || 'jogador'}! Escolha um tema para começar a jogar.`);
        e.addFields({ name: '🎯 Tema', value: '*Selecione no menu abaixo.*', inline: false });
      } else {
        e.addFields(
          { name: '🎯 Palavra', value: montarPalavra() || '\\_ \\- \\- \\-', inline: false },
          { name: '☠️ Forca', value: FORCA_ESTAGIOS[erros], inline: false },
          { name: `❌ Erros (${erros}/6)`, value: letrasErradas.size ? letrasErradas.map(l => l.toUpperCase()).join(', ') : 'Nenhum erro ainda.', inline: false }
        );
        if (dicaUsada) e.addFields({ name: '💡 Dica', value: `A palavra tem **${palavra.length}** letras.`, inline: false });
      }
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP`, inline: false });
      if (extra) e.addFields(extra);
      e.setFooter({ text: `Tema: ${temaSelecionado || 'Não selecionado'} • 6 erros = game over` });
      return e;
    }

    async function finalizar(resultado) {
      terminou = true;
      const detalhes = { forca: { palavra, tema: temaSelecionado, erros, certas: [...letrasCertas], erradas: [...letrasErradas] } };
      const vsIA = !oponente;
      let gp = 0;
      let xpExtra = 0;
      if (resultado === 'VITORIA') {
        gp = vsIA ? 5 : (apostaGP > 0 ? apostaGP * 2 : 0);
        xpExtra = 0;
      } else {
        gp = 0;
        xpExtra = 0;
      }
      await db.updateGameResult(guildId, jogoId, userId, null, resultado, gp, 0, detalhes);
      if (gp > 0) await db.addPlayerGP(userId, guildId, gp).catch(() => {});
      await desbloquearAC01(userId, guildId, jogoId);
      if (resultado === 'VITORIA') {
        await desbloquearAC02(userId, guildId);
        if (erros === 0) {
          const un = await db.unlockAchievement(userId, 'AC06');
          if (un) await db.addPlayerGP(userId, guildId, 75);
        }
      }
      if (dicaUsada) {
        await db.addPlayerXP(userId, guildId, -5, jogoId).catch(() => {});
      }
      const e = new EmbedBuilder()
        .setTitle(resultado === 'VITORIA' ? '🎉 Forca - Vitória!' : '💀 Forca - Derrota')
        .setColor(COR)
        .addFields(
          { name: '📖 Palavra correta', value: palavra.toUpperCase(), inline: false },
          { name: '📊 Estatísticas', value: `Erros: **${erros}**/6 • Letras certas: **${letrasCertas.size}**/${palavra.length}`, inline: false },
          { name: resultado === 'VITORIA' ? '🏆 Resultado' : '☠️ Resultado', value: resultado === 'VITORIA' ? `Ganhou **+${gp} GP**!` : `A palavra era **${palavra.toUpperCase()}**.`, inline: false }
        );
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    function escolherNovaPalavra(tema) {
      const lista = PALAVRAS_FORCA[tema] || PALAVRAS_FORCA.geral;
      palavra = lista[Math.floor(Math.random() * lista.length)];
      letrasCertas = new Set();
      letrasErradas = new Set();
      erros = 0;
    }

    function verificarFim() {
      const completou = palavra.split('').every(l => letrasCertas.has(l.toLowerCase()));
      if (completou) { finalizar('VITORIA'); return true; }
      if (erros >= 6) { finalizar('DERROTA'); return true; }
      return false;
    }

    function tentarLetra(letra) {
      const l = letra.toLowerCase();
      if (letrasCertas.has(l) || letrasErradas.has(l)) return false;
      if (palavra.toLowerCase().includes(l)) {
        letrasCertas.add(l);
      } else {
        letrasErradas.add(l);
        erros++;
      }
      return true;
    }

    const partida = {
      donoId,
      user1_id: userId,
      user2_id: null,
      jogadores: [userId],
      async handleSelectMenu(sm, _client, partes) {
        try {
          if (terminou) return;
          if (sm.user.id !== userId) { await sm.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          const acao = partes[0];
          if (acao === 'tema') {
            temaSelecionado = sm.values[0];
            escolherNovaPalavra(temaSelecionado);
            fase = 'jogando';
            try { await sm.deferUpdate(); } catch (_) {}
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesLetras() }).catch(() => {});
          }
        } catch (err) {
          console.error('[forca select err]', err);
          if (!sm.replied && !sm.deferred) try { await sm.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          if (btn.user.id !== userId) { await btn.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          const acao = partes[0];
          try { await btn.deferUpdate(); } catch (_) {}
          if (acao === 'letra') {
            const l = partes[1];
            if (l) {
              tentarLetra(l);
              if (!verificarFim()) {
                await interaction.editReply({ embeds: [montarEmbed()], components: botoesLetras() }).catch(() => {});
              }
            }
          } else if (acao === 'dica') {
            if (!dicaUsada) {
              dicaUsada = true;
              await interaction.editReply({ embeds: [montarEmbed()], components: botoesLetras() }).catch(() => {});
            }
          }
        } catch (err) {
          console.error('[forca btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) await db.addPlayerGP(userId, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🪢 Cancelado').setColor(COR).setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesTema() }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[forca criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

function criarBaralho() {
  const naipes = ['♠️', '♥️', '♦️', '♣️'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const baralho = [];
  for (const n of naipes) for (const v of valores) baralho.push({ naipe: n, valor: v });
  for (let i = baralho.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
  }
  return baralho;
}

function valorCarta(c) {
  if (c.valor === 'A') return 11;
  if (['J', 'Q', 'K'].includes(c.valor)) return 10;
  return Number(c.valor);
}

function calcularMao(mao) {
  let total = 0;
  let ases = 0;
  for (const c of mao) {
    total += valorCarta(c);
    if (c.valor === 'A') ases++;
  }
  while (total > 21 && ases > 0) {
    total -= 10;
    ases--;
  }
  return total;
}

function cartasStr(mao, ocultarPrimeira = false) {
  if (!mao.length) return '—';
  if (ocultarPrimeira && mao.length > 1) {
    return `🂠 ${mao.slice(1).map(c => c.valor + c.naipe).join(' ')}`;
  }
  return mao.map(c => c.valor + c.naipe).join(' ');
}

async function criarBlackjack({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const userId = donoId;
    const user = await client.users.fetch(userId).catch(() => null);

    let baralho = criarBaralho();
    let maoJogador = [];
    let maoDealer = [];
    let fase = 'jogando';
    let terminou = false;
    let blackjackNatural = false;

    maoJogador.push(baralho.pop(), baralho.pop());
    maoDealer.push(baralho.pop(), baralho.pop());

    const totalJ = calcularMao(maoJogador);
    if (totalJ === 21) blackjackNatural = true;

    function botoesJogada() {
      return [new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:hit`).setLabel('🃏 Pegar carta').setStyle(ButtonStyle.Primary).setDisabled(terminou || fase !== 'jogando'),
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:stand`).setLabel('✋ Parar').setStyle(ButtonStyle.Secondary).setDisabled(terminou || fase !== 'jogando')
      )];
    }

    function montarEmbed(extra = null) {
      const e = new EmbedBuilder().setTitle('🃏 Blackjack 21').setColor(COR);
      e.setDescription(`${user || 'Você'} vs 🤖 Dealer`);
      const dealerMostraTotal = fase === 'dealer' || terminou;
      const totalD = calcularMao(maoDealer);
      e.addFields(
        { name: `🤖 Dealer${dealerMostraTotal ? ` (${totalD})` : ''}`, value: cartasStr(maoDealer, !dealerMostraTotal), inline: false },
        { name: `👤 ${user?.tag || 'Você'} (${calcularMao(maoJogador)})`, value: cartasStr(maoJogador), inline: false }
      );
      if (blackjackNatural && terminou) e.addFields({ name: '⭐ BLACKJACK NATURAL!', value: '21 exato na mão inicial!', inline: false });
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP`, inline: false });
      if (extra) e.addFields(extra);
      e.setFooter({ text: fase === 'jogando' ? 'Pegue cartas ou pare. Estoure 21 = derrota.' : fase === 'dealer' ? '🤖 Dealer jogando...' : 'Partida finalizada.' });
      return e;
    }

    async function finalizar(resultado, bonus = 0) {
      terminou = true;
      fase = 'fim';
      const detalhes = { blackjack: { maoJogador: maoJogador.map(c => c.valor + c.naipe), maoDealer: maoDealer.map(c => c.valor + c.naipe), resultado } };
      const vsIA = !oponente;
      let gp = 0;
      if (resultado === 'VITORIA') gp = vsIA ? 5 : (apostaGP > 0 ? apostaGP * 2 : 0);
      else if (resultado === 'DERROTA') gp = 0;
      else gp = apostaGP || 0;
      await db.updateGameResult(guildId, jogoId, userId, null, resultado, gp, 0, detalhes);
      if (gp > 0) await db.addPlayerGP(userId, guildId, gp).catch(() => {});
      await desbloquearAC01(userId, guildId, jogoId);
      if (resultado === 'VITORIA') await desbloquearAC02(userId, guildId);
      if ((blackjackNatural || calcularMao(maoJogador) === 21) && resultado !== 'DERROTA') {
        const un = await db.unlockAchievement(userId, 'AC09');
        if (un) await db.addPlayerGP(userId, guildId, 60);
      }
      const e = new EmbedBuilder()
        .setTitle(resultado === 'VITORIA' ? '🎉 Blackjack - Vitória!' : resultado === 'DERROTA' ? '💀 Blackjack - Derrota' : '🤝 Empate')
        .setColor(COR)
        .addFields(
          { name: '🤖 Dealer (' + calcularMao(maoDealer) + ')', value: cartasStr(maoDealer), inline: false },
          { name: '👤 Você (' + calcularMao(maoJogador) + ')', value: cartasStr(maoJogador), inline: false }
        );
      if (resultado === 'VITORIA') e.addFields({ name: '🏆 Prêmio', value: `+${gp} GP${bonus ? ' (+30 bônus BJ)' : ''}`, inline: false });
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function jogarDealer() {
      fase = 'dealer';
      await interaction.editReply({ embeds: [montarEmbed()], components: botoesJogada() }).catch(() => {});
      const passo = async () => {
        if (terminou) return;
        if (calcularMao(maoDealer) < 17) {
          maoDealer.push(baralho.pop());
          await interaction.editReply({ embeds: [montarEmbed()], components: [] }).catch(() => {});
          setTimeout(passo, 900);
        } else {
          const tJ = calcularMao(maoJogador);
          const tD = calcularMao(maoDealer);
          if (tD > 21) finalizar('VITORIA', blackjackNatural ? 30 : 0);
          else if (tJ > tD) finalizar('VITORIA', blackjackNatural ? 30 : 0);
          else if (tD > tJ) finalizar('DERROTA');
          else finalizar('EMPATE');
        }
      };
      setTimeout(passo, 700);
    }

    if (blackjackNatural) {
      setTimeout(jogarDealer, 600);
    }

    const partida = {
      donoId,
      user1_id: userId,
      user2_id: null,
      jogadores: [userId],
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          if (btn.user.id !== userId) { await btn.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          const acao = partes[0];
          try { await btn.deferUpdate(); } catch (_) {}
          if (acao === 'hit' && fase === 'jogando') {
            maoJogador.push(baralho.pop());
            const t = calcularMao(maoJogador);
            if (t > 21) { finalizar('DERROTA'); return; }
            if (t === 21) { jogarDealer(); return; }
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesJogada() }).catch(() => {});
          } else if (acao === 'stand' && fase === 'jogando') {
            jogarDealer();
          }
        } catch (err) {
          console.error('[bj btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) await db.addPlayerGP(userId, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🃏 Cancelado').setColor(COR).setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesJogada() }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[bj criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarAdivinha({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const userId = donoId;
    const user = await client.users.fetch(userId).catch(() => null);

    const alvo = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const MAX = 10;
    let terminou = false;
    let historico = [];
    let fase = 'jogando';

    function botoesInput() {
      const options = [];
      for (let i = 0; i < 10; i++) {
        const base = i * 10 + 1;
        options.push({ label: `${base} - ${base + 9}`, value: String(i) });
      }
      return [
        new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId(`jogos:${jogoId}:palpite`)
            .setPlaceholder('Escolha uma dezena...')
            .addOptions(options)
        ),
        new ActionRowBuilder().addComponents(
          new ButtonBuilder().setCustomId(`jogos:${jogoId}:digitar`).setLabel('✏️ Digitar número').setStyle(ButtonStyle.Primary).setDisabled(terminou)
        )
      ];
    }

    function montarEmbed(extra = null) {
      const e = new EmbedBuilder().setTitle('🔢 Adivinhe o Número').setColor(COR);
      e.setDescription(`${user || 'Você'} tem **${MAX - tentativas}** tentativas para acertar o número entre 1 e 100.`);
      e.addFields(
        { name: '🎯 Tentativas usadas', value: `${tentativas}/${MAX}`, inline: true },
        { name: '📜 Histórico', value: historico.length ? historico.join('\n') : 'Nenhuma tentativa ainda.', inline: false }
      );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP`, inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    async function finalizar(resultado, bonus = 0, xpBonus = 0) {
      terminou = true;
      fase = 'fim';
      const detalhes = { adivinha: { alvo, tentativas, historico } };
      const vsIA = !oponente;
      let gp = 0;
      if (resultado === 'VITORIA') {
        gp = vsIA ? 5 : (apostaGP > 0 ? apostaGP * 2 : 0);
      }
      await db.updateGameResult(guildId, jogoId, userId, null, resultado, gp, 0, detalhes);
      if (gp > 0) await db.addPlayerGP(userId, guildId, gp).catch(() => {});
      await desbloquearAC01(userId, guildId, jogoId);
      if (resultado === 'VITORIA') await desbloquearAC02(userId, guildId);
      if (resultado === 'VITORIA' && tentativas <= 3) {
        const un = await db.unlockAchievement(userId, 'AC10');
        if (un) await db.addPlayerGP(userId, guildId, 50);
      }
      const e = new EmbedBuilder()
        .setTitle(resultado === 'VITORIA' ? '🎉 Adivinha - Vitória!' : '💀 Adivinha - Derrota')
        .setColor(COR)
        .addFields(
          { name: '🎯 Número sorteado', value: String(alvo), inline: false },
          { name: '📊 Tentativas', value: `${tentativas}/${MAX}`, inline: false }
        );
      if (resultado === 'VITORIA') {
        const extra = [];
        if (bonus) extra.push(`+${bonus} GP bônus (≤3 tentativas)`);
        if (xpBonus) extra.push(`+${xpBonus} XP bônus`);
        e.addFields({ name: '🏆 Prêmio', value: `+${gp} GP` + (extra.length ? `\n${extra.join('\n')}` : ''), inline: false });
      } else {
        e.addFields({ name: '💀 Resultado', value: `Não foi dessa vez. O número era **${alvo}**.`, inline: false });
      }
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    function fazerPalpite(n) {
      tentativas++;
      if (n === alvo) {
        historico.push(`🎯 **${n}** → ACERTO!`);
        if (tentativas <= 3) finalizar('VITORIA', 0, 50);
        else finalizar('VITORIA');
        return true;
      } else if (n < alvo) {
        historico.push(`⬆️ ${n} → **MAIOR**`);
      } else {
        historico.push(`⬇️ ${n} → **MENOR**`);
      }
      if (tentativas >= MAX) { finalizar('DERROTA'); return true; }
      return false;
    }

    function botoesDezena(idx) {
      const botoes = [];
      for (let i = 0; i < 10; i++) {
        const n = idx * 10 + i + 1;
        if (n > 100) continue;
        const jaFoi = historico.some(h => h.includes(` ${n} `) || h.startsWith(`${n} `) || h.includes(`**${n}**`));
        botoes.push(new ButtonBuilder()
          .setCustomId(`jogos:${jogoId}:num:${n}`)
          .setLabel(String(n))
          .setStyle(jaFoi ? ButtonStyle.Secondary : ButtonStyle.Primary)
          .setDisabled(jaFoi || terminou)
        );
      }
      const rows = [];
      for (let i = 0; i < 2; i++) {
        rows.push(new ActionRowBuilder().addComponents(botoes.slice(i * 5, (i + 1) * 5)));
      }
      rows.push(new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:voltar`).setLabel('↩️ Voltar').setStyle(ButtonStyle.Secondary).setDisabled(terminou)
      ));
      return rows;
    }

    const partida = {
      donoId,
      user1_id: userId,
      user2_id: null,
      jogadores: [userId],
      _modo: 'menu',
      async handleSelectMenu(sm, _client, partes) {
        try {
          if (terminou) return;
          if (sm.user.id !== userId) { await sm.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          const acao = partes[0];
          if (acao === 'palpite') {
            const idx = Number(sm.values[0]);
            partida._modo = 'dezena_' + idx;
            try { await sm.deferUpdate(); } catch (_) {}
            await interaction.editReply({ embeds: [montarEmbed({ name: '💡 Dica', value: `Escolha um número entre **${idx * 10 + 1}** e **${Math.min(100, idx * 10 + 10)}**.`, inline: false })], components: botoesDezena(idx) }).catch(() => {});
          }
        } catch (err) {
          console.error('[adivinha select err]', err);
          if (!sm.replied && !sm.deferred) try { await sm.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          if (btn.user.id !== userId) { await btn.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          const acao = partes[0];
          try { await btn.deferUpdate(); } catch (_) {}
          if (acao === 'num') {
            const n = Number(partes[1]);
            if (!isNaN(n) && n >= 1 && n <= 100) {
              const fim = fazerPalpite(n);
              if (!fim) {
                partida._modo = 'menu';
                await interaction.editReply({ embeds: [montarEmbed()], components: botoesInput() }).catch(() => {});
              }
            }
          } else if (acao === 'voltar') {
            partida._modo = 'menu';
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesInput() }).catch(() => {});
          } else if (acao === 'digitar') {
            try {
              const modal = new ModalBuilder()
                .setCustomId(`jogos:${jogoId}:modal_palpite`)
                .setTitle('🔢 Digite seu palpite');
              modal.addComponents(new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                  .setCustomId('numero')
                  .setLabel('Número de 1 a 100')
                  .setStyle(TextInputStyle.Short)
                  .setRequired(true)
                  .setMaxLength(3)
                  .setPlaceholder('Ex: 42')
              ));
              await btn.showModal(modal);
              const submitted = await btn.awaitModalSubmit({ time: 60000, filter: (i) => i.customId === `jogos:${jogoId}:modal_palpite` && i.user.id === userId }).catch(() => null);
              if (submitted) {
                let val = submitted.fields.getTextInputValue('numero');
                val = parseInt(val, 10);
                try { await submitted.deferUpdate(); } catch (_) {}
                if (isNaN(val) || val < 1 || val > 100) {
                  await interaction.followUp({ content: '⚠️ Digite um número válido de 1 a 100.', ephemeral: true }).catch(() => {});
                  return;
                }
                const fim = fazerPalpite(val);
                if (!fim) {
                  partida._modo = 'menu';
                  await interaction.editReply({ embeds: [montarEmbed()], components: botoesInput() }).catch(() => {});
                }
              }
            } catch (e2) {
              console.error('[adivinha modal err]', e2);
            }
          }
        } catch (err) {
          console.error('[adivinha btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) await db.addPlayerGP(userId, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🔢 Cancelado').setColor(COR).setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesInput() }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[adivinha criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criar(args) {
  const id = args.jogo?.id;
  switch (id) {
    case 'forca': return criarForca(args);
    case 'blackjack': return criarBlackjack(args);
    case 'adivinha': return criarAdivinha(args);
    default:
      try { await args.interaction.editReply(`⚠️ Jogo **${id}** não existe em forca.js.`); } catch (_) {}
      return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_forca__, __mod_obj_game_forca__.exports, __makeReq_game_forca__, path.dirname(path.resolve(process.cwd(), "commands/games/forca.js")), path.resolve(process.cwd(), "commands/games/forca.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_forca = __mod_obj_game_forca__.exports;

const __makeReq_game_quiz__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/quiz.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_quiz__ = { exports: __BOT_MODULE__.game_quiz };
// -------- commands/games/quiz.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const db = require('../../database');
const { PERGUNTAS_QUIZ } = require('../../lib/gamesInfo');
const { registrarPartida, removerPartida } = require('../jogos');

const COR = '#ff0040';

async function desbloquearAC01(userId, guildId, jogoId) {
  const lista = await db.getPlayerMatches(userId, guildId, 1, jogoId);
  if (lista.length <= 1) {
    const un = await db.unlockAchievement(userId, 'AC01');
    if (un) await db.addPlayerGP(userId, guildId, 10);
  }
}

async function desbloquearAC02(userId, guildId) {
  const un = await db.unlockAchievement(userId, 'AC02');
  if (un) await db.addPlayerGP(userId, guildId, 20);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function criarQuiz({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;

    let jogadores = [{ id: donoId, score: 0, entrouEm: Date.now() }];
    let fase = 'lobby';
    let lobbyAberto = true;
    let terminou = false;
    let timerLobby = null;
    const MAX_JOGADORES = 6;
    const LOBBY_MS = 30 * 1000;
    const RODADAS_TOTAIS = 10;
    const TEMPO_RODADA = 15 * 1000;
    let rodadaAtual = 0;
    let perguntasRodada = [];
    let respostasRodada = new Map();
    let tempoInicioRodada = 0;
    let timerRodada = null;
    let respostasPorJogador = new Map();

    function botoesLobby(disabled = false) {
      return [new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:entrar`).setLabel('❓ Entrar no Quiz').setStyle(ButtonStyle.Success).setDisabled(disabled || !lobbyAberto || jogadores.length >= MAX_JOGADORES),
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:comecar`).setLabel('▶️ Começar').setStyle(ButtonStyle.Primary).setDisabled(disabled || !lobbyAberto || jogadores.length < 1 || jogadores[0].id !== donoId)
      )];
    }

    function botoesResposta(disabled = false) {
      const p = perguntasRodada[rodadaAtual];
      const estilos = [ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Success, ButtonStyle.Danger];
      const labels = ['A', 'B', 'C', 'D'];
      const emojis = ['🅰️', '🅱️', '🟩', '🅳️'];
      return [new ActionRowBuilder().addComponents(
        p.alt.map((alt, i) => new ButtonBuilder()
          .setCustomId(`jogos:${jogoId}:alt:${i}`)
          .setLabel(`${labels[i]}: ${String(alt).slice(0, 60)}`)
          .setEmoji(emojis[i])
          .setStyle(estilos[i])
          .setDisabled(disabled))
      )];
    }

    async function montarEmbedLobby(extra = null) {
      const dono = await client.users.fetch(donoId).catch(() => null);
      const tags = await Promise.all(jogadores.map(async j => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return u ? u.tag : `<@${j.id}>`;
      }));
      const e = new EmbedBuilder().setTitle('❓ Quiz Trivia • Lobby').setColor(COR)
        .setDescription('10 perguntas de múltipla escolha! De 1 a 6 jogadores. Quem acertar mais e mais rápido vence!')
        .addFields(
          { name: `👥 Jogadores (${jogadores.length}/${MAX_JOGADORES})`, value: tags.map((t, i) => `${i === 0 ? '👑 ' : ''}${i + 1}. ${t}`).join('\n'), inline: false },
          { name: '⏳ Status', value: lobbyAberto
            ? (jogadores.length < 1 ? 'Aguardando jogadores... Lobby fecha em 30s.' : `Lobby aberto. ${dono?.tag || 'O dono'} clica em Começar quando pronto.`)
            : '🔒 Lobby fechado.', inline: false }
        );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP por jogador (poço dividido pelo(s) vencedor(es)`, inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    async function montarEmbedRodada(extra = null) {
      const p = perguntasRodada[rodadaAtual];
      const e = new EmbedBuilder().setTitle(`❓ Quiz • Rodada ${rodadaAtual + 1}/${RODADAS_TOTAIS}`).setColor(COR)
        .addFields(
          { name: `📚 Categoria: ${p.cat}`, value: `**${p.pergunta}**`, inline: false },
          { name: '🎯 Alternativas', value: p.alt.map((a, i) => `${['🅰️', '🅱️', '🟩', '🅳️'][i]} **${['A', 'B', 'C', 'D'][i]}:** ${a}`).join('\n'), inline: false }
        );
      const tempoDecorrido = Date.now() - tempoInicioRodada;
      const tempoRestante = Math.max(0, TEMPO_RODADA - tempoDecorrido);
      e.setFooter({ text: `⏱️ Tempo: ${Math.ceil(tempoRestante / 1000)}s • Quanto mais rápido, mais pontos!` });
      return e;
    }

    function pontosPorTempo(tempoMs) {
      const seg = tempoMs / 1000;
      if (seg <= 5) return 10;
      if (seg <= 10) return 7;
      if (seg <= 15) return 4;
      return 0;
    }

    async function finalizarQuiz() {
      terminou = true;
      if (timerRodada) { clearTimeout(timerRodada); timerRodada = null; }
      const ranking = [...jogadores].sort((a, b) => b.score - a.score);
      const maiorPontuacao = ranking[0]?.score || 0;
      const vencedores = ranking.filter(j => j.score === maiorPontuacao && j.score > 0);
      const tagsRanking = await Promise.all(ranking.map(async (j, i) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        const medalhas = ['🥇', '🥈', '🥉'];
        const prefixo = medalhas[i] || `#${i + 1}`;
        const acertos10 = respostasPorJogador.get(j.id) || 0;
        return `${prefixo} **${u?.tag || `<@${j.id}>`}** • **${j.score} pontos** (${acertos10}/${RODADAS_TOTAIS} acertos)`;
      }));

      const detalhes = { quiz: { ranking: ranking.map(j => ({ id: j.id, score: j.score })), rodadas: RODADAS_TOTAIS } };
      for (let idx = 0; idx < ranking.length; idx++) {
        const j = ranking[idx];
        let gp = 0;
        let res = 'DERROTA';
        const ehVencedor = vencedores.includes(j) && vencedores.length > 0;
        if (idx === 0 && vencedores.length === 1) {
          gp = jogadores.length <= 1 ? 5 : (apostaGP > 0 ? Math.floor(apostaGP * jogadores.length) : 0);
          res = 'VITORIA';
        } else if (idx === 1 && vencedores.length <= 1 && jogadores.length > 1) {
          gp = 0;
        } else if (idx === 2 && vencedores.length <= 1 && jogadores.length > 1) {
          gp = 0;
        } else if (ehVencedor && vencedores.length > 1) {
          gp = (apostaGP > 0 ? Math.floor((apostaGP * jogadores.length) / vencedores.length) : 0);
          res = 'VITORIA';
        } else if (jogadores.length <= 1) {
          gp = ehVencedor ? 5 : 0;
        }
        if (gp > 0) await db.addPlayerGP(j.id, guildId, gp).catch(() => {});
        const u2 = idx === 0 ? (ranking[1]?.id || null) : ranking[0].id;
        await db.updateGameResult(guildId, jogoId, j.id, idx === 0 ? u2 : null, res, idx === 0 ? gp : 0, 0, detalhes).catch(() => {});
        await desbloquearAC01(j.id, guildId, jogoId);
      }

      if (vencedores.length === 1) {
        await desbloquearAC02(vencedores[0].id, guildId);
      }

      for (const j of jogadores) {
        const acertos = respostasPorJogador.get(j.id) || 0;
        if (acertos >= RODADAS_TOTAIS) {
          const un = await db.unlockAchievement(j.id, 'AC07');
          if (un) await db.addPlayerGP(j.id, guildId, 100);
        }
      }

      const e = new EmbedBuilder().setTitle('🏆 Quiz • Resultado Final').setColor(COR)
        .addFields({ name: '📊 Ranking', value: tagsRanking.join('\n\n'), inline: false });
      if (vencedores.length === 1 && vencedores[0].score > 0) {
        const vu = await client.users.fetch(vencedores[0].id).catch(() => null);
        e.addFields({ name: '🥇 Grande Vencedor(a)', value: vu ? `${vu.tag} com **${vencedores[0].score}** pontos!` : `<@${vencedores[0].id}>`, inline: false });
      } else if (vencedores.length > 1) {
        const vt = await Promise.all(vencedores.map(async v => {
          const u = await client.users.fetch(v.id).catch(() => null);
          return u?.tag || `<@${v.id}>`;
        }));
        e.addFields({ name: '🤝 Empate! Vencedores', value: vt.join(', '), inline: false });
      }
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function proximaRodada() {
      if (rodadaAtual >= RODADAS_TOTAIS) { finalizarQuiz(); return; }
      tempoInicioRodada = Date.now();
      respostasRodada = new Map();
      await interaction.editReply({ embeds: [await montarEmbedRodada()], components: botoesResposta(false) }).catch(() => {});
      timerRodada = setTimeout(async () => {
        for (const j of jogadores) {
          if (!respostasRodada.has(j.id)) respostasRodada.set(j.id, null);
        }
        rodadaAtual++;
        setTimeout(proximaRodada, 1500);
      }, TEMPO_RODADA);
    }

    async function comecarQuiz() {
      if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
      lobbyAberto = false;
      fase = 'rodadas';
      perguntasRodada = shuffleArray(PERGUNTAS_QUIZ).slice(0, RODADAS_TOTAIS);
      while (perguntasRodada.length < RODADAS_TOTAIS && PERGUNTAS_QUIZ.length > 0) {
        const extra = shuffleArray(PERGUNTAS_QUIZ).slice(0, RODADAS_TOTAIS - perguntasRodada.length);
        perguntasRodada = perguntasRodada.concat(extra);
      }
      for (const j of jogadores) respostasPorJogador.set(j.id, 0);
      rodadaAtual = 0;
      setTimeout(proximaRodada, 800);
    }

    const partida = {
      donoId,
      jogadores: jogadores.map(j => j.id),
      get user1_id() { return jogadores[0]?.id; },
      get user2_id() { return jogadores[1]?.id || null; },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (fase === 'lobby') {
            if (acao === 'entrar') {
              if (!lobbyAberto) { await btn.reply({ content: '⚠️ Lobby fechado!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.some(j => j.id === btn.user.id)) { await btn.reply({ content: '⚠️ Você já está no jogo!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.length >= MAX_JOGADORES) { await btn.reply({ content: '⚠️ Lobby cheio!', ephemeral: true }).catch(() => {}); return; }
              if (apostaGP > 0) {
                const p = await db.getOrInitPlayer(btn.user.id, guildId);
                if (Number(p?.coins_gp || 0) < apostaGP) { await btn.reply({ content: `❌ Saldo insuficiente (precisa de ${apostaGP} GP). Saldo: **${p?.coins_gp || 0}**`, ephemeral: true }).catch(() => {}); return; }
              }
              jogadores.push({ id: btn.user.id, score: 0, entrouEm: Date.now() });
              partida.jogadores = jogadores.map(j => j.id);
              try { await btn.deferUpdate(); } catch (_) {}
              await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
            } else if (acao === 'comecar') {
              if (btn.user.id !== donoId) { await btn.reply({ content: '⚠️ Apenas o dono pode começar.', ephemeral: true }).catch(() => {}); return; }
              try { await btn.deferUpdate(); } catch (_) {}
              await comecarQuiz();
            }
          } else if (fase === 'rodadas') {
            if (acao === 'alt') {
              const jIdx = jogadores.findIndex(j => j.id === btn.user.id);
              if (jIdx < 0) { await btn.reply({ content: '⚠️ Você não está neste jogo!', ephemeral: true }).catch(() => {}); return; }
              if (respostasRodada.has(btn.user.id)) { await btn.reply({ content: '⚠️ Você já respondeu esta rodada!', ephemeral: true }).catch(() => {}); return; }
              const altIdx = Number(partes[1]);
              const tempo = Date.now() - tempoInicioRodada;
              const p = perguntasRodada[rodadaAtual];
              const correta = Number(p.resp) === altIdx;
              respostasRodada.set(btn.user.id, { alt: altIdx, tempo, correta });
              if (correta) {
                const pts = pontosPorTempo(tempo);
                jogadores[jIdx].score += pts;
                respostasPorJogador.set(btn.user.id, (respostasPorJogador.get(btn.user.id) || 0) + 1);
              }
              try { await btn.deferUpdate(); } catch (_) {}
              const todosResponderam = jogadores.every(j => respostasRodada.has(j.id));
              if (todosResponderam && timerRodada) {
                clearTimeout(timerRodada);
                timerRodada = null;
                const tags = await Promise.all(jogadores.map(async j => {
                  const u = await client.users.fetch(j.id).catch(() => null);
                  return u?.tag || `<@${j.id}>`;
                }));
                const pCorretas = p.alt[p.resp];
                const listaRes = jogadores.map((j, i) => {
                  const r = respostasRodada.get(j.id);
                  const c = r?.correta ? '✅' : '❌';
                  const pts = r?.correta ? pontosPorTempo(r.tempo) : 0;
                  return `${c} ${tags[i]}: ${r?.correta ? `+${pts} pts` : 'Errou/Não respondeu'} (${j.score} pts total)`;
                });
                const e = new EmbedBuilder().setTitle(`✅ Rodada ${rodadaAtual + 1} Finalizada`).setColor(COR)
                  .addFields(
                    { name: '📝 Resposta correta', value: `${['🅰️', '🅱️', '🟩', '🅳️'][p.resp]} **${['A', 'B', 'C', 'D'][p.resp]}:** ${pCorretas}`, inline: false },
                    { name: '📊 Resultados', value: listaRes.join('\n'), inline: false }
                  );
                await interaction.editReply({ embeds: [e], components: botoesResposta(true) }).catch(() => {});
                rodadaAtual++;
                setTimeout(proximaRodada, 2000);
              }
            }
          }
        } catch (err) {
          console.error('[quiz btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
        if (timerRodada) { clearTimeout(timerRodada); timerRodada = null; }
        if (apostaGP > 0) for (const j of jogadores) await db.addPlayerGP(j.id, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('❓ Cancelado').setColor(COR).setDescription('⏹️ Quiz cancelado.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
    timerLobby = setTimeout(async () => {
      if (terminou || fase !== 'lobby') return;
      if (jogadores.length < 1) {
        try { await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('❓ Lobby expirou').setColor(COR).setDescription('⏳ Nenhum jogador entrou.')], components: [] }).catch(() => {}); }
        catch (_) {}
        removerPartida(jogoId, canalId); terminou = true;
      } else {
        await comecarQuiz();
      }
    }, LOBBY_MS);
    return partida;
  } catch (err) {
    console.error('[quiz criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarRoleta({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;

    let jogadores = [{ id: donoId, vivo: true, ordem: 0 }];
    let fase = 'lobby';
    let lobbyAberto = true;
    let terminou = false;
    let timerLobby = null;
    const MIN = 2; const MAX = 6;
    const LOBBY_MS = 30 * 1000;
    let camaraBala = Math.floor(Math.random() * 6);
    let posicaoAtual = 0;
    let jogadorAtualIdx = 0;
    let jogadasRealizadas = 0;
    let idxPrimeiroGatilhoVencedor = -1;

    function botoesLobby(disabled = false) {
      return [new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:entrar`).setLabel('🔫 Entrar na Roleta').setStyle(ButtonStyle.Success).setDisabled(disabled || !lobbyAberto || jogadores.length >= MAX),
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:comecar`).setLabel('▶️ Começar').setStyle(ButtonStyle.Primary).setDisabled(disabled || !lobbyAberto || jogadores.length < MIN || jogadores[0].id !== donoId)
      )];
    }

    function botoesJogo(disabled = false) {
      return [new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:gatilho`).setLabel('🔫 Puxar gatilho').setStyle(ButtonStyle.Danger).setDisabled(disabled)
      )];
    }

    async function montarEmbedLobby(extra = null) {
      const dono = await client.users.fetch(donoId).catch(() => null);
      const tags = await Promise.all(jogadores.map(async (j, i) => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return `${i === 0 ? '👑 ' : ''}${i + 1}. ${u?.tag || `<@${j.id}>`}`;
      }));
      const e = new EmbedBuilder().setTitle('🔫 Roleta Russa • Lobby').setColor(COR)
        .setDescription('6 câmaras, 1 bala. Último sobrevivente vence! De 2 a 6 jogadores.')
        .addFields(
          { name: `👥 Jogadores (${jogadores.length}/${MAX})`, value: tags.join('\n'), inline: false },
          { name: '⏳ Status', value: lobbyAberto ? (jogadores.length < MIN ? `Faltam **${MIN - jogadores.length}** para começar. Lobby fecha em 30s.` : `Lobby aberto. ${dono?.tag || 'O dono'} clique em Começar quando pronto.`) : '🔒 Lobby fechado.', inline: false }
        );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP por jogador (vencedor leva tudo)`, inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    async function montarEmbedJogo(extra = null) {
      const vivos = jogadores.filter(j => j.vivo);
      const tags = await Promise.all(jogadores.map(async j => {
        const u = await client.users.fetch(j.id).catch(() => null);
        return `${j.vivo ? '🟢' : '💀'} ${u?.tag || `<@${j.id}>`}`;
      }));
      const jAtual = jogadores[jogadorAtualIdx];
      const uAtual = jAtual ? await client.users.fetch(jAtual.id).catch(() => null) : null;
      const e = new EmbedBuilder().setTitle('🔫 Roleta Russa').setColor(COR);
      if (jAtual && jAtual.vivo) {
        e.setDescription(`🎯 Vez de **${uAtual?.tag || 'alguém'}** — puxe o gatilho! Câmara atual: **${posicaoAtual + 1}/6**`);
      }
      e.addFields(
        { name: '👥 Jogadores', value: tags.join('\n'), inline: false },
        { name: '💀 Status', value: vivos.length === 1 ? '🏆 Temos um vencedor!' : `**${vivos.length}** vivo(s) de **${jogadores.length}** total.`, inline: false }
      );
      if (extra) e.addFields(extra);
      return e;
    }

    async function finalizarRoleta() {
      terminou = true;
      const vivos = jogadores.filter(j => j.vivo);
      const vencedorId = vivos[0]?.id;
      const detalhes = { roleta: { camara: camaraBala, jogadores: jogadores.map(j => ({ id: j.id, vivo: j.vivo })), jogadas: jogadasRealizadas } };
      for (let i = 0; i < jogadores.length; i++) {
        const j = jogadores[i];
        let res = 'DERROTA';
        let gp = 0;
        if (j.id === vencedorId) {
          res = 'VITORIA';
          if (jogadores.length <= 1) gp = 5;
          else gp = apostaGP > 0 ? apostaGP * jogadores.length : 0;
        } else if (jogadores.length <= 1 && j.vivo && !vencedorId) {
          gp = 5;
        }
        if (gp > 0) await db.addPlayerGP(j.id, guildId, gp).catch(() => {});
        const u2 = i === 0 ? (jogadores[1]?.id || null) : jogadores[0].id;
        await db.updateGameResult(guildId, jogoId, j.id, i === 0 ? u2 : null, res, i === 0 ? gp : 0, 0, detalhes).catch(() => {});
        await desbloquearAC01(j.id, guildId, jogoId);
      }
      if (vencedorId) {
        await desbloquearAC02(vencedorId, guildId);
        if (jogadasRealizadas <= 1 || idxPrimeiroGatilhoVencedor === 0) {
          const un = await db.unlockAchievement(vencedorId, 'AC08');
          if (un) await db.addPlayerGP(vencedorId, guildId, 40);
        }
      }
      const vUser = vencedorId ? await client.users.fetch(vencedorId).catch(() => null) : null;
      const gpVencedor = jogadores.length <= 1 ? 5 : (apostaGP > 0 ? apostaGP * jogadores.length : 0);
      const e = new EmbedBuilder().setTitle('🏆 Roleta Russa • Fim').setColor(COR)
        .addFields(
          { name: '🎯 Câmara da bala', value: `Posição **${camaraBala + 1}** (foram **${jogadasRealizadas}** gatilhos puxados)`, inline: false },
          { name: vencedorId ? '🥇 Vencedor(a)' : '💀 Resultado', value: vencedorId ? `${vUser?.tag || `<@${vencedorId}>`} **Sobreviveu!**${gpVencedor > 0 ? ' +' + gpVencedor + ' GP' : ''}` : 'Fim de jogo.', inline: false }
        );
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function verificarFimEVez() {
      const vivos = jogadores.filter(j => j.vivo);
      if (vivos.length <= 1) { finalizarRoleta(); return true; }
      let seguranca = 0;
      while (jogadores[jogadorAtualIdx] && !jogadores[jogadorAtualIdx].vivo && seguranca < jogadores.length) {
        jogadorAtualIdx = (jogadorAtualIdx + 1) % jogadores.length;
        seguranca++;
      }
      await interaction.editReply({ embeds: [await montarEmbedJogo()], components: botoesJogo(false) }).catch(() => {});
      return false;
    }

    async function comecarRoleta() {
      if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
      lobbyAberto = false;
      fase = 'jogando';
      camaraBala = Math.floor(Math.random() * 6);
      posicaoAtual = 0;
      jogadorAtualIdx = 0;
      idxPrimeiroGatilhoVencedor = camaraBala === 0 ? 0 : -1;
      verificarFimEVez();
    }

    const partida = {
      donoId,
      jogadores: jogadores.map(j => j.id),
      get user1_id() { return jogadores[0]?.id; },
      get user2_id() { return jogadores[1]?.id || null; },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (fase === 'lobby') {
            if (acao === 'entrar') {
              if (!lobbyAberto) { await btn.reply({ content: '⚠️ Lobby fechado!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.some(j => j.id === btn.user.id)) { await btn.reply({ content: '⚠️ Você já está!', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.length >= MAX) { await btn.reply({ content: '⚠️ Lobby cheio!', ephemeral: true }).catch(() => {}); return; }
              if (apostaGP > 0) {
                const p = await db.getOrInitPlayer(btn.user.id, guildId);
                if (Number(p?.coins_gp || 0) < apostaGP) { await btn.reply({ content: `❌ Saldo insuficiente. Precisa de ${apostaGP} GP. Saldo: **${p?.coins_gp || 0}**`, ephemeral: true }).catch(() => {}); return; }
              }
              jogadores.push({ id: btn.user.id, vivo: true, ordem: jogadores.length });
              partida.jogadores = jogadores.map(j => j.id);
              try { await btn.deferUpdate(); } catch (_) {}
              await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
            } else if (acao === 'comecar') {
              if (btn.user.id !== donoId) { await btn.reply({ content: '⚠️ Apenas o dono pode começar.', ephemeral: true }).catch(() => {}); return; }
              if (jogadores.length < MIN) { await btn.reply({ content: `⚠️ Precisa de pelo menos ${MIN} jogadores.`, ephemeral: true }).catch(() => {}); return; }
              try { await btn.deferUpdate(); } catch (_) {}
              await comecarRoleta();
            }
          } else if (fase === 'jogando') {
            if (acao === 'gatilho') {
              const j = jogadores[jogadorAtualIdx];
              if (!j || btn.user.id !== j.id) { await btn.reply({ content: '⚠️ Não é sua vez!', ephemeral: true }).catch(() => {}); return; }
              try { await btn.deferUpdate(); } catch (_) {}
              jogadasRealizadas++;
              const morreu = posicaoAtual === camaraBala;
              let extra = null;
              if (morreu) {
                jogadores[jogadorAtualIdx].vivo = false;
                const u = await client.users.fetch(j.id).catch(() => null);
                extra = { name: '💀 BANG!', value: `**${u?.tag || 'Alguém'}** morreu! 💥`, inline: false };
                idxPrimeiroGatilhoVencedor = -1;
              } else {
                extra = { name: '✖️ CLICK...', value: `Câmara **${posicaoAtual + 1}** vazia. Ufa! 😅`, inline: false };
                posicaoAtual = (posicaoAtual + 1) % 6;
              }
              jogadorAtualIdx = (jogadorAtualIdx + 1) % jogadores.length;
              await interaction.editReply({ embeds: [await montarEmbedJogo(extra)], components: botoesJogo(true) }).catch(() => {});
              setTimeout(verificarFimEVez, morreu ? 1800 : 900);
            }
          }
        } catch (err) {
          console.error('[roleta btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (timerLobby) { clearTimeout(timerLobby); timerLobby = null; }
        if (apostaGP > 0) for (const j of jogadores) await db.addPlayerGP(j.id, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🔫 Cancelado').setColor(COR).setDescription('⏹️ Roleta cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [await montarEmbedLobby()], components: botoesLobby(false) }).catch(() => {});
    timerLobby = setTimeout(async () => {
      if (terminou || fase !== 'lobby') return;
      if (jogadores.length < MIN) {
        try { await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🔫 Lobby expirou').setColor(COR).setDescription('⏳ Jogadores insuficientes em 30s.')], components: [] }).catch(() => {}); }
        catch (_) {}
        removerPartida(jogoId, canalId); terminou = true;
      } else {
        await comecarRoleta();
      }
    }, LOBBY_MS);
    return partida;
  } catch (err) {
    console.error('[roleta criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criar(args) {
  const id = args.jogo?.id;
  switch (id) {
    case 'quiz': return criarQuiz(args);
    case 'roleta': return criarRoleta(args);
    default:
      try { await args.interaction.editReply(`⚠️ Jogo **${id}** não existe em quiz.js.`); } catch (_) {}
      return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_quiz__, __mod_obj_game_quiz__.exports, __makeReq_game_quiz__, path.dirname(path.resolve(process.cwd(), "commands/games/quiz.js")), path.resolve(process.cwd(), "commands/games/quiz.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_quiz = __mod_obj_game_quiz__.exports;

const __makeReq_game_memoria__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/memoria.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_memoria__ = { exports: __BOT_MODULE__.game_memoria };
// -------- commands/games/memoria.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');
const db = require('../../database');
const { registrarPartida, removerPartida } = require('../jogos');

const COR = '#ff0040';

async function desbloquearAC01(userId, guildId, jogoId) {
  const lista = await db.getPlayerMatches(userId, guildId, 1, jogoId);
  if (lista.length <= 1) {
    const un = await db.unlockAchievement(userId, 'AC01');
    if (un) await db.addPlayerGP(userId, guildId, 10);
  }
}

async function desbloquearAC02(userId, guildId) {
  const un = await db.unlockAchievement(userId, 'AC02');
  if (un) await db.addPlayerGP(userId, guildId, 20);
}

const EMOJIS_MEMORIA = ['🍎', '🍇', '🍌', '🍉', '🍓', '🍒', '🥝', '🍍'];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function criarMemoria({ interaction, client, jogo, donoId, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const userId = donoId;
    const user = await client.users.fetch(userId).catch(() => null);

    const pares = shuffleArray([...EMOJIS_MEMORIA, ...EMOJIS_MEMORIA]);
    const revelados = new Set();
    const acertados = new Set();
    let clicando = false;
    let primeiroIdx = null;
    let terminou = false;
    const inicio = Date.now();

    function botoesGrid(highlight = []) {
      const rows = [];
      for (let r = 0; r < 4; r++) {
        const botoes = [];
        for (let c = 0; c < 4; c++) {
          const idx = r * 4 + c;
          const ehAberto = acertados.has(idx) || revelados.has(idx) || highlight.includes(idx);
          const style = acertados.has(idx) ? ButtonStyle.Success : highlight.includes(idx) ? ButtonStyle.Primary : ButtonStyle.Secondary;
          botoes.push(new ButtonBuilder()
            .setCustomId(`jogos:${jogoId}:card:${idx}`)
            .setLabel(ehAberto ? pares[idx] : '?')
            .setEmoji(ehAberto ? null : '❓')
            .setStyle(style)
            .setDisabled(acertados.has(idx) || terminou || clicando));
        }
        rows.push(new ActionRowBuilder().addComponents(botoes));
      }
      return rows;
    }

    function montarEmbed(extra = null) {
      const tempo = Math.round((Date.now() - inicio) / 1000);
      const e = new EmbedBuilder().setTitle('🧠 Jogo da Memória').setColor(COR);
      e.setDescription(`${user || 'Você'} encontre os 8 pares de emojis! Quanto mais rápido, melhor!`);
      e.addFields(
        { name: '⏱️ Tempo', value: `${tempo}s`, inline: true },
        { name: '✅ Pares encontrados', value: `${acertados.size / 2} de 8`, inline: true }
      );
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP`, inline: false });
      if (extra) e.addFields(extra);
      e.setFooter({ text: 'Clique em 2 cartas. Iguais = permanecem abertas!' });
      return e;
    }

    async function finalizar() {
      terminou = true;
      clicando = true;
      const tempo = Math.round((Date.now() - inicio) / 1000);
      const vsIA = !oponente;
      let gp = vsIA ? 5 : (apostaGP > 0 ? apostaGP * 2 : 0);
      let xpExtra = 20;
      if (tempo <= 30) {
        xpExtra = 30;
      } else if (tempo <= 60) {
        xpExtra = 20;
      }
      const detalhes = { memoria: { tempo_segundos: tempo, pares: 8 } };
      await db.updateGameResult(guildId, jogoId, userId, null, 'VITORIA', gp, 0, detalhes);
      if (gp > 0) await db.addPlayerGP(userId, guildId, gp).catch(() => {});
      await db.addPlayerXP(userId, guildId, xpExtra, jogoId).catch(() => {});
      await desbloquearAC01(userId, guildId, jogoId);
      await desbloquearAC02(userId, guildId);
      if (tempo <= 30) {
        const un = await db.unlockAchievement(userId, 'AC11');
        if (un) await db.addPlayerGP(userId, guildId, 80);
      }
      const e = new EmbedBuilder().setTitle('🎉 Memória - Concluído!').setColor(COR)
        .addFields(
          { name: '⏱️ Tempo total', value: `${tempo} segundos`, inline: false },
          { name: '🏆 Prêmio', value: `${gp > 0 ? '+' + gp + ' GP • ' : ''}+${xpExtra} XP${tempo <= 30 ? ' (⭐ Memória Fotográfica +80GP!)' : tempo <= 60 ? ' (✅ Bom tempo!)' : ''}`, inline: false }
        );
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    const partida = {
      donoId,
      user1_id: userId,
      user2_id: null,
      jogadores: [userId],
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          if (btn.user.id !== userId) { await btn.reply({ content: '⚠️ Não é seu jogo!', ephemeral: true }).catch(() => {}); return; }
          if (clicando) return;
          const acao = partes[0];
          if (acao !== 'card') return;
          const idx = Number(partes[1]);
          if (isNaN(idx) || idx < 0 || idx >= 16) return;
          if (acertados.has(idx) || revelados.has(idx)) return;
          try { await btn.deferUpdate(); } catch (_) {}
          if (primeiroIdx === null) {
            primeiroIdx = idx;
            revelados.add(idx);
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesGrid([idx]) }).catch(() => {});
            return;
          }
          if (primeiroIdx === idx) return;
          clicando = true;
          revelados.add(idx);
          await interaction.editReply({ embeds: [montarEmbed()], components: botoesGrid([primeiroIdx, idx]) }).catch(() => {});
          const iguais = pares[primeiroIdx] === pares[idx];
          setTimeout(async () => {
            if (iguais) {
              acertados.add(primeiroIdx);
              acertados.add(idx);
            }
            revelados.delete(primeiroIdx);
            revelados.delete(idx);
            primeiroIdx = null;
            clicando = false;
            if (acertados.size >= 16) { finalizar(); return; }
            await interaction.editReply({ embeds: [montarEmbed()], components: botoesGrid() }).catch(() => {});
          }, iguais ? 400 : 1000);
        } catch (err) {
          console.error('[memoria btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) await db.addPlayerGP(userId, guildId, apostaGP).catch(() => {});
        try {
          await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🧠 Cancelado').setColor(COR).setDescription('⏹️ Partida cancelada.')], components: [] }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesGrid() }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[memoria criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

const COLUNAS_BN = ['A', 'B', 'C', 'D', 'E'];
const LINHAS_BN = ['1', '2', '3', '4', '5'];

function celulaIdxBN(col, lin) { return lin * 5 + col; }
function idxParaCoordenadas(idx) {
  return { col: idx % 5, lin: Math.floor(idx / 5) };
}

async function criarBatalhaNaval({ interaction, client, jogo, donoId, oponente, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const user1Id = donoId;
    const user2Id = oponente;
    if (!user2Id) {
      try { await interaction.editReply('⚠️ Batalha Naval é 1v1. Desafie alguém com /jogos desafio.'); } catch (_) {}
      return null;
    }
    const u1 = await client.users.fetch(user1Id).catch(() => null);
    const u2 = await client.users.fetch(user2Id).catch(() => null);

    const NAVIOS = [3, 2, 1];
    const tabuleiros = { [user1Id]: Array(25).fill(null), [user2Id]: Array(25).fill(null) };
    const disparosRecebidos = { [user1Id]: new Set(), [user2Id]: new Set() };
    let fase = 'colocacao_p1';
    let navioIdxAtual = { [user1Id]: 0, [user2Id]: 0 };
    let colocacaoOrient = { [user1Id]: 'h', [user2Id]: 'h' };
    let terminou = false;
    let jogadorAtual = user1Id;
    let celulasEscolhasTemp = [];

    function botoesOrientacao(uid) {
      return [new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:orient:h`).setLabel('↔️ Horizontal').setStyle(colocacaoOrient[uid] === 'h' ? ButtonStyle.Success : ButtonStyle.Primary).setDisabled(terminou),
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:orient:v`).setLabel('↕️ Vertical').setStyle(colocacaoOrient[uid] === 'v' ? ButtonStyle.Success : ButtonStyle.Primary).setDisabled(terminou),
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:limpar`).setLabel('🗑️ Limpar tabuleiro').setStyle(ButtonStyle.Secondary).setDisabled(terminou)
      )];
    }

    function botoesTabuleiro(uid, alvo = false) {
      const rows = [];
      for (let lin = 0; lin < 5; lin++) {
        const linha = [new ButtonBuilder().setCustomId(`jogos:${jogoId}:label:${lin}`).setLabel(LINHAS_BN[lin]).setStyle(ButtonStyle.Secondary).setDisabled(true)];
        for (let col = 0; col < 5; col++) {
          const idx = celulaIdxBN(col, lin);
          const dono = alvo ? (uid === user1Id ? user2Id : user1Id) : uid;
          const val = tabuleiros[dono][idx];
          const disparou = disparosRecebidos[dono].has(idx);
          let emoji = null;
          let label = COLUNAS_BN[col];
          let style = ButtonStyle.Primary;
          if (alvo) {
            if (disparou) {
              if (val) { emoji = '💥'; label = COLUNAS_BN[col]; style = ButtonStyle.Danger; }
              else { emoji = '💨'; label = COLUNAS_BN[col]; style = ButtonStyle.Secondary; }
            }
          } else {
            if (val) { emoji = '🚢'; label = COLUNAS_BN[col]; style = ButtonStyle.Success; }
            else if (celulasEscolhasTemp.includes(idx)) { emoji = '🔵'; label = COLUNAS_BN[col]; style = ButtonStyle.Primary; }
          }
          linha.push(new ButtonBuilder()
            .setCustomId(`jogos:${jogoId}:${alvo ? 'atiro' : 'coloca'}:${idx}`)
            .setLabel(label)
            .setEmoji(emoji)
            .setStyle(style)
            .setDisabled(terminou || (alvo ? disparou : false)));
        }
        rows.push(new ActionRowBuilder().addComponents(linha));
      }
      const headerBotoes = [
        new ButtonBuilder().setCustomId(`jogos:${jogoId}:label:header`).setLabel('⬜').setStyle(ButtonStyle.Secondary).setDisabled(true)
      ];
      for (let c = 0; c < 5; c++) {
        headerBotoes.push(new ButtonBuilder().setCustomId(`jogos:${jogoId}:hcol:${c}`).setLabel(COLUNAS_BN[c]).setStyle(ButtonStyle.Secondary).setDisabled(true));
      }
      return [new ActionRowBuilder().addComponents(headerBotoes), ...rows];
    }

    async function montarEmbed(extra = null) {
      const e = new EmbedBuilder().setTitle('⚓ Batalha Naval 5x5').setColor(COR);
      let faseTxt = '';
      if (fase === 'colocacao_p1') {
        const tamanho = NAVIOS[navioIdxAtual[user1Id]] || 0;
        faseTxt = `🛠️ **Fase 1**: Posicione seus navios.\nVez de: **${u1?.tag || 'Jogador 1'}**\nNavio atual: **${tamanho} casa(s)** (restam ${NAVIOS.length - navioIdxAtual[user1Id]} navios)\nOrientação: **${colocacaoOrient[user1Id] === 'h' ? 'Horizontal ↔️' : 'Vertical ↕️'}**`;
      } else if (fase === 'colocacao_p2') {
        const tamanho = NAVIOS[navioIdxAtual[user2Id]] || 0;
        faseTxt = `🛠️ **Fase 1**: Posicione seus navios.\nVez de: **${u2?.tag || 'Jogador 2'}**\nNavio atual: **${tamanho} casa(s)** (restam ${NAVIOS.length - navioIdxAtual[user2Id]} navios)\nOrientação: **${colocacaoOrient[user2Id] === 'h' ? 'Horizontal ↔️' : 'Vertical ↕️'}**`;
      } else if (fase === 'jogando') {
        const vez = jogadorAtual === user1Id ? u1?.tag || 'J1' : u2?.tag || 'J2';
        faseTxt = `🎯 **Fase 2 - Combate!**\nVez de **${vez}** (atacar o tabuleiro do oponente).`;
      }
      e.setDescription(faseTxt);
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP cada (vencedor leva tudo)`, inline: false });
      if (extra) e.addFields(extra);
      return e;
    }

    function validarColocacao(uid, idxIni) {
      const tam = NAVIOS[navioIdxAtual[uid]];
      const orient = colocacaoOrient[uid];
      const cells = [];
      const { col, lin } = idxParaCoordenadas(idxIni);
      for (let i = 0; i < tam; i++) {
        let c = col, l = lin;
        if (orient === 'h') c = col + i;
        else l = lin + i;
        if (c < 0 || c >= 5 || l < 0 || l >= 5) return null;
        const id = celulaIdxBN(c, l);
        if (tabuleiros[uid][id]) return null;
        cells.push(id);
      }
      return cells;
    }

    function naviosAfundados(uid) {
      let qtd = 0;
      for (const tam of NAVIOS) {
        let encontrados = 0;
        for (let idx = 0; idx < 25; idx++) {
          if (tabuleiros[uid][idx] && disparosRecebidos[uid].has(idx)) encontrados++;
        }
        qtd = encontrados;
      }
      const totalNavioCelulas = NAVIOS.reduce((s, t) => s + t, 0);
      const acertos = [...disparosRecebidos[uid]].filter(i => tabuleiros[uid][i]).length;
      return { acertos, total: totalNavioCelulas, totalAfund: acertos >= totalNavioCelulas };
    }

    function todosNaviosColocados(uid) {
      return navioIdxAtual[uid] >= NAVIOS.length;
    }

    async function finalizar(vencedorId, semPerder = false) {
      terminou = true;
      const resP1 = vencedorId === user1Id ? 'VITORIA' : 'DERROTA';
      let gp1 = 0, gp2 = 0;
      if (apostaGP > 0) {
        if (vencedorId === user1Id) gp1 = apostaGP * 2;
        if (vencedorId === user2Id) gp2 = apostaGP * 2;
      }
      const detalhes = { batalhanaval: { user1_colocado: todosNaviosColocados(user1Id), user2_colocado: todosNaviosColocados(user2Id) } };
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resP1, gp1, gp2, detalhes);
      if (gp1 > 0) await db.addPlayerGP(user1Id, guildId, gp1).catch(() => {});
      if (gp2 > 0) await db.addPlayerGP(user2Id, guildId, gp2).catch(() => {});
      await desbloquearAC01(user1Id, guildId, jogoId);
      await desbloquearAC01(user2Id, guildId, jogoId);
      await desbloquearAC02(vencedorId, guildId);
      if (semPerder) {
        const un = await db.unlockAchievement(vencedorId, 'AC12');
        if (un) await db.addPlayerGP(vencedorId, guildId, 100);
      }
      const vUser = vencedorId === user1Id ? u1 : u2;
      const e = new EmbedBuilder().setTitle(vencedorId ? '⚓ Batalha Naval - Vencedor!' : '🏁 Fim de jogo').setColor(COR)
        .addFields({ name: vencedorId ? '🏆 Vencedor(a)' : 'Resultado', value: vencedorId ? `${vUser?.tag || 'Alguém'} venceu! +${vencedorId === user1Id ? gp1 : gp2} GP${semPerder ? ' (⭐ Almirante Implacável +100!)' : ''}` : 'Jogo cancelado.', inline: false });
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function avancarFaseColocacao() {
      if (fase === 'colocacao_p1' && todosNaviosColocados(user1Id)) {
        fase = 'colocacao_p2';
        celulasEscolhasTemp = [];
        await interaction.editReply({ embeds: [await montarEmbed()], components: [...botoesTabuleiro(user2Id, false), ...botoesOrientacao(user2Id)] }).catch(() => {});
        return;
      }
      if (fase === 'colocacao_p2' && todosNaviosColocados(user2Id)) {
        fase = 'jogando';
        jogadorAtual = user1Id;
        celulasEscolhasTemp = [];
        const atacante = jogadorAtual === user1Id ? u1 : u2;
        await interaction.editReply({ embeds: [await montarEmbed({ name: '🎯 Tabuleiro Alvo', value: `${atacante?.tag || ''} ataca o tabuleiro do oponente:`, inline: false })], components: botoesTabuleiro(jogadorAtual, true) }).catch(() => {});
        return;
      }
      const uid = fase === 'colocacao_p1' ? user1Id : user2Id;
      celulasEscolhasTemp = [];
      await interaction.editReply({ embeds: [await montarEmbed()], components: [...botoesTabuleiro(uid, false), ...botoesOrientacao(uid)] }).catch(() => {});
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id],
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (acao === 'label' || acao === 'hcol') return;
          const uidEsperadoColocacao = fase === 'colocacao_p1' ? user1Id : fase === 'colocacao_p2' ? user2Id : null;
          if (uidEsperadoColocacao && (acao === 'coloca' || acao === 'orient' || acao === 'limpar')) {
            if (btn.user.id !== uidEsperadoColocacao) { await btn.reply({ content: '⚠️ Não é sua vez de posicionar navios!', ephemeral: true }).catch(() => {}); return; }
          }
          if (fase === 'jogando' && acao === 'atiro') {
            if (btn.user.id !== jogadorAtual) { await btn.reply({ content: '⚠️ Não é sua vez de atacar!', ephemeral: true }).catch(() => {}); return; }
          }
          try { await btn.deferUpdate(); } catch (_) {}
          if (acao === 'orient') {
            const o = partes[1];
            const uid = uidEsperadoColocacao;
            colocacaoOrient[uid] = o === 'v' ? 'v' : 'h';
            celulasEscolhasTemp = [];
            await interaction.editReply({ embeds: [await montarEmbed()], components: [...botoesTabuleiro(uid, false), ...botoesOrientacao(uid)] }).catch(() => {});
          } else if (acao === 'limpar') {
            const uid = uidEsperadoColocacao;
            for (let i = 0; i < 25; i++) tabuleiros[uid][i] = null;
            navioIdxAtual[uid] = 0;
            celulasEscolhasTemp = [];
            await interaction.editReply({ embeds: [await montarEmbed()], components: [...botoesTabuleiro(uid, false), ...botoesOrientacao(uid)] }).catch(() => {});
          } else if (acao === 'coloca') {
            const idx = Number(partes[1]);
            const uid = uidEsperadoColocacao;
            const cells = validarColocacao(uid, idx);
            if (!cells) {
              await interaction.followUp({ content: '❌ Posição inválida! Escolha outra célula inicial (verifique orientação e sobreposição).', ephemeral: true }).catch(() => {});
              return;
            }
            for (const c of cells) tabuleiros[uid][c] = navioIdxAtual[uid] + 1;
            navioIdxAtual[uid]++;
            avancarFaseColocacao();
          } else if (acao === 'atiro') {
            const idx = Number(partes[1]);
            const alvoUid = jogadorAtual === user1Id ? user2Id : user1Id;
            disparosRecebidos[alvoUid].add(idx);
            const acertou = !!tabuleiros[alvoUid][idx];
            const statusAfund = naviosAfundados(alvoUid);
            let extraName = acertou ? '💥 ACERTO!' : '💨 Água...';
            let extraVal = acertou ? (statusAfund.totalAfund ? '🚢 TODOS OS NAVIOS AFUNDADOS!' : 'Você acertou um navio!') : 'Nada por aqui. Tente novamente.';
            if (statusAfund.totalAfund) {
              const semPerderVencedor = naviosAfundados(jogadorAtual).acertos === 0;
              finalizar(jogadorAtual, semPerderVencedor);
              return;
            }
            jogadorAtual = alvoUid;
            const atacante = jogadorAtual === user1Id ? u1 : u2;
            await interaction.editReply({ embeds: [await montarEmbed({ name: extraName, value: extraVal, inline: false })], components: botoesTabuleiro(jogadorAtual, true) }).catch(() => {});
          }
        } catch (err) {
          console.error('[bnaval btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) { await db.addPlayerGP(user1Id, guildId, apostaGP).catch(() => {}); await db.addPlayerGP(user2Id, guildId, apostaGP).catch(() => {}); }
        try { await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('⚓ Cancelado').setColor(COR).setDescription('⏹️ Batalha Naval cancelada.')], components: [] }).catch(() => {}); } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [await montarEmbed()], components: [...botoesTabuleiro(user1Id, false), ...botoesOrientacao(user1Id)] }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[bnaval criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criarConecta4({ interaction, client, jogo, donoId, oponente, apostaGP }) {
  try {
    const guildId = interaction.guildId;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const user1Id = donoId;
    const user2Id = oponente;
    if (!user2Id) { try { await interaction.editReply('⚠️ Conecta 4 é 1v1. Desafie alguém.'); } catch (_) {} return null; }
    const u1 = await client.users.fetch(user1Id).catch(() => null);
    const u2 = await client.users.fetch(user2Id).catch(() => null);

    const COLS = 7, ROWS = 6;
    const tab = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    const simbolos = { 0: '⬛', 1: '🔴', 2: '🟡' };
    let jogadorAtual = 1;
    let jogadas = 0;
    let terminou = false;

    function botoesColunas() {
      const botoes = [];
      for (let c = 0; c < COLS; c++) {
        const cheia = tab[0][c] !== 0;
        botoes.push(new ButtonBuilder()
          .setCustomId(`jogos:${jogoId}:col:${c}`)
          .setLabel(`${c + 1}`)
          .setEmoji(['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣'][c])
          .setStyle(jogadorAtual === 1 ? ButtonStyle.Danger : ButtonStyle.Primary)
          .setDisabled(terminou || cheia));
      }
      return [new ActionRowBuilder().addComponents(botoes)];
    }

    function renderTabuleiro() {
      const linhas = [];
      for (let r = 0; r < ROWS; r++) {
        linhas.push(tab[r].map(c => simbolos[c]).join(''));
      }
      return '```\n' + linhas.join('\n') + '\n1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣\n```';
    }

    function montarEmbed(extra = null) {
      const vez = jogadorAtual === 1 ? u1 : u2;
      const peca = simbolos[jogadorAtual];
      const e = new EmbedBuilder().setTitle('🔴 Conecta 4 • 7x6').setColor(COR)
        .setDescription(`**${u1?.tag || 'J1'}** ${simbolos[1]} vs ${simbolos[2]} **${u2?.tag || 'J2'}**\n\n🎯 Vez de **${vez?.tag || 'jogador'}** ${peca}\n\n${renderTabuleiro()}`);
      if (apostaGP > 0) e.addFields({ name: '💰 Aposta GP', value: `${apostaGP} GP cada (vencedor leva tudo)`, inline: false });
      e.addFields({ name: '📊 Jogadas', value: String(jogadas), inline: true });
      if (extra) e.addFields(extra);
      e.setFooter({ text: '4 fichas em linha = vitória (horizontal, vertical ou diagonal)' });
      return e;
    }

    function jogarPeca(col) {
      for (let r = ROWS - 1; r >= 0; r--) {
        if (tab[r][col] === 0) { tab[r][col] = jogadorAtual; return { r, c: col }; }
      }
      return null;
    }

    function verificarVitoria(r, c, jog) {
      const dirs = [[0,1],[1,0],[1,1],[1,-1]];
      for (const [dr, dc] of dirs) {
        let cnt = 1;
        for (let s = 1; s < 4; s++) { const nr = r + dr*s, nc = c + dc*s; if (nr<0||nr>=ROWS||nc<0||nc>=COLS||tab[nr][nc]!==jog) break; cnt++; }
        for (let s = 1; s < 4; s++) { const nr = r - dr*s, nc = c - dc*s; if (nr<0||nr>=ROWS||nc<0||nc>=COLS||tab[nr][nc]!==jog) break; cnt++; }
        if (cnt >= 4) return true;
      }
      return false;
    }

    function tabCheio() {
      for (let c = 0; c < COLS; c++) if (tab[0][c] === 0) return false;
      return true;
    }

    async function finalizar(tipo, jogVencedor = 0) {
      terminou = true;
      let resP1 = 'EMPATE';
      let gp1 = 0, gp2 = 0;
      let mensagem = '';
      if (tipo === 'vitoria') {
        resP1 = jogVencedor === 1 ? 'VITORIA' : 'DERROTA';
        const vid = jogVencedor === 1 ? user1Id : user2Id;
        const vUser = jogVencedor === 1 ? u1 : u2;
        let gp = 0;
        if (apostaGP > 0) gp = apostaGP * 2;
        if (jogVencedor === 1) gp1 = gp; else gp2 = gp;
        mensagem = `🏆 **${vUser?.tag || 'Alguém'}** venceu com **${jogadas}** jogada(s)!${gp > 0 ? ' +' + gp + ' GP' : ''}`;
        if (jogadas <= 10) {
          const un = await db.unlockAchievement(vid, 'AC13');
          if (un) await db.addPlayerGP(vid, guildId, 60);
          mensagem += '\n⭐ **Estrategista!** (≤10 jogadas) +60 GP bônus';
        }
        await desbloquearAC02(vid, guildId);
      } else {
        mensagem = '🤝 Empate! Tabuleiro cheio sem vencedor.';
        if (apostaGP > 0) { gp1 = apostaGP; gp2 = apostaGP; }
      }
      const detalhes = { conecta4: { jogadas, resultado: tipo } };
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resP1, gp1, gp2, detalhes);
      if (gp1 > 0) await db.addPlayerGP(user1Id, guildId, gp1).catch(() => {});
      if (gp2 > 0) await db.addPlayerGP(user2Id, guildId, gp2).catch(() => {});
      await desbloquearAC01(user1Id, guildId, jogoId);
      await desbloquearAC01(user2Id, guildId, jogoId);
      const e = new EmbedBuilder().setTitle('🔴 Conecta 4 • Fim de Jogo').setColor(COR)
        .setDescription(`${renderTabuleiro()}\n\n${mensagem}`);
      await interaction.editReply({ embeds: [e], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id],
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (acao !== 'col') return;
          const uidEsperado = jogadorAtual === 1 ? user1Id : user2Id;
          if (btn.user.id !== uidEsperado) { await btn.reply({ content: '⚠️ Não é sua vez!', ephemeral: true }).catch(() => {}); return; }
          const col = Number(partes[1]);
          if (isNaN(col) || col < 0 || col >= COLS) return;
          try { await btn.deferUpdate(); } catch (_) {}
          const pos = jogarPeca(col);
          if (!pos) return;
          jogadas++;
          if (verificarVitoria(pos.r, pos.c, jogadorAtual)) { finalizar('vitoria', jogadorAtual); return; }
          if (tabCheio()) { finalizar('empate'); return; }
          jogadorAtual = jogadorAtual === 1 ? 2 : 1;
          await interaction.editReply({ embeds: [montarEmbed()], components: botoesColunas() }).catch(() => {});
        } catch (err) {
          console.error('[conecta4 btn err]', err);
          if (!btn.replied && !btn.deferred) try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaGP > 0) { await db.addPlayerGP(user1Id, guildId, apostaGP).catch(() => {}); await db.addPlayerGP(user2Id, guildId, apostaGP).catch(() => {}); }
        try { await interaction.editReply({ embeds: [new EmbedBuilder().setTitle('🔴 Cancelado').setColor(COR).setDescription('⏹️ Conecta 4 cancelado.')], components: [] }).catch(() => {}); } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({ embeds: [montarEmbed()], components: botoesColunas() }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[conecta4 criar err]', err);
    try { await interaction.editReply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 200), components: [] }).catch(() => {}); } catch (_) {}
    return null;
  }
}

async function criar(args) {
  const id = args.jogo?.id;
  switch (id) {
    case 'memoria': return criarMemoria(args);
    case 'batalhanaval': return criarBatalhaNaval(args);
    case 'conecta4': return criarConecta4(args);
    default:
      try { await args.interaction.editReply(`⚠️ Jogo **${id}** não existe em memoria.js.`); } catch (_) {}
      return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_memoria__, __mod_obj_game_memoria__.exports, __makeReq_game_memoria__, path.dirname(path.resolve(process.cwd(), "commands/games/memoria.js")), path.resolve(process.cwd(), "commands/games/memoria.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_memoria = __mod_obj_game_memoria__.exports;

const __makeReq_game_roletacores__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/games/roletacores.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_game_roletacores__ = { exports: __BOT_MODULE__.game_roletacores };
// -------- commands/games/roletacores.js --------
(function (module, exports, require, __dirname, __filename) {
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, ComponentType } = require('discord.js');
const db = require('../../database');
const { registrarPartida, removerPartida } = require('../jogos');

const CORES_ROLETA = Array.from({ length: 37 }, (_, i) => {
  if (i === 0) return 'BRANCO';
  return i % 2 === 1 ? 'VERMELHO' : 'PRETO';
});

const EMOJI_COR = {
  PRETO: '⚫',
  VERMELHO: '🔴',
  BRANCO: '⚪',
};

const COR_HEX = {
  PRETO: '#1a1a1a',
  VERMELHO: '#e63946',
  BRANCO: '#f1faee',
};

async function desbloquearAC01(userId, guildId, jogoId) {
  try {
    const lista = await db.getPlayerMatches(userId, guildId, 1, jogoId);
    if (lista.length <= 1) {
      const un = await db.unlockAchievement(userId, 'AC01');
      if (un) await db.addPlayerGP(userId, guildId, 10);
    }
  } catch (_) {}
}

async function desbloquearAC02(userId, guildId) {
  try {
    const un = await db.unlockAchievement(userId, 'AC02');
    if (un) await db.addPlayerGP(userId, guildId, 20);
  } catch (_) {}
}

async function criar({ interaction, client, jogo, donoId, oponente, desafiado, apostaGP, conviteDM = false }) {
  try {
    const guildId = interaction.guildId;
    const vsIA = !oponente;
    const canalId = interaction.channelId;
    const jogoId = jogo.id;
    const user1Id = donoId;
    const user2Id = vsIA ? null : oponente;
    const p1User = await client.users.fetch(user1Id).catch(() => null);
    const p2User = vsIA ? null : await client.users.fetch(user2Id).catch(() => null);

    let fase = vsIA ? 'escolha_inicial_ia' : 'escolha_cor_p1';
    let terminou = false;
    let corP1 = null;
    let corP2 = null;
    let apostaAtual = Number(apostaGP) || 0;
    let numeroSorteado = null;
    let corSorteada = null;

    function selectCor(disabled = false, excluirCor = null) {
      const opcoes = [
        { label: '🔴 Vermelho', value: 'VERMELHO', description: '18 números • Pagamento 2x' },
        { label: '⚫ Preto', value: 'PRETO', description: '18 números • Pagamento 2x' },
      ];
      if (vsIA) {
        opcoes.push({ label: '⚪ Branco (ZERO)', value: 'BRANCO', description: 'Apenas 0 • Pagamento 10x (raro!)' });
      }
      const opcoesFiltradas = excluirCor
        ? opcoes.filter(o => o.value !== excluirCor)
        : opcoes;
      return [
        new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId(`jogos:${jogoId}:cor`)
            .setPlaceholder('Escolha uma cor...')
            .setDisabled(disabled)
            .addOptions(opcoesFiltradas)
        ),
      ];
    }

    function selectAposta(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId(`jogos:${jogoId}:aposta`)
            .setPlaceholder('Escolha o valor da aposta em GP...')
            .setDisabled(disabled)
            .addOptions([
              { label: '10 GP', value: '10' },
              { label: '25 GP', value: '25' },
              { label: '50 GP', value: '50' },
              { label: '100 GP', value: '100' },
              { label: '250 GP', value: '250' },
              { label: '500 GP', value: '500' },
            ])
        ),
      ];
    }

    function botaoGirar(disabled = false) {
      return [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId(`jogos:${jogoId}:girar`)
            .setLabel('🎰 GIRAR ROLETA')
            .setStyle(ButtonStyle.Danger)
            .setDisabled(disabled)
        ),
      ];
    }

    function componentesAtuais() {
      if (terminou) return [];
      if (fase === 'escolha_inicial_ia') {
        if (!corP1) return selectCor(false);
        if (apostaAtual === 0) return selectAposta(false);
        return botaoGirar(false);
      }
      if (fase === 'escolha_cor_p1') {
        if (!corP1) return selectCor(false);
        return botaoGirar(true);
      }
      if (fase === 'escolha_cor_p2') {
        if (!corP2) return selectCor(false, corP1);
        return botaoGirar(false);
      }
      if (fase === 'pronto_girar') return botaoGirar(false);
      return [];
    }

    function montarEmbed(extra = null) {
      const e = new EmbedBuilder()
        .setTitle('🎨 Roleta de Cores')
        .setColor('#ff0040')
        .setDescription(
          vsIA
            ? `Aposte em uma cor e teste sua sorte! (${p1User?.tag || 'Você'} vs 🤖 IA)`
            : `Duelo de sorte: **${p1User?.tag || 'J1'}** vs **${p2User?.tag || 'J2'}**`
        );

      if (apostaAtual > 0) {
        e.addFields({
          name: '💰 Aposta',
          value: vsIA
            ? `${apostaAtual} GP apostados`
            : `${apostaAtual} GP cada jogador (poço: ${apostaAtual * 2} GP)`,
          inline: false,
        });
      }

      let statusLinhas = [];
      if (vsIA) {
        if (!corP1) statusLinhas.push('🟢 Escolha uma cor primeiro.');
        else if (apostaAtual === 0) statusLinhas.push(`✅ Cor: ${EMOJI_COR[corP1]} **${corP1}**. Agora escolha o valor da aposta.`);
        else if (fase !== 'resultado') statusLinhas.push(`✅ Cor: ${EMOJI_COR[corP1]} **${corP1}** • Aposta: **${apostaAtual} GP**. Clique em GIRAR!`);
      } else {
        if (corP1) statusLinhas.push(`🟢 ${p1User?.tag || 'J1'}: ${EMOJI_COR[corP1]} **${corP1}**`);
        else statusLinhas.push('🟢 Jogador 1, escolha sua cor.');
        if (fase !== 'escolha_cor_p1') {
          if (corP2) statusLinhas.push(`🔴 ${p2User?.tag || 'J2'}: ${EMOJI_COR[corP2]} **${corP2}**`);
          else statusLinhas.push(`🔴 ${p2User?.tag || 'J2'}: escolha uma cor DIFERENTE de ${EMOJI_COR[corP1]} ${corP1}.`);
        }
      }

      if (numeroSorteado !== null) {
        statusLinhas.push(
          `\n🎰 **Número sorteado:** \`${numeroSorteado}\`\n` +
          `${EMOJI_COR[corSorteada]} **Cor:** ${corSorteada}`
        );
      }

      e.addFields({
        name: fase === 'resultado' ? '📢 Resultado' : '🕹️ Status',
        value: statusLinhas.join('\n') || '...',
        inline: false,
      });

      e.addFields({
        name: '📊 Tabela de Pagamentos',
        value:
          `🔴 **Vermelho** acerto → **2x** • ⚫ **Preto** acerto → **2x**\n` +
          (vsIA ? `⚪ **Branco (ZERO)** acerto → **10x** (apenas vs IA)` : `⚪ Branco desativado no 1v1`),
        inline: false,
      });

      if (extra) e.addFields(extra);
      return e;
    }

    async function finalizar(vencedorId) {
      terminou = true;
      const resP1 = vencedorId === user1Id ? 'VITORIA' : vencedorId === 'EMPATE' ? 'EMPATE' : 'DERROTA';
      let gp1 = 0, gp2 = 0;
      const aposta = apostaAtual;

      if (vsIA) {
        if (resP1 === 'VITORIA') {
          if (corP1 === 'BRANCO') gp1 = aposta * 10;
          else gp1 = aposta * 2;
        }
      } else {
        if (aposta > 0) {
          if (resP1 === 'VITORIA') { gp1 = aposta * 2; gp2 = 0; }
          else if (resP1 === 'DERROTA') { gp2 = aposta * 2; gp1 = 0; }
          else { gp1 = aposta; gp2 = aposta; }
        }
      }

      const detalhes = {
        roleta: {
          numero: numeroSorteado,
          cor_sorteada: corSorteada,
          cor_p1: corP1,
          cor_p2: corP2,
          aposta: aposta,
          modo: vsIA ? 'IA' : '1v1',
        },
      };
      await db.updateGameResult(guildId, jogoId, user1Id, user2Id, resP1, gp1, gp2, detalhes);
      if (gp1 > 0) await db.addPlayerGP(user1Id, guildId, gp1).catch(() => {});
      if (gp2 > 0 && user2Id) await db.addPlayerGP(user2Id, guildId, gp2).catch(() => {});
      await desbloquearAC01(user1Id, guildId, jogoId);
      if (!vsIA) await desbloquearAC01(user2Id, guildId, jogoId);
      if (vencedorId && vencedorId !== 'EMPATE') await desbloquearAC02(vencedorId, guildId);

      if (vsIA && resP1 === 'VITORIA' && corSorteada === 'BRANCO') {
        try {
          const un = await db.unlockAchievement(user1Id, 'AC23');
          if (un) await db.addPlayerGP(user1Id, guildId, 100);
        } catch (_) {}
      }

      const txtV =
        vencedorId === 'EMPATE' ? '🤝 Ninguém acertou! Apostas devolvidas.'
          : vencedorId === user1Id ? `🎉 **${p1User?.tag || 'Jogador 1'} venceu!**`
          : `💀 **${vsIA ? '🤖 IA' : (p2User?.tag || 'Jogador 2')} venceu!**`;

      const embed = new EmbedBuilder()
        .setTitle('🎨 Roleta de Cores • Finalizado')
        .setColor(COR_HEX[corSorteada] || '#ff0040')
        .addFields(
          {
            name: '🎰 Sorteio',
            value: `Número \`${numeroSorteado}\` • ${EMOJI_COR[corSorteada]} **${corSorteada}**`,
            inline: false,
          },
          { name: '📢 Resultado', value: txtV, inline: false }
        );
      if (aposta > 0 && (gp1 > 0 || gp2 > 0)) {
        const partes = [];
        if (gp1 > 0) partes.push(`+${gp1} GP → ${p1User?.tag || 'J1'}`);
        if (gp2 > 0) partes.push(`+${gp2} GP → ${p2User?.tag || 'J2'}`);
        embed.addFields({ name: '💰 GP recebido', value: partes.join('\n'), inline: false });
      }
      await interaction.editReply({ embeds: [embed], components: [] }).catch(() => {});
      removerPartida(jogoId, canalId);
    }

    async function girarRoleta() {
      fase = 'girando';
      try {
        await interaction.editReply({
          embeds: [
            EmbedBuilder.from(montarEmbed())
              .spliceFields(1, 1, {
                name: '🎰 Girando...',
                value: '🎲 *A roleta está girando, aguarde...*',
                inline: false,
              }),
          ],
          components: botaoGirar(true),
        });
      } catch (_) {}

      setTimeout(async () => {
        numeroSorteado = Math.floor(Math.random() * 37);
        corSorteada = CORES_ROLETA[numeroSorteado];
        fase = 'resultado';

        try {
          await interaction.editReply({
            embeds: [montarEmbed()],
            components: botaoGirar(true),
          });
        } catch (_) {}

        const acertouP1 = corP1 === corSorteada;
        const acertouP2 = vsIA ? false : (corP2 === corSorteada);
        let vencedor = 'EMPATE';
        if (acertouP1 && !acertouP2) vencedor = user1Id;
        else if (acertouP2 && !acertouP1) vencedor = vsIA ? 'IA' : user2Id;

        setTimeout(() => finalizar(vencedor === 'IA' ? null : vencedor), 2000);
      }, 1800);
    }

    const partida = {
      donoId,
      user1_id: user1Id,
      user2_id: user2Id,
      jogadores: [user1Id, user2Id].filter(Boolean),
      async handleSelectMenu(sel, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          const uid = sel.user.id;

          let esperado = null;
          if (vsIA) {
            esperado = user1Id;
          } else {
            if (fase === 'escolha_cor_p1') esperado = user1Id;
            else if (fase === 'escolha_cor_p2') esperado = user2Id;
          }
          if (!esperado || uid !== esperado) {
            await sel.reply({ content: '⚠️ Não é sua vez!', ephemeral: true }).catch(() => {});
            return;
          }

          try { await sel.deferUpdate(); } catch (_) {}

          if (acao === 'cor') {
            const cor = sel.values[0];
            if (!['PRETO', 'VERMELHO', 'BRANCO'].includes(cor)) return;
            if (cor === 'BRANCO' && !vsIA) return;

            if (vsIA) {
              corP1 = cor;
              if (apostaAtual > 0) fase = 'pronto_girar';
              else fase = 'escolha_inicial_ia';
            } else {
              if (fase === 'escolha_cor_p1') {
                if (apostaAtual === 0) apostaAtual = 10;
                corP1 = cor;
                fase = 'escolha_cor_p2';
              } else if (fase === 'escolha_cor_p2') {
                if (cor === corP1) return;
                corP2 = cor;
                fase = 'pronto_girar';
              }
            }
            await interaction.editReply({
              embeds: [montarEmbed()],
              components: componentesAtuais(),
            }).catch(() => {});
            return;
          }

          if (acao === 'aposta') {
            const valor = Number(sel.values[0]);
            if (isNaN(valor) || valor <= 0) return;
            const p = await db.getOrInitPlayer(user1Id, guildId);
            if ((Number(p?.coins_gp) || 0) < valor) {
              try {
                await sel.followUp({
                  content: `❌ Saldo insuficiente. Precisa de ${valor} GP, você tem ${Number(p?.coins_gp || 0)} GP.`,
                  ephemeral: true,
                });
              } catch (_) {}
              return;
            }
            const debitou = await db.addPlayerGP(user1Id, guildId, -valor).catch(() => null);
            if (debitou === null || debitou === undefined) {
              const p2 = await db.getOrInitPlayer(user1Id, guildId);
              if ((Number(p2?.coins_gp) || 0) < valor) {
                try {
                  await sel.followUp({ content: '❌ Não foi possível debitar a aposta.', ephemeral: true });
                } catch (_) {}
                return;
              }
            }
            apostaAtual = valor;
            fase = 'pronto_girar';
            await interaction.editReply({
              embeds: [montarEmbed()],
              components: componentesAtuais(),
            }).catch(() => {});
            return;
          }
        } catch (err) {
          console.error('[roletacores select err]', err);
          if (!sel.replied && !sel.deferred) {
            try { await sel.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
          }
        }
      },
      async handleButton(btn, _client, partes) {
        try {
          if (terminou) return;
          const acao = partes[0];
          if (acao !== 'girar') return;
          const uid = btn.user.id;
          const esperado = vsIA ? user1Id : user1Id;
          if (uid !== esperado) {
            await btn.reply({ content: '⚠️ Apenas quem criou a partida pode girar a roleta.', ephemeral: true }).catch(() => {});
            return;
          }
          if (fase !== 'pronto_girar') return;

          try { await btn.deferUpdate(); } catch (_) {}
          await girarRoleta();
        } catch (err) {
          console.error('[roletacores btn err]', err);
          if (!btn.replied && !btn.deferred) {
            try { await btn.reply({ content: '❌ Erro.', ephemeral: true }).catch(() => {}); } catch (_) {}
          }
        }
      },
      async cancelar() {
        if (terminou) return;
        terminou = true;
        if (apostaAtual > 0) {
          await db.addPlayerGP(user1Id, guildId, apostaAtual).catch(() => {});
          if (!vsIA) await db.addPlayerGP(user2Id, guildId, apostaAtual).catch(() => {});
        }
        try {
          await interaction.editReply({
            embeds: [new EmbedBuilder().setTitle('🎨 Cancelado').setColor('#ff0040').setDescription('⏹️ Partida cancelada.')],
            components: [],
          }).catch(() => {});
        } catch (_) {}
        removerPartida(jogoId, canalId);
      },
    };

    if (vsIA && apostaAtual > 0) {
      const p = await db.getOrInitPlayer(user1Id, guildId);
      if ((Number(p?.coins_gp) || 0) < apostaAtual) {
        try {
          await interaction.editReply({
            content: `❌ Saldo insuficiente. Precisa de ${apostaAtual} GP, você tem ${Number(p?.coins_gp || 0)} GP.`,
            components: [],
          });
        } catch (_) {}
        return null;
      }
      await db.addPlayerGP(user1Id, guildId, -apostaAtual).catch(() => {});
    }

    if (!vsIA && apostaAtual === 0) {
      apostaAtual = 10;
    }

    registrarPartida(guildId, canalId, jogoId, partida);
    await interaction.editReply({
      embeds: [montarEmbed()],
      components: componentesAtuais(),
    }).catch(() => {});
    return partida;
  } catch (err) {
    console.error('[roletacores criar err]', err);
    try {
      await interaction.editReply({
        content: '❌ Erro ao criar partida: ' + String(err.message || err).slice(0, 200),
        components: [],
      }).catch(() => {});
    } catch (_) {}
    return null;
  }
}

module.exports = { criar };


})(__mod_obj_game_roletacores__, __mod_obj_game_roletacores__.exports, __makeReq_game_roletacores__, path.dirname(path.resolve(process.cwd(), "commands/games/roletacores.js")), path.resolve(process.cwd(), "commands/games/roletacores.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.game_roletacores = __mod_obj_game_roletacores__.exports;

const __makeReq_cmd_ajuda__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/ajuda.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_ajuda__ = { exports: __BOT_MODULE__.cmd_ajuda };
// -------- commands/ajuda.js --------
(function (module, exports, require, __dirname, __filename) {
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  PermissionFlagsBits,
} = require('discord.js');
const db = require('../database');
const { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, sortearPremio } = require('../lib/achievements');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const COR = '#ff0040';

const CATEGORIAS = {
  jogos: {
    titulo: '🎮 Jogos & Entretenimento',
    cor: COR,
    comandos: [
      { nome: '/jogos listar', desc: 'Lista todos os mini-jogos do bot (PPT, Forca, Quiz +11)', uso: '/jogos listar' },
      { nome: '/jogos jogar', desc: 'Começa uma partida (solo, grupo ou vs IA)', uso: '/jogos jogar jogo:ppt' },
      { nome: '/jogos desafio', desc: 'Desafia outro membro para 1v1 com aposta opcional em GP', uso: '/jogos desafio oponente:@User jogo:ppt aposta_gp:50' },
      { nome: '/jogos externos', desc: 'Catálogo com 30+ jogos online para navegador', uso: '/jogos externos' },
      { nome: '/jogos cancelar', desc: 'Cancela sua partida atual em andamento', uso: '/jogos cancelar' },
      { nome: '/jogos rank', desc: 'Ranking geral ou por jogo (servidor ou global)', uso: '/jogos rank jogo:GERAL escopo:servidor top:10' },
      { nome: '/paineljogos', desc: 'Exibe o Painel de Jogos com atalhos (STAFF posta em canal)', uso: '/paineljogos  OU  /paineljogos canal:#jogos' },
      { nome: '/perfil', desc: 'Seu perfil gamer: nível, XP barra, GP, títulos, conquistas', uso: '/perfil usuario:@User' },
      { nome: '/rivalidade', desc: 'Placar 1v1 W/L histórico entre você e outro membro', uso: '/rivalidade usuario:@User' },
      { nome: '/conquistas', desc: '25 conquistas para desbloquear (progresso %%)', uso: '/conquistas usuario:@User' },
      { nome: '/gp saldo', desc: 'Seu saldo de GamoPoints (moeda virtual do servidor)', uso: '/gp saldo' },
      { nome: '/gp doar', desc: 'Doar GP de forma segura para outro membro', uso: '/gp doar usuario:@User quantidade:100' },
      { nome: '/gp historico', desc: 'Suas últimas movimentações de GP (compras + partidas)', uso: '/gp historico usuario:@User' },
      { nome: '/addgp', desc: '🛡️ STAFF — Adicionar GP + XP a um membro', uso: '/addgp usuario:@User quantidade:500' },
      { nome: '/loja', desc: '🛒 Loja completa (categoria: títulos / cores / roleta)', uso: '/loja   OU   /loja titulos' },
      { nome: '/loja titulos', desc: '👑 15 títulos exclusivos para comprar e equipar no perfil', uso: '/loja titulos' },
      { nome: '/loja cores', desc: '🎨 9 cores de embed para personalizar seu perfil', uso: '/loja cores' },
      { nome: '/loja roleta', desc: '🎰 Roleta da Sorte por 50 GP — prêmios até 1500 GP', uso: '/loja roleta' },
      { nome: '/rankjogo', desc: '📊 Rankings reais cross-platform (Valorant, CS2, LoL, Fortnite, RL, Apex, CoD)', uso: '/rankjogo jogo:valorant nick:Player#123 plataforma:PC' },
      { nome: '/config rankingcanal set', desc: '🛡️ STAFF — Define canal do ranking automático', uso: '/config rankingcanal set canal:#ranking' },
      { nome: '/config rankingcanal off', desc: '🛡️ STAFF — Desliga ranking e apaga mensagem antiga', uso: '/config rankingcanal off' },
      { nome: '/config paineljogos set', desc: '🛡️ STAFF — Posta Painel de Jogos fixo em um canal', uso: '/config paineljogos set canal:#jogos' },
    ],
  },
};

const ORDEM = ['jogos'];

function gerarEmbed(cat) {
  const c = CATEGORIAS[cat];
  if (!c) {
    const fields = ORDEM.map((k) => {
      const cc = CATEGORIAS[k];
      const comandos = cc.comandos.map((x) => `\`${x.nome}\``).join(', ');
      return { name: cc.titulo, value: comandos };
    });
    return new EmbedBuilder()
      .setTitle('📚 Guia de Comandos — Central de Jogos')
      .setColor(COR)
      .setDescription(
        `Todos os comandos do bot focados em **Jogos, XP, GP, Ranking, Loja e Perfil**.\n\n` +
        `Use o menu abaixo para ver detalhes ou selecione \`📋 Visão Geral\`.\n\n` +
        `**Tema:** 🔴 Vermelho Neon \`${COR}\``
      )
      .addFields(...fields)
      .setFooter({ text: `Total: ${CATEGORIAS.jogos.comandos.length} comandos disponíveis • Use /ajuda jogos para ver tudo` })
      .setTimestamp();
  }
  return new EmbedBuilder()
    .setTitle(c.titulo + ` (${c.comandos.length} comandos)`)
    .setColor(c.cor)
    .setDescription(
      `Abaixo todos os comandos da categoria **${c.titulo}**.\n` +
      `Cada comando mostra descrição e exemplo de uso.`
    )
    .addFields(
      c.comandos.map((x) => ({
        name: x.nome,
        value: `${x.desc}\n**Ex.:** \`${x.uso}\``,
      }))
    )
    .setFooter({ text: '🛡️ Comandos marcados com STAFF exigem permissões especiais.' })
    .setTimestamp();
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ajuda')
    .setDescription('📚 Mostra todos os comandos de jogos do bot')
    .addStringOption((o) =>
      o.setName('categoria').setDescription('Filtrar por categoria').addChoices(
        ...ORDEM.map((k) => ({
          name: CATEGORIAS[k].titulo.replace(/^[^a-zA-ZÀ-ÿ]+/, '').slice(0, 99),
          value: k,
        }))
      )
    ),

  async execute(interaction) {
    const cat = interaction.options.getString('categoria');

    if (cat) {
      return interaction.reply({ embeds: [gerarEmbed(cat)], ephemeral: true });
    }

    const options = [
      { label: '📋 Visão Geral', description: 'Resumo de todos os comandos disponíveis', value: 'ALL' },
      ...ORDEM.map((k) => ({
        label: CATEGORIAS[k].titulo.replace(/^[^a-zA-ZÀ-ÿ]/, '').trim().slice(0, 90),
        description: `${CATEGORIAS[k].comandos.length} comandos de jogos`,
        value: k,
      })),
    ].slice(0, 25);

    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('ajuda:select')
        .setPlaceholder('👉 Selecione para ver detalhes dos comandos...')
        .addOptions(options)
    );

    const reply = await interaction.reply({
      embeds: [gerarEmbed(null)],
      components: [row],
      fetchReply: true,
      ephemeral: true,
    });

    try {
      const collector = reply.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        filter: (i) => i.customId === 'ajuda:select' && i.user.id === interaction.user.id,
        time: 10 * 60 * 1000,
      });

      collector.on('collect', async (i) => {
        const val = i.values[0];
        const embed = val === 'ALL' ? gerarEmbed(null) : gerarEmbed(val);
        await i.update({ embeds: [embed] });
      });

      collector.on('end', () => {
        interaction.editReply({ components: [] }).catch(() => {});
      });
    } catch (_) {}
  },
};


})(__mod_obj_cmd_ajuda__, __mod_obj_cmd_ajuda__.exports, __makeReq_cmd_ajuda__, path.dirname(path.resolve(process.cwd(), "commands/ajuda.js")), path.resolve(process.cwd(), "commands/ajuda.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_ajuda = __mod_obj_cmd_ajuda__.exports;

const __makeReq_cmd_gp__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/gp.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_gp__ = { exports: __BOT_MODULE__.cmd_gp };
// -------- commands/gp.js --------
(function (module, exports, require, __dirname, __filename) {
const db = require('../database');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gp')
    .setDescription('💰 Gerencie suas GamoPoints (GP) — saldo e doar')
    .addSubcommand((s) =>
      s.setName('saldo').setDescription('💰 Veja seu saldo atual de GamoPoints')
        .addUserOption((o) => o.setName('usuario').setDescription('Ver saldo de outro usuário').setRequired(false))
    )
    .addSubcommand((s) =>
      s.setName('doar').setDescription('💸 Doe GamoPoints para outro membro')
        .addUserOption((o) => o.setName('usuario').setDescription('Quem vai receber os GP?').setRequired(true))
        .addIntegerOption((o) =>
          o.setName('quantidade').setDescription('Quantidade de GP para doar').setRequired(true).setMinValue(1)
        )
    ),

  async execute(interaction) {
    try {
      await interaction.deferReply();
      const sub = interaction.options.getSubcommand();
      const guildId = interaction.guildId;

      if (sub === 'saldo') {
        const usuario = interaction.options.getUser('usuario') || interaction.user;
        if (usuario.bot) return interaction.editReply('❌ Bots não têm saldo de GP.');
        const p = await db.getOrInitPlayer(usuario.id, guildId);
        const saldo = Number(p.coins_gp) || 0;
        const membro = await interaction.guild.members.fetch(usuario.id).catch(() => null);
        const apelido = membro?.nickname || usuario.username || usuario.tag;

        const embed = new EmbedBuilder()
          .setTitle(`💰 Saldo de GamoPoints — ${apelido}`)
          .setColor('#ff0040')
          .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 128 }))
          .addFields(
            { name: '🪙 Saldo Atual', value: `**${saldo.toLocaleString('pt-BR')} GP**`, inline: false },
            { name: '⭐ Nível', value: `Lv. **${Number(p.nivel) || 1}**`, inline: true },
            { name: '🏆 ELO', value: `⚔️ **${Number(p.global_elo) || 1000}**`, inline: true }
          )
          .setFooter({ text: '💡 Dica: Use /gp doar para enviar GP ou /loja para gastar!' });

        return interaction.editReply({ embeds: [embed] });
      }

      if (sub === 'doar') {
        const destino = interaction.options.getUser('usuario');
        const qtd = Math.max(1, Number(interaction.options.getInteger('quantidade')) || 0);

        if (!destino || destino.bot) return interaction.editReply('❌ Usuário de destino inválido.');
        if (destino.id === interaction.user.id) return interaction.editReply('❌ Você não pode doar GP para você mesmo.');
        if (qtd <= 0) return interaction.editReply('❌ A quantidade deve ser maior que zero.');

        const doador = await db.getOrInitPlayer(interaction.user.id, guildId);
        if ((Number(doador.coins_gp) || 0) < qtd) {
          return interaction.editReply(
            `❌ Saldo insuficiente! Você tem **${Number(doador.coins_gp).toLocaleString('pt-BR')} GP** e quer doar **${qtd.toLocaleString('pt-BR')}**.`
          );
        }

        const novoSaldoDoador = await db.addPlayerGP(interaction.user.id, guildId, -qtd);
        const novoSaldoDestino = await db.addPlayerGP(destino.id, guildId, qtd);

        const embed = new EmbedBuilder()
          .setTitle('💸 Doação de GamoPoints Efetuada!')
          .setColor('#ff0040')
          .setDescription(
            `${interaction.user} doou **🪙 ${qtd.toLocaleString('pt-BR')} GP** para ${destino}!\n\n` +
            `Obrigado pela generosidade! 💖`
          )
          .addFields(
            { name: `${interaction.user.username} — novo saldo`, value: `🪙 **${(novoSaldoDoador || 0).toLocaleString('pt-BR')}**`, inline: true },
            { name: `${destino.username} — novo saldo`, value: `🪙 **${(novoSaldoDestino || 0).toLocaleString('pt-BR')}**`, inline: true }
          )
          .setThumbnail(destino.displayAvatarURL({ dynamic: true, size: 128 }));

        return interaction.editReply({ embeds: [embed] });
      }
    } catch (err) {
      console.error('[gp error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 200));
      } catch (_) {}
    }
  },
};


})(__mod_obj_cmd_gp__, __mod_obj_cmd_gp__.exports, __makeReq_cmd_gp__, path.dirname(path.resolve(process.cwd(), "commands/gp.js")), path.resolve(process.cwd(), "commands/gp.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_gp = __mod_obj_cmd_gp__.exports;

const __makeReq_cmd_perfil__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/perfil.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_perfil__ = { exports: __BOT_MODULE__.cmd_perfil };
// -------- commands/perfil.js --------
(function (module, exports, require, __dirname, __filename) {
const db = require('../database');
const { ACHIEVEMENTS } = require('../lib/achievements');
const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ModalBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  TextInputStyle,
} = require('discord.js');

const COR = '#ff0040';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('perfil')
    .setDescription('👤 Perfil de jogador: criar, editar nome ou visualizar')
    .addSubcommand((s) =>
      s.setName('ver').setDescription('👀 Ver o perfil de alguém (ou o seu)')
        .addUserOption((o) => o.setName('usuario').setDescription('Usuário para ver').setRequired(false))
    )
    .addSubcommand((s) =>
      s.setName('criar').setDescription('✨ Criar seu perfil gamer e receber o cargo de novato')
        .addStringOption((o) =>
          o.setName('nome').setDescription('Apelido/nome gamer que você quer usar (2-32 caracteres)').setMinLength(2).setMaxLength(32).setRequired(false)
        )
    )
    .addSubcommand((s) =>
      s.setName('editar').setDescription('✏️ Editar seu nome no perfil gamer')
        .addStringOption((o) =>
          o.setName('nome').setDescription('Novo apelido (2-32 caracteres)').setMinLength(2).setMaxLength(32).setRequired(false)
        )
    ),

  async execute(interaction, client) {
    try {
      const sub = interaction.options.getSubcommand(false) || 'ver';
      const guildId = interaction.guildId;
      const guild = interaction.guild;
      const userId = interaction.user.id;

      if (sub === 'criar') {
        const nomeOpt = interaction.options.getString('nome');
        if (nomeOpt) {
          await interaction.deferReply({ ephemeral: true });
          return this._finalizarCriacao(interaction, client, userId, guildId, guild, nomeOpt.trim());
        }
        const modal = new ModalBuilder()
          .setCustomId('perfil:criar:' + interaction.id)
          .setTitle('✨ Criar Perfil Gamer');

        const inputNome = new TextInputBuilder()
          .setCustomId('perfil:nome')
          .setLabel('Apelido / Nome Gamer')
          .setPlaceholder('Ex: Kratos, NoobMaster, Anjo, etc')
          .setMinLength(2)
          .setMaxLength(32)
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const row1 = new ActionRowBuilder().addComponents(inputNome);
        modal.addComponents(row1);
        await interaction.showModal(modal);

        let respondido = false;
        try {
          const modalResp = await interaction.awaitModalSubmit({
            time: 2 * 60 * 1000,
            filter: (i) => i.user.id === userId && i.customId.startsWith('perfil:criar:'),
          });
          respondido = true;
          await modalResp.deferReply({ ephemeral: true });
          const nomeDigitado = modalResp.fields.getTextInputValue('perfil:nome');
          return this._finalizarCriacao(modalResp, client, userId, guildId, guild, nomeDigitado.trim());
        } catch (e) {
          if (!respondido) {
            try {
              await interaction.followUp({ content: '⏳ Tempo esgotado. Use `/perfil criar nome:SeuNome` para criar rapidamente!', ephemeral: true }).catch(() => {});
            } catch (_) {}
          }
          return;
        }
      }

      if (sub === 'editar') {
        await interaction.deferReply({ ephemeral: true });
        const nomeOpt = interaction.options.getString('nome');
        const jogadorAtual = await db.getOrInitPlayer(userId, guildId);
        if (!jogadorAtual || Number(jogadorAtual.perfil_criado) !== 1) {
          return interaction.editReply('❌ Você ainda não criou seu perfil!\n\nUse primeiro **`/perfil criar nome:SeuNome`** para registrar.');
        }
        if (nomeOpt) {
          const nomeLimpo = nomeOpt.trim().slice(0, 32);
          if (nomeLimpo.length < 2) {
            return interaction.editReply('❌ Nome muito curto (mínimo 2 caracteres).');
          }
          await db.setPlayerNickname(userId, guildId, nomeLimpo);
          return interaction.editReply(`✏️ **Nome alterado com sucesso!**\n\nAgora seu apelido gamer é: **${nomeLimpo}**`);
        }
        const modal = new ModalBuilder()
          .setCustomId('perfil:editar:' + interaction.id)
          .setTitle('✏️ Editar Nome Gamer');

        const inputNome = new TextInputBuilder()
          .setCustomId('perfil:nome')
          .setLabel('Novo apelido')
          .setValue(jogadorAtual.nickname_gamer || interaction.user.username || '')
          .setMinLength(2)
          .setMaxLength(32)
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const row1 = new ActionRowBuilder().addComponents(inputNome);
        modal.addComponents(row1);
        const msgOriginal = await interaction.editReply({ content: '✍️ Abrindo formulário...', fetchReply: true }).catch(() => null);
        try {
          await interaction.showModal(modal);
        } catch (e) {
          return interaction.editReply('❌ Não consegui abrir o modal. Use `/perfil editar nome:NovoNome` diretamente!');
        }
        try {
          const modalResp = await interaction.awaitModalSubmit({
            time: 2 * 60 * 1000,
            filter: (i) => i.user.id === userId && i.customId.startsWith('perfil:editar:'),
          });
          await modalResp.deferReply({ ephemeral: true });
          const nomeDigitado = modalResp.fields.getTextInputValue('perfil:nome').trim().slice(0, 32);
          if (nomeDigitado.length < 2) {
            return modalResp.editReply('❌ Nome muito curto (mínimo 2 caracteres).');
          }
          await db.setPlayerNickname(userId, guildId, nomeDigitado);
          return modalResp.editReply(`✏️ **Nome alterado com sucesso!**\n\nNovo apelido: **${nomeDigitado}**`);
        } catch (e) {
          try {
            await interaction.followUp({ content: '⏳ Tempo esgotado. Tente novamente ou use `nome:`.', ephemeral: true }).catch(() => {});
          } catch (_) {}
          return;
        }
      }

      // sub === 'ver' ou sem subcomando
      await interaction.deferReply();
      const usuario = interaction.options.getUser('usuario') || interaction.user;

      if (usuario.bot) {
        return interaction.editReply('❌ Bots não têm perfil de jogador.');
      }

      const player = await db.getOrInitPlayer(usuario.id, guildId);
      if (!player) {
        return interaction.editReply('❌ Erro ao carregar perfil do jogador.');
      }

      const perfilCriado = Number(player.perfil_criado) === 1;
      const membro = await interaction.guild.members.fetch(usuario.id).catch(() => null);
      const usuarioTag = usuario.tag;
      const apelidoExibicao = player.nickname_gamer || membro?.nickname || usuario.username || usuario.tag;

      const ehProprioPerfil = usuario.id === userId;
      if (!perfilCriado && ehProprioPerfil) {
        const embedAviso = new EmbedBuilder()
          .setTitle('❌ Perfil ainda não criado!')
          .setColor(COR)
          .setDescription(
            `Olá **${apelidoExibicao}**, parece que você ainda **não criou seu perfil** gamer!\n\n` +
            `Criar perfil é **obrigatório** para:\n` +
            `🌱 Receber o cargo **"Jogador Novato"** (configurado pelo staff)\n` +
            `📈 Subir de nível e receber **cargos novos por nível**\n` +
            `🏆 Participar do ranking oficial do servidor\n\n` +
            `**👉 Crie agora:** use o comando abaixo\n` +
            `\`/perfil criar nome:SeuApelidoAqui\`\n\n` +
            `Ou clique em **Executar** acima do comando \`/perfil criar\` e preencha seu apelido!`
          )
          .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 256 }))
          .setFooter({ text: '💡 Após criar seu perfil você ganhará automaticamente o cargo de novato!' });
        return interaction.editReply({ embeds: [embedAviso] });
      }

      const rankingGeral = await db.getRanking(guildId, null, 1000, false);
      const posicao = rankingGeral.findIndex((r) => r.user_id === usuario.id) + 1;
      const posicaoStr = posicao > 0 ? `#${posicao}` : 'Sem rank';

      let vitTotal = 0, derTotal = 0, empTotal = 0;
      const topJogos = [];

      try {
        const { open } = require('../database');
        const dbh = await open();
        if (dbh && dbh.prepare) {
          const stmtTop3 = dbh.prepare(
            'SELECT jogo, SUM(vitorias+derrotas+empates) total FROM game_rankings WHERE user_id=? AND guild_id=? GROUP BY jogo ORDER BY total DESC LIMIT 3'
          );
          stmtTop3.bind([usuario.id, guildId]);
          while (stmtTop3.step()) {
            topJogos.push(stmtTop3.getAsObject());
          }
          stmtTop3.free();

          const stmtRank = dbh.prepare(
            'SELECT jogo, vitorias, derrotas, empates FROM game_rankings WHERE user_id=? AND guild_id=?'
          );
          stmtRank.bind([usuario.id, guildId]);
          while (stmtRank.step()) {
            const r = stmtRank.getAsObject();
            vitTotal += Number(r.vitorias) || 0;
            derTotal += Number(r.derrotas) || 0;
            empTotal += Number(r.empates) || 0;
          }
          stmtRank.free();
        }
      } catch (err) {
        console.error('[perfil sql err]', err.message);
      }

      const totalPartidas = vitTotal + derTotal + empTotal;
      const winrate = totalPartidas > 0 ? Math.round((vitTotal / totalPartidas) * 100) : 0;

      const nivelAtual = Number(player.nivel) || 1;
      const xpAtual = Number(player.global_xp) || 0;
      const xpMinNivel = Math.pow(nivelAtual, 2) * 100;
      const xpProxNivel = Math.pow(nivelAtual + 1, 2) * 100;
      const xpNoNivel = Math.max(0, xpAtual - xpMinNivel);
      const xpNecessario = Math.max(1, xpProxNivel - xpMinNivel);
      const pctNivel = Math.min(100, Math.round((xpNoNivel / xpNecessario) * 100));
      const charsCheios = Math.round((pctNivel / 100) * 20);
      const charsVazios = 20 - charsCheios;
      const barraXP = '█'.repeat(charsCheios) + '░'.repeat(charsVazios);

      const conquistasRaw = await db.getAchievements(usuario.id);
      const conquistasRecentes = conquistasRaw.slice(0, 3).map((c) => {
        const def = ACHIEVEMENTS[c.achievement_id];
        return def
          ? `• ${def.nome} — *${def.desc}*\n  \`${new Date(c.unlocked_at).toLocaleDateString('pt-BR')}\``
          : null;
      }).filter(Boolean);

      const titulo = player.titulo_atual || 'Sem título';
      const corEmbed = player.embed_color || COR;

      const cfgGuild = await db.getGuildConfig(guildId);
      const novatoRole = cfgGuild?.novato_role_id ? `<@&${cfgGuild.novato_role_id}>` : '—';

      const proxRole = await db.findRoleForLevel(guildId, nivelAtual);
      const listaRoles = await db.listLevelRoles(guildId);
      const cargoAtualStr = proxRole ? `<@&${proxRole.role_id}>` : 'Nenhum cargo por nível ainda';

      const proxLevelRole = listaRoles.find(r => r.nivel > nivelAtual) || null;
      const proxLevelStr = proxLevelRole
        ? `⭐ **Próximo cargo:** <@&${proxLevelRole.role_id}> (ao chegar no **Nível ${proxLevelRole.nivel}**)`
        : '🏆 Você já atingiu o cargo máximo do servidor!';

      const embed = new EmbedBuilder()
        .setAuthor({ name: `${apelidoExibicao}`, iconURL: usuario.displayAvatarURL({ dynamic: true }) })
        .setTitle(perfilCriado ? `👤 Perfil Gamer Oficial` : `👤 Perfil (não criado oficialmente)`)
        .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 256 }))
        .setColor(corEmbed)
        .addFields(
          { name: '🏷️ Título', value: titulo, inline: true },
          { name: '⭐ Nível', value: `**${nivelAtual}**`, inline: true },
          { name: '📊 Posição', value: `**${posicaoStr}**`, inline: true },
          { name: '🌱 Cargo Novato', value: novatoRole, inline: true },
          { name: '🎖️ Cargo Atual', value: cargoAtualStr, inline: true },
          {
            name: `💠 XP Total: ${xpAtual.toLocaleString('pt-BR')}`,
            value: `Progresso para Nível ${nivelAtual + 1}\n\`${barraXP}\` **${pctNivel}%**\n\`${xpNoNivel.toLocaleString('pt-BR')} / ${xpNecessario.toLocaleString('pt-BR')} XP\`\n\n${proxLevelStr}`,
            inline: false,
          },
          { name: '💰 GamoPoints', value: `🪙 **${Number(player.coins_gp).toLocaleString('pt-BR')}**`, inline: true },
          { name: '🏆 ELO Global', value: `⚔️ **${Number(player.global_elo).toLocaleString('pt-BR')}**`, inline: true },
          { name: '📈 Winrate', value: `${winrate}% (${vitTotal}W/${derTotal}D/${empTotal}E)`, inline: true },
          {
            name: '🎮 Jogos Mais Jogados (Top 3)',
            value: topJogos.length
              ? topJogos.map((t, i) => `${['🥇', '🥈', '🥉'][i]} **${t.jogo}** — ${t.total} partidas`).join('\n')
              : 'Ainda nenhuma partida registrada.',
            inline: false,
          },
          {
            name: '🏅 Conquistas Recentes',
            value: conquistasRecentes.length ? conquistasRecentes.join('\n\n') : 'Nenhuma conquista desbloqueada ainda.',
            inline: false,
          }
        )
        .setFooter({
          text: perfilCriado
            ? `Perfil oficial criado • Tag: ${usuarioTag} • Use /perfil editar para trocar o nome`
            : `Tag: ${usuarioTag} • Use /perfil criar nome:SeuNome para oficializar seu perfil!`,
        })
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error('[perfil error]', err);
      try {
        await interaction.editReply('❌ Erro interno ao carregar perfil: ' + String(err.message || err).slice(0, 200));
      } catch (_) {}
    }
  },

  async _finalizarCriacao(interaction, client, userId, guildId, guild, nomeDigitado) {
    const nomeLimpo = String(nomeDigitado || '').trim().slice(0, 32);
    if (nomeLimpo.length < 2) {
      return interaction.editReply('❌ Nome muito curto (mínimo 2 caracteres).');
    }
    const jogadorAntes = await db.getOrInitPlayer(userId, guildId);
    if (jogadorAntes && Number(jogadorAntes.perfil_criado) === 1) {
      return interaction.editReply(
        '⚠️ Você **já tem perfil criado**!\n\n' +
        `Apelido atual: **${jogadorAntes.nickname_gamer || '—'}**\n\n` +
        `Para mudar o nome use **\`/perfil editar nome:NovoNome\`**.`
      );
    }

    const ok = await db.setPlayerNickname(userId, guildId, nomeLimpo);
    if (!ok) return interaction.editReply('❌ Erro ao criar perfil. Tente novamente!');

    let cargoNovatoMsg = `⚠️ Cargo **"Jogador Novato"** ainda não configurado pelo STAFF. Peça ao ADM: **\`/config cargosniveis novato cargo:@Jogador Novato\`**.`;
    const cfg = await db.getGuildConfig(guildId);
    const membro = await guild?.members?.fetch(userId).catch(() => null);
    if (cfg?.novato_role_id && membro) {
      const role = await guild.roles.fetch(cfg.novato_role_id).catch(() => null);
      if (role) {
        if (!membro.roles.cache.has(role.id)) {
          try {
            await membro.roles.add(role, 'Perfil gamer criado — Cargo Novato');
            cargoNovatoMsg = `🌱 **Cargo recebido:** ${role.toString()} (Jogador Novato) — parabéns!`;
          } catch (e) {
            cargoNovatoMsg = `⚠️ Não consegui dar o cargo ${role.toString()}. O bot precisa ter permissão de **Gerenciar Cargos** e cargo do GAME CUSTOM acima do cargo escolhido.`;
            console.warn('[perfil criar add role]', e.message);
          }
        } else {
          cargoNovatoMsg = `🌱 Você já tem o cargo ${role.toString()}`;
        }
      }
    }

    const embed = new EmbedBuilder()
      .setTitle(`🎉 Perfil de ${nomeLimpo} criado com sucesso!`)
      .setColor(COR)
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true, size: 256 }))
      .setDescription(
        `**Bem-vindo(a) à Arena de Jogos do servidor!** 🎮\n\n` +
        `Seu perfil gamer foi oficializado e você já pode participar de tudo.\n\n` +
        `**👤 Dados do perfil:**\n` +
        `• Apelido gamer: **${nomeLimpo}**\n` +
        `• Nível inicial: **1**\n` +
        `• GamoPoints iniciais: **0** 🪙\n\n` +
        `${cargoNovatoMsg}\n\n` +
        `**💡 Próximos passos:**\n` +
        `1️⃣ Jogue partidas para ganhar **XP** e **subir de nível**\n` +
        `2️⃣ Cada nível novo libera **cargos exclusivos** (definidos pelo Staff)\n` +
        `3️⃣ Ganhe **GP** e compre itens na **\`/loja\`**\n` +
        `4️⃣ Desbloqueie **25 conquistas** por recompensas extras!`
      )
      .setFooter({ text: 'Use /perfil ver para ver seu perfil completo agora!' })
      .setTimestamp();

    return interaction.editReply({ embeds: [embed] });
  },
};


})(__mod_obj_cmd_perfil__, __mod_obj_cmd_perfil__.exports, __makeReq_cmd_perfil__, path.dirname(path.resolve(process.cwd(), "commands/perfil.js")), path.resolve(process.cwd(), "commands/perfil.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_perfil = __mod_obj_cmd_perfil__.exports;

const __makeReq_cmd_config__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/config.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_config__ = { exports: __BOT_MODULE__.cmd_config };
// -------- commands/config.js --------
(function (module, exports, require, __dirname, __filename) {
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');
const db = require('../database');
const { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, sortearPremio } = require('../lib/achievements');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const COR = '#ff0040';

function buildRankingEmbed(ranking, guild) {
  const linhas = ranking.map((r, i) => {
    const medalhas = ['🥇', '🥈', '🥉'];
    const prefixo = medalhas[i] || `**${i + 1}º**`;
    const membro = guild?.members?.cache?.get(r.user_id);
    const nome = membro ? `${membro.user.tag}` : `<@${r.user_id}>`;
    const xp = Number(r.xp) || 0;
    const nivel = r.nivel != null ? `Lv.${r.nivel}` : '';
    const gp = r.coins_gp != null ? `🪙${Number(r.coins_gp).toLocaleString('pt-BR')}` : '';
    return `${prefixo} ${nome} — **${xp.toLocaleString('pt-BR')} XP** ${nivel} ${gp}`.trim();
  });

  return new EmbedBuilder()
    .setTitle('🏆 Ranking Global do Servidor — Top 10')
    .setColor(COR)
    .setDescription(
      linhas.length
        ? linhas.join('\n')
        : 'Ainda ninguém pontuou! Jogue partidas para aparecer aqui.'
    )
    .setFooter({ text: `📊 Atualizado em: ${new Date().toLocaleString('pt-BR')}` })
    .setTimestamp();
}

function buildPainelJogosEmbed(guild) {
  const jogosPorBloco = 6;
  const blocos = [];
  for (let i = 0; i < MINI_JOGOS.length; i += jogosPorBloco) {
    const bloco = MINI_JOGOS.slice(i, i + jogosPorBloco);
    blocos.push(
      bloco
        .map(
          (j) =>
            `• ${j.emoji} **${j.nome}** — *${j.descricao}*\n  \`Jogadores:\` ${j.jogadores} • \`Duração:\` ${j.duracao}`
        )
        .join('\n\n')
    );
  }

  const fieldsIniciais = [
    {
      name: '📜 REGRAS GERAIS',
      value:
        `✅ Respeite os outros jogadores — sem toxicidade, spam ou cheating.\n` +
        `✅ Use \`/jogos cancelar\` para sair de uma partida travada.\n` +
        `✅ Apostas em GP são opcionais e definitivas: sem reembolso.\n` +
        `✅ Desafios 1v1 exigem aceite do oponente.\n` +
        `✅ Abusar de bugs ou desconexões propositais = perda por WO.`,
      inline: false,
    },
    {
      name: '💎 VALORES DE GP (GamoPoints)',
      value:
        `🏆 **Vitória IA** → +5 GP fixos\n` +
        `🏆 **Vitória 1v1** → dobra a aposta (×2)\n` +
        `🎨 **Roleta de Cores** → Preto/Vermelho 2x, Branco 10x\n` +
        `🏅 **Conquistas** → 10 a 5000 GP de recompensa\n` +
        `🎰 **Roleta da Loja** → prêmios de 20 a 1500 GP (50 GP/giro)`,
      inline: false,
    },
    {
      name: '⚙️ COMO FUNCIONA O SISTEMA',
      value:
        `1️⃣ Jogue partidas → ganha **XP** e **GP**\n` +
        `2️⃣ XP sobe seu **Nível** e **ELO** global\n` +
        `3️⃣ GP é a moeda para **Loja** (títulos, cores, roleta)\n` +
        `4️⃣ Cada jogo tem ranking próprio via \`/jogos rank\`\n` +
        `5️⃣ Desbloqueie **25 conquistas** para prêmios extras\n` +
        `6️⃣ Veja seu perfil completo com \`/perfil\``,
      inline: false,
    },
  ];

  const fieldsJogos = blocos.map((texto, idx) => ({
    name:
      idx === 0
        ? `🎯 MINI-JOGOS DISPONÍVEIS (${MINI_JOGOS.length}) — Parte ${idx + 1}/${blocos.length}`
        : `🎯 Jogos — Parte ${idx + 1}/${blocos.length}`,
    value: texto.slice(0, 1020),
    inline: false,
  }));

  const fieldsComandos = [
    {
      name: '🔗 COMANDOS RÁPIDOS',
      value:
        `\`/jogos listar\` — todos os jogos\n` +
        `\`/jogos jogar\` — painel com MODO IA/RIVAL\n` +
        `\`/perfil\` — seu perfil gamer\n` +
        `\`/gp saldo\` — suas GamoPoints\n` +
        `\`/loja\` — loja de títulos/cores/roleta`,
      inline: true,
    },
    {
      name: '🌐 JOGOS EXTERNOS',
      value:
        `\`/jogos externos\` abre o catálogo com 30+ jogos:\n` +
        `🎯 Casuais (.io), 🧩 Puzzle, 🔫 FPS, 🪂 BR,\n` +
        `⚔️ MOBA, 🏎️ Racing, 🏰 Estratégia, 🎉 Party games.`,
      inline: true,
    },
  ];

  return new EmbedBuilder()
    .setTitle('🎮 PAINEL DE JOGOS — Central de Entretenimento')
    .setColor(COR)
    .setDescription(
      `**Bem-vindo(a) à Arena de Jogos do ${guild?.name || 'Servidor'}!**\n\n` +
      `Aqui você encontra tudo sobre o nosso sistema de jogos, ranking, GP e recompensas.\n` +
      `Clique nos **4 botões** abaixo para começar 👇`
    )
    .addFields([...fieldsIniciais, ...fieldsJogos, ...fieldsComandos])
    .setImage('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=neon%20red%20gaming%20arcade%20banner%20dark%20background%20with%20controller%20and%20stars&image_size=landscape_16_9')
    .setFooter({ text: `💡 ${guild?.name || 'Servidor'} — Divirta-se com responsabilidade! 🔴✨` })
    .setTimestamp();
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('config')
    .setDescription('⚙️ Configurações STAFF do servidor (jogos, ranking, painel)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommandGroup((g) =>
      g
        .setName('rankingcanal')
        .setDescription('📊 Configurar canal do ranking global')
        .addSubcommand((s) =>
          s.setName('set').setDescription('📍 Definir um canal para o ranking automático')
            .addChannelOption((o) => o.setName('canal').setDescription('Canal para postar o ranking').setRequired(true))
        )
        .addSubcommand((s) =>
          s.setName('off').setDescription('🚫 Desligar o ranking automático e apagar mensagem')
        )
    )
    .addSubcommandGroup((g) =>
      g
        .setName('paineljogos')
        .setDescription('🎮 Configurar canal do Painel de Jogos permanente')
        .addSubcommand((s) =>
          s.setName('set').setDescription('📍 Definir canal e postar o Painel de Jogos permanente')
            .addChannelOption((o) => o.setName('canal').setDescription('Canal para o painel').setRequired(true))
        )
        .addSubcommand((s) =>
          s.setName('off').setDescription('🚫 Apagar o painel permanente do canal')
        )
    )
    .addSubcommandGroup((g) =>
      g
        .setName('cargosniveis')
        .setDescription('🎖️ Sistema de cargos por nível do jogador')
        .addSubcommand((s) =>
          s.setName('on').setDescription('✅ Ligar sistema de cargos por nível')
        )
        .addSubcommand((s) =>
          s.setName('off').setDescription('❌ Desligar sistema de cargos por nível')
        )
        .addSubcommand((s) =>
          s.setName('set').setDescription('📍 Definir cargo para um nível')
            .addIntegerOption((o) => o.setName('nivel').setDescription('Nível mínimo (1+) para receber o cargo').setMinValue(1).setMaxValue(999).setRequired(true))
            .addRoleOption((o) => o.setName('cargo').setDescription('Cargo a ser dado ao chegar no nível').setRequired(true))
        )
        .addSubcommand((s) =>
          s.setName('remover').setDescription('🗑️ Remover mapeamento de um nível')
            .addIntegerOption((o) => o.setName('nivel').setDescription('Nível para remover o cargo').setMinValue(1).setMaxValue(999).setRequired(true))
        )
        .addSubcommand((s) =>
          s.setName('listar').setDescription('📄 Listar todos os cargos configurados por nível')
        )
        .addSubcommand((s) =>
          s.setName('novato').setDescription('🌱 Definir o cargo "Jogador Novato" ao criar perfil')
            .addRoleOption((o) => o.setName('cargo').setDescription('Cargo de novato inicial').setRequired(true))
        )
        .addSubcommand((s) =>
          s.setName('canalparabens').setDescription('📢 Canal para postar parabéns ao subir nível')
            .addChannelOption((o) => o.setName('canal').setDescription('Canal onde serão postadas as mensagens').setRequired(true))
        )
    ),

  async execute(interaction, client) {
    try {
      await interaction.deferReply({ ephemeral: true });
      const subGroup = interaction.options.getSubcommandGroup();
      const sub = interaction.options.getSubcommand();
      const guildId = interaction.guildId;
      const guild = interaction.guild;

      if (subGroup === 'rankingcanal') {
        if (sub === 'set') {
          const canal = interaction.options.getChannel('canal');
          if (!canal || !canal.isTextBased()) {
            return interaction.editReply('❌ Escolha um canal de texto válido.');
          }

          const cfgAntigo = await db.getGuildConfig(guildId);
          if (cfgAntigo?.ranking_message_id && cfgAntigo?.ranking_channel_id) {
            try {
              const canalAntigo = await client.channels.fetch(cfgAntigo.ranking_channel_id).catch(() => null);
              if (canalAntigo) {
                await canalAntigo.messages.delete(cfgAntigo.ranking_message_id).catch(() => {});
              }
            } catch (_) {}
          }

          const ranking = await db.getRanking(guildId, null, 10, false);
          const embedRanking = buildRankingEmbed(ranking, guild);
          const msgRanking = await canal.send({ embeds: [embedRanking] });

          await db.updateGuildConfig(guildId, {
            ranking_channel_id: canal.id,
            ranking_message_id: msgRanking.id,
          });

          return interaction.editReply(
            `✅ **Canal de ranking configurado com sucesso!**\n\n` +
            `📌 Canal: ${canal}\n` +
            `🆔 Mensagem ID: \`${msgRanking.id}\`\n` +
            `📊 Ranking inicial (Top 10) postado.`
          );
        }

        if (sub === 'off') {
          const cfg = await db.getGuildConfig(guildId);
          let apagou = false;
          if (cfg?.ranking_message_id && cfg?.ranking_channel_id) {
            try {
              const canalAntigo = await client.channels.fetch(cfg.ranking_channel_id).catch(() => null);
              if (canalAntigo) {
                await canalAntigo.messages.delete(cfg.ranking_message_id).catch(() => {});
                apagou = true;
              }
            } catch (_) {}
          }

          await db.updateGuildConfig(guildId, {
            ranking_channel_id: null,
            ranking_message_id: null,
          });

          return interaction.editReply(
            `🚫 **Ranking automático desligado.**\n\n` +
            (apagou ? `🗑️ Mensagem antiga apagada.\n` : `ℹ️ Nenhuma mensagem antiga para apagar.\n`) +
            `Use \`/config rankingcanal set #canal\` para reativar.`
          );
        }
      }

      if (subGroup === 'paineljogos') {
        if (sub === 'set') {
          const canal = interaction.options.getChannel('canal');
          if (!canal || !canal.isTextBased()) {
            return interaction.editReply('❌ Escolha um canal de texto válido.');
          }

          const cfgAntigo = await db.getGuildConfig(guildId);
          if (cfgAntigo?.painel_jogos_message_id && cfgAntigo?.painel_jogos_channel_id) {
            try {
              const canalAntigo = await client.channels.fetch(cfgAntigo.painel_jogos_channel_id).catch(() => null);
              if (canalAntigo) {
                await canalAntigo.messages.delete(cfgAntigo.painel_jogos_message_id).catch(() => {});
              }
            } catch (_) {}
          }

          const embedPainel = buildPainelJogosEmbed(guild);

          const btn1 = new ButtonBuilder()
            .setCustomId('paineljogos:modo_ia')
            .setLabel('🤖 MODO IA')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('🤖');

          const btn2 = new ButtonBuilder()
            .setCustomId('paineljogos:modo_rival')
            .setLabel('⚔️ MODO RIVAL')
            .setStyle(ButtonStyle.Danger)
            .setEmoji('⚔️');

          const btn3 = new ButtonBuilder()
            .setCustomId('paineljogos:ranking')
            .setLabel('🏆 Ranking')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('📊');

          const btn4 = new ButtonBuilder()
            .setCustomId('paineljogos:perfil')
            .setLabel('👤 Meu Perfil')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('📋');

          const row = new ActionRowBuilder().addComponents(btn1, btn2, btn3, btn4);

          const msgPainel = await canal.send({ embeds: [embedPainel], components: [row] });

          await db.updateGuildConfig(guildId, {
            painel_jogos_channel_id: canal.id,
            painel_jogos_message_id: msgPainel.id,
          });

          return interaction.editReply(
            `✅ **Painel de Jogos permanente postado com sucesso!**\n\n` +
            `📌 Canal: ${canal}\n` +
            `🆔 Mensagem ID: \`${msgPainel.id}\`\n` +
            `🔘 4 botões ativos:\n` +
            `   • 🤖 MODO IA (jogue contra o bot)\n` +
            `   • ⚔️ MODO RIVAL (desafie outro membro)\n` +
            `   • 🏆 Ranking (Top 10 do servidor)\n` +
            `   • 👤 Meu Perfil (seu perfil gamer)`
          );
        }

        if (sub === 'off') {
          const cfg = await db.getGuildConfig(guildId);
          let apagou = false;
          if (cfg?.painel_jogos_message_id && cfg?.painel_jogos_channel_id) {
            try {
              const canalAntigo = await client.channels.fetch(cfg.painel_jogos_channel_id).catch(() => null);
              if (canalAntigo) {
                await canalAntigo.messages.delete(cfg.painel_jogos_message_id).catch(() => {});
                apagou = true;
              }
            } catch (_) {}
          }

          await db.updateGuildConfig(guildId, {
            painel_jogos_channel_id: null,
            painel_jogos_message_id: null,
          });

          return interaction.editReply(
            `🚫 **Painel permanente desligado.**\n\n` +
            (apagou ? `🗑️ Mensagem antiga apagada.\n` : `ℹ️ Nenhuma mensagem antiga para apagar.\n`) +
            `Use \`/config paineljogos set #canal\` para reativar.`
          );
        }
      }

      if (subGroup === 'cargosniveis') {
        if (sub === 'on' || sub === 'off') {
          const ligar = sub === 'on';
          await db.setGuildConfigField(guildId, 'cargos_niveis_enabled', ligar ? 1 : 0);
          return interaction.editReply(
            ligar
              ? '✅ **Sistema de cargos por nível LIGADO.**\n\nUse `/config cargosniveis set nivel:X cargo:@Cargo` para adicionar mapeamentos.'
              : '❌ **Sistema de cargos por nível DESLIGADO.**\n\nOs membros não receberão mais cargos ao subir de nível.'
          );
        }

        if (sub === 'set') {
          const nivel = interaction.options.getInteger('nivel', true);
          const cargo = interaction.options.getRole('cargo', true);
          if (cargo.managed) {
            return interaction.editReply('❌ Não pode usar cargos gerenciados por bots/integrações.');
          }
          if (interaction.guild.members.me.roles.highest.comparePositionTo(cargo) <= 0) {
            return interaction.editReply(
              '❌ O cargo selecionado é **maior ou igual** ao cargo do bot. Mova o cargo do **GAME CUSTOM** acima do escolhido em "Configurações do servidor → Cargos".'
            );
          }
          const ok = await db.setLevelRole(guildId, nivel, cargo.id);
          if (!ok) return interaction.editReply('❌ Erro ao salvar mapeamento.');
          const cfg = await db.getGuildConfig(guildId);
          const ligado = cfg?.cargos_niveis_enabled ? 'ligado' : 'DESLIGADO';
          return interaction.editReply(
            `✅ **Mapeamento salvo!**\n\n` +
            `🎖️ Ao chegar no **Nível ${nivel}** o membro receberá o cargo **${cargo.toString()}**\n` +
            `⚙️ Sistema de cargos está atualmente: **${ligado}**` +
            (cfg?.cargos_niveis_enabled ? '' : '\n\n⚠️ Use `/config cargosniveis on` para ligar!')
          );
        }

        if (sub === 'remover') {
          const nivel = interaction.options.getInteger('nivel', true);
          const ok = await db.removeLevelRole(guildId, nivel);
          if (!ok) return interaction.editReply('❌ Erro ao remover mapeamento.');
          return interaction.editReply(`🗑️ **Mapeamento removido:** cargo do Nível ${nivel} foi apagado.`);
        }

        if (sub === 'listar') {
          const lista = await db.listLevelRoles(guildId);
          const cfg = await db.getGuildConfig(guildId);
          const novatoRole = cfg?.novato_role_id ? `<@&${cfg.novato_role_id}>` : '*não configurado*';
          const canalUp = cfg?.nivel_up_channel_id ? `<#${cfg.nivel_up_channel_id}>` : '*não configurado (envia por DM)*';
          const status = cfg?.cargos_niveis_enabled ? '✅ Ligado' : '❌ Desligado';

          const linhas = lista.length
            ? lista.map((r) => `⭐ **Nível ${r.nivel}** → <@&${r.role_id}>`).join('\n')
            : '*Nenhum cargo por nível configurado ainda.*';

          const embed = new EmbedBuilder()
            .setTitle('🎖️ Cargos por Nível — Configurações')
            .setColor(COR)
            .addFields(
              { name: 'Status', value: status, inline: true },
              { name: '🌱 Cargo Novato', value: novatoRole, inline: true },
              { name: '📢 Canal Parabéns', value: canalUp, inline: true },
              { name: `Mapeamentos (${lista.length})`, value: linhas, inline: false }
            )
            .setFooter({ text: 'Use /config cargosniveis set nivel:X cargo:@Cargo para adicionar' })
            .setTimestamp();

          return interaction.editReply({ embeds: [embed] });
        }

        if (sub === 'novato') {
          const cargo = interaction.options.getRole('cargo', true);
          if (cargo.managed) return interaction.editReply('❌ Não pode usar cargos gerenciados por bots/integrações.');
          if (interaction.guild.members.me.roles.highest.comparePositionTo(cargo) <= 0) {
            return interaction.editReply(
              '❌ O cargo selecionado é **maior ou igual** ao cargo do bot. Mova o cargo do **GAME CUSTOM** acima.'
            );
          }
          await db.setGuildConfigField(guildId, 'novato_role_id', cargo.id);
          return interaction.editReply(
            `🌱 **Cargo "Jogador Novato" configurado!**\n\n` +
            `Agora ao criar o perfil com \`/perfil criar nome:SeuNome\` o membro receberá automaticamente o cargo **${cargo.toString()}**.`
          );
        }

        if (sub === 'canalparabens') {
          const canal = interaction.options.getChannel('canal', true);
          if (!canal || !canal.isTextBased()) return interaction.editReply('❌ Escolha um canal de texto válido.');
          await db.setGuildConfigField(guildId, 'nivel_up_channel_id', canal.id);
          return interaction.editReply(
            `📢 **Canal de parabéns configurado!**\n\n` +
            `Agora sempre que alguém subir de nível a mensagem de parabéns será postada em **${canal.toString()}**.` +
            `\n\nSe preferir receber por DM, use \`/config cargosniveis canalparabens\` e apague o canal depois (remover configuração).`
          );
        }
      }

      return interaction.editReply('⚠️ Subcomando não reconhecido.');
    } catch (err) {
      console.error('[config error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 1500));
      } catch (_) {}
    }
  },

  async handleButton(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('paineljogos:')) return false;

    try {
      const acao = cid.split(':')[1];
      const guildId = interaction.guildId;
      const userId = interaction.user.id;

      if (acao === 'modo_ia' || acao === 'modo_rival') {
        const cmdJogos = client.commands.get('jogos');
        if (cmdJogos && typeof cmdJogos._iniciarFluxoModo === 'function') {
          await interaction.deferReply({ ephemeral: true });
          await cmdJogos._iniciarFluxoModo({ interaction, client, modo: acao });
          return true;
        }
        await interaction.deferReply({ ephemeral: true });
        await interaction.editReply(
          acao === 'modo_ia'
            ? '🤖 **Modo IA:** use `/jogos jogar` e escolha **MODO IA** para jogar contra o bot!'
            : '⚔️ **Modo Rival:** use `/jogos jogar` e escolha **MODO RIVAL** para desafiar outro membro!'
        );
        return true;
      }

      if (acao === 'jogar') {
        await interaction.deferReply({ ephemeral: true });
        const options = MINI_JOGOS.map((j) => ({
          label: `${j.emoji} ${j.nome}`.slice(0, 95),
          description: `${j.jogadores} • ${j.duracao}`.slice(0, 95),
          value: j.id,
        })).slice(0, 25);

        const row = new ActionRowBuilder().addComponents(
          new (require('discord.js').StringSelectMenuBuilder)()
            .setCustomId('paineljogos:selectjogo:' + interaction.id)
            .setPlaceholder('👉 Selecione um jogo para começar')
            .addOptions(options)
        );

        const embed = new EmbedBuilder()
          .setTitle('🎮 Escolha seu jogo!')
          .setColor(COR)
          .setDescription('Selecione um jogo no menu abaixo para começar a jogar agora.')
          .setFooter({ text: 'Use /jogos jogar <nome> para iniciar diretamente' });

        const msg = await interaction.editReply({ embeds: [embed], components: [row], fetchReply: true });

        const col = msg.createMessageComponentCollector({
          componentType: require('discord.js').ComponentType.StringSelect,
          time: 5 * 60 * 1000,
          filter: (i) => i.user.id === userId,
        });

        col.on('collect', async (i) => {
          try {
            const jogoId = i.values[0];
            const cmdJogos = client.commands.get('jogos');
            if (cmdJogos && typeof cmdJogos._startJogo === 'function') {
              const jogo = MINI_JOGOS.find((x) => x.id === jogoId);
              if (!jogo) return;
              await i.deferReply({ ephemeral: true });
              try {
                await i.editReply({ content: `🎮 Carregando **${jogo.nome}**...`, components: [] });
              } catch (_) {}
              await cmdJogos._startJogo({ interaction: i, client, jogo, donoId: userId, oponente: null, apostaGP: 0 });
            } else {
              await i.reply({
                content: `✅ Jogo escolhido: **${jogoId}**\nUse \`/jogos jogar jogo:${jogoId}\` para começar!`,
                ephemeral: true,
              });
            }
          } catch (err) {
            console.error('[paineljogos select err]', err);
          }
        });

        col.on('end', () => {
          interaction.editReply({ components: [] }).catch(() => {});
        });

        return true;
      }

      if (acao === 'ranking') {
        await interaction.deferReply({ ephemeral: true });
        const cmdJogos = client.commands.get('jogos');
        const ranking = await db.getRanking(guildId, null, 10, false);
        const medalhas = ['🥇', '🥈', '🥉'];
        const linhas = ranking.map((r, i) => {
          const prefixo = medalhas[i] || `**${i + 1}º**`;
          const membro = interaction.guild?.members?.cache?.get(r.user_id);
          const nome = membro
            ? `${membro.user.username}#${membro.user.discriminator || ''}`
            : `<@${r.user_id}>`;
          return `${prefixo} ${nome} — **${Number(r.xp || 0).toLocaleString('pt-BR')} XP** • Lv.${r.nivel || 1} • 🪙${Number(r.coins_gp || 0).toLocaleString('pt-BR')}`;
        });

        const embedR = new EmbedBuilder()
          .setTitle('🏆 Ranking Global do Servidor — Top 10')
          .setColor(COR)
          .setDescription(
            linhas.length
              ? linhas.join('\n')
              : 'Ainda ninguém pontuou! Jogue partidas para aparecer aqui.'
          )
          .addFields({
            name: '📌 Ver mais',
            value: 'Use `/jogos rank jogo:GERAL` para ranking completo\nUse `/jogos rank jogo:<jogo>` para ranking por jogo',
          })
          .setFooter({ text: `📊 Atualizado em ${new Date().toLocaleString('pt-BR')}` })
          .setTimestamp();

        await interaction.editReply({ embeds: [embedR] });
        return true;
      }

      if (acao === 'perfil') {
        await interaction.deferReply({ ephemeral: true });
        const cmdPerfil = client.commands.get('perfil');
        if (cmdPerfil && typeof cmdPerfil.execute === 'function') {
          const fakeInteraction = Object.create(interaction);
          fakeInteraction.options = {
            getUser: () => interaction.user,
            getSubcommand: () => null,
          };
          try {
            await cmdPerfil.execute(fakeInteraction, client);
          } catch (_) {
            await interaction.editReply(`👤 Use \`/perfil\` para ver seu perfil completo de jogador!`);
          }
        } else {
          await interaction.editReply(`👤 Use \`/perfil\` para ver seu perfil completo de jogador!`);
        }
        return true;
      }

      return true;
    } catch (err) {
      console.error('[paineljogos button err]', err);
      if (!interaction.replied && !interaction.deferred) {
        try {
          await interaction.reply({ content: '❌ Erro no botão.', ephemeral: true });
        } catch (_) {}
      }
      return true;
    }
  },
};


})(__mod_obj_cmd_config__, __mod_obj_cmd_config__.exports, __makeReq_cmd_config__, path.dirname(path.resolve(process.cwd(), "commands/config.js")), path.resolve(process.cwd(), "commands/config.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_config = __mod_obj_cmd_config__.exports;

const __makeReq_cmd_paineljogos__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/paineljogos.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_paineljogos__ = { exports: __BOT_MODULE__.cmd_paineljogos };
// -------- commands/paineljogos.js --------
(function (module, exports, require, __dirname, __filename) {
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, ComponentType, PermissionFlagsBits } = require('discord.js');
const db = require('../database');
const { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, sortearPremio } = require('../lib/achievements');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const COR = '#ff0040';

function buildPainelEmbed(guild, isPublico) {
  const jogosPorBloco = 7;
  const blocos = [];
  for (let i = 0; i < MINI_JOGOS.length; i += jogosPorBloco) {
    const bloco = MINI_JOGOS.slice(i, i + jogosPorBloco);
    blocos.push(
      bloco.map((j) => `${j.emoji} **${j.nome}** — *${j.jogadores} • ${j.duracao}*`).join('\n')
    );
  }
  const fieldsJogos = blocos.map((texto, idx) => ({
    name:
      idx === 0
        ? `🎯 MINI-JOGOS DISPONÍVEIS (${MINI_JOGOS.length}) — P.${idx + 1}/${blocos.length}`
        : `🎯 Jogos — P.${idx + 1}/${blocos.length}`,
    value: texto.slice(0, 1020),
    inline: false,
  }));

  const embed = new EmbedBuilder()
    .setTitle(`🎮 ${guild?.name || 'Servidor'} — PAINEL DE JOGOS`)
    .setColor(COR)
    .setDescription(
      `**🔴 BEM-VINDO À ARENA GAMER!** 🔴\n\n` +
      `Aqui você encontra tudo sobre o sistema de jogos do servidor.\n` +
      `Ganhe **XP**, **GP**, **Níveis**, **Conquistas** e suba no **Ranking**!\n\n` +
      `Clique nos **4 botões** abaixo para navegar 👇`
    )
    .addFields(
      ...fieldsJogos,
      {
        name: '🏆 REGRAS RÁPIDAS',
        value:
          `✅ Sem toxicidade / cheating\n` +
          `✅ Use \`/jogos cancelar\` em partidas travadas\n` +
          `✅ Apostas GP são definitivas\n` +
          `✅ 1v1 precisa de aceite do oponente`,
        inline: true,
      },
      {
        name: '💎 RECOMPENSAS',
        value:
          `🏆 Vitória IA → **+5 GP** fixos\n` +
          `🏆 Vitória 1v1 → **Aposta ×2**\n` +
          `🎨 Roleta Cores → Preto/Verm 2x, Branco 10x\n` +
          `🏅 Conquistas → até 5000 GP`,
        inline: true,
      }
    )
    .setImage('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=neon%20red%20gaming%20controller%20with%20stars%20and%20fire%20dark%20background%20banner&image_size=landscape_16_9')
    .setFooter({
      text: isPublico
        ? `💡 Painel público • Use os botões abaixo! 🔴✨`
        : `💡 Painel pessoal • Interaja com os botões! 🔴✨`,
    })
    .setTimestamp();

  return embed;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('paineljogos')
    .setDescription('🎮 Exibe o Painel de Jogos do servidor com atalhos')
    .addChannelOption((o) =>
      o.setName('canal').setDescription('(STAFF) Postar o painel em um canal específico').setRequired(false)
    ),

  async execute(interaction, client) {
    try {
      const guildId = interaction.guildId;
      const guild = interaction.guild;
      const userId = interaction.user.id;
      const canalOpt = interaction.options.getChannel('canal');
      const membro = guild?.members?.cache?.get(userId);
      const isStaff = membro?.permissions?.has(PermissionFlagsBits.Administrator) ||
                       membro?.permissions?.has(PermissionFlagsBits.ManageGuild);

      const btn1 = new ButtonBuilder()
        .setCustomId('paineljogos:modo_ia')
        .setLabel('🤖 MODO IA')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('🤖');

      const btn2 = new ButtonBuilder()
        .setCustomId('paineljogos:modo_rival')
        .setLabel('⚔️ MODO RIVAL')
        .setStyle(ButtonStyle.Danger)
        .setEmoji('⚔️');

      const btn3 = new ButtonBuilder()
        .setCustomId('paineljogos:ranking')
        .setLabel('🏆 Ranking')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('📊');

      const btn4 = new ButtonBuilder()
        .setCustomId('paineljogos:perfil')
        .setLabel('👤 Meu Perfil')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('📋');

      const row = new ActionRowBuilder().addComponents(btn1, btn2, btn3, btn4);
      const embed = buildPainelEmbed(guild, !!canalOpt);

      if (canalOpt) {
        if (!isStaff) {
          return interaction.reply({
            content: '❌ Apenas STAFF (ADM/ManageGuild) pode postar o painel em outro canal.',
            ephemeral: true,
          });
        }
        if (!canalOpt.isTextBased()) {
          return interaction.reply({ content: '❌ Escolha um canal de texto válido.', ephemeral: true });
        }
        await interaction.deferReply({ ephemeral: true });
        const msgPostada = await canalOpt.send({ embeds: [embed], components: [row] });
        return interaction.editReply(
          `✅ **Painel de Jogos postado!**\n\n` +
          `📌 Canal: ${canalOpt}\n` +
          `🆔 Mensagem ID: \`${msgPostada.id}\`\n` +
          `🔘 4 botões ativos: 🤖 MODO IA • ⚔️ MODO RIVAL • 🏆 Ranking • 👤 Perfil`
        );
      }

      await interaction.deferReply();
      const msg = await interaction.editReply({ embeds: [embed], components: [row], fetchReply: true });

      const col = msg.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 30 * 60 * 1000,
        filter: (i) => true,
      });

      col.on('collect', async (i) => {
        try {
          await _handleBotaoPainel(i, client, guildId);
        } catch (err) {
          console.error('[paineljogos coletor botao err]', err);
        }
      });

      col.on('end', () => {
        interaction.editReply({ components: [] }).catch(() => {});
      });

    } catch (err) {
      console.error('[paineljogos error]', err);
      try {
        if (!interaction.deferred && !interaction.replied) {
          await interaction.reply({ content: '❌ Erro: ' + String(err.message || err).slice(0, 1500), ephemeral: true });
        } else {
          await interaction.editReply('❌ Erro: ' + String(err.message || err).slice(0, 1500));
        }
      } catch (_) {}
    }
  },

  async handleButton(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('paineljogos2:')) return false;
    try {
      const cfgCmd = client.commands.get('config');
      if (cfgCmd && typeof cfgCmd.handleButton === 'function') {
        const newCid = cid.replace('paineljogos2:', 'paineljogos:');
        const fake = Object.create(interaction);
        Object.defineProperty(fake, 'customId', {
          get() { return newCid; },
        });
        return await cfgCmd.handleButton(fake, client);
      }
      await interaction.deferReply({ ephemeral: true });
      await interaction.editReply('🎮 Use `/jogos jogar` para abrir o painel completo!');
      return true;
    } catch (err) {
      console.error('[paineljogos handleButton err]', err);
      if (!interaction.replied && !interaction.deferred) {
        try {
          await interaction.reply({ content: '❌ Erro no botão.', ephemeral: true });
        } catch (_) {}
      }
      return true;
    }
  },
};

async function _handleBotaoPainel(interaction, client, guildId) {
  const cid = interaction.customId;
  const acao = cid.split(':')[1];
  const userId = interaction.user.id;

  if (acao === 'catalogo') {
    await interaction.deferReply({ ephemeral: true });
    const options = MINI_JOGOS.map((j) => ({
      label: `${j.emoji} ${j.nome}`.slice(0, 95),
      description: `${j.jogadores} • ${j.duracao}`.slice(0, 95),
      value: j.id,
    })).slice(0, 25);

    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('paineljogos2:seljogo:' + interaction.id)
        .setPlaceholder('👉 Escolha um jogo para ver detalhes')
        .addOptions(options)
    );

    const listaStr = MINI_JOGOS.map((j, i) =>
      `**${i + 1}.** ${j.emoji} **${j.nome}**\n   ${j.descricao}`
    ).join('\n\n');

    const embed = new EmbedBuilder()
      .setTitle('🎮 Catálogo Completo de Mini-Jogos (' + MINI_JOGOS.length + ')')
      .setColor(COR)
      .setDescription(listaStr.slice(0, 4000))
      .addFields({
        name: '💡 Como jogar',
        value:
          `• Selecione um jogo no menu abaixo para ver detalhes.\n` +
          `• Ou use diretamente: \`/jogos jogar jogo:<nome>\`\n` +
          `• Para 1v1: \`/jogos desafio @User jogo:<nome>\``,
      })
      .setFooter({ text: 'Selecione um jogo no menu 👇' });

    const msg = await interaction.editReply({ embeds: [embed], components: [row], fetchReply: true });

    const col = msg.createMessageComponentCollector({
      componentType: ComponentType.StringSelect,
      time: 10 * 60 * 1000,
      filter: (i) => i.user.id === userId,
    });

    col.on('collect', async (i) => {
      try {
        const jogoId = i.values[0];
        const j = MINI_JOGOS.find((x) => x.id === jogoId);
        if (!j) return;
        await i.deferUpdate();
        const detEmbed = new EmbedBuilder()
          .setTitle(`${j.emoji} ${j.nome}`)
          .setColor(COR)
          .setDescription(j.descricao)
          .addFields(
            { name: '👥 Jogadores', value: j.jogadores, inline: true },
            { name: '⏱️ Duração', value: j.duracao, inline: true },
            { name: '🎯 Tipo', value: j.tipo.toUpperCase(), inline: true },
            { name: '💠 XP Base', value: `+${j.xpBase} XP/partida`, inline: true },
            {
              name: '🚀 Comandos',
              value:
                `\`/jogos jogar jogo:${j.id}\`\n` +
                (j.tipo === '1v1' || j.tipo === 'sorteio' ? `\`/jogos desafio @User jogo:${j.id}\`` : '—'),
              inline: false,
            }
          )
          .setFooter({ text: '🎮 Divirta-se!' });
        await interaction.editReply({ embeds: [detEmbed], components: [] });
      } catch (err) {
        console.error('[catalogo jogo err]', err);
      }
    });

    col.on('end', () => {
      interaction.editReply({ components: [] }).catch(() => {});
    });

    return;
  }

  if (acao === 'ranking') {
    await interaction.deferReply({ ephemeral: true });
    const ranking = await db.getRanking(guildId, null, 10, false);
    const medalhas = ['🥇', '🥈', '🥉'];
    const linhas = ranking.map((r, i) => {
      const prefixo = medalhas[i] || `**${i + 1}º**`;
      const membro = interaction.guild?.members?.cache?.get(r.user_id);
      const nome = membro
        ? `${membro.user.username}#${membro.user.discriminator}`
        : `<@${r.user_id}>`;
      return `${prefixo} ${nome} — **${Number(r.xp || 0).toLocaleString('pt-BR')} XP** • Lv.${r.nivel || 1} • 🪙${Number(r.coins_gp || 0).toLocaleString('pt-BR')}`;
    });

    const embed = new EmbedBuilder()
      .setTitle('🏆 Ranking Global do Servidor — Top 10')
      .setColor(COR)
      .setDescription(
        linhas.length
          ? linhas.join('\n')
          : 'Ainda ninguém pontuou! Jogue partidas para aparecer aqui.'
      )
      .addFields({
        name: '📌 Ver mais',
        value: 'Use `/jogos rank jogo:GERAL` para ranking completo\nUse `/jogos rank jogo:<jogo>` para ranking por jogo',
      })
      .setFooter({ text: `📊 Atualizado em ${new Date().toLocaleString('pt-BR')}` })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
    return;
  }
}


})(__mod_obj_cmd_paineljogos__, __mod_obj_cmd_paineljogos__.exports, __makeReq_cmd_paineljogos__, path.dirname(path.resolve(process.cwd(), "commands/paineljogos.js")), path.resolve(process.cwd(), "commands/paineljogos.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_paineljogos = __mod_obj_cmd_paineljogos__.exports;

const __makeReq_cmd_jogos__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/jogos.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_jogos__ = { exports: __BOT_MODULE__.cmd_jogos };
// -------- commands/jogos.js --------
(function (module, exports, require, __dirname, __filename) {
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  PermissionFlagsBits,
} = require('discord.js');
const db = require('../database');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const JOGOS_IDS = MINI_JOGOS.map((j) => j.id);

const JOGO_PARTIDAS = new Map();
const CHAVE_PARTIDA = (gid, cid) => `${gid}:${cid}`;

function registrarPartida(guildId, canalId, jogoId, partidaObj) {
  JOGO_PARTIDAS.set(CHAVE_PARTIDA(jogoId, canalId), {
    guildId,
    canalId,
    jogoId,
    criadoEm: Date.now(),
    data: partidaObj,
  });
}
function pegarPartida(jogoId, canalId) {
  const v = JOGO_PARTIDAS.get(CHAVE_PARTIDA(jogoId, canalId));
  return v ? v.data : null;
}
function removerPartida(jogoId, canalId) {
  JOGO_PARTIDAS.delete(CHAVE_PARTIDA(jogoId, canalId));
}
function pegarPartidaUsuario(userId) {
  for (const [, v] of JOGO_PARTIDAS.entries()) {
    const d = v.data;
    if (!d) continue;
    if (d.jogadores && d.jogadores.includes(userId)) return v;
    if (d.user1_id === userId || d.user2_id === userId) return v;
    if (d.donoId === userId) return v;
  }
  return null;
}

async function debitarAposta(guildId, userId, valor) {
  if (valor <= 0) return true;
  const p = await db.getOrInitPlayer(userId, guildId);
  if ((Number(p.coins_gp) || 0) < valor) return false;
  await db.addPlayerGP(userId, guildId, -valor);
  return true;
}

module.exports = {
  registrarPartida,
  pegarPartida,
  removerPartida,
  pegarPartidaUsuario,
  JOGO_PARTIDAS,
  JOGOS_IDS,

  data: new SlashCommandBuilder()
    .setName('jogos')
    .setDescription('🎮 Central de jogos, partidas e entretenimento do servidor')
    .addSubcommand((s) =>
      s.setName('listar').setDescription('Lista todos os mini-jogos disponíveis')
    )
    .addSubcommand((s) =>
      s
        .setName('jogar')
        .setDescription('Abrir painel com os modos de jogo (IA ou Rival)')
    )
    .addSubcommand((s) => s.setName('externos').setDescription('Lista de jogos online para jogar no navegador'))
    .addSubcommand((s) =>
      s
        .setName('cancelar')
        .setDescription('Cancela sua partida atual em andamento')
    )
    .addSubcommand((s) =>
      s
        .setName('rank')
        .setDescription('Ver ranking do servidor ou global')
        .addStringOption((o) =>
          o
            .setName('jogo')
            .setDescription('Ranking de qual jogo?')
            .setRequired(false)
            .addChoices(
              { name: '🌐 Geral (todos os jogos)', value: 'GERAL' },
              ...MINI_JOGOS.slice(0, 24).map((j) => ({ name: `${j.emoji} ${j.nome}`, value: j.id }))
            )
        )
        .addStringOption((o) =>
          o
            .setName('escopo')
            .setDescription('Escopo do ranking')
            .addChoices(
              { name: '🗂️ Apenas este servidor', value: 'servidor' },
              { name: '🌍 Global (todos os servidores)', value: 'global' }
            )
        )
        .addIntegerOption((o) => o.setName('top').setDescription('Quantas pessoas mostrar?').setMinValue(3).setMaxValue(25))
    ),

  async execute(interaction, client) {
    const sub = interaction.options.getSubcommand();
    const guildId = interaction.guildId;

    if (sub === 'listar') {
      const linhas = MINI_JOGOS.map(
        (j, i) =>
          `**${i + 1}. ${j.emoji} \`${j.id}\`** — ${j.descricao}\n\`Jogadores:\` ${j.jogadores} • \`Duração:\` ${j.duracao}`
      );
      const embed = new EmbedBuilder()
        .setTitle('🎮 Mini-Jogos Disponíveis (' + MINI_JOGOS.length + ')')
        .setColor('#ff0040')
        .setDescription('Escolha um modo abaixo para começar a jogar!')
        .addFields({
          name: '📜 Jogos',
          value: linhas.join('\n\n').slice(0, 6000),
        })
        .setFooter({ text: '💡 Dica: use /jogos jogar para abrir o painel completo' });

      const rowModos = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('jogos:painel:modo_ia')
          .setLabel('🤖 MODO IA')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('jogos:painel:modo_rival')
          .setLabel('⚔️ MODO RIVAL')
          .setStyle(ButtonStyle.Danger)
      );

      const options = MINI_JOGOS.map((j) => ({
        label: `${j.emoji} ${j.nome}`.slice(0, 95),
        description: `${j.jogadores} • ${j.duracao}`.slice(0, 95),
        value: j.id,
      })).slice(0, 25);
      const rowSelect = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('jogos:jogarselect')
          .setPlaceholder('👉 Ou selecione um jogo para MODO IA direto')
          .addOptions(options)
      );
      const msg = await interaction.reply({ embeds: [embed], components: [rowModos, rowSelect], fetchReply: true, ephemeral: false });
      this._instalarColetoresPainel({ msg, interaction, client });
      return;
    }

    if (sub === 'externos') {
      const categorias = JOGOS_EXTERNOS.map((c) => {
        const lista = c.items
          .map((i) => `• [**${i.nome}**](${i.link}) — ${i.desc}`)
          .join('\n');
        return { name: c.cat, value: lista.slice(0, 1020) };
      });
      const embed = new EmbedBuilder()
        .setTitle('🌐 Jogos Online Externos (30+)')
        .setColor('#ff0040')
        .setDescription('Clique nos nomes para abrir direto no navegador. Divirta-se!')
        .addFields(categorias.slice(0, 8))
        .setFooter({ text: '🎯 Quer estatísticas de jogos reais? Use /rankjogo <jogo> <nick>' });

      const row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('jogos:extcat')
          .setPlaceholder('Filtrar por categoria...')
          .addOptions([
            { label: '🎯 Todas as categorias', value: 'TODAS' },
            ...JOGOS_EXTERNOS.map((c, idx) => ({
              label: c.cat.slice(0, 95),
              description: `${c.items.length} jogos`,
              value: 'CAT_' + idx,
            })),
          ].slice(0, 25))
      );
      const msgExternos = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });
      try {
        const col = msgExternos.createMessageComponentCollector({
          componentType: ComponentType.StringSelect,
          time: 15 * 60 * 1000,
          filter: (i) => i.customId === 'jogos:extcat' && i.user.id === interaction.user.id,
        });
        col.on('collect', async (i) => {
          const v = i.values[0];
          let cats = categorias;
          if (v.startsWith('CAT_')) {
            const idx = Number(v.slice(4));
            cats = [categorias[idx]].filter(Boolean);
          }
          const embedN = new EmbedBuilder()
            .setTitle('🌐 Jogos Online Externos')
            .setColor('#ff0040')
            .addFields(cats);
          await i.update({ embeds: [embedN] });
        });
      } catch (_) {}
      return;
    }

    if (sub === 'cancelar') {
      await interaction.deferReply({ ephemeral: true });
      const p = pegarPartidaUsuario(interaction.user.id);
      if (!p) return interaction.editReply('❌ Você não está em nenhuma partida no momento.');
      const jogo = MINI_JOGOS.find((j) => j.id === p.jogoId);
      const dono = p.data && (p.data.donoId || p.data.user1_id);
      const podCancelar = dono === interaction.user.id || (p.data && p.data.jogadores && p.data.jogadores[0] === interaction.user.id);
      const staff = interaction.member && interaction.member.permissions && interaction.member.permissions.has(PermissionFlagsBits.ManageMessages);
      if (!podCancelar && !staff) {
        return interaction.editReply('⚠️ Apenas quem criou a partida (ou staff) pode cancelar.');
      }
      if (p.data && typeof p.data.cancelar === 'function') {
        try { await p.data.cancelar('Usuário cancelou'); } catch (_) {}
      }
      removerPartida(p.jogoId, p.canalId);
      return interaction.editReply(
        `✅ Partida de **${jogo ? jogo.nome : p.jogoId}** cancelada com sucesso.`
      );
    }

    if (sub === 'rank') {
      await interaction.deferReply();
      const jogo = interaction.options.getString('jogo') || 'GERAL';
      const escopo = interaction.options.getString('escopo') || 'servidor';
      const top = Math.max(3, Math.min(25, interaction.options.getInteger('top') || 10));
      const eGlobal = escopo === 'global';

      const rows = await db.getRanking(guildId, jogo === 'GERAL' ? null : jogo, top, eGlobal);
      const medalhas = ['🥇', '🥈', '🥉'];
      const linhas = rows.map((r, i) => {
        const medal = medalhas[i] || `#${i + 1}`;
        const uid = r.user_id;
        const tag = client.users.cache.get(uid)?.tag || `<@${uid}>`;
        const xp = r.xp ?? 0;
        const elo = r.elo ?? 0;
        const v = r.v ?? 0, d = r.d ?? 0, e = r.e ?? 0;
        const total = v + d + e;
        const wr = total > 0 ? `${Math.round((v / total) * 100)}%` : '-';
        return `${medal} **${tag}**\n\`XP:\` ${Number(xp)} • \`ELO:\` ${Math.round(Number(elo))} • \`W/D/E:\` ${v}/${d}/${e} • \`WR:\` ${wr}`;
      });

      const tituloJogo = jogo === 'GERAL' ? '🌐 Geral' : `${MINI_JOGOS.find((j) => j.id === jogo)?.emoji || '🎮'} ${MINI_JOGOS.find((j) => j.id === jogo)?.nome || jogo}`;
      const embed = new EmbedBuilder()
        .setTitle(`🏆 Ranking ${eGlobal ? '🌍 Global' : '🗂️ Servidor'} • ${tituloJogo}`)
        .setColor('#ff0040')
        .setDescription(rows.length ? linhas.join('\n\n') : '😢 Ainda ninguém pontuou neste ranking! Jogue um jogo para aparecer aqui.')
        .setFooter({ text: `Top ${top} jogadores • ${rows.length} registros` });

      await interaction.editReply({ embeds: [embed] });

      if (rows.length >= 3) {
        for (let i = 0; i < Math.min(3, rows.length); i++) {
          const achId = ['AC15', 'AC14', 'AC14'][i];
          const unlocked = await db.unlockAchievement(rows[i].user_id, achId);
          if (unlocked && achId === 'AC15') {
            await db.addPlayerGP(rows[i].user_id, guildId, 300);
          } else if (unlocked) {
            await db.addPlayerGP(rows[i].user_id, guildId, 100);
          }
        }
      }
      return;
    }

    if (sub === 'jogar') {
      const embed = new EmbedBuilder()
        .setTitle('🎮 Painel de Jogos')
        .setColor('#ff0040')
        .setDescription('Escolha o **modo de jogo** que você quer jogar:')
        .addFields(
          { name: '🤖 MODO IA', value: 'Jogue contra a Inteligência Artificial do bot. Vença e ganhe **+5 GP por vitória + XP conforme seu nível.**', inline: false },
          { name: '⚔️ MODO RIVAL', value: 'Desafie outro membro para um duelo 1v1. Aposta GP obrigatória. Vencedor leva tudo!', inline: false }
        )
        .setFooter({ text: '💡 Escolha no botão abaixo' });

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId('jogos:painel:modo_ia')
          .setLabel('🤖 MODO IA')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('jogos:painel:modo_rival')
          .setLabel('⚔️ MODO RIVAL')
          .setStyle(ButtonStyle.Danger)
      );

      const msg = await interaction.reply({ embeds: [embed], components: [row], fetchReply: true });
      this._instalarColetoresPainel({ msg, interaction, client });
      return;
    }
  },

  _instalarColetoresPainel({ msg, interaction, client }) {
    const self = this;
    try {
      const colBotoes = msg.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 10 * 60 * 1000,
        filter: (i) => i.customId.startsWith('jogos:painel:'),
      });
      colBotoes.on('collect', async (i) => {
        const modo = i.customId.split(':')[2];
        try { await i.deferReply({ ephemeral: true }); } catch (_) {}
        await self._iniciarFluxoModo({ interaction: i, client, modo });
      });

      const colSel = msg.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        time: 10 * 60 * 1000,
        filter: (i) => i.customId === 'jogos:jogarselect',
      });
      colSel.on('collect', async (i) => {
        const jogoId = i.values[0];
        const jogo = MINI_JOGOS.find((x) => x.id === jogoId);
        try { await i.deferReply({ ephemeral: true }); } catch (_) {}
        if (!jogo) return;
        try {
          await i.editReply({ content: `🎮 Carregando **${jogo.nome}**...`, components: [] });
        } catch (_) {}
        await self._startJogo({ interaction: i, client, jogo, donoId: i.user.id, oponente: null, apostaGP: 0 });
      });
      colSel.on('end', () => {
        interaction.editReply({ components: [] }).catch(() => {});
      });
    } catch (_) {}
  },

  async _iniciarFluxoModo({ interaction, client, modo }) {
    const self = this;
    const userId = interaction.user.id;

    if (modo === 'modo_ia') {
      const options = MINI_JOGOS.map(j => ({
        label: `${j.emoji} ${j.nome}`.slice(0, 95),
        value: j.id,
      })).slice(0, 25);

      const row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('jogos:sel_ia:jogo')
          .setPlaceholder('Selecione o jogo para jogar contra IA')
          .addOptions(options)
      );

      const embed = new EmbedBuilder()
        .setTitle('🤖 MODO IA')
        .setColor('#ff0040')
        .setDescription('Selecione qual jogo você quer jogar contra a IA:')
        .addFields({
          name: '💰 Premiação por vitória',
          value: 'Cada vitória contra IA = **+5 GP fixos** + XP bônus pelo seu nível.',
        });

      const msg = await interaction.editReply({ embeds: [embed], components: [row], fetchReply: true });
      try {
        const filtro = (i) => i.customId === 'jogos:sel_ia:jogo' && i.user.id === userId;
        const collected = await msg.awaitMessageComponent({ componentType: ComponentType.StringSelect, filter: filtro, time: 5 * 60 * 1000 });
        if (!collected) return;
        const jogoId = collected.values[0];
        const jogo = MINI_JOGOS.find(x => x.id === jogoId);
        try { await collected.deferReply({ ephemeral: true }); } catch (_) {}
        try { await collected.editReply({ content: `🎮 Carregando **${jogo?.nome || jogoId}**...`, components: [] }); } catch (_) {}
        if (!jogo) return;
        await self._startJogo({ interaction: collected, client, jogo, donoId: userId, oponente: null, apostaGP: 0 });
      } catch (err) {
        console.error('[modo_ia err]', err);
      }
      return;
    }

    if (modo === 'modo_rival') {
      await self._fluxoRival({ interaction, client, userId });
      return;
    }
  },

  async _fluxoRival({ interaction, client, userId }) {
    const self = this;
    const guildId = interaction.guildId;
    const jogos1v1 = MINI_JOGOS.filter(j => j.tipo === '1v1' || j.tipo === 'sorteio').slice(0, 25);

    const rowJogo = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('jogos:rival:jogo')
        .setPlaceholder('Passo 1: Escolha o jogo (1v1)')
        .addOptions(jogos1v1.map(j => ({ label: `${j.emoji} ${j.nome}`.slice(0, 95), value: j.id })))
    );
    const rowAposta = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId('jogos:rival:aposta')
        .setPlaceholder('Passo 2: Valor da aposta GP')
        .addOptions([
          { label: '10 GP (padrão)', value: '10' },
          { label: '50 GP', value: '50' },
          { label: '100 GP', value: '100' },
          { label: '500 GP', value: '500' },
          { label: '1000 GP', value: '1000' },
        ])
    );
    const rowBtns = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('jogos:rival:pronto')
        .setLabel('📨 Enviar convite para oponente')
        .setStyle(ButtonStyle.Success)
    );

    const embed = new EmbedBuilder()
      .setTitle('⚔️ MODO RIVAL — Criar desafio')
      .setColor('#ff0040')
      .setDescription('Siga os passos:')
      .addFields(
        { name: '1️⃣ Jogo', value: 'Selecione o jogo no menu.', inline: false },
        { name: '2️⃣ Aposta', value: 'Escolha o valor em GP.', inline: false },
        { name: '3️⃣ Clique no botão verde', value: 'Depois informe o @oponente.', inline: false }
      );

    const estado = { jogoId: null, apostaGP: 10 };
    const msg = await interaction.editReply({ embeds: [embed], components: [rowJogo, rowAposta, rowBtns], fetchReply: true });

    try {
      const col = msg.createMessageComponentCollector({ time: 10 * 60 * 1000, filter: (i) => i.user.id === userId });
      col.on('collect', async (i) => {
        try {
          if (i.customId === 'jogos:rival:jogo') {
            estado.jogoId = i.values[0];
            try { await i.deferUpdate(); } catch (_) {}
            const j = MINI_JOGOS.find(x => x.id === estado.jogoId);
            const novo = EmbedBuilder.from(embed).spliceFields(0, 3,
              { name: '1️⃣ Jogo ✅', value: `**${j?.emoji} ${j?.nome || estado.jogoId}**`, inline: true },
              { name: '2️⃣ Aposta', value: estado.apostaGP ? `**${estado.apostaGP} GP**` : 'Selecione no menu', inline: true },
              { name: '3️⃣ Enviar', value: 'Clique no botão verde quando tudo estiver certo.', inline: false }
            );
            await i.message.edit({ embeds: [novo] }).catch(() => {});
            return;
          }
          if (i.customId === 'jogos:rival:aposta') {
            estado.apostaGP = Number(i.values[0]);
            try { await i.deferUpdate(); } catch (_) {}
            const j = estado.jogoId ? MINI_JOGOS.find(x => x.id === estado.jogoId) : null;
            const novo = EmbedBuilder.from(embed).spliceFields(0, 3,
              { name: '1️⃣ Jogo', value: j ? `**${j.emoji} ${j.nome}**` : 'Selecione no menu', inline: true },
              { name: '2️⃣ Aposta ✅', value: `**${estado.apostaGP} GP**`, inline: true },
              { name: '3️⃣ Enviar', value: 'Clique no botão verde quando tudo estiver certo.', inline: false }
            );
            await i.message.edit({ embeds: [novo] }).catch(() => {});
            return;
          }
          if (i.customId === 'jogos:rival:pronto') {
            try { await i.deferReply({ ephemeral: true }); } catch (_) {}
            if (!estado.jogoId) {
              await i.editReply({ content: '❌ Selecione um jogo primeiro.' });
              return;
            }
            await self._enviarConviteRival({ interactionFromModal: i, client, userId, guildId, jogoId: estado.jogoId, apostaGP: estado.apostaGP });
            col.stop('pronto');
            return;
          }
        } catch (err) {
          console.error('[fluxo rival col err]', err);
        }
      });
    } catch (err) {
      console.error('[fluxoRival err]', err);
    }
  },

  async _enviarConviteRival({ interactionFromModal, client, userId, guildId, jogoId, apostaGP }) {
    const self = this;
    const jogo = MINI_JOGOS.find(j => j.id === jogoId);

    const ModalBuilder = require('discord.js').ModalBuilder;
    const TextInputBuilder = require('discord.js').TextInputBuilder;
    const TextInputStyle = require('discord.js').TextInputStyle;
    const ActionRowBuilder2 = require('discord.js').ActionRowBuilder;

    const modal = new ModalBuilder()
      .setCustomId('jogos:rival:modal_oponente')
      .setTitle(`⚔️ Desafiar: ${jogo?.nome || jogoId}`);

    const input = new TextInputBuilder()
      .setCustomId('oponente')
      .setLabel('Quem você quer desafiar?')
      .setStyle(TextInputStyle.Short)
      .setRequired(true)
      .setPlaceholder('Ex: @Usuario ou 123456789012345678');

    const inputAposta = new TextInputBuilder()
      .setCustomId('aposta_confirm')
      .setLabel(`Confirmar aposta (padrão ${apostaGP} GP)`)
      .setStyle(TextInputStyle.Short)
      .setRequired(false)
      .setPlaceholder(String(apostaGP));

    modal.addComponents(new ActionRowBuilder2().addComponents(input), new ActionRowBuilder2().addComponents(inputAposta));

    try {
      if (typeof interactionFromModal.showModal === 'function') {
        await interactionFromModal.showModal(modal);
      } else {
        await interaction.followUp({ content: '⚠️ Tente novamente.', ephemeral: true });
        return;
      }
      const submitted = await interactionFromModal.awaitModalSubmit({
        time: 5 * 60 * 1000,
        filter: (m) => m.customId === 'jogos:rival:modal_oponente' && m.user.id === userId,
      }).catch(() => null);
      if (!submitted) return;
      await submitted.deferReply({ ephemeral: true });

      const oponenteRaw = submitted.fields.getTextInputValue('oponente');
      const apostaConfirm = Number(submitted.fields.getTextInputValue('aposta_confirm')) || apostaGP;
      const apostaFinal = Math.max(10, apostaConfirm || 10);

      let oponenteId = null;
      if (oponenteRaw) {
        const menc = oponenteRaw.match(/^<@!?(\d+)>$/);
        if (menc) oponenteId = menc[1];
        else if (/^\d+$/.test(oponenteRaw)) oponenteId = oponenteRaw;
      }
      if (!oponenteId) { submitted.editReply('❌ Oponente inválido. Use @menção ou ID.'); return; }
      if (oponenteId === userId) { submitted.editReply('❌ Não pode desafiar você mesmo.'); return; }

      let oponenteUser = null;
      try { oponenteUser = await client.users.fetch(oponenteId); } catch(_) {}
      if (!oponenteUser || oponenteUser.bot) { submitted.editReply('❌ Oponente inválido.'); return; }

      const desafiadorUser = submitted.user || await client.users.fetch(userId).catch(() => null);
      const p1 = await db.getOrInitPlayer(userId, guildId);
      if ((Number(p1.coins_gp) || 0) < apostaFinal) {
        return submitted.editReply(`❌ Você não tem ${apostaFinal} GP. Saldo: **${Number(p1.coins_gp || 0)}**`);
      }
      const p2 = await db.getOrInitPlayer(oponenteId, guildId);
      if ((Number(p2.coins_gp) || 0) < apostaFinal) {
        return submitted.editReply(`❌ ${oponenteUser.tag} não tem ${apostaFinal} GP. Saldo dele: **${Number(p2.coins_gp || 0)}**`);
      }

      const canalOrigId = submitted.channelId || interactionFromModal.channelId;
      const guildOrigId = submitted.guildId || guildId;
      const inviteEmbed = new EmbedBuilder()
        .setTitle('⚔️ Você foi desafiado!')
        .setColor('#ff0040')
        .setDescription(
          `${desafiadorUser} desafiou você para jogar **${jogo?.emoji || '🎮'} ${jogo?.nome || jogoId}**!\n\n` +
          `💰 **Aposta:** ${apostaFinal} GP cada (vencedor leva ${apostaFinal * 2} GP!)\n\n` +
          `Clique em **Participar** para aceitar o duelo no canal original, ou **Recusar** para recusar.`
        )
        .setAuthor({ name: desafiadorUser?.tag || 'Alguém', iconURL: desafiadorUser?.displayAvatarURL({ dynamic: true }) });

      const botoes = new ActionRowBuilder2().addComponents(
        new ButtonBuilder()
          .setCustomId(`jogos:convite:aceitar:${submitted.id}:${jogoId}:${userId}:${oponenteId}:${apostaFinal}:${canalOrigId}:${guildOrigId}`)
          .setLabel('✅ Participar')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId(`jogos:convite:recusar:${submitted.id}:${jogoId}:${userId}:${oponenteId}:${apostaFinal}`)
          .setLabel('❌ Recusar')
          .setStyle(ButtonStyle.Danger)
      );

      try {
        await oponenteUser.send({ embeds: [inviteEmbed], components: [botoes] });
        await submitted.editReply(`✅ Convite enviado por DM para **${oponenteUser.tag}**! Jogo: ${jogo?.nome} • Aposta: ${apostaFinal} GP.`);
      } catch (errDM) {
        const canalOriginal = client.channels.cache.get(canalOrigId);
        if (canalOriginal) {
          await canalOriginal.send({ content: `${oponenteUser}`, embeds: [inviteEmbed], components: [botoes] });
          await submitted.editReply(`⚠️ DM do oponente está fechada, então enviei o convite no canal.`);
        } else {
          await submitted.editReply('❌ Não foi possível enviar o convite (DM fechada e não achei o canal).');
        }
      }
    } catch (err) {
      console.error('[enviarConviteRival err]', err);
    }
  },

  async handleButton(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('jogos:')) return false;
    const self = this;

    if (cid.startsWith('jogos:convite:')) {
      const partes = cid.split(':');
      const acao = partes[1];
      const jogoId = partes[3];
      const desafiadorId = partes[4];
      const desafiadoId = partes[5];
      const apostaGP = Number(partes[6]);
      const canalOrigId = partes[7] || null;
      const guildOrigId = partes[8] || null;
      const jogo = MINI_JOGOS.find(j => j.id === jogoId);

      if (interaction.user.id !== desafiadoId) {
        await interaction.reply({ content: '⚠️ Esse convite não é para você.', ephemeral: true });
        return true;
      }

      if (acao === 'recusar') {
        try { await interaction.deferUpdate(); } catch (_) {}
        try {
          const desafiadorUser = await client.users.fetch(desafiadorId).catch(() => null);
          if (desafiadorUser) {
            await desafiadorUser.send(`❌ **${interaction.user.tag}** recusou seu desafio de ${jogo ? jogo.nome : jogoId}.`).catch(() => {});
          }
        } catch (_) {}
        await interaction.message.edit({ content: '❌ Você recusou o desafio.', embeds: [], components: [] }).catch(() => {});
        return true;
      }

      if (acao === 'aceitar') {
        const gid = guildOrigId || interaction.guildId || (canalOrigId ? (client.channels.cache.get(canalOrigId)?.guild?.id) : null);
        if (!gid) {
          await interaction.reply({ content: '❌ Não consegui determinar o servidor do desafio.', ephemeral: true });
          return true;
        }
        try { await interaction.deferReply({ ephemeral: false }); } catch (_) { try { await interaction.deferUpdate(); } catch(_){} }
        const ok1 = await debitarAposta(gid, desafiadorId, apostaGP);
        const ok2 = await debitarAposta(gid, desafiadoId, apostaGP);
        if (!ok1 || !ok2) {
          if (!ok1) await db.addPlayerGP(desafiadoId, gid, apostaGP).catch(() => {});
          if (!ok2) await db.addPlayerGP(desafiadorId, gid, apostaGP).catch(() => {});
          try { await interaction.editReply({ content: '❌ Um dos jogadores não tem GP suficiente agora.' }); } catch (_) {}
          return true;
        }

        const targetChannel = canalOrigId ? (client.channels.cache.get(canalOrigId) || interaction.channel) : interaction.channel;
        const cmd = client.commands.get('jogos');

        const startInteraction = {
          guildId: gid,
          channelId: targetChannel.id,
          user: interaction.user,
          editReply: async (payload) => targetChannel.send(payload).catch(() => {}),
          reply: async (payload) => targetChannel.send(payload).catch(() => {}),
          followUp: async (payload) => targetChannel.send(payload).catch(() => {}),
          deferred: true,
          replied: true,
        };

        try {
          const desafiadorUser = await client.users.fetch(desafiadorId).catch(() => null);
          await targetChannel.send(`✅ Desafio aceito! ${jogo ? jogo.emoji + ' ' + jogo.nome : ''} • ${desafiadorUser || '<@' + desafiadorId + '>'} vs ${interaction.user}`).catch(() => {});
        } catch (_) {}

        try {
          if (cmd && typeof cmd._startJogo === 'function') {
            await cmd._startJogo({
              interaction: startInteraction,
              client,
              jogo,
              donoId: desafiadorId,
              oponente: desafiadoId,
              desafiado: desafiadorId,
              apostaGP: apostaGP,
              conviteDM: true,
            });
          }
        } catch (err) {
          console.error('[convite iniciar erro]', err);
        }
        try {
          await interaction.message.edit({ content: '✅ Desafio aceito! Voltando ao canal original...', embeds: [], components: [] }).catch(() => {});
        } catch (_) {}
        return true;
      }
    }

    if (cid.startsWith('jogos:painel:') || cid.startsWith('jogos:sel_') || cid.startsWith('jogos:rival:')) return true;

    if (cid.startsWith('jogos:') && cid.split(':').length > 2) {
      const partes = cid.split(':');
      const jogoId = partes[1];
      const jogo = MINI_JOGOS.find((j) => j.id === jogoId);
      if (!jogo) return false;
      const partida = pegarPartida(jogoId, interaction.channelId);
      if (!partida || typeof partida.handleButton !== 'function') return false;
      try {
        await partida.handleButton(interaction, client, partes.slice(2));
        return true;
      } catch (err) {
        console.error('[jogos handleButton jogo ' + jogoId + ']', err);
        if (!interaction.replied && !interaction.deferred) {
          await interaction.reply({ content: '⚠️ Erro interno no jogo.', ephemeral: true }).catch(() => {});
        }
        return true;
      }
    }

    return false;
  },

  async handleSelectMenu(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('jogos:')) return false;
    const partes = cid.split(':');
    if (partes[1] === 'jogarselect' || partes[1] === 'extcat' ||
        partes[1] === 'painel' || partes[1] === 'sel_ia' || partes[1] === 'sel_rival' || partes[1] === 'rival') return true;
    const jogoId = partes[1];
    const partida = pegarPartida(jogoId, interaction.channelId);
    if (!partida || typeof partida.handleSelectMenu !== 'function') return false;
    try {
      await partida.handleSelectMenu(interaction, client, partes.slice(2));
      return true;
    } catch (err) {
      console.error('[jogos handleSelectMenu]', err);
      return true;
    }
  },

  async handleModalSubmit(interaction, client) {
    if (!interaction.customId || !interaction.customId.startsWith('jogos:')) return false;
    return true;
  },

  async _startJogo({ interaction, client, jogo, donoId, oponente, desafiado, apostaGP, conviteDM = false }) {
    const partidaHandlers = {
      ppt: require('./games/ppt.js'),
      pptspock: require('./games/ppt.js'),
      caracoroa: require('./games/carasimples.js'),
      parouimpar: require('./games/carasimples.js'),
      dados: require('./games/carasimples.js'),
      verdade: require('./games/carasimples.js'),
      forca: require('./games/forca.js'),
      quiz: require('./games/quiz.js'),
      roleta: require('./games/quiz.js'),
      blackjack: require('./games/forca.js'),
      adivinha: require('./games/forca.js'),
      memoria: require('./games/memoria.js'),
      batalhanaval: require('./games/memoria.js'),
      conecta4: require('./games/memoria.js'),
      roletacores: require('./games/roletacores.js'),
    };
    const mod = partidaHandlers[jogo.id];
    if (!mod || typeof mod.criar !== 'function') {
      const fall = interaction && interaction.editReply
        ? interaction.editReply
        : (interaction && interaction.reply ? interaction.reply : null);
      if (fall) {
        await fall(`⚠️ **${jogo.nome}** está em construção. Jogue os clássicos como PPT ou Forca por enquanto.`);
      }
      return;
    }
    try {
      if (interaction && interaction.deferred && interaction.editReply && !conviteDM) {
        try {
          await interaction.editReply({
            content: `🎮 **${jogo.emoji} ${jogo.nome}** • Iniciando partida...`,
            embeds: [],
            components: [],
          }).catch(() => {});
        } catch (_) {}
      }
      const partida = await mod.criar({
        interaction,
        client,
        jogo,
        donoId,
        oponente,
        desafiado: desafiado || donoId,
        apostaGP: apostaGP || 0,
        conviteDM: !!conviteDM,
      });
      if (partida) {
        partida._jogoId = jogo.id;
        partida._canalId = interaction && interaction.channelId;
        registrarPartida(
          interaction.guildId || (interaction.guild && interaction.guild.id),
          interaction.channelId,
          jogo.id,
          partida
        );
      }
    } catch (err) {
      console.error('[jogos _startJogo erro ' + jogo.id + ']', err);
      const fall = interaction && interaction.editReply
        ? interaction.editReply
        : (interaction && interaction.followUp ? interaction.followUp : null);
      if (fall) await fall('❌ Erro ao iniciar jogo: ' + String(err.message || err).slice(0, 300));
    }
  },
};


})(__mod_obj_cmd_jogos__, __mod_obj_cmd_jogos__.exports, __makeReq_cmd_jogos__, path.dirname(path.resolve(process.cwd(), "commands/jogos.js")), path.resolve(process.cwd(), "commands/jogos.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_jogos = __mod_obj_cmd_jogos__.exports;

const __makeReq_cmd_loja__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/loja.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_loja__ = { exports: __BOT_MODULE__.cmd_loja };
// -------- commands/loja.js --------
(function (module, exports, require, __dirname, __filename) {
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, ComponentType, PermissionFlagsBits, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const db = require('../database');
const { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, sortearPremio } = require('../lib/achievements');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const COR = '#ff0040';
const CUSTO_ROLETA = 50;
const _estadoSelecao = new Map();

function chaveEstado(interId, userId) {
  return `${interId}:${userId}`;
}

function buildLojaPrincipalEmbed(saldo) {
  return new EmbedBuilder()
    .setTitle('🛒 LOJA GAMER — Títulos, Cores e Roleta')
    .setColor(COR)
    .setDescription(
      `💰 **Seu saldo:** 🪙 **${Number(saldo).toLocaleString('pt-BR')} GP**\n\n` +
      `Selecione uma **categoria** abaixo para começar a comprar!\n\n` +
      `**👑 Títulos (${TITULOS_LOJA.length} opções)**\n` +
      `   Personalize seu perfil com títulos exclusivos.\n\n` +
      `**🎨 Cores (${CORES_LOJA.length} opções)**\n` +
      `   Mude a cor do seu embed de perfil.\n\n` +
      `**🎰 Roleta da Sorte (${CUSTO_ROLETA} GP/giro)**\n` +
      `   Prêmios: 20 a 1500 GP, XP, títulos e cores grátis!`
    )
    .setThumbnail('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=neon%20red%20shopping%20cart%20with%20coins%20gaming%20style%20dark%20background&image_size=square')
    .setFooter({ text: '💡 Selecione a categoria no menu abaixo 👇' })
    .setTimestamp();
}

function buildTitulosEmbed(saldo, selecionadoId) {
  const selecionado = selecionadoId ? TITULOS_LOJA.find((t) => t.id === selecionadoId) : null;
  const linhas = TITULOS_LOJA.map((t) => {
    const sel = selecionadoId === t.id ? ' ✅ **SELECIONADO**' : '';
    return `• **${t.nome}** — 🪙 **${t.preco} GP**${sel}`;
  });

  return new EmbedBuilder()
    .setTitle('👑 Loja — Títulos Exclusivos (' + TITULOS_LOJA.length + ')')
    .setColor(COR)
    .setDescription(
      `💰 Seu saldo: **🪙 ${Number(saldo).toLocaleString('pt-BR')} GP**\n\n` +
      linhas.join('\n')
    )
    .addFields(
      selecionado
        ? {
            name: '✅ Item Selecionado',
            value:
              `**${selecionado.nome}**\n` +
              `Preço: 🪙 **${selecionado.preco} GP**\n\n` +
              `Clique no botão **🛒 COMPRAR** abaixo e confirme no modal!`,
          }
        : {
            name: '👉 Escolha um título',
            value: 'Selecione um título no menu de opções abaixo para poder comprar.',
          }
    )
    .setFooter({ text: '🎓 Após a compra, o título é aplicado automaticamente no seu /perfil' })
    .setTimestamp();
}

function buildCoresEmbed(saldo, selecionadoId) {
  const selecionado = selecionadoId ? CORES_LOJA.find((c) => c.id === selecionadoId) : null;
  const linhas = CORES_LOJA.map((c) => {
    const sel = selecionadoId === c.id ? ' ✅ **SELECIONADO**' : '';
    return `• **${c.nome}** \`${c.cor}\` — 🪙 **${c.preco} GP**${sel}`;
  });

  return new EmbedBuilder()
    .setTitle('🎨 Loja — Cores de Embed (' + CORES_LOJA.length + ')')
    .setColor(COR)
    .setDescription(
      `💰 Seu saldo: **🪙 ${Number(saldo).toLocaleString('pt-BR')} GP**\n\n` +
      linhas.join('\n')
    )
    .addFields(
      selecionado
        ? {
            name: '✅ Item Selecionado',
            value:
              `**${selecionado.nome}** — \`${selecionado.cor}\`\n` +
              `Preço: 🪙 **${selecionado.preco} GP**\n\n` +
              `Clique no botão **🛒 COMPRAR** abaixo e confirme no modal!`,
          }
        : {
            name: '👉 Escolha uma cor',
            value: 'Selecione uma cor no menu de opções abaixo para poder comprar.',
          }
    )
    .setFooter({ text: '🌈 A cor aparece no seu embed de perfil! Use /perfil para conferir' })
    .setTimestamp();
}

function buildRoletaEmbed(saldo) {
  const premiosLinha = [
    `• 🟢 20–100 GP (mais comum)`,
    `• 🟡 200 GP • 💠 100–250 XP`,
    `• 🟠 🥷 Título Ninja • 🔥 500 GP`,
    `• 🔴 Cor Roxa • 💎 **JACKPOT 1500 GP**`,
  ].join('\n');

  const suficiente = saldo >= CUSTO_ROLETA;

  return new EmbedBuilder()
    .setTitle('🎰 Roleta da Sorte — Gire e Ganhe!')
    .setColor(COR)
    .setDescription(
      `💰 Seu saldo: **🪙 ${Number(saldo).toLocaleString('pt-BR')} GP**\n` +
      `💸 Custo por giro: **🪙 ${CUSTO_ROLETA} GP**\n\n` +
      `**🎁 Possíveis prêmios:**\n${premiosLinha}\n\n` +
      (suficiente
        ? `✅ Você tem saldo! Clique em **🎰 GIRAR ROLETA** abaixo.`
        : `❌ **Saldo insuficiente!** Você precisa de mais ${(CUSTO_ROLETA - saldo).toLocaleString('pt-BR')} GP.`)
    )
    .setImage('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=neon%20red%20casino%20roulette%20wheel%20with%20gold%20coins%20dark%20background&image_size=landscape_4_3')
    .setFooter({ text: '🍀 Boa sorte! Cada giro é único...' })
    .setTimestamp();
}

async function aplicarPremioRoleta(userId, guildId, premio) {
  let msgPremio = '';
  let saldoApos = null;

  if (premio.tipo === 'gp') {
    saldoApos = await db.addPlayerGP(userId, guildId, premio.valor);
    msgPremio = `🪙 **+${premio.valor} GP** adicionados à sua conta!`;
    if (premio.valor >= 500) {
      const unlocked = await db.unlockAchievement(userId, 'AC24');
      if (unlocked) {
        const def = ACHIEVEMENTS.AC24;
        await db.addPlayerGP(userId, guildId, def.gpReward);
        if (saldoApos != null) saldoApos = Number(saldoApos) + def.gpReward;
        msgPremio += `\n🏅 **Conquista desbloqueada:** ${def.nome} (+${def.gpReward} GP bônus!)`;
      }
    }
  } else if (premio.tipo === 'xp') {
    await db.addPlayerXP(userId, guildId, premio.valor, null, 0);
    msgPremio = `💠 **+${premio.valor} XP** adicionados à sua conta!`;
  } else if (premio.tipo === 'titulo') {
    const item = TITULOS_LOJA.find((t) => t.id === premio.valor);
    if (item) {
      await db.setPlayerTitulo(userId, guildId, item.nome);
      msgPremio = `👑 Título **${item.nome}** desbloqueado e equipado automaticamente!`;
    } else {
      msgPremio = `🎁 Prêmio especial: ${premio.nome}`;
    }
  } else if (premio.tipo === 'cor') {
    const item = CORES_LOJA.find((c) => c.id === premio.valor);
    if (item) {
      await db.setPlayerEmbedColor(userId, guildId, item.cor);
      msgPremio = `🎨 Cor **${item.nome} (${item.cor})** desbloqueada e aplicada!`;
    } else {
      msgPremio = `🎁 Prêmio especial: ${premio.nome}`;
    }
  }

  return { msgPremio, saldoApos };
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loja')
    .setDescription('🛒 Loja gamer: títulos, cores e roleta com GamoPoints')
    .addSubcommand((s) => s.setName('titulos').setDescription('👑 Ver e comprar títulos exclusivos'))
    .addSubcommand((s) => s.setName('cores').setDescription('🎨 Ver e comprar cores de embed'))
    .addSubcommand((s) => s.setName('roleta').setDescription(`🎰 Gire a roleta por apenas ${CUSTO_ROLETA} GP!`)),

  async execute(interaction, client) {
    try {
      await interaction.deferReply();
      const guildId = interaction.guildId;
      const userId = interaction.user.id;
      const interId = interaction.id;

      const player = await db.getOrInitPlayer(userId, guildId);
      const saldoAtual = Number(player.coins_gp) || 0;

      let sub;
      try {
        sub = interaction.options.getSubcommand(false);
      } catch (_) {
        sub = null;
      }

      if (!sub) {
        const categoriasOptions = [
          { label: '👑 Títulos', description: `${TITULOS_LOJA.length} opções — personalize seu perfil`, value: 'titulos' },
          { label: '🎨 Cores de Embed', description: `${CORES_LOJA.length} cores — mude seu perfil`, value: 'cores' },
          { label: `🎰 Roleta da Sorte (${CUSTO_ROLETA} GP)`, description: 'Prêmios de 20 a 1500 GP + XP + itens grátis', value: 'roleta' },
        ];

        const row = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('loja:cat:' + interId)
            .setPlaceholder('👉 Escolha uma categoria da loja')
            .addOptions(categoriasOptions)
        );

        const msg = await interaction.editReply({
          embeds: [buildLojaPrincipalEmbed(saldoAtual)],
          components: [row],
          fetchReply: true,
        });

        const col = msg.createMessageComponentCollector({
          componentType: ComponentType.StringSelect,
          time: 15 * 60 * 1000,
          filter: (i) => i.user.id === userId,
        });

        col.on('collect', async (i) => {
          try {
            await i.deferUpdate();
            const cat = i.values[0];
            _estadoSelecao.delete(chaveEstado(interId, userId));

            if (cat === 'titulos') {
              await _abrirTitulos(i, interId, guildId, userId, null);
            } else if (cat === 'cores') {
              await _abrirCores(i, interId, guildId, userId, null);
            } else if (cat === 'roleta') {
              await _abrirRoleta(i, interId, guildId, userId);
            }
          } catch (err) {
            console.error('[loja cat collect err]', err);
          }
        });

        col.on('end', () => {
          interaction.editReply({ components: [] }).catch(() => {});
        });

        return;
      }

      if (sub === 'titulos') {
        await _abrirTitulos(interaction, interId, guildId, userId, null);
        return;
      }

      if (sub === 'cores') {
        await _abrirCores(interaction, interId, guildId, userId, null);
        return;
      }

      if (sub === 'roleta') {
        await _abrirRoleta(interaction, interId, guildId, userId);
        return;
      }
    } catch (err) {
      console.error('[loja error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 1500));
      } catch (_) {}
    }
  },

  async handleSelectMenu(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('loja:')) return false;
    const partes = cid.split(':');
    if (partes.length < 3) return false;
    const tipo = partes[1];
    const interId = partes[2];
    const userId = interaction.user.id;
    const guildId = interaction.guildId;

    try {
      if (tipo === 'item-tit') {
        await interaction.deferUpdate();
        const selId = interaction.values[0];
        await _abrirTitulos(interaction, interId, guildId, userId, selId);
        return true;
      }

      if (tipo === 'item-cor') {
        await interaction.deferUpdate();
        const selId = interaction.values[0];
        await _abrirCores(interaction, interId, guildId, userId, selId);
        return true;
      }

      return false;
    } catch (err) {
      console.error('[loja handleSelect err]', err);
      return true;
    }
  },

  async handleButton(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('loja:')) return false;
    const partes = cid.split(':');
    if (partes.length < 3) return false;
    const tipo = partes[1];
    const interId = partes[2];
    const userId = interaction.user.id;
    const guildId = interaction.guildId;

    try {
      if (tipo === 'comprar') {
        const estado = _estadoSelecao.get(chaveEstado(interId, userId));
        if (!estado || !estado.item) {
          await interaction.reply({ content: '⚠️ Selecione um item primeiro!', ephemeral: true });
          return true;
        }
        const item = estado.item;
        const listaCategoria = estado.categoria === 'titulo' ? TITULOS_LOJA : CORES_LOJA;
        const realItem = listaCategoria.find((x) => x.id === item.id);
        if (!realItem) {
          await interaction.reply({ content: '⚠️ Item inválido.', ephemeral: true });
          return true;
        }

        const modal = new ModalBuilder()
          .setCustomId(`loja:confirmar:${interId}`)
          .setTitle(`Confirmar Compra — ${realItem.nome}`);

        const confirmInput = new TextInputBuilder()
          .setCustomId('confirm_txt')
          .setLabel(`Digite "CONFIRMAR" para pagar ${realItem.preco} GP`)
          .setStyle(TextInputStyle.Short)
          .setPlaceholder('Escreva: CONFIRMAR')
          .setMinLength(9)
          .setMaxLength(15)
          .setRequired(true);

        const obsInput = new TextInputBuilder()
          .setCustomId('obs_txt')
          .setLabel('Observação (opcional)')
          .setStyle(TextInputStyle.Paragraph)
          .setPlaceholder('Deixe vazio se não quiser adicionar nada...')
          .setMaxLength(200)
          .setRequired(false);

        modal.addComponents(
          new ActionRowBuilder().addComponents(confirmInput),
          new ActionRowBuilder().addComponents(obsInput)
        );

        _estadoSelecao.set(chaveEstado(interId, userId), {
          ...estado,
          item: realItem,
        });

        await interaction.showModal(modal);
        return true;
      }

      if (tipo === 'girar') {
        await interaction.deferReply({ ephemeral: false });
        const player = await db.getOrInitPlayer(userId, guildId);
        const saldo = Number(player.coins_gp) || 0;

        if (saldo < CUSTO_ROLETA) {
          return interaction.editReply(
            `❌ Saldo insuficiente! A roleta custa **🪙 ${CUSTO_ROLETA} GP** e você só tem **🪙 ${saldo.toLocaleString('pt-BR')} GP**.`
          );
        }

        await db.addPlayerGP(userId, guildId, -CUSTO_ROLETA);
        const premio = sortearPremio();
        const { msgPremio, saldoApos } = await aplicarPremioRoleta(userId, guildId, premio);

        const unlockedCompra = await db.unlockAchievement(userId, 'AC23');
        let bonusMsg = '';
        let saldoFinal = saldoApos;
        if (unlockedCompra) {
          const def = ACHIEVEMENTS.AC23;
          const s = await db.addPlayerGP(userId, guildId, def.gpReward);
          if (saldoFinal != null) saldoFinal = Number(s);
          bonusMsg = `\n🏅 **Conquista desbloqueada:** ${def.nome} (+${def.gpReward} GP bônus!)`;
        }

        if (saldoFinal == null) {
          const p2 = await db.getOrInitPlayer(userId, guildId);
          saldoFinal = Number(p2.coins_gp) || 0;
        }

        const embedResult = new EmbedBuilder()
          .setTitle('🎰 Roleta da Sorte — Resultado!')
          .setColor(COR)
          .setDescription(
            `🎲 Você girou a roleta por **🪙 ${CUSTO_ROLETA} GP**...\n\n` +
            `✨ **PRÊMIO:** ${premio.nome} ✨\n\n` +
            `${msgPremio}${bonusMsg}`
          )
          .addFields({
            name: '💰 Saldo após o giro',
            value: `🪙 **${Number(saldoFinal).toLocaleString('pt-BR')} GP**`,
            inline: true,
          })
          .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true, size: 128 }))
          .setFooter({ text: '🍀 Jogue novamente com /loja roleta!' });

        return interaction.editReply({ embeds: [embedResult] });
      }

      return false;
    } catch (err) {
      console.error('[loja handleButton err]', err);
      if (!interaction.replied && !interaction.deferred) {
        try {
          await interaction.reply({ content: '❌ Erro no botão da loja.', ephemeral: true });
        } catch (_) {}
      }
      return true;
    }
  },

  async handleModal(interaction, client) {
    const cid = interaction.customId;
    if (!cid.startsWith('loja:')) return false;
    const partes = cid.split(':');
    if (partes.length < 3 || partes[1] !== 'confirmar') return false;
    const interId = partes[2];
    const userId = interaction.user.id;
    const guildId = interaction.guildId;

    try {
      await interaction.deferReply({ ephemeral: false });
      const confirmTxt = (interaction.fields.getTextInputValue('confirm_txt') || '').trim().toUpperCase();
      if (confirmTxt !== 'CONFIRMAR') {
        return interaction.editReply('❌ Compra cancelada. Você não digitou "CONFIRMAR" corretamente.');
      }

      const estado = _estadoSelecao.get(chaveEstado(interId, userId));
      if (!estado || !estado.item) {
        return interaction.editReply('⚠️ Nenhum item selecionado para comprar.');
      }
      const item = estado.item;
      const categoria = estado.categoria;

      const player = await db.getOrInitPlayer(userId, guildId);
      if ((Number(player.coins_gp) || 0) < item.preco) {
        return interaction.editReply(
          `❌ **Saldo insuficiente!**\n\n` +
          `**${item.nome}** custa 🪙 **${item.preco} GP**.\n` +
          `Seu saldo atual: 🪙 **${Number(player.coins_gp).toLocaleString('pt-BR')} GP**.\n` +
          `Faltam: 🪙 **${(item.preco - Number(player.coins_gp)).toLocaleString('pt-BR')} GP**.`
        );
      }

      const compra = await db.shopPurchase(userId, guildId, item.id, categoria, item.preco, item.nome);
      if (!compra.ok) {
        return interaction.editReply(`❌ Falha na compra: ${compra.motivo || 'Erro desconhecido'}`);
      }

      if (categoria === 'titulo') {
        await db.setPlayerTitulo(userId, guildId, item.nome);
      } else if (categoria === 'cor') {
        await db.setPlayerEmbedColor(userId, guildId, item.cor);
      }

      let saldoFinal = Number(compra.novoSaldo) || 0;
      const unlocked = await db.unlockAchievement(userId, 'AC23');
      let bonusMsg = '';
      if (unlocked) {
        const def = ACHIEVEMENTS.AC23;
        const s = await db.addPlayerGP(userId, guildId, def.gpReward);
        saldoFinal = Number(s);
        bonusMsg = `\n🏅 **Conquista desbloqueada:** ${def.nome} (+${def.gpReward} GP bônus!)`;
      }

      _estadoSelecao.delete(chaveEstado(interId, userId));

      const embed = new EmbedBuilder()
        .setTitle('✅ COMPRA EFETUADA COM SUCESSO!')
        .setColor(COR)
        .setDescription(
          `${interaction.user}, você comprou:\n\n` +
          `${categoria === 'titulo' ? '👑' : '🎨'} **${item.nome}**\n` +
          (categoria === 'cor' ? `Cor: \`${item.cor}\`\n` : '') +
          `💸 Preço pago: 🪙 **${item.preco} GP**`
        )
        .addFields(
          {
            name: '📥 O que você recebe',
            value:
              categoria === 'titulo'
                ? `Título **${item.nome}** aplicado imediatamente no seu perfil!\nUse \`/perfil\` para ver.`
                : `Cor **${item.nome} (${item.cor})** aplicada aos seus embeds!\nUse \`/perfil\` para ver.`,
            inline: true,
          },
          {
            name: '💰 Novo saldo',
            value: `🪙 **${saldoFinal.toLocaleString('pt-BR')} GP**`,
            inline: true,
          }
        )
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true, size: 128 }))
        .setFooter({ text: '🛒 Agradecemos pela compra! Volte sempre à loja.' })
        .setTimestamp();

      if (bonusMsg) {
        embed.addFields({ name: '🎁 Bônus', value: bonusMsg.slice(0, 1020), inline: false });
      }

      return interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error('[loja handleModal err]', err);
      try {
        await interaction.editReply('❌ Erro ao processar modal: ' + String(err.message || err).slice(0, 1500));
      } catch (_) {}
      return true;
    }
  },
};

async function _abrirTitulos(interacaoOrigem, interId, guildId, userId, selecionadoId) {
  const player = await db.getOrInitPlayer(userId, guildId);
  const saldo = Number(player.coins_gp) || 0;

  const opcoes = TITULOS_LOJA.map((t) => ({
    label: `${t.nome}`.slice(0, 95),
    description: `🪙 ${t.preco} GP`.slice(0, 95),
    value: t.id,
    default: t.id === selecionadoId,
  }));

  const rowSelect = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('loja:item-tit:' + interId)
      .setPlaceholder('👉 Selecione um título para comprar')
      .addOptions(opcoes)
  );

  const podeComprar = !!selecionadoId;
  const btnComprar = new ButtonBuilder()
    .setCustomId('loja:comprar:' + interId)
    .setLabel('🛒 COMPRAR')
    .setStyle(podeComprar ? ButtonStyle.Danger : ButtonStyle.Secondary)
    .setDisabled(!podeComprar)
    .setEmoji('🔴');

  const rowBtn = new ActionRowBuilder().addComponents(btnComprar);

  if (selecionadoId) {
    _estadoSelecao.set(chaveEstado(interId, userId), {
      categoria: 'titulo',
      item: TITULOS_LOJA.find((t) => t.id === selecionadoId) || null,
    });
  }

  const target = interacaoOrigem.update || interacaoOrigem.editReply;
  await target.call(interacaoOrigem, {
    embeds: [buildTitulosEmbed(saldo, selecionadoId)],
    components: [rowSelect, rowBtn],
  });
}

async function _abrirCores(interacaoOrigem, interId, guildId, userId, selecionadoId) {
  const player = await db.getOrInitPlayer(userId, guildId);
  const saldo = Number(player.coins_gp) || 0;

  const opcoes = CORES_LOJA.map((c) => ({
    label: `${c.nome}`.slice(0, 95),
    description: `🪙 ${c.preco} GP — ${c.cor}`.slice(0, 95),
    value: c.id,
    default: c.id === selecionadoId,
  }));

  const rowSelect = new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('loja:item-cor:' + interId)
      .setPlaceholder('👉 Selecione uma cor para comprar')
      .addOptions(opcoes)
  );

  const podeComprar = !!selecionadoId;
  const btnComprar = new ButtonBuilder()
    .setCustomId('loja:comprar:' + interId)
    .setLabel('🛒 COMPRAR')
    .setStyle(podeComprar ? ButtonStyle.Danger : ButtonStyle.Secondary)
    .setDisabled(!podeComprar)
    .setEmoji('🔴');

  const rowBtn = new ActionRowBuilder().addComponents(btnComprar);

  if (selecionadoId) {
    _estadoSelecao.set(chaveEstado(interId, userId), {
      categoria: 'cor',
      item: CORES_LOJA.find((c) => c.id === selecionadoId) || null,
    });
  }

  const target = interacaoOrigem.update || interacaoOrigem.editReply;
  await target.call(interacaoOrigem, {
    embeds: [buildCoresEmbed(saldo, selecionadoId)],
    components: [rowSelect, rowBtn],
  });
}

async function _abrirRoleta(interacaoOrigem, interId, guildId, userId) {
  const player = await db.getOrInitPlayer(userId, guildId);
  const saldo = Number(player.coins_gp) || 0;
  const pode = saldo >= CUSTO_ROLETA;

  const btn = new ButtonBuilder()
    .setCustomId('loja:girar:' + interId)
    .setLabel(`🎰 GIRAR ROLETA (${CUSTO_ROLETA} GP)`)
    .setStyle(pode ? ButtonStyle.Danger : ButtonStyle.Secondary)
    .setDisabled(!pode)
    .setEmoji('🍀');

  const row = new ActionRowBuilder().addComponents(btn);
  _estadoSelecao.delete(chaveEstado(interId, userId));

  const target = interacaoOrigem.update || interacaoOrigem.editReply;
  await target.call(interacaoOrigem, {
    embeds: [buildRoletaEmbed(saldo)],
    components: [row],
  });
}


})(__mod_obj_cmd_loja__, __mod_obj_cmd_loja__.exports, __makeReq_cmd_loja__, path.dirname(path.resolve(process.cwd(), "commands/loja.js")), path.resolve(process.cwd(), "commands/loja.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_loja = __mod_obj_cmd_loja__.exports;

const __makeReq_cmd_addgp__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/addgp.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_addgp__ = { exports: __BOT_MODULE__.cmd_addgp };
// -------- commands/addgp.js --------
(function (module, exports, require, __dirname, __filename) {
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, ComponentType, PermissionFlagsBits } = require('discord.js');
const db = require('../database');
const { ACHIEVEMENTS, TITULOS_LOJA, CORES_LOJA, sortearPremio } = require('../lib/achievements');
const { MINI_JOGOS, JOGOS_EXTERNOS } = require('../lib/gamesInfo');

const COR = '#ff0040';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addgp')
    .setDescription('💰 STAFF — Adicionar GamoPoints (GP) e XP a um membro')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addUserOption((o) =>
      o.setName('usuario').setDescription('Usuário que vai receber os GP').setRequired(true)
    )
    .addIntegerOption((o) =>
      o.setName('quantidade').setDescription('Quantidade de GP para adicionar (≥ 0)').setRequired(true).setMinValue(0)
    ),

  async execute(interaction, client) {
    try {
      await interaction.deferReply();
      const guildId = interaction.guildId;
      const staffId = interaction.user.id;
      const staffTag = interaction.user.tag;

      const usuario = interaction.options.getUser('usuario');
      const quantidade = Math.max(0, Number(interaction.options.getInteger('quantidade')) || 0);

      if (!usuario) {
        return interaction.editReply('❌ Usuário inválido.');
      }
      if (usuario.bot) {
        return interaction.editReply('❌ Bots não podem receber GP.');
      }

      const cfg = await db.getGuildConfig(guildId);
      const xpPorGp = Number(cfg?.xp_por_gp) || 10;

      const novoSaldoGP = await db.addPlayerGP(usuario.id, guildId, quantidade);
      const xpGanho = quantidade > 0 ? xpPorGp * quantidade : 0;
      const resultadoXP = xpGanho > 0
        ? await db.addPlayerXP(usuario.id, guildId, xpGanho, null, 0)
        : null;

      const player = await db.getOrInitPlayer(usuario.id, guildId);
      const novoNivel = resultadoXP?.nivel || player?.nivel || 1;
      const novoXP = resultadoXP?.global_xp || player?.global_xp || 0;

      const membro = await interaction.guild.members.fetch(usuario.id).catch(() => null);
      const apelido = membro?.nickname || usuario.username || usuario.tag;
      const membroStaff = await interaction.guild.members.fetch(staffId).catch(() => null);
      const staffApelido = membroStaff?.nickname || staffTag;

      const embed = new EmbedBuilder()
        .setTitle('💰 GamoPoints Adicionados — STAFF')
        .setColor(COR)
        .setDescription(`**Operação realizada por staff:** ${interaction.user}\n\`${staffApelido}\``)
        .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 256 }))
        .addFields(
          {
            name: '👤 Membro Beneficiado',
            value: `${usuario}\n\`${apelido}\`\nID: \`${usuario.id}\``,
            inline: true,
          },
          {
            name: '💸 Quantidade Creditada',
            value:
              `🪙 **+${quantidade.toLocaleString('pt-BR')} GP**\n` +
              `💠 **+${xpGanho.toLocaleString('pt-BR')} XP**\n` +
              `📘 Conversão: 1 GP = ${xpPorGp} XP`,
            inline: true,
          },
          {
            name: '📊 Novo Saldo do Usuário',
            value:
              `🪙 **${(novoSaldoGP || 0).toLocaleString('pt-BR')} GP**\n` +
              `💠 **${Number(novoXP).toLocaleString('pt-BR')} XP**\n` +
              `⭐ Nível **${novoNivel}**`,
            inline: false,
          }
        )
        .setFooter({ text: `Transação STAFF — ${new Date().toLocaleString('pt-BR')}` })
        .setTimestamp();

      return interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error('[addgp error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 1500));
      } catch (_) {}
    }
  },
};


})(__mod_obj_cmd_addgp__, __mod_obj_cmd_addgp__.exports, __makeReq_cmd_addgp__, path.dirname(path.resolve(process.cwd(), "commands/addgp.js")), path.resolve(process.cwd(), "commands/addgp.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_addgp = __mod_obj_cmd_addgp__.exports;

const __makeReq_cmd_rankjogo__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/rankjogo.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_rankjogo__ = { exports: __BOT_MODULE__.cmd_rankjogo };
// -------- commands/rankjogo.js --------
(function (module, exports, require, __dirname, __filename) {
const db = require('../database');
const { TRACKER_JOGOS } = require('../lib/gamesInfo');
const axios = require('axios');
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ComponentType,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rankjogo')
    .setDescription('🎯 Veja estatísticas e rank de jogos reais via Tracker.gg')
    .addStringOption((o) =>
      o
        .setName('jogo')
        .setDescription('Qual jogo você quer consultar?')
        .setRequired(true)
        .addChoices(
          ...TRACKER_JOGOS.slice(0, 25).map((j) => ({
            name: `${j.emoji} ${j.nome}`,
            value: j.id,
          }))
        )
    )
    .addStringOption((o) =>
      o.setName('nick').setDescription('Nickname / ID do jogador no jogo').setRequired(true)
    )
    .addStringOption((o) =>
      o
        .setName('plataforma')
        .setDescription('Plataforma (opcional, padrão = PC/Steam)')
        .setRequired(false)
        .addChoices(
          { name: '💻 PC (Steam / Epic / Riot)', value: 'pc' },
          { name: '🎮 PlayStation (PSN)', value: 'psn' },
          { name: '🎮 Xbox Live', value: 'xbl' },
          { name: '📱 Mobile / Geral', value: 'generic' }
        )
    ),

  async execute(interaction) {
    try {
      await interaction.deferReply();
      const jogoId = interaction.options.getString('jogo');
      const nick = interaction.options.getString('nick');
      const plataforma = interaction.options.getString('plataforma') || 'pc';

      const jogo = TRACKER_JOGOS.find((j) => j.id === jogoId);
      if (!jogo) {
        return interaction.editReply('❌ Jogo não encontrado na lista de trackeamento.');
      }
      if (!nick || nick.trim().length < 2) {
        return interaction.editReply('❌ Nick inválido, forneça pelo menos 2 caracteres.');
      }

      const apiKey = process.env.TRACKERGG_API_KEY || '';

      if (!apiKey || apiKey.trim() === '' || apiKey.includes('sua_chave') || apiKey === 'SUA_CHAVE_AQUI') {
        const embed = new EmbedBuilder()
          .setTitle(`${jogo.emoji} ${jogo.nome} — Perfil de ${nick}`)
          .setColor('#ff0040')
          .setDescription(
            `🔑 **API Key do Tracker.gg não configurada.**\n\n` +
            `Você ainda pode ver o perfil diretamente no site do Tracker:\n\n` +
            `🔗 **Abrir perfil:** [Clique Aqui](${jogo.link}/profile/${encodeURIComponent(nick)})\n\n` +
            `---\n\n` +
            `**⚙️ Como configurar a API Key (dados automáticos):**\n\n` +
            `1. Acesse: https://tracker.gg/developers\n` +
            `2. Crie uma conta gratuita e gere uma **API Key**.\n` +
            `3. Abra o arquivo **\`.env.local\`** na raiz do projeto.\n` +
            `4. Adicione a linha abaixo substituindo pela sua chave:\n` +
            `\`\`\`\nTRACKERGG_API_KEY=sua_chave_aqui\n\`\`\`\n` +
            `5. Reinicie o bot e rode o comando novamente! 🎉`
          )
          .setFooter({ text: `Plataforma informada: ${plataforma.toUpperCase()}` });
        return interaction.editReply({ embeds: [embed] });
      }

      let baseUrl;
      const nickEncoded = encodeURIComponent(nick);
      const platEncoded = encodeURIComponent(plataforma);

      if (jogoId === 'rocket') {
        baseUrl = `https://public-api.tracker.gg/v2/rocket-league/standard/profile/${platEncoded}/${nickEncoded}`;
      } else if (jogoId === 'cs2') {
        baseUrl = `https://public-api.tracker.gg/v2/csgo/standard/profile/${platEncoded}/${nickEncoded}`;
      } else if (jogoId === 'lol') {
        baseUrl = `https://public-api.tracker.gg/v2/lol/standard/profile/br/${nickEncoded}`;
      } else if (jogoId === 'cod') {
        baseUrl = `https://public-api.tracker.gg/v2/cod/warzone/profile/${platEncoded}/${nickEncoded}`;
      } else {
        baseUrl = `https://public-api.tracker.gg/v2/${jogoId}/standard/profile/${platEncoded}/${nickEncoded}`;
      }

      let resposta = null;
      let erroHttp = null;

      try {
        resposta = await axios.get(baseUrl, {
          headers: {
            'TRN-Api-Key': apiKey.trim(),
            'Accept': 'application/json',
          },
          timeout: 15000,
        });
      } catch (err) {
        erroHttp = err;
        if (err && err.response) {
          const st = err.response.status;
          const data = err.response.data;
          let msg = `HTTP ${st}`;
          if (data && data.errors && data.errors.length) {
            msg += ' — ' + data.errors.map((e) => e.message || String(e)).join('; ');
          } else if (data && data.message) {
            msg += ' — ' + data.message;
          }
          erroHttp = msg;
        } else if (err && err.code === 'ECONNABORTED') {
          erroHttp = '⏰ Tempo esgotado (servidor do Tracker demorou demais).';
        } else if (err && err.code) {
          erroHttp = `Erro de rede: ${err.code}`;
        } else {
          erroHttp = String(err.message || err);
        }
      }

      const linkPerfil = `${jogo.link}/profile/${nickEncoded}`;

      if (!resposta || !resposta.data) {
        const embed = new EmbedBuilder()
          .setTitle(`${jogo.emoji} ${jogo.nome} — ${nick}`)
          .setColor('#ff0040')
          .setDescription(
            `⚠️ **Não foi possível buscar os dados via API.**\n\n` +
            `Motivo: \`${String(erroHttp || 'Erro desconhecido').slice(0, 200)}\`\n\n` +
            `Possíveis causas:\n` +
            `• Nick/Plataforma incorretos (confira se não tem typo)\n` +
            `• Perfil privado no jogo\n` +
            `• Tracker.gg está fora do ar\n` +
            `• Jogador nunca logou no Tracker\n\n` +
            `🔗 **Abrir perfil manualmente:** [Clique Aqui](${linkPerfil})`
          )
          .setFooter({ text: `Tente: /rankjogo ${jogoId} "nick_correto" ${plataforma}` });
        return interaction.editReply({ embeds: [embed] });
      }

      const data = resposta.data && resposta.data.data ? resposta.data.data : {};
      const platformInfo = data.platformInfo || {};
      const userInfo = data.userInfo || {};
      const segments = data.segments || [];

      const nomeExibicao = userInfo.username || platformInfo.platformUserHandle || nick;
      const avatar = platformInfo.avatarUrl || userInfo.avatarUrl || null;

      const overall = segments.find((s) => s.type === 'overview') || segments[0] || {};
      const stats = (overall && overall.stats) ? overall.stats : {};

      function getStat(key, fallback) {
        const s = stats[key];
        if (!s) return fallback;
        return s.displayValue != null ? s.displayValue : (s.value != null ? s.value : fallback);
      }
      function getStatNum(key, fallback) {
        const s = stats[key];
        if (!s) return fallback;
        const v = Number(s.value);
        return isNaN(v) ? fallback : v;
      }

      const rankNome =
        getStat('rankName', null) ||
        getStat('tierName', null) ||
        getStat('leagueName', null) ||
        getStat('competitiveTier', null) ||
        'Não classificado';

      const rankImg =
        getStat('rankIconUrl', null) ||
        (stats.rank && stats.rank.metadata && stats.rank.metadata.iconUrl ? stats.rank.metadata.iconUrl : null);

      let kda = null;
      const kills = getStatNum('kills', null);
      const deaths = getStatNum('deaths', null);
      const assists = getStatNum('assists', null);
      if (kills != null || deaths != null || assists != null) {
        const k = kills || 0;
        const d = Math.max(1, deaths || 0);
        const a = assists || 0;
        kda = ((k + a) / d).toFixed(2);
      } else {
        const kdaBruto = getStat('kda', null);
        if (kdaBruto) kda = String(kdaBruto);
      }

      let winrate = null;
      const wins = getStatNum('wins', null);
      const losses = getStatNum('losses', null);
      const matches = getStatNum('matches', null) || ((wins || 0) + (losses || 0));
      if (wins != null && matches > 0) {
        winrate = Math.round((wins / matches) * 100) + '%';
      } else {
        const wr = getStat('winRate', null);
        if (wr != null) winrate = String(wr).includes('%') ? String(wr) : String(wr) + '%';
      }

      const level = getStat('level', null) || getStat('accountLevel', null);
      const mmr = getStat('mmr', null) || getStat('rating', null) || getStat('skillRating', null);
      const tempoJogado = getStat('timePlayed', null) || getStat('playtime', null);
      const killsTotal = getStat('kills', null);
      const deathsTotal = getStat('deaths', null);
      const assistsTotal = getStat('assists', null);

      const campos = [];
      campos.push({ name: '🏆 Rank / Tier', value: String(rankNome || 'Não disponível'), inline: true });
      if (mmr != null) campos.push({ name: '📊 MMR / Pontos', value: String(mmr), inline: true });
      if (level != null) campos.push({ name: '⭐ Nível', value: String(level), inline: true });
      if (kda != null) campos.push({ name: '💥 KDA', value: String(kda), inline: true });
      if (winrate != null) campos.push({ name: '📈 Winrate', value: String(winrate), inline: true });
      if (matches > 0) campos.push({ name: '🎮 Partidas', value: String(matches), inline: true });
      if (tempoJogado != null) campos.push({ name: '⏱️ Tempo jogado', value: String(tempoJogado), inline: true });
      if (killsTotal != null) campos.push({ name: '💀 Kills totais', value: String(killsTotal), inline: true });
      if (deathsTotal != null) campos.push({ name: '☠️ Mortes', value: String(deathsTotal), inline: true });
      if (assistsTotal != null) campos.push({ name: '🤝 Assistências', value: String(assistsTotal), inline: true });

      const embed = new EmbedBuilder()
        .setTitle(`${jogo.emoji} ${jogo.nome} — ${nomeExibicao}`)
        .setURL(linkPerfil)
        .setColor('#ff0040')
        .setDescription(
          `📋 Estatísticas do jogador **${nomeExibicao}** (plataforma: ${plataforma.toUpperCase()})\n\n` +
          `🔗 **Ver perfil completo no Tracker.gg**: [Clique Aqui](${linkPerfil})`
        )
        .addFields(campos.slice(0, 25))
        .setFooter({ text: `Fonte: Tracker.gg API • Dados atualizados em tempo real` })
        .setTimestamp();

      if (avatar) embed.setAuthor({ name: nomeExibicao, iconURL: avatar });
      if (rankImg) embed.setThumbnail(rankImg);
      else if (avatar) embed.setThumbnail(avatar);

      return interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error('[rankjogo error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 200));
      } catch (_) {}
    }
  },
};


})(__mod_obj_cmd_rankjogo__, __mod_obj_cmd_rankjogo__.exports, __makeReq_cmd_rankjogo__, path.dirname(path.resolve(process.cwd(), "commands/rankjogo.js")), path.resolve(process.cwd(), "commands/rankjogo.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_rankjogo = __mod_obj_cmd_rankjogo__.exports;

const __makeReq_cmd_conquistas__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/conquistas.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_conquistas__ = { exports: __BOT_MODULE__.cmd_conquistas };
// -------- commands/conquistas.js --------
(function (module, exports, require, __dirname, __filename) {
const db = require('../database');
const { ACHIEVEMENTS } = require('../lib/achievements');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('conquistas')
    .setDescription('🏅 Veja todas as conquistas do jogador')
    .addUserOption((o) =>
      o.setName('usuario').setDescription('Usuário para ver conquistas (deixe vazio para você)').setRequired(false)
    ),

  async execute(interaction) {
    try {
      await interaction.deferReply();
      const guildId = interaction.guildId;
      const usuario = interaction.options.getUser('usuario') || interaction.user;

      if (usuario.bot) {
        return interaction.editReply('❌ Bots não têm conquistas.');
      }

      await db.getOrInitPlayer(usuario.id, guildId);
      const conquistasDesbloqueadas = await db.getAchievements(usuario.id);

      const idsDesbloqueados = new Set(conquistasDesbloqueadas.map((c) => c.achievement_id));
      const mapData = new Map(conquistasDesbloqueadas.map((c) => [c.achievement_id, c.unlocked_at]));

      const totalConquistas = Object.keys(ACHIEVEMENTS).length;
      const desbloqueadasCount = idsDesbloqueados.size;
      const progresso = Math.round((desbloqueadasCount / totalConquistas) * 100);

      const todasIds = Object.keys(ACHIEVEMENTS);
      const linhas = [];

      for (const id of todasIds) {
        const def = ACHIEVEMENTS[id];
        if (!def) continue;
        const desbloqueada = idsDesbloqueados.has(id);
        const data = mapData.get(id);
        const dataStr = data ? ` — *${new Date(data).toLocaleDateString('pt-BR')}*` : '';
        const gpBonus = def.gpReward ? ` (+${def.gpReward} GP)` : '';
        const emoji = desbloqueada ? '✅' : '❌';
        linhas.push(
          `${emoji} **${def.nome}**${dataStr}\n` +
          `   *${def.desc}*${gpBonus}`
        );
      }

      const membro = await interaction.guild.members.fetch(usuario.id).catch(() => null);
      const apelido = membro?.nickname || usuario.username || usuario.tag;

      const paginas = [];
      const chunkSize = 5;
      for (let i = 0; i < linhas.length; i += chunkSize) {
        paginas.push(linhas.slice(i, i + chunkSize));
      }

      const paginaAtual = 0;
      const embed = new EmbedBuilder()
        .setTitle(`🏅 Conquistas de ${apelido} — ${desbloqueadasCount}/${totalConquistas} (${progresso}%)`)
        .setColor('#ff0040')
        .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 128 }))
        .setDescription(
          `**Progresso:**\n\`${'█'.repeat(Math.round(progresso / 5))}${'░'.repeat(20 - Math.round(progresso / 5))}\` **${progresso}%**\n\n` +
          paginas[paginaAtual].join('\n\n')
        )
        .setFooter({ text: `Página ${paginaAtual + 1}/${paginas.length} • Clique na lista para mudar de página` });

      const options = paginas.map((_, idx) => ({
        label: `Página ${idx + 1} (conquistas ${idx * chunkSize + 1}-${Math.min((idx + 1) * chunkSize, linhas.length)})`.slice(0, 90),
        value: String(idx),
      }));

      const { ActionRowBuilder, StringSelectMenuBuilder, ComponentType } = require('discord.js');
      const row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('conq:pag:' + interaction.id)
          .setPlaceholder('👉 Ir para página...')
          .addOptions(options)
      );

      const msg = await interaction.editReply({ embeds: [embed], components: [row], fetchReply: true });

      try {
        const col = msg.createMessageComponentCollector({
          componentType: ComponentType.StringSelect,
          time: 10 * 60 * 1000,
          filter: (i) => i.customId === 'conq:pag:' + interaction.id && i.user.id === interaction.user.id,
        });
        col.on('collect', async (i) => {
          const idx = Number(i.values[0]) || 0;
          const novoEmbed = new EmbedBuilder()
            .setTitle(`🏅 Conquistas de ${apelido} — ${desbloqueadasCount}/${totalConquistas} (${progresso}%)`)
            .setColor('#ff0040')
            .setThumbnail(usuario.displayAvatarURL({ dynamic: true, size: 128 }))
            .setDescription(
              `**Progresso:**\n\`${'█'.repeat(Math.round(progresso / 5))}${'░'.repeat(20 - Math.round(progresso / 5))}\` **${progresso}%**\n\n` +
              paginas[idx].join('\n\n')
            )
            .setFooter({ text: `Página ${idx + 1}/${paginas.length}` });
          await i.update({ embeds: [novoEmbed] });
        });
        col.on('end', () => {
          interaction.editReply({ components: [] }).catch(() => {});
        });
      } catch (_) {}
    } catch (err) {
      console.error('[conquistas error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 200));
      } catch (_) {}
    }
  },
};


})(__mod_obj_cmd_conquistas__, __mod_obj_cmd_conquistas__.exports, __makeReq_cmd_conquistas__, path.dirname(path.resolve(process.cwd(), "commands/conquistas.js")), path.resolve(process.cwd(), "commands/conquistas.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_conquistas = __mod_obj_cmd_conquistas__.exports;

const __makeReq_cmd_rivalidade__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "commands/rivalidade.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_cmd_rivalidade__ = { exports: __BOT_MODULE__.cmd_rivalidade };
// -------- commands/rivalidade.js --------
(function (module, exports, require, __dirname, __filename) {
const db = require('../database');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rivalidade')
    .setDescription('⚔️ Veja a rivalidade entre você e outro membro')
    .addUserOption((o) =>
      o.setName('usuario').setDescription('Usuário para comparar a rivalidade').setRequired(true)
    ),

  async execute(interaction) {
    try {
      await interaction.deferReply();
      const guildId = interaction.guildId;
      const user1 = interaction.user;
      const user2 = interaction.options.getUser('usuario');

      if (user2.bot) {
        return interaction.editReply('❌ Bots não têm rivalidades.');
      }
      if (user2.id === user1.id) {
        return interaction.editReply('❌ Você não pode ter rivalidade com você mesmo.');
      }

      const p1 = await db.getOrInitPlayer(user1.id, guildId);
      const p2 = await db.getOrInitPlayer(user2.id, guildId);
      const rivalidade = await db.getRivalidade(guildId, user1.id, user2.id);

      const elo1 = Number(p1.global_elo) || 1000;
      const elo2 = Number(p2.global_elo) || 1000;
      const diffElo = elo1 - elo2;
      const diffStr = diffElo > 0
        ? `+${diffElo} para você`
        : diffElo < 0
          ? `${diffElo} (${user2.username} na frente)`
          : 'Empate técnico!';

      if (!rivalidade) {
        const embed = new EmbedBuilder()
          .setTitle('⚔️ Rivalidade: Ainda Não Houve')
          .setColor('#ff0040')
          .setDescription(
            `${user1} vs ${user2}\n\n` +
            `Ainda **nenhuma partida** foi jogada entre vocês dois.\n` +
            `Desafie ${user2} usando \`/jogos desafio @${user2.username}\` para começar uma rivalidade lendária!`
          )
          .addFields(
            { name: `${user1.username} ELO`, value: `⚔️ **${elo1}**`, inline: true },
            { name: `${user2.username} ELO`, value: `⚔️ **${elo2}**`, inline: true },
            { name: 'Diferença de ELO', value: `📊 ${diffStr}`, inline: false }
          )
          .setThumbnail(user2.displayAvatarURL({ dynamic: true, size: 128 }))
          .setFooter({ text: 'Quando jogarem 5+ partidas a rivalidade fica oficial 🔥' });
        return interaction.editReply({ embeds: [embed] });
      }

      const w1 = Number(rivalidade.user1_wins) || 0;
      const w2 = Number(rivalidade.user2_wins) || 0;
      const emp = Number(rivalidade.empates) || 0;
      const total = Number(rivalidade.total) || (w1 + w2 + emp);
      const ultimoMatch = rivalidade.ultimo_match
        ? new Date(rivalidade.ultimo_match).toLocaleString('pt-BR')
        : 'Desconhecido';

      const liderStr = w1 > w2
        ? `🏆 Você está na frente por **${w1 - w2}** vitórias!`
        : w2 > w1
          ? `😱 ${user2.username} está na frente por **${w2 - w1}** vitórias!`
          : '🤝 Empate perfeito no placar!';

      const mensagemRival = total >= 5 ? '\n\n⚔️ **RIVAL!** Essa já é uma rivalidade oficial do servidor!' : '';

      const embed = new EmbedBuilder()
        .setTitle(`⚔️ Rivalidade: ${user1.username} vs ${user2.username}`)
        .setColor('#ff0040')
        .setDescription(
          `Placar atual entre vocês dois:\n\n` +
          `✅ Vitórias suas: **${w1}**\n` +
          `❌ Vitórias dele: **${w2}**\n` +
          `🤝 Empates: **${emp}**\n\n` +
          `🎮 **Total de partidas:** ${total}\n` +
          `${liderStr}${mensagemRival}`
        )
        .addFields(
          { name: `${user1.username} ELO`, value: `⚔️ **${elo1}**`, inline: true },
          { name: `${user2.username} ELO`, value: `⚔️ **${elo2}**`, inline: true },
          { name: 'Diferença de ELO', value: `📊 ${diffStr}`, inline: false },
          { name: '⏰ Último Confronto', value: ultimoMatch, inline: false }
        )
        .setThumbnail(user1.displayAvatarURL({ dynamic: true, size: 128 }))
        .setFooter({ text: `Use /jogos desafio @${user2.username} para aumentar essa rivalidade!` });

      await interaction.editReply({ embeds: [embed] });
    } catch (err) {
      console.error('[rivalidade error]', err);
      try {
        await interaction.editReply('❌ Erro interno: ' + String(err.message || err).slice(0, 200));
      } catch (_) {}
    }
  },
};


})(__mod_obj_cmd_rivalidade__, __mod_obj_cmd_rivalidade__.exports, __makeReq_cmd_rivalidade__, path.dirname(path.resolve(process.cwd(), "commands/rivalidade.js")), path.resolve(process.cwd(), "commands/rivalidade.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.cmd_rivalidade = __mod_obj_cmd_rivalidade__.exports;

const __makeReq_events_ready__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "events/ready.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_events_ready__ = { exports: __BOT_MODULE__.events_ready };
// -------- events/ready.js --------
(function (module, exports, require, __dirname, __filename) {
const { Events, ActivityType, EmbedBuilder } = require('discord.js');
const { initGuild, getGuildConfig, getRanking, getAllGuildConfigs, updateGuildConfig, findRoleForLevel, listLevelRoles, dbEvents } = require('../database');

async function renderRankingEmbed(guildId, client, cfg, rows) {
  const medalhas = ['🥇', '🥈', '🥉'];
  const linhas = rows.map((r, i) => {
    const medal = medalhas[i] || `#${i + 1}`;
    const uid = r.user_id;
    const tag = client.users.cache.get(uid)?.tag || `<@${uid}>`;
    const xp = Number(r.xp) || 0;
    const elo = Number(r.elo) || 0;
    const v = Number(r.v) || 0, d = Number(r.d) || 0, e = Number(r.e) || 0;
    const total = v + d + e;
    const wr = total > 0 ? `${Math.round((v / total) * 100)}%` : '-';
    return `${medal} **${tag}**\n\`XP:\` ${xp.toLocaleString('pt-BR')} • \`ELO:\` ${Math.round(elo)} • \`W/D/E:\` ${v}/${d}/${e} • \`WR:\` ${wr}`;
  });
  const guildName = client.guilds.cache.get(guildId)?.name || 'Servidor';
  return new EmbedBuilder()
    .setTitle(`🏆 Ranking Automático • Top 10 • ${guildName}`)
    .setColor('#ff0040')
    .setDescription(rows.length ? linhas.join('\n\n') : '😢 Ainda ninguém pontuou! Jogue um jogo para aparecer aqui.')
    .setFooter({ text: `🕐 Atualizado em: ${new Date().toLocaleString('pt-BR')}` })
    .setTimestamp();
}

async function tickRanking(client) {
  try {
    const cfgs = await getAllGuildConfigs();
    if (!Array.isArray(cfgs) || !cfgs.length) return;
    for (const cfg of cfgs) {
      const gid = cfg.guild_id;
      if (!gid || !cfg.ranking_channel_id) continue;
      const guild = client.guilds.cache.get(gid);
      if (!guild) continue;
      const canal = client.channels.cache.get(cfg.ranking_channel_id);
      if (!canal || !canal.isTextBased?.()) continue;
      const rows = await getRanking(gid, null, 10, false);
      const embed = await renderRankingEmbed(gid, client, cfg, rows);
      try {
        if (cfg.ranking_message_id) {
          try {
            const msg = await canal.messages.fetch(cfg.ranking_message_id);
            if (msg && msg.editable) { await msg.edit({ embeds: [embed] }); continue; }
          } catch (_) {}
        }
        const msg = await canal.send({ embeds: [embed] });
        try { await updateGuildConfig(gid, { ranking_message_id: msg.id }); } catch (_) {}
      } catch (e) { console.error('[tickRanking send err gid=' + gid, e.message); }
    }
  } catch (e) { console.error('[tickRanking err]', e.message); }
}

async function processarLevelUp({ userId, guildId, nivelAntigo, nivelNovo, xpNovo }, client) {
  try {
    const cfg = await getGuildConfig(guildId);
    const guild = client.guilds.cache.get(guildId);
    if (!guild) return;
    const user = await client.users.fetch(userId).catch(() => null);
    if (!user) return;
    const membro = await guild.members.fetch(userId).catch(() => null);
    const nickAtual = membro?.nickname || user.username || user.tag;

    let roleAntigaObj = null;
    let roleNovaObj = null;

    const sistemaLigado = cfg?.cargos_niveis_enabled ? true : false;
    if (sistemaLigado) {
      const roleAnt = await findRoleForLevel(guildId, nivelAntigo);
      const roleNov = await findRoleForLevel(guildId, nivelNovo);
      if (roleAnt?.role_id) roleAntigaObj = await guild.roles.fetch(roleAnt.role_id).catch(() => null);
      if (roleNov?.role_id) roleNovaObj = await guild.roles.fetch(roleNov.role_id).catch(() => null);

      if (membro) {
        const rolesParaRemover = [];
        try {
          const listaTodos = await listLevelRoles(guildId);
          const idSet = new Set(listaTodos.map(r => r.role_id));
          for (const rid of membro.roles.cache.keys()) {
            if (idSet.has(rid) && rid !== (roleNov?.role_id || '')) rolesParaRemover.push(rid);
          }
        } catch (_) {}
        if (rolesParaRemover.length) {
          try {
            await membro.roles.remove(rolesParaRemover, `Subiu de nível (Nv.${nivelNovo}) — removendo cargos de níveis anteriores`);
          } catch (e) {
            console.warn('[levelUp remove roles err]', e.message);
          }
        }
        if (roleNovaObj && !membro.roles.cache.has(roleNovaObj.id)) {
          try {
            await membro.roles.add(roleNovaObj, `Subiu para Nível ${nivelNovo} — parabéns!`);
          } catch (e) {
            console.warn('[levelUp add role err]', e.message);
          }
        }
      }
    }

    const corEmbed = '#ff0040';
    const embed = new EmbedBuilder()
      .setAuthor({ name: `${nickAtual}`, iconURL: user.displayAvatarURL({ dynamic: true }) })
      .setTitle(`🎉 PARABÉNS! Subiu para o NÍVEL ${nivelNovo}!`)
      .setColor(corEmbed)
      .setThumbnail('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=shiny%20neon%20red%20level%20up%20star%20sparkles%20gold%20trophy%20dark%20background&image_size=square')
      .setDescription(
        `**💥 UP DE NÍVEL!** 🎊\n\n` +
        `${user.toString()} acaba de subir do **Nível ${nivelAntigo}** para o **Nível ${nivelNovo}**!\n\n` +
        `✨ **Conquista:** mais um marco na sua jornada gamer!\n` +
        `💠 **XP Total:** ${Number(xpNovo || 0).toLocaleString('pt-BR')}\n\n` +
        `${sistemaLigado
          ? (roleNovaObj
              ? `🎖️ **Novo cargo recebido:** ${roleNovaObj.toString()}!\n` +
                (roleAntigaObj && roleAntigaObj.id !== roleNovaObj.id ? `⬇️ **Cargo anterior removido:** ${roleAntigaObj.toString()}` : '')
              : `💭 Continue jogando para alcançar o primeiro cargo por nível!`)
          : `💡 O sistema de cargos por nível está **DESLIGADO**. Use \`/config cargosniveis on\` para ativar.`}`
      )
      .addFields({
        name: '🏆 Continue evoluindo!',
        value: 'Jogue partidas, ganhe XP, suba de nível e desbloqueie recompensas exclusivas no servidor!',
      })
      .setFooter({ text: `💡 ${guild.name} — Continue assim e logo você estará no Top 10 do ranking!` })
      .setTimestamp();

    let enviou = false;
    if (cfg?.nivel_up_channel_id) {
      const canal = await client.channels.fetch(cfg.nivel_up_channel_id).catch(() => null);
      if (canal && canal.isTextBased?.()) {
        try {
          await canal.send({ content: `🎉 ${user.toString()} subiu de nível!`, embeds: [embed] });
          enviou = true;
        } catch (e) {
          console.warn('[levelUp canal send err]', e.message);
        }
      }
    }
    if (!enviou) {
      try {
        await user.send({ embeds: [embed] }).catch(() => {});
      } catch (e) {
        console.warn('[levelUp dm send err]', e.message);
      }
    }
  } catch (e) {
    console.error('[processarLevelUp err]', e.message);
  }
}

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log('\n========================================');
    console.log(`  Logado como ${client.user.tag}!`);
    console.log(`  ID: ${client.user.id}`);
    console.log('========================================\n');

    const guildList = [];
    for (const guild of client.guilds.cache.values()) {
      initGuild(guild.id);
      guildList.push(`  • ${guild.name} (${guild.memberCount} membros) — ID: ${guild.id}`);
    }

    console.log(`📋 Servidores conectados (${guildList.length}):`);
    if (guildList.length) console.log(guildList.join('\n'));
    console.log('\n----------------------------------------');
    console.log(`✅ ${client.commands.size} comandos carregados`);
    console.log('Use /ajuda para ver todos os comandos');
    console.log('----------------------------------------\n');

    dbEvents.on('levelUp', (payload) => {
      setImmediate(() => processarLevelUp(payload, client));
    });

    const activities = [
      { name: '/jogos listar 🎮', type: ActivityType.Playing },
      { name: '/perfil 👤', type: ActivityType.Watching },
      { name: `${client.guilds.cache.size} servidores`, type: ActivityType.Competing },
    ];
    let idx = 0;

    client.user.setPresence({ activities: [activities[0]], status: 'online' });
    setInterval(() => {
      idx = (idx + 1) % activities.length;
      client.user.setPresence({ activities: [activities[idx]], status: 'online' });
    }, 30_000);

    setTimeout(() => tickRanking(client), 4000);
    setInterval(() => tickRanking(client), 10 * 60 * 1000);
  },
};


})(__mod_obj_events_ready__, __mod_obj_events_ready__.exports, __makeReq_events_ready__, path.dirname(path.resolve(process.cwd(), "events/ready.js")), path.resolve(process.cwd(), "events/ready.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.events_ready = __mod_obj_events_ready__.exports;

const __makeReq_events_interactionCreate__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "events/interactionCreate.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_events_interactionCreate__ = { exports: __BOT_MODULE__.events_interactionCreate };
// -------- events/interactionCreate.js --------
(function (module, exports, require, __dirname, __filename) {
const { Events } = require('discord.js');

function aplicarAutoDeleteNaInteracao(interaction, client) {
  try {
    const guildId = interaction.guildId || (interaction.guild && interaction.guild.id) || null;
    if (!guildId || !client?.utils?.scheduleDelete) return;

    const _reply = interaction.reply.bind(interaction);
    interaction.reply = async function replyAutoDel(options) {
      const isEphemeral = options && typeof options === 'object' && options.ephemeral === true;
      const resposta = await _reply(options);
      if (!isEphemeral && resposta) {
        client.utils.scheduleDelete(resposta, guildId).catch(() => {});
      }
      return resposta;
    };

    const _editReply = interaction.editReply.bind(interaction);
    interaction.editReply = async function editReplyAutoDel(options) {
      const isEphemeral = options && typeof options === 'object' && options.ephemeral === true;
      const resposta = await _editReply(options);
      if (!isEphemeral && resposta) {
        client.utils.scheduleDelete(resposta, guildId).catch(() => {});
      }
      return resposta;
    };

    const _followUp = interaction.followUp.bind(interaction);
    interaction.followUp = async function followUpAutoDel(options) {
      const isEphemeral = options && typeof options === 'object' && options.ephemeral === true;
      const resposta = await _followUp(options);
      if (!isEphemeral && resposta) {
        client.utils.scheduleDelete(resposta, guildId).catch(() => {});
      }
      return resposta;
    };
  } catch (_) {}
}

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, client) {
    aplicarAutoDeleteNaInteracao(interaction, client);
    try {
      if (interaction.isChatInputCommand()) {
        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) {
          return interaction
            .reply({
              content: '❌ Este comando não está registrado no bot. Tente novamente em alguns segundos.',
              ephemeral: true,
            })
            .catch(() => {});
        }
        try {
          if (!interaction.deferred && !interaction.replied) {
            try {
              await cmd.execute(interaction, client);
            } catch (err) {
              if (!interaction.deferred && !interaction.replied) {
                await interaction
                  .reply({
                    content:
                      '❌ Erro ao executar: ```' +
                      String(err.message || err).slice(0, 1800) +
                      '```',
                    ephemeral: true,
                  })
                  .catch(() => {});
              } else {
                await interaction
                  .followUp({
                    content:
                      '❌ Erro: ```' +
                      String(err.message || err).slice(0, 1800) +
                      '```',
                    ephemeral: true,
                  })
                  .catch(() => {});
              }
              console.error('[CMD ERRO]', interaction.commandName, err);
            }
          }
        } catch (topErr) {
          console.error('[TOP LEVEL interactionCreate cmd]', topErr);
        }
        return;
      }

      if (interaction.isAutocomplete()) {
        const cmd = client.commands.get(interaction.commandName);
        if (!cmd) return;
        if (typeof cmd.autocomplete === 'function') {
          try {
            await cmd.autocomplete(interaction, client);
            return;
          } catch (err) {
            console.error('[AUTOCOMPLETE ERRO]', interaction.commandName, err);
            return;
          }
        }
        if (typeof cmd.handleAutocomplete === 'function') {
          try {
            await cmd.handleAutocomplete(interaction, client);
          } catch (err) {
            console.error('[HANDLE AUTOCOMPLETE ERRO]', interaction.commandName, err);
          }
        }
        return;
      }

      if (interaction.isButton()) {
        let handled = false;
        for (const cmd of client.commands.values()) {
          if (typeof cmd.handleButton === 'function') {
            try {
              const result = await cmd.handleButton(interaction, client);
              if (result === true) {
                handled = true;
                break;
              }
            } catch (err) {
              console.error('[BUTTON ERRO]', interaction.customId, err);
              if (!interaction.replied && !interaction.deferred) {
                try {
                  await interaction
                    .reply({
                      content:
                        '❌ Erro ao processar botão: ```' +
                        String(err.message || err).slice(0, 1800) +
                        '```',
                      ephemeral: true,
                    })
                    .catch(() => {});
                } catch (_) {}
                handled = true;
                break;
              }
            }
          }
        }
        if (!handled && !interaction.replied && !interaction.deferred) {
          await interaction
            .reply({ content: '⏹️ Este botão expirou ou não é válido.', ephemeral: true })
            .catch(() => {});
        }
        return;
      }

      if (interaction.isStringSelectMenu()) {
        let handled = false;
        for (const cmd of client.commands.values()) {
          if (typeof cmd.handleSelectMenu === 'function') {
            try {
              const result = await cmd.handleSelectMenu(interaction, client);
              if (result === true) {
                handled = true;
                break;
              }
            } catch (err) {
              console.error('[SELECT MENU ERRO]', interaction.customId, err);
              if (!interaction.replied && !interaction.deferred) {
                try {
                  await interaction
                    .reply({
                      content:
                        '❌ Erro ao processar menu: ```' +
                        String(err.message || err).slice(0, 1800) +
                        '```',
                      ephemeral: true,
                    })
                    .catch(() => {});
                } catch (_) {}
                handled = true;
                break;
              }
            }
          }
        }
        if (!handled && !interaction.replied && !interaction.deferred) {
          await interaction
            .reply({ content: '⏹️ Este menu expirou ou não é válido.', ephemeral: true })
            .catch(() => {});
        }
        return;
      }

      if (interaction.isModalSubmit()) {
        const prefix = interaction.customId.split(':')[0];
        const cmd = client.commands.get(prefix);
        if (cmd && typeof cmd.handleModal === 'function') {
          try {
            await cmd.handleModal(interaction, client);
          } catch (err) {
            console.error('[MODAL ERRO]', interaction.customId, err);
            const payload = {
              content:
                '❌ Erro ao processar formulário: ```' +
                String(err.message || err).slice(0, 1800) +
                '```',
              ephemeral: true,
            };
            if (interaction.replied || interaction.deferred) {
              await interaction.followUp(payload).catch(() => {});
            } else {
              await interaction.reply(payload).catch(() => {});
            }
          }
          return;
        }
        if (!interaction.replied && !interaction.deferred) {
          await interaction
            .reply({ content: '⏹️ Formulário inválido ou comando não encontrado.', ephemeral: true })
            .catch(() => {});
        }
        return;
      }
    } catch (e) {
      console.error('[interactionCreate CRASH]', e);
      if (!interaction.replied && !interaction.deferred) {
        await interaction
          .reply({
            content: '⚠️ Erro crítico no tratamento da interação.',
            ephemeral: true,
          })
          .catch(() => {});
      }
    }
  },
};


})(__mod_obj_events_interactionCreate__, __mod_obj_events_interactionCreate__.exports, __makeReq_events_interactionCreate__, path.dirname(path.resolve(process.cwd(), "events/interactionCreate.js")), path.resolve(process.cwd(), "events/interactionCreate.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.events_interactionCreate = __mod_obj_events_interactionCreate__.exports;

const __makeReq_index__ = (function makeRequire(baseDir){
  const path = require('path');
  const builtinLibs = new Set(['fs','path','url','util','events','stream','zlib','crypto','http','https','os','process','buffer','assert','querystring','tty','net','tls','perf_hooks','node:fs','node:path','node:events','node:util','node:stream','node:zlib','node:crypto','node:http','node:https','node:os','node:process','node:buffer']);
  const modMap = {
      "./database": "__BOT_MODULE__.database",
      "../database": "__BOT_MODULE__.database",
      "../../database": "__BOT_MODULE__.database",
      "./deploy-commands": "__BOT_MODULE__.deployCommands",
      "./lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "../lib/gamesInfo": "__BOT_MODULE__.gamesInfo",
      "./lib/achievements": "__BOT_MODULE__.achievements",
      "../lib/achievements": "__BOT_MODULE__.achievements",
      "./events/ready": "__BOT_MODULE__.events_ready",
      "./events/interactionCreate": "__BOT_MODULE__.events_interactionCreate",
      "./commands/ajuda": "__BOT_MODULE__.cmd_ajuda",
      "./commands/gp": "__BOT_MODULE__.cmd_gp",
      "./commands/perfil": "__BOT_MODULE__.cmd_perfil",
      "./commands/config": "__BOT_MODULE__.cmd_config",
      "./commands/paineljogos": "__BOT_MODULE__.cmd_paineljogos",
      "./commands/jogos": "__BOT_MODULE__.cmd_jogos",
      "./commands/loja": "__BOT_MODULE__.cmd_loja",
      "./commands/addgp": "__BOT_MODULE__.cmd_addgp",
      "./commands/rankjogo": "__BOT_MODULE__.cmd_rankjogo",
      "./commands/conquistas": "__BOT_MODULE__.cmd_conquistas",
      "./commands/rivalidade": "__BOT_MODULE__.cmd_rivalidade",
      "./commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "../commands/games/ppt": "__BOT_MODULE__.game_ppt",
      "./commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "../commands/games/carasimples": "__BOT_MODULE__.game_carasimples",
      "./commands/games/forca": "__BOT_MODULE__.game_forca",
      "../commands/games/forca": "__BOT_MODULE__.game_forca",
      "./commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "../commands/games/quiz": "__BOT_MODULE__.game_quiz",
      "./commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "../commands/games/memoria": "__BOT_MODULE__.game_memoria",
      "./commands/games/roletacores": "__BOT_MODULE__.game_roletacores",
      "../commands/games/roletacores": "__BOT_MODULE__.game_roletacores"
    };
  const basenameMap = {"index.js":"index","index":"index","database.js":"database","database":"database","deploy-commands.js":"deployCommands","deploy-commands":"deployCommands","gamesInfo.js":"gamesInfo","gamesInfo":"gamesInfo","achievements.js":"achievements","achievements":"achievements","ready.js":"events_ready","ready":"events_ready","interactionCreate.js":"events_interactionCreate","interactionCreate":"events_interactionCreate","ajuda.js":"cmd_ajuda","ajuda":"cmd_ajuda","gp.js":"cmd_gp","gp":"cmd_gp","perfil.js":"cmd_perfil","perfil":"cmd_perfil","config.js":"cmd_config","config":"cmd_config","paineljogos.js":"cmd_paineljogos","paineljogos":"cmd_paineljogos","jogos.js":"cmd_jogos","jogos":"cmd_jogos","loja.js":"cmd_loja","loja":"cmd_loja","addgp.js":"cmd_addgp","addgp":"cmd_addgp","rankjogo.js":"cmd_rankjogo","rankjogo":"cmd_rankjogo","conquistas.js":"cmd_conquistas","conquistas":"cmd_conquistas","rivalidade.js":"cmd_rivalidade","rivalidade":"cmd_rivalidade","ppt.js":"game_ppt","ppt":"game_ppt","carasimples.js":"game_carasimples","carasimples":"game_carasimples","forca.js":"game_forca","forca":"game_forca","quiz.js":"game_quiz","quiz":"game_quiz","memoria.js":"game_memoria","memoria":"game_memoria","roletacores.js":"game_roletacores","roletacores":"game_roletacores"};
  return function require_proxy(mod) {
    if (builtinLibs.has(mod)) return require(mod);
    if (mod === 'discord.js' || mod === 'sql.js' || mod === 'dotenv' || mod === 'axios' || mod === 'groq-sdk' || mod === 'openai' || mod.startsWith('@')) {
      try { return require(mod); } catch (e) {
        if (mod === 'dotenv') return { config: function(){} };
        throw e;
      }
    }
    // Tenta mapeamento direto, se não cai como require externo
    const chave = String(mod).replace(/\\/g, '/');
    if (Object.prototype.hasOwnProperty.call(modMap, chave)) return eval(modMap[chave]);
    // Casos com ../ ou ./ relativos para um arquivo nosso conhecido (normaliza):
    const resolvido = path.resolve(baseDir, chave).replace(/\\/g, '/');
    const rootDir = path.resolve(process.cwd()).replace(/\\/g, '/');
    const relFromRoot = resolvido.startsWith(rootDir + '/') ? resolvido.slice(rootDir.length + 1) : null;
    if (relFromRoot && Object.prototype.hasOwnProperty.call(modMap, relFromRoot)) return eval(modMap[relFromRoot]);
    // Normaliza também removendo .js:
    const semJs = relFromRoot ? relFromRoot.replace(/\.js$/, '') : null;
    if (semJs) {
      if (Object.prototype.hasOwnProperty.call(modMap, semJs + '.js')) return eval(modMap[semJs + '.js']);
    }
    // Fallback por basename (funciona com path.join(commandsPath, file) etc.):
    const lastBar = Math.max(chave.lastIndexOf('/'), chave.lastIndexOf('\\'));
    const base = lastBar >= 0 ? chave.slice(lastBar + 1) : chave;
    let bk = basenameMap[base] || basenameMap[base.replace(/\.js$/, '')];
    if (bk) return __BOT_MODULE__[bk];
    // Caso não reconhecido, usa require padrão (libs terceiras / fs etc.)
    return require(mod);
  };
})(path.dirname(path.resolve(process.cwd(), "index.js")));

// Guarda referência para o objeto 'module' para capturar module.exports = ... após wrapper
const __mod_obj_index__ = { exports: __BOT_MODULE__.index };
// -------- index.js --------
(function (module, exports, require, __dirname, __filename) {
require('dotenv').config();
const fs = require('fs');
const fs2 = require('fs');
const path2 = require('path');
const envLocalPath = path2.join(__dirname, '.env.local');
if (fs2.existsSync(envLocalPath)) {
  const extra = require('dotenv').parse(fs2.readFileSync(envLocalPath));
  for (const k of Object.keys(extra)) {
    if (!process.env[k]) process.env[k] = extra[k];
  }
}
const path = require('path');
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const db = require('./database');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.GuildMember,
  ],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((f) => f.endsWith('.js'));
for (const file of commandFiles) {
  const cmd = require(path.join(commandsPath, file));
  if ('data' in cmd && 'execute' in cmd) {
    client.commands.set(cmd.data.name, cmd);
  }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((f) => f.endsWith('.js'));
for (const file of eventFiles) {
  const evt = require(path.join(eventsPath, file));
  if (evt.once) {
    client.once(evt.name, (...args) => evt.execute(...args, client));
  } else {
    client.on(evt.name, (...args) => evt.execute(...args, client));
  }
}

client.guildData = {
  init: (guildId) => db.initGuild(guildId),
};

client.utils = {};
client.utils.scheduleDelete = async function scheduleDelete(messageOrPromise, guildId, tempoOverrideSegundos) {
  try {
    const msg = await Promise.resolve(messageOrPromise);
    if (!msg || !msg.deletable || msg.ephemeral === true) return msg;
    if (!guildId) return msg;
    await db.initGuild(guildId);
    const cfg = await db.getGuildConfig(guildId);
    if (!cfg || !Number(cfg.autodel_enabled)) return msg;
    const segundos = typeof tempoOverrideSegundos === 'number' && tempoOverrideSegundos > 0
      ? tempoOverrideSegundos
      : Math.max(3, Math.min(300, Number(cfg.autodel_seconds) || 15));
    setTimeout(() => {
      if (msg.deletable) msg.delete().catch(() => {});
    }, segundos * 1000);
    return msg;
  } catch (_) {}
  return undefined;
};

client.utils.replyThenDelete = async function replyThenDelete(interaction, resposta, tempoOverrideSegundos) {
  try {
    const guildId = interaction.guildId || (interaction.guild && interaction.guild.id) || null;
    if (resposta && typeof resposta === 'object' && resposta.ephemeral === true) {
      return interaction.reply(resposta);
    }
    const msg = await interaction.reply(resposta);
    await client.utils.scheduleDelete(msg, guildId, tempoOverrideSegundos);
    return msg;
  } catch (_) {}
};

client.utils.editReplyThenDelete = async function editReplyThenDelete(interaction, resposta, tempoOverrideSegundos) {
  try {
    const guildId = interaction.guildId || (interaction.guild && interaction.guild.id) || null;
    if (resposta && typeof resposta === 'object' && resposta.ephemeral === true) {
      return interaction.editReply(resposta);
    }
    const msg = await interaction.editReply(resposta);
    await client.utils.scheduleDelete(msg, guildId, tempoOverrideSegundos);
    return msg;
  } catch (_) {}
};

client.utils.followUpThenDelete = async function followUpThenDelete(interaction, resposta, tempoOverrideSegundos) {
  try {
    const guildId = interaction.guildId || (interaction.guild && interaction.guild.id) || null;
    if (resposta && typeof resposta === 'object' && resposta.ephemeral === true) {
      return interaction.followUp(resposta);
    }
    const msg = await interaction.followUp(resposta);
    await client.utils.scheduleDelete(msg, guildId, tempoOverrideSegundos);
    return msg;
  } catch (_) {}
};

client.utils.channelSendThenDelete = async function channelSendThenDelete(channel, payload, guildId, tempoOverrideSegundos) {
  try {
    if (!channel || !channel.send) return null;
    const msg = await channel.send(payload);
    await client.utils.scheduleDelete(msg, guildId, tempoOverrideSegundos);
    return msg;
  } catch (_) { return null; }
};

const http = require('http');
const HEALTH_PORT = Number(process.env.PORT) || 10000;
const healthServer = http.createServer((req, res) => {
  const body = JSON.stringify({
    ok: true,
    bot_logged: client.isReady() ? true : false,
    bot_user: client.user ? client.user.tag : null,
    guilds: client.isReady() ? client.guilds.cache.size : 0,
    uptime_s: client.isReady() ? Math.floor(client.uptime / 1000) : 0,
  });
  res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  res.end(body);
});
healthServer.listen(HEALTH_PORT, () => {
  console.log(`[Healthcheck] Servidor HTTP anti-dormir rodando na porta ${HEALTH_PORT}`);
});

(async function bootstrap() {
  try {
    await db.open();
    await client.login(process.env.DISCORD_TOKEN);
  } catch (err) {
    console.error('Falha ao iniciar:', err.message);
    console.log('Verifique se o DISCORD_TOKEN está configurado no arquivo .env');
    process.exit(1);
  }
})();


})(__mod_obj_index__, __mod_obj_index__.exports, __makeReq_index__, path.dirname(path.resolve(process.cwd(), "index.js")), path.resolve(process.cwd(), "index.js"));

// Captura module.exports se houve sobrescrita (ex: module.exports = { open, ... })
__BOT_MODULE__.index = __mod_obj_index__.exports;

// Loader do entrypoint index.js
(async function startBot() {
  // Garante que client.commands populou em singleton (top-level side effect __BOT_MODULE__.index)
  const __idx_exp = __BOT_MODULE__.index;
  if (!__idx_exp || typeof __idx_exp !== 'object' || Object.keys(__idx_exp).length === 0) {
    // Em alguns empacotamentos o módulo index só executa efeitos. Nada a fazer.
  }
  // Força a recarga do client a partir do módulo exportado, se possível:
  try {
    const { Collection } = require('discord.js');
    if (typeof globalThis.__GAME_CUSTOM_CLIENT__ !== 'undefined' && globalThis.__GAME_CUSTOM_CLIENT__ && !globalThis.__GAME_CUSTOM_CLIENT__.commands) {
      globalThis.__GAME_CUSTOM_CLIENT__.commands = new Collection();
    }
  } catch (_) {}
  console.log('[bundle] Bot inicializado. Aguarde login (se houver DISCORD_TOKEN)...');
})().catch(err => { console.error('[bundle FATAL]', err); process.exit(1); });
