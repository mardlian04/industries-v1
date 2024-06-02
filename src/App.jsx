import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../../pages/HomePages";
import KontenPage from "../../pages/KontenPages";
import ShopPage from "../../pages/ShopPages";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import SponsorComponent from "../../components/SponsorComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/KontenPage" Component={KontenPage} />
        <Route path="/ShopPage" Component={ShopPage} />
      </Routes>

      <SponsorComponent />
      <FooterComponent />
    </>
  );
}

export default App;
