import { Form, Input, Button, Typography, Row, Col, Card, message } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const sectionStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "60px 20px"
};

// 🔴 CHANGE THIS TO YOUR RENDER BACKEND URL
const API_URL = "https://portfolio-be-eyih.onrender.com/api/contact";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#f8fafc" }}>
      <section style={sectionStyle}>
        <Title style={{ color: "#1677ff" }} level={2}>
          Contact Me
        </Title>

        <Paragraph style={{ maxWidth: "700px" }}>
          Feel free to reach out if you have an opportunity, project idea, or
          just want to connect. I’m open to full-stack, backend, and cloud-focused
          roles.
        </Paragraph>

        <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
          {/* LEFT: CONTACT FORM */}
          <Col xs={24} md={14}>
            <Card style={{ borderRadius: "16px" }} bodyStyle={{ padding: "32px" }}>
              <Form
                layout="vertical"
                onFinish={onFinish}
                form={form}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Enter a valid email address" }
                  ]}
                >
                  <Input placeholder="your@email.com" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Tell me about your requirement or opportunity"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Card>
          </Col>

          {/* RIGHT: CONTACT INFO */}
          <Col xs={24} md={10}>
            <Card
              style={{ borderRadius: "16px", height: "100%" }}
              bodyStyle={{ padding: "32px" }}
            >
              <Title style={{ color: "#1677ff" }} level={4}>
                Let’s Connect
              </Title>

              <Paragraph>
                I’m currently working as a Backend / Full Stack Developer and open
                to discussing new opportunities, collaborations, or freelance
                projects.
              </Paragraph>

              <Paragraph>
                <Text style={{ color: "#1677ff" }} strong>Email:</Text>{" "}
                thulasi9941@gmail.com
                <br />
                <Text style={{ color: "#1677ff" }} strong>Location:</Text>{" "}
                Chennai, India
              </Paragraph>

              <Paragraph>
                You can also reach out via LinkedIn or GitHub.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}
