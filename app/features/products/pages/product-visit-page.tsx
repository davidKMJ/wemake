import { useParams } from "react-router";

export default function ProductVisitPage() {
  const { productId } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Visit Product: {productId}</h1>
      <p>Product visit content for {productId}</p>
    </div>
  );
}
