import { DataTypes } from 'sequelize';
import { sequelize } from '../controller/db';

import { Book } from './Books';
import { Member } from './Members';


type LoanAttributes = any;

const Loan = sequelize.define<LoanAttributes>('Loan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    loan_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return_date:{
        type: DataTypes.DATE,
        allowNull: true,

    },
    book_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Book ,
            key: 'id'
        }
    },
    member_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Member,
            key: 'id'
        }
    }
},{
    timestamps:false
});


export {Loan, LoanAttributes};