import {
    Button,
    Typography,
    Space,
    Row,
    Col,
    Card,
    Divider,
    Image
} from "antd";

import {
    CodeOutlined,
    DatabaseOutlined,
    CloudOutlined
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
};


export default function Home() {
    return (
        <div style={{ background: "#f8fafc" }}>
            {/* HERO SECTION */}
            <div
                style={{
                    minHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #020617, #020617)"
                }}
            >
                <Row
                    align="middle"
                    justify="space-between"
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        width: "100%",
                        padding: "0 20px"
                    }}
                >

                    {/* LEFT: TEXT */}
                    <Col xs={24} md={13} style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}>



                        <Space direction="vertical" size="large">
                            <Title level={1} style={{ fontSize: "32px", color: "#cbd5f5" }}>
                                Hi, I’m{" "}
                                <span style={{ color: "#1677ff" }}>Thulasi Shree Ganesan</span>
                            </Title>

                            <Paragraph
                                style={{
                                    fontSize: "18px",
                                    color: "#cbd5f5",
                                    maxWidth: "520px"
                                }}
                            >

                                Full Stack Developer with hands-on experience in building
                                scalable web applications and deploying them on AWS cloud
                                infrastructure.
                            </Paragraph>

                            <Paragraph style={{ fontSize: "16px", color: "#1677ff" }}>
                                I specialize in <strong>MERN Stack</strong>, cloud deployment,
                                and DevOps practices like CI/CD, server setup, and production
                                optimization.
                            </Paragraph>

                            <Space wrap>
                                <Button type="primary" size="large" href="/projects">
                                    View Projects
                                </Button>


                                <Button
                                    size="large"
                                    type="default"
                                    href="/resume/Thulasi_Shree_Ganesan_Resume.pdf"
                                    target="_blank"
                                >
                                    View Resume
                                </Button>
                            </Space>

                        </Space>
                    </Col>
                    <Col
                        xs={24}
                        md={10}
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >

                        <Image
                            src="/images/developer-illustration.jpeg"
                            preview={false}
                            style={{
                                width: "100%",
                                marginTop: "20px",
                                marginBottom: "20px",
                                maxWidth: "280px",
                                borderRadius: "20px",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
                            }}
                        />

                    </Col>
                </Row>
            </div>

           {/* WHAT I DO */}
<section style={sectionStyle}>
  <Title style={{ color: "#1677ff" }} level={2}>
    What I Do ?
  </Title>

  <Row gutter={[24, 24]} align="stretch">
    {/* FRONTEND */}
    <Col xs={24} md={8} style={{ display: "flex" }}>
      <Card
        hoverable
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%"
        }}
        bodyStyle={{
          padding: "24px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CodeOutlined style={{ fontSize: "32px", color: "#1677ff" }} />
        <Title level={4} style={{ marginTop: "16px", color: "#1677ff" }}>
          Frontend Development
        </Title>
        <Paragraph style={{ flexGrow: 1 }}>
          Build responsive, accessible and user-friendly interfaces using
          React, modern JavaScript and component-based architecture.
        </Paragraph>
      </Card>
    </Col>

    {/* BACKEND */}
    <Col xs={24} md={8} style={{ display: "flex" }}>
      <Card
        hoverable
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%"
        }}
        bodyStyle={{
          padding: "24px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <DatabaseOutlined style={{ fontSize: "32px", color: "#1677ff" }} />
        <Title level={4} style={{ marginTop: "16px", color: "#1677ff" }}>
          Backend Development
        </Title>
        <Paragraph style={{ flexGrow: 1 }}>
          Design REST APIs, handle authentication, manage databases and build
          scalable backend systems using Node.js, Express and MongoDB.
        </Paragraph>
      </Card>
    </Col>

    {/* CLOUD */}
    <Col xs={24} md={8} style={{ display: "flex" }}>
      <Card
        hoverable
        style={{
          borderRadius: "12px",
          width: "100%",
          height: "100%"
        }}
        bodyStyle={{
          padding: "24px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CloudOutlined style={{ fontSize: "32px", color: "#1677ff" }} />
        <Title level={4} style={{ marginTop: "16px", color: "#1677ff" }}>
          Cloud & DevOps
        </Title>
        <Paragraph style={{ flexGrow: 1 }}>
          Deploy applications on AWS, configure servers, manage environments,
          and implement CI/CD pipelines for smooth releases.
        </Paragraph>
      </Card>
    </Col>
  </Row>
</section>



            {/* TECH STACK */}
            <section style={sectionStyle} >
                <Title style={{ color: "#1677ff" }} level={2}>Tech Stack</Title>

                <Row gutter={[24, 24]} align="stretch">
                    {/* FRONTEND */}
                    <Col xs={24} md={8}>
                        <Card
                            hoverable
                            style={{
                                borderRadius: "14px",
                                background: "#020617",
                                color: "#e5e7eb",
                                height: "100%"
                            }}
                            bodyStyle={{ padding: "28px" }}
                        >
                            <Title level={4} style={{ color: "#1677ff" }}>
                                Frontend
                            </Title>
                            <ul style={{ paddingLeft: "18px", color: "#cbd5f5" }}>
                                <li>React.js</li>
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>Redux</li>
                                <li>Bootstrap</li>
                                <li>HTML5, CSS3</li>
                                <li>Ant Design</li>
                            </ul>
                        </Card>
                    </Col>

                    {/* BACKEND */}
                    <Col xs={24} md={8}>
                        <Card
                            hoverable
                            style={{
                                borderRadius: "14px",
                                background: "#020617",
                                color: "#e5e7eb",
                                height: "100%"
                            }}
                            bodyStyle={{ padding: "28px" }}
                        >
                            <Title level={4} style={{ color: "#1677ff" }}>
                                Backend
                            </Title>
                            <ul style={{ paddingLeft: "18px", color: "#cbd5f5" }}>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>RESTful API Development</li>
                                <li>MongoDB</li>
                                <li>JWT Authentication (Encryption & Decryption)</li>
                                <li>WebSockets</li>
                                <li>Cron Automation</li>
                                <li>Stripe Payment Integration</li>
                                <li>Twilio (SMS & OTP)</li>
                                <li>SQL (Basic Queries)</li>
                                <li>Java & Python (Basics)</li>
                            </ul>
                        </Card>
                    </Col>

                    {/* CLOUD & TOOLS */}
                    <Col xs={24} md={8}>
                        <Card
                            hoverable
                            style={{
                                borderRadius: "14px",
                                background: "#020617",
                                color: "#e5e7eb",
                                height: "100%"
                            }}
                            bodyStyle={{ padding: "28px" }}
                        >
                            <Title level={4} style={{ color: "#1677ff" }}>
                                Cloud & Tools
                            </Title>
                            <ul style={{ paddingLeft: "18px", color: "#cbd5f5" }}>
                                <li>AWS EC2 & S3</li>
                                <li>Docker</li>
                                <li>Kubernetes (Basics)</li>
                                <li>Linux (Basics)</li>
                                <li>CI/CD (Basics)</li>
                                <li>Git & GitHub</li>
                                <li>Vercel & Render Deployment</li>
                                <li>Postman & API Testing</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </section>


            {/* CLOUD / DEVOPS HIGHLIGHT */}
            <section
                style={{
                    background: "linear-gradient(135deg, #020617, #020617)",
                    padding: "50px 20px"
                }}
            >
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <Title level={2} style={{ color: "#1677ff" }}>
                        Cloud & DevOps Experience
                    </Title>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "white",
                            maxWidth: "800px",
                            lineHeight: "1.8",
                            marginBottom: "16px"
                        }}
                    >
                        I have hands-on experience deploying full stack applications on AWS,
                        configuring EC2 instances, managing environment variables, and handling
                        production builds.
                    </p>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "white",
                            maxWidth: "800px",
                            lineHeight: "1.8"
                        }}
                    >
                        I focus on performance, security, and scalability to ensure applications
                        run reliably in production environments.
                    </p>
                </div>
            </section>

        </div>
    );
}
