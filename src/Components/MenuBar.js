import "../Assets/CSS/style.css";
import logo from "../Assets/Images/kyro.png";
import {
  Menu,
  Logout,
  Home,
  Dashboard,
  ReceiptLong,
  Message,
  Assignment,
  CorporateFare,
  SettingsRounded,
} from "@mui/icons-material";
import MenuItem from "./MenuItem";

const MenuBar = () => {
  return (
    <div className="container vh-100 text-muted">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} alt="Kyro Logo" width="125px"></img>
        </div>
        <div>
          <Menu fontSize="large" />
        </div>
      </div>
      <div className="menu-item mt-5 ">
        <ul>
          <MenuItem icon={<Home color="disabled" />} name="Home" />
          <MenuItem icon={<Assignment color="disabled" />} name="Projects" />
          <MenuItem icon={<Dashboard color="disabled" />} name="Dashboard" />
          <MenuItem icon={<Message color="disabled" />} name="Messages" />
          <MenuItem icon={<ReceiptLong color="disabled" />} name="Documents" />
          <MenuItem
            icon={<CorporateFare color="disabled" />}
            name="Organizations"
          />
          <MenuItem
            icon={<SettingsRounded color="disabled" />}
            name="Settings"
          />
        </ul>
      </div>
      <div className="logout_btn">
        <MenuItem icon={<Logout color="disabled" />} name="Logout" />
      </div>
    </div>
  );
};

export default MenuBar;
