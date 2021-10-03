import StoreInterface from "../../interfaces/StoreInterface";
import AbstractStore from "../abstract/AbstractStore";

class AmazonScraper extends AbstractStore implements StoreInterface {
  constructor(productUrl: string, storeName: string) {
    super(productUrl, storeName);
  }

  pageScrapingCommands = (): boolean => {
    const targetAlternativeOffersDiv = document.getElementById(
      "add-to-cart-button"
    ) as HTMLInputElement;

    if (targetAlternativeOffersDiv) {
      const { title } = targetAlternativeOffersDiv;

      if (title && title === "Adicionar ao carrinho") {
        return true;
      }
    }

    return false;
  };
}

export default AmazonScraper;
