"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var body_parser_1 = require("body-parser");
var routes_1 = require("./routes/routes");
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
// Express Configuration
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");
dotenv_1.default.config();
// Define the Routes
app.use("/api/v1", routes_1.default);
// Mongo Connection
// const mongoURI = process.env.MONGO_DB_URI
// if(!mongoURI){
//     console.error("MongoDB URL is not defined")
//     process.exit(1);
// }
// mongoose.connect(mongoURI, {}).then(() => {
//     console.log("MongoDB is connected");
// })
// .catch((error) => {
//     console.log(error)
// });
// Start the server
try {
    var port = app.get("PORT");
    var baseUrl = app.get("BASE_URL");
    server.listen(port, function () {
        console.log("Server is Listening");
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
//# sourceMappingURL=index.js.map