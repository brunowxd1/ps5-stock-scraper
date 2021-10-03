import TelegramBot from "node-telegram-bot-api";

export default interface TelegramBotServiceInterface {
  telegramBot: TelegramBot;
  sendMessage: (store: string, href: string) => void;
}
