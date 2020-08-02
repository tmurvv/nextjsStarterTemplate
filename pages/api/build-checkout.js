// /pages/api/build-checkout.jsimport { useContext } from 'react';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const url = require('url');
export default async (req, res) => {
    // console.log('here', req.body)
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    // debugger
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                name: "Total",
                description: "Total to be charged.",
                images: [],
                amount: 5000,
                currency: "usd",
                quantity: 1
            }
        ],
        success_url: "http://localhost:3006",
        cancel_url: "http://localhost:3006"
    });

    res.json(session);
};
