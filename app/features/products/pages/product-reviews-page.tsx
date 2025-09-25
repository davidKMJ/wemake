import { useParams } from "react-router";

export default function ProductReviewsPage() {
  const { productId } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Product Reviews: {productId}</h1>
      <p>Product reviews content for {productId}</p>
    </div>
  );
}
