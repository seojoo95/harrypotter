import { useContext, useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { ProductsContext } from "../context/ProductsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";

export function ProductDescription() {
  const { id } = useParams();
  const { flatProducts } = useContext(ProductsContext);

  const product = flatProducts.find((item) => item.id === id);

  const variantsProducts = product?.parentId
    ? flatProducts.filter((item) => item.parentId === product.parentId)
    : [];

  const pickProducts = useMemo(() => {
    return [...flatProducts].sort(() => Math.random() - 0.5).slice(0, 10);
  }, [flatProducts, product?.id]);
  //자세히 보기 버튼 초기화
  const [activeCls, setActiveCls] = useState(false);

  //상품 옵션 이미지
  const [optionImg, setOptionImg] = useState();

  useEffect(() => {
    setActiveCls(false);
    setOptionImg();
  }, [product?.id]);

  return (
    <ProductDetailWrap>
      <section className="productDetail">
        <div className="imgContWrap">
          <figure className="imgWrap">
            <div className="imgFrameWrap">
              <img
                className="imgFrame"
                src={process.env.PUBLIC_URL + "/img/frame.svg"}
                alt="이미지 프레임"
              />
              <img
                className="itemImg"
                src={optionImg || product?.image}
                alt={product?.id}
              />
            </div>
          </figure>
          <Swiper
            slidesPerView={4.5}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              type: "progressbar",
            }}
            loop={false}
            slidesOffsetBefore={0}
            // centeredSlides={true}
            slideToClickedSlide={true}
            key={product?.id}
            initialSlide={0}
          >
            {variantsProducts
              .filter((el) => product.id === el.id)
              .map((item) =>
                item.subimage.map((imgs, idx) => (
                  <SwiperSlide
                    className="detailImgWrap"
                    key={`${imgs.id}-${idx}`}
                  >
                    <img
                      src={imgs}
                      alt={`${imgs.id}-${idx}`}
                      className="detailImg"
                      onClick={() => setOptionImg(imgs)}
                    />
                  </SwiperSlide>
                )),
              )}
          </Swiper>
        </div>
        <div className="detailWrap">
          <div className="descriptionWrap">
            <h3 className="productTit">{product?.title}</h3>
            <h4 className="productPrice">
              &#8361;{product?.price.toLocaleString()}원
            </h4>
            <div className={`descriptionWrap ${activeCls ? "more" : ""}`}>
              <p className="productDescription">{product?.description}</p>
              <div className="moreBtnWrap">
                <button
                  className="moreBtn"
                  onClick={() => setActiveCls((prev) => !prev)}
                >
                  자세히 보기
                </button>
                <IoIosArrowDown className="moreBtnIcon" />
              </div>
            </div>
          </div>
          <div className="countWrap">
            <span className="minus">-</span>
            <p className="count">1</p>
            <span className="plus">+</span>
          </div>
          <div className="btnWrap">
            <button className="goldBtn addCartBtn" type="button">
              장바구니 담기
            </button>
            <button className="goldBtn buyBtn" type="button">
              구매하기
            </button>
          </div>
          <div className="optionWrap">
            {variantsProducts.length > 1 &&
              [...variantsProducts]
                .sort((a, b) => a.option.localeCompare(b.option))
                .map((item) => (
                  <div
                    className={`option ${product.id === item.id ? "on" : ""}`}
                    key={item.id}
                  >
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt={item.id} />
                      <p>{item.option}</p>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <section className="recommendProducts">
        <h4 className="recommendTit">Picks for You</h4>
        <div className="productWrapListWrap">
          <Swiper
            className="productList"
            spaceBetween={40}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={true}
            key={product?.id}
            initialSlide={0}
          >
            {pickProducts.map((item) => (
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
      </section>
    </ProductDetailWrap>
  );
}

const ProductDetailWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 120px 0;
  .productDetail {
    display: flex;
    justify-content: center;
    gap: 5%;
    .swiper {
      margin-top: 20px;
      padding-bottom: 14px;
      .swiper-pagination-progressbar {
        top: auto;
        bottom: 0;
        height: 2px;
        transform: none;
        background: var(--brown2);
        .swiper-pagination-progressbar-fill {
          background: var(--gold2);
        }
      }
    }
  }
  .imgContWrap {
    width: 65%;
    max-width: 520px;
    height: 100%;
  }
  .detailImgWrap {
    width: 100px;
    height: 100px;
    .detailImg {
      width: 100%;
      aspect-ratio: 1 / 1;
      background: var(--white);
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .detailWrap {
    width: 35%;
    padding-top: 20px;
    .productTit {
      font-size: var(--fs30);
    }
    .productPrice {
      font-size: var(--fs20);
      font-weight: normal;
      margin-top: 12px;
    }
    .productDescription {
      margin-top: 28px;
      line-height: 1.8;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      white-space: pre-wrap;
    }
    .moreBtnWrap {
      display: flex;
      align-items: center;
      margin-top: 14px;
      .moreBtn {
        border-radius: 0;
        &:hover {
          text-decoration: underline;
        }
      }
      .moreBtnIcon {
        color: var(--gold1);
        margin-left: 4px;
      }
    }
    .descriptionWrap.more {
      .productDescription {
        overflow: visible;
        display: block;
      }
      .moreBtnIcon {
        transform: rotate(180deg);
        margin-top: -2px;
      }
    }
    .countWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
      min-width: 100px;
      padding: 10px;
      margin-top: 50px;
      background-color: var(--brown2);
      color: var(--gold1);
      font-size: var(--fs16);
      span {
        opacity: 0.6;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
    .btnWrap {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-top: 40px;
    }
    .optionWrap {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 25px;
      margin-top: 80px;
    }
    .option {
      width: fit-content;
      text-align: center;
      img {
        width: 80px;
        background: var(--white);
        border-radius: 5px;
        border: 3px solid transparent;
        cursor: pointer;
        transition: 300ms;
      }
      p {
        font-size: var(--fs16);
        text-align: center;
        margin-top: 8px;
      }
      &.on {
        img {
          outline: 3px solid var(--gold3);
        }
      }
      &:hover {
        text-shadow:
          0 0 12px rgba(255, 238, 216, 0.6),
          0 0 3px #000,
          0 0 5px rgba(255, 245, 192, 0.3);
      }
    }
  }
  .recommendProducts {
    margin-top: 100px;
    padding-top: 60px;
    border-top: 1px solid var(--gold3);
    .recommendTit {
      margin-left: 40px;
      font-size: var(--fs26);
    }
    .productWrapListWrap {
      margin: 0;
      margin-top: 30px;
    }
  }
`;
