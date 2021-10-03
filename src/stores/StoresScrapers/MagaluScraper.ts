import StoreInterface from "../../interfaces/StoreInterface";
import AbstractStore from "../abstract/AbstractStore";

class MagaluScraper extends AbstractStore implements StoreInterface {
  constructor(productUrl: string, storeName: string) {
    super(productUrl, storeName);
  }

  pageScrapingCommands = (): boolean => {
    const targetAlternativeOffersDiv = document.getElementsByClassName(
      "button__buy"
    ) as HTMLCollection;

    if (targetAlternativeOffersDiv.length > 0) {
      return true;
    }

    return false;
  };
}

export default MagaluScraper;
