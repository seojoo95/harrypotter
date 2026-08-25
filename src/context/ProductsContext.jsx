import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [flatProducts, setFlatProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // 👉 여기서 flat 처리
        const flat = data.flatMap((product) => {
          if (product.variants) {
            return product.variants.map((v) => ({
              id: `${product.id}-${v.id}`,
              title: `${v.title} ${product.title}`,
              option: v.title,
              image: v.image,
              subimage: v.subimage
                ? Array.isArray(v.subimage)
                  ? v.subimage
                  : [v.subimage]
                : [],
              price: v.price,
              category: product.category,
              parentId: product.id,
              description: v.description,
            }));
          }

          return [
            {
              id: product.id,
              title: product.title,
              image: product.image,
              subimage: product.subimage
                ? Array.isArray(product.subimage)
                  ? product.subimage
                  : [product.subimage]
                : [],
              price: product.price,
              category: product.category,
              parentId: product.id,
              description: product.description,
            },
          ];
        });

        setFlatProducts(flat);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, flatProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
