"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../controller/db");
const Member = db_1.sequelize.define('Member', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true
    }
}, {
    timestamps: false
});
exports.Member = Member;
