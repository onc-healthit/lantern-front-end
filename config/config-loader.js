const convict = require("convict");
const dotenv = require("dotenv");

dotenv.config();

const config = convict({
  grafana_url: {
    default: "",
    env: "GRAFANA_URL"
  },
});

config.validate({ allowed: "strict" });

module.exports = () => {
  return { code: "module.exports = " + JSON.stringify(config.getProperties()) };
};