import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added item to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating item" });
    }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed item from cart" });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error while updating/removing item",
        });
    }
};

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: `Error fetching cart data for user: ${error.message}`,
        });
    }
};

export { addToCart, removeFromCart, getCart };

// import userModel from "../models/userModel.js";

// // Add items to the user's cart
// const addToCart = async (req, res) => {
//     try {
//         const { userId, itemId } = req.body;

//         // Validate required fields
//         if (!userId || !itemId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "userId and itemId are required",
//             });
//         }

//         // Find the user and update the cart atomically
//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "User not found" });
//         }

//         const cartData = user.cartData || {}; // Initialize cartData if undefined

//         // Update item quantity in cart
//         cartData[itemId] = (cartData[itemId] || 0) + 1;

//         // Save the updated cart to the database
//         user.cartData = cartData;
//         await user.save();

//         res.json({ success: true, message: "Added item to cart", cartData });
//     } catch (error) {
//         console.error("Error in addToCart:", error.message);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };

// // Remove items from the user's cart
// const removeFromCart = async (req, res) => {
//     try {
//         const { userId, itemId } = req.body;

//         // Validate required fields
//         if (!userId || !itemId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "userId and itemId are required",
//             });
//         }

//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "User not found" });
//         }

//         const cartData = user.cartData || {};

//         if (cartData[itemId]) {
//             cartData[itemId] -= 1; // Decrease quantity by 1
//             if (cartData[itemId] <= 0) {
//                 delete cartData[itemId]; // Remove item if quantity is 0
//             }
//         } else {
//             return res.status(400).json({
//                 success: false,
//                 message: "Item not found in cart",
//             });
//         }

//         user.cartData = cartData;
//         await user.save();

//         res.json({
//             success: true,
//             message: "Removed item from cart",
//             cartData,
//         });
//     } catch (error) {
//         console.error("Error in removeFromCart:", error.message);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };

// // Fetch the user's cart data
// const getCart = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate required fields
//         if (!userId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "userId is required",
//             });
//         }

//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, cartData: user.cartData || {} });
//     } catch (error) {
//         console.error("Error in getCart:", error.message);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };

// export { addToCart, removeFromCart, getCart };
