import { useState } from "react";
import "./App.css";
import { ProdCards, CartUpdate } from "./components/ProductCards";

function App() {
  // Pass Product data to create cards accordingly
  // "prodName" for product Name
  // "onSale" to display SALE tag on the card
  // "hasOpt" to chang add to cart button to display options button

  const productDetails = [
    {
      id: 1,
      rating: 4,
      prodName: "Fancy Product",
      onSale: false,
      hasOpt: true,
    },
    { id: 2, rating: 3, prodName: "Special Item", onSale: true, hasOpt: false },
    { id: 3, rating: 2, prodName: "Sale Item", onSale: true, hasOpt: false },
    {
      id: 4,
      rating: 5,
      prodName: "Popular Item",
      onSale: false,
      hasOpt: false,
    },
    { id: 5, rating: 2, prodName: "Sale Item", onSale: true, hasOpt: false },
    {
      id: 6,
      rating: 5,
      prodName: "Fancy Product",
      onSale: false,
      hasOpt: true,
    },
    { id: 7, rating: 3, prodName: "Special Item", onSale: true, hasOpt: false },
    {
      id: 8,
      rating: 4,
      prodName: "Popular Item",
      onSale: false,
      hasOpt: false,
    },
  ];

  return (
    <div classNameName="App">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <CartUpdate />
          </div>
        </div>
      </nav>

      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Iterating through Product Details to create cards */}
            {productDetails.map((ele) => {
              return (
                <ProdCards
                  rating={ele.rating}
                  productName={ele.prodName}
                  isOnSale={ele.onSale}
                  hasOptions={ele.hasOpt}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
