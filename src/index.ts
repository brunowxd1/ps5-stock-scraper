import cron from "node-cron";
import PuppeteerService from "./services/PuppeteerService";
import stores from "./stores";

let SCRAPING_COUNT = 0;

const puppeteerService = new PuppeteerService();

const scrapAll = async () => {
  console.log(
    `As páginas foram verificadas pela ${++SCRAPING_COUNT} vez desde o início do processo`
  );

  await puppeteerService.initializeBrowser();
  await puppeteerService.scout(stores);
};

scrapAll();
cron.schedule("0 */5 * * * *", scrapAll);
