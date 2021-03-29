import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faCoffee} size="lg" />
        <Menu
          onSelect={(index) => {
            console.log(index);
          }}
          // mode="vertical"
          defaultOpenSubMenus={["3"]}
        >
          <MenuItem>link 1</MenuItem>
          <MenuItem disabled>link 2</MenuItem>
          <MenuItem>link 3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Button
          autoFocus
          onClick={(e) => {
            e.preventDefault();
            alert("123");
          }}
        >
          123
        </Button>
        <Button
          className="custom"
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
        >
          123
        </Button>
        <Button btnType={ButtonType.Link} href="https://baidu.com/" disabled>
          Baidu.com
        </Button>
        <Button btnType={ButtonType.Danger} disabled>
          123
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://baidu.com/"
          target="_blank"
        >
          Baidu.com
        </Button> */}
      </header>
    </div>
  );
}

export default App;
