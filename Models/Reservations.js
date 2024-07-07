"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../controller/db");
const Books_1 = require("./Books");
const Members_1 = require("./Members");
const Reservation = db_1.sequelize.define('Reservation', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    reservation_date: {
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
exports.Reservation = Reservation;
