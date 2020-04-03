const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");
const User = require("../../model/user");
const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");
const calcTotalPrice = require("../functions/calcTotalPrice");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

app.get(ROUTE.checkout, verifyToken, checkUser, async (req, res) => {

    const user = await User.findById({ _id: req.validCookie.user._id });

    const totalPrice = await calcTotalPrice(user.cart);

    const success_url = req.protocol + '://' + req.get('host') + ROUTE.confirmation + "?session_id={CHECKOUT_SESSION_ID}";
    const cancel_url = req.protocol + '://' + req.get('host') + "/";

    console.log(user);

    stripe.checkout.sessions.create({
        client_reference_id: String(user._id),
        payment_method_types: ["card"],
        line_items: user.cart.map( (item) => {
            return {
                name: item.name,
                amount: item.price * 100, // öre * 100 = 1 SEK
                quantity: 1, 
                currency: "sek"
            }
        }),
        success_url: success_url,
        cancel_url: cancel_url
    }).then( (session) => {
        console.log(session);
        res.render(VIEW.checkout, { user, totalPrice, sessionId: session.id } );
    })

});

module.exports = app;