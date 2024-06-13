module.exports = {
    HOST: "localhost",
    USER: "vega",
    PASSWORD: "vega",
    DB: "vega",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };