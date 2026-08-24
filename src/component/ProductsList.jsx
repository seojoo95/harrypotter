import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

export function ProductsList() {
  const { flatProducts } = useContext(ProductsContext);
  const { gnb } = useParams();

  const cateFilter = [...new Set(flatProducts.map((cate) => cate.category))];
  const sortCate = [...cateFilter].sort((a, b) => a.localeCompare(b));

  //카테고리별 상품 갯수
  const productsCount = (cate) => {
    return flatProducts.filter((p) => p.category === cate).length;
  };

  // 체크 박스 필터
  const [filterChecked, setFilterChecked] = useState([]);

  const handleFilter = (e) => {
    // 체크되면 state에 값 추가, state값을 map을 돌려서 데이터값이랑 같으면 보이기

    const value = e.target.value;

    setFilterChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const productsResult = flatProducts.filter((p) => {
    const cateMatch =
      filterChecked.length === 0 || filterChecked.includes(p.category);

    const gnbMatch = gnb === "all" || p.category === gnb;

    return cateMatch && gnbMatch;
  });
  // const cateProdcuts = flatProducts.filter((cate) =>
  //   filterChecked.includes(cate.category),
  // );
  // const productsResult =
  //   filterChecked.length === 0 ? flatProducts : cateProdcuts;

  //상품 정렬
  const sortProductsResult = [...productsResult].sort(
    (a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id),
  );

  return (
    <CategoryWrap>
      <div className="categoryContWrap">
        <div className="filterWrap">
          <h3 className="categoryTit">
            All<span className="categoryNum">({flatProducts.length})</span>
          </h3>
          <div className="categoryListWrap">
            <ul className="categoryList">
              {sortCate.map((cate) => (
                <li key={cate}>
                  <div className="categoryCheck">
                    <input
                      className="checkInput"
                      id={cate}
                      value={cate}
                      type="checkbox"
                      onChange={handleFilter}
                    />
                    <label className="checkBoxLabel" htmlFor={cate}>
                      <div className="categoryInfo">
                        <span className="tit">{cate}</span>
                        <span className="num">({productsCount(cate)})</span>
                      </div>
                      <span className="customCheckBox"></span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="productWrapListWrap">
          <div className="selectWrap">
            <div className="customSelect">
              <p className="selectOption">가격 높은순</p>
              <span className="downIcon"></span>
            </div>
            <div className="optionWrap">
              <ul>
                <li className="option">가격 높은순</li>
                <li className="option">가격 낮은순</li>
              </ul>
            </div>
          </div>
          <ul className="productList">
            {sortProductsResult.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <div className="productWrap">
                    <div className="imgWrap">
                      <div className="imgFrameWrap">
                        <img
                          className="imgFrame"
                          src="/img/frame.svg"
                          alt="이미지 프레임"
                        />
                        <img
                          className="itemImg"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="priceWrap">
                      <p className="priceTit">{item.title}</p>
                      <p>&#8361;{item.price.toLocaleString()}원</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
            {/*
                li에 cate에 모든 상품은 뿌려주는데 체크박스가 체크가 되면 해당되는 cate의 이름과 같은 cate만 뽑아서 보여줘야힘
                */}
          </ul>
        </div>
      </div>
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  .categoryContWrap {
    display: flex;
    gap: 150px;
    width: 80%;
    margin: 0 auto;
    padding: 80px 0;
    color: var(--gold1);
    .filterWrap {
      width: 190px;
    }
    .categoryTit {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: var(--fs22);
      font-weight: normal;
      .categoryNum {
        font-size: var(--fs18);
        margin-left: 3px;
      }
    }
    .categoryList li {
      margin: 20px 2px;
      .categoryInfo {
        display: flex;
        align-items: center;
        .tit {
          font-size: var(--fs16);
          text-transform: capitalize;
        }
        .num {
          font-size: var(--fs14);
          margin-left: 2px;
        }
      }
    }
  }
  .productWrapListWrap {
    width: calc(100% - 190px);
    max-width: none;
    margin: 0;
    margin-bottom: 150px;
    .productList {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 50px;
      list-style: none;
      padding: 0;
      /* display: flex;
      flex-wrap: wrap;
      gap: 80px 50px;
      padding: 0; */
      li {
        /* width: calc((100% / 4) - 50px); */
      }
    }
  }
  .categoryCheck {
    position: relative;
    .checkInput {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    .checkBoxLabel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      cursor: pointer;
      .customCheckBox {
        display: block;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 2px;
        cursor: pointer;
      }
    }
    .checkInput:checked + .checkBoxLabel {
      .customCheckBox {
        background-image: url("/img/checked.svg");
        background-position: center;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }
    }
  }
  .selectWrap {
    position: relative;
    width: 120px;
    margin-left: calc(100% - 120px);
    margin-bottom: 30px;
    .customSelect {
      position: relative;
      width: 100%;
      padding: 5px 12px;
      border-radius: 5px;
      background-color: var(--brown1);
      border: 1px solid var(--gold2);
      color: var(--gold1);
      cursor: pointer;
    }
    .customSelect.on {
      box-shadow:
        0 0 3px rgba(255, 238, 216, 0.09),
        0 0 15px rgba(180, 163, 140, 0.4),
        0 0 3px #000;
    }
    .downIcon {
      position: absolute;
      top: 45%;
      right: 12px;
      border-top: 5px solid var(--gold1);
      border-bottom: 5px solid transparent;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
    }
    .optionWrap {
      position: absolute;
      top: calc(100% + 1px);
      z-index: 10;
      width: 100%;
      background-color: var(--brown1);
      border: 1px solid var(--gold2);
      border-radius: 5px;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
      .option {
        width: 100%;
        padding: 10px 12px;
        border-bottom: 1px solid var(--gold2);
        cursor: pointer;
        &:hover {
          background-color: var(--brown2);
        }
      }
    }
  }
`;
