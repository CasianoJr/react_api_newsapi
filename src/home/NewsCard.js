import React from "react";

export default function NewsCard({ news }) {
  return (
    <div className="container-fluid border my-1">
      <div className="h3">{news.title}</div>
      <div className="text-muted small">
        Source: {news.source.name},{" "}
        {new Date(news.publishedAt).toLocaleString()}
      </div>
      <div className="row">
        <div className="col-sm-5">
          <div className="lead mt-3 text-justify">{news.description}</div>
        </div>
        <div className="col-sm-7">
          <img
            src={news.urlToImage}
            style={{ maxHeight: "350px", maxWidth: "100%" }}
            alt="Fail to load"
          />
        </div>
      </div>
      <div className="text-justify mr-sm-5">{news.content}</div>
      <div className="ml-auto">
        <a
          className="btn btn-outline-primary mr-sm-5 mt-1"
          href={news.url}
          onClick={(e) => {
            e.preventDefault();
            window.open(news.url, "_blank");
          }}
        >
          {news.source.name === "YouTube" ? "Watch Youtube" : "Read More >>"}
        </a>
      </div>
    </div>
  );
}
