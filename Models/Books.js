"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const Authors_js_1 = require("./Authors.js");
const db_1 = require("../controller/db");
const Book = db_1.sequelize.define('Book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(13)
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('available', 'loaned', 'reserved'),
        allowNull: false,
        defaultValue: 'available',
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Authors_js_1.Author,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['title'],
        }
    ]
});
exports.Book = Book;
