import { useParams } from "react-router";

export default function ProductRedirectPage() {
  const { productId } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Product {productId}</h1>
      <p>Product redirect page for {productId}</p>
    </div>
  );
}
