import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="headerContent">
        <div className="logoWrap">
          <Link to="/main">
            <img
              src={process.env.PUBLIC_URL + "/img/logo_color.png"}
              alt="harrypotter"
            />
          </Link>
        </div>
        <nav className="menuWrap">
          <ul className="gnbWrap">
            <Link to="/all">
              <li className="lightBtn">all</li>
            </Link>
            <li className="lightBtn">
              <Link to="/house">
                <p>house</p>
              </Link>
              <ul className="snbWrap">
                <li>all House</li>
                <li>gryffindor</li>
                <li>ravenclaw</li>
                <li>hufflepuff</li>
                <li>slytherin</li>
              </ul>
            </li>
            <li className="lightBtn">
              <p>clothing</p>
              <ul className="snbWrap">
                <li>tshirt</li>
                <li>knit</li>
                <li>robe</li>
                <li>scarf</li>
                <li>hat</li>
                <li>gloves</li>
              </ul>
            </li>
            <li className="lightBtn">
              <p>wand</p>
              <ul className="snbWrap">
                <li>professor</li>
                <li>student</li>
              </ul>
            </li>
            <li className="lightBtn">
              <p>acc</p>
              <ul className="snbWrap">
                <li>bag</li>
                <li>keyring</li>
              </ul>
            </li>
            <li className="lightBtn">
              <p>toy</p>
              <ul className="snbWrap">
                <li>doll</li>
                <li>lego</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="loginWrap">
          <div className="loginBtn lightBtn">LOGIN</div>
          <div className="cart">
            <img
              src={process.env.PUBLIC_URL + "/img/suitcase.png"}
              alt="장바구니"
            />
            <span className="cartNum">0</span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 70px;
  color: var(--gold1);
  border-bottom: 1px solid var(--brown2);
  box-shadow:
    0 1px 100px 2px rgba(64, 54, 34, 0.5),
    0 1px 50px 5px rgba(211, 197, 168, 0.05);
  .headerContent {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logoWrap {
    width: 120px;
    min-width: 80px;
    img {
      display: block;
      width: 100%;
    }
  }
  .menuWrap {
    width: 100%;
    height: 60px;
    line-height: 60px;
    .gnbWrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .lightBtn {
        height: 100%;
        position: relative;
        z-index: 10;
        padding: 0 50px;
        box-sizing: border-box;
        text-transform: capitalize;
        &:hover {
          opacity: 1;
          text-shadow:
            0 0 40px rgba(255, 238, 216, 0.75),
            0 0 5px #000,
            0 0 10px rgba(255, 245, 192, 0.6);
          .snbWrap {
            display: block;
            text-shadow: none;
          }
        }
        .snbWrap {
          display: none;
          position: absolute;
          top: 64px;
          left: 0;
          width: 100%;
          text-align: center;
          li {
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            opacity: 0.9;
            background: var(--brown1);
            &:hover {
              opacity: 1;
              border-top: 1px solid var(--gold1);
              border-bottom: 1px solid var(--gold1);
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
  .loginWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
    .cart {
      position: relative;
      width: 28px;
      cursor: pointer;
      img {
        width: 100%;
      }
      .cartNum {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -55%);
        color: var(--brown1);
        font-size: var(--fs12);
        font-weight: bold;
        letter-spacing: -0.5px;
      }
    }
  }
  .lightBtn {
    opacity: 0.8;
    cursor: pointer;
  }
`;
