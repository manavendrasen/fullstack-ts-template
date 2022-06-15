type CONFIG_OBJECT = {
  ENV: string;
  PORT: number;
};

const DEVELOPMENT: CONFIG_OBJECT = {
  ENV: "development",
  PORT: 5000,
};

const STAGING: CONFIG_OBJECT = {
  ENV: "staging",
  PORT: 5000,
};

const PRODUCTION: CONFIG_OBJECT = {
  ENV: "production",
  PORT: 5000,
};

const config = (environment: string): CONFIG_OBJECT => {
  let obj;
  switch (environment) {
    case "development":
      obj = DEVELOPMENT;
      break;
    case "staging":
      obj = STAGING;
      break;
    case "production":
      obj = PRODUCTION;
      break;
    default:
      obj = DEVELOPMENT;
      break;
  }
  return obj;
};

export default config;
