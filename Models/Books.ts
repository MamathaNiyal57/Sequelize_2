import { Sequelize, DataTypes } from 'sequelize';

import { Author } from './Authors.js';


import { sequelize,dbConnect } from '../controller/db';
import { Loan } from './Loans.js';
import { Reservation } from './Reservations.js';

type BookAttributes = any;


const Book = sequelize.define<BookAttributes>('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    genre:{
        type: DataTypes.STRING(100)
    },
    isbn:{
        type: DataTypes.STRING(13)
    },
    publication_year:{
        type: DataTypes.INTEGER
    },
    authorId:{
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: 'id'
        }
    }

},{
    timestamps:false
});




export {Book};
