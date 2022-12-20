import React from "react";

export default function NewsItem(props) {
  // let title = props.title.slice(0, 40);
  // let description = props.description.slice(0, 40);

  return (
    <div className="container">
      <div className="card my-3">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-dark"
          style={{ zIndex: "1", left: "100%" }}
        >
          {props.source.slice(0, 22)}
        </span>
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
          <p className="card-text">
            <small className="text-muted">
              <div className="row">
                <div className="col-md">
                  <span>
                    <i class="fa-regular fa-calendar-days"></i>{" "}
                  </span>
                  <strong>
                    {new Date(props.date).toGMTString() ?? "Unknown"}
                  </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <span>
                    <i class="fa-solid fa-pen-nib"></i>{" "}
                  </span>
                  <strong>{props.author ?? "Unknown"}</strong>
                </div>
              </div>
              {/* By <strong> {props.author ?? "Unknown"}</strong>,{" "}
              {new Date(props.date).toGMTString() ?? "Unknown"} */}
            </small>
          </p>
          <a
            href={props.url}
            target="_blank"
            className="btn btn-small btn-warning"
          >
            <span>
              <i class="fa-solid fa-book-open-reader"></i>{" "}
            </span>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
