const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { user_id, _id, updated_coins, quantity, email, usdt } = req.body;

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3005"
      : "https://gpay-backend.vercel.app";

  const transformedItem = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          //Coin Image
          images: [
            "https://res.cloudinary.com/dpwustwce/image/upload/v1699448595/gpay-logo-black_u2iefr.png",
          ],
          name: "Gpay Coin",
        },
        unit_amount: 1 * 100 * usdt, //100*usdt
      },
      quantity: quantity,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItem,
    customer_email: email,
    // shipping_address_collection: {
    //   allowed_countries: ["US"],
    // },
    // automatic_tax: {
    //   enabled: true,
    // },
    mode: "payment",
    success_url:
      redirectURL +
      `/api/auth/updatebuy?status=success&id=${_id}&session_id={CHECKOUT_SESSION_ID}&email=${email}&quantity=${quantity}&user_id=${user_id}&updated_coins=${updated_coins}`,
    cancel_url: redirectURL + `/api/auth/cancelbuy?status=cancel&id=${_id}`,
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
