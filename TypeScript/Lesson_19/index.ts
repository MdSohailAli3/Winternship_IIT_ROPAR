import "reflect-metadata";
import { Container } from "typedi";

import { NewsAggregator } from "./NewsAggregator";
import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";
import { NEWS_SOURCE } from "./tokens";

async function main() {
  console.log("---- Using RSSFeedSource ----");

  // Register RSS source
  Container.set(NEWS_SOURCE, new RSSFeedSource());

  const rssAggregator = Container.get(NewsAggregator);
  const rssArticles = await rssAggregator.getLatestArticles();
  console.log(rssArticles);

  console.log("---- Swapping to APISource ----");

  // Swap to API source (NO change to NewsAggregator)
  Container.set(NEWS_SOURCE, new APISource());

  const apiAggregator = Container.get(NewsAggregator);
  const apiArticles = await apiAggregator.getLatestArticles();
  console.log(apiArticles);
}

main().catch(err => {
  console.error("Error running application:", err);
});
