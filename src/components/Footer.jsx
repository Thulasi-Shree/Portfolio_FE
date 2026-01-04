import { Layout, Typography, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

export default function AppFooter() {
  return (
    <Footer
      style={{
        background: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "32px 16px",
        marginTop: "auto"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <Text style={{ color: "#e5e7eb", fontSize: "16px", fontWeight: 600 }}>
          Thulasi Shree Ganesan
        </Text>

        <Text style={{ color: "#94a3b8" }}>
          Full Stack • Backend • Cloud Developer
        </Text>

        <Space size="large">
          <a
            href="https://github.com/Thulasi-Shree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined style={{ fontSize: "20px", color: "#e5e7eb" }} />
          </a>

          <a
            href="https://linkedin.com/in/thulasi-shree-g-122b81203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined style={{ fontSize: "20px", color: "#e5e7eb" }} />
          </a>

          <a href="mailto:thulasi9941@gmail.com">
            <MailOutlined style={{ fontSize: "20px", color: "#e5e7eb" }} />
          </a>
        </Space>

        <Text style={{ color: "#64748b", fontSize: "13px" }}>
          © {new Date().getFullYear()} All rights reserved
        </Text>
      </div>
    </Footer>
  );
}
