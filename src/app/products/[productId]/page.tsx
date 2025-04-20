import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <div>Product Detail {params?.productId}</div>;
};

export default ProductDetails;
