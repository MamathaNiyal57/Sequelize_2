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
exports.issueBook = issueBook;
const Books_1 = require("../Models/Books");
const Loans_1 = require("../Models/Loans");
const Members_1 = require("../Models/Members");
const db_1 = require("../controller/db");
function issueBook(bookId, memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = yield db_1.sequelize.transaction();
        try {
            const book = yield Books_1.Book.findOne({
                where: { id: bookId, status: 'available' },
                transaction
            });
            if (!book)
                throw new Error('The book is not available for loan');
            yield Loans_1.Loan.create({
                bookId,
                memberId,
                loan_date: new Date(),
                due_date: new Date(new Date().setDate(new Date().getDate() + 10)),
            }, { transaction });
            yield Books_1.Book.update({ status: 'loaned' }, { where: { id: bookId }, transaction });
            yield Members_1.Member.increment('loanCount', { by: 1, where: { id: memberId }, transaction });
            yield transaction.commit();
            console.log('Transaction has been committed');
        }
        catch (error) {
            yield transaction.rollback();
            console.log('Transaction has been rolled back', error);
        }
    });
}
