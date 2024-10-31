import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import You from "./pages/you";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  // const toggleMenu = () => {
  //   setCloseMenu(prevOpen => (prevOpen === '100px'? '250px' : '100px'));
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%', display: 'flex', height: 'calc(100vh - 56px)' }}>
          <Menu openMenu={openMenu} />
          <div style={{ width: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home openMenu={openMenu} />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/you" element={<You />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;