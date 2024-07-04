"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../controller/db");
const Books_1 = require("./Books");
const Members_1 = require("./Members");
const Loan = db_1.sequelize.define('Loan', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Books_1.Book,
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Members_1.Member,
            key: 'id'
        }
    }
}, {
    timestamps: false
});
exports.Loan = Loan;
Books_1.Book.hasMany(Loan, {
    foreignKey: 'id',
    as: 'loans'
});
Loan.belongsTo(Books_1.Book, {
    foreignKey: 'book_id',
    as: 'book'
});
Loan.belongsTo(Members_1.Member, {
    foreignKey: 'member_id',
    as: 'member'
});
