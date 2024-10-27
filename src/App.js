import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  // const toggleMenu = () => {
  //   setCloseMenu(prevOpen => (prevOpen === '100px'? '250px' : '100px'));
  // };

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu openMenu={openMenu} />
        <div style={{ backgroundColor: 'blue', width: '100%' }}>

        </div>
      </div>
    </div>
  );
}

export default App;