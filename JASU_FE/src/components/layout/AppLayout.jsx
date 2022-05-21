import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const sidebarNavItemsAdmin = [
  {
    display: "Quản lý người dùng",
    icon: <i className="bx bx-star"></i>,
    to: "/userControl",
    section: "userControl",
  },
  {
    display: "Quản lý lớp",
    icon: <i className="bx bx-calendar"></i>,
    to: "/classControl",
    section: "classControl",
  },
];

const sidebarNavItemsGuests = [
  {
    display: "Trang chủ",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "home",
  },
  {
    display: "Tìm gia sư",
    icon: <i className="bx bx-star"></i>,
    to: "/findJasu",
    section: "findJasu",
  },
  {
    display: "Tìm lớp",
    icon: <i className="bx bx-calendar"></i>,
    to: "/findClass",
    section: "findClass",
  },
  {
    display: "Đăng nhập",
    icon: <i className="bx bx-user"></i>,
    to: "/login",
    section: "login",
  },
];
const sidebarNavItemsUsers = [
  {
    display: "Trang chủ",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "home",
  },
  {
    display: "Tìm gia sư",
    icon: <i className="bx bx-star"></i>,
    to: "/findJasu",
    section: "findJasu",
  },
  {
    display: "Tìm lớp",
    icon: <i className="bx bx-calendar"></i>,
    to: "/findClass",
    section: "findClass",
  },
  {
    display: "Cá nhân",
    icon: <i className="bx bx-user"></i>,
    to: "/user",
    section: "user",
  },
];

const AppLayout = ({ isAccess = "0" }) => {
  if (isAccess === "0902") {
    return (
      <div
        style={{
          padding: "0px 0px 0px 13,5%",
        }}
      >
        <Sidebar sidebarNavItems={sidebarNavItemsAdmin} />
        <Outlet />
      </div>
    );
  } else if (isAccess === "1") {
    return (
      <div
        style={{
          padding: "0px 0px 0px 13,5%",
        }}
      >
        <Sidebar sidebarNavItems={sidebarNavItemsUsers} />
        <Outlet />
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: "0px 0px 0px 13,5%",
        }}
      >
        <Sidebar sidebarNavItems={sidebarNavItemsGuests} />
        <Outlet />
      </div>
    );
  }
};

export default AppLayout;
