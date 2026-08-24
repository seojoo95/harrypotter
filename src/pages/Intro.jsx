import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContainer>
      <video muted autoPlay>
        <source src="" />
      </video>
      <motion.div
        className="logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "30%",
          transformOrigin: "center center",
        }}
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 3, delay: 1 }}
      >
        <img src={"img/Logo.png"} alt="logo" />
      </motion.div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .logo {
    position: absolute;
    img {
      display: block;
      width: 100%;
    }
  }
`;
