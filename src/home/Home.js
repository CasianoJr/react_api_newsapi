import React from "react";
import { useNews } from "../news/NewsProvider";
import EmptyData from "../shared/EmptyData";
import Loading from "../shared/Loading";
import NewsCard from "./NewsCard";

export default function Home() {
  const { state } = useNews();
  const { topHeadlineNews: news } = state;

  if (state.isLoading === true) {
    return <Loading />;
  }
  if (news.totalResults === 0) {
    return <EmptyData />;
  }

  return (
    <div className="container-fluid">
      {news &&
        news.articles.map((headline, idx) => (
          <NewsCard news={headline} key={idx} />
        ))}
    </div>
  );
}
