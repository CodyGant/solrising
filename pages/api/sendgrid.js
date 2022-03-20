import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    await sendgrid.send({
      to: "info@solrisingenergy.com.test-google-a.com", // Your email where you'll receive emails
      from: "info@solrisingenergy.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html lang="en">
       <head>
         <meta charset="utf-8">

         <title>The HTML5 Herald</title>
         <meta name="description" content="The HTML5 Herald">
         <meta name="author" content="SitePoint">
       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

         <link rel="stylesheet" href="css/styles.css?v=1.0">

       </head>

      <body>
     <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
               </div>
               <div class="container" style="margin-left: 20px;margin-right: 20px;">
               <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
               <div style="font-size: 16px;">
               <p>Message:</p>
               <p>${req.body.message}</p>
               <br>
               </div>
               <img src="https://solrisingenergy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f8ece468.png&w=3840&q=75" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
               <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>SolRisingEnergy.com<br></p>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

// export default async (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Message: ${body.message}
//   `;

//   await mail.send({
//     to: 'info@solrisingenergy.com.test-google-a.com',
//     from: 'info@solrisingenergy.com',
//     subject: 'New Message!',
//     text: message,
//     // html: message.replace(/\r\n/g, '<br>'),
//     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//       <html lang="en">
//       <head>
//         <meta charset="utf-8">

//         <title>The HTML5 Herald</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>You've got new mail from <br>${ message.replace(/\r\n/g, '<br>')} </h3>
//               <div style="font-size: 16px;">

//               <br>
//               </div>
//               <img src="https://solrisingenergy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f8ece468.png&w=3840&q=75" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
//               <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>SolRisingEnergy.com<br></p>
//               <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
//                 <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
//                 <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
//                 <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
//                 <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
//                 <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
//                 <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

//               </div>
//               </div>
//       </body>
//       </html>`,
//     });

//   res.status(200).json({ status: 'Ok' });
// }
