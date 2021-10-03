import PuppeteerService from "./services/PuppeteerService";
import stores from "./stores";

let SCRAPING_COUNT = 0;

const headless = process.env.NODE_ENV === "development";

const puppeteerService = new PuppeteerService();

const scrapAll = async () => {
  console.log(
    `As páginas foram verificadas pela ${++SCRAPING_COUNT} vez desde o início do processo`
  );

  Promise.resolve(
    stores.map(async (store) => {
      await puppeteerService.scout(
        store.storeName,
        store.productUrl,
        headless,
        store.pageScrapingCommands
      );
    })
  );
};
scrapAll();

//cron.schedule("0 */1 * * * *", scrapAll);
