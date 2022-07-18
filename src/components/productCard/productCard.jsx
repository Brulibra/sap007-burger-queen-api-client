import React from "react";

function Product({ image, name, price }) {
	return (
		<li className="productCard">
			<button>
				<picture>
					<img src={image} alt="productImage" className="productImg" />
				</picture>
				<section className="productInfo">
					<h3>{name}</h3>
					<p>Preço R${price}</p>
				</section>
			</button>
		</li>
	)
}
export default Product