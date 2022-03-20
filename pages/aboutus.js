import React from "react";
import styles from "../styles/about.module.css";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import mypic from "../assests/About.jpg";
function aboutUs() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          SOLRISINGENERGY - SOL RISING ENERGY IS A SOLAR PANEL CONSULTING
          COMPANY - SOLAR QUOTES - ROOF REPAIR - IN FLORIDA - WHO WE ARE
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR WHO WE ARE DESCRIPTION OF THE COMPANY"
        />
        <meta
          property="og:title"
          content="SOLRISINGENERGY - SOLAR PANEL CONSULTING COMPANY - SOLAR QUOTES - IN FLORIDA - WHO WE ARE"
        />
        <meta
          property="og:description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR WHO WE ARE DESCRIPTION OF THE COMPANY"
        />
        <meta property="og:url" content="https://solrisingenergy.com/aboutus" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="5GkfI7mhao4rsZDdhGyjallo1_z6xeN5b7uhrXlhxEM"
        />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-P7DZC56"></script>
      </Head>

      <main>
        <div className={styles.landingdiv}>
          <Container fluid className={styles.Content}>
            <h1 data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="300">Who We Are...</h1>
          </Container>
        </div>
        <div className={styles.abouttext}>
          <div className={styles.description}>
            <Card data-aos="fade-up" className={styles.cardContainer}>
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-building"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                    />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg>
                </Card.Title>
                <Card.Title>SOL RISING ENERGY</Card.Title>
                <Card.Text>
                  Sol Rising Energy Group is a solar sales consulting company
                  based in Volusia County, Florida. Serving customers all around
                  the Central Florida area from east to west coast, Sol Rising
                  focuses on educating and supporting homeowners with their
                  transition to clean energy. The company is led by co-founders
                  Dawn Lopez and Jessica Nusbaum who started the company
                  together after experiencing frustration over the
                  misinformation and profit centered solar companies in the
                  industry. Sol Rising Energy is committed to walking the
                  homeowner through their transition to solar while supplying
                  them with high quality products and excellent customer
                  service.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div data-aos="fade-right" className={styles.imageContainer}>
            <Image
              src={mypic}
              height={600}
              width={400}
              alt="logo of company"
              className={styles.image}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default aboutUs;
