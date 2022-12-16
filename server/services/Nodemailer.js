const nodemailer = require("nodemailer");
console.log("yoyu Are In EMailsend File ====================");
// async..await is not allowed in global scope, must use a wrapper
const Nodemailer = async (data) => {
    const { email, ToEmails, company_name, contact_number, location } = data;
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@", data)
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "souravsh8908@gmail.com", // generated ethereal user
            pass: "smnrptsxycqiinwv", // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: email, // sender address
        to: ToEmails, // list of receivers
        subject: "Congratulation we are interested in your Details", // Subject line
        html: `<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
            <table
                class="main contenttable"
                align="center"
                style="
            font-weight: normal;
            border-collapse: collapse;
            border: 0;
            margin-left: auto;
            margin-right: auto;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #555559;
            background-color: white;
            font-size: 16px;
            line-height: 26px;
            width: 600px;
          "
            >
                <tr>
                    <td
                        class="border"
                        style="
                border-collapse: collapse;
                border: 1px solid #eeeff0;
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: none;
                color: #555559;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 26px;
              "
                    >
                        <table
                            style="
                  font-weight: normal;
                  border-collapse: collapse;
                  border: 0;
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                "
                        >
                            <tr>
                                <td
                                    colspan="4"
                                    valign="top"
                                    class="image-section"
                                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                      background-color: #fff;
                      border-bottom: 4px solid #00a5b5;
                    "
                                >
                                    <h1 style="margin-left: 20px; color: #00a5b5;">JOB PORTAL</h1>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    valign="top"
                                    class="side title"
                                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 20px;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                      vertical-align: top;
                      background-color: white;
                      border-top: none;
                    "
                                >
                                    <table
                                        style="
                        font-weight: normal;
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                      "
                                    >
                                        <tr>
                                            <td
                                                class="head-title"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 28px;
                            line-height: 34px;
                            font-weight: bold;
                            text-align: center;
                          "
                                            >
                                                <div class="mktEditable" id="main_title">
                                                    Congratulation We are interested in your Details
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="sub-title"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            padding-top: 5px;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 18px;
                            line-height: 29px;
                            font-weight: bold;
                            text-align: center;
                          "
                                            >
                                                <div class="mktEditable" id="intro_title">

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="top-padding"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 5px;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                          "
                                            ></td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="grey-block"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            background-color: #fff;
                            text-align: center;
                          "
                                            >
                                                <div class="mktEditable" id="cta">
                                                    <img
                                                        class="top-image"
                                                        src="https://www.infojiniconsulting.com/wp-content/uploads/2020/02/campus-recruitment.jpg"
                                                        width="560"
                                                    /><br /><br />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="top-padding"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 15px 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 21px;
                          "
                                            >
                                                <hr size="1" color="#eeeff0" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="text"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                          "
                                            >
                                                <div class="mktEditable" id="main_text">
                                                    Hello Dear,<br /><br />
                                                    We would like to express our sincere
                                                    gratitude to you for providing us with your details
                                                    online. We would also like to extend our congratulations
                                                    for being selected as a candidate for our program. We
                                                    are excited to have the opportunity to work with you and
                                                    we look forward to a successful partnership. If there is
                                                    anything else that you need from us, please do not
                                                    hesitate to contact us. Thank you again for your time
                                                    and we look forward to hearing from you soon. Sincerely,
                                                    ${company_name}
                                                    Rohit Soni
                                                    ${contact_number}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 24px;
                          "
                                            >
                                                &nbsp;<br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                class="text"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 24px;
                          "
                                            >
                                                <div
                                                    class="mktEditable"
                                                    id="download_button"
                                                    style="text-align: center;"
                                                >
                                                    <a
                                                        style="
                                color: #ffffff;
                                background-color: #ff8300;
                                border: 20px solid #ff8300;
                                border-left: 20px solid #ff8300;
                                border-right: 20px solid #ff8300;
                                border-top: 10px solid #ff8300;
                                border-bottom: 10px solid #ff8300;
                                border-radius: 3px;
                                text-decoration: none;
                              "
                                                        href='mailto:${email}'
                                                    >send Direct Mail</a
                                                    >
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    valign="top"
                                    align="center"
                                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                    "
                                >
                                    <table
                                        style="
                        font-weight: normal;
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                      "
                                    >
                                        <tr>
                                            <td
                                                align="center"
                                                valign="middle"
                                                class="social"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 10px;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            text-align: center;
                          "
                                            >
                                                <table
                                                    style="
                              font-weight: normal;
                              border-collapse: collapse;
                              border: 0;
                              margin: 0;
                              padding: 0;
                              font-family: Arial, sans-serif;
                            "
                                                >
                                                    <tr>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a href="https://www.tenable.com/blog"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/rss-teal.png"
                                                                /></a>
                                                        </td>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a href="https://twitter.com/tenablesecurity"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/twitter-teal.png"
                                                                /></a>
                                                        </td>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a href="https://www.facebook.com/Tenable.Inc"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/facebook-teal.png"
                                                                /></a>
                                                        </td>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a href="https://www.youtube.com/tenablesecurity"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/youtube-teal.png"
                                                                /></a>
                                                        </td>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a
                                                                href="https://www.linkedin.com/company/tenable-network-security"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/linkedin-teal.png"
                                                                /></a>
                                                        </td>
                                                        <td
                                                            style="
                                  border-collapse: collapse;
                                  border: 0;
                                  margin: 0;
                                  padding: 5px;
                                  -webkit-text-size-adjust: none;
                                  color: #555559;
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  line-height: 26px;
                                "
                                                        >
                                                            <a
                                                                href="https://plus.google.com/107158297098429070217"
                                                            ><img
                                                                    src="https://info.tenable.com/rs/tenable/images/google-teal.png"
                                                                /></a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                                <td
                                    valign="top"
                                    class="footer"
                                    style="
                      border-collapse: collapse;
                      border: 0;
                      margin: 0;
                      padding: 0;
                      -webkit-text-size-adjust: none;
                      color: #555559;
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 26px;
                      background: #fff;
                      text-align: center;
                    "
                                >
                                    <table
                                        style="
                        font-weight: normal;
                        border-collapse: collapse;
                        border: 0;
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                      "
                                    >
                                        <tr>
                                            <td
                                                class="inside-footer"
                                                align="center"
                                                valign="middle"
                                                style="
                            border-collapse: collapse;
                            border: 0;
                            margin: 0;
                            padding: 20px;
                            -webkit-text-size-adjust: none;
                            color: #555559;
                            font-family: Arial, sans-serif;
                            font-size: 12px;
                            line-height: 16px;
                            vertical-align: middle;
                            text-align: center;
                            width: 580px;
                          "
                                            >
                                                <div id="address" class="mktEditable">
                                                    <b>Online Job Portal</b><br />
                                                    Udaipur <br />
                                                    <a
                                                        style="color: #00a5b5;"
                                                        href="https://www.tenable.com/contact-tenable"
                                                    >Contact Us</a
                                                    >
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>`
    });
    console.log("Message sentaa", info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //   return (
    //     <div>Nodemailer</div>
    //   )
}
module.exports = { Nodemailer };
