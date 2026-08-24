import { Outlet } from "react-router-dom";
import { ProductDescription } from "../component/ProductDescription";

export default function ProductDetail() {
  return (
    <>
      <Outlet />
      <ProductDescription />
    </>
  );
}
