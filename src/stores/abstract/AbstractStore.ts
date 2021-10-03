import AbstractStoreInterface from "../../interfaces/AbstractStoreInterface";

class AbstractStore implements AbstractStoreInterface {
  public readonly productUrl: string;
  public readonly storeName: string;

  constructor(productUrl: string, storeName: string) {
    this.productUrl = productUrl;
    this.storeName = storeName;
  }
}

export default AbstractStore;
