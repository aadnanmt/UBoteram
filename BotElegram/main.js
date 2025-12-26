// learn with dea afrizal

// import library utama untuk bikin Telegram Bot
const TelegramBot = require("node-telegram-bot-api");

// import dan jalankan dotenv supaya bisa baca file .env
const env = require("dotenv").config();

// ambil token bot dari file .env (jangan cuba hardcode token di sini!)
const token = process.env.TELEGRAM_TOKEN;

// buat instance bot dengan mode polling (bot aktif ngecek pesan baru terus-menerus)
const bot = new TelegramBot(token, { polling: true });

// listener untuk SEMUA jenis pesan yang masuk (text, foto, sticker, dll.)
bot.on("message", async (data) => {

  // ambil info bot sendiri (nama, username, dll.) dari Telegram
  const botProfile = await bot.getMe();
  
  // log info bot ke console (buat debugging)
  console.log(botProfile);

  // kirim balasan ke user yang ngirim pesan
  bot.sendMessage(
    data.from.id,
    `Halowww! perkenalkan aku adalah ${botProfile.first_name}. Buatan Adnan!\nAda yang bisa dibantu kah?`
  );
});

// listener KHUSUS untuk pesan berupa sticker
bot.on("sticker", (data) => {

  // log data sticker kalau mau debug, bisa kmu di-uncomment nanti
  // console.log(data);

  // balas sticker dengan emoji lain (bisa diganti sesuka hati)
  // bot.sendMessage(data.from.id, data.sticker.emoji); // balas pakai emoji sticker yang sama
  bot.sendMessage(data.from.id, "🙈"); // balas fixed emoji
});