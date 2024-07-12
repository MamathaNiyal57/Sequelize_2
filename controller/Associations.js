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
exports.setAssociations = setAssociations;
const Books_1 = require("../Models/Books");
const Authors_1 = require("../Models/Authors");
const Loans_1 = require("../Models/Loans");
const Members_1 = require("../Models/Members");
const Reservations_1 = require("../Models/Reservations");
function setAssociations() {
    return __awaiter(this, void 0, void 0, function* () {
        Authors_1.Author.hasMany(Books_1.Book, { foreignKey: 'authorId' });
        Books_1.Book.belongsTo(Authors_1.Author, { foreignKey: 'authorId' });
        Books_1.Book.hasMany(Loans_1.Loan, { foreignKey: 'id' });
        Loans_1.Loan.belongsTo(Books_1.Book, { foreignKey: 'book_id' });
        Members_1.Member.hasMany(Loans_1.Loan, { foreignKey: 'member_id' });
        Loans_1.Loan.belongsTo(Members_1.Member, { foreignKey: 'member_id' });
        Books_1.Book.hasMany(Reservations_1.Reservation, { foreignKey: 'book_id' });
        Reservations_1.Reservation.belongsTo(Books_1.Book, { foreignKey: 'book_id' });
        Members_1.Member.hasMany(Reservations_1.Reservation, { foreignKey: 'member_id' });
        Reservations_1.Reservation.belongsTo(Members_1.Member, { foreignKey: 'member_id' });
    });
}
