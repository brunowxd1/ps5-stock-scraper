import AbstractStoreInterface from "./AbstractStoreInterface";

export default interface StoreInterface extends AbstractStoreInterface {
  pageScrapingCommands: () => boolean;
}
