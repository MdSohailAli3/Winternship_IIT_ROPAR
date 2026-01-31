import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";
import { NEWS_SOURCE } from "./tokens";

// Default: RSS
Container.set(NEWS_SOURCE, new RSSFeedSource());

const agg1 = Container.get(NewsAggregator);
console.log(await agg1.getLatestArticles());
// → RSS articles

// Swap to API (NO change to NewsAggregator)
Container.set(NEWS_SOURCE, new APISource());

const agg2 = Container.get(NewsAggregator);
