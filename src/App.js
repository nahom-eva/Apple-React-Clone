import Alert from "./commonResource/Alert/Alert.js";
import SectionOne from "./commonResource/SectionOne/SectionOne.js";
import SectionTwo from "./commonResource/SectionTwo/SectionTwo.js";
import SectionThree from "./commonResource/SectionThree/SectionThree.js";
import SectionFour from "./commonResource/SectionFour/SectionFour.js";
import SectionFive from "./commonResource/SectionFive/SectionFive.js";
import SectionSix from "./commonResource/SectionSix/SectionSix.js";
import Mac from "./commonResource/Pages/Mac/Mac.js";
import Iphone from "./commonResource/Pages/Iphone/Iphone.js";
import Ipad from "./commonResource/Pages/Ipad/Ipad.js";
import Watch from "./commonResource/Pages/Watch/Watch.js";
import Tv from "./commonResource/Pages/TV/Tv.js";
import Music from "./commonResource/Pages/Music/Music.js";
import Support from "./commonResource/Pages/Support/Support.js";
import Cart from "./commonResource/Pages/Cart/Cart.js";
import Four04 from "./commonResource/Pages/Four04/Four04.js";
import SharedLayout from "./commonResource/SharedLayout.js";
import ProductPage from "./commonResource/Pages/ProductPage/ProductPage.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Alert /> <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
            </>
          }
        />
        <Route path="mac" element={<Mac />} />
        <Route path="iphones" element={<Iphone />} />
        <Route path="iphone/:productID" element={<ProductPage/>}/>
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="Music" element={<Music />} />
        <Route path="Support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
