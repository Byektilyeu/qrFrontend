import { Container } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default ({ children }) => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>{children}</div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
};
