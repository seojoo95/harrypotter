import { useEffect, useState } from "react";
import styled from "styled-components";

export default function TopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <TopBtnWrap>
      <button className={`topBtn ${show ? "show" : ""}`} onClick={handleTopBtn}>
        <img src={process.env.PUBLIC_URL + "/img/top-btn.svg"} alt="topbtn" />
      </button>
    </TopBtnWrap>
  );
}

const TopBtnWrap = styled.div`
  .topBtn {
    display: none;
    position: fixed;
    bottom: 70px;
    right: 35px;
    z-index: 1;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    border: none;
    background: rgba(64, 54, 34, 0.5);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      box-shadow: none;
    }
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%);
      display: block;
      width: 65%;
    }
  }
  .topBtn.show {
    display: block;
  }
`;
