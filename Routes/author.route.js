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
exports.router = exports.app = exports.deleteAuthor = exports.UpdateAuthor = exports.newAuthor = exports.getOneAuthor = exports.getAllAuthors = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const router = express_1.default.Router();
exports.router = router;
const Authors_1 = require("../Models/Authors");
//get:
const getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield Authors_1.Author.findAll();
        if (authors.length === 0) {
            res.json("No Authors Found");
        }
        else {
            res.json({ Authors: authors });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllAuthors = getAllAuthors;
router.get('/', exports.getAllAuthors);
//Get one authors:
const getOneAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield Authors_1.Author.findByPk(req.params.id);
        if (author === null) {
            res.json("Author not found");
        }
        res.json(author);
    }
    catch (err) {
        res.json("error fetching author");
    }
});
exports.getOneAuthor = getOneAuthor;
router.get('/:id', exports.getOneAuthor);
//Create a new author:
const newAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield Authors_1.Author.create(req.body);
        res.json(author);
    }
    catch (err) {
        res.json("Error creating new author");
    }
});
exports.newAuthor = newAuthor;
router.post('/', exports.newAuthor);
//update an author:
const UpdateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Authors_1.Author.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield Authors_1.Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.json("Author not found");
        }
    }
    catch (err) {
        res.json("Error updating author data");
    }
});
exports.UpdateAuthor = UpdateAuthor;
router.put('/:id', exports.UpdateAuthor);
//Delete an author:
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Authors_1.Author.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json("Author deleted");
        }
        else {
            res.json("Author not found");
        }
    }
    catch (err) {
        res.json("error deleting author");
    }
});
exports.deleteAuthor = deleteAuthor;
router.delete('/:id', exports.deleteAuthor);
