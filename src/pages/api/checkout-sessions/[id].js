import { stripe } from "../../../../lib/stripe";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    try {
      if (!id.startsWith("cs_")) {
        throw new Error("Invalid checkout session id");
      }
      const checkoutSession = await stripe.checkout.sessions.retrieve(id);
      res.status(200).json(checkoutSession);
    } catch (error) {
      console.log(error);
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
