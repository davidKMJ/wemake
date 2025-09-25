import { useParams } from "react-router";

export default function ProductOverviewPage() {
  const { productId } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Product Overview: {productId}</h1>
      <p>Product overview content for {productId}</p>
    </div>
  );
}
