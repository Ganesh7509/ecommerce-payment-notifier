const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');

dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_APP_PASSWORD,
  },
});

app.post('/create-checkout-session', async (req, res) => {
  const { product, user } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.title || product.name || 'Unnamed Product',
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    // Send email to admin
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: '🛒 New Payment Received',
      text: `User ${user?.name || 'Unknown'} has purchased the product "${product.title || product.name}".`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('❌ Email error:', err);
      } else {
        console.log('📧 Email sent:', info.response);
      }
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('❌ Stripe or email error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('🚀 Server running on port 4242'));
