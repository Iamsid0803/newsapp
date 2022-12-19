// import React, { Component } from "react";
import NewsItem from "./NewsItem";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function News(props) {
  // let articles = [];
  const [article, setArticle] = useState({
    loading: true,
    article: [],
    page: parseInt(1),
  });
  const handlePrevious = () => {
    console.log("Page No  before previous= ", parseInt(article.page));
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=091eefac3e214d6f9ba98c24f25ae2ac&page=${
      parseInt(article.page) - 1
    }&pageSize=${props.pageSize}`;

    const fetchData = async () => {
      try {
        setArticle({ loading: true, article: [], page: parseInt(1) });
        const response = await fetch(url);

        // setArticle({ loading: true });
        const json = await response.json();
        console.log(json);
        setArticle({
          article: json.articles,
          page: parseInt(article.page) - 1,
          totalResults: json.totalResults,
          loading: false,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };
  const handleNext = () => {
    if (
      parseInt(article.page + 1) >
      Math.ceil(article.totalResults / props.pageSize)
    ) {
    } else {
      console.log("Next Clicked");
      const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=091eefac3e214d6f9ba98c24f25ae2ac&page=${
        parseInt(article.page) + 1
      }&pageSize=${props.pageSize}`;
      console.log("after next =", parseInt(article.page + 1));
      const fetchData = async () => {
        try {
          setArticle({ loading: true, article: [], page: parseInt(1) });
          const response = await fetch(url);
          // setArticle({ loading: true });

          const json = await response.json();
          console.log(json);
          setArticle({
            article: json.articles,
            page: parseInt(article.page + 1),
            totalResults: json.totalResults,
            loading: false,
          });
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }
  };
  useEffect(() => {
    setArticle({ loading: true, article: [], page: parseInt(1) });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=091eefac3e214d6f9ba98c24f25ae2ac&page=1&pageSize=${props.pageSize}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();
        console.log(json);
        setArticle({
          article: json.articles,
          page: parseInt(article.page),
          totalResults: json.totalResults,
          loading: false,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      {console.log("page = ", article.page)}
      <h2 className="text-center">Top headlines For Today</h2>
      {article.loading && <Loading />}
      <div className="row">
        {article.article.map((element) => {
          // return console.log(element);
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
          disabled={parseInt(article.page) <= 1}
        >
          ⬅️Previous
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleNext}
          disabled={
            parseInt(article.page + 1) >
            Math.ceil(article.totalResults / props.pageSize)
          }
        >
          Next➡️
        </button>
      </div>
    </div>
  );
}
