const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");


const apiDocumentation = YAML.load("./api.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));