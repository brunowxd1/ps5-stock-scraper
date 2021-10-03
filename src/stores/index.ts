import { config } from "dotenv";

import StoreInterface from "../interfaces/StoreInterface";
import AmazonScraper from "./StoresScrapers/AmazonScraper";
import KabumScraper from "./StoresScrapers/KabumScraper";
import MagaluScraper from "./StoresScrapers/MagaluScraper";

config();

const amazonScraper = new AmazonScraper(
  String(process.env.AMAZON_URL),
  "Amazon"
);
const magaluScraper = new MagaluScraper(
  String(process.env.MAGALU_URL),
  "Magalu"
);

const kabumScraper = new KabumScraper(String(process.env.KABUM_URL), "Kabum");

const stores: Array<StoreInterface> = [
  magaluScraper,
  amazonScraper,
  kabumScraper,
];

export default stores;
