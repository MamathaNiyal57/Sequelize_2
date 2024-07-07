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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.app = exports.deleteBook = exports.UpdateBook = exports.newBook = exports.getOneBook = exports.getAllBooks = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const router = express_1.default.Router();
exports.router = router;
const Books_1 = require("../Models/Books");
//get:
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Books_1.Book.findAll();
        if (books.length === 0) {
            res.json("No Book Found");
        }
        else {
            res.json({ Books: books });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllBooks = getAllBooks;
router.get('/', exports.getAllBooks);
//Get one book:
const getOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Books_1.Book.findByPk(req.params.id);
        if (book === null) {
            res.json("Book not found");
        }
        res.json(book);
    }
    catch (err) {
        res.json("error fetching book");
    }
});
exports.getOneBook = getOneBook;
router.get('/:id', exports.getOneBook);
//Create a new book:
const newBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Books_1.Book.create(req.body);
        res.json(book);
    }
    catch (err) {
        res.json("Error creating new book");
    }
});
exports.newBook = newBook;
router.post('/', exports.newBook);
//update a book:
const UpdateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Books_1.Book.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedBook = yield Books_1.Book.findByPk(req.params.id);
            res.json(updatedBook);
        }
        else {
            res.json("Book not found");
        }
    }
    catch (err) {
        res.json("Error updating book data");
    }
});
exports.UpdateBook = UpdateBook;
router.put('/:id', exports.UpdateBook);
//Delete a book:
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Books_1.Book.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json("Book deleted");
        }
        else {
            res.json("Book not found");
        }
    }
    catch (err) {
        res.json("error deleting book");
    }
});
exports.deleteBook = deleteBook;
router.delete('/:id', exports.deleteBook);
