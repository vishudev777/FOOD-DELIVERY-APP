// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose
//       .connect(
//         "mongodb+srv://greatstackuname:greatstackuname@cluster0.u2vg5.mongodb.net/food-del"
//       )
//       .then(() => console.log("Database Connected successfully"));
//   } catch (err) {
//     console.error(`Database Connect Nahi hua Qki : ${err}`);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://greatstackuname:greatstackuname@cluster0.u2vg5.mongodb.net/food-del"
    );
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(`DATABASE NOT Connected bcz =========> ${err}`);
  }
};
