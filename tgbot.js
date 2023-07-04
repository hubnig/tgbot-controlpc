const TelegramBot = require('node-telegram-bot-api');
const Control = require('./controlPC.js')

const token = '5704409180:AAGMqdUreuz49J8oJH5SCFq0y812nKu7Gi8';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    if(msg.text === '/offpc'){
        Control.shutdown();
        console.log("Комп щас выключится");
        bot.sendMessage(msg.chat.id, 'Компьютер сейчас выключится!')
        return 0
    }
    if(msg.text === '/shutdown'){
        Control.shutdown(5400);
        console.log('Комп выключится через 1.5 часа');
        bot.sendMessage(msg.chat.id, 'Компьютер выключится через 1.5 часа!')
        return 0
    }
    if(msg.text === '/cancel'){
        Control.abort()
        console.log("Стоп офф");
        bot.sendMessage(msg.chat.id, 'Выключение остановлено <3')
        return 0
    }
    else{
        console.log('Хуйню спорол (безобид:)');
        bot.sendMessage(msg.chat.id, 'Хуйню спорол (безобид:)')
        return 0
    }
});