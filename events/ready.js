const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`                                                                                                  {XiR DeVeLoPeR TeAm}                                                                    `)
  client.user.setActivity(`${prefix}yardım | ${client.guilds.size} sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`, { type: "LISTENING"});
  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
  console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
/*
__   __ _ ______     ______                     _                             _____                         
\ \ / /(_)| ___ \    |  _  \                   | |                           |_   _|                        
 \ V /  _ | |_/ /    | | | |  ___ __   __  ___ | |  ___   _ __    ___  _ __    | |    ___   __ _  _ __ ___  
 /   \ | ||    /     | | | | / _ \\ \ / / / _ \| | / _ \ | '_ \  / _ \| '__|   | |   / _ \ / _` || '_ ` _ \ 
/ /^\ \| || |\ \     | |/ / |  __/ \ V / |  __/| || (_) || |_) ||  __/| |      | |  |  __/| (_| || | | | | |
\/   \/|_|\_| \_|    |___/   \___|  \_/   \___||_| \___/ | .__/  \___||_|      \_/   \___| \__,_||_| |_| |_|
                                                         | |                                                
                                                         |_|                                                
*/
