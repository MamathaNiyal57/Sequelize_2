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
exports.createAuthor = createAuthor;
exports.createBulkAuthors = createBulkAuthors;
exports.getAllAuthors = getAllAuthors;
exports.getAuthorById = getAuthorById;
exports.deleteAuthor = deleteAuthor;
exports.updateAuthorData = updateAuthorData;
const Authors_1 = require("../Models/Authors");
function createAuthor(name, birth_year, nationality) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield Authors_1.Author.create({
                name, birth_year, nationality
            });
            console.log("Author created !");
        }
        catch (err) {
            console.log("error inserting Author", err);
        }
    });
}
//BulkCreate:
function createBulkAuthors(authors) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allAuthors = yield Authors_1.Author.bulkCreate(authors);
            console.log("All Authors inserted successfully");
        }
        catch (err) {
            console.log("error inserting all authors", err);
        }
    });
}
//getAllAuthors:
function getAllAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authors = yield Authors_1.Author.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        catch (err) {
            console.log("error fetching all authors");
        }
    });
}
//getAuthorById:
function getAuthorById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authorById = yield Authors_1.Author.findByPk(id);
            if (authorById) {
                console.table(authorById.toJSON());
            }
            else {
                console.log("Author not found");
            }
        }
        catch (err) {
            console.log("Error fetching author by the given Id");
        }
    });
}
//delete:
function deleteAuthor(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authorById = yield Authors_1.Author.findByPk(id);
            if (authorById) {
                yield authorById.destroy();
                console.log("Deleted author successfully");
            }
            else {
                console.log("Author not found");
            }
        }
        catch (err) {
            console.log("Error deleting author by the given Id");
        }
    });
}
//Update:
function updateAuthorData(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authorById = yield Authors_1.Author.findByPk(id);
            if (authorById) {
                yield authorById.update(updateData);
                console.log("Updated author data");
            }
            else {
                console.log("Author not found");
            }
        }
        catch (err) {
            console.log("Error updating author data");
        }
    });
}
