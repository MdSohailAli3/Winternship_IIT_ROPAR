import { Service, Inject } from "typedi";
import { NewsSource } from "./NewsSource";
import { NEWS_SOURCE } from "./tokens";

@Service()
export class NewsAggregator {
  constructor(
    @Inject(NEWS_SOURCE)
    private source: NewsSource
  ) {}

  async getLatestArticles() {
    // const articles = await this.source.fetchArticles();
    // articles.forEach(article => console.log(article));
    return this.source.fetchArticles();
  }
}