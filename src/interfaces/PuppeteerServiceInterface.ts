import TelegramBotService from "../services/TelegramBotService";

export default interface IPuppeteerService {
  telegramBot: TelegramBotService;
  scout: (
    store: string,
    url: string,
    headless: boolean,
    pageScrapingCommands: () => any
  ) => void;
}
