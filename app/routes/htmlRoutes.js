const path = require("path");


module.exports = app => {
    //route for the index.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/contact", (req, res)=> {
        res.sendFile(path.join(__dirname,"../public/contact.html"));
    })
    app.get("/about", (req, res)=> {
        res.sendFile(path.join(__dirname,"../public/about.html"));
    })
    //home.html will be the default, also in case no other route is found
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};