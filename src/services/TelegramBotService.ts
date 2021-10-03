import TelegramBot from "node-telegram-bot-api";
import TelegramBotServiceInterface from "../interfaces/TelegramBotServiceInterface";

class TelegramBotService implements TelegramBotServiceInterface {
  telegramBot;

  constructor() {
    this.telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_ID as string, {
      polling: true,
    });
  }

  sendMessage = (store: string, href: string): void => {
    const formattedMessage = `💥 Estoque Disponível na ${store} 💥\n\nAcesse o link: ${href}`;

    this.telegramBot.sendMessage(
      process.env.TELEGRAM_BOT_GROUP_ID as string,
      formattedMessage
    );
  };
}

export default TelegramBotService;
