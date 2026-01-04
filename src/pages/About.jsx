import { Typography, Row, Col, Card, Divider } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

const sectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px 20px"
};

const cardStyle = {
  borderRadius: "16px",
  height: "100%"
};

export default function About() {
  return (
    <div style={{ background: "#f8fafc" }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title style={{ color: "#1677ff" }} level={2}>About Me</Title>
          <Paragraph style={{ maxWidth: "850px", fontSize: "16px" }}>
            Backend-focused <strong>Full Stack Developer</strong> with
            <strong> 1.5+ years of professional experience</strong> building
            production-ready web applications, APIs, and dashboards.
          </Paragraph>
        </motion.div>
      </section>

      {/* QUICK INFO */}
      <section style={sectionStyle}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card style={cardStyle}>
                <Title style={{ color: "#1677ff" }} level={4}>Personal Info</Title>
                <Paragraph>
                  <Text strong>Name:</Text> Thulasi Shree Ganesan <br />
                  <Text strong>Role:</Text> Backend / Full Stack Developer <br />
                  <Text strong>Location:</Text> India <br />
                  <Text strong>Experience:</Text> 1.5+ Years
                </Paragraph>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card style={cardStyle}>
                <Title level={4} style={{ color: "#1677ff" }}>Education</Title>
                <Paragraph>
                  <strong>Master of Computer Applications (MCA)</strong> <br />
                  SRM University <br />
                  CGPA: <strong>9.1</strong>
                </Paragraph>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Card style={cardStyle}>
                <Title level={4} style={{ color: "#1677ff" }}>Career Transition</Title>
                <Paragraph>
                  Transitioned from a healthcare background into software
                  development, bringing strong analytical thinking and
                  real-world problem-solving skills.
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* PROFESSIONAL SUMMARY */}
      <section style={sectionStyle}>
        <Title level={3} style={{ color: "#1677ff" }}>Professional Summary</Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card style={{ borderRadius: "16px",
  height: "100%", background: "linear-gradient(135deg, #020617, #020617)",}}>
                <Title level={4} style={{ color: "#1677ff" }}>What I Do ? </Title>
                <ul style={{ color: "#white" }}>
                  <li style={{ color: "white" }}>Design and build secure REST APIs using Node.js & Express</li>
                  <li  style={{ color: "white" }}>Develop backend logic for payroll, CRM, dashboards & workflows</li>
                  <li  style={{ color: "white" }}>Integrate third-party services (Stripe, Twilio)</li>
                  <li style={{ color: "white" }}>  Handle authentication using JWT encryption & decryption</li>
                  <li style={{ color: "white" }}> Deploy applications on AWS, Vercel & Render</li>
                </ul>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card style={{ borderRadius: "16px",
  height: "100%", background: "linear-gradient(135deg, #020617, #020617)",}}>
                <Title style={{ color: "#1677ff" }} level={4}>Projects & Domains</Title>
                <ul style={{ color: "white" }}>
                  <li style={{ color: "white" }}>Payroll & Employee Management Systems</li>
                  <li style={{ color: "white" }}>Food Ordering & Payment Platforms</li>
                  <li style={{ color: "white" }}>Healthcare & Nutrition Consultation Systems</li>
                  <li style={{ color: "white" }}>Service Workflow & Complaint Management</li>
                  <li style={{ color: "white" }}>CMS & Analytics Dashboards</li>
                </ul>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* CERTIFICATIONS & LEARNING */}
      <section style={sectionStyle}>
        <Title style={{ color: "#1677ff" }} level={3}>Certifications & Continuous Learning</Title>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card style={cardStyle}>
              <ul>
                <li>Full Stack Development (MERN Stack)</li>
                <li>Hands-on Cloud Deployment (AWS, Vercel, Render)</li>
                <li>Docker & Containerization (Practical Usage)</li>
                <li>API Security & Authentication (JWT)</li>
              </ul>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card style={cardStyle}>
              <Paragraph>
                I continuously improve my skills by building real-world products,
                working on production systems, and staying updated with modern
                backend and cloud practices.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <Divider />

      {/* CAREER GOAL */}
      <section
        style={{
          background: "linear-gradient(135deg, #020617, #020617)",
          padding: "40px 20px", 
          margin: "auto",
          alignItems: "center"
        }}
      >
        <Title style={{ color: "#1677ff" }} level={3}>Career Goals</Title>
        <Paragraph style={{ maxWidth: "850px", fontSize: "16px" , color : "white"}}>
          I am seeking opportunities as a <strong>Cloud or Backend or Full Stack Developer </strong>
          where I can work on scalable systems, contribute to architecture decisions,
          and grow deeper into cloud and distributed systems.
        </Paragraph>
      </section>
    </div>
  );
}
