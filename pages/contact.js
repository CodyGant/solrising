import styles from "../styles/contact.module.css";
import React, { useState } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import Head from "next/head";

function contact() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <div className={styles.background}>
      <Head>
        <title>
          SOLRISINGENERGY - SOL RISING ENERGY IS A SOLAR PANEL CONSULTING
          COMPANY - SOLAR QUOTES - ROOF REPAIR - IN FLORIDA - EMAIL US
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR USE OUR CONTACT FORM TO EMAIL US"
        />
        <meta
          property="og:title"
          content="SOLRISINGENERGY - SOLAR PANEL CONSULTING COMPANY - SOLAR QUOTES - IN FLORIDA - EMAIL US"
        />
        <meta
          property="og:description"
          content="SOL RISING ENERGY IS A SOLAR PANEL CONSULTING COMPANY WHO HELPS GET QUOTES FOR SOLAR AND ROOF REPAIR USE OUR CONTACT FORM TO EMAIL US"
        />
        <meta property="og:url" content="https://solrisingenergy.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="5GkfI7mhao4rsZDdhGyjallo1_z6xeN5b7uhrXlhxEM"
        />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-P7DZC56"></script>
      </Head>

      <main>
        <div className={styles.contactMain}>
          <Container className={styles.contactContainer}>
            <div className={styles.gap}></div>

            <CardGroup className={styles.containthiscard}>
              <Card
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="300"
                className={styles.test}
              >
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title className={styles.titleForm}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-envelope-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.76 2.76 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124c.146.277.329.556.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442c.22-.28.403-.56.55-.836L15 11.105V5.383l-3.002 1.801a2.76 2.76 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1H2Zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                      />
                    </svg>
                  </Card.Title>
                  <Card.Title className={styles.titleForm}>
                    SEND US A EMAIL
                  </Card.Title>
                  <Card.Text>
                    <div className={styles.flexing}>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="fullname">
                          Full name<span>*</span>
                        </label>
                        <input
                          className={styles.input}
                          type="text"
                          value={fullname}
                          onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                          name="fullname"
                        />
                        {errors?.fullname && <p>Fullname cannot be empty.</p>}

                        <label htmlFor="email">
                          E-mail<span>*</span>
                        </label>
                        <input
                          className={styles.input}
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {errors?.email && <p>Email cannot be empty.</p>}

                        <label htmlFor="subject">
                          Subject<span className="text-red-500">*</span>
                        </label>
                        <input
                          className={styles.input}
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                        />
                        {errors?.subject && <p>Subject cannot be empty.</p>}
                        <label htmlFor="message">
                          Message<span>*</span>
                        </label>
                        <textarea
                          className={styles.input}
                          name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></textarea>
                        {errors?.message && (
                          <p>Message body cannot be empty.</p>
                        )}
                        <div>
                          <button className={styles.contactbtn} type="submit">
                            {buttonText}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-send-check-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                            </svg>
                          </button>
                        </div>
                        <div>
                          {showSuccessMessage && (
                            <p>Thank you! Your Message has been delivered.</p>
                          )}
                          {showFailureMessage && (
                            <p>Oops! Something went wrong, please try again.</p>
                          )}
                        </div>
                      </form>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </main>
    </div>
  );
}
export default contact;
