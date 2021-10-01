import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Timothy-Borja-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          
        </Row>
        <h3 className="resume-title"><br/>Experience<br/></h3>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <Resumecontent
              title="IT Helpdesk II - User Access Administrator"
              date="May 2019 - Present"
              content={[
                "Process New Starter Account, Leavers Accounts, Location & Job Change, Rehire, Name Change. Maintaining starter & leaver records for history & reports. Activating Office 365 licenses, Lync activated & enabling Enterprise voice, Printer Server Management, Creating Distribution groups & shared mailbox, giving access to shared mailbox within Office 365",
                "Administers different levels of access through Active Directory or tools that simulate the properties of Active Directory",
                "Oracle E-Business Suite Account Management",
                "Powershell Scripting",
                "Mobile Device Management",
                "Analyzes existing access profiles and identify key modifications that needs to be performed in order to fulfill corresponding security updates or changes based on user’s functional changes.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <Resumecontent
              title="IT Helpdesk I – Subject Matter Expert"
              date="Nov 2017 - May 2019"
              content={["Handled web, phone and email submitted incident tickets., Provide 24/7 IT helpdesk support to all client’s company related peripherals via remote software, ticketing, emails, chat or call. (USA, Australia)",
              "SAP, ASP, AS400 Oracle, Linux/Unix, SQL Plus User, Active Directory Users/Computer Account Management",
              "Guest Wireless Management, Quarantined Email Management, Airwatch/Intune Admin Management, RSA SecurID Console Admin Management",
              "Microsoft Authenticator (MFA) Support",
              "Cisco AnyConnect (VPN) Support",
              "Support MS Office 365(Skype for Business, Outlook, Word, Excel, Powerpoint, Teams)",
              "CyberArk Admin Account Management",
              "Remedy and RightNow Ticketing Tool Management",
              "SharePoint and Shared folder management",
              "Handling critical line for Plant Outage",
            ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
