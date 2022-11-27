import { useState } from "react";

const cartData = [];




export function ProdCards({
  rating,
  productName,
  isOnSale,
  hasOptions,
  
}) {
  let rate = [];

  for (let i = 0; i < rating; i++) {
    rate.push(<div className="bi-star-fill"></div>);
  }
  
  const [btnVal, setBtnVal] = useState(false);
  const changeBtnVal = () => {
    setBtnVal(!btnVal);
    cartData.push(1)
    
  };



  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}

        {isOnSale ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : null}

        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{productName}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              {/* logic to rate the product */}
              {rate.map((el) => el)}
            </div>

            {hasOptions ? (
              <span>$120.00 - $280.00</span>
            ) : (
              <span>
                <span className="text-muted text-decoration-line-through">
                  $20.00
                </span>{" "}
                $18.00
              </span>
            )}
            {/* <!-- Product price--> */}
          </div>
        </div>

        {/* <!-- Product actions--> */}

        {hasOptions ? (
          // <!-- Product actions-->
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          </div>
        ) : (
          // <!-- Product actions-->
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                
                className="btn btn-outline-dark mt-auto"
                disabled={btnVal}
                onClick={changeBtnVal}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CartUpdate({cartData}) {
  
  const [cartVal,setCartVal] = useState(0)

  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
        <i className="bi-cart-fill me-1"></i>
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>
    </form>
  );
}
