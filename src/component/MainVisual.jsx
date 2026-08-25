import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";

export default function MainVisual() {
  return (
    <MainVisualContainer>
      <Swiper
        slidesPerView={1}
        //   modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        slidesOffsetBefore={0}
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "img/main/hogwart.jpg"}
            alt="호그와트"
          />
          <div className="visualText">
            <h3>Back to Hogwarts</h3>
            <p>
              호그와트로 돌아가는 여행 상품들로 <br />
              Wizarding World를 즐겨보세요.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "img/main/wand.jpg"}
            alt="지팡이"
          />
          <div className="visualText">
            <h3>Wands</h3>
            <p>
              핸드메이드로 만들어진 사실적인 나무 복제 지팡이로 <br />
              해리포터 세계에 빠져보세요.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "img/main/christmas.jpg"}
            alt="크리스마스"
          />
          <div className="visualText">
            <h3>Christmas Collection</h3>
            <p>
              Wizarding World의 마법과 함께 크리스마스를 <br />
              축하하는 상품을 만나보세요.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="visualText">
            <h3>Find Your House</h3>
            <p>
              마법 세계에서 당신의 기숙사가 어디인지 <br /> 지금 바로
              알아보세요.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </MainVisualContainer>
  );
}

const MainVisualContainer = styled.div`
  width: 100%;
  height: 680px;
  background: gray;
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      .visualText {
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        font-size: 22px;
        color: var(--gold);
        h3 {
          line-height: 1.2;
          font-size: 60px;
          font-weight: 500;
          color: var(--gold1);
        }
        p {
          margin-top: 18px;
          line-height: 1.6;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin: 0 8px;
        background: var(--gold1);
      }
    }
  }
`;
