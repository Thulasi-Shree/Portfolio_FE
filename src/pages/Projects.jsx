import { Card, Tag, Typography, Row, Col, Button } from "antd";

const { Title, Paragraph, Text } = Typography;

const projects = [
     {
        title: "Online Food Ordering Application",
        description:
            "An end-to-end food ordering platform with user ordering, cart management, and admin-side menu and order control.",
        features: [
            "Developed responsive frontend using React.",
            "Built backend APIs using Node.js and Express,  Payment Integration - stripe",
            "JWT-based authentication and authorization, encription and decripdiopn while sending in payload.",
            "Order placement, tracking, and cart management",
            "Deployed the application on AWS EC2",
            "Dockerized the application for consistent deployments"
        ],
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AWS EC2",
            "Docker",
            "JWT"
        ],
        type: "Full Stack Project (Frontend, Backend & Deployment)",
        demo: "http://3.144.1.219:8000"
    },

    {
        title: "Developer Portfolio Website",
        description:
            "My personal developer portfolio showcasing my professional experience, projects, technical skills, and contact functionality.",
        features: [
            "Responsive frontend built using React and Ant Design",
            "Projects, skills, and experience showcased in structured sections",
            "Contact form integrated with Node.js backend and email notifications",
            "Backend API deployed separately for scalability",
            "Clean UI focused on readability and professionalism"
        ],
        tech: [
            "React",
            "Ant Design",
            "Node.js",
            "Express.js",
            "Nodemailer"
        ],
        type: "Full Stack Project",
        demo: "https://<your-portfolio-domain>.vercel.app"
    },
    {
        title: "PayPlus – Payroll Management System",
        description:
            "A production-grade payroll management product for handling employee payroll processing, salary calculations, and compliance workflows.",
        features: [
            "Backend development for payroll and employee modules",
            "Secure REST APIs using Node.js and Express",
            "JWT-based authentication and authorization",
            "Scheduled payroll operations using cron jobs",
            "Deployed and maintained backend services"
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cron Jobs"],
        type: "Professional Project (Backend Developer - ongoing)",
        demo: "https://payplus.today/"
    },


    {
        title: "Bhabani Diagnostic Website – CMS & Analytics",
        description:
            "A diagnostic website backend system for managing blog content and tracking anonymous user views using IP-based analytics.",
        features: [
            "Developed backend APIs for blog content management",
            "Implemented anonymous view tracking using IP addresses",
            "Built an admin dashboard for content and analytics management",
            "Handled complete backend architecture independently"
        ],
        tech: ["Node.js", "Express.js", "MongoDB"],
        type: "Professional Project (Backend Developer)",
        demo: "https://bhabani-diagnostic-website.vercel.app"
    },

    {
        title: "Vertex Power – Service Workflow Management System",
        description:
            "A backend system for managing technician workflows, service requests, and complaint resolution for an electronics service company.",
        features: [
            "Designed backend architecture for worker workflow management",
            "Implemented dashboards for tracking service requests and status",
            "Built complete service flow using Express and Node.js",
            "Handled role-based access and operational logic"
        ],
        tech: ["Node.js", "Express.js", "MongoDB"],
        type: "Professional Project (Backend Developer)",
        demo: "https://dashboard.vertexpower.co.in/login"
    },

    {
        title: "Solar CRM System",
        description:
            "A complete CRM solution for a solar company to manage leads, customers, dashboards, and operational workflows.",
        features: [
            "Developed frontend dashboards for internal users",
            "Built backend APIs to manage complete business flow",
            "Handled end-to-end feature development across frontend and backend",
            "Implemented role-based dashboards and data flow"
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        type: "Full Stack Project (Frontend, Backend)",
        demo: "https://solar-crm-cyan.vercel.app"
    },
    {
        title: "Task Management System",
        description:
            "A project and task tracking system designed to help teams organize work, track progress, and manage deadlines efficiently.",
        features: [
            "Project and task CRUD operations",
            "Role-based access control",
            "Real-time task updates using WebSocket",
            "Automated reminders using cron jobs"
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "WebSocket"],
        type: "Backend Project",
        demo: "https://dashboard.payplus.today/login"
    },
    {
        title: "Divine Nutrition – Health & Nutrition Platform",
        description:
            "A health and nutrition consultation platform where users can book consultations, receive customized diet plans, and track progress through dashboards.",
        features: [
            "User consultation booking and management system",
            "Customized diet chart creation and delivery",
            "Admin and user dashboards for tracking consultations",
            "Backend APIs for handling bookings, users, and plans",
            "Currently under active development"
        ],
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT"
        ],
        type: "Full Stack Project (Ongoing - Freelancing)",
        demo: "https://divine-nutrition-fe.vercel.app"
    }

];



const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px"
};

export default function Projects() {
    return (
        <div style={{ background: "#f8fafc" }}>
            <section style={sectionStyle}>
                <Title level={2} style={{color: "#1677ff"}}>Projects</Title>
                <Paragraph style={{ maxWidth: "800px",  }}>
                    Below are some of the key projects I have worked on, showcasing my
                    experience in full stack development, backend architecture, and cloud
                    deployment.
                </Paragraph>

                <Row gutter={[24, 24]} style={{ marginTop: "32px" }}>
                    {projects.map((project, index) => (
                        <Col xs={24} md={12} key={index}>
                            <Card
                                hoverable
                                style={{
                                    borderRadius: "16px",
                                    height: "100%"
                                }}
                                bodyStyle={{
                                    padding: "28px",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <Title style={{color: "#1677ff"}} level={4}>{project.title}</Title>

                                <Text type="secondary">{project.type}</Text>

                                <Paragraph style={{ marginTop: "12px" }}>
                                    {project.description}
                                </Paragraph>

                                <Paragraph strong style={{ marginBottom: "8px", color: "#1677ff"}}>
                                    Key Features:
                                </Paragraph>

                                <ul style={{ paddingLeft: "18px", marginBottom: "16px" }}>
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <div style={{ marginTop: "auto" }}>
                                    <Paragraph strong>Tech Stack:</Paragraph>
                                    {project.tech.map((t) => (
                                        <Tag key={t} color="blue">
                                            {t}
                                        </Tag>
                                    ))}
                                </div>

                                {/* Optional buttons – enable later */}

                                {project.demo && (
                                    <div style={{ marginTop: "16px" }}>
                                        <Button
                                            type="link"
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Product Website
                                        </Button>
                                    </div>
                                )}


                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </div>
    );
}
