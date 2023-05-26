import { Sequelize } from "sequelize";

const sequelize = new Sequelize('libreria','root','123456789',{
    host : 'localhost',
    dialect : 'mysql',
    // logging : false
})

export default sequelize