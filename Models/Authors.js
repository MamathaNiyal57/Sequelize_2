"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../controller/db");
const Author = db_1.sequelize.define('Author', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    birth_year: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING(100)
    }
}, {
    timestamps: false
});
exports.Author = Author;
