import Head from "next/head";
import { Card, Container, CardGroup, Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/layout.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import Image from "next/image";
import mypic from "../assests/try.jpg";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>
          SOL RISING ENERGY - SOL RISING ENERGY IS A SOLAR PANEL CONSULTING
          COMPANY.
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR"
        />
        <meta
          property="og:title"
          content="SOLRISINGENERGY - SOLAR PANEL CONSULTING COMPANY - SOLAR QUOTES - IN FLORIDA"
        />
        <meta
          property="og:description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR"
        />
        <meta property="og:url" content="https://solrisingenergy.com/" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="5GkfI7mhao4rsZDdhGyjallo1_z6xeN5b7uhrXlhxEM"
        />
      </Head>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.landing}>
            <Container fluid className={styles.landingContent}>
              <Row>
                <Col
                  fluid
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  className={styles.test}
                >
                  <div className={"row"}>
                    <h1> A Solar Sales Consulting Company</h1>
                  </div>

                  <div className={"row"}>
                    <p>
                      Serving customers all around the Central Florida area from
                      east to west coast.
                    </p>
                  </div>

                  <div className={"row"}>
                    <Button
                      className={styles.landingButton}
                      onClick={() => router.push("/contact")}
                    >
                      CONTACT US
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className={styles.services}>
            <Container fluid className={styles.cardContain}>
              <h1 data-aos="fade-down" className="dark-text header center">
                OUR SERVICES
              </h1>
              <CardGroup>
                <Card data-aos="flip-left" className={styles.cardContainer}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-person-workspace"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                      </svg>
                    </Card.Title>
                    <Card.Title>VIRTUAL CONSULTATION</Card.Title>
                    <Card.Text>
                      A free in-home or virtual consultation to define the needs
                      of the homeowner and to educate them on how solar works.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card data-aos="flip-right" className={styles.cardContainer}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-sun"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      </svg>
                    </Card.Title>
                    <Card.Title>CUSTOMIZED SOLAR PANEL SYSTEMS</Card.Title>
                    <Card.Text>
                      A customized solar panel system designed to offset the
                      current electricity bill. The panel placement will be
                      structured to ensure the maximum production of energy and
                      designed to be aesthetically pleasing to the homeowner.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>

              <CardGroup>
                <Card data-aos="flip-right" className={styles.cardContainer}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-envelope-paper-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
                        />
                      </svg>
                    </Card.Title>
                    <Card.Title>PERMITTING & HOA PAPERWORK</Card.Title>
                    <Card.Text>
                      All permitting and HOA paperwork to ensure a smooth
                      transition to solar.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card data-aos="flip-left" className={styles.cardContainer}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-house-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"
                        />
                      </svg>
                    </Card.Title>
                    <Card.Title>HIGH QUALITY INSTALLATION</Card.Title>
                    <Card.Text>
                      High quality installation of equipment that comes with a
                      25-year warranty and also a 25-year roof penetration
                      warranty.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
              <Button
                href="/service"
                target="_blank"
                variant="secondary"
                className={styles.cardBtn}
              >
                Learn More
              </Button>
              {"  "}
            </Container>
          </div>
          <div className={styles.misconceptions}>
            <Container fluid className={styles.bottom}>
              <Card data-aos="zoom-in" className={styles.notthesame}>
                <h1>ALL SOLAR COMPANIES ARE NOT THE SAME</h1>
                <Card.Body>
                  <Card.Title className={styles.cardIcon}>
                    <Image
                      className={styles.roundedfull}
                      src={mypic}
                      alt="photo of a house with solar panels"
                      layout="intrinsic"
                    />
                  </Card.Title>
                  <Card.Title className={styles.innerCard}>
                    CHOOSE A COMPANY WHO CARES
                  </Card.Title>
                  <Card.Text className={styles.cardtext}>
                    Due to increased popularity of solar energy, a consumer has
                    choices when it comes to choosing solar company. Your home
                    is your most cherished possession, and you want to make sure
                    your solar company understands that as well. Nothing is more
                    important than choosing a company that you can trust to
                    deliver quality products, customer service and installation.
                    Sol Rising Energy is committed to serving the homeowner and
                    partnering with only the highest rated installers in the
                    industry. For a free, customized savings report, contact Sol
                    Rising Energy today
                  </Card.Text>
                  <Button
                    href="/aboutus"
                    variant="secondary"
                    className={styles.bottomBtn}
                  >
                   LEARN MORE ABOUT US
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
      </main>
    </div>
  );
}
