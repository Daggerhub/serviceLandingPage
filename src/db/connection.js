const mongoose = require("mongoose");
const CONNECTION_URL = "mongodb+srv://Bajpai:Bajpai@cluster0.rtkx0.azure.mongodb.net/contact?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL , {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
}).catch((error) => {
    console.log(error);
})