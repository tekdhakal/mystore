import React from "react";

export default function ProductCardView(props) {
    return (
        <div className="card">
            <img className="product--image" src={props.url} alt="product image" />
            <h2>{props.name}</h2>
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    );
}



// <div className="card">
//     <h2>Sport Sneaker</h2>
//     <p className="price">$20.99</p>
//     <p >Some description</p>
//     <button> Add to Cart</button>
// </div>
