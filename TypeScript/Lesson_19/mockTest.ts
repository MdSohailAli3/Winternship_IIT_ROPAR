import "reflect-metadata";
import { Container } from "typedi";

import { NewsAggregator } from "./NewsAggregator";
import { NewsSource } from "./NewsSource";
import { NEWS_SOURCE } from "./tokens";


class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["MOCK: Article for Testing"];
  }
}

async function testNewsAggregatorWithMock() {
  console.log("Running mock test...");

  // Step 1: Inject mock source into the container
  Container.set(NEWS_SOURCE, new MockNewsSource());

  // Step 2: Resolve NewsAggregator
  const aggregator = Container.get(NewsAggregator);

  // Step 3: Call method and verify behavior
  const articles = await aggregator.getLatestArticles();

  // Step 4: Assertion
  if (articles[0] === "MOCK: Article for Testing") {
    console.log("Test passed");
    console.log("Output:", articles);
  } else {
    console.log("Test failed");
    console.log("Output:", articles);
  }
}

// Run the test
testNewsAggregatorWithMock();
