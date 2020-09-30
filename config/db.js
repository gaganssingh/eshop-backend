import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(
            `Connected to MongoDB: ${connection.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.error(`Error: ${error.message}`.brightMagenta.underline.bold);
        process.exit(1);
    }
};

export default connectDB;
