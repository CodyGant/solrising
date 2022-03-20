import React from "react";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assests/logo.png";
import Image from "next/image";
import styles from "../styles/layout.module.css";
function navBar() {
  const router = useRouter();
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
      className={styles.navcontainer}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="dark"
        sticky="top"
        className={styles.navbar}
      >
        <Navbar.Brand href="/" className={styles.navlogo}>
          <Image src={logo} alt="logo of company" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.burgerNav}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={"me-auto"}></Nav>
          <Nav className={styles.navlink}>
            <Nav.Link href="/aboutus">ABOUT</Nav.Link>
            <Nav.Link onClick={() => router.push("/contact")}>
              CONTACT US
            </Nav.Link>
            <Nav.Link href="/service">SERVICES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default navBar;
