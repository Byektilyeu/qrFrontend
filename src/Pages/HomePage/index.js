import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Layout from "../../Components/Layout";
import MyNavbar from "../../Components/Navbar";
import { SERVERAPI } from "../../Constants/Routes";
import axios from "axios";
import GetCategory from "../../Components/GetCategory";

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get(`${SERVERAPI}/api/v1/categories`)
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  };

  return (
    <Layout>
      <div className="header-categori">
        <MyNavbar />
        <hr />
        <div className="category">
          {categories.map((e) => (
            <div className="category-item">
              <button className="category-button">
                <img className="category-card" src={e.Comment}></img>
                <p className="category-name">{e.Name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Row>
        {categories.map((category) => (
          <GetCategory key={category.Ident} data={category} />
        ))}
      </Row>
    </Layout>
  );
}

export default HomePage;
