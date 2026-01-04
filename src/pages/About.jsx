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
  height: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",

};
const cardStyle1 = {
  borderRadius: "16px",
  margin:"20px",
  background: "#f8fafc",
  height: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  minHeight: 420,

};
const bg = {
  background: "linear-gradient(135deg, #020617, #020617)",
  // maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px 20px"
}
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
            Backend-focused <strong style={{ color: "#1677ff" }}>Full Stack Developer</strong> with
            <strong style={{ color: "#1677ff" }}> 1.5+ years of professional experience</strong> building
            production-ready web applications, secure APIs, and dashboards.
            Experienced in <strong style={{ color: "#1677ff" }}>deploying and managing applications on cloud platforms </strong>
            including <strong style={{ color: "#1677ff" }}>AWS (EC2, S3)</strong>, <strong style={{ color: "#1677ff" }}>Vercel</strong>, and
            <strong style={{ color: "#1677ff" }}> Render</strong>, with hands-on exposure to containerization and
            basic CI/CD workflows.
          </Paragraph>

        </motion.div>
      </section>


      {/* QUICK INFO */}
      <section style={sectionStyle} >
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} md={8}>
            <Card
              style={cardStyle}
              bodyStyle={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Title level={4} style={{ color: "#1677ff" }}>
                Personal Info
              </Title>
              <Paragraph>
                <strong style={{ color: "#1677ff" }}>Name: </strong> Thulasi Shree Ganesan <br />
                <strong style={{ color: "#1677ff" }}>Role: </strong> Backend / Full Stack Developer <br />
                <strong style={{ color: "#1677ff" }}>Location: </strong> India <br />
                <strong style={{ color: "#1677ff" }}>Experience: </strong> 1.5+ Years
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={cardStyle}
              bodyStyle={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Title level={4} style={{ color: "#1677ff" }}>
                Education
              </Title>

              <Paragraph>
                <strong style={{ color: "#1677ff" }}>Master of Computer Applications (MCA)</strong><br />
                SRM University, 
                CGPA: 9.1
              </Paragraph>

              <Paragraph>
                <strong style={{ color: "#1677ff" }}>MSc Food & Nutrition</strong><br />
                Women’s Christian College, 
                CGPA: 7.17
              </Paragraph>

              <Paragraph>
                <strong style={{ color: "#1677ff" }}>BSc Clinical Nutrition & Dietetics</strong><br />
                SDNB Vaishnav College for women, 
                CGPA: 7.19
              </Paragraph>
              <Paragraph>
                <strong style={{ color: "#1677ff" }}>Higher Secondary Certificate</strong><br />
                Shri Anand Jain Vidyalaya, 
                Percentage: 84.75%
              </Paragraph>
              <Paragraph>
                <strong style={{ color: "#1677ff" }}>Secondary School Leaving Certificate</strong><br />
                SDA Matriculation School, 
                Percentage: 90.8%
              </Paragraph>

            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              style={cardStyle}
              bodyStyle={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Title level={4} style={{ color: "#1677ff" }}>
                Career Transition
              </Title>
              <Paragraph>
                Transitioned from a healthcare background into software development,
                bringing strong analytical thinking, discipline, and real-world
                problem-solving skills.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
      <Divider />

      {/* EXPERIENCE */}
      <section style={bg}>
        <Title level={3} style={{ color: "#1677ff" }}>
          Professional Experience
        </Title>

        <Row gutter={[24, 24]} align="stretch">
          {/* EXPERIENCE 1 */}
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={cardStyle1}
                bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Title level={4} style={{ color: "#1677ff" }}>
                  The Tech Horse
                </Title>
                <Text type="secondary">
                  Backend Developer • July 2025 – Present
                </Text>

                <ul style={{ marginTop: "12px" }}>
                  <li>Developing scalable backend services using Node.js & Express</li>
                  <li>Designing and maintaining RESTful APIs for client-server communication</li>
                  <li>Integrated Stripe for payments and Twilio for SMS & OTP verification</li>
                  <li>Implemented JWT authentication with hashing & salting</li>
                  <li>Maintaining MongoDB databases for performance and data integrity</li>
                </ul>
              </Card>
            </motion.div>
          </Col>

          {/* EXPERIENCE 2 */}
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={cardStyle1}
                bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Title level={4} style={{ color: "#1677ff" }}>
                  Bytone Global
                </Title>
                <Text type="secondary">
                  Software Engineer • Oct 2023 – Sep 2024
                </Text>

                <ul style={{ marginTop: "12px" }}>
                  <li>Worked on both frontend (React) and backend (Node.js)</li>
                  <li>Built and maintained REST APIs for seamless data exchange</li>
                  <li>Integrated Stripe payments and Twilio SMS services</li>
                  <li>Implemented Redux for efficient state management</li>
                  <li>Dockerized applications and deployed on AWS EC2 & S3</li>
                </ul>
              </Card>
            </motion.div>
          </Col>

          {/* EXPERIENCE 3 */}
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                style={cardStyle1}
                bodyStyle={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Title level={4} style={{ color: "#1677ff" }}>
                  Gleneagles Global Health City
                </Title>
                <Text type="secondary">
                  Dietitian • Dec 2021 – Mar 2023
                </Text>

                <ul style={{ marginTop: "12px" }}>
                  <li>Managed patient diet plans and nutritional counselling</li>
                  <li>Worked closely with doctors to support patient recovery plans</li>
                  <li>Developed strong analytical, communication, and documentation skills</li>
                  <li>Built the foundation for transitioning into tech problem-solving</li>
                </ul>
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
              <Card style={{
                borderRadius: "16px",
                height: "100%", background: "linear-gradient(135deg, #020617, #020617)",
              }}>
                <Title level={4} style={{ color: "#1677ff" }}>What I Do ? </Title>
                <ul style={{ color: "#white" }}>
                  <li style={{ color: "white" }}>Design and build secure REST APIs using Node.js & Express</li>
                  <li style={{ color: "white" }}>Develop backend logic for payroll, CRM, dashboards & workflows</li>
                  <li style={{ color: "white" }}>Integrate third-party services (Stripe, Twilio)</li>
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
              <Card style={{
                borderRadius: "16px",
                height: "100%", background: "linear-gradient(135deg, #020617, #020617)",
              }}>
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
        <Paragraph style={{ maxWidth: "850px", fontSize: "16px", color: "white" }}>
          I am seeking opportunities as a <strong>Cloud or Backend or Full Stack Developer </strong>
          where I can work on scalable systems, contribute to architecture decisions,
          and grow deeper into cloud and distributed systems.
        </Paragraph>
      </section>
    </div>
  );
}
