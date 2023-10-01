import express from 'express';
import mongoose from 'mongoose';
import router from "./Router.js"
import fileUpload from 'express-fileupload';

const db_url = 'mongodb+srv://username:password@test.vmhtldu.mongodb.net/?retryWrites=true&w=majority'

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(fileUpload({}))
app.use('/', router)

app.get("/", (req, res) => {
    res.send("Hello")
})

async function startApp () {
    try {
        // await mongoose.connect(db_url);
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp();
