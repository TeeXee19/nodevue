const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express()

require('./app/routes/tutorial.routes')(app);

var corsOptions = {
	origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const db = require("./app/models");
db.sequelize.sync({ force: true}).then(()=>{
	console.log("DROP AND RE-SYNC DB.");
})

app.get("/", (req, res)=>{
	res.json({message: "Willkommen zu Frank Application"})
});

app.listen(PORT, ()=>{
	console.log(`Server is running fine on ${PORT}.`);
});


