import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import IPuppeteerService from "../interfaces/PuppeteerServiceInterface";
import TelegramBotService from "./TelegramBotService";
import puppeteerOptions from "../config/puppeteerConfig";

class PuppeteerService implements IPuppeteerService {
  telegramBot;

  constructor() {
    this.telegramBot = new TelegramBotService();
  }

  scout = async (
    store: string,
    url: string,
    headless: boolean,
    pageScrapingCommands: any
  ) => {
    try {
      const browser = await puppeteer
        .use(StealthPlugin())
        .launch({ ...puppeteerOptions, headless });

      const page = await browser.newPage();
      await page.goto(url);

      const evaluateResult = await page.evaluate(pageScrapingCommands);

      if (evaluateResult) {
        this.telegramBot.sendMessage(store, url);
      }

      //await browser.close();
    } catch (error) {
      console.log(error);
    }
  };
}

export default PuppeteerService;
