import React from "react";

export default function NewsItem(props) {
  // let title = props.title.slice(0, 40);
  // let description = props.description.slice(0, 40);

  return (
    <div className="container">
      <div className="card my-3">
        <img
          src={
            !props.src
              ? "https://images.hindustantimes.com/tech/img/2022/12/14/1600x900/IMG_5092_1665651375734_1671002933854_1671002933854.jpg"
              : props.src
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <a
            href={props.url}
            target="_blank"
            className="btn btn-small btn-warning"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
