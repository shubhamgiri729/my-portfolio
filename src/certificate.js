import React from "react";
import './certificate.css';

import DeloitteCert from "./certificates/Deloitte Australia’s Data Analytics job simulation on Forage-1.png";
import SimplilearnCert from "./certificates/Introduction to Front End Development.png"; 
import KotlinAndroidCert from "./certificates/Kotlin Android Development.jpg";
import AgenticAISeminarCert from "./certificates/Agentic AI Seminar by TEC CSI Commite.jpeg";
import ResponsiveWebCert from "./certificates/Responsive Web Design Certification.jpeg";
import HackwinCert from "./certificates/hackwin seminar participation.png";
import UnixAICert from "./certificates/Unix For AI Minds.png";
import AutonomousAICert from "./certificates/Building Autonomous AI Agent Seminar.png";
import SqlAdvancedCert from "./certificates/sql advanced certificate hackerrank.png";
import BuildItOnCert from "./certificates/Build-it ON participation certificate.pdf";
import AIRoboticsCert from "./certificates/AI and Robotics Webinar Macky's Tech.jpeg";
import AgenticAIStarterCert from "./certificates/Agentic AI Starter Course with Certification.jpeg";

const certificatesData = [
    {
        title: "Deloitte Australia’s Data Analytics job simulation",
        org: "Forage",
        type: "Completion",
        time: "Dec 2025",
        link: DeloitteCert
    },
    {
        title: "Google Cloud Arcade",
        org: "Google Cloud",
        type: "Skill Badges",
        time: "Dec 2025",
        link: "https://www.skills.google/public_profiles/f5667ea6-ed64-4ac0-9546-ce0a5d140fd3"
    },
    {
        title: "Introduction to Front End Development",
        org: "Simplilearn",
        type: "Completion",
        time: "Jan 2026",
        link: SimplilearnCert
    },
    {
        title: "Kotlin Android Development",
        org: "Udemy",
        type: "Completion",
        time: "Jan 2026",
        link: KotlinAndroidCert
    },
    {
        title: "Agentic AI Seminar",
        org: "TEC CSI Commite",
        type: "Seminar Participation",
        time: "Jan 2026",
        link: AgenticAISeminarCert
    },
    {
        title: "Responsive Web Design Certification",
        org: "Freecodecamp",
        type: "Completion",
        time: "Fab 2026",
        link: ResponsiveWebCert
    },
    {
        title: "Hackwin seminar participation",
        org: "TEC CSI Commite",
        type: "Seminar Participation",
        time: "Fab 2026",
        link: HackwinCert
    },
    {
        title: "Unix For AI Minds",
        org: "AIBL",
        type: "Participation",
        time: "Fab 2026",
        link: UnixAICert
    },
    {
        title: "Building Autonomous AI Agent Seminar",
        org: "TEC CSI Commite",
        type: "Seminar Participation",
        time: "Fab 2026",
        link: AutonomousAICert
    },
    {
        title: "SQL Advanced Certificate",
        org: "Hackerrank",
        type: "Completion",
        time: "March 2026",
        link: SqlAdvancedCert
    },
    {
        title: "Build-it ON participation certificate",
        org: "Unstop",
        type: "Hackthon Participation",
        time: "March 2026",
        link: BuildItOnCert
    },
    {
        title: "AI and Robotics Webinar Macky's Tech",
        org: "Macky`s Society",
        type: "Webinar Participation",
        time: "March 2026",
        link: AIRoboticsCert
    },
    {
        title: "Agentic AI Starter Course with Certification",
        org: "Saumya Singh",
        type: "Completion",
        time: "April 2026",
        link: AgenticAIStarterCert
    }
];

export default function Certificate() {
    // Helper function to handle opening files/links in a new tab safely
    const openCertificate = (url) => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        } else {
            alert("Certificate file link not configured yet.");
        }
    };

    return (
        <>
            <div id="certificate-container">
                <h1>Certifications & Licence</h1>
                <div id="sectionContainer">
                    {certificatesData.map((cert, index) => (
                        <section key={index} className="certificate-section">
                            <h2>{cert.title}</h2>
                            <p className="organization">{cert.org}</p>
                            <section className="sub-section">
                                <p className="type">{cert.type}</p>
                                <p className="time">{cert.time}</p>
                            </section>
                            <button onClick={() => openCertificate(cert.link)}>
                                View Certificate
                            </button>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
}