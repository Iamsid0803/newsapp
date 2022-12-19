// import React, { Component } from "react";
import NewsItem from "./NewsItem";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  // let articles = [];
  const [article, setArticle] = useState({
    loading: true,
    article: [],
    page: parseInt(1),
    totalResults: 0,
  });
  // const handlePrevious = () => {
  //   console.log("Page No  before previous= ", parseInt(article.page));
  //   const url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${props.category}&apiKey=719e620e30504dfb88e75a0f049a8a48&page=${
  //     parseInt(article.page) - 1
  //   }&pageSize=${props.pageSize}`;

  //   const fetchData = async () => {
  //     try {
  //       setArticle({ loading: true, article: [], page: parseInt(1) });
  //       const response = await fetch(url);

  //       // setArticle({ loading: true });
  //       const json = await response.json();
  //       console.log(json);
  //       setArticle({
  //         article: json.articles,
  //         page: parseInt(article.page) - 1,
  //         totalResults: json.totalResults,
  //         loading: false,
  //       });
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // };
  // const handleNext = () => {
  //   if (
  //     parseInt(article.page + 1) >
  //     Math.ceil(article.totalResults / props.pageSize)
  //   ) {
  //   } else {
  //     console.log("Next Clicked");
  //     const url = `https://newsapi.org/v2/top-headlines?country=${
  //       props.country
  //     }&category=${
  //       props.category
  //     }&apiKey=719e620e30504dfb88e75a0f049a8a48&page=${
  //       parseInt(article.page) + 1
  //     }&pageSize=${props.pageSize}`;
  //     console.log("after next =", parseInt(article.page + 1));
  //     const fetchData = async () => {
  //       try {
  //         setArticle({ loading: true, article: [], page: parseInt(1) });
  //         const response = await fetch(url);
  //         // setArticle({ loading: true });

  //         const json = await response.json();
  //         console.log(json);
  //         setArticle({
  //           article: json.articles,
  //           page: parseInt(article.page + 1),
  //           totalResults: json.totalResults,
  //           loading: false,
  //         });
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     fetchData();
  //   }
  // };
  useEffect(() => {
    setArticle({ loading: true, article: [], page: parseInt(1) });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=719e620e30504dfb88e75a0f049a8a48&page=1&pageSize=${props.pageSize}`;

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
  const fetchMoreData = () => {
    // setArticle({
    //   page: article.page + 1,
    // });
    console.log(article.article.length);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=719e620e30504dfb88e75a0f049a8a48&page=${parseInt(
      article.page + 1
    )}&pageSize=${props.pageSize}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // setArticle({ loading: true });

        const json = await response.json();
        // console.log(json);
        setArticle({
          article: article.article.concat(json.articles),
          totalResults: json.totalResults,
          loading: false,
          page: article.page + 1,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    console.log(article.article.length);
  };
  return (
    <div>
      {console.log("page = ", article.page)}
      <h2 className="text-center" style={{ margin: "1rem" }}>
        Top headlines in {props.category}
      </h2>
      {/* {article.loading && <Loading />} */}
      <InfiniteScroll
        dataLength={article.article.length}
        next={fetchMoreData}
        hasMore={article.article.length !== article.totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {/* return {article.totalResults} */}
            {article.article.map((element) => {
              // return console.log(element);
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    src={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container">
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
      </div> */}
    </div>
  );
}
