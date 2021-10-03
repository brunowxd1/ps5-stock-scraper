import { config } from "dotenv";

import StoreInterface from "../interfaces/StoreInterface";
import AmazonScraper from "./StoresScrapers/AmazonScrapper";
import MagaluScraper from "./StoresScrapers/MagaluScrapper";

config();

const amazonScraper = new AmazonScraper(
  String(process.env.AMAZON_URL),
  "Amazon"
);
const magaluScraper = new MagaluScraper(
  String(process.env.MAGALU_URL),
  "Magalu"
);

const stores: Array<StoreInterface> = [magaluScraper, amazonScraper];

export default stores;
