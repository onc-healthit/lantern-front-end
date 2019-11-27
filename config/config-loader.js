/** Node module that will be executed at build-time */

const convict = require("convict");
const dotenv = require("dotenv");

// Reads in the environment variables and saves it into the process.env global node variable
dotenv.config();

// Create a configuration schema
const config = convict({
  grafana_url: {
    default: "",
    format: String,
    env: "LANTERN_GRAFANA_URL"
  },
});

// Validate the environment variables
config.validate({ allowed: "strict" });

// Exports the configuration information for the webpack loader
module.exports = () => {
  return { code: "module.exports = " + JSON.stringify(config.getProperties()) };
};