const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app= express();
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerJsDocs));

app.get("/string",(req,res)=>{
    res.status(200).send("this is string");
})
app.listen(4000 , ()=>{
    console.log(("server is listning "));
})