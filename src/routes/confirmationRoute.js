const express = require("express");
const app = express.Router();
const { ROUTE, VIEW } = require("./variables");

const User = require("../../model/user");
const Album = require("../../model/album");
const Order = require("../../model/order");

const verifyToken = require("../middlewares/verifyToken");
const checkUser = require("../middlewares/checkUser");
const calcTotalPrice = require("../functions/calcTotalPrice");

app.get(ROUTE.confirmation, verifyToken, checkUser, async (req, res) => {
    
    console.log("req.query.session_id = ", req.query.session_id);
    
    const user = await User.findById({ _id: req.validCookie.user._id });

    // create an order number
    const numberOfOrder = await Order.countDocuments();
    const orderNumber = 10000 + numberOfOrder + 1;

    const totalPrice = await calcTotalPrice(user.cart);

    const newOrder = await new Order({
        orderNumber: orderNumber,
        sessionId: req.query.session_id, 
        userId: user._id,
        username: user.username,
        email: user.email,
        invoiceInfo: {
            fullName: "Client full name", // data from input (from checkout.ejs)
            email: user.email,
            address: "A valid address", // data from input (from checkout.ejs)
            city: "A valid city", // data from input (from checkout.ejs)
            state: "A valid state", // data from input (from checkout.ejs)
            zip: "A valid zip" // data from input (from checkout.ejs)
        },
        totalPrice: totalPrice
    }).save();

    const order = await Order.findById({ _id: newOrder._id });

    const cart = user.cart;

    cart.forEach(item => {
        order.addItemFromCartToOrder(item);
    });

    res.render(VIEW.confirmation, { order });
    
});

module.exports = app;