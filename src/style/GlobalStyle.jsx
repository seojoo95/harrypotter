import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* 공통 컬러 값*/
:root{
    --white:#fff;
    --black1:#111;
    --black2:#333;
    --gold1:#fff0d1;
    --gold2:#d3c5a8;
    --gold3:#96752f;
    --brown1:#22211e;
    --brown2:#403622;
    --red:#831d28;

    --fs12: 0.857rem;
    --fs14: 1rem;    
    --fs16: 1.143rem;   
    --fs18: 1.286rem;   
    --fs20: 1.429rem;
    --fs22: 1.571rem;
    --fs24: 1.714rem;
    --fs26: 1.857rem;
    --fs28: 2rem;
    --fs30: 2.143rem;
    --fs32: 2.286rem;
    --fs34: 2.714rem;
    --fs36: 2.857rem;
    --fs38: 3rem;
    --fs40: 3.143rem;
}

*{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration: none;
    box-sizing: border-box;
}
html{
    word-break: keep-all;
    background: var(--brown1);
    line-height: 1.4;
    letter-spacing: -0.2px;
    font-size: clamp(12px, 2vw, 14px);
}
body{
    font-size: 1rem;
}
h1,h2,h3,h4, p{
    color: var(--gold1);
}
a{
    color: var(--gold1);
    text-decoration: none;
}
button{
    background: none;
    outline: none;
    border: none;
    border-radius: 5px;
    color: var(--gold1);
    cursor: pointer;
    letter-spacing: 1.5px;
}
.goldBtn{
    width: fit-content;
    padding: 15px 25px;
    border: 1px solid var(--gold2);
    transition: 300ms;
    &:hover{
        border: 1px solid transparent;
        background-color: var(--gold3);
    }
}
.productWrapListWrap{
    width: 100%;
    max-width: 1500px;
    margin: 130px auto;
    .productTit{
        width: fit-content;
        position: relative;
        margin: 0 auto;
        margin-bottom: 40px;
        padding: 0 20px;
        font-size: var(--fs32);
        text-transform: capitalize;
        text-align: center;
    }
    .productTit:before,
    .productTit:after{
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        left: -42px;
        transform: translateY(-50%);
        background: url('/img/titIcon_1.png')no-repeat center / contain;
    }
    .productTit:after{
        left: auto;
        right: -40px;
        transform: translateY(-48%);
        background-image: url('/img/titIcon_1.png');
    }
    .productList{
       padding: 0 35px;
       .productWrap{
        text-align: center;
        cursor: pointer;
    .priceWrap{
        padding-top: 20px;
        p{
            padding-top: 8px;
            font-size: var(--fs16);
            font-weight: bold;
        }
        .priceTit{
            font-weight: normal;
        }
    }
    }
    }

}
.imgWrap{
        height: 100%;
        img{
            display: block;
        }
        .imgFrameWrap{
            position: relative;
            .imgFrame{
                width: 100%;
            }
            .itemImg{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 95%;
            }
        }
}
.swiper .swiper-button-prev,
.swiper .swiper-button-next{
    top: calc((100% - 84px) / 2);
    color: var(--gold2);
    width: 20px;
    svg{
        fill: var(--gold2);
    }
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-button-disabled{
        opacity: 0;
    }
.swiper-pagination{
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    .swiper-pagination-bullet{
        width: 10px;
        height: 10px;
        margin: 0 8px;
        background: var(--gold1);
    }
}
`;

export default GlobalStyle;
