import TelegramBotService from "../services/TelegramBotService";
import { Browser } from "puppeteer-extra-plugin/dist/puppeteer";
import StoreInterface from "./StoreInterface";

export default interface IPuppeteerService {
  telegramBot: TelegramBotService;
  puppeteerBrower: Browser | any;
  initializeBrowser: () => void;
  scout: (stores: StoreInterface[]) => void;
}
