import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
};

export default ReviewDetails;
