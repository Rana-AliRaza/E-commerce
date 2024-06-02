import MainContent from "./components/content/MainContent.jsx";
import SaleBanner from "./components/SaleBanner.jsx";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import Favourite from "./components/content/Favourite.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import RSlider from "./components/header/RSlider.jsx";
import Cart from "./components/pages/Cart.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Register from "./components/pages/Login/Register.jsx";
import Account from "./components/pages/Account.jsx";
import PurchaseGuide from "./components/pages/PurchaseGuide.jsx";
import Privacy from "./components/pages/Privacy.jsx";
import Terms from "./components/pages/Terms.jsx";
import Error from "./components/pages/Error.jsx";
import Layout from "./components/Layout.jsx";
import Shop from "./components/Shop.jsx";
import Fashion from "./components/content/Fashion.jsx";
import Blog from "./components/pages/Blog.jsx";
import SideBar from "./components/header/SideBar.jsx";




function App() {
  const [showBanner, setShowBanner] = React.useState(true)
  return (
<div className="relative">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <div className="carouelSlider h-screen px-2 xl:px-4 w-11/12 mx-auto flex items-center justify-center">
                  <RSlider />
                </div>
                <MainContent />
                <div className={` ${showBanner === false ? "hidden" : "flex"} `}>
                  <div className="w-full h-full absolute top-0 z-40 flex justify-center ">
                    <SaleBanner className="m-20 relative" />
                    <div className="crossIcon top-28 border-4 border-white rounded-full p-2 absolute ">
                      <button
                        onClick={() => setShowBanner((previousState) => !previousState)}
                      >
                        <RxCross1 />
                      </button>
                    </div>
                  </div>
                </div>
              </Layout>
            }
          />
          <Route
            path="/favourite"
            element={
              <Layout>
                <Favourite />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/account"
            element={
              <Layout>
                <Account />
              </Layout>
            }
          />
          <Route
            path="/purchaseGuide"
            element={
              <Layout>
                <PurchaseGuide />
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/fashion"
            element={
              <Layout>
                <Fashion />
              </Layout>
            }
          />
          <Route
            path="/Blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App;
