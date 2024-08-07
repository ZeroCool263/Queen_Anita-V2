//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pendamajayden@gmail.com";
global.location = "Harare, Zimbabwe";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/cybro263";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263712473551";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0YrdndwdkttZC9GRERWSEFzS21QWGZUMjlFVzJVRDl2U1M5UFJ0Wmhsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2lsVFYyekxwVXpPTWVnNldxVERENTI5R092TXZjSUNJaWlFV2N0YzlqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQWhIVktyMWdReHNEMjZ6R3ZReVF1NlRNaXJPc2c5TjVKQkhRVTJ3dUZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS3JOdmkwdVdsb2ZOMkdWUXh6dmc5NzZSNlZPU0hRdmczNHE2cVBZUHk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKenkvcXZSeklQSk5DZE9QNHpROVVJZm0xZTJCdE9LNFlWUkRYdUVvM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVRZ3lyMU9ha2d0YjVzVlpsSllFNEc4K3UwWmRBUkR6ZGloMmp0clB5MGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xGdmsvaWdLZjFTYXUySnhWMnlGejR0b002bmFEZVVWdkZpYWl0cW5sMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlRMcWI2Wk5OeWNEeUcxaUZoUXFsTVZFR0pGN2p1amVZRU5QSnFCbXhtcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3Z3k1RjhxaEg2ZTZVVzlZcEFaTndRYytSVmFYLzArd2ZjdEhOajZXUnZkVjd1L1psekNPQ1ZlV0JvV1FGd2pMR0VzWnp1TkNlOXJ2ZloyQnVwL0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJaVVFEMlcwZ2UxdzlMSi9ZNUNaVHJ4bjdyclpnRmdxaU5saGhtbmV1bDRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBcjJPTnBtQ1EtNndzdk1ZcGd6bE5BIiwicGhvbmVJZCI6Ijc1ZWRmOGE5LWFhMTUtNDVmOC1hNzkxLTRkYjE2NWRmOTVhOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEV1hJSzZWM2xkZkZZejlscnl6MkVOSVIzV289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUs1OEhOVXZIcEFyTnhua1RJRElWa0lJbjRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRHUEc5UTZMIiwibWUiOnsiaWQiOiIyMzM1OTk2NjI4ODk6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSkFZIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV1hndVlGRU9pandMVUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5SXJKTnhQd0l2M0Z2V3RWV3p0RDAxdlRLemNnZFJpSDZHS0t0Z3dDOVVvPSIsImFjY291bnRTaWduYXR1cmUiOiJuK2dXaS9NTEJNZ0pDakxWeGd3SUc2NGRiSGcxQjFza2p2ZFhoU2tDSTc0OWZUWk55QlE3YkIzeXVVaXhobUk2M0NWV0xKNGVMbmp3QWRtaGpBWjZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGc2Ui9XWFBkeXNUNDFDeTUzSVU5d0V6RVNxdTFYMWlGMGVVc0lVdEh0L3JaQittamYxSmtEWG41WURIKzFSOEJzbGNnbU1nSkI5dVBpZTUxb21YQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1OTk2NjI4ODk6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2lLeVRjVDhDTDl4YjFyVlZzN1E5TmIweXMzSUhVWWgraGlpcllNQXZWSyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjgxNDk2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGSjYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHANTEL-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_CHANTEL",
  packname: process.env.PACK_NAME || "CHANTEL",
  botname: process.env.BOT_NAME || "QUEEN_CHANTEL",
  ownername: process.env.OWNER_NAME || "Dark ZeroCool",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "CHANTEL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
