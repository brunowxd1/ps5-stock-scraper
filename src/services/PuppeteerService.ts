import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import IPuppeteerService from "../interfaces/PuppeteerServiceInterface";
import TelegramBotService from "./TelegramBotService";
import puppeteerOptions from "../config/puppeteerConfig";
import StoreInterface from "../interfaces/StoreInterface";
import { Browser } from "puppeteer-extra-plugin/dist/puppeteer";

class PuppeteerService implements IPuppeteerService {
  telegramBot;
  puppeteerBrower: Browser | undefined;

  constructor() {
    this.telegramBot = new TelegramBotService();
  }

  initializeBrowser = async () => {
    this.puppeteerBrower = await puppeteer
      .use(StealthPlugin())
      .launch({ ...puppeteerOptions, headless: false });
  };

  scout = async (stores: StoreInterface[]) => {
    try {
      stores.map(async (store) => {
        const page = await this.puppeteerBrower?.newPage();
        await page?.goto(store.productUrl);

        const evaluateResult = await page?.evaluate(store.pageScrapingCommands);

        if (evaluateResult) {
          this.telegramBot.sendMessage(store.storeName, store.productUrl);
        }

        await page?.close();
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default PuppeteerService;
