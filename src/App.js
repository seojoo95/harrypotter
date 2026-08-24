import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import TopBtn from "./component/TopBtn";
import ScrollToTop from "./component/ScrollTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TopBtn />
    </>
  );
}

export default App;
