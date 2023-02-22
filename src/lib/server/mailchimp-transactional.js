import axios from "axios";

const sendEmail = async (to, subject, html) => {
  try {
// send the email using the Mandrill API
    const response = await axios.post("https://mandrillapp.com/api/1.0/messages/send", {
      key: import.meta.env.VITE_MANDRILL_API_KEY,
      message: {
        to: [{ email: to }],
        subject: subject,
        html: html,
        from_email: 'info@snctm.com',
        from_name: 'SNCTM',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    // return error;
    throw(error);
  }
};

export default sendEmail;