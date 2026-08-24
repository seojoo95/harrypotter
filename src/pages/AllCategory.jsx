import { Outlet } from "react-router-dom";
import { ProductsList } from "../component/ProductsList";

export default function AllCategory() {
  return (
    <>
      <Outlet />
      <ProductsList />
    </>
  );
}
