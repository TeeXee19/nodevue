const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express()

const tutorialRoute = require('./app/routes/tutorial.routes');

var corsOptions = {
	origin: "*",
	 credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const db = require("./app/models");
db.sequelize.sync().then(()=>{
	console.log("DROP AND RE-SYNC DB.");
})

// app.get("/", (req, res)=>{
// 	res.json({message: "Willkommen zu Frank Application"})
// });

app.use('/api/tutorials/', cors(corsOptions), tutorialRoute)

app.listen(PORT, ()=>{
	console.log(`Server is running fine on ${PORT}.`);
});


