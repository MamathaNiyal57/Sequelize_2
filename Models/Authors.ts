import { DataTypes } from 'sequelize';
import { sequelize } from '../controller/db';
//import { Book } from './Books';

 type AuthorAttributes = any;

const Author = sequelize.define<AuthorAttributes>('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birth_year: {
        type: DataTypes.INTEGER
    
    },
    nationality: {
        type: DataTypes.STRING(100)
    }
}, {
    timestamps: false
    
});


export { Author, AuthorAttributes };
