import { useParams } from "react-router";

export default function CategoryPage() {
  const { category } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Category: {category}</h1>
      <p>Category page content for {category}</p>
    </div>
  );
}
