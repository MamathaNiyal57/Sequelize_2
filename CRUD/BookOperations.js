"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = createBook;
exports.createBulkBooks = createBulkBooks;
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.deleteBook = deleteBook;
exports.updateBookData = updateBookData;
const Books_1 = require("../Models/Books");
function createBook(title, genre, isbn, publication_year, authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Books_1.Book.create({
                title, genre, isbn, publication_year, authorId
            });
            console.log("Book created !");
        }
        catch (err) {
            console.log("error inserting book", err);
        }
    });
}
//BulkCreate:
function createBulkBooks(books) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allBooks = yield Books_1.Book.bulkCreate(books);
            console.log("All books inserted successfully");
            //return allBooks;
        }
        catch (err) {
            console.log("error inserting all books", err);
        }
    });
}
//getAllBooks:
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield Books_1.Book.findAll();
            console.table(books.map((book) => book.toJSON()));
        }
        catch (err) {
            console.log("error fetching all books");
        }
    });
}
//getBookById:
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookById = yield Books_1.Book.findByPk(id);
            if (bookById) {
                console.table(bookById.toJSON());
            }
            else {
                console.log("Book not found");
            }
        }
        catch (err) {
            console.log("Error fetching book by the given Id");
        }
    });
}
//delete:
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookById = yield Books_1.Book.findByPk(id);
            if (bookById) {
                yield bookById.destroy();
                console.log("Deleted book successfully");
            }
            else {
                console.log("Book not found");
            }
        }
        catch (err) {
            console.log("Error deleting book by the given Id");
        }
    });
}
//Update:
function updateBookData(id, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookById = yield Books_1.Book.findByPk(id);
            if (bookById) {
                yield bookById.update(updatedData);
                console.log("Updated book data");
            }
            else {
                console.log("Book not found");
            }
        }
        catch (err) {
            console.log("Error updating book data");
        }
    });
}
