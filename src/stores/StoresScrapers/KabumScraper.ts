import StoreInterface from "../../interfaces/StoreInterface";
import AbstractStore from "../abstract/AbstractStore";

class KabumScraper extends AbstractStore implements StoreInterface {
  constructor(productUrl: string, storeName: string) {
    super(productUrl, storeName);
  }

  pageScrapingCommands = (): boolean => {
    const targetAlternativeValoresDiv = document.getElementById(
      "blocoValores"
    ) as HTMLDivElement;

    if (targetAlternativeValoresDiv) {
        return true;
    }

    return false;
  };
}

export default KabumScraper;
