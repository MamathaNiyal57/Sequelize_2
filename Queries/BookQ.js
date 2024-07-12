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
exports.bookAuthor = bookAuthor;
exports.FindBookByAuthor = FindBookByAuthor;
exports.groupByGenre = groupByGenre;
exports.getBooks = getBooks;
exports.getBooksWithAuthors = getBooksWithAuthors;
const Books_1 = require("../Models/Books");
const Authors_1 = require("../Models/Authors");
function bookAuthor() {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield Books_1.Book.findOne({ where: { title: 'Neuromancer' } });
        if (book) {
            const author = yield Authors_1.Author.findOne({ where: { id: book.authorId } });
            if (author) {
                console.table(author.toJSON());
            }
        }
        else {
            console.log("Book doesnt exist.");
        }
    });
}
function FindBookByAuthor(Id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield Authors_1.Author.findByPk(Id);
            if (!author) {
                throw new Error('Author not found');
            }
            const books = yield Books_1.Book.findAll({ where: { authorId: author.id } });
            console.table(books.map((book) => book.toJSON()));
        }
        catch (error) {
            throw new Error('Error finding books');
        }
    });
}
function groupByGenre() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield Books_1.Book.findAll({
                attributes: ['genre', 'title'],
                group: ['genre', 'title'],
                order: ['genre'],
            });
            console.table(books.map((book) => book.toJSON()));
        }
        catch (error) {
            throw new Error('Error');
        }
    });
}
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield Books_1.Book.findAll();
            console.log(`Total Books: ${books.length}`);
            console.table(books.map(book => book.toJSON()));
        }
        catch (error) {
            throw new Error(`Error fetching all books: ${error}`);
        }
    });
}
function getBooksWithAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const booksWithAuthors = yield Books_1.Book.findAll({
                include: [{ model: Authors_1.Author, attributes: ['name', 'birth_year', 'nationality'], },],
            });
            const op = booksWithAuthors.map(book => {
                const bookdetails = book.toJSON();
                return {
                    id: bookdetails.id,
                    title: book.title,
                    genre: book.genre,
                    isbn: book.isbn,
                    publication_year: book.publication_year,
                    authorName: `${bookdetails.Author.name}`,
                    birth_year: `${bookdetails.Author.birth_year}`,
                    nationality: `${bookdetails.Author.nationality}`
                };
            });
            console.table(op);
        }
        catch (error) {
            throw new Error('Error fetching books with authors');
        }
    });
}
