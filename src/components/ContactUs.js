import React, { useRef } from "react";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import { emailJSConfig } from "../config";

const ContactUs = ({ resumeData }) => {
  // let resumeData = props.resumeData;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const body = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    // console.log("body", body);

    emailjs
      .send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        body,
        emailJSConfig.userId
      )
      .then(
        (result) => {
          console.log("Email sended", result.text);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        {/* <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>Linked in :{resumeData.linkedinId}</h4>
          </div>
        </aside> */}
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <input
                required
                id="name" // id="outlined-required"
                type="text"
                placeholder="Enter your name..."
                label="Full name"
                // defaultValue="Hello World"
                fullWidth
                style={{ maxWidth: "400px" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <input
                required
                id="email"
                type="email"
                placeholder="name@example.com"
                label="Email address"
                fullWidth
                style={{ maxWidth: "400px" }}
                // sx={{ maxWidth: "sm" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <input
                required
                id="message"
                type="text"
                placeholder="Enter your message here..."
                label="Message"
                fullWidth
                style={{ maxWidth: "400px" }}
                // sx={{ height: "10rem", maxWidth: "sm" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <button variant="contained" id="submitButton" type="submit">
                Send
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
