import { FaXTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterWrap>
            <div className="footerContent">
                <div className="leftContents">
                    <h1 className="logo"><img src="/img/ww-logo.svg" alt="wizard logo"/></h1>
                    <ul className="snsList">
                        <li><a href="https://x.com/harrypottershop" target="_blank"><FaXTwitter /></a></li>
                        <li><a href="https://www.instagram.com/harrypottershop/#" target="_blank"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/harrypottershop" target="_blank"><FaFacebook /></a></li>
                        <li><a href="https://www.tiktok.com/@harrypottershop" target="_blank"><FaTiktok /></a></li>
                    </ul>
                </div>
                <div className="rightContents">
                    <div className="footerInfoWrap">
                        <div className="shopInfo">
                            <div className="infoTit">Shops</div>
                            <ul className="infoList">
                              <li><a href="" target="_blank">About Us</a></li>
                              <li><a href="" target="_blank">Harry Potter Shop King's Cross</a></li>
                              <li><a href="" target="_blank">Harry Potter Shop New York</a></li>
                              <li><a href="" target="_blank">Harry Potter Shop Chicago</a></li>
                              <li><a href="" target="_blank">Harry Potter Shop Akasaka</a></li>
                              <li><a href="" target="_blank">Harry Potter Shop Harajuku</a></li>
                              <li><a href="" target="_blank">Warner Bros. Studio Tour London</a></li>
                              <li><a href="" target="_blank">Warner Bros. Studio Tour Tokyo</a></li>
                            </ul>
                        </div>
                        <div className="customerInfo">
                            <div className="infoTit">Customer Service</div>
                            <ul className="infoList">
                              <li><a href="" target="_blank">FAQs</a></li>
                              <li><a href="" target="_blank">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="legalInfo">
                            <div className="infoTit">Legal</div>
                            <ul className="infoList">
                              <li><a href="" target="_blank">Terms of Use</a></li>
                              <li><a href="" target="_blank">Terms of Purchase</a></li>
                              <li><a href="" target="_blank">Modern Slavery Act Transparency Statement</a></li>
                              <li><a href="" target="_blank">Privacy Policy</a></li>
                              <li><a href="" target="_blank">Ad Choices</a></li>
                              <li><a href="" target="_blank">Cookie Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}
const FooterWrap = styled.footer`
    width: 100%;
    height: 260px;
    border-top: 1px solid var(--gold3);
    margin: 0 auto;
    .footerContent{
        width: 80%;
        margin: 0 auto;
        padding: 80px 0;
        display: flex;
        align-items: flex-start;

        .leftContents{
            width:25%;

            .logo{
                width: 150px;
                img{
                    width: 100%;
                }
            }
            .snsList{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 150px;
                margin-top: 24px;
                font-size: 20px;

                li{
                    opacity: 0.75;
                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }

        .rightContents{
            width: 75%;

            .footerInfoWrap{
                display: flex;
                align-items: flex-start;
                gap: 14%;

                .infoTit{
                    margin-bottom: 22px;
                    font-size: var(--fs16);
                    font-weight: bold;
                    color: var(--gold1);
                }
                .infoList li{
                    margin-bottom: 16px;
                    opacity: 0.75;

                    &:last-of-type{
                        margin-bottom: 0;
                    }

                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
`