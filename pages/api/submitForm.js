// pages/api/submitForm.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://formspree.io/f/mjvnrlyq',
        req.body
      );

      if (response.status === 200) {
        // Handle success, send a success response
        res.status(200).json({ success: true });
      } else {
        // Handle error, send an error response
        res.status(response.status).json({ success: false });
      }
    } catch (error) {
      // Handle error, send an error response
      res.status(500).json({ success: false });
    }
  } else {
    // Method not allowed
    res.status(405).end();
  }
}