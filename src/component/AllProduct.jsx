import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function AllProduct() {
  const { flatProducts } = useContext(ProductsContext);

  const cateFilter = [...new Set(flatProducts.map((cate) => cate.category))];

  const sortCateFilter = [...cateFilter].sort((a, b) => b.localeCompare(a));

  return (
    <AllProductWrap>
      {sortCateFilter.map((cate) => (
        <div className="productWrapListWrap" key={cate}>
          <h3 className="productTit">{cate}</h3>
          <Swiper
            className="productList"
            spaceBetween={40}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={true}
          >
            {flatProducts
              .filter((item) => item.category === cate)
              .sort(() => Math.random() - 0.5)
              .slice(0, 10)
              .map((item) => (
                <SwiperSlide className="productWrap" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <figure className="imgWrap">
                      <div className="imgFrameWrap">
                        <img
                          className="imgFrame"
                          src={process.env.PUBLIC_URL + "/img/frame.svg"}
                          alt="이미지 프레임"
                        />
                        <img
                          className="itemImg"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                    </figure>
                    <div className="priceWrap">
                      <p className="priceTit">{item.title}</p>
                      <p>&#8361;{item.price.toLocaleString()}원</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ))}
      <div className="houseCheckWrap">
        <p></p>
      </div>
    </AllProductWrap>
  );
}

const AllProductWrap = styled.div`
  width: 100%;
  height: 100%;
`;
