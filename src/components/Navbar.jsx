import { Layout, Space, Typography, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const { Header } = Layout;
const { Text } = Typography;

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#1677ff" : "#e5e7eb",
    fontWeight: location.pathname === path ? 600 : 400,
    fontSize: "16px"
  });

  const mobileLinkStyle = (path) => ({
    display: "block",
    marginBottom: "16px",
    fontSize: "16px",
    color: location.pathname === path ? "#1677ff" : "#020617",
    fontWeight: location.pathname === path ? 600 : 400
  });

  return (
    <>
      <Header
        style={{
          background: "#020617",
          borderBottom: "1px solid #1e293b",
          padding: "0 24px"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px"
          }}
        >
          {/* LOGO */}
          <Text style={{ color: "#e5e7eb", fontSize: "18px", fontWeight: 600 }}>
            Thulasi.dev
          </Text>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <Space size="large">
              <Link to="/" style={linkStyle("/")}>Home</Link>
              <Link to="/about" style={linkStyle("/about")}>About</Link>
              <Link to="/projects" style={linkStyle("/projects")}>Projects</Link>
              <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
            </Space>
          </div>

          {/* MOBILE HAMBURGER */}
          <MenuOutlined
            className="mobile-menu-icon"
            onClick={() => setOpen(true)}
            style={{
              fontSize: "22px",
              color: "#e5e7eb",
              cursor: "pointer"
            }}
          />
        </div>
      </Header>

      {/* MOBILE DRAWER */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        bodyStyle={{ padding: "24px" }}
      >
        <Link to="/" onClick={() => setOpen(false)} style={mobileLinkStyle("/")}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)} style={mobileLinkStyle("/about")}>
          About
        </Link>
        <Link to="/projects" onClick={() => setOpen(false)} style={mobileLinkStyle("/projects")}>
          Projects
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)} style={mobileLinkStyle("/contact")}>
          Contact
        </Link>
      </Drawer>
    </>
  );
}
