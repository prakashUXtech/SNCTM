import { error } from "@sveltejs/kit";
import sendEmail from "$lib/server/mailchimp-transactional";

// interface TokenValidateResponse {
//   'error-codes': string[];
//   success: boolean;
//   action: string;
//   cdata: string;
// }

async function validateToken(token, secret) {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        response: token,
        secret: secret,
      })
    },
  );

  const data = await response.json();

  return {
    // Return the status
    success: data.success,

    // Return the first error if it exists
    error: data['error-codes']?.length ? data['error-codes'][0] : null,
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');
    const token = data.get('cf-turnstile-response') // if you edited the formsField option change this
    const SECRET_KEY = '0x4AAAAAAABejW8YnDv3rUElg83U-S9vYRU' // you should use $env module for secrets

    const { success, errors } = await validateToken(token, SECRET_KEY);

    if (!success)
      return {
        error: errors || 'Invalid CAPTCHA',
      };

    if (!name) {
      return error(400, { name, missing: true });
    }
    if (!email) {
      return error(400, { email, missing: true });
    }
    if (!subject) {
      return error(400, { subject, missing: true });
    }
    if (!message) {
      return error(400, { message, missing: true });
    }

    let response = await sendEmail(email, subject, message);

    if (response?.status !== 200) {
      return error(400, { message: 'Failed to send email' });
    }

    console.log('Email sent');
  }
};