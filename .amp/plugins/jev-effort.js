// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  if (mod && typeof mod === "object" || typeof mod === "function") {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
  }
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __require = import.meta.require;

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var get_context_exports = {};
  __export2(get_context_exports, {
    SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
    getContext: () => getContext2
  });
  module.exports = __toCommonJS(get_context_exports);
  var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
  function getContext2() {
    const fromSymbol = globalThis;
    return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/token-error.js
var require_token_error = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var token_error_exports = {};
  __export2(token_error_exports, {
    VercelOidcTokenError: () => VercelOidcTokenError
  });
  module.exports = __toCommonJS(token_error_exports);

  class VercelOidcTokenError extends Error {
    constructor(message, cause) {
      super(message);
      this.name = "VercelOidcTokenError";
      this.cause = cause;
    }
    toString() {
      if (this.cause) {
        return `${this.name}: ${this.message}: ${this.cause}`;
      }
      return `${this.name}: ${this.message}`;
    }
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/token-io.js
var require_token_io = __commonJS(function(exports, module) {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var token_io_exports = {};
  __export2(token_io_exports, {
    findRootDir: () => findRootDir,
    getUserDataDir: () => getUserDataDir
  });
  module.exports = __toCommonJS(token_io_exports);
  var import_path = __toESM2(__require("path"));
  var import_fs = __toESM2(__require("fs"));
  var import_os = __toESM2(__require("os"));
  var import_token_error = require_token_error();
  function findRootDir() {
    try {
      let dir = process.cwd();
      while (dir !== import_path.default.dirname(dir)) {
        const pkgPath = import_path.default.join(dir, ".vercel");
        if (import_fs.default.existsSync(pkgPath)) {
          return dir;
        }
        dir = import_path.default.dirname(dir);
      }
    } catch (e) {
      throw new import_token_error.VercelOidcTokenError("Token refresh only supported in node server environments");
    }
    return null;
  }
  function getUserDataDir() {
    if (process.env.XDG_DATA_HOME) {
      return process.env.XDG_DATA_HOME;
    }
    switch (import_os.default.platform()) {
      case "darwin":
        return import_path.default.join(import_os.default.homedir(), "Library/Application Support");
      case "linux":
        return import_path.default.join(import_os.default.homedir(), ".local/share");
      case "win32":
        if (process.env.LOCALAPPDATA) {
          return process.env.LOCALAPPDATA;
        }
        return null;
      default:
        return null;
    }
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/auth-config.js
var require_auth_config = __commonJS(function(exports, module) {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var auth_config_exports = {};
  __export2(auth_config_exports, {
    isValidAccessToken: () => isValidAccessToken,
    readAuthConfig: () => readAuthConfig,
    writeAuthConfig: () => writeAuthConfig
  });
  module.exports = __toCommonJS(auth_config_exports);
  var fs = __toESM2(__require("fs"));
  var path = __toESM2(__require("path"));
  var import_token_util = require_token_util();
  function getAuthConfigPath() {
    const dataDir = (0, import_token_util.getVercelDataDir)();
    if (!dataDir) {
      throw new Error(`Unable to find Vercel CLI data directory. Your platform: ${process.platform}. Supported: darwin, linux, win32.`);
    }
    return path.join(dataDir, "auth.json");
  }
  function readAuthConfig() {
    try {
      const authPath = getAuthConfigPath();
      if (!fs.existsSync(authPath)) {
        return null;
      }
      const content = fs.readFileSync(authPath, "utf8");
      if (!content) {
        return null;
      }
      return JSON.parse(content);
    } catch (error2) {
      return null;
    }
  }
  function writeAuthConfig(config2) {
    const authPath = getAuthConfigPath();
    const authDir = path.dirname(authPath);
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { mode: 504, recursive: true });
    }
    fs.writeFileSync(authPath, JSON.stringify(config2, null, 2), { mode: 384 });
  }
  function isValidAccessToken(authConfig, expirationBufferMs = 0) {
    if (!authConfig.token)
      return false;
    if (typeof authConfig.expiresAt !== "number")
      return true;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const bufferInSeconds = expirationBufferMs / 1000;
    return authConfig.expiresAt >= nowInSeconds + bufferInSeconds;
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/oauth.js
var require_oauth = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var oauth_exports = {};
  __export2(oauth_exports, {
    processTokenResponse: () => processTokenResponse,
    refreshTokenRequest: () => refreshTokenRequest
  });
  module.exports = __toCommonJS(oauth_exports);
  var import_os = __require("os");
  var VERCEL_ISSUER = "https://vercel.com";
  var VERCEL_CLI_CLIENT_ID = "cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp";
  var userAgent = `@vercel/oidc node-${process.version} ${(0, import_os.platform)()} (${(0, import_os.arch)()}) ${(0, import_os.hostname)()}`;
  var _tokenEndpoint = null;
  async function getTokenEndpoint() {
    if (_tokenEndpoint) {
      return _tokenEndpoint;
    }
    const discoveryUrl = `${VERCEL_ISSUER}/.well-known/openid-configuration`;
    const response = await fetch(discoveryUrl, {
      headers: { "user-agent": userAgent }
    });
    if (!response.ok) {
      throw new Error("Failed to discover OAuth endpoints");
    }
    const metadata = await response.json();
    if (!metadata || typeof metadata.token_endpoint !== "string") {
      throw new Error("Invalid OAuth discovery response");
    }
    const endpoint = metadata.token_endpoint;
    _tokenEndpoint = endpoint;
    return endpoint;
  }
  async function refreshTokenRequest(options) {
    const tokenEndpoint = await getTokenEndpoint();
    return await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-agent": userAgent
      },
      body: new URLSearchParams({
        client_id: VERCEL_CLI_CLIENT_ID,
        grant_type: "refresh_token",
        ...options
      })
    });
  }
  async function processTokenResponse(response) {
    const json = await response.json();
    if (!response.ok) {
      const errorMsg = typeof json === "object" && json && "error" in json ? String(json.error) : "Token refresh failed";
      return [new Error(errorMsg)];
    }
    if (typeof json !== "object" || json === null) {
      return [new Error("Invalid token response")];
    }
    if (typeof json.access_token !== "string") {
      return [new Error("Missing access_token in response")];
    }
    if (json.token_type !== "Bearer") {
      return [new Error("Invalid token_type in response")];
    }
    if (typeof json.expires_in !== "number") {
      return [new Error("Missing expires_in in response")];
    }
    return [null, json];
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/auth-errors.js
var require_auth_errors = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var auth_errors_exports = {};
  __export2(auth_errors_exports, {
    AccessTokenMissingError: () => AccessTokenMissingError2,
    RefreshAccessTokenFailedError: () => RefreshAccessTokenFailedError2
  });
  module.exports = __toCommonJS(auth_errors_exports);

  class AccessTokenMissingError2 extends Error {
    constructor() {
      super("No authentication found. Please log in with the Vercel CLI (vercel login).");
      this.name = "AccessTokenMissingError";
    }
  }

  class RefreshAccessTokenFailedError2 extends Error {
    constructor(cause) {
      super("Failed to refresh authentication token.", { cause });
      this.name = "RefreshAccessTokenFailedError";
    }
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/token-util.js
var require_token_util = __commonJS(function(exports, module) {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var token_util_exports = {};
  __export2(token_util_exports, {
    assertVercelOidcTokenResponse: () => assertVercelOidcTokenResponse,
    findProjectInfo: () => findProjectInfo,
    getTokenPayload: () => getTokenPayload,
    getVercelDataDir: () => getVercelDataDir,
    getVercelOidcToken: () => getVercelOidcToken2,
    getVercelToken: () => getVercelToken2,
    isExpired: () => isExpired,
    loadToken: () => loadToken,
    saveToken: () => saveToken
  });
  module.exports = __toCommonJS(token_util_exports);
  var path = __toESM2(__require("path"));
  var fs = __toESM2(__require("fs"));
  var import_token_error = require_token_error();
  var import_token_io = require_token_io();
  var import_auth_config = require_auth_config();
  var import_oauth = require_oauth();
  var import_auth_errors = require_auth_errors();
  function getVercelDataDir() {
    const vercelFolder = "com.vercel.cli";
    const dataDir = (0, import_token_io.getUserDataDir)();
    if (!dataDir) {
      return null;
    }
    return path.join(dataDir, vercelFolder);
  }
  async function getVercelToken2(options) {
    const authConfig = (0, import_auth_config.readAuthConfig)();
    if (!authConfig?.token) {
      throw new import_auth_errors.AccessTokenMissingError;
    }
    if ((0, import_auth_config.isValidAccessToken)(authConfig, options?.expirationBufferMs)) {
      return authConfig.token;
    }
    if (!authConfig.refreshToken) {
      (0, import_auth_config.writeAuthConfig)({});
      throw new import_auth_errors.RefreshAccessTokenFailedError("No refresh token available");
    }
    try {
      const tokenResponse = await (0, import_oauth.refreshTokenRequest)({
        refresh_token: authConfig.refreshToken
      });
      const [tokensError, tokens] = await (0, import_oauth.processTokenResponse)(tokenResponse);
      if (tokensError || !tokens) {
        (0, import_auth_config.writeAuthConfig)({});
        throw new import_auth_errors.RefreshAccessTokenFailedError(tokensError);
      }
      const updatedConfig = {
        token: tokens.access_token,
        expiresAt: Math.floor(Date.now() / 1000) + tokens.expires_in
      };
      if (tokens.refresh_token) {
        updatedConfig.refreshToken = tokens.refresh_token;
      }
      (0, import_auth_config.writeAuthConfig)(updatedConfig);
      return updatedConfig.token;
    } catch (error2) {
      (0, import_auth_config.writeAuthConfig)({});
      if (error2 instanceof import_auth_errors.AccessTokenMissingError || error2 instanceof import_auth_errors.RefreshAccessTokenFailedError) {
        throw error2;
      }
      throw new import_auth_errors.RefreshAccessTokenFailedError(error2);
    }
  }
  async function getVercelOidcToken2(authToken, projectId, teamId) {
    const url = `https://api.vercel.com/v1/projects/${projectId}/token?source=vercel-oidc-refresh${teamId ? `&teamId=${teamId}` : ""}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    if (!res.ok) {
      throw new import_token_error.VercelOidcTokenError(`Failed to refresh OIDC token: ${res.statusText}`);
    }
    const tokenRes = await res.json();
    assertVercelOidcTokenResponse(tokenRes);
    return tokenRes;
  }
  function assertVercelOidcTokenResponse(res) {
    if (!res || typeof res !== "object") {
      throw new TypeError("Vercel OIDC token is malformed. Expected an object. Please run `vc env pull` and try again");
    }
    if (!("token" in res) || typeof res.token !== "string") {
      throw new TypeError("Vercel OIDC token is malformed. Expected a string-valued token property. Please run `vc env pull` and try again");
    }
  }
  function findProjectInfo() {
    const dir = (0, import_token_io.findRootDir)();
    if (!dir) {
      throw new import_token_error.VercelOidcTokenError("Unable to find project root directory. Have you linked your project with `vc link?`");
    }
    const prjPath = path.join(dir, ".vercel", "project.json");
    if (!fs.existsSync(prjPath)) {
      throw new import_token_error.VercelOidcTokenError("project.json not found, have you linked your project with `vc link?`");
    }
    const prj = JSON.parse(fs.readFileSync(prjPath, "utf8"));
    if (typeof prj.projectId !== "string" && typeof prj.orgId !== "string") {
      throw new TypeError("Expected a string-valued projectId property. Try running `vc link` to re-link your project.");
    }
    return { projectId: prj.projectId, teamId: prj.orgId };
  }
  function saveToken(token, projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
      throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    const tokenJson = JSON.stringify(token);
    fs.mkdirSync(path.dirname(tokenPath), { mode: 504, recursive: true });
    fs.writeFileSync(tokenPath, tokenJson);
    fs.chmodSync(tokenPath, 432);
    return;
  }
  function loadToken(projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
      throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    if (!fs.existsSync(tokenPath)) {
      return null;
    }
    const token = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
    assertVercelOidcTokenResponse(token);
    return token;
  }
  function getTokenPayload(token) {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      throw new import_token_error.VercelOidcTokenError("Invalid token. Please run `vc env pull` and try again");
    }
    const base642 = tokenParts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base642.padEnd(base642.length + (4 - base642.length % 4) % 4, "=");
    return JSON.parse(Buffer.from(padded, "base64").toString("utf8"));
  }
  function isExpired(token, bufferMs = 0) {
    return token.exp * 1000 < Date.now() + bufferMs;
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/token.js
var require_token = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var token_exports = {};
  __export2(token_exports, {
    refreshToken: () => refreshToken
  });
  module.exports = __toCommonJS(token_exports);
  var import_token_error = require_token_error();
  var import_token_util = require_token_util();
  async function refreshToken(options) {
    let projectId = options?.project;
    let teamId = options?.team;
    if (!projectId && !teamId) {
      const projectInfo = (0, import_token_util.findProjectInfo)();
      projectId = projectInfo.projectId;
      teamId = projectInfo.teamId;
    } else if (!projectId || !teamId) {
      const projectInfo = (0, import_token_util.findProjectInfo)();
      projectId = projectId ?? projectInfo.projectId;
      teamId = teamId ?? projectInfo.teamId;
    }
    if (!projectId) {
      throw new import_token_error.VercelOidcTokenError("Failed to refresh OIDC token: No project specified. Try re-linking your project with `vc link`");
    }
    let maybeToken = (0, import_token_util.loadToken)(projectId);
    if (!maybeToken || (0, import_token_util.isExpired)((0, import_token_util.getTokenPayload)(maybeToken.token), options?.expirationBufferMs)) {
      const authToken = await (0, import_token_util.getVercelToken)({
        expirationBufferMs: options?.expirationBufferMs
      });
      maybeToken = await (0, import_token_util.getVercelOidcToken)(authToken, projectId, teamId);
      if (!maybeToken) {
        throw new import_token_error.VercelOidcTokenError("Failed to refresh OIDC token");
      }
      (0, import_token_util.saveToken)(maybeToken, projectId);
    }
    process.env.VERCEL_OIDC_TOKEN = maybeToken.token;
    return;
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js
var require_get_vercel_oidc_token = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var get_vercel_oidc_token_exports = {};
  __export2(get_vercel_oidc_token_exports, {
    getVercelOidcToken: () => getVercelOidcToken2,
    getVercelOidcTokenSync: () => getVercelOidcTokenSync2
  });
  module.exports = __toCommonJS(get_vercel_oidc_token_exports);
  var import_get_context = require_get_context();
  var import_token_error = require_token_error();
  async function getVercelOidcToken2(options) {
    let token = "";
    let err;
    try {
      token = getVercelOidcTokenSync2();
    } catch (error2) {
      err = error2;
    }
    try {
      const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
        await Promise.resolve().then(() => __toESM(require_token_util())),
        await Promise.resolve().then(() => __toESM(require_token()))
      ]);
      if (!token || isExpired(getTokenPayload(token), options?.expirationBufferMs)) {
        await refreshToken(options);
        token = getVercelOidcTokenSync2();
      }
    } catch (error2) {
      let message = err instanceof Error ? err.message : "";
      if (error2 instanceof Error) {
        message = `${message}
${error2.message}`;
      }
      if (message) {
        throw new import_token_error.VercelOidcTokenError(message);
      }
      throw error2;
    }
    return token;
  }
  function getVercelOidcTokenSync2() {
    const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
    if (!token) {
      throw new Error(`The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`);
    }
    return token;
  }
});

// ../../node_modules/.bun/@vercel+oidc@3.2.0/node_modules/@vercel/oidc/dist/index.js
var require_dist = __commonJS(function(exports, module) {
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name17 in all)
      __defProp2(target, name17, { get: all[name17], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export2(src_exports, {
    AccessTokenMissingError: () => import_auth_errors.AccessTokenMissingError,
    RefreshAccessTokenFailedError: () => import_auth_errors.RefreshAccessTokenFailedError,
    getContext: () => import_get_context.getContext,
    getVercelOidcToken: () => import_get_vercel_oidc_token.getVercelOidcToken,
    getVercelOidcTokenSync: () => import_get_vercel_oidc_token.getVercelOidcTokenSync,
    getVercelToken: () => import_token_util.getVercelToken
  });
  module.exports = __toCommonJS(src_exports);
  var import_get_vercel_oidc_token = require_get_vercel_oidc_token();
  var import_get_context = require_get_context();
  var import_auth_errors = require_auth_errors();
  var import_token_util = require_token_util();
});

// src/index.ts
import { homedir } from "os";
import { join as join2 } from "path";

// ../../node_modules/.bun/@ai-sdk+provider@4.0.18/node_modules/@ai-sdk/provider/dist/index.js
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
  constructor({
    name: name16,
    message,
    cause
  }) {
    super(message);
    this[_a] = true;
    this.name = name16;
    this.cause = cause;
  }
  static isInstance(error) {
    return _AISDKError.hasMarker(error, marker);
  }
  static hasMarker(error, marker17) {
    const markerSymbol = Symbol.for(marker17);
    return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
  }
};
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
  constructor({
    message,
    url,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500),
    data
  }) {
    super({ name, message, cause });
    this[_a2] = true;
    this.url = url;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker2);
  }
};
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name2, message });
    this[_a3] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker3);
  }
};
var name3 = "AI_EvaluationUnsupportedQuestionTypeError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var EvaluationUnsupportedQuestionTypeError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
  constructor({
    questionId,
    questionType,
    provider,
    modelId,
    message = `Question "${questionId}" has type "${questionType}", which is not supported by provider "${provider}" and model "${modelId}".`
  }) {
    super({ name: name3, message });
    this[_a4] = true;
    this.questionId = questionId;
    this.questionType = questionType;
    this.provider = provider;
    this.modelId = modelId;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker4);
  }
};
function getErrorMessage(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.toString();
  }
  return JSON.stringify(error);
}
var name4 = "AI_InvalidArgumentError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidArgumentError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
  constructor({
    message,
    cause,
    argument
  }) {
    super({ name: name4, message, cause });
    this[_a5] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker5);
  }
};
var name5 = "AI_InvalidPromptError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var InvalidPromptError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
  constructor({
    prompt,
    message,
    cause
  }) {
    super({ name: name5, message: `Invalid prompt: ${message}`, cause });
    this[_a6] = true;
    this.prompt = prompt;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker6);
  }
};
var name6 = "AI_InvalidResponseDataError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var InvalidResponseDataError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
  constructor({
    data,
    message = `Invalid response data: ${JSON.stringify(data)}.`
  }) {
    super({ name: name6, message });
    this[_a7] = true;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker7);
  }
};
var name7 = "AI_JSONParseError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var JSONParseError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
  constructor({ text, cause }) {
    super({
      name: name7,
      message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a8] = true;
    this.text = text;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker8);
  }
};
var name8 = "AI_LoadAPIKeyError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var _b9;
var LoadAPIKeyError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
  constructor({ message }) {
    super({ name: name8, message });
    this[_a9] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker9);
  }
};
var name9 = "AI_LoadSettingError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var _b10;
var LoadSettingError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
  constructor({ message }) {
    super({ name: name9, message });
    this[_a10] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker10);
  }
};
var name10 = "AI_NoContentGeneratedError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var _b11;
var NoContentGeneratedError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
  constructor({
    message = "No content generated."
  } = {}) {
    super({ name: name10, message });
    this[_a11] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker11);
  }
};
var name11 = "AI_NoSuchModelError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var NoSuchModelError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
  constructor({
    errorName = name11,
    modelId,
    modelType,
    message = `No such ${modelType}: ${modelId}`
  }) {
    super({ name: errorName, message });
    this[_a12] = true;
    this.modelId = modelId;
    this.modelType = modelType;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker12);
  }
};
var name12 = "AI_NoSuchProviderReferenceError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var NoSuchProviderReferenceError = class extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
  constructor({
    provider,
    reference,
    message = `No provider reference found for provider '${provider}'. Available providers: ${Object.keys(reference).join(", ")}`
  }) {
    super({ name: name12, message });
    this[_a13] = true;
    this.provider = provider;
    this.reference = reference;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker13);
  }
};
var name13 = "AI_TooManyEmbeddingValuesForCallError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var TooManyEmbeddingValuesForCallError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
  constructor(options) {
    super({
      name: name13,
      message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
    });
    this[_a14] = true;
    this.provider = options.provider;
    this.modelId = options.modelId;
    this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
    this.values = options.values;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker14);
  }
};
var name14 = "AI_TypeValidationError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var _b15;
var TypeValidationError = class _TypeValidationError extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
  constructor({
    value,
    cause,
    context
  }) {
    let contextPrefix = "Type validation failed";
    if (context == null ? undefined : context.field) {
      contextPrefix += ` for ${context.field}`;
    }
    if ((context == null ? undefined : context.entityName) || (context == null ? undefined : context.entityId)) {
      contextPrefix += " (";
      const parts = [];
      if (context.entityName) {
        parts.push(context.entityName);
      }
      if (context.entityId) {
        parts.push(`id: "${context.entityId}"`);
      }
      contextPrefix += parts.join(", ");
      contextPrefix += ")";
    }
    super({
      name: name14,
      message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a15] = true;
    this.value = value;
    this.context = context;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker15);
  }
  static wrap({
    value,
    cause,
    context
  }) {
    var _a17, _b17, _c;
    if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a17 = cause.context) == null ? undefined : _a17.field) === (context == null ? undefined : context.field) && ((_b17 = cause.context) == null ? undefined : _b17.entityName) === (context == null ? undefined : context.entityName) && ((_c = cause.context) == null ? undefined : _c.entityId) === (context == null ? undefined : context.entityId)) {
      return cause;
    }
    return new _TypeValidationError({ value, cause, context });
  }
};
var name15 = "AI_UnsupportedFunctionalityError";
var marker16 = `vercel.ai.error.${name15}`;
var symbol16 = Symbol.for(marker16);
var _a16;
var _b16;
var UnsupportedFunctionalityError = class extends (_b16 = AISDKError, _a16 = symbol16, _b16) {
  constructor({
    functionality,
    message = `'${functionality}' functionality not supported.`
  }) {
    super({ name: name15, message });
    this[_a16] = true;
    this.functionality = functionality;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker16);
  }
};

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/util.js
var exports_util = {};
__export(exports_util, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  CONSTANT_CATCH: () => CONSTANT_CATCH,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  attachSchema: () => attachSchema,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  codePointLength: () => codePointLength,
  constantCatch: () => constantCatch,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  defineLazyInternal: () => defineLazyInternal,
  derived: () => derived,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  hide: () => hide,
  installLazyProp: () => installLazyProp,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  members: () => members,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  own: () => own,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  rawShape: () => rawShape,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  toZod: () => toZod,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function toZod() {
  return (schema) => schema;
}
function assertIs(_arg) {}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array, separator = "|") {
  return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}

class Cached {
  constructor(getter) {
    this._getter = getter;
    this._value = undefined;
  }
  get value() {
    const getter = this._getter;
    if (getter !== undefined) {
      this._value = getter();
      this._getter = undefined;
    }
    return this._value;
  }
}
function cached(getter) {
  return new Cached(getter);
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object, key, getter) {
  let value = undefined;
  Object.defineProperty(object, key, {
    get() {
      if (value === EVALUATING) {
        return;
      }
      if (value === undefined) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function rawShape(def) {
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
  return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
  Object.defineProperty(target, key, {
    get() {
      const value = getter();
      assignProp(this, key, value);
      return value;
    },
    enumerable: true,
    configurable: true
  });
}
function putProp(target, key, value) {
  if (key in target)
    assignProp(target, key, value);
  else
    target[key] = value;
}
function mirrorShape(target, source, keys, wrap) {
  const raw = sourceShape(source);
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(raw, key);
    if (!desc.enumerable)
      continue;
    if (desc.get) {
      deferProp(target, key, () => {
        const value = source._zod.def.shape[key];
        return wrap ? wrap(value, key) : value;
      });
    } else
      putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
  }
}
function mirrorProps(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    const desc = Object.getOwnPropertyDescriptor(source, key);
    if (!desc.enumerable)
      continue;
    if (desc.get)
      deferProp(target, key, () => source[key]);
    else
      putProp(target, key, desc.value);
  }
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0;i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0;i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const newShape = {};
  mirrorShape(newShape, schema, maskedKeys(schema, mask));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function maskedKeys(schema, mask) {
  const raw = sourceShape(schema);
  const keys = [];
  for (const key of Reflect.ownKeys(mask)) {
    if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) {
      throw new Error(`Unrecognized key: "${String(key)}"`);
    }
    if (mask[key])
      keys.push(key);
  }
  return keys;
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const omitted = new Set(maskedKeys(schema, mask));
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = sourceShape(schema);
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
  mirrorProps(newShape, shape);
  return newShape;
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
  if (!b?._zod?.def) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const newShape = {};
  mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
  mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
  const def = mergeDefs(a._zod.def, {
    shape: newShape,
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class, schema, mask, name16 = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name16}() cannot be used on object schemas containing refinements`);
  }
  const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key) => selected && !selected.has(key) ? value : new Class({ type: "optional", innerType: value })));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class, schema, mask) {
  const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => selected && !selected.has(key) ? value : new Class({ type: "nonoptional", innerType: value }));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a17;
    (_a17 = iss).path ?? (_a17.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
  var _a17;
  for (let i = start;i < issues.length; i++) {
    (_a17 = issues[i]).schema ?? (_a17.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config) {
  var _a17;
  const traits = iss.inst?._zod?.traits;
  if (traits?.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a17 = iss).schema ?? (_a17.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
  const full = {};
  for (const k of Object.keys(iss)) {
    if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__")
      continue;
    full[k] = iss[k];
  }
  full.path ?? (full.path = []);
  full.message = message;
  if (ctx?.reportInput) {
    full.input = iss.input;
  }
  return full;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  const units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0;i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0;i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0;i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base64.length % 4) % 4);
  return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0;i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

class Class {
  constructor(..._args) {}
}
function members(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide(inst, key, value) {
  return own(inst, key, value, false);
}
function derived(computes, table) {
  for (const key in computes) {
    const compute = computes[key];
    Object.defineProperty(table, key, {
      configurable: true,
      enumerable: true,
      get() {
        return own(this, key, compute(this));
      },
      set(value) {
        own(this, key, value);
      }
    });
  }
  return table;
}
function defineBound(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn : own(this, key, fn.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? undefined : proto;
}
var installing;
var broke = false;
var breaker = {
  configurable: true,
  get() {
    broke = true;
    return;
  }
};
function defineLazyInternal(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = undefined;
    return;
  }
  installing = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker);
      const outer = broke;
      broke = false;
      try {
        const value = compute(this);
        if (broke)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke = broke || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke = broke || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  const proto = claim(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: undefined };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
var CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  const fn = () => value;
  fn[CONSTANT_CATCH] = true;
  return fn;
}

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/core.js
var _a17;
var _zodDesc = { value: undefined, enumerable: false };
var _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  const E = _E;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition;
      }
      try {
        return new Definition;
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition;
}
function $constructor(name16, initializer, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _;
    this.traits = new Set;
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && new WeakSet;
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = undefined;
      }
    } else if (inst._zod.traits.has(name16)) {
      return;
    }
    inst._zod.traits.add(name16);
    initializer(inst, def);
    if (initialized) {
      const own2 = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up = own2;
      while (up && up !== ctorProto)
        up = Object.getPrototypeOf(up);
      const target = up ?? own2;
      if (!initialized.has(target)) {
        initialized.add(target);
        members(target, protoMembers);
      }
    }
    const proto2 = _.prototype;
    for (const k in proto2) {
      if (!Object.prototype.hasOwnProperty.call(proto2, k))
        continue;
      if (!(k in inst)) {
        inst[k] = proto2[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name16 });
  function _(def) {
    const inst = params?.Parent ? newError(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn of deferred) {
        fn();
      }
      inst._zod.deferred = undefined;
    }
    const pp = globalThis.__zod_globalConfig?.postProcessor;
    if (pp)
      pp(inst);
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name16);
    }
  });
  Object.defineProperty(_, "name", { value: name16 });
  return _;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}

class $ZodEncodeError extends Error {
  constructor(name16) {
    super(`Encountered unidirectional transform during encode: ${name16}`);
    this.name = "ZodEncodeError";
  }
}
(_a17 = globalThis).__zod_globalConfig ?? (_a17.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/errors.js
function _getMessage() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
  return internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
var _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: true,
  configurable: true
};
var _issuesDesc = { value: undefined, enumerable: false };
var _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  _issuesDesc.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc);
  _issuesDesc.value = undefined;
  Object.defineProperty(inst, "message", _messageDesc);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString.has(proto)) {
    _installedToString.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, undefined, {
  Parent: Error
});
function node(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error2, path = []) => {
    for (const issue2 of error2.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue2));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el)) {
              Object.defineProperty(curr, el, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node2 = curr[el];
            if (terminal) {
              node2._errors.push(mapper(issue2));
            }
            curr = node2;
            i++;
          }
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse = (_Err) => {
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError;
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _parseAsync = (_Err) => {
  const fn = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
function failure(Err, issues, ctx) {
  let error;
  return {
    success: false,
    get error() {
      if (!error) {
        error = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
        issues = undefined;
        ctx = undefined;
      }
      return error;
    },
    set error(e) {
      error = e;
      issues = undefined;
      ctx = undefined;
    }
  };
}
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
var COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
var COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
var validate = (schema, value, _ctx) => {
  const validator = schema._zod.bag.validator;
  if (validator !== undefined) {
    if (validator(value) !== COMPILE_INVALID)
      return true;
    if (validator.definite === true && _ctx === undefined)
      return false;
  }
  return validateFallback(schema, value, _ctx);
};
function validateFallback(schema, value, _ctx) {
  const ctx = _ctx ? { ..._ctx, async: false, abortEarly: true } : { async: false, abortEarly: true };
  const fallbackRun = schema._zod.bag.fallbackRun;
  let result;
  if (fallbackRun) {
    ctx[COMPILE_FALLBACK] = true;
    result = fallbackRun({ value, issues: [] }, ctx);
  } else {
    result = schema._zod.run({ value, issues: [] }, ctx);
  }
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length === 0;
}
var validateAsync = async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true, abortEarly: true } : { async: true, abortEarly: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length === 0;
};
var _encode = (_Err) => {
  const parse = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decode = (_Err) => {
  const parse = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    return parse(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _encodeAsync = (_Err) => {
  const parseAsync = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decodeAsync = (_Err) => {
  const parseAsync = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/regexes.js
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version) => {
  if (!version)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var anyString = /^[\s\S]{0,}$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a18;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a18 = inst._zod).onattach ?? (_a18.onattach = []);
});
var _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== undefined;
};
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? def.value !== BigInt(0) && payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a18;
  $ZodCheck.init(inst, def);
  (_a18 = inst._zod.def).when ?? (_a18.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a18;
  $ZodCheck.init(inst, def);
  (_a18 = inst._zod.def).when ?? (_a18.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a18;
  $ZodCheck.init(inst, def);
  (_a18 = inst._zod.def).when ?? (_a18.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a18, _b17;
  $ZodCheck.init(inst, def);
  if (def.pattern)
    (_a18 = inst._zod).check ?? (_a18.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b17 = inst._zod).check ?? (_b17.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperties = /* @__PURE__ */ $constructor("$ZodCheckProperties", (inst, def) => {
  $ZodCheck.init(inst, def);
  hide(inst, Symbol.iterator, function* () {
    yield inst;
  });
  let entries;
  inst._zod.check = (payload) => {
    if (payload.value == null) {
      payload.issues.push({ expected: "object", code: "invalid_type", input: payload.value, inst });
      return;
    }
    entries ?? (entries = Reflect.ownKeys(def.shape).map((key) => [key, def.shape[key]]));
    const input = payload.value;
    let proms;
    for (const [key, schema] of entries) {
      const result = schema._zod.run({ value: input[key], issues: [] }, {});
      if (result instanceof Promise) {
        proms ?? (proms = []);
        proms.push(result.then((result2) => handleCheckPropertyResult(result2, payload, key)));
      } else {
        handleCheckPropertyResult(result, payload, key);
      }
    }
    if (proms)
      return Promise.all(proms).then(() => {
        return;
      });
    return;
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  indented(fn) {
    this.indent += 1;
    try {
      fn(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(`
`).filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = this?.content ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join(`
`)}
};`);
    return factory(...Object.values(this.closed));
  }
}

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 6,
  patch: 5
};

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a18;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a18 = inst._zod).deferred ?? (_a18.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError;
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
});
var toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync2(inst, value) {
  const ctx = { async: true };
  return toStandardResult(await inst._zod.run({ value, issues: [] }, ctx), ctx);
}
function standardProps(inst) {
  return {
    validate: (value) => {
      const ctx = { async: false };
      try {
        const r = inst._zod.run({ value, issues: [] }, ctx);
        if (!(r instanceof Promise))
          return toStandardResult(r, ctx);
      } catch (_) {}
      return validateAsync2(inst, value);
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = def.pattern ?? anyString;
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {}
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === undefined)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var URL_BAD_FORMAT = 1;
var URL_UNPARSEABLE = 2;
function canParseURL(input) {
  try {
    if (typeof URL !== "undefined" && typeof URL.canParse === "function")
      return URL.canParse(input);
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
function validateURL(trimmed, def) {
  if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) {
    return canParseURL(trimmed) || URL_UNPARSEABLE;
  }
  return parseURLObject(trimmed, def);
}
function parseURLObject(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT;
  }
  try {
    if (typeof URL !== "undefined") {
      const URLStatic = URL;
      if (typeof URLStatic.parse === "function")
        return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
    }
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
  hostname.lastIndex = 0;
  return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = validateURL(trimmed, def);
      if (url === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === true) {
        payload.value = stripTabAndNewline(trimmed);
        return;
      }
      if (def.hostname && !urlHostnameOk(url, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk(url, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== undefined && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === undefined ? nanoid : nanoidOfLength(def.length));
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
});
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  if (!ipv6Alphabet.test(value))
    return false;
  return canParseURL(`http://[${value}]`);
}
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidIPv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv6(address);
}
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64Charset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
  if (!base64urlCharset.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64urlCharset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : undefined : undefined;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  const memo = globalConfig.memoizer;
  memo?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    const abortEarly = ctx?.abortEarly;
    for (let i = 0;i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
        if (abortEarly && result.issues.length !== 0 && aborted(result))
          break;
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== undefined && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && optin === undefined) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: undefined,
        path: [key]
      });
    }
    return;
  }
  if (result.value === undefined) {
    if (isPresent || optin === "defaulted" && !isOptionalOut) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k of allKeys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  let seen = 0;
  for (const key in input) {
    if (abortEarly && payload.issues.length !== seen) {
      if (aborted(payload, seen))
        break;
      seen = payload.issues.length;
    }
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t === "never")
        unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  const sh = desc?.get ? desc.get.raw : def.shape ?? {};
  if (sh) {
    const get = () => {
      const newSh = { ...sh };
      Object.defineProperty(def, "shape", { value: newSh });
      get.raw = newSh;
      return newSh;
    };
    get.raw = sh;
    Object.defineProperty(def, "shape", { get });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp(propValues, key, new Set);
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== undefined)
          propValues[key].add(undefined);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  const memo = globalConfig.memoizer;
  memo?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    const abortEarly = ctx?.abortEarly;
    let seen = payload.issues.length;
    for (const key of value.allKeys) {
      if (abortEarly && payload.issues.length !== seen) {
        if (aborted(payload, seen))
          break;
        seen = payload.issues.length;
      }
      if (key === "__proto__")
        continue;
      const el = shape[key];
      const optin = el._zod.optin;
      const optout = el._zod.optout;
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const memo = globalConfig.memoizer;
  const generateFastpass = (shape) => {
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc(["payload", "ctx"], { shape, inst, memo, syms });
    const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    doc.write(`const input = payload.value;`);
    const ids = Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id = ids[key];
      const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
      const isPresent = `${k} in input`;
      const schema = shape[key];
      const optin = schema?._zod?.optin;
      const isOptionalIn = optin !== undefined;
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(k)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
        if (optin === "defaulted") {
          doc.write(`newResult[${k}] = ${id}.value;`);
        } else {
          doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
        }
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== undefined) ? "optional" : undefined);
  defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
  defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function discriminatorMap(def) {
  const map = new Map;
  for (const option of def.options) {
    const values = option._zod.propValues?.[def.discriminator];
    if (!values || values.size === 0)
      throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
    for (const value of values) {
      if (map.has(value)) {
        if (value !== undefined)
          throw new Error(`Duplicate discriminator value "${String(value)}"`);
        map.set(value, null);
      } else {
        map.set(value, option);
      }
    }
  }
  return map;
}
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazyInternal(inst, "propValues", (zod) => {
    const propValues = {};
    let undefinedCount = 0;
    for (const option of zod.def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
      if (pv[zod.def.discriminator]?.has(undefined))
        undefinedCount++;
      for (const [k, v] of Object.entries(pv)) {
        if (!Object.prototype.hasOwnProperty.call(propValues, k)) {
          assignProp(propValues, k, new Set);
        }
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    if (!zod.def.unionFallback && undefinedCount > 1)
      propValues[zod.def.discriminator]?.delete(undefined);
    return propValues;
  });
  def.options.forEach((option, i) => {
    const propShape = rawShape(option._zod.def);
    if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) {
      throw new Error(`Invalid discriminated union option at index "${i}"`);
    }
  });
  const disc = cached(() => discriminatorMap(def));
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const value = input?.[def.discriminator];
    const opt = disc.value.get(value);
    if (opt && (value !== undefined || ctx.direction !== "backward")) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback || ctx.direction === "backward") {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()).filter((value2) => disc.value.get(value2) !== null),
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  const keyIssues = new Map;
  const collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      const k = String(iss.path[0]);
      if (!keyIssues.has(k))
        keyIssues.set(k, iss);
      keys = [k];
    } else {
      return false;
    }
    for (const k of keys) {
      if (!unrecKeys.has(k))
        unrecKeys.set(k, {});
      unrecKeys.get(k)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k of bothKeys) {
      if (!aggregated.includes(k) && keyIssues.has(k))
        result.issues.push(keyIssues.get(k));
    }
  }
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  const memo = globalConfig.memoizer;
  memo?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values && !def.partial) {
      payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
      const recordKeys = new Set;
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          if (key === "__proto__")
            continue;
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          const outKey = keyResult.value;
          if (outKey === "__proto__")
            continue;
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[outKey] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[outKey] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          if (def.mode === "loose") {
            if (key === "__proto__")
              continue;
            payload.value[key] = input[key];
          } else {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          }
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    } else {
      payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
      let unrecognized;
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else if (values) {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const outKey = keyResult.value;
        if (outKey === "__proto__")
          continue;
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[outKey] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[outKey] = result.value;
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  defineLazyInternal(inst, "pattern", (zod) => {
    const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
    return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const values = new Set(def.values);
  inst._zod.values = values;
  defineLazyInternal(inst, "pattern", (zod) => {
    const vals = zod.def.values;
    return new RegExp(vals.length ? `^(${vals.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  globalConfig.memoizer?.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError;
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(payload, result) {
  payload.value = result.issues.length ? undefined : result.value;
  return payload;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? new Set([...values, undefined]) : undefined;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === undefined) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleOptionalResult(payload, result2));
      return handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
  });
  defineLazyInternal(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? new Set([...zod.def.innerType._zod.values, null]) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  });
  return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleCatchResult(payload, result2, def, ctx));
    }
    return handleCatchResult(payload, result, def, ctx);
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => {
    const d = def;
    if (!d._cachedInner)
      d._cachedInner = def.getter();
    return d._cachedInner;
  });
  defineLazyInternal(inst, "pattern", (zod) => zod.innerType?._zod?.pattern);
  defineLazyInternal(inst, "propValues", (zod) => zod.innerType?._zod?.propValues);
  defineLazyInternal(inst, "optin", (zod) => zod.innerType?._zod?.optin ?? undefined);
  defineLazyInternal(inst, "optout", (zod) => zod.innerType?._zod?.optout ?? undefined);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
class $ZodCyclicError extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
}
var STATE = "~memo";
var NO_ISSUES = [];
function isRef(value) {
  return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive = /* @__PURE__ */ new WeakMap;
var NONE = 0;
var ASSUMED = 1;
var PROVEN = 2;
function isRecursive(inst, stack, resolve) {
  const cached2 = recursive.get(inst);
  if (cached2 !== undefined)
    return cached2 ? PROVEN : NONE;
  if (stack.has(inst))
    return PROVEN;
  stack.add(inst);
  let result = NONE;
  const check = (child) => {
    if (result !== PROVEN && child?._zod) {
      const answer = isRecursive(child, stack, resolve);
      if (answer > result)
        result = answer;
    }
  };
  const shape = (sh, spread) => {
    let answer = NONE;
    for (const key of Reflect.ownKeys(sh)) {
      const desc = Object.getOwnPropertyDescriptor(sh, key);
      if (spread && !desc.enumerable)
        continue;
      const child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack, resolve) : NONE;
      if (child > answer)
        answer = child;
    }
    return answer;
  };
  const merge2 = (answer) => {
    if (answer > result)
      result = answer;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      const raw = rawShape(def);
      merge2(raw ? shape(raw, true) : ASSUMED);
      check(def.catchall);
      break;
    }
    case "array":
      check(def.element);
      break;
    case "tuple":
      for (const el of def.items)
        check(el);
      check(def.rest);
      break;
    case "record":
    case "map":
      check(def.keyType);
      check(def.valueType);
      break;
    case "set":
      check(def.valueType);
      break;
    case "union":
      for (const el of def.options)
        check(el);
      break;
    case "intersection":
      check(def.left);
      check(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check(def.innerType);
      break;
    case "pipe":
      check(def.in);
      check(def.out);
      break;
    case "function":
      check(def.input);
      check(def.output);
      break;
    case "lazy": {
      const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : undefined);
      merge2(inner ? isRecursive(inner, stack, false) : ASSUMED);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check(value);
        else if (Array.isArray(value))
          for (const el of value)
            check(el);
      }
    }
  }
  stack.delete(inst);
  return settle(inst, result);
}
function settle(inst, answer) {
  if (answer !== ASSUMED)
    recursive.set(inst, answer === PROVEN);
  return answer;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = new WeakMap;
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
var handoff;
var open = [];
var memo = {
  alloc(_inst, payload, empty) {
    const bucket = handoff;
    if (!bucket)
      return empty;
    handoff = undefined;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty;
  },
  guard(inst) {
    var _a18;
    (_a18 = inst._zod).deferred ?? (_a18.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError;
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a18;
    let isRecursiveInst;
    let rechecked = false;
    let lastCtx;
    let lastBucket;
    (_a18 = inst._zod).deferred ?? (_a18.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === undefined) {
          const walked = isRecursive(inst, new Set, false);
          if (walked === NONE) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
          if (walked === PROVEN || rechecked)
            isRecursiveInst = true;
          else
            rechecked = true;
        }
        const input = payload.value;
        if (!isRef(input))
          return base(payload, ctx);
        let state = ctx[STATE];
        if (!state) {
          state = { buckets: new WeakMap, backEdges: undefined };
          ctx[STATE] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = new WeakSet);
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff = bucket;
        const depth = open.length;
        const result = base(payload, ctx);
        handoff = undefined;
        const entry = open.length > depth ? open.pop() : undefined;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  const backEdges = ctx[STATE]?.backEdges;
  return backEdges !== undefined && isRef(value) && backEdges.has(value);
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/locales/en.js
var error = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = getTypeName(issue2.expected);
        const receivedType = parsedType(issue2.input);
        const received = getTypeName(receivedType, issue2.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.exact ? "exactly " : issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
          const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue2.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error()
  };
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/registries.js
var _a19;
class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry;
}
(_a19 = globalThis).__zod_globalRegistry ?? (_a19.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/api.js
function snapshotChecks(def) {
  if (def.checks)
    def.checks = [...def.checks];
  return def;
}
function _string(Class2, params) {
  return new Class2(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _number(Class2, params) {
  return new Class2(snapshotChecks({ type: "number", checks: [], ...normalizeParams(params) }));
}
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
function _properties(shape, params) {
  return new $ZodCheckProperties({
    check: "properties",
    shape,
    ...normalizeParams(params)
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
function _trim() {
  return _overwrite((input) => input.trim());
}
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
function _slugify() {
  return _overwrite((input) => slugify(input));
}
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
function _superRefine(fn, params) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    sharedDefsExtractedFor: undefined,
    sharedEmitDoneFor: undefined,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? undefined
  };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === undefined || result === "throw")
    throw new Error(message);
  Object.assign(json, result);
  return true;
}
function processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a18;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = undefined;
  ctx.sharedEmitDoneFor = undefined;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      processSchema(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    assignProps(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a18 = result.schema).default ?? (_a18.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== undefined)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS = new Set(["type", "properties", "required", "additionalProperties"]);
var UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  const extra = member.additionalProperties;
  if (extra === undefined || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects(members2) {
  const objects = [];
  for (const member of members2) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required2 = new Set;
  for (const object of objects) {
    for (const key in object.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = other.properties?.[key] ?? undeclaredConstraint(other);
        if (part === null || part === undefined)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (const key of object.required ?? [])
      required2.add(key);
  }
  const folded = { type: "object", properties };
  if (required2.size)
    folded.required = [...required2];
  if (objects.every((object) => object.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object of objects) {
      const constraint = undeclaredConstraint(object);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union = unions[0];
    const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
    if (Object.keys(union).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union);
    const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps(json, folded);
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps(schema2, refSchema);
      }
      assignProps(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = new Map;
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== undefined && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/core/json-schema-processors.js
var narrowMin = (agg, key, value) => {
  if (agg[key] === undefined || value > agg[key])
    agg[key] = value;
};
var narrowMax = (agg, key, value) => {
  if (agg[key] === undefined || value < agg[key])
    agg[key] = value;
};
var narrowBoth = (agg, value) => {
  narrowMin(agg, "minimum", value);
  narrowMax(agg, "maximum", value);
};
var addDivisor = (agg, value) => {
  agg.multipleOf ?? (agg.multipleOf = []);
  if (!agg.multipleOf.includes(value))
    agg.multipleOf.push(value);
};
var addPattern = (agg, pattern) => {
  agg.patterns ?? (agg.patterns = new Set);
  agg.patterns.add(pattern);
};
var intersectMime = (agg, mime) => {
  agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
var setFormat = (agg, format) => {
  agg.format = format;
  if (format.includes("int"))
    agg.isInt = true;
};
var minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
var maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
var formatContributor = (ranges) => (agg, def) => {
  setFormat(agg, def.format);
  const [minimum, maximum] = ranges[def.format];
  narrowMin(agg, "minimum", minimum);
  narrowMax(agg, "maximum", maximum);
};
var contributors = {
  greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
  less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
  multiple_of: (agg, def) => addDivisor(agg, def.value),
  number_format: formatContributor(NUMBER_FORMAT_RANGES),
  bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
  min_length: minContributor,
  max_length: maxContributor,
  length_equals: (agg, def) => narrowBoth(agg, def.length),
  min_size: minContributor,
  max_size: maxContributor,
  size_equals: (agg, def) => narrowBoth(agg, def.size),
  string_format: (agg, def) => {
    setFormat(agg, def.format);
    if (def.pattern)
      addPattern(agg, def.pattern);
    if (def.format === "base64" || def.format === "base64url")
      agg.contentEncoding = def.format;
    if (def.local || def.precision === -1)
      agg.laxFormat = true;
  },
  mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
  const agg = {};
  const def = schema._zod.def;
  const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (const ch of list)
    contributors[ch._zod.def.check]?.(agg, ch._zod.def);
  const bag = schema._zod.bag;
  if (bag.minimum !== undefined)
    narrowMin(agg, "minimum", bag.minimum);
  if (bag.exclusiveMinimum !== undefined)
    narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
  if (bag.maximum !== undefined)
    narrowMax(agg, "maximum", bag.maximum);
  if (bag.exclusiveMaximum !== undefined)
    narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
  if (bag.multipleOf !== undefined)
    addDivisor(agg, bag.multipleOf);
  if (bag.format !== undefined) {
    agg.format ?? (agg.format = bag.format);
    if (bag.format.includes("int"))
      agg.isInt = true;
  }
  if (bag.mime)
    intersectMime(agg, bag.mime);
  for (const pattern of bag.patterns ?? [])
    addPattern(agg, pattern);
  return agg;
}
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
};
var exactPatterns = new Map([
  [base64Charset, base64],
  [base64urlCharset, base64url]
]);
var exactPattern = (p) => exactPatterns.get(p) ?? p;
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns].map(exactPattern);
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
  json.type = isInt ? "integer" : "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json.maximum = maximum;
  }
  if (multipleOf) {
    const divisors = new Set;
    for (const divisor of multipleOf) {
      if (Number.isFinite(divisor) && divisor !== 0)
        divisors.add(Math.abs(divisor));
      else
        handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
    }
    const [first, ...rest] = divisors;
    if (first !== undefined)
      json.multipleOf = first;
    if (rest.length)
      json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))];
  }
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var bigintProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
var symbolProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json, _params) => {
  if (ctx.target === "openapi-3.0") {
    json.type = "string";
    json.nullable = true;
    json.enum = [null];
  } else {
    json.type = "null";
  }
};
var undefinedProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
};
var voidProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  if (def.values.length === 0) {
    json.not = {};
    return;
  }
  const vals = [];
  for (const val of def.values) {
    if (val === undefined) {
      if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val === "bigint") {
      if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {} else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var nanProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
  const _json = json;
  _json.type = "string";
  _json.format = "binary";
  _json.contentEncoding = "binary";
  const { minimum, maximum, mime } = aggregateChecks(schema);
  if (minimum !== undefined)
    _json.minLength = minimum;
  if (maximum !== undefined)
    _json.maxLength = maximum;
  if (!mime)
    return;
  if (mime.length === 0)
    _json.not = {};
  else if (mime.length === 1)
    _json.contentMediaType = mime[0];
  else
    _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
};
var successProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var functionProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var mapProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
};
var setProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = processSchema(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp(json.properties, key, processSchema(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const requiredKeys = [];
  for (const key of Object.keys(shape)) {
    const field = def.shape[key];
    if (ctx.io === "input" ? inputOptin(field) === undefined : field._zod.optout === undefined) {
      requiredKeys.push(key);
    }
  }
  if (requiredKeys.length > 0) {
    json.required = requiredKeys;
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = processSchema(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = processSchema(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = processSchema(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? processSchema(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  let minItems = def.items.length;
  while (minItems > 0) {
    const item = def.items[minItems - 1];
    const optional = ctx.io === "input" ? inputOptin(item) !== undefined : item._zod.optout === "optional";
    if (!optional)
      break;
    minItems--;
  }
  const maxItems = def.items.length;
  const isClosed = !def.rest;
  if (ctx.target === "draft-2020-12") {
    json.prefixItems = prefixItems;
    if (isClosed) {
      json.items = false;
    } else if (rest) {
      json.items = rest;
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  } else if (ctx.target === "openapi-3.0") {
    json.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json.items.anyOf.push(rest);
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  } else {
    json.items = prefixItems;
    if (isClosed) {
      json.additionalItems = false;
    } else if (rest) {
      json.additionalItems = rest;
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  }
  const { minimum, maximum } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
};
function stringifyKeyNames(bySchema, json, visited) {
  if (json.$ref) {
    if (visited.has(json))
      return json;
    visited.add(json);
    const def = bySchema.get(json)?.def;
    if (!def)
      return json;
    const inlined = stringifyKeyNames(bySchema, def, visited);
    return inlined === def ? json : inlined;
  }
  for (const keyword of ["anyOf", "oneOf"]) {
    const branches = json[keyword];
    if (!Array.isArray(branches))
      continue;
    const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
    if (mapped.some((branch, i) => branch !== branches[i]))
      json = { ...json, [keyword]: mapped };
  }
  const types = Array.isArray(json.type) ? json.type : [json.type];
  const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
  const values = json.enum ?? (json.const !== undefined ? [json.const] : undefined);
  if (!numericType && !values?.some((v) => typeof v === "number"))
    return json;
  const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
  if (rest.enum)
    rest.enum = rest.enum.map((v) => typeof v === "number" ? String(v) : v);
  else if (typeof rest.const === "number")
    rest.const = String(rest.const);
  if (!numericType)
    return rest;
  rest.type = "string";
  if (!values)
    rest.pattern = (types.includes("number") ? number : integer).source;
  return rest;
}
var pendingRecords = new WeakMap;
function rewriteKeyNames(ctx) {
  const bySchema = new Map;
  for (const entry of ctx.seen.values()) {
    if (entry.def && !bySchema.has(entry.schema))
      bySchema.set(entry.schema, entry);
  }
  const rewrites = new Map;
  for (const record of pendingRecords.get(ctx) ?? []) {
    const seen = ctx.seen.get(record);
    const names = (seen?.def ?? seen?.schema)?.propertyNames;
    if (!names || names === true || rewrites.has(names))
      continue;
    const rewritten = stringifyKeyNames(bySchema, names, new Set);
    if (rewritten !== names)
      rewrites.set(names, rewritten);
  }
  if (!rewrites.size)
    return;
  for (const entry of ctx.seen.values()) {
    for (const carrier of [entry.schema, entry.def]) {
      const rewritten = carrier && rewrites.get(carrier.propertyNames);
      if (rewritten)
        carrier.propertyNames = rewritten;
    }
  }
}
var recordProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  const keyType = def.keyType;
  const patterns = aggregateChecks(keyType).patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = processSchema(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (const pattern of patterns) {
      assignProp(json.patternProperties, exactPattern(pattern).source, valueSchema);
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = processSchema(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
      let pending = pendingRecords.get(ctx);
      if (!pending) {
        pending = [];
        pendingRecords.set(ctx, pending);
        ctx.deferred.push(() => rewriteKeyNames(ctx));
      }
      pending.push(schema);
    }
    json.additionalProperties = processSchema(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== undefined;
  if (keyValues && !def.partial && !omittableOnInput) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json.required = validKeyValues.map(String);
    }
  }
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json.default = value;
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json._prefault = value;
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  processSchema(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  processSchema(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      processSchema(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      assignProp(schemas, key, finalize(ctx2, schema));
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  processSchema(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}
// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos.has(proto))
    return;
  _installedErrorProtos.add(proto);
  _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
  _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
  _lazyMethod(proto, "addIssue", (self) => (issue2) => {
    self.issues.push(issue2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self) => (issues2) => {
    self.issues.push(...issues2);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, undefined, {
  Parent: Error
});

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// ../../node_modules/.bun/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
  if (!globalConfig.localeError)
    config(en_default());
}
function _ensureDefaultMemoizer() {
  if (!globalConfig.memoizer)
    config({ memoizer: memoizer() });
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  _ensureDefaultLocale();
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(exports_util.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta2) {
    reg.add(this, meta2);
    return this;
  },
  refine(check, params) {
    return this.check(refine(check, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    const cl = this.clone();
    globalRegistry.add(cl, { description });
    return cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    const cl = this.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  },
  isOptional() {
    return this.safeParse(undefined).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  get "~standard"() {
    return exports_util.hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    exports_util.own(this, "~standard", value);
  },
  parse: function _parse2(data, params) {
    return parse2(this, data, params, { callee: _parse2 });
  },
  parseAsync: async function _parseAsync2(data, params) {
    return await parseAsync(this, data, params, { callee: _parseAsync2 });
  },
  safeParse(data, params) {
    return safeParse(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync(this, data, params);
  },
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    exports_util.own(this, "spa", value);
  },
  validate(data, params) {
    return validate(this, data, params);
  },
  validateAsync(data, params) {
    return validateAsync(this, data, params);
  },
  encode: function _encode2(data, params) {
    return encode(this, data, params, { callee: _encode2 });
  },
  decode: function _decode2(data, params) {
    return decode(this, data, params, { callee: _decode2 });
  },
  encodeAsync: async function _encodeAsync2(data, params) {
    return await encodeAsync(this, data, params, { callee: _encodeAsync2 });
  },
  decodeAsync: async function _decodeAsync2(data, params) {
    return await decodeAsync(this, data, params, { callee: _decodeAsync2 });
  },
  safeEncode(data, params) {
    return safeEncode(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  get description() {
    return globalRegistry.get(this)?.description;
  },
  get _def() {
    return this._zod.def;
  }
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
}, /* @__PURE__ */ exports_util.derived({
  format: (inst) => aggregateChecks(inst).format ?? null,
  minLength: (inst) => aggregateChecks(inst).minimum ?? null,
  maxLength: (inst) => aggregateChecks(inst).maximum ?? null
}, {
  regex(...args) {
    return this.check(_regex(...args));
  },
  includes(...args) {
    return this.check(_includes(...args));
  },
  startsWith(...args) {
    return this.check(_startsWith(...args));
  },
  endsWith(...args) {
    return this.check(_endsWith(...args));
  },
  min(...args) {
    return this.check(_minLength(...args));
  },
  max(...args) {
    return this.check(_maxLength(...args));
  },
  length(...args) {
    return this.check(_length(...args));
  },
  nonempty(...args) {
    return this.check(_minLength(1, ...args));
  },
  lowercase(params) {
    return this.check(_lowercase(params));
  },
  uppercase(params) {
    return this.check(_uppercase(params));
  },
  trim() {
    return this.check(_trim());
  },
  normalize(...args) {
    return this.check(_normalize(...args));
  },
  toLowerCase() {
    return this.check(_toLowerCase());
  },
  toUpperCase() {
    return this.check(_toUpperCase());
  },
  slugify() {
    return this.check(_slugify());
  }
}));
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(_email(ZodEmail, params));
  },
  url(params) {
    return this.check(_url(ZodURL, params));
  },
  jwt(params) {
    return this.check(_jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(_emoji2(ZodEmoji, params));
  },
  guid(params) {
    return this.check(_guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(_uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(_uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(_uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(_uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(_nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(_cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(_cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(_ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(_base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(_base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(_xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(_ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(_ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(_ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(_cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(_cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(_e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(_isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(_isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(_isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(_isoDuration(ZodISODuration, params));
  }
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  inst.isFinite = true;
}, /* @__PURE__ */ exports_util.derived({
  minValue: (inst) => {
    const { minimum, exclusiveMinimum } = aggregateChecks(inst);
    return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
  },
  maxValue: (inst) => {
    const { maximum, exclusiveMaximum } = aggregateChecks(inst);
    return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
  },
  isInt: (inst) => {
    const { isInt, multipleOf } = aggregateChecks(inst);
    return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
  },
  format: (inst) => aggregateChecks(inst).format ?? null
}, {
  gt(value, params) {
    return this.check(_gt(value, params));
  },
  gte(value, params) {
    return this.check(_gte(value, params));
  },
  min(value, params) {
    return this.check(_gte(value, params));
  },
  lt(value, params) {
    return this.check(_lt(value, params));
  },
  lte(value, params) {
    return this.check(_lte(value, params));
  },
  max(value, params) {
    return this.check(_lte(value, params));
  },
  int(params) {
    return this.check(int(params));
  },
  safe(params) {
    return this.check(int(params));
  },
  positive(params) {
    return this.check(_gt(0, params));
  },
  nonnegative(params) {
    return this.check(_gte(0, params));
  },
  negative(params) {
    return this.check(_lt(0, params));
  },
  nonpositive(params) {
    return this.check(_lte(0, params));
  },
  multipleOf(value, params) {
    return this.check(_multipleOf(value, params));
  },
  step(value, params) {
    return this.check(_multipleOf(value, params));
  },
  finite() {
    return this;
  }
}));
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => anyProcessor(inst, ctx, json, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength(n, params));
  },
  nonempty(params) {
    return this.check(_minLength(1, params));
  },
  max(n, params) {
    return this.check(_maxLength(n, params));
  },
  length(n, params) {
    return this.check(_length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  exports_util.installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone(exports_util.mergeDefs(this._zod.def, { catchall }));
  },
  passthrough() {
    return this.clone(exports_util.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  loose() {
    return this.clone(exports_util.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  strict() {
    return this.clone(exports_util.mergeDefs(this._zod.def, { catchall: never() }));
  },
  strip() {
    return this.clone(exports_util.mergeDefs(this._zod.def, { catchall: undefined }));
  },
  extend(incoming) {
    return exports_util.extend(this, incoming);
  },
  safeExtend(incoming) {
    return exports_util.safeExtend(this, incoming);
  },
  merge(other) {
    return exports_util.merge(this, other);
  },
  pick(mask) {
    return exports_util.pick(this, mask);
  },
  omit(mask) {
    return exports_util.omit(this, mask);
  },
  partial(...args) {
    return exports_util.partial(ZodOptional, this, args[0]);
  },
  exactPartial(...args) {
    return exports_util.partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return exports_util.required(ZodNonOptional, this, args[0]);
  }
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...exports_util.normalizeParams(params)
  };
  return new ZodObject(def);
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...exports_util.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...exports_util.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...exports_util.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  if (!valueType || !valueType._zod) {
    return new ZodRecord({
      type: "record",
      keyType: string2(),
      valueType: keyType,
      ...exports_util.normalizeParams(valueType)
    });
  }
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = [...inst._zod.values];
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...exports_util.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...exports_util.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...exports_util.normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(exports_util.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(exports_util.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : exports_util.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...exports_util.normalizeParams(params)
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : exports_util.constantCatch(catchValue)
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
var ZodInstanceOf = /* @__PURE__ */ $constructor("ZodInstanceOf", (inst, def) => {
  ZodCustom.init(inst, def);
}, {
  properties(shape, params) {
    return this.check(_properties(shape, params));
  }
});
function _instanceof(cls, params = {}) {
  const inst = new ZodInstanceOf({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...exports_util.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}

// ../../node_modules/.bun/eventsource-parser@3.1.1/node_modules/eventsource-parser/dist/index.js
class ParseError extends Error {
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
}
var LF = 10;
var CR = 13;
var SPACE = 32;
function noop(_arg) {}
function createParser(config2) {
  if (typeof config2 == "function")
    throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
  const { onEvent = noop, onError = noop, onRetry = noop, onComment, maxBufferSize } = config2, pendingFragments = [];
  let pendingFragmentsLength = 0, isFirstChunk = true, id, data = "", dataLines = 0, eventType, terminated = false;
  function feed(chunk) {
    if (terminated)
      throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
    if (isFirstChunk && (isFirstChunk = false, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
      const trailing2 = processLines(chunk);
      trailing2 !== "" && (pendingFragments.push(trailing2), pendingFragmentsLength = trailing2.length), checkBufferSize();
      return;
    }
    if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
      pendingFragments.push(chunk), pendingFragmentsLength += chunk.length, checkBufferSize();
      return;
    }
    pendingFragments.push(chunk);
    const input = pendingFragments.join("");
    pendingFragments.length = 0, pendingFragmentsLength = 0;
    const trailing = processLines(input);
    trailing !== "" && (pendingFragments.push(trailing), pendingFragmentsLength = trailing.length), checkBufferSize();
  }
  function checkBufferSize() {
    maxBufferSize !== undefined && (pendingFragmentsLength + data.length <= maxBufferSize || (terminated = true, pendingFragments.length = 0, pendingFragmentsLength = 0, id = undefined, data = "", dataLines = 0, eventType = undefined, onError(new ParseError(`Buffered data exceeded max buffer size of ${maxBufferSize} characters`, {
      type: "max-buffer-size-exceeded"
    }))));
  }
  function processLines(chunk) {
    let searchIndex = 0;
    if (chunk.indexOf("\r") === -1) {
      let lfIndex = chunk.indexOf(`
`, searchIndex);
      for (;lfIndex !== -1; ) {
        if (searchIndex === lfIndex) {
          dataLines > 0 && onEvent({ id, event: eventType, data }), id = undefined, data = "", dataLines = 0, eventType = undefined, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
          continue;
        }
        const firstCharCode = chunk.charCodeAt(searchIndex);
        if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
          const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
          if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
            onEvent({ id, event: eventType, data: value }), id = undefined, data = "", eventType = undefined, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
            continue;
          }
          data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
        } else
          isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || undefined : parseLine(chunk, searchIndex, lfIndex);
        searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
      }
      return chunk.slice(searchIndex);
    }
    for (;searchIndex < chunk.length; ) {
      const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
      let lineEnd = -1;
      if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1)
        break;
      parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
    }
    return chunk.slice(searchIndex);
  }
  function parseLine(chunk, start, end) {
    if (start === end) {
      dispatchEvent();
      return;
    }
    const firstCharCode = chunk.charCodeAt(start);
    if (isDataPrefix(chunk, start, firstCharCode)) {
      const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
      data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
      return;
    }
    if (isEventPrefix(chunk, start, firstCharCode)) {
      eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || undefined;
      return;
    }
    if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
      const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
      value2.includes("\x00") || (id = value2);
      return;
    }
    if (firstCharCode === 58) {
      if (onComment) {
        const line2 = chunk.slice(start, end);
        onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
      }
      return;
    }
    const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex === -1) {
      processField(line, "", line);
      return;
    }
    const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
    processField(field, value, line);
  }
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value || undefined;
        break;
      case "data":
        data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
        break;
      case "id":
        value.includes("\x00") || (id = value);
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
          type: "invalid-retry",
          value,
          line
        }));
        break;
      default:
        onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, { type: "unknown-field", field, value, line }));
        break;
    }
  }
  function dispatchEvent() {
    dataLines > 0 && onEvent({
      id,
      event: eventType,
      data
    }), id = undefined, data = "", dataLines = 0, eventType = undefined;
  }
  function reset(options = {}) {
    if (options.consume && pendingFragments.length > 0) {
      const incompleteLine = pendingFragments.join("");
      parseLine(incompleteLine, 0, incompleteLine.length);
    }
    isFirstChunk = true, id = undefined, data = "", dataLines = 0, eventType = undefined, pendingFragments.length = 0, pendingFragmentsLength = 0, terminated = false;
  }
  return { feed, reset };
}
function isDataPrefix(chunk, i, firstCharCode) {
  return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
  return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}

// ../../node_modules/.bun/eventsource-parser@3.1.1/node_modules/eventsource-parser/dist/stream.js
class EventSourceParserStream extends TransformStream {
  constructor({ onError, onRetry, onComment, maxBufferSize } = {}) {
    let parser;
    super({
      start(controller) {
        parser = createParser({
          onEvent: (event) => {
            controller.enqueue(event);
          },
          onError(error2) {
            typeof onError == "function" && onError(error2), (onError === "terminate" || error2.type === "max-buffer-size-exceeded") && controller.error(error2);
          },
          onRetry,
          onComment,
          maxBufferSize
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
}

// ../../node_modules/.bun/@workflow+serde@4.1.0/node_modules/@workflow/serde/dist/index.js
var WORKFLOW_SERIALIZE = Symbol.for("workflow-serialize");
var WORKFLOW_DESERIALIZE = Symbol.for("workflow-deserialize");

// ../../node_modules/.bun/@ai-sdk+provider-utils@5.0.49+fff7ddf946fac095/node_modules/@ai-sdk/provider-utils/dist/index.js
function asArray(value) {
  return value === undefined ? [] : Array.isArray(value) ? value : [value];
}
function combineHeaders(...headers) {
  return headers.reduce((combinedHeaders, currentHeaders) => ({
    ...combinedHeaders,
    ...currentHeaders
  }), {});
}
function removeUndefinedEntries(record2) {
  return Object.fromEntries(Object.entries(record2).filter(([_key, value]) => value != null));
}
async function delay(delayInMs, options) {
  if (delayInMs == null) {
    return;
  }
  const signal = options?.abortSignal;
  return new Promise((resolve2, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }
    const timeoutId = setTimeout(() => {
      cleanup();
      resolve2();
    }, delayInMs);
    const cleanup = () => {
      clearTimeout(timeoutId);
      signal?.removeEventListener("abort", onAbort);
    };
    const onAbort = () => {
      cleanup();
      reject(createAbortError());
    };
    signal?.addEventListener("abort", onAbort);
  });
}
function createAbortError() {
  return new DOMException("Delay was aborted", "AbortError");
}
function getWebSocketConstructor(webSocket) {
  const WebSocketConstructor = webSocket ?? globalThis.WebSocket;
  if (WebSocketConstructor == null) {
    throw new Error("No WebSocket implementation available.");
  }
  return WebSocketConstructor;
}
var textDecoder = new TextDecoder;
async function readWebSocketMessageText(data) {
  if (typeof data === "string")
    return data;
  if (data instanceof ArrayBuffer)
    return textDecoder.decode(data);
  if (ArrayBuffer.isView(data)) {
    return textDecoder.decode(data);
  }
  if (typeof Blob !== "undefined" && data instanceof Blob) {
    return data.text();
  }
  return String(data);
}
var WEBSOCKET_OPEN_STATE = 1;
async function waitForWebSocketBufferDrain(socket, {
  highWaterMark = 1024 * 1024,
  pollIntervalMs = 20,
  abortSignal
} = {}) {
  while (socket.readyState === WEBSOCKET_OPEN_STATE && (socket.bufferedAmount ?? 0) > highWaterMark) {
    if (abortSignal?.aborted === true) {
      return;
    }
    await delay(pollIntervalMs);
  }
}
function connectToWebSocket({
  url,
  protocols,
  headers,
  webSocket,
  abortSignal,
  onOpen,
  onMessageText,
  onProcessingError,
  onSocketError,
  onClose,
  onAbort
}) {
  let socket;
  let abortListener;
  const close = (code) => {
    if (abortListener != null) {
      abortSignal?.removeEventListener("abort", abortListener);
      abortListener = undefined;
    }
    try {
      socket?.close(code);
    } catch {}
  };
  if (abortSignal?.aborted) {
    onAbort?.(abortSignal.reason ?? new Error("Aborted"));
    return { socket: undefined, close };
  }
  try {
    const WebSocketConstructor = getWebSocketConstructor(webSocket);
    socket = new WebSocketConstructor(url, protocols, {
      headers: removeUndefinedEntries(headers ?? {})
    });
  } catch (error2) {
    onProcessingError(error2);
    return { socket: undefined, close };
  }
  if (abortSignal != null && onAbort != null) {
    abortListener = () => onAbort(abortSignal.reason ?? new Error("Aborted"));
    abortSignal.addEventListener("abort", abortListener, { once: true });
  }
  const openedSocket = socket;
  socket.onopen = () => {
    try {
      onOpen?.(openedSocket);
    } catch (error2) {
      onProcessingError(error2);
    }
  };
  let tail = Promise.resolve();
  socket.onmessage = (event) => {
    tail = tail.then(() => readWebSocketMessageText(event.data)).then((text) => onMessageText(text)).catch(onProcessingError);
  };
  socket.onerror = () => {
    tail = tail.then(() => onSocketError?.()).catch(onProcessingError);
  };
  socket.onclose = (event) => {
    const closeEvent = event;
    const code = typeof closeEvent?.code === "number" ? closeEvent.code : undefined;
    const reason = typeof closeEvent?.reason === "string" ? closeEvent.reason : undefined;
    tail = tail.then(() => onClose?.({ code, reason })).catch(onProcessingError);
  };
  return { socket, close };
}
function convertAsyncIteratorToReadableStream(iterator) {
  let cancelled = false;
  return new ReadableStream({
    async pull(controller) {
      if (cancelled)
        return;
      try {
        const { value, done } = await iterator.next();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error2) {
        controller.error(error2);
      }
    },
    async cancel(reason) {
      cancelled = true;
      if (iterator.return) {
        try {
          await iterator.return(reason);
        } catch {}
      }
    }
  });
}
var { btoa: btoa2, atob: atob2 } = globalThis;
function convertBase64ToUint8Array(base64String) {
  const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
  const latin1string = atob2(base64Url);
  return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array2) {
  const chunks = [];
  const chunkSize = 4096;
  for (let i = 0;i < array2.length; i += chunkSize) {
    chunks.push(String.fromCodePoint(...array2.subarray(i, i + chunkSize)));
  }
  return btoa2(chunks.join(""));
}
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
  if (globalThisAny.window) {
    return `runtime/browser`;
  }
  if (globalThisAny.navigator?.userAgent) {
    return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
  }
  if (globalThisAny.process?.versions?.node) {
    return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
  }
  if (globalThisAny.EdgeRuntime) {
    return `runtime/vercel-edge`;
  }
  return "runtime/unknown";
}
function isAbortError(error2) {
  return (error2 instanceof Error || typeof DOMException === "function" && error2 instanceof DOMException) && (error2.name === "AbortError" || error2.name === "ResponseAborted" || error2.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var RETRYABLE_NETWORK_ERROR_CODES = /* @__PURE__ */ new Set([
  "ConnectionRefused",
  "ConnectionClosed",
  "FailedToOpenSocket",
  "ECONNRESET",
  "ECONNREFUSED",
  "ETIMEDOUT",
  "EPIPE",
  "UND_ERR_SOCKET",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_BODY_TIMEOUT",
  "UND_ERR_CONNECT_TIMEOUT"
]);
function findNetworkError(error2) {
  const visited = /* @__PURE__ */ new Set;
  let current = error2;
  while (current instanceof Error && !visited.has(current)) {
    visited.add(current);
    const errorWithCode = current;
    if (typeof errorWithCode.code === "string" && RETRYABLE_NETWORK_ERROR_CODES.has(errorWithCode.code)) {
      return errorWithCode;
    }
    current = current.cause;
  }
}
function handleFetchError({
  error: error2,
  url,
  requestBodyValues
}) {
  if (isAbortError(error2)) {
    return error2;
  }
  if (error2 instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error2.message.toLowerCase())) {
    const cause = error2.cause;
    if (cause != null) {
      return new APICallError({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url,
        requestBodyValues,
        isRetryable: true
      });
    }
  }
  const networkError = findNetworkError(error2);
  if (networkError != null) {
    if (APICallError.isInstance(error2)) {
      return new APICallError({
        message: error2.message,
        cause: error2.cause,
        url: error2.url,
        requestBodyValues: error2.requestBodyValues,
        statusCode: error2.statusCode,
        responseHeaders: error2.responseHeaders,
        responseBody: error2.responseBody,
        data: error2.data,
        isRetryable: true
      });
    }
    return new APICallError({
      message: `Cannot connect to API: ${error2 instanceof Error ? error2.message : networkError.message}`,
      cause: error2,
      url,
      requestBodyValues,
      isRetryable: true
    });
  }
  return error2;
}
var VERSION = "5.0.49";
function normalizeHeaders(headers) {
  if (headers == null) {
    return {};
  }
  const normalized = {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      normalized[key.toLowerCase()] = value;
    });
  } else {
    if (!Array.isArray(headers)) {
      headers = Object.entries(headers);
    }
    for (const [key, value] of headers) {
      if (value != null) {
        normalized[key.toLowerCase()] = value;
      }
    }
  }
  return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
  const normalizedHeaders = new Headers(normalizeHeaders(headers));
  const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
  normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
  return Object.fromEntries(normalizedHeaders.entries());
}
var audioMediaTypeSignaturesWithoutMp4 = [
  {
    mediaType: "audio/aac",
    bytesPrefix: [255, 240]
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [255, 241]
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [255, 248]
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [255, 249]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 251]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 250]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 243]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 242]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 227]
  },
  {
    mediaType: "audio/mpeg",
    bytesPrefix: [255, 226]
  },
  {
    mediaType: "audio/wav",
    bytesPrefix: [
      82,
      73,
      70,
      70,
      null,
      null,
      null,
      null,
      87,
      65,
      86,
      69
    ]
  },
  {
    mediaType: "audio/ogg",
    bytesPrefix: [79, 103, 103, 83]
  },
  {
    mediaType: "audio/flac",
    bytesPrefix: [102, 76, 97, 67]
  },
  {
    mediaType: "audio/aac",
    bytesPrefix: [64, 21, 0, 0]
  },
  {
    mediaType: "audio/webm",
    bytesPrefix: [26, 69, 223, 163]
  }
];
var audioMediaTypeSignatures = [
  ...audioMediaTypeSignaturesWithoutMp4,
  {
    mediaType: "audio/mp4",
    bytesPrefix: [
      0,
      0,
      0,
      null,
      102,
      116,
      121,
      112
    ]
  }
];
var MAX_SIGNATURE_BYTES = 12;
var MAX_ID3_TAG_BYTES = 128 * 1024;
var ID3_SCAN_BYTES = MAX_ID3_TAG_BYTES + MAX_SIGNATURE_BYTES;
async function cancelResponseBody(response) {
  try {
    await response.body?.cancel();
  } catch {}
}
var name16 = "AI_DownloadError";
var marker22 = `vercel.ai.error.${name16}`;
var symbol17 = Symbol.for(marker22);
var _a20;
var _b17;
var DownloadError = class extends (_b17 = AISDKError, _a20 = symbol17, _b17) {
  constructor({
    url,
    statusCode,
    statusText,
    cause,
    message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}`
  }) {
    super({ name: name16, message, cause });
    this[_a20] = true;
    this.url = url;
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker22);
  }
};
function isBrowserRuntime(globalThisAny = globalThis) {
  return globalThisAny.window != null;
}
function isSameOrigin(url, baseUrl) {
  try {
    return new URL(url).origin === new URL(baseUrl).origin;
  } catch {
    return false;
  }
}
function validateDownloadUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    throw new DownloadError({
      url,
      message: `Invalid URL: ${url}`
    });
  }
  if (parsed.protocol === "data:") {
    return;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new DownloadError({
      url,
      message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
    });
  }
  const hostname = parsed.hostname.toLowerCase().replace(/\.+$/, "");
  if (!hostname) {
    throw new DownloadError({
      url,
      message: `URL must have a hostname`
    });
  }
  if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) {
    throw new DownloadError({
      url,
      message: `URL with hostname ${hostname} is not allowed`
    });
  }
  if (hostname.startsWith("[") && hostname.endsWith("]")) {
    const ipv62 = hostname.slice(1, -1);
    if (isPrivateIPv6(ipv62)) {
      throw new DownloadError({
        url,
        message: `URL with IPv6 address ${hostname} is not allowed`
      });
    }
    return;
  }
  if (isIPv4(hostname)) {
    if (isPrivateIPv4(hostname)) {
      throw new DownloadError({
        url,
        message: `URL with IP address ${hostname} is not allowed`
      });
    }
  }
}
function validateDownloadAddress({
  address,
  family,
  hostname
}) {
  const isUnsafe = family === 4 ? !isIPv4(address) || isPrivateIPv4(address) : family === 6 ? isPrivateIPv6(address) : true;
  if (isUnsafe) {
    throw new DownloadError({
      url: hostname,
      message: `Hostname ${hostname} resolved to disallowed IP address ${address}`
    });
  }
}
function isIPv4(hostname) {
  const parts = hostname.split(".");
  if (parts.length !== 4)
    return false;
  return parts.every((part) => {
    const num = Number(part);
    return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
  });
}
function isPrivateIPv4(ip) {
  const parts = ip.split(".").map(Number);
  const [a, b, c] = parts;
  if (a === 0)
    return true;
  if (a === 10)
    return true;
  if (a === 100 && b >= 64 && b <= 127)
    return true;
  if (a === 127)
    return true;
  if (a === 169 && b === 254)
    return true;
  if (a === 172 && b >= 16 && b <= 31)
    return true;
  if (a === 192 && b === 0 && c === 0)
    return true;
  if (a === 192 && b === 0 && c === 2)
    return true;
  if (a === 192 && b === 168)
    return true;
  if (a === 198 && (b === 18 || b === 19))
    return true;
  if (a === 198 && b === 51 && c === 100)
    return true;
  if (a === 203 && b === 0 && c === 113)
    return true;
  if (a >= 224)
    return true;
  return false;
}
function parseIPv6(ip) {
  let address = ip.toLowerCase();
  const zoneIndex = address.indexOf("%");
  if (zoneIndex !== -1) {
    address = address.slice(0, zoneIndex);
  }
  const halves = address.split("::");
  if (halves.length > 2)
    return null;
  const toGroups = (segment) => {
    if (segment === "")
      return [];
    const groups = [];
    const parts = segment.split(":");
    for (let i = 0;i < parts.length; i++) {
      const part = parts[i];
      if (part.includes(".")) {
        if (i !== parts.length - 1 || !isIPv4(part))
          return null;
        const [a, b, c, d] = part.split(".").map(Number);
        groups.push(a << 8 | b, c << 8 | d);
        continue;
      }
      if (!/^[0-9a-f]{1,4}$/.test(part))
        return null;
      groups.push(parseInt(part, 16));
    }
    return groups;
  };
  const head = toGroups(halves[0]);
  if (head === null)
    return null;
  if (halves.length === 2) {
    const tail = toGroups(halves[1]);
    if (tail === null)
      return null;
    const fill = 8 - head.length - tail.length;
    if (fill < 0)
      return null;
    return [...head, ...new Array(fill).fill(0), ...tail];
  }
  return head.length === 8 ? head : null;
}
function isPrivateIPv6(ip) {
  const groups = parseIPv6(ip);
  if (groups === null)
    return true;
  const topZero = (count) => groups.slice(0, count).every((group) => group === 0);
  if (topZero(7) && (groups[7] === 0 || groups[7] === 1))
    return true;
  if ((groups[0] & 65024) === 64512)
    return true;
  if ((groups[0] & 65472) === 65152)
    return true;
  if ((groups[0] & 65472) === 65216)
    return true;
  if ((groups[0] & 65280) === 65280)
    return true;
  if (groups[0] === 8193 && groups[1] === 3512)
    return true;
  if (groups[0] === 16383 && (groups[1] & 61440) === 0)
    return true;
  const embedsIPv4 = topZero(6) || topZero(5) && groups[5] === 65535 || topZero(4) && groups[4] === 65535 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 0 && groups[3] === 0 && groups[4] === 0 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 1;
  if (embedsIPv4) {
    const a = groups[6] >> 8 & 255;
    const b = groups[6] & 255;
    const c = groups[7] >> 8 & 255;
    const d = groups[7] & 255;
    return isPrivateIPv4(`${a}.${b}.${c}.${d}`);
  }
  return false;
}
function createSafeLookup(lookup) {
  return (hostname, options, callback) => {
    lookup(hostname, { ...options, all: true }, (error2, addresses) => {
      if (error2) {
        callback(error2);
        return;
      }
      try {
        const [firstAddress] = addresses;
        if (firstAddress == null) {
          throw new Error(`Hostname ${hostname} did not resolve to an address`);
        }
        for (const { address, family } of addresses) {
          validateDownloadAddress({ address, family, hostname });
        }
        if (options.all === true) {
          callback(null, addresses);
        } else {
          callback(null, firstAddress.address, firstAddress.family);
        }
      } catch (error22) {
        callback(error22 instanceof Error ? error22 : new Error(String(error22)));
      }
    });
  };
}
var safeNodeFetchPromise;
function isNodeRuntime() {
  const runtimeProcess = globalThis.process;
  return runtimeProcess?.release?.name === "node" && runtimeProcess.versions?.bun == null && runtimeProcess.versions?.deno == null && runtimeProcess.title !== "workerd" && globalThis.EdgeRuntime == null;
}
async function getDefaultDownloadFetch() {
  if (!isNodeRuntime()) {
    return globalThis.fetch;
  }
  return safeNodeFetchPromise ??= Promise.resolve().then(createSafeNodeFetch);
}
function createSafeNodeFetch() {
  const module = loadBuiltinModule("node:module");
  const { lookup } = loadBuiltinModule("node:dns");
  const nodeRequire = module.createRequire(getCurrentModulePath());
  const { Agent, fetch: fetch2 } = nodeRequire("undici");
  const dispatcher = new Agent({
    connect: {
      lookup: createSafeLookup(lookup)
    }
  });
  return (input, init) => fetch2(input, {
    ...init,
    dispatcher
  });
}
function loadBuiltinModule(id) {
  const processWithBuiltins = globalThis.process;
  const builtinModule = processWithBuiltins?.getBuiltinModule?.(id);
  if (builtinModule == null) {
    throw new Error(`Node.js built-in module ${id} is unavailable`);
  }
  return builtinModule;
}
function getCurrentModulePath() {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_error, callSites) => callSites;
    const error2 = new Error("Capture current module path");
    Error.captureStackTrace(error2, getCurrentModulePath);
    const [caller] = error2.stack;
    const fileName = caller?.getFileName();
    if (fileName == null) {
      throw new Error("Unable to determine the current module path");
    }
    return fileName;
  } finally {
    Error.prepareStackTrace = originalPrepareStackTrace;
  }
}
var BLOCKED_REQUEST_HEADERS = [
  "connection",
  "keep-alive",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "forwarded",
  "proxy-authorization",
  "via",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-real-ip",
  "metadata",
  "metadata-flavor",
  "x-aws-ec2-metadata-token",
  "x-metadata-token",
  "cookie",
  "set-cookie"
];
function sanitizeRequestHeaders(input) {
  const headers = new Headers(input);
  for (const name32 of BLOCKED_REQUEST_HEADERS) {
    headers.delete(name32);
  }
  return headers;
}
var MAX_DOWNLOAD_REDIRECTS = 10;
var REDIRECT_STATUS_CODES = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
async function getValidatedFetch(customFetch) {
  return customFetch == null || customFetch === globalThis.fetch ? await getDefaultDownloadFetch() : customFetch;
}
async function fetchWithValidatedRedirects({
  url,
  headers,
  abortSignal,
  maxRedirects = MAX_DOWNLOAD_REDIRECTS,
  fetch: customFetch,
  trustedOrigin
}) {
  let currentHeaders = headers === undefined ? undefined : sanitizeRequestHeaders(headers);
  const perHopInit = (redirect) => {
    const init = { signal: abortSignal, redirect };
    if (currentHeaders !== undefined) {
      init.headers = new Headers(currentHeaders);
    }
    return init;
  };
  let currentUrl = url;
  for (let redirectCount = 0;redirectCount <= maxRedirects; redirectCount++) {
    const isTrustedHop = trustedOrigin !== undefined && isSameOrigin(currentUrl, trustedOrigin);
    if (!isTrustedHop) {
      validateDownloadUrl(currentUrl);
    }
    const fetch2 = isTrustedHop && customFetch != null ? customFetch : isTrustedHop ? globalThis.fetch : await getValidatedFetch(customFetch);
    const response = await fetch2(currentUrl, perHopInit("manual"));
    if (response.type === "opaqueredirect") {
      if (!isBrowserRuntime()) {
        throw new DownloadError({
          url,
          message: `Redirect from ${currentUrl} could not be validated and was blocked`
        });
      }
      return await fetch2(currentUrl, perHopInit("follow"));
    }
    const location = response.headers?.get("location");
    if (REDIRECT_STATUS_CODES.has(response.status) && location) {
      cancelResponseBody(response);
      const nextUrl = new URL(location, currentUrl).toString();
      if (currentHeaders !== undefined && !isSameOrigin(nextUrl, currentUrl)) {
        const userAgent = currentHeaders.get("user-agent");
        currentHeaders = new Headers(userAgent == null ? undefined : { "user-agent": userAgent });
      }
      currentUrl = nextUrl;
      continue;
    }
    return response;
  }
  throw new DownloadError({
    url,
    message: `Too many redirects (max ${maxRedirects})`
  });
}
var SAFE_UNTRUSTED_FIRST_HOP_HEADERS = /* @__PURE__ */ new Set([
  "accept",
  "accept-language",
  "baggage",
  "cache-control",
  "idempotency-key",
  "if-match",
  "if-modified-since",
  "if-none-match",
  "if-range",
  "if-unmodified-since",
  "pragma",
  "range",
  "traceparent",
  "tracestate",
  "user-agent",
  "x-correlation-id",
  "x-request-id"
]);
async function fetchUntrustedUrl({
  headers,
  credentialedOrigin,
  untrustedFirstHopHeaders,
  ...options
}) {
  let firstHopHeaders;
  if (headers !== undefined) {
    firstHopHeaders = sanitizeRequestHeaders(headers);
    const origin = credentialedOrigin ?? options.trustedOrigin;
    if (origin === undefined || !isSameOrigin(options.url, origin)) {
      const allowedHeaders = /* @__PURE__ */ new Set([
        ...SAFE_UNTRUSTED_FIRST_HOP_HEADERS,
        ...(untrustedFirstHopHeaders ?? []).map((name32) => name32.toLowerCase())
      ]);
      firstHopHeaders = new Headers([...firstHopHeaders].filter(([name32]) => allowedHeaders.has(name32)));
    }
  }
  return fetchWithValidatedRedirects({
    ...options,
    headers: firstHopHeaders
  });
}
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({
  response,
  url,
  maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE
}) {
  const contentLength = response.headers.get("content-length");
  if (contentLength != null) {
    const length = parseInt(contentLength, 10);
    if (!isNaN(length) && length > maxBytes) {
      await cancelResponseBody(response);
      throw new DownloadError({
        url,
        message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
      });
    }
  }
  const body = response.body;
  if (body == null) {
    return new Uint8Array(0);
  }
  const reader = body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      totalBytes += value.length;
      if (totalBytes > maxBytes) {
        throw new DownloadError({
          url,
          message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
        });
      }
      chunks.push(value);
    }
  } finally {
    try {
      await reader.cancel();
    } catch {} finally {
      reader.releaseLock();
    }
  }
  const result = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}
var createIdGenerator = ({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = () => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0;i < size; i++) {
      chars[i] = alphabet[Math.random() * alphabetLength | 0];
    }
    return chars.join("");
  };
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
var getOriginalFetch2 = () => globalThis.fetch;
var getFromApi = async ({
  url,
  headers = {},
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2,
  validateUrl,
  credentialedOrigin,
  trustedOrigin
}) => {
  try {
    const requestFetch = fetch2 ?? getOriginalFetch2();
    const outgoingHeaders = credentialedOrigin !== undefined && !isSameOrigin(url, credentialedOrigin) ? {} : headers;
    const requestHeaders = withUserAgentSuffix(outgoingHeaders, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent());
    const response = validateUrl ? await fetchWithValidatedRedirects({
      url,
      headers: requestHeaders,
      abortSignal,
      fetch: fetch2,
      trustedOrigin
    }) : await requestFetch(url, {
      method: "GET",
      headers: requestHeaders,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: {}
        });
      } catch (error2) {
        if (isAbortError(error2) || APICallError.isInstance(error2)) {
          throw error2;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error2,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: {}
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: {}
      });
    } catch (error2) {
      if (error2 instanceof Error) {
        if (isAbortError(error2) || APICallError.isInstance(error2)) {
          throw error2;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error2,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: {}
      });
    }
  } catch (error2) {
    throw handleFetchError({ error: error2, url, requestBodyValues: {} });
  }
};
function isBuffer(value) {
  return globalThis.Buffer?.isBuffer(value) ?? false;
}
function isRecord(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
function loadApiKey({
  apiKey,
  environmentVariableName,
  apiKeyParameterName = "apiKey",
  description
}) {
  if (typeof apiKey === "string") {
    return apiKey;
  }
  if (apiKey != null) {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string.`
    });
  }
  if (typeof process === "undefined") {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.`
    });
  }
  apiKey = process.env[environmentVariableName];
  if (apiKey == null) {
    throw new LoadAPIKeyError({
      message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
    });
  }
  if (typeof apiKey !== "string") {
    throw new LoadAPIKeyError({
      message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
    });
  }
  return apiKey;
}
function loadOptionalSetting({
  settingValue,
  environmentVariableName
}) {
  if (typeof settingValue === "string") {
    return settingValue;
  }
  if (settingValue != null || typeof process === "undefined") {
    return;
  }
  settingValue = process.env[environmentVariableName];
  if (settingValue == null || typeof settingValue !== "string") {
    return;
  }
  return settingValue;
}
function normalizeBatchRequestCounts({
  total,
  pending,
  completed,
  failed
}) {
  if (isNonNegativeSafeInteger(total) && isNonNegativeSafeInteger(pending) && isNonNegativeSafeInteger(completed) && isNonNegativeSafeInteger(failed) && pending + completed + failed === total) {
    return {
      total,
      pending,
      completed,
      failed
    };
  }
}
function isNonNegativeSafeInteger(value) {
  return value != null && Number.isSafeInteger(value) && value >= 0;
}
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse3(text) {
  const obj = JSON.parse(text);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
    return obj;
  }
  return filter(obj);
}
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node2 of nodes) {
      if (Object.prototype.hasOwnProperty.call(node2, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (Object.prototype.hasOwnProperty.call(node2, "constructor") && node2.constructor !== null && typeof node2.constructor === "object" && Object.prototype.hasOwnProperty.call(node2.constructor, "prototype")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node2) {
        const value = node2[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
function secureJsonParse(text) {
  const { stackTraceLimit } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return _parse3(text);
  }
  try {
    return _parse3(text);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
  if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
    const { additionalProperties } = jsonSchema2;
    jsonSchema2.additionalProperties = additionalProperties != null && typeof additionalProperties !== "boolean" ? visit(additionalProperties) : false;
    const { properties } = jsonSchema2;
    if (properties != null) {
      for (const key of Object.keys(properties)) {
        properties[key] = visit(properties[key]);
      }
    }
  }
  if (jsonSchema2.items != null) {
    jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
  }
  if (jsonSchema2.anyOf != null) {
    jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
  }
  if (jsonSchema2.allOf != null) {
    jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
  }
  if (jsonSchema2.oneOf != null) {
    jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
  }
  const { definitions } = jsonSchema2;
  if (definitions != null) {
    for (const key of Object.keys(definitions)) {
      definitions[key] = visit(definitions[key]);
    }
  }
  return jsonSchema2;
}
function visit(def) {
  if (typeof def === "boolean")
    return def;
  return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: undefined,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
};
function parseAnyDef() {
  return {};
}
function parseArrayDef(def, refs) {
  const res = {
    type: "array"
  };
  if (def.type?._def && def.type?._def?.typeName !== "ZodAny") {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    res.minItems = def.minLength.value;
  }
  if (def.maxLength) {
    res.maxItems = def.maxLength.value;
  }
  if (def.exactLength) {
    res.minItems = def.exactLength.value;
    res.maxItems = def.exactLength.value;
  }
  return res;
}
function parseBigintDef(def) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseBooleanDef() {
  return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def);
  }
}
var integerDateParser = (def) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        res.minimum = check.value;
        break;
      case "max":
        res.maximum = check.value;
        break;
    }
  }
  return res;
};
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
var isJsonSchema7AllOfType = (type) => {
  if ("type" in type && type.type === "string")
    return false;
  return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties: _additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? { allOf: mergedAllOf } : undefined;
}
function parseLiteralDef(def) {
  const parsedType2 = typeof def.value;
  if (parsedType2 !== "bigint" && parsedType2 !== "number" && parsedType2 !== "boolean" && parsedType2 !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  return {
    type: parsedType2 === "bigint" ? "integer" : parsedType2,
    const: def.value
  };
}
var emojiRegex = undefined;
var zodPatterns = {
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}$/,
  emoji: () => {
    if (emojiRegex === undefined) {
      emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
    }
    return emojiRegex;
  },
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          break;
        case "max":
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern2(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern2(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern2(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern2(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern2(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern2(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "includes": {
          addPattern2(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern2(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern2(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern2(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern2(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern2(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern2(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              res.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              addPattern2(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern2(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
      }
    }
  }
  return res;
}
function escapeLiteralCheckValue(literal2, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal2) : literal2;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0;i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x) => x.format)) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format
      });
      delete schema.format;
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    schema.format = value;
  }
}
function addPattern2(schema, regex, message, refs) {
  if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern
      });
      delete schema.pattern;
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    schema.pattern = stringifyRegExpWithFlags(regex, refs);
  }
}
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0;i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch {
    console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return regex.source;
  }
  return pattern;
}
function parseRecordDef(def, refs) {
  const schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (def.keyType?._def.typeName === "ZodString" && def.keyType._def.checks?.length) {
    const { type: _type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (def.keyType?._def.typeName === "ZodEnum") {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (def.keyType?._def.typeName === "ZodBranded" && def.keyType._def.type._def.typeName === "ZodString" && def.keyType._def.type._def.checks?.length) {
    const { type: _type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef();
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
function parseNativeEnumDef(def) {
  const object2 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object2[object2[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object2[key]);
  const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
function parseNeverDef() {
  return { not: parseAnyDef() };
}
function parseNullDef() {
  return {
    type: "null"
  };
}
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x) => (x._def.typeName in primitiveMappings) && (!x._def.checks || !x._def.checks.length))) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce((acc, x) => {
      const type = typeof x._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x) => {
          return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
        }, [])
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x) => [
        ...acc,
        ...x._def.values.filter((x2) => !acc.includes(x2))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i}`]
  })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
  return anyOf.length ? { anyOf } : undefined;
};
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
  const res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        break;
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseObjectDef(def, refs) {
  const result = {
    type: "object",
    properties: {}
  };
  const required2 = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === undefined || propDef._def === undefined) {
      continue;
    }
    const propOptional = safeIsOptional(propDef);
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === undefined) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required2.push(propName);
    }
  }
  if (required2.length) {
    result.required = required2;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== undefined) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return true;
  }
}
var parseOptionalDef = (def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const inputSchema = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const outputSchema = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", inputSchema ? "1" : "0"]
  });
  return {
    allOf: [inputSchema, outputSchema].filter((schema) => schema !== undefined)
  };
};
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    schema.minItems = def.minSize.value;
  }
  if (def.maxSize) {
    schema.maxItems = def.maxSize.value;
  }
  return schema;
}
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === undefined ? acc : [...acc, x], []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === undefined ? acc : [...acc, x], [])
    };
  }
}
function parseUndefinedDef() {
  return {
    not: parseAnyDef()
  };
}
function parseUnknownDef() {
  return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case "ZodString":
      return parseStringDef(def, refs);
    case "ZodNumber":
      return parseNumberDef(def);
    case "ZodObject":
      return parseObjectDef(def, refs);
    case "ZodBigInt":
      return parseBigintDef(def);
    case "ZodBoolean":
      return parseBooleanDef();
    case "ZodDate":
      return parseDateDef(def, refs);
    case "ZodUndefined":
      return parseUndefinedDef();
    case "ZodNull":
      return parseNullDef();
    case "ZodArray":
      return parseArrayDef(def, refs);
    case "ZodUnion":
    case "ZodDiscriminatedUnion":
      return parseUnionDef(def, refs);
    case "ZodIntersection":
      return parseIntersectionDef(def, refs);
    case "ZodTuple":
      return parseTupleDef(def, refs);
    case "ZodRecord":
      return parseRecordDef(def, refs);
    case "ZodLiteral":
      return parseLiteralDef(def);
    case "ZodEnum":
      return parseEnumDef(def);
    case "ZodNativeEnum":
      return parseNativeEnumDef(def);
    case "ZodNullable":
      return parseNullableDef(def, refs);
    case "ZodOptional":
      return parseOptionalDef(def, refs);
    case "ZodMap":
      return parseMapDef(def, refs);
    case "ZodSet":
      return parseSetDef(def, refs);
    case "ZodLazy":
      return () => def.getter()._def;
    case "ZodPromise":
      return parsePromiseDef(def, refs);
    case "ZodNaN":
    case "ZodNever":
      return parseNeverDef();
    case "ZodEffects":
      return parseEffectsDef(def, refs);
    case "ZodAny":
      return parseAnyDef();
    case "ZodUnknown":
      return parseUnknownDef();
    case "ZodDefault":
      return parseDefaultDef(def, refs);
    case "ZodBranded":
      return parseBrandedDef(def, refs);
    case "ZodReadonly":
      return parseReadonlyDef(def, refs);
    case "ZodCatch":
      return parseCatchDef(def, refs);
    case "ZodPipeline":
      return parsePipelineDef(def, refs);
    case "ZodFunction":
    case "ZodVoid":
    case "ZodSymbol":
      return;
    default:
      return /* @__PURE__ */ ((_) => {
        return;
      })(typeName);
  }
};
var getRelativePath = (pathA, pathB) => {
  let i = 0;
  for (;i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i])
      break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== undefined) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: undefined };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
        return parseAnyDef();
      }
      return refs.$refStrategy === "seen" ? parseAnyDef() : undefined;
    }
  }
};
var addMeta = (def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
  }
  return jsonSchema2;
};
var getRefs = (options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== undefined ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    currentPath,
    propertyPath: undefined,
    seen: new Map(Object.entries(_options.definitions).map(([name32, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name32],
        jsonSchema: undefined
      }
    ]))
  };
};
var zod3ToJsonSchema = (schema, options) => {
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name42, schema2]) => ({
    ...acc,
    [name42]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name42]
    }, true) ?? parseAnyDef()
  }), {}) : undefined;
  const name32 = typeof options === "string" ? options : options?.nameStrategy === "title" ? undefined : options?.name;
  const main = parseDef(schema._def, name32 === undefined ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name32]
  }, false) ?? parseAnyDef();
  const title = typeof options === "object" && options.name !== undefined && options.nameStrategy === "title" ? options.name : undefined;
  if (title !== undefined) {
    main.title = title;
  }
  const combined = name32 === undefined ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name32
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name32]: main
    }
  };
  combined.$schema = "http://json-schema.org/draft-07/schema#";
  return combined;
};
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
  let schema;
  return () => {
    if (schema == null) {
      schema = createSchema();
    }
    return schema;
  };
}
function jsonSchema(jsonSchema2, {
  validate: validate2
} = {}) {
  return {
    [schemaSymbol]: true,
    _type: undefined,
    get jsonSchema() {
      if (typeof jsonSchema2 === "function") {
        jsonSchema2 = jsonSchema2();
      }
      return jsonSchema2;
    },
    validate: validate2
  };
}
function isSchema(value) {
  return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
  return schema == null ? jsonSchema({
    type: "object",
    properties: {},
    additionalProperties: false
  }) : isSchema(schema) ? schema : ("~standard" in schema) ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
  return jsonSchema(() => {
    if (!hasStandardJsonSchema(standardSchema2)) {
      throw new Error(`Standard schema vendor '${standardSchema2["~standard"].vendor}' does not support JSON Schema conversion.`);
    }
    return addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({
      target: "draft-07"
    }));
  }, {
    validate: async (value) => {
      const result = await standardSchema2["~standard"].validate(value);
      return "value" in result ? { success: true, value: result.value } : {
        success: false,
        error: new TypeValidationError({
          value,
          cause: result.issues
        })
      };
    }
  });
}
function hasStandardJsonSchema(schema) {
  return schema["~standard"].jsonSchema != null;
}
function zod3Schema(zodSchema2, options) {
  const useReferences = options?.useReferences ?? false;
  return jsonSchema(() => zod3ToJsonSchema(zodSchema2, {
    $refStrategy: useReferences ? "root" : "none"
  }), {
    validate: async (value) => {
      const result = await zodSchema2.safeParseAsync(value);
      return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
    }
  });
}
function zod4Schema(zodSchema2, options) {
  const useReferences = options?.useReferences ?? false;
  return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
    target: "draft-7",
    io: "input",
    reused: useReferences ? "ref" : "inline"
  })), {
    validate: async (value) => {
      const result = await safeParseAsync(zodSchema2, value);
      return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
    }
  });
}
function isZod4Schema(zodSchema2) {
  return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
  if (isZod4Schema(zodSchema2)) {
    return zod4Schema(zodSchema2, options);
  } else {
    return zod3Schema(zodSchema2, options);
  }
}
async function validateTypes({
  value,
  schema,
  context
}) {
  const result = await safeValidateTypes({ value, schema, context });
  if (!result.success) {
    throw TypeValidationError.wrap({ value, cause: result.error, context });
  }
  return result.value;
}
async function safeValidateTypes({
  value,
  schema,
  context
}) {
  const actualSchema = asSchema(schema);
  try {
    if (actualSchema.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await actualSchema.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: result.error, context }),
      rawValue: value
    };
  } catch (error2) {
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: error2, context }),
      rawValue: value
    };
  }
}
async function parseJSON({
  text,
  schema
}) {
  try {
    const value = secureJsonParse(text);
    if (schema == null) {
      return value;
    }
    return await validateTypes({ value, schema });
  } catch (error2) {
    if (JSONParseError.isInstance(error2) || TypeValidationError.isInstance(error2)) {
      throw error2;
    }
    throw new JSONParseError({ text, cause: error2 });
  }
}
async function safeParseJSON({
  text,
  schema
}) {
  try {
    const value = secureJsonParse(text);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes({ value, schema });
  } catch (error2) {
    return {
      success: false,
      error: JSONParseError.isInstance(error2) ? error2 : new JSONParseError({ text, cause: error2 }),
      rawValue: undefined
    };
  }
}
function parseJsonEventStream({
  stream,
  schema
}) {
  return stream.pipeThrough(new TextDecoderStream).pipeThrough(new EventSourceParserStream).pipeThrough(new TransformStream({
    async transform({ data }, controller) {
      if (data === "[DONE]") {
        return;
      }
      controller.enqueue(await safeParseJSON({ text: data, schema }));
    }
  }));
}
var getOriginalFetch4 = () => globalThis.fetch;
var postJsonToApi = async ({
  url,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}) => await postToApi({
  url,
  headers: {
    "Content-Type": "application/json",
    ...headers
  },
  body: {
    content: JSON.stringify(body),
    values: body
  },
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
});
var postToApi = async ({
  url,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch4()
}) => {
  try {
    const response = await fetch2(url, {
      method: "POST",
      headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: body.values
        });
      } catch (error2) {
        if (isAbortError(error2) || APICallError.isInstance(error2)) {
          throw error2;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error2,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: body.values
      });
    } catch (error2) {
      if (error2 instanceof Error) {
        if (isAbortError(error2) || APICallError.isInstance(error2)) {
          throw error2;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error2,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error2) {
    throw handleFetchError({ error: error2, url, requestBodyValues: body.values });
  }
};
function tool(tool2) {
  return tool2;
}
function createProviderExecutedToolFactory({
  id,
  inputSchema,
  outputSchema,
  supportsDeferredResults
}) {
  return ({
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    isProviderExecuted: true,
    id,
    args,
    inputSchema,
    outputSchema,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    supportsDeferredResults
  });
}
async function resolve(value) {
  if (typeof value === "function") {
    value = value();
  }
  return value;
}
var retryWithExponentialBackoff = ({
  maxRetries = 2,
  initialDelayInMs = 2000,
  backoffFactor = 2,
  abortSignal,
  shouldRetry,
  getDelayInMs = ({ exponentialBackoffDelay }) => exponentialBackoffDelay,
  createRetryError = ({ message }) => new Error(message)
}) => async (f) => retryWithExponentialBackoffInternal(f, {
  maxRetries,
  delayInMs: initialDelayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry,
  getDelayInMs,
  createRetryError
});
async function retryWithExponentialBackoffInternal(f, {
  maxRetries,
  delayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry,
  getDelayInMs,
  createRetryError
}, errors2 = []) {
  try {
    return await f();
  } catch (error2) {
    if (isAbortError(error2)) {
      throw error2;
    }
    if (maxRetries === 0) {
      throw error2;
    }
    const errorMessage = getErrorMessage(error2);
    const newErrors = [...errors2, error2];
    const tryNumber = newErrors.length;
    if (tryNumber > maxRetries) {
      throw createRetryError({
        message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
        reason: "maxRetriesExceeded",
        errors: newErrors
      });
    }
    if (await shouldRetry(error2) && tryNumber <= maxRetries) {
      await delay(getDelayInMs({
        error: error2,
        exponentialBackoffDelay: delayInMs
      }), { abortSignal });
      return retryWithExponentialBackoffInternal(f, {
        maxRetries,
        delayInMs: backoffFactor * delayInMs,
        backoffFactor,
        abortSignal,
        shouldRetry,
        getDelayInMs,
        createRetryError
      }, newErrors);
    }
    if (tryNumber === 1) {
      throw error2;
    }
    throw createRetryError({
      message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
      reason: "errorNotRetryable",
      errors: newErrors
    });
  }
}
var textDecoder2 = new TextDecoder;
function wrapResponseBodyStream({
  stream,
  url,
  requestBodyValues,
  statusCode,
  responseHeaders
}) {
  const reader = stream.getReader();
  let readerReleased = false;
  const releaseReader = () => {
    if (!readerReleased) {
      reader.releaseLock();
      readerReleased = true;
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          releaseReader();
          controller.close();
        } else {
          controller.enqueue(value);
        }
      } catch (error2) {
        releaseReader();
        if (isAbortError(error2)) {
          controller.error(error2);
          return;
        }
        controller.error(handleFetchError({
          error: new APICallError({
            message: "Failed to process successful response",
            cause: error2,
            statusCode,
            url,
            responseHeaders,
            requestBodyValues
          }),
          url,
          requestBodyValues
        }));
      }
    },
    async cancel(reason) {
      try {
        await reader.cancel(reason);
      } finally {
        releaseReader();
      }
    }
  });
}
async function readResponseBodyAsText({
  response,
  url
}) {
  return textDecoder2.decode(await readResponseWithSizeLimit({
    response,
    url
  }));
}
var createJsonErrorResponseHandler = ({
  errorSchema,
  errorToMessage,
  isRetryable
}) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await readResponseBodyAsText({ response, url });
  const responseHeaders = extractResponseHeaders(response);
  if (responseBody.trim() === "") {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable?.(response)
      })
    };
  }
  try {
    const parsedError = await parseJSON({
      text: responseBody,
      schema: errorSchema
    });
    return {
      responseHeaders,
      value: new APICallError({
        message: errorToMessage(parsedError),
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        data: parsedError,
        isRetryable: isRetryable?.(response, parsedError)
      })
    };
  } catch {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable?.(response)
      })
    };
  }
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response, url, requestBodyValues }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonEventStream({
      stream: wrapResponseBodyStream({
        stream: response.body,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders
      }),
      schema: chunkSchema
    })
  };
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await readResponseBodyAsText({ response, url });
  const parsedResult = await safeParseJSON({
    text: responseBody,
    schema: responseSchema
  });
  const responseHeaders = extractResponseHeaders(response);
  if (!parsedResult.success) {
    throw new APICallError({
      message: "Invalid JSON response",
      cause: parsedResult.error,
      statusCode: response.status,
      responseHeaders,
      responseBody,
      url,
      requestBodyValues
    });
  }
  return {
    responseHeaders,
    value: parsedResult.value,
    rawValue: parsedResult.rawValue
  };
};
var createJsonLinesResponseHandler = (responseSchema) => async ({ response }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonLines({
      stream: response.body,
      schema: responseSchema
    })
  };
};
async function* parseJsonLines({
  stream,
  schema
}) {
  const reader = stream.getReader();
  const decoder = new TextDecoder;
  let buffer = "";
  let finished = false;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        finished = true;
        buffer += decoder.decode();
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      let lineEnd = buffer.indexOf(`
`);
      while (lineEnd !== -1) {
        const line = buffer.slice(0, lineEnd).replace(/\r$/, "");
        buffer = buffer.slice(lineEnd + 1);
        if (line.trim().length > 0) {
          yield await parseJSON({ text: line, schema });
        }
        lineEnd = buffer.indexOf(`
`);
      }
    }
    const finalLine = buffer.replace(/\r$/, "");
    if (finalLine.trim().length > 0) {
      yield await parseJSON({ text: finalLine, schema });
    }
  } finally {
    if (!finished) {
      await reader.cancel().catch(() => {});
    }
    reader.releaseLock();
  }
}
function isJSONSerializable(value) {
  if (value === null || value === undefined)
    return true;
  const type = typeof value;
  if (type === "string" || type === "number" || type === "boolean")
    return true;
  if (type === "function" || type === "symbol" || type === "bigint")
    return false;
  if (Array.isArray(value)) {
    return value.every(isJSONSerializable);
  }
  if (Object.getPrototypeOf(value) === Object.prototype) {
    return Object.values(value).every(isJSONSerializable);
  }
  return false;
}
var name22 = "AI_SerializationError";
var marker32 = `vercel.ai.error.${name22}`;
var symbol22 = Symbol.for(marker32);
var _a22;
var _b22;
var SerializationError = class extends (_b22 = AISDKError, _a22 = symbol22, _b22) {
  constructor({
    message = "Failed to serialize value.",
    cause
  } = {}) {
    super({ name: name22, message, cause });
    this[_a22] = true;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker32);
  }
};
function serializeModelOptions(options) {
  const serializableConfig = {};
  for (const [key, value] of Object.entries(options.config)) {
    if (key === "headers") {
      const resolvedHeaders = resolveSync(value);
      if (isJSONSerializable(resolvedHeaders)) {
        serializableConfig[key] = resolvedHeaders;
      }
    } else if (isJSONSerializable(value)) {
      serializableConfig[key] = value;
    }
  }
  return { modelId: options.modelId, config: serializableConfig };
}
function resolveSync(value) {
  let next = value;
  if (typeof value === "function") {
    next = value();
  }
  if (next instanceof Promise) {
    throw new SerializationError({
      message: "Cannot serialize asynchronous model options."
    });
  }
  return next;
}
var TRANSCRIPTION_STREAM_START_FRAME_TYPE = "transcription-stream.start";
var TRANSCRIPTION_STREAM_AUDIO_DONE_FRAME_TYPE = "transcription-stream.audio-done";
function parseTranscriptionStreamPart(text) {
  let value;
  try {
    value = secureJsonParse(text);
  } catch {
    return;
  }
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return;
  }
  const part = value;
  switch (part.type) {
    case "stream-start":
      return Array.isArray(part.warnings) && part.warnings.every(isWarning) ? part : undefined;
    case "transcript-delta":
      return isString(part.delta) && isOptional(part.id, isString) && isOptional(part.providerMetadata, isRecord) ? part : undefined;
    case "transcript-partial":
      return isString(part.text) && isOptional(part.id, isString) && isOptional(part.startSecond, isNumber) && isOptional(part.durationInSeconds, isNumber) && isOptional(part.channelIndex, isNumber) && isOptional(part.providerMetadata, isRecord) ? part : undefined;
    case "transcript-final":
      return isString(part.text) && isOptional(part.id, isString) && isOptional(part.startSecond, isNumber) && isOptional(part.endSecond, isNumber) && isOptional(part.channelIndex, isNumber) && isOptional(part.providerMetadata, isRecord) ? part : undefined;
    case "finish":
      return isString(part.text) && Array.isArray(part.segments) && part.segments.every(isSegment) && isOptional(part.language, isString) && isOptional(part.durationInSeconds, isNumber) && isOptional(part.providerMetadata, isRecord) ? part : undefined;
    case "response-metadata": {
      if (!(isOptional(part.modelId, isString) && isOptional(part.headers, isRecord))) {
        return;
      }
      const timestamp = part.timestamp;
      if (timestamp == null) {
        return { ...part, timestamp: undefined };
      }
      if (typeof timestamp !== "string") {
        return;
      }
      const revived = new Date(timestamp);
      return Number.isNaN(revived.getTime()) ? undefined : { ...part, timestamp: revived };
    }
    case "raw":
      return "rawValue" in part ? part : undefined;
    case "error":
      return "error" in part ? part : undefined;
    default:
      return;
  }
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isOptional(value, check) {
  return value === undefined || check(value);
}
function isWarning(value) {
  return isRecord(value) && isString(value.type);
}
function isSegment(value) {
  return isRecord(value) && isString(value.text) && isNumber(value.startSecond) && isNumber(value.endSecond);
}
function withoutTrailingSlash(url) {
  return url?.replace(/\/$/, "");
}

// ../../node_modules/.bun/@ai-sdk+gateway@4.0.94+fff7ddf946fac095/node_modules/@ai-sdk/gateway/dist/index.js
var import_oidc = __toESM(require_dist(), 1);
var import_oidc2 = __toESM(require_dist(), 1);
var GATEWAY_REALTIME_SUBPROTOCOL = "ai-gateway-realtime.v1";
var GATEWAY_TRANSCRIPTION_SUBPROTOCOL = "ai-gateway-transcription.v1";
var GATEWAY_AUTH_SUBPROTOCOL_PREFIX = "ai-gateway-auth.";
var GATEWAY_TEAM_SUBPROTOCOL_PREFIX = "ai-gateway-team.";
function getGatewayRealtimeProtocols(token, options) {
  return buildGatewayProtocols(GATEWAY_REALTIME_SUBPROTOCOL, token, options);
}
function getGatewayTranscriptionProtocols(token, options) {
  return buildGatewayProtocols(GATEWAY_TRANSCRIPTION_SUBPROTOCOL, token, options);
}
function buildGatewayProtocols(marker122, token, options) {
  const protocols = [marker122, `${GATEWAY_AUTH_SUBPROTOCOL_PREFIX}${token}`];
  if (options?.teamIdOrSlug) {
    protocols.push(`${GATEWAY_TEAM_SUBPROTOCOL_PREFIX}${encodeSubprotocolValue(options.teamIdOrSlug)}`);
  }
  return protocols;
}
function encodeSubprotocolValue(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
var z = {
  any,
  array,
  boolean: boolean2,
  discriminatedUnion,
  enum: _enum,
  literal,
  number: number2,
  object,
  record,
  string: string2,
  union,
  unknown
};
var marker17 = "vercel.ai.gateway.error";
var symbol19 = Symbol.for(marker17);
var _a21;
var _b19;
var GatewayError = class _GatewayError extends (_b19 = Error, _a21 = symbol19, _b19) {
  constructor({
    message,
    statusCode = 500,
    cause,
    generationId,
    isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500)
  }) {
    super(generationId ? `${message} [${generationId}]` : message);
    this[_a21] = true;
    this.statusCode = statusCode;
    this.cause = cause;
    this.generationId = generationId;
    this.isRetryable = isRetryable;
  }
  static isInstance(error2) {
    return _GatewayError.hasMarker(error2);
  }
  static hasMarker(error2) {
    return typeof error2 === "object" && error2 !== null && symbol19 in error2 && error2[symbol19] === true;
  }
};
var name18 = "GatewayAuthenticationError";
var marker23 = `vercel.ai.gateway.error.${name18}`;
var symbol23 = Symbol.for(marker23);
var _a23;
var _b23;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b23 = GatewayError, _a23 = symbol23, _b23) {
  constructor({
    message = "Authentication failed",
    statusCode = 401,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a23] = true;
    this.name = name18;
    this.type = "authentication_error";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol23 in error2;
  }
  static createContextualError({
    apiKeyProvided,
    oidcTokenProvided,
    statusCode = 401,
    cause,
    generationId
  }) {
    let contextualMessage;
    if (apiKeyProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid API key or token.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide an API key or Vercel access token via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else if (oidcTokenProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
or pass a Vercel access token via the 'apiKey' option.`;
    } else {
      contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - Vercel access token:
Pass a Vercel personal access token or Vercel app access token via the 'apiKey' option.

Option 3 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
    }
    return new _GatewayAuthenticationError({
      message: contextualMessage,
      statusCode,
      cause,
      generationId
    });
  }
};
var name23 = "GatewayInvalidRequestError";
var marker33 = `vercel.ai.gateway.error.${name23}`;
var symbol32 = Symbol.for(marker33);
var _a32;
var _b32;
var GatewayInvalidRequestError = class extends (_b32 = GatewayError, _a32 = symbol32, _b32) {
  constructor({
    message = "Invalid request",
    statusCode = 400,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a32] = true;
    this.name = name23;
    this.type = "invalid_request_error";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol32 in error2;
  }
};
var name32 = "GatewayRateLimitError";
var marker42 = `vercel.ai.gateway.error.${name32}`;
var symbol42 = Symbol.for(marker42);
var _a42;
var _b42;
var GatewayRateLimitError = class extends (_b42 = GatewayError, _a42 = symbol42, _b42) {
  constructor({
    message = "Rate limit exceeded",
    statusCode = 429,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a42] = true;
    this.name = name32;
    this.type = "rate_limit_exceeded";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol42 in error2;
  }
};
var name42 = "GatewayModelNotFoundError";
var marker52 = `vercel.ai.gateway.error.${name42}`;
var symbol52 = Symbol.for(marker52);
var modelNotFoundParamSchema = lazySchema(() => zodSchema(z.object({
  modelId: z.string()
})));
var _a52;
var _b52;
var GatewayModelNotFoundError = class extends (_b52 = GatewayError, _a52 = symbol52, _b52) {
  constructor({
    message = "Model not found",
    statusCode = 404,
    modelId,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a52] = true;
    this.name = name42;
    this.type = "model_not_found";
    this.modelId = modelId;
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol52 in error2;
  }
};
var name52 = "GatewayNotFoundError";
var marker62 = `vercel.ai.gateway.error.${name52}`;
var symbol62 = Symbol.for(marker62);
var _a62;
var _b62;
var GatewayNotFoundError = class extends (_b62 = GatewayError, _a62 = symbol62, _b62) {
  constructor({
    message = "Resource not found",
    statusCode = 404,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a62] = true;
    this.name = name52;
    this.type = "not_found";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol62 in error2;
  }
};
var name62 = "GatewayInternalServerError";
var marker72 = `vercel.ai.gateway.error.${name62}`;
var symbol72 = Symbol.for(marker72);
var _a72;
var _b72;
var GatewayInternalServerError = class extends (_b72 = GatewayError, _a72 = symbol72, _b72) {
  constructor({
    message = "Internal server error",
    statusCode = 500,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a72] = true;
    this.name = name62;
    this.type = "internal_server_error";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol72 in error2;
  }
};
var name72 = "GatewayFailedDependencyError";
var marker82 = `vercel.ai.gateway.error.${name72}`;
var symbol82 = Symbol.for(marker82);
var _a82;
var _b82;
var GatewayFailedDependencyError = class extends (_b82 = GatewayError, _a82 = symbol82, _b82) {
  constructor({
    message = "Failed dependency",
    statusCode = 424,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a82] = true;
    this.name = name72;
    this.type = "failed_dependency";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol82 in error2;
  }
};
var name82 = "GatewayForbiddenError";
var marker92 = `vercel.ai.gateway.error.${name82}`;
var symbol92 = Symbol.for(marker92);
var forbiddenParamSchema = lazySchema(() => zodSchema(z.object({
  ruleId: z.string()
})));
var _a92;
var _b92;
var GatewayForbiddenError = class extends (_b92 = GatewayError, _a92 = symbol92, _b92) {
  constructor({
    message = "Forbidden",
    statusCode = 403,
    cause,
    generationId,
    ruleId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a92] = true;
    this.name = name82;
    this.type = "forbidden";
    this.ruleId = ruleId;
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol92 in error2;
  }
};
var name92 = "GatewayResponseError";
var marker102 = `vercel.ai.gateway.error.${name92}`;
var symbol102 = Symbol.for(marker102);
var _a102;
var _b102;
var GatewayResponseError = class extends (_b102 = GatewayError, _a102 = symbol102, _b102) {
  constructor({
    message = "Invalid response from Gateway",
    statusCode = 502,
    response,
    validationError,
    cause,
    generationId,
    isRetryable
  } = {}) {
    super({ message, statusCode, cause, generationId, isRetryable });
    this[_a102] = true;
    this.name = name92;
    this.type = "response_error";
    this.response = response;
    this.validationError = validationError;
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol102 in error2;
  }
};
async function createGatewayErrorFromResponse({
  response,
  statusCode,
  defaultMessage = "Gateway request failed",
  cause,
  authMethod,
  isRetryable
}) {
  const parseResult = await safeValidateTypes({
    value: response,
    schema: gatewayErrorResponseSchema
  });
  if (!parseResult.success) {
    const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : undefined;
    return new GatewayResponseError({
      message: `Invalid error response format: ${defaultMessage}`,
      statusCode,
      response,
      validationError: parseResult.error,
      cause,
      generationId: rawGenerationId,
      isRetryable
    });
  }
  const validatedResponse = parseResult.value;
  const errorType = validatedResponse.error.type;
  const message = validatedResponse.error.message;
  const generationId = validatedResponse.generationId ?? undefined;
  switch (errorType) {
    case "authentication_error":
      return GatewayAuthenticationError.createContextualError({
        apiKeyProvided: authMethod === "api-key",
        oidcTokenProvided: authMethod === "oidc",
        statusCode,
        cause,
        generationId
      });
    case "invalid_request_error":
      return new GatewayInvalidRequestError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "rate_limit_exceeded":
      return new GatewayRateLimitError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "model_not_found": {
      const modelResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: modelNotFoundParamSchema
      });
      return new GatewayModelNotFoundError({
        message,
        statusCode,
        modelId: modelResult.success ? modelResult.value.modelId : undefined,
        cause,
        generationId
      });
    }
    case "not_found":
      return new GatewayNotFoundError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "internal_server_error":
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "failed_dependency":
      return new GatewayFailedDependencyError({
        message,
        statusCode,
        cause,
        generationId
      });
    case "forbidden": {
      const ruleResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: forbiddenParamSchema
      });
      return new GatewayForbiddenError({
        message,
        statusCode,
        cause,
        generationId,
        ruleId: ruleResult.success ? ruleResult.value.ruleId : undefined
      });
    }
    default:
      return new GatewayInternalServerError({
        message,
        statusCode,
        cause,
        generationId
      });
  }
}
var gatewayErrorResponseSchema = lazySchema(() => zodSchema(z.object({
  error: z.object({
    message: z.string(),
    type: z.string().nullish(),
    param: z.unknown().nullish(),
    code: z.union([z.string(), z.number()]).nullish()
  }),
  generationId: z.string().nullish()
})));
function extractApiCallResponse(error2) {
  if (error2.data !== undefined) {
    return error2.data;
  }
  if (error2.responseBody != null) {
    try {
      return secureJsonParse(error2.responseBody);
    } catch {
      return error2.responseBody;
    }
  }
  return {};
}
var name102 = "GatewayTimeoutError";
var marker112 = `vercel.ai.gateway.error.${name102}`;
var symbol112 = Symbol.for(marker112);
var _a112;
var _b112;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b112 = GatewayError, _a112 = symbol112, _b112) {
  constructor({
    message = "Request timed out",
    statusCode = 408,
    cause,
    generationId
  } = {}) {
    super({ message, statusCode, cause, generationId });
    this[_a112] = true;
    this.name = name102;
    this.type = "timeout_error";
  }
  static isInstance(error2) {
    return GatewayError.hasMarker(error2) && symbol112 in error2;
  }
  static createTimeoutError({
    originalMessage,
    statusCode = 408,
    cause,
    generationId
  }) {
    const message = `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
    return new _GatewayTimeoutError({
      message,
      statusCode,
      cause,
      generationId
    });
  }
};
function isTimeoutError(error2) {
  if (!(error2 instanceof Error)) {
    return false;
  }
  const errorCode = error2.code;
  if (typeof errorCode === "string") {
    const undiciTimeoutCodes = [
      "UND_ERR_HEADERS_TIMEOUT",
      "UND_ERR_BODY_TIMEOUT",
      "UND_ERR_CONNECT_TIMEOUT"
    ];
    return undiciTimeoutCodes.includes(errorCode);
  }
  return false;
}
async function asGatewayError(error2, authMethod) {
  if (GatewayError.isInstance(error2)) {
    return error2;
  }
  if (isTimeoutError(error2)) {
    return GatewayTimeoutError.createTimeoutError({
      originalMessage: error2 instanceof Error ? error2.message : "Unknown error",
      cause: error2
    });
  }
  if (APICallError.isInstance(error2)) {
    if (error2.cause && isTimeoutError(error2.cause)) {
      return GatewayTimeoutError.createTimeoutError({
        originalMessage: error2.message,
        cause: error2
      });
    }
    return await createGatewayErrorFromResponse({
      response: extractApiCallResponse(error2),
      statusCode: error2.statusCode ?? 500,
      defaultMessage: "Gateway request failed",
      cause: error2,
      authMethod,
      isRetryable: error2.isRetryable && (error2.statusCode == null || error2.statusCode < 400) ? true : undefined
    });
  }
  return await createGatewayErrorFromResponse({
    response: {},
    statusCode: 500,
    defaultMessage: error2 instanceof Error ? `Gateway request failed: ${error2.message}` : "Unknown Gateway error",
    cause: error2,
    authMethod
  });
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
var VERCEL_AI_GATEWAY_TEAM_HEADER = "x-vercel-ai-gateway-team";
async function parseAuthMethod(headers) {
  const result = await safeValidateTypes({
    value: headers[GATEWAY_AUTH_METHOD_HEADER],
    schema: gatewayAuthMethodSchema
  });
  return result.success ? result.value : undefined;
}
var gatewayAuthMethodSchema = lazySchema(() => zodSchema(z.union([z.literal("api-key"), z.literal("oidc")])));
var KNOWN_MODEL_TYPES = [
  "embedding",
  "evaluation",
  "image",
  "language",
  "realtime",
  "reranking",
  "speech",
  "transcription",
  "video"
];
var GatewayFetchMetadata = class {
  constructor(config2) {
    this.config = config2;
  }
  async getAvailableModels() {
    try {
      const { value } = await getFromApi({
        url: `${this.config.baseURL}/config`,
        validateUrl: false,
        headers: this.config.headers ? await resolve(this.config.headers) : undefined,
        successfulResponseHandler: createJsonResponseHandler(gatewayAvailableModelsResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error2) {
      throw await asGatewayError(error2);
    }
  }
  async getCredits() {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/credits`,
        validateUrl: false,
        headers: this.config.headers ? await resolve(this.config.headers) : undefined,
        successfulResponseHandler: createJsonResponseHandler(gatewayCreditsResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error2) {
      throw await asGatewayError(error2);
    }
  }
};
var gatewayAvailableModelsResponseSchema = lazySchema(() => zodSchema(z.object({
  models: z.array(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    pricing: z.object({
      input: z.string(),
      output: z.string(),
      input_cache_read: z.string().nullish(),
      input_cache_write: z.string().nullish()
    }).transform(({ input, output, input_cache_read, input_cache_write }) => ({
      input,
      output,
      ...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
      ...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
    })).nullish(),
    specification: z.object({
      specificationVersion: z.literal("v4"),
      provider: z.string(),
      modelId: z.string()
    }),
    modelType: z.string().nullish()
  })).transform((models) => models.filter((m) => m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType)))
})));
var gatewayCreditsResponseSchema = lazySchema(() => zodSchema(z.object({
  balance: z.string(),
  total_used: z.string()
}).transform(({ balance, total_used }) => ({
  balance,
  totalUsed: total_used
}))));
var GatewaySpendReport = class {
  constructor(config2) {
    this.config = config2;
  }
  async getSpendReport(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const searchParams = new URLSearchParams;
      searchParams.set("start_date", params.startDate);
      searchParams.set("end_date", params.endDate);
      if (params.groupBy) {
        searchParams.set("group_by", params.groupBy);
      }
      if (params.datePart) {
        searchParams.set("date_part", params.datePart);
      }
      if (params.userId) {
        searchParams.set("user_id", params.userId);
      }
      if (params.model) {
        searchParams.set("model", params.model);
      }
      if (params.provider) {
        searchParams.set("provider", params.provider);
      }
      if (params.credentialType) {
        searchParams.set("credential_type", params.credentialType);
      }
      if (params.tags && params.tags.length > 0) {
        searchParams.set("tags", params.tags.join(","));
      }
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
        validateUrl: false,
        headers: this.config.headers ? await resolve(this.config.headers) : undefined,
        successfulResponseHandler: createJsonResponseHandler(gatewaySpendReportResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error2) {
      throw await asGatewayError(error2);
    }
  }
};
var gatewaySpendReportResponseSchema = lazySchema(() => zodSchema(z.object({
  results: z.array(z.object({
    day: z.string().optional(),
    hour: z.string().optional(),
    user: z.string().optional(),
    model: z.string().optional(),
    tag: z.string().optional(),
    provider: z.string().optional(),
    credential_type: z.enum(["byok", "system"]).optional(),
    total_cost: z.number(),
    market_cost: z.number().optional(),
    input_tokens: z.number().optional(),
    output_tokens: z.number().optional(),
    cached_input_tokens: z.number().optional(),
    cache_creation_input_tokens: z.number().optional(),
    reasoning_tokens: z.number().optional(),
    request_count: z.number().optional()
  }).transform(({
    credential_type,
    total_cost,
    market_cost,
    input_tokens,
    output_tokens,
    cached_input_tokens,
    cache_creation_input_tokens,
    reasoning_tokens,
    request_count,
    ...rest
  }) => ({
    ...rest,
    ...credential_type !== undefined ? { credentialType: credential_type } : {},
    totalCost: total_cost,
    ...market_cost !== undefined ? { marketCost: market_cost } : {},
    ...input_tokens !== undefined ? { inputTokens: input_tokens } : {},
    ...output_tokens !== undefined ? { outputTokens: output_tokens } : {},
    ...cached_input_tokens !== undefined ? { cachedInputTokens: cached_input_tokens } : {},
    ...cache_creation_input_tokens !== undefined ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
    ...reasoning_tokens !== undefined ? { reasoningTokens: reasoning_tokens } : {},
    ...request_count !== undefined ? { requestCount: request_count } : {}
  })))
})));
var GatewayGenerationInfoFetcher = class {
  constructor(config2) {
    this.config = config2;
  }
  async getGenerationInfo(params) {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
        validateUrl: false,
        headers: this.config.headers ? await resolve(this.config.headers) : undefined,
        successfulResponseHandler: createJsonResponseHandler(gatewayGenerationInfoResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error2) {
      throw await asGatewayError(error2);
    }
  }
};
var gatewayGenerationInfoResponseSchema = lazySchema(() => zodSchema(z.object({
  data: z.object({
    id: z.string(),
    total_cost: z.number(),
    upstream_inference_cost: z.number(),
    usage: z.number(),
    created_at: z.string(),
    model: z.string(),
    is_byok: z.boolean(),
    provider_name: z.string(),
    streamed: z.boolean(),
    finish_reason: z.string(),
    latency: z.number(),
    generation_time: z.number(),
    native_tokens_prompt: z.number(),
    native_tokens_completion: z.number(),
    native_tokens_reasoning: z.number(),
    native_tokens_cached: z.number(),
    native_tokens_cache_creation: z.number(),
    billable_web_search_calls: z.number()
  }).transform(({
    total_cost,
    upstream_inference_cost,
    created_at,
    is_byok,
    provider_name,
    finish_reason,
    generation_time,
    native_tokens_prompt,
    native_tokens_completion,
    native_tokens_reasoning,
    native_tokens_cached,
    native_tokens_cache_creation,
    billable_web_search_calls,
    ...rest
  }) => ({
    ...rest,
    totalCost: total_cost,
    upstreamInferenceCost: upstream_inference_cost,
    createdAt: created_at,
    isByok: is_byok,
    providerName: provider_name,
    finishReason: finish_reason,
    generationTime: generation_time,
    promptTokens: native_tokens_prompt,
    completionTokens: native_tokens_completion,
    reasoningTokens: native_tokens_reasoning,
    cachedTokens: native_tokens_cached,
    cacheCreationTokens: native_tokens_cache_creation,
    billableWebSearchCalls: billable_web_search_calls
  }))
}).transform(({ data }) => data)));
var GatewayBatch = class {
  constructor(config2) {
    this.config = config2;
    this.specificationVersion = "v4";
    this.supportedUrls = { "*/*": [/.*/] };
    this.provider = `${config2.provider}.batch`;
  }
  async doStartBatch({
    requests,
    providerOptions,
    headers,
    abortSignal,
    webhookUrl
  }) {
    assertTextBatchRequests(requests);
    const modelId = validateSingleModel(requests);
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    const idempotencyKey = getGatewayBatchIdempotencyKey(providerOptions);
    const forwardedProviderOptions = omitGatewayIdempotencyKey(providerOptions);
    try {
      const { value: responseBody } = await postJsonToApi({
        url: this.getBatchUrl("start"),
        headers: combineHeaders(resolvedHeaders, headers, { "ai-model-id": modelId }, await resolve(this.config.o11yHeaders), idempotencyKey != null ? { "idempotency-key": idempotencyKey } : undefined),
        body: {
          ...webhookUrl != null && { callbackUrl: webhookUrl },
          requests: requests.map((request) => ({
            id: request.id,
            type: request.type,
            modelId: request.modelId,
            options: maybeEncodeBatchFileParts(request.options)
          })),
          ...forwardedProviderOptions != null && {
            providerOptions: forwardedProviderOptions
          }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayBatchStartResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        batchId: responseBody.batchId,
        ...convertGatewayBatchStatus(responseBody),
        warnings: responseBody.warnings ?? []
      };
    } catch (error2) {
      if (isAbortOrTimeoutError(error2)) {
        throw error2;
      }
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doGetBatchStatus({
    batchId,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { value: responseBody } = await postJsonToApi({
        url: this.getBatchUrl("status"),
        headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
        body: { batchId },
        successfulResponseHandler: createJsonResponseHandler(gatewayBatchStatusResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return convertGatewayBatchStatus(responseBody);
    } catch (error2) {
      if (isAbortOrTimeoutError(error2)) {
        throw error2;
      }
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doGetBatchResults({
    batchId,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { value: lines } = await postJsonToApi({
        url: this.getBatchUrl("results"),
        headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
        body: { batchId },
        successfulResponseHandler: createJsonLinesResponseHandler(gatewayBatchItemResultLineSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return convertAsyncIteratorToReadableStream(convertGatewayBatchResultLines(lines));
    } catch (error2) {
      if (isAbortOrTimeoutError(error2)) {
        throw error2;
      }
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doCancelBatch({
    batchId,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { value: responseBody } = await postJsonToApi({
        url: this.getBatchUrl("cancel"),
        headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
        body: { batchId },
        successfulResponseHandler: createJsonResponseHandler(gatewayBatchStatusResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ...responseBody.providerMetadata != null && {
          providerMetadata: responseBody.providerMetadata
        }
      };
    } catch (error2) {
      if (isAbortOrTimeoutError(error2)) {
        throw error2;
      }
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getBatchUrl(path) {
    return `${this.config.baseURL}/batch/${path}`;
  }
};
function maybeEncodeBatchFileParts(options) {
  for (const message of options.prompt) {
    if (!Array.isArray(message.content)) {
      continue;
    }
    for (const part of message.content) {
      if (part.type === "file" || part.type === "reasoning-file") {
        part.data = maybeBase64EncodeFileData(part.data);
      } else if (part.type === "tool-result" && part.output.type === "content") {
        for (const contentPart of part.output.value) {
          if (contentPart.type === "file") {
            contentPart.data = maybeBase64EncodeFileData(contentPart.data);
          }
        }
      }
    }
  }
  return options;
}
function maybeBase64EncodeFileData(data) {
  if (data.type === "data") {
    const bytes = data.data;
    if (bytes instanceof Uint8Array) {
      return { ...data, data: Buffer.from(bytes).toString("base64") };
    }
  }
  return data;
}
function validateSingleModel(requests) {
  const modelId = requests[0]?.modelId;
  if (modelId == null) {
    throw new InvalidArgumentError({
      argument: "requests",
      message: "The AI Gateway Batch API requires at least one request."
    });
  }
  for (const request of requests) {
    if (request.modelId !== modelId) {
      throw new InvalidArgumentError({
        argument: "requests",
        message: `The AI Gateway Batch API requires all requests in a batch to use the same model. Found "${modelId}" and "${request.modelId}".`
      });
    }
  }
  return modelId;
}
function assertTextBatchRequests(requests) {
  for (const request of requests) {
    const requestType = request.type;
    if (requestType !== "text") {
      throw new UnsupportedFunctionalityError({
        functionality: `batch request type: ${requestType}`,
        message: `The AI Gateway Batch API does not support batch requests with type "${requestType}".`
      });
    }
  }
}
function getGatewayBatchIdempotencyKey(providerOptions) {
  const gatewayOptions = providerOptions?.gateway;
  if (gatewayOptions == null || typeof gatewayOptions !== "object" || Array.isArray(gatewayOptions)) {
    return;
  }
  const key = gatewayOptions.idempotencyKey;
  return typeof key === "string" && key.length > 0 ? key : undefined;
}
function omitGatewayIdempotencyKey(providerOptions) {
  const gatewayOptions = providerOptions?.gateway;
  if (gatewayOptions == null || typeof gatewayOptions !== "object" || Array.isArray(gatewayOptions) || !("idempotencyKey" in gatewayOptions)) {
    return providerOptions;
  }
  const { idempotencyKey: _idempotencyKey, ...restGatewayOptions } = gatewayOptions;
  const restProviderOptions = { ...providerOptions };
  if (Object.keys(restGatewayOptions).length === 0) {
    delete restProviderOptions.gateway;
  } else {
    restProviderOptions.gateway = restGatewayOptions;
  }
  if (Object.keys(restProviderOptions).length === 0) {
    return;
  }
  return restProviderOptions;
}
function isAbortOrTimeoutError(error2) {
  if (!(error2 instanceof Error || error2 instanceof DOMException)) {
    return false;
  }
  return error2.name === "AbortError" || error2.name === "TimeoutError";
}
function convertGatewayBatchStatus(body) {
  const requestCounts = normalizeBatchRequestCounts({
    total: body.requestCounts?.total,
    pending: body.requestCounts?.pending,
    completed: body.requestCounts?.completed,
    failed: body.requestCounts?.failed
  });
  return {
    status: body.status,
    ...body.rawStatus != null && { rawStatus: body.rawStatus },
    ...requestCounts != null && { requestCounts },
    ...body.error != null && {
      error: {
        message: body.error.message,
        ...body.error.type != null && { type: body.error.type },
        ...body.error.code != null && { code: body.error.code },
        ...body.error.statusCode != null && {
          statusCode: body.error.statusCode
        }
      }
    },
    ...body.createdAt != null && { createdAt: body.createdAt },
    ...body.expiresAt != null && { expiresAt: body.expiresAt },
    ...body.providerMetadata != null && {
      providerMetadata: body.providerMetadata
    }
  };
}
async function* convertGatewayBatchResultLines(lines) {
  for await (const line of lines) {
    const item = line;
    if (item.status === "succeeded") {
      const response = item.result?.response;
      if (response !== undefined && typeof response.timestamp === "string") {
        response.timestamp = new Date(response.timestamp);
      }
    }
    yield item;
  }
}
var gatewayBatchItemResultLineSchema = z.object({
  type: z.literal("text"),
  id: z.string(),
  status: z.enum(["cancelled", "expired", "failed", "succeeded"])
}).catchall(z.unknown());
var gatewayBatchErrorSchema = z.object({
  message: z.string(),
  type: z.string().nullish(),
  code: z.string().nullish(),
  statusCode: z.number().nullish()
});
var gatewayBatchRequestCountsSchema = z.object({
  total: z.number().nullish(),
  pending: z.number().nullish(),
  completed: z.number().nullish(),
  failed: z.number().nullish()
});
var gatewayBatchProviderMetadataSchema = z.record(z.string(), z.record(z.string(), z.unknown()));
var gatewayBatchStatusFieldsSchema = z.object({
  status: z.enum(["completed", "failed", "pending"]),
  rawStatus: z.string().nullish(),
  requestCounts: gatewayBatchRequestCountsSchema.nullish(),
  error: gatewayBatchErrorSchema.nullish(),
  createdAt: z.string().nullish(),
  expiresAt: z.string().nullish(),
  providerMetadata: gatewayBatchProviderMetadataSchema.nullish()
});
var gatewayBatchStartResponseSchema = gatewayBatchStatusFieldsSchema.extend({
  batchId: z.string(),
  warnings: z.array(z.object({
    requestId: z.string().nullish(),
    warning: z.unknown()
  }).catchall(z.unknown())).nullish()
});
var gatewayBatchStatusResponseSchema = gatewayBatchStatusFieldsSchema;
var GatewayLanguageModel = class _GatewayLanguageModel {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.supportedUrls = { "*/*": [/.*/] };
  }
  static [WORKFLOW_SERIALIZE](model) {
    return serializeModelOptions({
      modelId: model.modelId,
      config: model.config
    });
  }
  static [WORKFLOW_DESERIALIZE](options) {
    return new _GatewayLanguageModel(options.modelId, options.config);
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(options) {
    const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
    return {
      args: this.maybeEncodeFileParts(optionsWithoutSignal),
      warnings: []
    };
  }
  async doGenerate(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue: rawResponse
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve(this.config.o11yHeaders)),
        body: args,
        successfulResponseHandler: createJsonResponseHandler(z.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ...responseBody,
        request: { body: args },
        response: { headers: responseHeaders, body: rawResponse },
        warnings: [...responseBody.warnings ?? [], ...warnings]
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doStream(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { value: response, responseHeaders } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve(this.config.o11yHeaders)),
        body: args,
        successfulResponseHandler: createEventSourceResponseHandler(z.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        stream: response.pipeThrough(new TransformStream({
          start(controller) {
            if (warnings.length > 0) {
              controller.enqueue({ type: "stream-start", warnings });
            }
          },
          transform(chunk, controller) {
            if (chunk.success) {
              const streamPart = chunk.value;
              if (streamPart.type === "raw" && !options.includeRawChunks) {
                return;
              }
              if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                streamPart.timestamp = new Date(streamPart.timestamp);
              }
              controller.enqueue(streamPart);
            } else {
              controller.error(chunk.error);
            }
          }
        })),
        request: { body: args },
        response: { headers: responseHeaders }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  maybeEncodeFileParts(options) {
    for (const message of options.prompt) {
      if (!Array.isArray(message.content)) {
        continue;
      }
      for (const part of message.content) {
        if (part.type === "file" || part.type === "reasoning-file") {
          part.data = maybeBase64EncodeFileData2(part.data);
        } else if (part.type === "tool-result" && part.output.type === "content") {
          for (const contentPart of part.output.value) {
            if (contentPart.type === "file") {
              contentPart.data = maybeBase64EncodeFileData2(contentPart.data);
            }
          }
        }
      }
    }
    return options;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(modelId, streaming) {
    return {
      "ai-language-model-specification-version": "4",
      "ai-language-model-id": modelId,
      "ai-language-model-streaming": String(streaming)
    };
  }
};
function maybeBase64EncodeFileData2(data) {
  if (data.type === "data") {
    const bytes = data.data;
    if (bytes instanceof Uint8Array) {
      return { ...data, data: Buffer.from(bytes).toString("base64") };
    }
  }
  return data;
}
var GatewayEmbeddingModel = class _GatewayEmbeddingModel {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
  }
  static [WORKFLOW_SERIALIZE](model) {
    return serializeModelOptions({
      modelId: model.modelId,
      config: model.config
    });
  }
  static [WORKFLOW_DESERIALIZE](options) {
    return new _GatewayEmbeddingModel(options.modelId, options.config);
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          values,
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayEmbeddingResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        embeddings: responseBody.embeddings,
        usage: responseBody.usage ?? undefined,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: responseBody.warnings ?? []
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEmbeddingWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayEmbeddingResponseSchema = lazySchema(() => zodSchema(z.object({
  embeddings: z.array(z.array(z.number())),
  usage: z.object({ tokens: z.number() }).nullish(),
  warnings: z.array(gatewayEmbeddingWarningSchema).optional(),
  providerMetadata: z.record(z.string(), z.record(z.string(), z.unknown())).optional()
})));
var GatewayImageModel = class _GatewayImageModel {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  static [WORKFLOW_SERIALIZE](model) {
    return serializeModelOptions({
      modelId: model.modelId,
      config: model.config
    });
  }
  static [WORKFLOW_DESERIALIZE](options) {
    return new _GatewayImageModel(options.modelId, options.config);
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n,
    size,
    aspectRatio,
    seed,
    files,
    mask,
    providerOptions,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          prompt,
          n,
          ...size && { size },
          ...aspectRatio && { aspectRatio },
          ...seed && { seed },
          ...providerOptions && { providerOptions },
          ...files && {
            files: files.map((file) => maybeEncodeImageFile(file))
          },
          ...mask && { mask: maybeEncodeImageFile(mask) }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayImageResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        images: responseBody.images,
        ...responseBody.isRetryable != null && {
          isRetryable: responseBody.isRetryable
        },
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date,
          modelId: this.modelId,
          headers: responseHeaders
        },
        ...responseBody.usage != null && {
          usage: {
            inputTokens: responseBody.usage.inputTokens ?? undefined,
            outputTokens: responseBody.usage.outputTokens ?? undefined,
            totalTokens: responseBody.usage.totalTokens ?? undefined
          }
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeImageFile(file) {
  if (file.type === "file" && file.data instanceof Uint8Array) {
    return {
      ...file,
      data: convertUint8ArrayToBase64(file.data)
    };
  }
  return file;
}
var providerMetadataEntrySchema = z.object({
  images: z.array(z.unknown()).optional()
}).catchall(z.unknown());
var gatewayImageWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayImageUsageSchema = z.object({
  inputTokens: z.number().nullish(),
  outputTokens: z.number().nullish(),
  totalTokens: z.number().nullish()
});
var gatewayImageResponseSchema = z.object({
  images: z.array(z.string()),
  isRetryable: z.boolean().optional(),
  warnings: z.array(gatewayImageWarningSchema).optional(),
  providerMetadata: z.record(z.string(), providerMetadataEntrySchema).optional(),
  usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate(options) {
    const { headers, abortSignal } = options;
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders), { accept: "text/event-stream" }),
        body: this.buildRequestBody(options),
        successfulResponseHandler: async ({
          response,
          url,
          requestBodyValues
        }) => {
          if (response.body == null) {
            throw new APICallError({
              message: "SSE response body is empty",
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const eventStream = parseJsonEventStream({
            stream: response.body,
            schema: gatewayVideoEventSchema
          });
          const reader = eventStream.getReader();
          const { done, value: parseResult } = await reader.read();
          reader.releaseLock();
          if (done || !parseResult) {
            throw new APICallError({
              message: "SSE stream ended without a data event",
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          if (!parseResult.success) {
            throw new APICallError({
              message: "Failed to parse video SSE event",
              cause: parseResult.error,
              url,
              requestBodyValues,
              statusCode: response.status
            });
          }
          const event = parseResult.value;
          if (event.type === "error") {
            throw new APICallError({
              message: event.message,
              statusCode: event.statusCode,
              url,
              requestBodyValues,
              responseHeaders: Object.fromEntries([...response.headers]),
              responseBody: JSON.stringify(event),
              data: {
                error: {
                  message: event.message,
                  type: event.errorType,
                  param: event.param
                }
              }
            });
          }
          return {
            value: {
              videos: event.videos,
              warnings: event.warnings,
              providerMetadata: event.providerMetadata
            },
            responseHeaders: Object.fromEntries([...response.headers])
          };
        },
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        videos: responseBody.videos,
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata ?? undefined,
        response: {
          timestamp: /* @__PURE__ */ new Date,
          modelId: this.modelId,
          headers: responseHeaders
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async handleWebhookOption({
    webhook
  }) {
    const { url, received } = await webhook();
    return { webhookUrl: url, received };
  }
  async doStart(options) {
    const { headers, abortSignal, webhookUrl } = options;
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getStartUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          ...this.buildRequestBody(options),
          ...webhookUrl && { callbackUrl: webhookUrl }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayVideoStartResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        operation: responseBody.operation,
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata ?? undefined,
        response: {
          timestamp: /* @__PURE__ */ new Date,
          modelId: this.modelId,
          headers: responseHeaders
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doStatus({
    operation,
    abortSignal,
    headers
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const { responseHeaders, value: responseBody } = await postJsonToApi({
        url: this.getStatusUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: { operation },
        successfulResponseHandler: createJsonResponseHandler(gatewayVideoStatusResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      const response = {
        timestamp: /* @__PURE__ */ new Date,
        modelId: this.modelId,
        headers: responseHeaders
      };
      if (responseBody.status === "completed") {
        return {
          status: "completed",
          videos: responseBody.videos,
          warnings: responseBody.warnings ?? [],
          providerMetadata: responseBody.providerMetadata ?? undefined,
          response
        };
      }
      if (responseBody.status === "error") {
        return {
          status: "error",
          error: responseBody.error,
          providerMetadata: responseBody.providerMetadata ?? undefined,
          response
        };
      }
      if (responseBody.status === "cancelled") {
        return {
          status: "error",
          error: "Video generation was cancelled.",
          providerMetadata: responseBody.providerMetadata ?? undefined,
          response
        };
      }
      return {
        status: "pending",
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata ?? undefined,
        response
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  buildRequestBody({
    prompt,
    n,
    aspectRatio,
    resolution,
    duration: duration2,
    fps,
    seed,
    generateAudio,
    image,
    frameImages,
    inputReferences,
    providerOptions
  }) {
    return {
      prompt,
      n,
      ...aspectRatio && { aspectRatio },
      ...resolution && { resolution },
      ...duration2 && { duration: duration2 },
      ...fps && { fps },
      ...seed && { seed },
      ...generateAudio !== undefined && { generateAudio },
      ...providerOptions && { providerOptions },
      ...image && { image: maybeEncodeVideoFile(image) },
      ...frameImages && {
        frameImages: frameImages.map((frame) => ({
          ...frame,
          image: maybeEncodeVideoFile(frame.image)
        }))
      },
      ...inputReferences && {
        inputReferences: inputReferences.map((reference) => maybeEncodeVideoFile(reference))
      }
    };
  }
  getUrl() {
    return `${this.config.baseURL}/video-model`;
  }
  getStartUrl() {
    return `${this.config.baseURL}/video-model/start`;
  }
  getStatusUrl() {
    return `${this.config.baseURL}/video-model/status`;
  }
  getModelConfigHeaders() {
    return {
      "ai-video-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeVideoFile(file) {
  if (file.type === "file" && file.data instanceof Uint8Array) {
    return {
      ...file,
      data: convertUint8ArrayToBase64(file.data)
    };
  }
  return file;
}
var providerMetadataEntrySchema2 = z.object({
  videos: z.array(z.unknown()).optional()
}).catchall(z.unknown());
var gatewayVideoDataSchema = z.union([
  z.object({
    type: z.literal("url"),
    url: z.string(),
    mediaType: z.string()
  }),
  z.object({
    type: z.literal("base64"),
    data: z.string(),
    mediaType: z.string()
  })
]);
var gatewayVideoWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayVideoEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("result"),
    videos: z.array(gatewayVideoDataSchema),
    warnings: z.array(gatewayVideoWarningSchema).optional(),
    providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).optional()
  }),
  z.object({
    type: z.literal("error"),
    message: z.string(),
    errorType: z.string(),
    statusCode: z.number(),
    param: z.unknown().nullable()
  })
]);
var gatewayVideoStartResponseSchema = z.object({
  operation: z.unknown(),
  warnings: z.array(gatewayVideoWarningSchema).nullish(),
  providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).nullish()
});
var gatewayVideoStatusResponseSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("pending"),
    warnings: z.array(gatewayVideoWarningSchema).nullish(),
    providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).nullish()
  }),
  z.object({
    status: z.literal("completed"),
    videos: z.array(gatewayVideoDataSchema),
    warnings: z.array(gatewayVideoWarningSchema).nullish(),
    providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).nullish()
  }),
  z.object({
    status: z.literal("error"),
    error: z.string(),
    providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).nullish()
  }),
  z.object({
    status: z.literal("cancelled"),
    providerMetadata: z.record(z.string(), providerMetadataEntrySchema2).nullish()
  })
]);
var GatewayEvaluationModel = class {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.supportedQuestionTypes = ["choice", "score", "boolean"];
  }
  get provider() {
    return this.config.provider;
  }
  async doEvaluate({
    state,
    questions,
    headers,
    abortSignal,
    providerOptions
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          state,
          questions,
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayEvaluationResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        answers: responseBody.answers,
        ...responseBody.rounding ? { rounding: responseBody.rounding } : {},
        ...responseBody.usage ? { usage: responseBody.usage } : {},
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          modelId: this.modelId,
          headers: responseHeaders,
          body: rawValue
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/evaluation-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-evaluation-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEvaluationAnswerSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("choice"),
    choice: z.string(),
    probabilities: z.record(z.string(), z.number()).optional()
  }),
  z.object({
    type: z.literal("score"),
    score: z.number(),
    probabilities: z.record(z.string(), z.number()).optional()
  }),
  z.object({
    type: z.literal("boolean"),
    probability: z.number()
  })
]);
var gatewayEvaluationWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayEvaluationResponseSchema = lazySchema(() => zodSchema(z.object({
  answers: z.record(z.string(), gatewayEvaluationAnswerSchema),
  rounding: z.object({
    probabilityDecimals: z.number().optional(),
    scoreDecimals: z.number().optional()
  }).optional(),
  usage: z.object({
    inputTokens: z.number().optional(),
    outputTokens: z.number().optional()
  }).optional(),
  warnings: z.array(gatewayEvaluationWarningSchema).optional(),
  providerMetadata: z.record(z.string(), z.record(z.string(), z.unknown())).optional()
})));
var GatewayRerankingModel = class {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
  }
  get provider() {
    return this.config.provider;
  }
  async doRerank({
    documents,
    query,
    topN,
    headers,
    abortSignal,
    providerOptions
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          documents,
          query,
          ...topN != null ? { topN } : {},
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayRerankingResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ranking: responseBody.ranking,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: responseBody.warnings ?? []
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/reranking-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-reranking-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayRerankingWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayRerankingResponseSchema = lazySchema(() => zodSchema(z.object({
  ranking: z.array(z.object({
    index: z.number(),
    relevanceScore: z.number()
  })),
  warnings: z.array(gatewayRerankingWarningSchema).optional(),
  providerMetadata: z.record(z.string(), z.record(z.string(), z.unknown())).optional()
})));
var GatewaySpeechModel = class {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    text,
    voice,
    outputFormat,
    instructions,
    speed,
    language,
    providerOptions,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          text,
          ...voice && { voice },
          ...outputFormat && { outputFormat },
          ...instructions && { instructions },
          ...speed != null && { speed },
          ...language && { language },
          ...providerOptions && { providerOptions }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewaySpeechResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        audio: responseBody.audio,
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date,
          modelId: this.modelId,
          headers: responseHeaders,
          body: rawValue
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/speech-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-speech-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
var providerMetadataEntrySchema3 = z.object({}).catchall(z.unknown());
var gatewaySpeechWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewaySpeechResponseSchema = z.object({
  audio: z.string(),
  warnings: z.array(gatewaySpeechWarningSchema).optional(),
  providerMetadata: z.record(z.string(), providerMetadataEntrySchema3).optional()
});
var GatewayTranscriptionModel = class {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    audio,
    mediaType,
    providerOptions,
    headers,
    abortSignal
  }) {
    const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : undefined;
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
        body: {
          audio: audio instanceof Uint8Array ? convertUint8ArrayToBase64(audio) : audio,
          mediaType,
          ...providerOptions && { providerOptions }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayTranscriptionResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        text: responseBody.text,
        segments: responseBody.segments ?? [],
        language: responseBody.language ?? undefined,
        durationInSeconds: responseBody.durationInSeconds ?? undefined,
        warnings: responseBody.warnings ?? [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date,
          modelId: this.modelId,
          headers: responseHeaders,
          body: rawValue
        }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(resolvedHeaders ?? {}));
    }
  }
  async doStream(options) {
    const currentDate = this.config._internal?.currentDate?.() ?? /* @__PURE__ */ new Date;
    const headers = combineHeaders(await resolve(this.config.headers ?? {}), options.headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders));
    const authMethod = await parseAuthMethod(headers);
    const startFrame = {
      type: TRANSCRIPTION_STREAM_START_FRAME_TYPE,
      inputAudioFormat: options.inputAudioFormat,
      ...options.providerOptions != null && {
        providerOptions: options.providerOptions
      },
      ...options.includeRawChunks != null && {
        includeRawChunks: options.includeRawChunks
      }
    };
    return {
      stream: createGatewayTranscriptionStream({
        webSocket: this.config.webSocket,
        url: toGatewayTranscriptionUrl(this.config.baseURL, this.modelId),
        protocols: getProtocolsFromHeaders(headers),
        headers,
        startFrame,
        audio: options.audio,
        abortSignal: options.abortSignal,
        authMethod
      }),
      request: { body: startFrame },
      response: { timestamp: currentDate, modelId: this.modelId }
    };
  }
  getUrl() {
    return `${this.config.baseURL}/transcription-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-transcription-model-specification-version": "4",
      "ai-model-id": this.modelId
    };
  }
};
function toGatewayTranscriptionUrl(baseURL, modelId) {
  const url = new URL(`${baseURL.replace(/^http/, "ws")}/transcription-model`);
  url.searchParams.set("ai-model-id", modelId);
  return url.toString();
}
function getProtocolsFromHeaders(headers) {
  const normalizedHeaders = normalizeHeaders(headers);
  const authorization = normalizedHeaders.authorization;
  const token = authorization?.startsWith("Bearer ") ? authorization.slice("Bearer ".length) : undefined;
  return token == null ? [GATEWAY_TRANSCRIPTION_SUBPROTOCOL] : getGatewayTranscriptionProtocols(token, {
    teamIdOrSlug: normalizedHeaders[VERCEL_AI_GATEWAY_TEAM_HEADER]
  });
}
var MAX_AUDIO_FRAME_BYTES = 64 * 1024;
function createGatewayTranscriptionStream({
  webSocket,
  url,
  protocols,
  headers,
  startFrame,
  audio,
  abortSignal,
  authMethod
}) {
  let finished = false;
  let cleanup = () => {};
  return new ReadableStream({
    start: (controller) => {
      let audioReader;
      let hasServerErrorPart = false;
      let lastServerError;
      let audioStopped = false;
      let connection;
      cleanup = (closeCode) => {
        if (audioReader != null) {
          audioReader.cancel().catch(() => {});
        } else {
          audio.cancel().catch(() => {});
        }
        connection?.close(closeCode);
      };
      const stopAudio = () => {
        audioStopped = true;
        if (audioReader != null) {
          audioReader.cancel().catch(() => {});
          audioReader = undefined;
        } else {
          audio.cancel().catch(() => {});
        }
      };
      const finishWithError = (error2) => {
        if (finished)
          return;
        finished = true;
        cleanup();
        errorControllerWithGatewayError(controller, error2, authMethod);
      };
      const sendAudio = async (socket) => {
        const reader = audio.getReader();
        audioReader = reader;
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done || finished)
              break;
            const bytes = typeof value === "string" ? convertBase64ToUint8Array(value) : value;
            for (let offset = 0;offset < bytes.length; offset += MAX_AUDIO_FRAME_BYTES) {
              if (finished)
                break;
              socket.send(bytes.subarray(offset, offset + MAX_AUDIO_FRAME_BYTES));
              await waitForWebSocketBufferDrain(socket);
            }
          }
        } finally {
          reader.releaseLock();
          if (audioReader === reader) {
            audioReader = undefined;
          }
        }
        if (!finished && !audioStopped) {
          socket.send(JSON.stringify({
            type: TRANSCRIPTION_STREAM_AUDIO_DONE_FRAME_TYPE
          }));
        }
      };
      connection = connectToWebSocket({
        url,
        protocols,
        headers,
        webSocket,
        abortSignal,
        onAbort: (reason) => {
          if (finished)
            return;
          finished = true;
          cleanup();
          controller.error(reason);
        },
        onProcessingError: finishWithError,
        onOpen: (socket) => {
          socket.send(JSON.stringify(startFrame));
          sendAudio(socket).catch(finishWithError);
        },
        onMessageText: (text) => {
          if (finished)
            return;
          const part = parseTranscriptionStreamPart(text);
          if (part == null)
            return;
          if (part.type === "finish") {
            finished = true;
            controller.enqueue(part);
            controller.close();
            cleanup(1000);
            return;
          }
          if (part.type === "error") {
            hasServerErrorPart = true;
            lastServerError = part.error;
            stopAudio();
          }
          controller.enqueue(part);
        },
        onSocketError: () => {
          finishWithError(new Error("Connection error on AI Gateway transcription stream"));
        },
        onClose: () => {
          if (hasServerErrorPart) {
            if (finished)
              return;
            createErrorFromServerErrorPart(lastServerError, authMethod).then(finishWithError);
            return;
          }
          finishWithError(new Error("AI Gateway transcription stream closed before a finish part was received"));
        }
      });
    },
    cancel: () => {
      if (finished)
        return;
      finished = true;
      cleanup();
    }
  });
}
var providerMetadataEntrySchema4 = z.object({}).catchall(z.unknown());
var gatewayTranscriptionWarningSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("unsupported"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("compatibility"),
    feature: z.string(),
    details: z.string().optional()
  }),
  z.object({
    type: z.literal("deprecated"),
    setting: z.string(),
    message: z.string()
  }),
  z.object({
    type: z.literal("other"),
    message: z.string()
  })
]);
var gatewayTranscriptionResponseSchema = z.object({
  text: z.string(),
  segments: z.array(z.object({
    text: z.string(),
    startSecond: z.number(),
    endSecond: z.number()
  })).optional(),
  language: z.string().nullish(),
  durationInSeconds: z.number().nullish(),
  warnings: z.array(gatewayTranscriptionWarningSchema).optional(),
  providerMetadata: z.record(z.string(), providerMetadataEntrySchema4).optional()
});
async function errorControllerWithGatewayError(controller, error2, authMethod) {
  controller.error(await asGatewayError(error2, authMethod));
}
function getServerErrorMessage(error2) {
  if (error2 != null && typeof error2 === "object" && "message" in error2 && typeof error2.message === "string") {
    return error2.message;
  }
  return getErrorMessage(error2);
}
var SERVER_ERROR_STATUS_CODES = {
  authentication_error: 401,
  failed_dependency: 424,
  forbidden: 403,
  internal_server_error: 500,
  invalid_request_error: 400,
  model_not_found: 404,
  rate_limit_exceeded: 429
};
async function createErrorFromServerErrorPart(error2, authMethod) {
  if (typeof error2 === "object" && error2 != null && "message" in error2 && typeof error2.message === "string" && "type" in error2 && typeof error2.type === "string" && error2.type in SERVER_ERROR_STATUS_CODES) {
    return createGatewayErrorFromResponse({
      response: { error: { message: error2.message, type: error2.type } },
      statusCode: SERVER_ERROR_STATUS_CODES[error2.type],
      authMethod
    });
  }
  return new Error(`AI Gateway transcription stream failed: ${getServerErrorMessage(error2)}`);
}
var GatewayRealtimeModel = class {
  constructor(modelId, config2) {
    this.specificationVersion = "v4";
    this.modelId = modelId;
    this.provider = config2.provider;
    this.config = config2;
  }
  async doCreateClientSecret(options) {
    const secret = await this.config.createClientSecret({
      modelId: this.modelId,
      ...options?.expiresAfterSeconds != null && {
        expiresAfterSeconds: options.expiresAfterSeconds
      }
    });
    return {
      token: secret.token,
      url: toGatewayRealtimeUrl(this.config.baseURL, this.modelId),
      ...secret.expiresAt != null && { expiresAt: secret.expiresAt }
    };
  }
  getWebSocketConfig(options) {
    return {
      url: options.url,
      protocols: getGatewayRealtimeProtocols(options.token, {
        teamIdOrSlug: this.config.teamIdOrSlug
      })
    };
  }
  parseServerEvent(raw) {
    return raw;
  }
  serializeClientEvent(event) {
    return event;
  }
  buildSessionConfig(config2) {
    return config2;
  }
};
function toGatewayRealtimeUrl(baseURL, modelId) {
  const url = new URL(`${baseURL.replace(/^http/, "ws")}/realtime-model`);
  url.searchParams.set("ai-model-id", modelId);
  return url.toString();
}
var jsonObjectSchema = z.record(z.string(), z.unknown());
var browserbaseFetchInputSchema = lazySchema(() => zodSchema(z.object({
  url: z.string().url().describe("URL of the page to fetch."),
  allow_redirects: z.boolean().optional().describe("Whether to follow HTTP redirects (default: false)."),
  allow_insecure_ssl: z.boolean().optional().describe("Whether to bypass TLS certificate verification (default: false). Only use for trusted hosts."),
  proxies: z.boolean().optional().describe("Whether to route the request through Browserbase proxies (default: false)."),
  format: z.enum(["raw", "json", "markdown"]).optional().describe("Output format. raw returns the response body unchanged, markdown returns page content as Markdown, and json returns structured content using schema."),
  schema: jsonObjectSchema.optional().describe("JSON Schema for structured extraction. Only use with format set to json.")
})));
var browserbaseFetchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    id: z.string(),
    content: z.union([z.string(), jsonObjectSchema]),
    contentType: z.string(),
    encoding: z.string(),
    headers: z.record(z.string(), z.string()),
    statusCode: z.number()
  }),
  z.object({
    error: z.enum([
      "api_error",
      "configuration_error",
      "execution_error",
      "invalid_input",
      "rate_limit",
      "timeout",
      "unknown"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var browserbaseFetchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.browserbase_fetch",
  inputSchema: browserbaseFetchInputSchema,
  outputSchema: browserbaseFetchOutputSchema
});
var browserbaseFetch = (config2 = {}) => browserbaseFetchToolFactory(config2);
var browserbaseSearchInputSchema = lazySchema(() => zodSchema(z.object({
  query: z.string().min(1).max(200).describe("Web search query. Must be between 1 and 200 characters."),
  num_results: z.number().int().min(1).max(25).optional().describe("Maximum number of results to return (1-25, default: 10).")
})));
var browserbaseSearchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    query: z.string(),
    requestId: z.string(),
    results: z.array(z.object({
      id: z.string(),
      title: z.string(),
      url: z.string(),
      author: z.string().optional(),
      favicon: z.string().optional(),
      image: z.string().optional(),
      publishedDate: z.string().optional()
    }))
  }),
  z.object({
    error: z.enum([
      "api_error",
      "configuration_error",
      "execution_error",
      "invalid_input",
      "rate_limit",
      "timeout",
      "unknown"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var browserbaseSearchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.browserbase_search",
  inputSchema: browserbaseSearchInputSchema,
  outputSchema: browserbaseSearchOutputSchema
});
var browserbaseSearch = (config2 = {}) => browserbaseSearchToolFactory(config2);
var exaSearchInputSchema = lazySchema(() => zodSchema(z.object({
  query: z.string().describe("Natural-language web search query. This is required."),
  type: z.enum(["auto", "fast", "instant"]).optional().describe("Search method. Use auto for the default balance of speed and quality."),
  num_results: z.number().optional().describe("Maximum number of results to return (1-100, default: 10)."),
  category: z.enum([
    "company",
    "people",
    "research paper",
    "news",
    "personal site",
    "financial report"
  ]).optional().describe("Optional content category to focus results."),
  user_location: z.string().optional().describe("Two-letter ISO country code such as 'US'."),
  include_domains: z.array(z.string()).optional().describe("Only return results from these domains."),
  exclude_domains: z.array(z.string()).optional().describe("Exclude results from these domains."),
  start_published_date: z.string().optional().describe("Only return links published after this ISO 8601 date."),
  end_published_date: z.string().optional().describe("Only return links published before this ISO 8601 date."),
  contents: z.object({
    text: z.union([
      z.boolean(),
      z.object({
        max_characters: z.number().optional(),
        include_html_tags: z.boolean().optional(),
        verbosity: z.enum(["compact", "standard", "full"]).optional(),
        include_sections: z.array(z.enum([
          "header",
          "navigation",
          "banner",
          "body",
          "sidebar",
          "footer",
          "metadata"
        ])).optional(),
        exclude_sections: z.array(z.enum([
          "header",
          "navigation",
          "banner",
          "body",
          "sidebar",
          "footer",
          "metadata"
        ])).optional()
      })
    ]).optional(),
    highlights: z.union([
      z.boolean(),
      z.object({
        query: z.string().optional(),
        max_characters: z.number().optional()
      })
    ]).optional(),
    max_age_hours: z.number().optional(),
    livecrawl_timeout: z.number().optional(),
    subpages: z.number().optional(),
    subpage_target: z.union([z.string(), z.array(z.string())]).optional(),
    extras: z.object({
      links: z.number().optional(),
      image_links: z.number().optional()
    }).optional()
  }).optional().describe("Controls extracted page content and freshness.")
})));
var exaSearchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    requestId: z.string(),
    searchType: z.string().optional(),
    resolvedSearchType: z.string().optional(),
    results: z.array(z.object({
      title: z.string(),
      url: z.string(),
      id: z.string(),
      publishedDate: z.string().nullable().optional(),
      author: z.string().nullable().optional(),
      image: z.string().nullable().optional(),
      favicon: z.string().nullable().optional(),
      text: z.string().optional(),
      highlights: z.array(z.string()).optional(),
      highlightScores: z.array(z.number()).optional(),
      summary: z.string().optional(),
      subpages: z.array(z.any()).optional(),
      extras: z.object({
        links: z.array(z.string()).optional(),
        imageLinks: z.array(z.string()).optional()
      }).optional()
    })),
    costDollars: z.object({
      total: z.number().optional(),
      search: z.record(z.string(), z.number()).optional()
    }).optional()
  }),
  z.object({
    error: z.enum([
      "api_error",
      "rate_limit",
      "timeout",
      "invalid_input",
      "configuration_error",
      "execution_error",
      "unknown"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var exaSearchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.exa_search",
  inputSchema: exaSearchInputSchema,
  outputSchema: exaSearchOutputSchema
});
var exaSearch = (config2 = {}) => exaSearchToolFactory(config2);
var parallelSearchInputSchema = lazySchema(() => zodSchema(z.object({
  objective: z.string().describe("Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."),
  search_queries: z.array(z.string()).optional().describe("Optional search queries to supplement the objective. Maximum 200 characters per query."),
  mode: z.enum(["one-shot", "agentic"]).optional().describe('Mode preset: "one-shot" for comprehensive results with longer excerpts (default), "agentic" for concise, token-efficient results for multi-step workflows.'),
  max_results: z.number().optional().describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
  source_policy: z.object({
    include_domains: z.array(z.string()).optional().describe("Limit results to these domains. Use plain domain names only \u2014 e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."),
    exclude_domains: z.array(z.string()).optional().describe("Exclude results from these domains. Use plain domain names only \u2014 e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."),
    after_date: z.string().optional().describe("Only include results published after this date. Use an ISO 8601 calendar date formatted YYYY-MM-DD (e.g. 2025-01-01); do not include a time.")
  }).optional().describe("Source policy for controlling which domains to include/exclude and freshness."),
  excerpts: z.object({
    max_chars_per_result: z.number().optional().describe("Maximum characters per result."),
    max_chars_total: z.number().optional().describe("Maximum total characters across all results.")
  }).optional().describe("Excerpt configuration for controlling result length."),
  fetch_policy: z.object({
    max_age_seconds: z.number().optional().describe("Maximum age in seconds for cached content. Set to 0 to always fetch fresh content.")
  }).optional().describe("Fetch policy for controlling content freshness.")
})));
var parallelSearchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    searchId: z.string(),
    results: z.array(z.object({
      url: z.string(),
      title: z.string(),
      excerpt: z.string(),
      publishDate: z.string().nullable().optional(),
      relevanceScore: z.number().optional()
    }))
  }),
  z.object({
    error: z.enum([
      "api_error",
      "rate_limit",
      "timeout",
      "invalid_input",
      "configuration_error",
      "unknown"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var parallelSearchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.parallel_search",
  inputSchema: parallelSearchInputSchema,
  outputSchema: parallelSearchOutputSchema
});
var parallelSearch = (config2 = {}) => parallelSearchToolFactory(config2);
var perplexitySearchInputSchema = lazySchema(() => zodSchema(z.object({
  query: z.union([z.string(), z.array(z.string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
  max_results: z.number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
  max_tokens_per_page: z.number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
  max_tokens: z.number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
  country: z.string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
  search_domain_filter: z.array(z.string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
  search_language_filter: z.array(z.string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
  search_after_date: z.string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
  search_before_date: z.string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
  last_updated_after_filter: z.string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
  last_updated_before_filter: z.string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
  search_recency_filter: z.enum(["day", "week", "month", "year"]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
})));
var perplexitySearchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    results: z.array(z.object({
      title: z.string(),
      url: z.string(),
      snippet: z.string(),
      date: z.string().optional(),
      lastUpdated: z.string().optional()
    })),
    id: z.string()
  }),
  z.object({
    error: z.enum([
      "api_error",
      "rate_limit",
      "timeout",
      "invalid_input",
      "unknown"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var perplexitySearchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.perplexity_search",
  inputSchema: perplexitySearchInputSchema,
  outputSchema: perplexitySearchOutputSchema
});
var perplexitySearch = (config2 = {}) => perplexitySearchToolFactory(config2);
var takoDataSourceInputSchema = z.object({
  count: z.number().optional().describe("Maximum number of data results to return (1-20). When include_contents is true, each additional result adds its own data surcharge."),
  include_contents: z.boolean().optional().describe("Inline rows for each data result. This adds a data surcharge based on row count and dataset source. To estimate cost, search with include_contents disabled and inspect cards.content.export_pricing. This applies to every returned card; limit sources.data.count and sources.data.max_rows to control cost."),
  mode: z.enum(["inline", "url"]).optional().describe("Requested data delivery mode. Search card data is always inline."),
  content_format: z.enum(["card_json", "csv", "json_compact", "json_records"]).optional().describe("Serialization for inlined card data."),
  max_rows: z.number().optional().describe("Maximum rows to inline per result. Omit to use the allowance in cards.content.export_pricing. A data surcharge applies per 1,000 exported rows; lower values reduce cost."),
  node_ids: z.array(z.string()).optional().describe("Data Graph node IDs to prioritize. Maximum 20."),
  strict: z.boolean().optional().describe("Only return cards matching node_ids. Requires a non-empty node_ids.")
});
var takoWebSourceInputSchema = z.object({
  count: z.number().optional().describe("Maximum number of web results to return (1-20)."),
  include_contents: z.boolean().optional().describe("Inline extracted web page text. This can add a data charge."),
  category: z.enum(["finance", "news", "sports"]).optional().describe("Optional web-result category filter."),
  include_domains: z.array(z.string()).optional().describe("Only return results from these bare domains."),
  exclude_domains: z.array(z.string()).optional().describe("Exclude results from these bare domains."),
  snippet_max_chars: z.number().optional().describe("Maximum characters in each web-result snippet."),
  highlights: z.boolean().optional().describe("Include highlighted passages in web results. Defaults to true in AI Gateway."),
  article_content_max_chars: z.number().optional().describe("Maximum extracted characters per web page when including contents."),
  published_after: z.string().optional().describe("Keep results published on or after this ISO date (YYYY-MM-DD)."),
  published_before: z.string().optional().describe("Keep results published on or before this ISO date (YYYY-MM-DD).")
});
var takoSearchInputSchema = lazySchema(() => zodSchema(z.object({
  query: z.string().describe('Natural-language search query. Include the entity, metric, and time period. Quote a phrase to force it to one entity, for example "Tesla":PRODUCT price.'),
  effort: z.enum(["deep", "fast", "instant"]).optional().describe("Search effort. fast is the balanced default, instant favors cached results and low latency, and deep broadens retrieval with reranking at higher cost and latency."),
  sources: z.object({
    data: takoDataSourceInputSchema.optional(),
    web: takoWebSourceInputSchema.optional()
  }).optional().describe("Sources to search. Omit to search both curated data and the web. When provided, only keys present are searched."),
  location: z.object({
    latitude: z.number().describe("Latitude between -90 and 90."),
    longitude: z.number().describe("Longitude between -180 and 180.")
  }).optional().describe("End-user coordinates for localized results."),
  country_code: z.string().optional().describe("Two-letter ISO 3166-1 country code, such as 'US'."),
  locale: z.string().optional().describe("BCP-47 locale, such as 'en-US'."),
  timezone: z.string().optional().describe("IANA timezone, such as 'America/New_York'."),
  output_settings: z.object({
    image_dark_mode: z.boolean().optional().describe("Render card preview images in dark mode."),
    force_refresh: z.boolean().optional().describe("Instant-effort only. Request a refreshed instant result.")
  }).optional().describe("Controls card rendering in the search response."),
  include_related: z.number().optional().describe("Maximum related search suggestions to include (1-20).")
})));
var takoDatasetCellSchema = z.union([z.boolean(), z.number(), z.string()]).nullable();
var takoResultContentSchema = z.object({
  content_format: z.enum(["card_json", "csv", "json_compact", "json_records"]).nullish(),
  cost: z.number().optional(),
  data: z.string().nullish(),
  records: z.array(z.record(z.string(), takoDatasetCellSchema)).nullish(),
  dataset: z.object({
    columns: z.array(z.object({
      name: z.string(),
      type: z.enum(["boolean", "date", "datetime", "number", "string"]),
      unit: z.string().nullish()
    })),
    rows: z.array(z.array(takoDatasetCellSchema)),
    total_rows: z.number(),
    truncated: z.boolean(),
    ref: z.string(),
    sources: z.array(z.object({
      name: z.string(),
      index: z.enum(["data", "web"]).optional()
    })),
    provenance: z.enum(["query", "web_extraction"]).optional()
  }).nullish(),
  card_data: z.object({}).passthrough().nullish(),
  card_data_schema: z.object({}).passthrough().nullish(),
  url: z.string().nullish(),
  expires_at: z.string().nullish(),
  total_rows: z.number().nullish(),
  truncated: z.boolean().optional(),
  export_pricing: z.object({
    baseline_usd: z.number(),
    free_rows: z.number(),
    max_rows_ceiling: z.number(),
    row_cpm_usd: z.number()
  }).nullish(),
  manifest: z.array(z.object({
    dtype: z.enum(["boolean", "date", "datetime", "number", "string"]).nullish(),
    entity: z.string().nullish(),
    metric: z.string().nullish(),
    name: z.string().nullish(),
    unit: z.string().nullish()
  })).nullish()
}).passthrough();
var takoCardSchema = z.object({
  card_id: z.string().nullish(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  semantic_description: z.string().nullish(),
  webpage_url: z.string().nullish(),
  image_url: z.string().nullish(),
  embed_url: z.string().nullish(),
  sources: z.array(z.object({
    source_name: z.string().nullish(),
    source_description: z.string().nullish(),
    source_index: z.enum(["data", "web"]),
    source_text: z.string().nullish(),
    url: z.string().nullish()
  })).nullish(),
  methodologies: z.array(z.object({
    methodology_name: z.string().nullable(),
    methodology_description: z.string().nullable()
  })).nullish(),
  source_indexes: z.array(z.enum(["data", "web"])).nullish(),
  card_type: z.string().nullish(),
  relevance: z.enum(["High", "Low", "Medium"]).nullish(),
  content: takoResultContentSchema.nullish(),
  exportable: z.boolean().optional(),
  nodes: z.array(z.object({
    id: z.string(),
    type: z.enum(["entity", "metric"]),
    name: z.string(),
    description: z.string().nullish()
  })).nullish(),
  metric_definitions: z.array(z.object({ name: z.string(), definition: z.string() })).nullish(),
  data_freshness: z.object({
    coverage_end: z.string().nullish(),
    data_as_of: z.string().nullish(),
    last_updated: z.string().nullish()
  }).nullish()
}).passthrough();
var takoWebResultSchema = z.object({
  title: z.string(),
  url: z.string(),
  snippet: z.string().nullish(),
  source_name: z.string().nullish(),
  publish_date: z.string().nullish(),
  content: takoResultContentSchema.nullish()
}).passthrough();
var takoSearchOutputSchema = lazySchema(() => zodSchema(z.union([
  z.object({
    request_id: z.string(),
    cards: z.array(takoCardSchema).optional(),
    web_results: z.array(takoWebResultSchema).optional(),
    usage: z.object({
      total_cost_usd: z.number(),
      compute: z.object({ cost_usd: z.number() }).nullish(),
      data: z.object({ cost_usd: z.number(), datasets: z.number() }).nullish()
    }).nullish(),
    related: z.array(z.object({}).passthrough()).nullish()
  }).passthrough(),
  z.object({
    error: z.enum([
      "api_error",
      "configuration_error",
      "execution_error",
      "invalid_input",
      "rate_limit",
      "timeout",
      "unknown_tool"
    ]),
    statusCode: z.number().optional(),
    message: z.string()
  })
])));
var takoSearchToolFactory = createProviderExecutedToolFactory({
  id: "gateway.tako_search",
  inputSchema: takoSearchInputSchema,
  outputSchema: takoSearchOutputSchema
});
var takoSearch = (config2 = {}) => takoSearchToolFactory(config2);
var gatewayTools = {
  browserbaseFetch,
  browserbaseSearch,
  exaSearch,
  parallelSearch,
  perplexitySearch,
  takoSearch
};
async function getVercelRequestId() {
  return import_oidc.getContext().headers?.["x-vercel-id"];
}
var VERSION2 = "4.0.94";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
var gatewayClientSecretResponseSchema = z.object({
  token: z.string(),
  expiresAt: z.number().nullish()
});
function createGateway(options = {}) {
  let pendingMetadata = null;
  let metadataCache = null;
  const cacheRefreshMillis = options.metadataCacheRefreshMillis ?? 1000 * 60 * 5;
  let lastFetchTime = 0;
  const baseURL = withoutTrailingSlash(options.baseURL) ?? "https://ai-gateway.vercel.sh/v4/ai";
  const createAuthHeaders = (auth) => withUserAgentSuffix({
    Authorization: `Bearer ${auth.token}`,
    "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
    [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
    ...options.teamIdOrSlug != null ? { [VERCEL_AI_GATEWAY_TEAM_HEADER]: options.teamIdOrSlug } : {},
    ...options.headers
  }, `ai-sdk/gateway/${VERSION2}`);
  const getHeaders = async () => {
    try {
      return createAuthHeaders(await getGatewayAuthToken(options));
    } catch (error2) {
      throw GatewayAuthenticationError.createContextualError({
        apiKeyProvided: false,
        oidcTokenProvided: false,
        statusCode: 401,
        cause: error2
      });
    }
  };
  const getRealtimeAuthToken = async () => {
    try {
      return await getGatewayAuthToken(options);
    } catch (error2) {
      throw GatewayAuthenticationError.createContextualError({
        apiKeyProvided: false,
        oidcTokenProvided: false,
        statusCode: 401,
        cause: error2
      });
    }
  };
  const mintClientSecret = async (params) => {
    assertGatewayClientSecretServerEnvironment();
    const auth = await getRealtimeAuthToken();
    const headers = createAuthHeaders(auth);
    const url = new URL("/v1/realtime/client-secrets", baseURL).toString();
    try {
      const { value } = await postJsonToApi({
        url,
        headers,
        body: {
          model: params.modelId,
          ...params.routeKind != null && { routeKind: params.routeKind },
          ...params.expiresAfterSeconds != null && {
            expiresIn: params.expiresAfterSeconds
          }
        },
        successfulResponseHandler: createJsonResponseHandler(gatewayClientSecretResponseSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: z.any(),
          errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
        }),
        fetch: options.fetch
      });
      return {
        token: value.token,
        ...value.expiresAt != null && { expiresAt: value.expiresAt }
      };
    } catch (error2) {
      throw await asGatewayError(error2, await parseAuthMethod(headers));
    }
  };
  const createO11yHeaders = () => {
    const deploymentId = loadOptionalSetting({
      settingValue: undefined,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    });
    const environment = loadOptionalSetting({
      settingValue: undefined,
      environmentVariableName: "VERCEL_ENV"
    });
    const region = loadOptionalSetting({
      settingValue: undefined,
      environmentVariableName: "VERCEL_REGION"
    });
    const projectId = loadOptionalSetting({
      settingValue: undefined,
      environmentVariableName: "VERCEL_PROJECT_ID"
    });
    return async () => {
      const requestId = await getVercelRequestId();
      return {
        ...deploymentId && { "ai-o11y-deployment-id": deploymentId },
        ...environment && { "ai-o11y-environment": environment },
        ...region && { "ai-o11y-region": region },
        ...requestId && { "ai-o11y-request-id": requestId },
        ...projectId && { "ai-o11y-project-id": projectId }
      };
    };
  };
  const createLanguageModel = (modelId) => {
    return new GatewayLanguageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const createBatch = () => new GatewayBatch({
    provider: "gateway",
    baseURL,
    headers: getHeaders,
    fetch: options.fetch,
    o11yHeaders: createO11yHeaders()
  });
  const getAvailableModels = async () => {
    const now = options._internal?.currentDate?.().getTime() ?? Date.now();
    if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
      lastFetchTime = now;
      pendingMetadata = new GatewayFetchMetadata({
        baseURL,
        headers: getHeaders,
        fetch: options.fetch
      }).getAvailableModels().then((metadata) => {
        metadataCache = metadata;
        return metadata;
      }).catch(async (error2) => {
        throw await asGatewayError(error2, await parseAuthMethod(await getHeaders()));
      });
    }
    return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
  };
  const getCredits = async () => {
    return new GatewayFetchMetadata({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getCredits().catch(async (error2) => {
      throw await asGatewayError(error2, await parseAuthMethod(await getHeaders()));
    });
  };
  const getSpendReport = async (params) => {
    return new GatewaySpendReport({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getSpendReport(params).catch(async (error2) => {
      throw await asGatewayError(error2, await parseAuthMethod(await getHeaders()));
    });
  };
  const getGenerationInfo = async (params) => {
    return new GatewayGenerationInfoFetcher({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getGenerationInfo(params).catch(async (error2) => {
      throw await asGatewayError(error2, await parseAuthMethod(await getHeaders()));
    });
  };
  const provider = function(modelId) {
    if (new.target) {
      throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
    }
    return createLanguageModel(modelId);
  };
  provider.specificationVersion = "v4";
  provider.getAvailableModels = getAvailableModels;
  provider.getCredits = getCredits;
  provider.getSpendReport = getSpendReport;
  provider.getGenerationInfo = getGenerationInfo;
  provider.imageModel = (modelId) => {
    return new GatewayImageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.languageModel = createLanguageModel;
  provider.experimental_batch = createBatch;
  const createEmbeddingModel = (modelId) => {
    return new GatewayEmbeddingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.videoModel = (modelId) => {
    return new GatewayVideoModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const createRerankingModel = (modelId) => {
    return new GatewayRerankingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.rerankingModel = createRerankingModel;
  provider.reranking = createRerankingModel;
  const createEvaluationModel = (modelId) => {
    return new GatewayEvaluationModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.evaluationModel = createEvaluationModel;
  provider.evaluation = createEvaluationModel;
  const createSpeechModel = (modelId) => {
    return new GatewaySpeechModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.speechModel = createSpeechModel;
  provider.speech = createSpeechModel;
  const createTranscriptionModel = (modelId) => {
    return new GatewayTranscriptionModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders(),
      webSocket: options.webSocket
    });
  };
  provider.transcriptionModel = createTranscriptionModel;
  provider.transcription = createTranscriptionModel;
  provider.experimental_transcription = Object.assign((modelId) => createTranscriptionModel(modelId), {
    getToken: async (tokenOptions) => {
      const secret = await mintClientSecret({
        modelId: tokenOptions.model,
        routeKind: "transcription",
        ...tokenOptions.expiresAfterSeconds != null && {
          expiresAfterSeconds: tokenOptions.expiresAfterSeconds
        }
      });
      return {
        token: secret.token,
        url: toGatewayTranscriptionUrl(baseURL, tokenOptions.model),
        ...secret.expiresAt != null && { expiresAt: secret.expiresAt }
      };
    }
  });
  const createRealtimeModel = (modelId) => new GatewayRealtimeModel(modelId, {
    provider: "gateway.realtime",
    baseURL,
    teamIdOrSlug: options.teamIdOrSlug,
    createClientSecret: mintClientSecret
  });
  provider.experimental_realtime = Object.assign((modelId) => createRealtimeModel(modelId), {
    getToken: async (tokenOptions) => {
      const { model: modelId, ...secretOptions } = tokenOptions;
      const model = createRealtimeModel(modelId);
      const secret = await model.doCreateClientSecret(secretOptions);
      return {
        token: secret.token,
        url: secret.url,
        ...secret.expiresAt != null && { expiresAt: secret.expiresAt }
      };
    }
  });
  provider.chat = provider.languageModel;
  provider.embedding = provider.embeddingModel;
  provider.image = provider.imageModel;
  provider.video = provider.videoModel;
  provider.tools = gatewayTools;
  return provider;
}
var gateway = createGateway();
async function getGatewayAuthToken(options) {
  const apiKey = loadOptionalSetting({
    settingValue: options.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (apiKey) {
    return {
      token: apiKey,
      authMethod: "api-key"
    };
  }
  const oidcToken = await import_oidc2.getVercelOidcToken();
  return {
    token: oidcToken,
    authMethod: "oidc"
  };
}
function assertGatewayClientSecretServerEnvironment() {
  if (typeof globalThis.window !== "undefined") {
    throw new Error("AI Gateway client secrets must be minted server-side: minting needs your Gateway credential, which must never reach the browser. Call gateway.experimental_realtime.getToken() or gateway.experimental_transcription.getToken() from your server and pass the returned token to the client.");
  }
}

// ../../node_modules/.bun/ai@7.0.116+fff7ddf946fac095/node_modules/ai/dist/index.js
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name25 in all)
    __defProp2(target, name25, { get: all[name25], enumerable: true });
};
var name19 = "AI_InvalidArgumentError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol20 = Symbol.for(marker19);
var _a24;
var _b20;
var InvalidArgumentError2 = class extends (_b20 = AISDKError, _a24 = symbol20, _b20) {
  constructor({
    parameter,
    value,
    message
  }) {
    super({
      name: name19,
      message: `Invalid argument for parameter ${parameter}: ${message}`
    });
    this[_a24] = true;
    this.parameter = parameter;
    this.value = value;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker19);
  }
};
var name24 = "AI_InvalidStreamPartError";
var marker24 = `vercel.ai.error.${name24}`;
var symbol24 = Symbol.for(marker24);
var _a25;
var _b24;
var InvalidStreamPartError = class extends (_b24 = AISDKError, _a25 = symbol24, _b24) {
  constructor({
    chunk,
    message
  }) {
    super({ name: name24, message });
    this[_a25] = true;
    this.chunk = chunk;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker24);
  }
};
var name33 = "AI_InvalidToolApprovalError";
var marker34 = `vercel.ai.error.${name33}`;
var symbol33 = Symbol.for(marker34);
var _a33;
var _b33;
var InvalidToolApprovalError = class extends (_b33 = AISDKError, _a33 = symbol33, _b33) {
  constructor({ approvalId }) {
    super({
      name: name33,
      message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
    });
    this[_a33] = true;
    this.approvalId = approvalId;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker34);
  }
};
var name43 = "AI_InvalidToolApprovalSignatureError";
var marker43 = `vercel.ai.error.${name43}`;
var symbol43 = Symbol.for(marker43);
var _a43;
var _b43;
var InvalidToolApprovalSignatureError = class extends (_b43 = AISDKError, _a43 = symbol43, _b43) {
  constructor({
    approvalId,
    toolCallId,
    reason
  }) {
    super({
      name: name43,
      message: `Tool approval signature verification failed for approval "${approvalId}" (tool call "${toolCallId}"): ${reason}`
    });
    this[_a43] = true;
    this.approvalId = approvalId;
    this.toolCallId = toolCallId;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker43);
  }
};
var name53 = "AI_InvalidToolInputError";
var marker53 = `vercel.ai.error.${name53}`;
var symbol53 = Symbol.for(marker53);
var _a53;
var _b53;
var InvalidToolInputError = class extends (_b53 = AISDKError, _a53 = symbol53, _b53) {
  constructor({
    toolInput,
    toolName,
    cause,
    message = `Invalid input for tool ${toolName}: ${getErrorMessage(cause)}`
  }) {
    super({ name: name53, message, cause });
    this[_a53] = true;
    this.toolInput = toolInput;
    this.toolName = toolName;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker53);
  }
};
var name63 = "AI_ToolCallNotFoundForApprovalError";
var marker63 = `vercel.ai.error.${name63}`;
var symbol63 = Symbol.for(marker63);
var _a63;
var _b63;
var ToolCallNotFoundForApprovalError = class extends (_b63 = AISDKError, _a63 = symbol63, _b63) {
  constructor({
    toolCallId,
    approvalId
  }) {
    super({
      name: name63,
      message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
    });
    this[_a63] = true;
    this.toolCallId = toolCallId;
    this.approvalId = approvalId;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker63);
  }
};
var name73 = "AI_MissingToolResultsError";
var marker73 = `vercel.ai.error.${name73}`;
var symbol73 = Symbol.for(marker73);
var _a73;
var _b73;
var MissingToolResultsError = class extends (_b73 = AISDKError, _a73 = symbol73, _b73) {
  constructor({ toolCallIds }) {
    super({
      name: name73,
      message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(", ")}.`
    });
    this[_a73] = true;
    this.toolCallIds = toolCallIds;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker73);
  }
};
var name83 = "AI_NoImageGeneratedError";
var marker83 = `vercel.ai.error.${name83}`;
var symbol83 = Symbol.for(marker83);
var _a83;
var _b83;
var NoImageGeneratedError = class extends (_b83 = AISDKError, _a83 = symbol83, _b83) {
  constructor({
    message = "No image generated.",
    cause,
    calls,
    responses
  }) {
    super({ name: name83, message, cause });
    this[_a83] = true;
    this.calls = calls;
    this.responses = responses;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker83);
  }
};
var name93 = "AI_NoObjectGeneratedError";
var marker93 = `vercel.ai.error.${name93}`;
var symbol93 = Symbol.for(marker93);
var _a93;
var _b93;
var NoObjectGeneratedError = class extends (_b93 = AISDKError, _a93 = symbol93, _b93) {
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name93, message, cause });
    this[_a93] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker93);
  }
};
var name103 = "AI_NoOutputGeneratedError";
var marker103 = `vercel.ai.error.${name103}`;
var symbol103 = Symbol.for(marker103);
var _a103;
var _b103;
var NoOutputGeneratedError = class extends (_b103 = AISDKError, _a103 = symbol103, _b103) {
  constructor({
    message = "No output generated.",
    cause
  } = {}) {
    super({ name: name103, message, cause });
    this[_a103] = true;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker103);
  }
};
var name112 = "AI_NoSpeechGeneratedError";
var marker113 = `vercel.ai.error.${name112}`;
var symbol113 = Symbol.for(marker113);
var _a113;
var _b113;
var NoSpeechGeneratedError = class extends (_b113 = AISDKError, _a113 = symbol113, _b113) {
  constructor(options) {
    super({
      name: name112,
      message: "No speech audio generated."
    });
    this[_a113] = true;
    this.responses = options.responses;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker113);
  }
};
var name122 = "AI_NoTranscriptGeneratedError";
var marker122 = `vercel.ai.error.${name122}`;
var symbol122 = Symbol.for(marker122);
var _a122;
var _b122;
var NoTranscriptGeneratedError = class extends (_b122 = AISDKError, _a122 = symbol122, _b122) {
  constructor(options) {
    super({
      name: name122,
      message: "No transcript generated."
    });
    this[_a122] = true;
    this.responses = options.responses;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker122);
  }
};
var name132 = "AI_NoTranslationGeneratedError";
var marker132 = `vercel.ai.error.${name132}`;
var symbol132 = Symbol.for(marker132);
var _a132;
var _b132;
var NoTranslationGeneratedError = class extends (_b132 = AISDKError, _a132 = symbol132, _b132) {
  constructor(options) {
    super({
      name: name132,
      message: "No translation generated."
    });
    this[_a132] = true;
    this.response = options.response;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker132);
  }
};
var name142 = "AI_NoVideoGeneratedError";
var marker142 = `vercel.ai.error.${name142}`;
var symbol142 = Symbol.for(marker142);
var _a142;
var _b142;
var NoVideoGeneratedError = class extends (_b142 = AISDKError, _a142 = symbol142, _b142) {
  constructor({
    message = "No video generated.",
    cause,
    responses
  }) {
    super({ name: name142, message, cause });
    this[_a142] = true;
    this.responses = responses;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker142);
  }
  static isNoVideoGeneratedError(error2) {
    return error2 instanceof Error && error2.name === name142 && typeof error2.responses !== "undefined" ? true : false;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      cause: this.cause,
      responses: this.responses
    };
  }
};
var name152 = "AI_NoSuchToolError";
var marker152 = `vercel.ai.error.${name152}`;
var symbol152 = Symbol.for(marker152);
var _a152;
var _b152;
var NoSuchToolError = class extends (_b152 = AISDKError, _a152 = symbol152, _b152) {
  constructor({
    toolName,
    availableTools = undefined,
    message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === undefined ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}`
  }) {
    super({ name: name152, message });
    this[_a152] = true;
    this.toolName = toolName;
    this.availableTools = availableTools;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker152);
  }
};
var name162 = "AI_StreamProviderError";
var marker162 = `vercel.ai.error.${name162}`;
var symbol162 = Symbol.for(marker162);
var _a162;
var _b162;
var StreamProviderError = class extends (_b162 = AISDKError, _a162 = symbol162, _b162) {
  constructor({
    message,
    type,
    code,
    statusCode,
    isRetryable = isRetryableStatusCode(statusCode),
    data,
    cause
  }) {
    super({ name: name162, message, cause });
    this[_a162] = true;
    this.type = type;
    this.code = code;
    this.statusCode = statusCode;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker162);
  }
};
function isRetryableStatusCode(statusCode) {
  return statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500);
}
var name17 = "AI_ToolCallRepairError";
var marker172 = `vercel.ai.error.${name17}`;
var symbol172 = Symbol.for(marker172);
var _a172;
var _b172;
var ToolCallRepairError = class extends (_b172 = AISDKError, _a172 = symbol172, _b172) {
  constructor({
    cause,
    originalError,
    message = `Error repairing tool call: ${getErrorMessage(cause)}`
  }) {
    super({ name: name17, message, cause });
    this[_a172] = true;
    this.originalError = originalError;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker172);
  }
};
var name182 = "AI_ToolChoiceViolationError";
var marker18 = `vercel.ai.error.${name182}`;
var symbol18 = Symbol.for(marker18);
var _a18;
var _b18;
var ToolChoiceViolationError = class extends (_b18 = AISDKError, _a18 = symbol18, _b18) {
  constructor({
    toolChoice,
    finishReason,
    provider,
    modelId,
    content,
    message = toolChoice.type === "required" ? "Model response did not contain a tool call even though tool choice was required." : `Model response did not contain a call to the required tool '${toolChoice.toolName}'.`
  }) {
    super({ name: name182, message });
    this[_a18] = true;
    this.toolChoice = toolChoice;
    this.finishReason = finishReason;
    this.provider = provider;
    this.modelId = modelId;
    this.content = content;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker18);
  }
};
var UnsupportedModelVersionError = class extends AISDKError {
  constructor(options) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    });
    this.version = options.version;
    this.provider = options.provider;
    this.modelId = options.modelId;
  }
};
var name192 = "AI_UIMessageStreamError";
var marker192 = `vercel.ai.error.${name192}`;
var symbol192 = Symbol.for(marker192);
var _a192;
var _b192;
var UIMessageStreamError = class extends (_b192 = AISDKError, _a192 = symbol192, _b192) {
  constructor({
    chunkType,
    chunkId,
    message
  }) {
    super({ name: name192, message });
    this[_a192] = true;
    this.chunkType = chunkType;
    this.chunkId = chunkId;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker192);
  }
};
var name20 = "AI_InvalidDataContentError";
var marker20 = `vercel.ai.error.${name20}`;
var symbol202 = Symbol.for(marker20);
var _a202;
var _b202;
var InvalidDataContentError = class extends (_b202 = AISDKError, _a202 = symbol202, _b202) {
  constructor({
    content,
    cause,
    message = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof content}.`
  }) {
    super({ name: name20, message, cause });
    this[_a202] = true;
    this.content = content;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker20);
  }
};
var name21 = "AI_InvalidMessageRoleError";
var marker21 = `vercel.ai.error.${name21}`;
var symbol21 = Symbol.for(marker21);
var _a212;
var _b21;
var InvalidMessageRoleError = class extends (_b21 = AISDKError, _a212 = symbol21, _b21) {
  constructor({
    role,
    message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: name21, message });
    this[_a212] = true;
    this.role = role;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker21);
  }
};
var name222 = "AI_MessageConversionError";
var marker222 = `vercel.ai.error.${name222}`;
var symbol222 = Symbol.for(marker222);
var _a222;
var _b222;
var MessageConversionError = class extends (_b222 = AISDKError, _a222 = symbol222, _b222) {
  constructor({
    originalMessage,
    message
  }) {
    super({ name: name222, message });
    this[_a222] = true;
    this.originalMessage = originalMessage;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker222);
  }
};
var name232 = "AI_RetryError";
var marker232 = `vercel.ai.error.${name232}`;
var symbol232 = Symbol.for(marker232);
var _a232;
var _b232;
var RetryError = class extends (_b232 = AISDKError, _a232 = symbol232, _b232) {
  constructor({
    message,
    reason,
    errors: errors2
  }) {
    super({ name: name232, message });
    this[_a232] = true;
    this.reason = reason;
    this.errors = errors2;
    this.lastError = errors2[errors2.length - 1];
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker232);
  }
};
function formatWarning({
  warning,
  provider,
  model
}) {
  const scope = provider != null && model != null ? ` (${provider} / ${model})` : "";
  const prefix = `AI SDK Warning${scope}:`;
  switch (warning.type) {
    case "unsupported": {
      let message = `${prefix} The feature "${warning.feature}" is not supported.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "compatibility": {
      let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
      if (warning.details) {
        message += ` ${warning.details}`;
      }
      return message;
    }
    case "deprecated": {
      return `${prefix} Deprecated: "${warning.setting}". ${warning.message}`;
    }
    case "other": {
      return `${prefix} ${warning.message}`;
    }
    default: {
      return `${prefix} ${JSON.stringify(warning, null, 2)}`;
    }
  }
}
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
function emitWarning({
  message,
  type
}) {
  if (typeof process !== "undefined" && typeof process.emitWarning === "function") {
    process.emitWarning(message, { type });
  } else {
    console.warn(message);
  }
}
var logWarnings = (options) => {
  if (options.warnings.length === 0) {
    return;
  }
  const logger = globalThis.AI_SDK_LOG_WARNINGS;
  if (logger === false) {
    return;
  }
  if (typeof logger === "function") {
    logger(options);
    return;
  }
  if (!hasLoggedBefore) {
    hasLoggedBefore = true;
    emitWarning({
      message: FIRST_WARNING_INFO_MESSAGE,
      type: "Warning"
    });
  }
  for (const warning of options.warnings) {
    const message = formatWarning({
      warning,
      provider: options.provider,
      model: options.model
    });
    emitWarning({
      message,
      type: warning.type === "deprecated" ? "DeprecationWarning" : "Warning"
    });
  }
};
function resolveEvaluationModel(model) {
  if (typeof model === "string") {
    const provider = globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway;
    if (typeof provider?.evaluationModel !== "function") {
      throw new NoSuchModelError({
        modelId: model,
        modelType: "evaluationModel",
        message: "The default provider does not support evaluation models. Pass an evaluation model instance or configure AI_SDK_DEFAULT_PROVIDER with an evaluationModel method."
      });
    }
    const resolvedModel = provider.evaluationModel(model);
    if (resolvedModel == null) {
      throw new NoSuchModelError({
        modelId: model,
        modelType: "evaluationModel"
      });
    }
    model = resolvedModel;
  }
  if (model.specificationVersion !== "v4") {
    throw new UnsupportedModelVersionError({
      version: model.specificationVersion,
      provider: model.provider,
      modelId: model.modelId
    });
  }
  return model;
}
var VERSION3 = "7.0.116";
var download = async ({
  url,
  maxBytes,
  abortSignal
}) => {
  const urlText = url.toString();
  try {
    const headers = withUserAgentSuffix({}, `ai-sdk/${VERSION3}`, getRuntimeEnvironmentUserAgent());
    const response = await fetchUntrustedUrl({
      url: urlText,
      headers,
      abortSignal
    });
    if (!response.ok) {
      await cancelResponseBody(response);
      throw new DownloadError({
        url: urlText,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
    const data = await readResponseWithSizeLimit({
      response,
      url: urlText,
      maxBytes: maxBytes ?? DEFAULT_MAX_DOWNLOAD_SIZE
    });
    return {
      data,
      mediaType: response.headers.get("content-type") ?? undefined
    };
  } catch (error2) {
    if (DownloadError.isInstance(error2)) {
      throw error2;
    }
    throw new DownloadError({ url: urlText, cause: error2 });
  }
};
var z2 = {
  array,
  boolean: boolean2,
  custom,
  discriminatedUnion,
  enum: _enum,
  instanceof: _instanceof,
  lazy,
  literal,
  looseObject,
  never,
  null: _null3,
  number: number2,
  object,
  record,
  string: string2,
  union,
  unknown
};
var jsonValueSchema = z2.lazy(() => z2.union([
  z2.null(),
  z2.string(),
  z2.number(),
  z2.boolean(),
  z2.record(z2.string(), jsonValueSchema.optional()),
  z2.array(jsonValueSchema)
]));
var providerMetadataSchema = z2.record(z2.string(), z2.record(z2.string(), jsonValueSchema.optional()));
var fileInlineDataSchema = z2.union([
  z2.string(),
  z2.instanceof(Uint8Array),
  z2.instanceof(ArrayBuffer),
  z2.custom(isBuffer, { message: "Must be a Buffer" })
]);
var providerReferenceSchema = z2.record(z2.string(), z2.string());
var textPartSchema = z2.object({
  type: z2.literal("text"),
  text: z2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = z2.object({
  type: z2.literal("image"),
  image: z2.union([
    fileInlineDataSchema,
    z2.instanceof(URL),
    providerReferenceSchema
  ]),
  mediaType: z2.string().optional(),
  providerOptions: providerMetadataSchema.optional()
});
var taggedFileDataSchema = z2.discriminatedUnion("type", [
  z2.object({ type: z2.literal("data"), data: fileInlineDataSchema }),
  z2.object({ type: z2.literal("url"), url: z2.instanceof(URL) }),
  z2.object({
    type: z2.literal("reference"),
    reference: providerReferenceSchema
  }),
  z2.object({ type: z2.literal("text"), text: z2.string() })
]);
var taggedReasoningFileDataSchema = z2.discriminatedUnion("type", [
  z2.object({ type: z2.literal("data"), data: fileInlineDataSchema }),
  z2.object({ type: z2.literal("url"), url: z2.instanceof(URL) })
]);
var filePartSchema = z2.object({
  type: z2.literal("file"),
  data: z2.union([
    taggedFileDataSchema,
    fileInlineDataSchema,
    z2.instanceof(URL),
    providerReferenceSchema
  ]),
  filename: z2.string().optional(),
  mediaType: z2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = z2.object({
  type: z2.literal("reasoning"),
  text: z2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var customPartSchema = z2.object({
  type: z2.literal("custom"),
  kind: z2.string().transform((value) => value),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningFilePartSchema = z2.object({
  type: z2.literal("reasoning-file"),
  data: z2.union([
    taggedReasoningFileDataSchema,
    fileInlineDataSchema,
    z2.instanceof(URL)
  ]),
  mediaType: z2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = z2.object({
  type: z2.literal("tool-call"),
  toolCallId: z2.string(),
  toolName: z2.string(),
  input: z2.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  providerExecuted: z2.boolean().optional()
});
var outputSchema = z2.discriminatedUnion("type", [
  z2.object({
    type: z2.literal("text"),
    value: z2.string(),
    providerOptions: providerMetadataSchema.optional()
  }),
  z2.object({
    type: z2.literal("json"),
    value: jsonValueSchema,
    providerOptions: providerMetadataSchema.optional()
  }),
  z2.object({
    type: z2.literal("execution-denied"),
    reason: z2.string().optional(),
    providerOptions: providerMetadataSchema.optional()
  }),
  z2.object({
    type: z2.literal("error-text"),
    value: z2.string(),
    providerOptions: providerMetadataSchema.optional()
  }),
  z2.object({
    type: z2.literal("error-json"),
    value: jsonValueSchema,
    providerOptions: providerMetadataSchema.optional()
  }),
  z2.object({
    type: z2.literal("content"),
    value: z2.array(z2.union([
      z2.object({
        type: z2.literal("text"),
        text: z2.string(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file"),
        data: taggedFileDataSchema,
        mediaType: z2.string(),
        filename: z2.string().optional(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file-data"),
        data: z2.string(),
        mediaType: z2.string(),
        filename: z2.string().optional(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file-url"),
        url: z2.string(),
        mediaType: z2.string().optional(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file-id"),
        fileId: z2.union([z2.string(), z2.record(z2.string(), z2.string())]),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file-reference"),
        providerReference: z2.record(z2.string(), z2.string()),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("image-data"),
        data: z2.string(),
        mediaType: z2.string(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("image-url"),
        url: z2.string(),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("image-file-id"),
        fileId: z2.union([z2.string(), z2.record(z2.string(), z2.string())]),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("image-file-reference"),
        providerReference: z2.record(z2.string(), z2.string()),
        providerOptions: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("custom"),
        providerOptions: providerMetadataSchema.optional()
      })
    ]))
  })
]);
var toolResultPartSchema = z2.object({
  type: z2.literal("tool-result"),
  toolCallId: z2.string(),
  toolName: z2.string(),
  output: outputSchema,
  providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = z2.object({
  type: z2.literal("tool-approval-request"),
  approvalId: z2.string(),
  toolCallId: z2.string(),
  reason: z2.string().optional(),
  isAutomatic: z2.boolean().optional(),
  signature: z2.string().optional(),
  inputSchemaInput: z2.unknown().optional()
});
var toolApprovalResponseSchema = z2.object({
  type: z2.literal("tool-approval-response"),
  approvalId: z2.string(),
  approved: z2.boolean(),
  reason: z2.string().optional()
});
var systemModelMessageSchema = z2.object({
  role: z2.literal("system"),
  content: z2.string(),
  providerOptions: providerMetadataSchema.optional()
});
var userModelMessageSchema = z2.object({
  role: z2.literal("user"),
  content: z2.union([
    z2.string(),
    z2.array(z2.union([textPartSchema, imagePartSchema, filePartSchema]))
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = z2.object({
  role: z2.literal("assistant"),
  content: z2.union([
    z2.string(),
    z2.array(z2.union([
      textPartSchema,
      customPartSchema,
      filePartSchema,
      reasoningPartSchema,
      reasoningFilePartSchema,
      toolCallPartSchema,
      toolResultPartSchema,
      toolApprovalRequestSchema
    ]))
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = z2.object({
  role: z2.literal("tool"),
  content: z2.array(z2.union([toolResultPartSchema, toolApprovalResponseSchema])),
  providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = z2.union([
  systemModelMessageSchema,
  userModelMessageSchema,
  assistantModelMessageSchema,
  toolModelMessageSchema
]);
async function notify(options) {
  await Promise.all(asArray(options.callbacks).map(async (callback) => {
    try {
      await callback?.(options.event);
    } catch {}
  }));
}
function getRetryDelayInMs({
  error: error2,
  exponentialBackoffDelay
}) {
  const headers = APICallError.isInstance(error2) ? error2.responseHeaders : APICallError.isInstance(error2.cause) ? error2.cause.responseHeaders : undefined;
  if (!headers)
    return exponentialBackoffDelay;
  let ms;
  const retryAfterMs = headers["retry-after-ms"];
  if (retryAfterMs) {
    const timeoutMs = parseFloat(retryAfterMs);
    if (!Number.isNaN(timeoutMs)) {
      ms = timeoutMs;
    }
  }
  const retryAfter = headers["retry-after"];
  if (retryAfter && ms === undefined) {
    const timeoutSeconds = parseFloat(retryAfter);
    if (!Number.isNaN(timeoutSeconds)) {
      ms = timeoutSeconds * 1000;
    } else {
      ms = Date.parse(retryAfter) - Date.now();
    }
  }
  if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1000 || ms < exponentialBackoffDelay)) {
    return ms;
  }
  return exponentialBackoffDelay;
}
var retryWithExponentialBackoffRespectingRetryHeaders = ({
  maxRetries = 2,
  initialDelayInMs = 2000,
  backoffFactor = 2,
  abortSignal,
  additionalRetryableError
} = {}) => retryWithExponentialBackoff({
  maxRetries,
  initialDelayInMs,
  backoffFactor,
  abortSignal,
  shouldRetry: async (error2) => error2 instanceof Error && (APICallError.isInstance(error2) && error2.isRetryable === true || GatewayError.isInstance(error2) && error2.isRetryable === true) || additionalRetryableError != null && await additionalRetryableError(error2),
  getDelayInMs: ({ error: error2, exponentialBackoffDelay }) => getRetryDelayInMs({
    error: error2,
    exponentialBackoffDelay
  }),
  createRetryError: ({ message, reason, errors: errors2 }) => new RetryError({ message, reason, errors: errors2 })
});
function prepareRetries({
  maxRetries,
  abortSignal,
  additionalRetryableError,
  parameter = "maxRetries",
  defaultMaxRetries = 2
}) {
  if (maxRetries != null) {
    if (!Number.isInteger(maxRetries)) {
      throw new InvalidArgumentError2({
        parameter,
        value: maxRetries,
        message: `${parameter} must be an integer`
      });
    }
    if (maxRetries < 0) {
      throw new InvalidArgumentError2({
        parameter,
        value: maxRetries,
        message: `${parameter} must be >= 0`
      });
    }
  }
  const maxRetriesResult = maxRetries ?? defaultMaxRetries;
  return {
    maxRetries: maxRetriesResult,
    retry: retryWithExponentialBackoffRespectingRetryHeaders({
      maxRetries: maxRetriesResult,
      abortSignal,
      additionalRetryableError
    })
  };
}
var output_exports = {};
__export2(output_exports, {
  array: () => array2,
  choice: () => choice,
  json: () => json,
  object: () => object2,
  text: () => text
});
function fixJson(input) {
  const stack = ["ROOT"];
  let lastValidIndex = -1;
  let literalStart = null;
  let unicodeEscapeDigits = 0;
  function isHexDigit(char) {
    return char >= "0" && char <= "9" || char >= "A" && char <= "F" || char >= "a" && char <= "f";
  }
  function processValueStart(char, i, swapState) {
    {
      switch (char) {
        case '"': {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          lastValidIndex = i;
          literalStart = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
  }
  function processAfterObjectValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  function processAfterArrayValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  for (let i = 0;i < input.length; i++) {
    const char = input[i];
    const currentState = stack[stack.length - 1];
    switch (currentState) {
      case "ROOT":
        processValueStart(char, i, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (char) {
          case ":": {
            stack.pop();
            stack.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        processAfterObjectValue(char, i);
        break;
      }
      case "INSIDE_STRING": {
        switch (char) {
          case '"': {
            stack.pop();
            lastValidIndex = i;
            break;
          }
          case "\\": {
            stack.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default: {
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (char) {
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (char) {
          case ",": {
            stack.pop();
            stack.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        stack.pop();
        if (char === "u") {
          unicodeEscapeDigits = 0;
          stack.push("INSIDE_STRING_UNICODE_ESCAPE");
        } else {
          lastValidIndex = i;
        }
        break;
      }
      case "INSIDE_STRING_UNICODE_ESCAPE": {
        if (isHexDigit(char)) {
          unicodeEscapeDigits++;
          if (unicodeEscapeDigits === 4) {
            stack.pop();
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_NUMBER": {
        switch (char) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            lastValidIndex = i;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".": {
            break;
          }
          case ",": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "}": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "]": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            break;
          }
          default: {
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, i + 1);
        if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
          stack.pop();
          if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
            processAfterObjectValue(char, i);
          } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
            processAfterArrayValue(char, i);
          }
        } else {
          lastValidIndex = i;
        }
        break;
      }
    }
  }
  let result = input.slice(0, lastValidIndex + 1);
  for (let i = stack.length - 1;i >= 0; i--) {
    const state = stack[i];
    switch (state) {
      case "INSIDE_STRING": {
        result += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        result += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        result += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, input.length);
        if ("true".startsWith(partialLiteral)) {
          result += "true".slice(partialLiteral.length);
        } else if ("false".startsWith(partialLiteral)) {
          result += "false".slice(partialLiteral.length);
        } else if ("null".startsWith(partialLiteral)) {
          result += "null".slice(partialLiteral.length);
        }
      }
    }
  }
  return result;
}
async function parsePartialJson(jsonText) {
  if (jsonText === undefined) {
    return { value: undefined, state: "undefined-input" };
  }
  let result = await safeParseJSON({ text: jsonText });
  if (result.success) {
    return { value: result.value, state: "successful-parse" };
  }
  result = await safeParseJSON({ text: fixJson(jsonText) });
  if (result.success) {
    return { value: result.value, state: "repaired-parse" };
  }
  return { value: undefined, state: "failed-parse" };
}
var text = () => ({
  name: "text",
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: text2 }) {
    return text2;
  },
  async parsePartialOutput({ text: text2 }) {
    return { partial: text2 };
  },
  createElementStreamTransform() {
    return;
  }
});
var object2 = ({
  schema: inputSchema,
  name: name25,
  description
}) => {
  const schema = asSchema(inputSchema);
  return {
    name: "object",
    responseFormat: resolve(schema.jsonSchema).then((jsonSchema3) => ({
      type: "json",
      schema: jsonSchema3,
      ...name25 != null && { name: name25 },
      ...description != null && { description }
    })),
    async parseCompleteOutput({ text: text2 }, context) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const validationResult = await safeValidateTypes({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      return validationResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return;
        }
        case "repaired-parse":
        case "successful-parse": {
          return {
            partial: result.value
          };
        }
      }
    },
    createElementStreamTransform() {
      return;
    }
  };
};
var array2 = ({
  element: inputElementSchema,
  minItems,
  maxItems,
  name: name25,
  description
}) => {
  validateArrayBound({ name: "minItems", value: minItems });
  validateArrayBound({ name: "maxItems", value: maxItems });
  if (minItems != null && maxItems != null && minItems > maxItems) {
    throw new InvalidArgumentError2({
      parameter: "minItems",
      value: minItems,
      message: "minItems must be less than or equal to maxItems"
    });
  }
  const elementSchema = asSchema(inputElementSchema);
  return {
    name: "array",
    responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema3) => {
      const {
        $schema: _$schema,
        definitions,
        $defs,
        ...itemSchema
      } = jsonSchema3;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          ...definitions != null && { definitions },
          ...$defs != null && { $defs },
          type: "object",
          properties: {
            elements: {
              type: "array",
              items: itemSchema,
              ...minItems != null && { minItems },
              ...maxItems != null && { maxItems }
            }
          },
          required: ["elements"],
          additionalProperties: false
        },
        ...name25 != null && { name: name25 },
        ...description != null && { description }
      };
    }),
    async parseCompleteOutput({ text: text2 }, context) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object with an elements array"
          }),
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const lengthValidationError = getArrayLengthValidationError({
        value: outerValue.elements,
        minItems,
        maxItems
      });
      if (lengthValidationError != null) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: lengthValidationError,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const validatedElements = [];
      for (const element of outerValue.elements) {
        const validationResult = await safeValidateTypes({
          value: element,
          schema: elementSchema
        });
        if (!validationResult.success) {
          throw new NoObjectGeneratedError({
            message: "No object generated: response did not match schema.",
            cause: validationResult.error,
            text: text2,
            response: context.response,
            usage: context.usage,
            finishReason: context.finishReason
          });
        }
        validatedElements.push(validationResult.value);
      }
      return validatedElements;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
            return;
          }
          const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
          const parsedElements = [];
          for (const rawElement of rawElements) {
            const validationResult = await safeValidateTypes({
              value: rawElement,
              schema: elementSchema
            });
            if (validationResult.success) {
              parsedElements.push(validationResult.value);
            }
          }
          return { partial: parsedElements };
        }
      }
    },
    createElementStreamTransform() {
      let publishedElements = 0;
      return new TransformStream({
        transform({ partialOutput }, controller) {
          if (partialOutput != null) {
            for (;publishedElements < partialOutput.length; publishedElements++) {
              if (maxItems != null && publishedElements >= maxItems) {
                controller.error(getArrayLengthValidationError({
                  value: partialOutput,
                  maxItems
                }));
                return;
              }
              controller.enqueue(partialOutput[publishedElements]);
            }
          }
        }
      });
    }
  };
};
function validateArrayBound({
  name: name25,
  value
}) {
  if (value == null) {
    return;
  }
  if (!Number.isInteger(value)) {
    throw new InvalidArgumentError2({
      parameter: name25,
      value,
      message: `${name25} must be an integer`
    });
  }
  if (value < 0) {
    throw new InvalidArgumentError2({
      parameter: name25,
      value,
      message: `${name25} must be greater than or equal to 0`
    });
  }
}
function getArrayLengthValidationError({
  value,
  minItems,
  maxItems
}) {
  if (minItems != null && value.length < minItems) {
    return new TypeValidationError({
      value,
      cause: `elements array must contain at least ${minItems} items`
    });
  }
  if (maxItems != null && value.length > maxItems) {
    return new TypeValidationError({
      value,
      cause: `elements array must contain at most ${maxItems} items`
    });
  }
}
var choice = ({
  options: choiceOptions,
  name: name25,
  description
}) => {
  return {
    name: "choice",
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
          result: { type: "string", enum: choiceOptions }
        },
        required: ["result"],
        additionalProperties: false
      },
      ...name25 != null && { name: name25 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object that contains a choice value."
          }),
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      return outerValue.result;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") {
            return;
          }
          const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
          if (result.state === "successful-parse") {
            return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : undefined;
          } else {
            return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : undefined;
          }
        }
      }
    },
    createElementStreamTransform() {
      return;
    }
  };
};
var json = ({
  name: name25,
  description
} = {}) => {
  return {
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...name25 != null && { name: name25 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      return parseResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return;
        }
        case "repaired-parse":
        case "successful-parse": {
          return result.value === undefined ? undefined : { partial: result.value };
        }
      }
    },
    createElementStreamTransform() {
      return;
    }
  };
};
function filterIncludedContext({
  context,
  includeContext
}) {
  if (context == null) {
    return {};
  }
  return Object.fromEntries(Object.entries(context).filter(([key]) => includeContext?.[key] === true));
}
function filterToolsContext({
  toolsContext,
  includeToolsContext
}) {
  if (includeToolsContext == null) {
    return {};
  }
  return Object.fromEntries(Object.entries(toolsContext).map(([toolName, toolContext]) => [
    toolName,
    filterToolContext({
      toolName,
      toolContext,
      includeToolsContext
    })
  ]));
}
function filterToolContext({
  toolName,
  toolContext,
  includeToolsContext
}) {
  const includeToolContext = includeToolsContext?.[toolName];
  return filterIncludedContext({
    context: toolContext,
    includeContext: includeToolContext
  });
}
function mergeCallbacks(...callbacks) {
  return async (event) => {
    await Promise.allSettled(callbacks.map(async (callback) => {
      await callback?.(event);
    }));
  };
}
var AI_SDK_TELEMETRY_TRACING_CHANNEL = "ai:telemetry";
function isNodeRuntime2() {
  return typeof process !== "undefined" && process.release?.name === "node";
}
var diagnosticsChannelPromise;
async function loadDiagnosticsChannel() {
  if (!isNodeRuntime2()) {
    return;
  }
  if (diagnosticsChannelPromise == null) {
    diagnosticsChannelPromise = Promise.resolve(loadBuiltinModule2("node:diagnostics_channel"));
  }
  return diagnosticsChannelPromise;
}
function loadBuiltinModule2(id) {
  const processWithBuiltins = globalThis.process;
  try {
    return processWithBuiltins?.getBuiltinModule?.(id);
  } catch {
    return;
  }
}
async function runWithTracingChannelSpan(message, execute) {
  const diagnosticsChannel = await loadDiagnosticsChannel();
  const tracingChannel = diagnosticsChannel?.tracingChannel?.(AI_SDK_TELEMETRY_TRACING_CHANNEL);
  if (tracingChannel == null || tracingChannel.hasSubscribers === false) {
    return await execute();
  }
  let executePromise;
  let executionResult;
  let executionError;
  let hasExecutionResult = false;
  let hasExecutionError = false;
  const tracedExecute = () => {
    try {
      executePromise = Promise.resolve(execute());
    } catch (error2) {
      executePromise = Promise.reject(error2);
    }
    executePromise = executePromise.then((result) => {
      executionResult = result;
      hasExecutionResult = true;
      return result;
    }, (error2) => {
      executionError = error2;
      hasExecutionError = true;
      throw error2;
    });
    return executePromise;
  };
  try {
    return await tracingChannel.tracePromise(tracedExecute, message);
  } catch {
    if (hasExecutionError) {
      throw executionError;
    }
    if (hasExecutionResult) {
      return executionResult;
    }
    if (executePromise != null) {
      return await executePromise;
    }
    return await execute();
  }
}
function openTelemetryChannelSpanContext({
  message,
  completion
}) {
  if (!isNodeRuntime2()) {
    return;
  }
  const diagnosticsChannel = loadBuiltinModule2("node:diagnostics_channel");
  const asyncHooks = loadBuiltinModule2("node:async_hooks");
  const tracingChannel = diagnosticsChannel?.tracingChannel?.(AI_SDK_TELEMETRY_TRACING_CHANNEL);
  if (tracingChannel == null || tracingChannel.hasSubscribers === false || asyncHooks == null) {
    Promise.resolve(completion).catch(() => {});
    return;
  }
  const context = message;
  let asyncResource;
  let asyncEndPublished = false;
  const safePublish = (publish) => {
    try {
      publish();
    } catch {}
  };
  const publishAsyncEnd = ({
    result,
    error: error2
  }) => {
    if (asyncEndPublished) {
      return;
    }
    asyncEndPublished = true;
    if (error2 !== undefined) {
      context.error = error2;
      safePublish(() => tracingChannel.error.publish(context));
    }
    if (result !== undefined) {
      context.result = result;
    }
    safePublish(() => tracingChannel.asyncEnd.publish(context));
  };
  safePublish(() => {
    tracingChannel.start.runStores(context, () => {
      asyncResource = new asyncHooks.AsyncResource("ai.telemetry");
    });
  });
  safePublish(() => tracingChannel.end.publish(context));
  Promise.resolve(completion).then((result) => publishAsyncEnd({ result }), (error2) => publishAsyncEnd({ error: error2 }));
  return {
    run: (execute) => asyncResource == null ? execute() : asyncResource.runInAsyncScope(execute)
  };
}
function getGlobalTelemetryIntegrations() {
  return globalThis.AI_SDK_TELEMETRY_INTEGRATIONS ?? [];
}
function augmentEvent(event, telemetry, filterContext = false) {
  const augmentedEvent = Object.assign(Object.create(Object.getPrototypeOf(event)), event, {
    recordInputs: telemetry.recordInputs,
    recordOutputs: telemetry.recordOutputs,
    functionId: telemetry.functionId
  });
  if (filterContext && event != null && typeof event === "object" && "runtimeContext" in event) {
    augmentedEvent.runtimeContext = filterIncludedContext({
      context: event.runtimeContext,
      includeContext: telemetry.includeRuntimeContext
    });
  }
  if (filterContext && event != null && typeof event === "object") {
    if ("toolsContext" in event) {
      augmentedEvent.toolsContext = filterToolsContext({
        toolsContext: event.toolsContext,
        includeToolsContext: telemetry.includeToolsContext
      });
    } else if ("toolContext" in event && event.toolContext != null && "toolCall" in event && event.toolCall != null && typeof event.toolCall === "object" && "toolName" in event.toolCall) {
      augmentedEvent.toolContext = filterToolContext({
        toolName: event.toolCall.toolName,
        toolContext: event.toolContext,
        includeToolsContext: telemetry.includeToolsContext
      });
    }
  }
  return augmentedEvent;
}
function createTelemetryDispatcher({
  telemetry
}) {
  if (telemetry?.isEnabled === false) {
    return {};
  }
  const localIntegrations = telemetry?.integrations;
  const integrations = localIntegrations != null ? asArray(localIntegrations) : getGlobalTelemetryIntegrations();
  const telemetryMetadata = {
    recordInputs: telemetry?.recordInputs,
    recordOutputs: telemetry?.recordOutputs,
    functionId: telemetry?.functionId,
    includeRuntimeContext: telemetry?.includeRuntimeContext,
    includeToolsContext: telemetry?.includeToolsContext
  };
  const mergeTelemetryCallback = (key) => {
    const integrationCallbacks = integrations.map((integration) => integration[key]?.bind(integration)).filter(Boolean).map((callback) => (event) => callback(augmentEvent(event, telemetryMetadata)));
    const mergedIntegrationCallback = mergeCallbacks(...integrationCallbacks);
    return async (event) => {
      await mergedIntegrationCallback(event);
    };
  };
  const executeLanguageModelCallWrappers = integrations.map((integration) => integration.executeLanguageModelCall?.bind(integration)).filter(Boolean);
  const executeToolWrappers = integrations.map((integration) => integration.executeTool?.bind(integration)).filter(Boolean);
  return {
    runInTracingChannelSpan: async ({ type, event, execute }) => await runWithTracingChannelSpan({
      type,
      event: augmentEvent(event, telemetryMetadata, true)
    }, execute),
    startTracingChannelContext: ({ type, event, completion }) => openTelemetryChannelSpanContext({
      message: {
        type,
        event: augmentEvent(event, telemetryMetadata, true)
      },
      completion
    }),
    onStart: mergeTelemetryCallback("onStart"),
    onStepStart: mergeTelemetryCallback("onStepStart"),
    onLanguageModelCallStart: mergeTelemetryCallback("onLanguageModelCallStart"),
    onLanguageModelCallEnd: mergeTelemetryCallback("onLanguageModelCallEnd"),
    onToolExecutionStart: mergeTelemetryCallback("onToolExecutionStart"),
    onToolExecutionEnd: mergeTelemetryCallback("onToolExecutionEnd"),
    onStepEnd: mergeCallbacks(mergeTelemetryCallback("onStepEnd"), mergeTelemetryCallback("onStepFinish")),
    onObjectStepStart: mergeTelemetryCallback("onObjectStepStart"),
    onObjectStepEnd: mergeTelemetryCallback("onObjectStepEnd"),
    onEmbedStart: mergeTelemetryCallback("onEmbedStart"),
    onEmbedEnd: mergeTelemetryCallback("onEmbedEnd"),
    onRerankStart: mergeTelemetryCallback("onRerankStart"),
    onRerankEnd: mergeTelemetryCallback("onRerankEnd"),
    experimental_onEvaluateStart: mergeTelemetryCallback("experimental_onEvaluateStart"),
    experimental_onEvaluationModelCallStart: mergeTelemetryCallback("experimental_onEvaluationModelCallStart"),
    experimental_onEvaluationModelCallEnd: mergeTelemetryCallback("experimental_onEvaluationModelCallEnd"),
    experimental_onEvaluateEnd: mergeTelemetryCallback("experimental_onEvaluateEnd"),
    onEnd: mergeTelemetryCallback("onEnd"),
    onAbort: mergeTelemetryCallback("onAbort"),
    onError: mergeTelemetryCallback("onError"),
    executeLanguageModelCall: async ({ execute, ...event }) => {
      const augmentedEvent = augmentEvent(event, telemetryMetadata);
      let wrappedExecute = execute;
      for (const executeWrapper of executeLanguageModelCallWrappers) {
        const innerExecute = wrappedExecute;
        wrappedExecute = () => executeWrapper({ ...augmentedEvent, execute: innerExecute });
      }
      return await runWithTracingChannelSpan({ type: "languageModelCall", event: augmentedEvent }, wrappedExecute);
    },
    executeTool: async ({ execute, ...event }) => {
      const augmentedEvent = augmentEvent(event, telemetryMetadata);
      let wrappedExecute = execute;
      for (const executeWrapper of executeToolWrappers) {
        const innerExecute = wrappedExecute;
        wrappedExecute = () => executeWrapper({ ...augmentedEvent, execute: innerExecute });
      }
      return await wrappedExecute();
    }
  };
}
var encoder = new TextEncoder;
var encoder2 = new TextEncoder;
var originalGenerateId = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var originalGenerateCallId = createIdGenerator({
  prefix: "call",
  size: 24
});
var JsonToSseTransformStream = class extends TransformStream {
  constructor() {
    super({
      transform(part, controller) {
        controller.enqueue(`data: ${JSON.stringify(part)}

`);
      },
      flush(controller) {
        controller.enqueue(`data: [DONE]

`);
      }
    });
  }
};
var toolMetadataSchema = z2.record(z2.string(), jsonValueSchema.optional());
var uiMessageChunkSchema = lazySchema(() => zodSchema(z2.union([
  z2.looseObject({
    type: z2.literal("text-start"),
    id: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("text-delta"),
    id: z2.string(),
    delta: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("text-end"),
    id: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("error"),
    errorText: z2.string()
  }),
  z2.looseObject({
    type: z2.literal("tool-input-start"),
    toolCallId: z2.string(),
    toolName: z2.string(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    toolMetadata: toolMetadataSchema.optional(),
    dynamic: z2.boolean().optional(),
    title: z2.string().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-input-delta"),
    toolCallId: z2.string(),
    inputTextDelta: z2.string()
  }),
  z2.looseObject({
    type: z2.literal("tool-input-available"),
    toolCallId: z2.string(),
    toolName: z2.string(),
    input: z2.unknown(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    toolMetadata: toolMetadataSchema.optional(),
    dynamic: z2.boolean().optional(),
    title: z2.string().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-input-error"),
    toolCallId: z2.string(),
    toolName: z2.string(),
    input: z2.unknown(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    toolMetadata: toolMetadataSchema.optional(),
    dynamic: z2.boolean().optional(),
    errorText: z2.string(),
    title: z2.string().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-approval-request"),
    approvalId: z2.string(),
    toolCallId: z2.string(),
    approvalDescriptor: z2.unknown().optional(),
    inputSchemaInput: z2.unknown().optional(),
    reason: z2.string().optional(),
    isAutomatic: z2.boolean().optional(),
    signature: z2.string().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-approval-response"),
    approvalId: z2.string(),
    approved: z2.boolean(),
    reason: z2.string().optional(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-output-available"),
    toolCallId: z2.string(),
    output: z2.unknown(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    toolMetadata: toolMetadataSchema.optional(),
    dynamic: z2.boolean().optional(),
    preliminary: z2.boolean().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-output-error"),
    toolCallId: z2.string(),
    errorText: z2.string(),
    providerExecuted: z2.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    toolMetadata: toolMetadataSchema.optional(),
    dynamic: z2.boolean().optional()
  }),
  z2.looseObject({
    type: z2.literal("tool-output-denied"),
    toolCallId: z2.string()
  }),
  z2.looseObject({
    type: z2.literal("reasoning-start"),
    id: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("reasoning-delta"),
    id: z2.string(),
    delta: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("reasoning-end"),
    id: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("custom"),
    kind: z2.string().transform((value) => value),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("source-url"),
    sourceId: z2.string(),
    url: z2.string(),
    title: z2.string().optional(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("source-document"),
    sourceId: z2.string(),
    mediaType: z2.string(),
    title: z2.string(),
    filename: z2.string().optional(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("file"),
    url: z2.string(),
    mediaType: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.literal("reasoning-file"),
    url: z2.string(),
    mediaType: z2.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  z2.looseObject({
    type: z2.custom((value) => typeof value === "string" && value.startsWith("data-"), { message: 'Type must start with "data-"' }),
    id: z2.string().optional(),
    data: z2.unknown(),
    transient: z2.boolean().optional()
  }),
  z2.looseObject({
    type: z2.literal("start-step")
  }),
  z2.looseObject({
    type: z2.literal("finish-step")
  }),
  z2.looseObject({
    type: z2.literal("reset-step")
  }),
  z2.looseObject({
    type: z2.literal("start"),
    messageId: z2.string().optional(),
    messageMetadata: z2.unknown().optional()
  }),
  z2.looseObject({
    type: z2.literal("finish"),
    finishReason: z2.enum([
      "stop",
      "length",
      "content-filter",
      "tool-calls",
      "error",
      "other"
    ]).optional(),
    messageMetadata: z2.unknown().optional()
  }),
  z2.looseObject({
    type: z2.literal("abort"),
    reason: z2.string().optional()
  }),
  z2.looseObject({
    type: z2.literal("message-metadata"),
    messageMetadata: z2.unknown()
  })
])));
var originalGenerateId2 = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var originalGenerateCallId2 = createIdGenerator({
  prefix: "call",
  size: 24
});
var originalGenerateId3 = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var originalGenerateCallId3 = createIdGenerator({
  prefix: "call",
  size: 24
});
var toolMetadataSchema2 = z2.record(z2.string(), jsonValueSchema.optional());
var providerReferenceSchema2 = z2.record(z2.string(), z2.string());
var uiMessagesSchema = lazySchema(() => {
  const approvalRequestedSchema = z2.object({
    id: z2.string(),
    approved: z2.never().optional(),
    descriptor: z2.unknown().optional(),
    requestReason: z2.string().optional(),
    reason: z2.never().optional(),
    isAutomatic: z2.boolean().optional(),
    signature: z2.string().optional(),
    inputSchemaInput: z2.unknown().optional()
  });
  const approvalRespondedSchema = approvalRequestedSchema.extend({
    approved: z2.boolean(),
    reason: z2.string().optional()
  });
  const approvalGrantedSchema = approvalRespondedSchema.extend({
    approved: z2.literal(true)
  });
  const approvalDeniedSchema = approvalRespondedSchema.extend({
    approved: z2.literal(false)
  });
  return zodSchema(z2.array(z2.object({
    id: z2.string(),
    role: z2.enum(["system", "user", "assistant"]),
    metadata: z2.unknown().optional(),
    parts: z2.array(z2.union([
      z2.object({
        type: z2.literal("text"),
        text: z2.string(),
        state: z2.enum(["streaming", "done"]).optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("reasoning"),
        id: z2.string().optional(),
        text: z2.string(),
        state: z2.enum(["streaming", "done"]).optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("custom"),
        kind: z2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("source-url"),
        sourceId: z2.string(),
        url: z2.string(),
        title: z2.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("source-document"),
        sourceId: z2.string(),
        mediaType: z2.string(),
        title: z2.string(),
        filename: z2.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("file"),
        mediaType: z2.string(),
        filename: z2.string().optional(),
        url: z2.string(),
        providerReference: providerReferenceSchema2.optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("reasoning-file"),
        mediaType: z2.string(),
        url: z2.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      z2.object({
        type: z2.literal("step-start")
      }),
      z2.object({
        type: z2.string().startsWith("data-"),
        id: z2.string().optional(),
        data: z2.unknown()
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("input-streaming"),
        input: z2.unknown().optional(),
        providerExecuted: z2.boolean().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        approval: z2.never().optional()
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("input-available"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: z2.never().optional()
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("approval-requested"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalRequestedSchema
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("approval-responded"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalRespondedSchema
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-available"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.unknown(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        resultProviderMetadata: providerMetadataSchema.optional(),
        preliminary: z2.boolean().optional(),
        approval: approvalGrantedSchema.optional()
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-error"),
        input: z2.unknown().optional(),
        rawInput: z2.unknown().optional(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.string(),
        callProviderMetadata: providerMetadataSchema.optional(),
        resultProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalGrantedSchema.optional()
      }),
      z2.object({
        type: z2.literal("dynamic-tool"),
        toolName: z2.string(),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-denied"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalDeniedSchema
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("input-streaming"),
        providerExecuted: z2.boolean().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        input: z2.unknown().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        approval: z2.never().optional()
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("input-available"),
        providerExecuted: z2.boolean().optional(),
        input: z2.unknown(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: z2.never().optional()
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("approval-requested"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalRequestedSchema
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("approval-responded"),
        input: z2.unknown(),
        providerExecuted: z2.boolean().optional(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalRespondedSchema
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-available"),
        providerExecuted: z2.boolean().optional(),
        input: z2.unknown(),
        output: z2.unknown(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        resultProviderMetadata: providerMetadataSchema.optional(),
        preliminary: z2.boolean().optional(),
        approval: approvalGrantedSchema.optional()
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-error"),
        providerExecuted: z2.boolean().optional(),
        input: z2.unknown().optional(),
        rawInput: z2.unknown().optional(),
        output: z2.never().optional(),
        errorText: z2.string(),
        callProviderMetadata: providerMetadataSchema.optional(),
        resultProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalGrantedSchema.optional()
      }),
      z2.object({
        type: z2.string().startsWith("tool-"),
        toolCallId: z2.string(),
        title: z2.string().optional(),
        toolMetadata: toolMetadataSchema2.optional(),
        state: z2.literal("output-denied"),
        providerExecuted: z2.boolean().optional(),
        input: z2.unknown(),
        output: z2.never().optional(),
        errorText: z2.never().optional(),
        callProviderMetadata: providerMetadataSchema.optional(),
        approval: approvalDeniedSchema
      })
    ]))
  }).superRefine((message, context) => {
    if (message.role !== "assistant" && message.parts.length === 0) {
      context.addIssue({
        origin: "array",
        code: "too_small",
        minimum: 1,
        inclusive: true,
        input: message.parts,
        path: ["parts"],
        message: "Message must contain at least one part"
      });
    }
  })).nonempty("Messages array must not be empty"));
});
var originalGenerateCallId4 = createIdGenerator({
  prefix: "call",
  size: 24
});
var originalGenerateCallId5 = createIdGenerator({
  prefix: "call",
  size: 24
});
var textEncoder = new TextEncoder;
function createRestrictedTelemetryDispatcher3({
  telemetry
}) {
  const dispatcher = createTelemetryDispatcher({ telemetry });
  return {
    ...dispatcher,
    onStart: (event) => dispatcher.experimental_onEvaluateStart?.({
      ...event,
      runtimeContext: filterIncludedContext({
        context: event.runtimeContext,
        includeContext: telemetry?.includeRuntimeContext
      })
    }),
    onEnd: (event) => dispatcher.experimental_onEvaluateEnd?.({
      ...event,
      runtimeContext: filterIncludedContext({
        context: event.runtimeContext,
        includeContext: telemetry?.includeRuntimeContext
      })
    })
  };
}
var tolerance = 0.000001;
function isRecord2(value) {
  if (value == null || typeof value !== "object" || Array.isArray(value))
    return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
function isJSON(value, ancestors = /* @__PURE__ */ new Set) {
  if (value === null || typeof value === "string" || typeof value === "boolean")
    return true;
  if (typeof value === "number")
    return Number.isFinite(value);
  if (typeof value !== "object" || !Array.isArray(value) && !isRecord2(value))
    return false;
  if (ancestors.has(value))
    return false;
  ancestors.add(value);
  const valid = Object.getOwnPropertySymbols(value).length === 0 && (Array.isArray(value) ? Array.from(value).every((item) => isJSON(item, ancestors)) : Object.values(value).every((item) => isJSON(item, ancestors)));
  ancestors.delete(value);
  return valid;
}
function isInput(value) {
  return (typeof value === "string" || Array.isArray(value) || isRecord2(value)) && isJSON(value);
}
function invalidInput(parameter, value, message) {
  throw new InvalidArgumentError2({ parameter, value, message });
}
function validateEvaluationInput({
  state,
  questions
}) {
  if (!isInput(state)) {
    invalidInput("state", state, "must be a JSON-compatible string, object, or array");
  }
  if (!isRecord2(questions) || Object.keys(questions).length === 0) {
    invalidInput("questions", questions, "must be a nonempty question map");
  }
  for (const [id, question] of Object.entries(questions)) {
    const parameter = `questions.${id}`;
    if (!isRecord2(question) || !isInput(question.instructions)) {
      invalidInput(parameter, question, "instructions must be a JSON-compatible string, object, or array");
    }
    const criteria = question.criteria;
    switch (question.type) {
      case "choice":
        if (!isRecord2(criteria) || Object.keys(criteria).length === 0) {
          invalidInput(parameter, question, "choice criteria must be a nonempty option map");
        }
        break;
      case "score":
        if (!Array.isArray(criteria) || criteria.length < 2) {
          invalidInput(parameter, question, "score criteria must contain at least two ordered levels");
        }
        break;
      case "boolean":
        if (criteria === undefined)
          continue;
        if (!isRecord2(criteria) || Object.keys(criteria).some((key) => key !== "true" && key !== "false")) {
          invalidInput(parameter, question, "boolean criteria may only describe true and false");
        }
        break;
      default:
        invalidInput(parameter, question, "question type must be choice, score, or boolean");
    }
    if (!isJSON(criteria) || Object.values(criteria).some((value) => value !== null && !isInput(value))) {
      invalidInput(parameter, question, "criteria descriptions must be JSON-compatible strings, objects, arrays, or null");
    }
  }
}
function invalidAnswer(answers, message) {
  throw new InvalidResponseDataError({ data: answers, message });
}
function isProbability(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
}
function hasExactKeys(value, keys) {
  return Object.keys(value).length === keys.length && keys.every((key) => Object.hasOwn(value, key));
}
function validateDistribution(value, keys, answers, id, roundingError) {
  if (!isRecord2(value) || !hasExactKeys(value, keys) || !Object.values(value).every(isProbability)) {
    invalidAnswer(answers, `Question "${id}" must have a complete distribution of finite probabilities in [0, 1].`);
  }
  const sum = Object.values(value).reduce((total, probability) => total + probability, 0);
  if (Math.abs(sum - 1) > tolerance + keys.length * roundingError) {
    invalidAnswer(answers, `Question "${id}" probabilities must sum to 1 within the declared rounding precision.`);
  }
}
function validateEvaluationAnswers({
  questions,
  answers,
  rounding
}) {
  function roundingError(decimals) {
    if (decimals === undefined)
      return 0;
    if (!Number.isInteger(decimals) || decimals < 0 || decimals > 15) {
      invalidAnswer(answers, "Evaluation rounding decimals must be integers between 0 and 15.");
    }
    return 0.5 * 10 ** -decimals;
  }
  const probabilityError = roundingError(rounding?.probabilityDecimals);
  const scoreError = roundingError(rounding?.scoreDecimals);
  if (!isRecord2(answers) || !hasExactKeys(answers, Object.keys(questions))) {
    invalidAnswer(answers, "Evaluation must return exactly one answer for every question.");
  }
  for (const [id, question] of Object.entries(questions)) {
    const answer = answers[id];
    if (!isRecord2(answer) || answer.type !== question.type) {
      invalidAnswer(answers, `Question "${id}" returned an answer with the wrong type.`);
    }
    switch (question.type) {
      case "choice": {
        if (typeof answer.choice !== "string" || !Object.hasOwn(question.criteria, answer.choice)) {
          invalidAnswer(answers, `Question "${id}" selected an unknown option.`);
        }
        if (answer.probabilities !== undefined) {
          validateDistribution(answer.probabilities, Object.keys(question.criteria), answers, id, probabilityError);
          const selected = answer.probabilities[answer.choice];
          if (Object.values(answer.probabilities).some((probability) => probability > selected + tolerance)) {
            invalidAnswer(answers, `Question "${id}" did not select a highest-probability option.`);
          }
        }
        break;
      }
      case "score": {
        if (typeof answer.score !== "number" || !Number.isFinite(answer.score) || answer.score < 0 || answer.score > question.criteria.length - 1) {
          invalidAnswer(answers, `Question "${id}" score must be in [0, ${question.criteria.length - 1}].`);
        }
        if (answer.probabilities !== undefined) {
          const keys = question.criteria.map((_, index) => String(index));
          validateDistribution(answer.probabilities, keys, answers, id, probabilityError);
          const mean = Object.entries(answer.probabilities).reduce((total, [index, probability]) => total + Number(index) * probability, 0);
          const meanRoundingError = keys.reduce((total, index) => total + Number(index) * probabilityError, 0);
          if (Math.abs(mean - answer.score) > tolerance + meanRoundingError + scoreError) {
            invalidAnswer(answers, `Question "${id}" score must equal the probability-weighted mean within the declared rounding precision.`);
          }
        }
        break;
      }
      case "boolean":
        if (!isProbability(answer.probability)) {
          invalidAnswer(answers, `Question "${id}" must return P(true) as a finite probability in [0, 1].`);
        }
        break;
    }
  }
}
var originalGenerateCallId6 = createIdGenerator({
  prefix: "call",
  size: 24
});
async function evaluate({
  model: modelArg,
  state,
  questions,
  maxRetries,
  abortSignal,
  headers,
  providerOptions = {},
  telemetry,
  runtimeContext = {},
  onStart,
  onEnd,
  _internal: { generateCallId = originalGenerateCallId6 } = {}
}) {
  const model = resolveEvaluationModel(modelArg);
  validateEvaluationInput({ state, questions });
  for (const [questionId, question] of Object.entries(questions)) {
    if (!model.supportedQuestionTypes.includes(question.type)) {
      throw new EvaluationUnsupportedQuestionTypeError({
        questionId,
        questionType: question.type,
        provider: model.provider,
        modelId: model.modelId
      });
    }
  }
  const callId = generateCallId();
  const { maxRetries: resolvedMaxRetries, retry } = prepareRetries({
    maxRetries,
    abortSignal
  });
  const telemetryDispatcher = createRestrictedTelemetryDispatcher3({
    telemetry
  });
  const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
  const startEvent = {
    callId,
    operationId: "ai.evaluate",
    runtimeContext,
    provider: model.provider,
    modelId: model.modelId,
    state,
    questions,
    maxRetries: resolvedMaxRetries,
    headers,
    providerOptions
  };
  return await runInTracingChannelSpan({
    type: "experimental_evaluate",
    event: startEvent,
    execute: async () => {
      await notify({
        event: startEvent,
        callbacks: [onStart, telemetryDispatcher.onStart]
      });
      try {
        const modelCallEvent = {
          callId,
          operationId: "ai.evaluate.doEvaluate",
          provider: model.provider,
          modelId: model.modelId,
          state,
          questions
        };
        await notify({
          event: modelCallEvent,
          callbacks: [
            telemetryDispatcher.experimental_onEvaluationModelCallStart
          ]
        });
        const result = await retry(async () => {
          abortSignal?.throwIfAborted();
          return await model.doEvaluate({
            state,
            questions,
            abortSignal,
            headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION3}`),
            providerOptions
          });
        });
        abortSignal?.throwIfAborted();
        validateEvaluationAnswers({
          questions,
          answers: result.answers,
          rounding: result.rounding
        });
        await notify({
          event: { ...modelCallEvent, ...result },
          callbacks: [
            telemetryDispatcher.experimental_onEvaluationModelCallEnd
          ]
        });
        logWarnings({
          warnings: result.warnings,
          provider: model.provider,
          model: model.modelId
        });
        const inputTokens = result.usage?.inputTokens;
        const outputTokens = result.usage?.outputTokens;
        const evaluationResult = {
          answers: result.answers,
          usage: {
            inputTokens,
            outputTokens,
            totalTokens: inputTokens != null && outputTokens != null ? inputTokens + outputTokens : undefined
          },
          warnings: result.warnings,
          rounding: result.rounding,
          providerMetadata: result.providerMetadata,
          response: {
            ...result.response,
            timestamp: result.response?.timestamp ?? /* @__PURE__ */ new Date,
            modelId: result.response?.modelId ?? model.modelId
          }
        };
        await notify({
          event: { ...startEvent, ...evaluationResult },
          callbacks: [onEnd, telemetryDispatcher.onEnd]
        });
        return evaluationResult;
      } catch (error2) {
        await telemetryDispatcher.onError?.({ callId, error: error2 });
        throw error2;
      }
    }
  });
}
var originalGenerateId4 = createIdGenerator({ prefix: "aiobj", size: 24 });
function createDownload(options) {
  return ({ url, abortSignal }) => download({ url, maxBytes: options?.maxBytes, abortSignal });
}
var originalGenerateId5 = createIdGenerator({ prefix: "aiobj", size: 24 });
var defaultDownload = createDownload();
var REALTIME_MAX_FRAME_BYTES = 128 * 1024;
var REALTIME_MAX_BUFFERED_BYTES = 128 * 1024;
var MAX_SESSION_ANSWER_BYTES = 1024 * 1024;
var setupSchema = z2.object({
  token: z2.string().refine((value) => value.trim().length > 0),
  url: z2.string().refine((value) => {
    try {
      const url = new URL(value);
      return (url.protocol === "ws:" || url.protocol === "wss:") && url.hostname !== "";
    } catch {
      return false;
    }
  }),
  expiresAt: z2.number().positive().max(Number.MAX_SAFE_INTEGER).optional(),
  tools: z2.array(z2.object({
    type: z2.literal("function"),
    name: z2.string().min(1),
    description: z2.string().optional(),
    parameters: z2.record(z2.string(), z2.unknown())
  })).optional()
});
var name242 = "AI_NoSuchProviderError";
var marker242 = `vercel.ai.error.${name242}`;
var symbol242 = Symbol.for(marker242);
var _a242;
var _b242;
var NoSuchProviderError = class extends (_b242 = NoSuchModelError, _a242 = symbol242, _b242) {
  constructor({
    modelId,
    modelType,
    providerId,
    availableProviders,
    message = `No such provider: ${providerId} (available providers: ${availableProviders.join()})`
  }) {
    super({ errorName: name242, modelId, modelType, message });
    this[_a242] = true;
    this.providerId = providerId;
    this.availableProviders = availableProviders;
  }
  static isInstance(error2) {
    return AISDKError.hasMarker(error2, marker242);
  }
};
var originalGenerateCallId7 = createIdGenerator({
  prefix: "call",
  size: 24
});
var defaultDownload2 = createDownload();

// ../../node_modules/.bun/@ai-sdk+typesafe-ai@3.0.8+fff7ddf946fac095/node_modules/@ai-sdk/typesafe-ai/dist/index.js
var typesafeEvaluationResponseSchema = object({
  model: string2().nullish(),
  answers: record(string2(), discriminatedUnion("type", [
    object({
      type: literal("choice"),
      choice: string2(),
      probabilities: record(string2(), number2()),
      confidence: number2().nullish()
    }),
    object({
      type: literal("score"),
      score: number2(),
      probabilities: record(string2(), number2()),
      confidence: number2().nullish()
    }),
    object({ type: literal("noul"), noul: number2() })
  ])),
  usage: object({
    input_tokens: number2().nullish(),
    output_tokens: number2().nullish()
  }).nullish()
});
var typesafeFailedResponseHandler = createJsonErrorResponseHandler({
  errorSchema: object({
    message: string2().nullish(),
    detail: unknown().nullish(),
    error: union([string2(), object({ message: string2().nullish() })]).nullish(),
    error_type: string2().nullish()
  }),
  errorToMessage: (error2) => error2.message ?? (typeof error2.error === "string" ? error2.error : error2.error?.message) ?? (typeof error2.detail === "string" ? error2.detail : JSON.stringify(error2.detail)) ?? error2.error_type ?? "TypeSafe request failed"
});
var VERSION4 = "3.0.8";
var EvaluationTypeSafeAiModel = class _EvaluationTypeSafeAiModel {
  constructor(modelId, config2) {
    this.modelId = modelId;
    this.config = config2;
    this.specificationVersion = "v4";
    this.supportedQuestionTypes = ["choice", "score", "boolean"];
  }
  get provider() {
    return this.config.provider;
  }
  static [WORKFLOW_SERIALIZE](model) {
    return serializeModelOptions({
      modelId: model.modelId,
      config: model.config
    });
  }
  static [WORKFLOW_DESERIALIZE](options) {
    return new _EvaluationTypeSafeAiModel(options.modelId, options.config);
  }
  async doEvaluate({
    state,
    questions,
    headers,
    abortSignal,
    providerOptions
  }) {
    for (const [id, question] of Object.entries(questions)) {
      if (question.type === "choice" && Object.keys(question.criteria).length > 255) {
        throw new InvalidArgumentError({
          argument: `questions.${id}.criteria`,
          message: "TypeSafe Choice questions support at most 255 options."
        });
      }
      if (question.type === "score" && question.criteria.length > 10) {
        throw new InvalidArgumentError({
          argument: `questions.${id}.criteria`,
          message: "TypeSafe Score questions support at most 10 levels."
        });
      }
    }
    const warnings = Object.keys(providerOptions?.typesafe ?? {}).map((option) => ({
      type: "unsupported",
      feature: `providerOptions.typesafe.${option}`
    }));
    const modelHeaders = this.config.headers === undefined ? withUserAgentSuffix({
      Authorization: `Bearer ${loadApiKey({ apiKey: undefined, environmentVariableName: "TYPESAFE_AI_API_KEY", description: "TypeSafe" })}`
    }, `ai-sdk/typesafe-ai/${VERSION4}`) : await resolve(this.config.headers);
    const {
      value: response,
      rawValue,
      responseHeaders
    } = await postJsonToApi({
      url: `${this.config.baseURL}/systemone`,
      headers: combineHeaders(modelHeaders, headers),
      body: {
        model: this.modelId,
        state,
        questions: Object.fromEntries(Object.entries(questions).map(([id, question]) => [
          id,
          question.type === "boolean" ? { ...question, type: "noul" } : question
        ]))
      },
      abortSignal,
      fetch: this.config.fetch,
      failedResponseHandler: typesafeFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(typesafeEvaluationResponseSchema)
    });
    const confidence = Object.fromEntries(Object.entries(response.answers).flatMap(([id, answer]) => answer.type !== "noul" && answer.confidence != null ? [[id, answer.confidence]] : []));
    return {
      answers: Object.fromEntries(Object.entries(response.answers).map(([id, answer]) => {
        switch (answer.type) {
          case "noul":
            return [id, { type: "boolean", probability: answer.noul }];
          case "choice":
            return [
              id,
              {
                type: "choice",
                choice: answer.choice,
                probabilities: answer.probabilities
              }
            ];
          case "score":
            return [
              id,
              {
                type: "score",
                score: answer.score,
                probabilities: answer.probabilities
              }
            ];
        }
      })),
      usage: {
        inputTokens: response.usage?.input_tokens ?? undefined,
        outputTokens: response.usage?.output_tokens ?? undefined
      },
      rounding: { probabilityDecimals: 2, scoreDecimals: 2 },
      warnings,
      providerMetadata: { typesafe: { confidence } },
      response: {
        modelId: response.model ?? this.modelId,
        headers: responseHeaders,
        body: rawValue
      }
    };
  }
};
function createTypeSafeAi(options = {}) {
  const baseURL = withoutTrailingSlash(options.baseURL) ?? "https://api.typesafe.ai/v1";
  const headers = () => withUserAgentSuffix({
    Authorization: `Bearer ${loadApiKey({ apiKey: options.apiKey, environmentVariableName: "TYPESAFE_AI_API_KEY", description: "TypeSafe" })}`,
    ...options.headers
  }, `ai-sdk/typesafe-ai/${VERSION4}`);
  return {
    specificationVersion: "v4",
    evaluationModel: (modelId) => new EvaluationTypeSafeAiModel(modelId, {
      provider: "typesafe.evaluation",
      baseURL,
      headers,
      fetch: options.fetch
    }),
    languageModel: (modelId) => {
      throw new NoSuchModelError({ modelId, modelType: "languageModel" });
    },
    embeddingModel: (modelId) => {
      throw new NoSuchModelError({ modelId, modelType: "embeddingModel" });
    },
    imageModel: (modelId) => {
      throw new NoSuchModelError({ modelId, modelType: "imageModel" });
    }
  };
}
var typeSafeAi = createTypeSafeAi();

// ../../packages/core/src/jev.ts
var LEVELS = ["low", "medium", "high", "xhigh", "max"];
function resolveModel(env = process.env) {
  const wanted = env.JEV_PROVIDER;
  const has = {
    gateway: Boolean(env.AI_GATEWAY_API_KEY || env.VERCEL_OIDC_TOKEN),
    openrouter: Boolean(env.OPENROUTER_API_KEY),
    typesafe: Boolean(env.TYPESAFE_AI_API_KEY || env.TYPESAFE_API_KEY)
  };
  const provider = wanted ?? ["gateway", "openrouter", "typesafe"].find((p) => has[p]);
  if (!provider || !has[provider])
    return;
  switch (provider) {
    case "gateway":
      return { provider, model: gateway.evaluationModel(env.JEV_MODEL ?? "typesafe-ai/jev") };
    case "openrouter":
      return {
        provider,
        model: createTypeSafeAi({
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: env.OPENROUTER_API_KEY,
          headers: { "X-Title": "jev-effort" }
        }).evaluationModel(env.JEV_MODEL ?? "typesafe/jev-1.13")
      };
    case "typesafe":
      return {
        provider,
        model: createTypeSafeAi({ apiKey: env.TYPESAFE_AI_API_KEY ?? env.TYPESAFE_API_KEY }).evaluationModel(env.JEV_MODEL ?? "jev-latest")
      };
  }
}
var QUESTIONS = {
  effort: {
    type: "score",
    instructions: "How much independent verification, edge-case testing and autonomous judgement does the coding agent need to spend on `prompt`, given the thread so far in `recentPrompts`?",
    criteria: [
      "low: quick in-the-loop reply \u2014 brainstorming, questions, sketching, an easy or mechanical change, a follow-up tweak",
      "medium: regular software engineering \u2014 implementing a new feature or a well-specified change",
      "high: verification matters or there are hidden edge cases \u2014 debugging a brownfield codebase, code review, writing tests, performance work",
      "xhigh: hard, edge-case-heavy work \u2014 concurrency, parsers, sanitizers, data migrations, hardware or ML correctness",
      "max: fully autonomous end-to-end build and verification with no user input, or hunting security vulnerabilities in critical software"
    ]
  },
  wants_loop: {
    type: "boolean",
    instructions: "The user wants a fast answer or a rough first pass so they can stay in the loop and iterate, rather than a finished, thoroughly verified result."
  },
  autonomous: {
    type: "boolean",
    instructions: "The user explicitly asks the agent to work on its own for a long time without checking in, or to be exhaustive / as thorough as possible."
  }
};
async function classify(state, opts = {}) {
  const resolved = resolveModel(opts.env);
  if (!resolved)
    return;
  const result = await evaluate({
    model: resolved.model,
    state: JSON.parse(JSON.stringify(state)),
    questions: QUESTIONS,
    maxRetries: 0,
    abortSignal: AbortSignal.timeout(opts.timeoutMs ?? 6000)
  });
  const { effort, wants_loop, autonomous } = result.answers;
  let score = effort.score;
  if (wants_loop.probability >= 0.8)
    score -= 0.75;
  if (autonomous.probability >= 0.9)
    score += 0.75;
  const index = Math.max(0, Math.min(LEVELS.length - 1, Math.round(score)));
  const confidence = result.providerMetadata?.typesafe?.confidence?.effort;
  return {
    level: LEVELS[index],
    score: effort.score,
    confidence,
    wantsLoop: wants_loop.probability,
    autonomous: autonomous.probability,
    provider: resolved.provider
  };
}
// ../../packages/core/src/advise.ts
import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
var DIRECTIVES = {
  low: "Treat this as a quick, in-the-loop turn: do the direct thing, keep verification light, don't widen scope, and hand back early so the user can steer.",
  medium: "Treat this as regular engineering work: implement cleanly and run the obvious checks (typecheck, the tests you touched) before reporting.",
  high: "Verification matters on this turn: reproduce before changing code, test the edge cases, and confirm a new test would have failed without the fix.",
  xhigh: "This turn is edge-case heavy: adversarially review your first draft, test against an independent reference or randomized inputs, and check that half-finished fixes fail your tests.",
  max: "Work autonomously end to end on this turn: make the judgement calls yourself, verify exhaustively (fuzzing, reference implementations, adversarial review), and only stop when it is demonstrably done."
};
var HISTORY = 4;
function stateFile(opts) {
  return join(opts.dataDir, `session-${opts.sessionId.replace(/[^\w-]/g, "")}.json`);
}
async function readState(opts) {
  return readFile(stateFile(opts), "utf8").then((raw) => JSON.parse(raw)).catch(() => ({ prompts: [] }));
}
async function advise(prompt, opts) {
  const env = opts.env ?? process.env;
  if (env.JEV_EFFORT_DISABLE === "1")
    return;
  prompt = prompt.trim();
  if (!prompt || prompt.startsWith("/"))
    return;
  await mkdir(opts.dataDir, { recursive: true });
  const state = await readState(opts);
  const current = opts.currentEffort ?? state.effort;
  let decision;
  try {
    decision = await classify({
      prompt: prompt.slice(0, 8000),
      recentPrompts: state.prompts.map((p) => p.slice(0, 1000)),
      currentEffort: current
    }, { timeoutMs: Number(env.JEV_EFFORT_TIMEOUT_MS ?? 6000), env });
  } catch (err) {
    await log(opts.dataDir, { session: opts.sessionId, error: String(err) });
    return;
  }
  await writeFile(stateFile(opts), JSON.stringify({ ...state, prompts: [...state.prompts, prompt].slice(-HISTORY) }));
  if (!decision)
    return;
  await log(opts.dataDir, { session: opts.sessionId, current, ...decision });
  const gap = current ? LEVELS.indexOf(decision.level) - LEVELS.indexOf(current) : 0;
  const bigGap = Math.abs(gap) >= Number(env.JEV_EFFORT_NUDGE_GAP ?? 2);
  const command = opts.effortCommand?.(decision.level);
  const lines = [
    `[jev-effort] This turn was classified as ${decision.level}-effort work` + (current ? ` (session effort is ${current}).` : "."),
    DIRECTIVES[decision.level]
  ];
  if (bigGap) {
    lines.push(gap > 0 ? "The session is running well below what this task needs; be extra deliberate about verification" + (command ? `, and mention once that ${command} would suit this task.` : ".") : "The session is running well above what this task needs; don't over-verify or expand scope.");
  }
  const nudge = bigGap && command && env.JEV_EFFORT_QUIET !== "1" ? `jev-effort: looks like ${decision.level}-effort work (now ${current}) \u2014 ${command}` : undefined;
  return { decision, context: lines.join(`
`), nudge };
}
async function log(dir, entry) {
  await appendFile(join(dir, "decisions.jsonl"), JSON.stringify({ at: new Date().toISOString(), ...entry }) + `
`).catch(() => {});
}
// src/index.ts
var description = "Classifies each Amp turn with Jev and adds effort-appropriate guidance to the agent's context.";
function src_default(amp) {
  amp.on("agent.start", async (event) => {
    try {
      const advice = await advise(event.message, {
        dataDir: join2(homedir(), ".config", "amp", "jev-effort"),
        sessionId: event.thread.id
      });
      if (advice)
        return { message: { content: advice.context } };
    } catch {}
    return {};
  });
}
export {
  src_default as default,
  description
};
