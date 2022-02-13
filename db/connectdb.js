import mongoose from 'mongoose'

const connectdb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "admin",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected");
    } catch (err) {
        console.log(err)
    }
};

export default connectdb;