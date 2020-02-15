module.exports={
    HOST: "localhost",
    USER: "admin",
    PASSWORD: "admin",
    DB: "db",
    dialect: "postgres", // dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    }

}