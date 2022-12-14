// import React, { Component } from "react";
import NewsItem from "./NewsItem";

import React, { useEffect, useState } from "react";

export default function News() {
  // let articles = [];
  const [article, setArticle] = useState({
    // article: articles,
    loading: false,
    article: [],
    page: 1,
  });
  const handlePrevious = () => {
    console.log("previous Clicked");
  };
  const handleNext = () => {
    console.log("Next Clicked");
  };
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=091eefac3e214d6f9ba98c24f25ae2ac";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setArticle({
          article: json.articles,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h2>Top headlines For Today</h2>
      <div className="row">
        {article.article.map((element) => {
          // console.log(element.title.slice(0, 15));
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                src={element.urlToImage}
                url={element.url}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrevious}
        >
          ⬅️Previous
        </button>
        <button type="button" className="btn btn-warning" onClick={handleNext}>
          Next➡️
        </button>
      </div>
    </div>
  );
}
