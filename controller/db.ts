import { Sequelize } from 'sequelize';

// Function to connect to database

const sequelize =new Sequelize('sequelizedb', 'mamatha', 'mamatha',{
    host: 'localhost',
    port:5432,
    dialect: 'postgres',
    logging:false
} );

async function dbConnect(sequelize: Sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    
    } catch (error) {
        console.error('Unable to connect to db:', error);
    }
}
dbConnect(sequelize)
export { sequelize, dbConnect };
