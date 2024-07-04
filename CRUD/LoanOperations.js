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
exports.createLoan = createLoan;
exports.createBulkLoanRecords = createBulkLoanRecords;
exports.getAllLoansData = getAllLoansData;
exports.getLoansDataById = getLoansDataById;
exports.deleteLoanData = deleteLoanData;
exports.updateLoanData = updateLoanData;
const Loans_1 = require("../Models/Loans");
function createLoan(loan_date, due_date, book_id, member_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loan = yield Loans_1.Loan.create({
                loan_date, due_date, book_id, member_id
            });
            console.log("Loan data created !");
        }
        catch (err) {
            console.log("error inserting loan data", err);
        }
    });
}
//BulkCreate:
function createBulkLoanRecords(loans) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allLoans = yield Loans_1.Loan.bulkCreate(loans);
            console.log("All loan data inserted successfully");
        }
        catch (err) {
            console.log("error inserting all loans data", err);
        }
    });
}
//getAllLoansData:
function getAllLoansData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loans = yield Loans_1.Loan.findAll();
            console.table(loans.map((loan) => loan.toJSON()));
        }
        catch (err) {
            console.log("error fetching all loans data");
        }
    });
}
//getLoansDataById:
function getLoansDataById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loanById = yield Loans_1.Loan.findByPk(id);
            if (loanById) {
                console.table(loanById.toJSON());
            }
            else {
                console.log("Loan not found");
            }
        }
        catch (err) {
            console.log("Error fetching loan data by the given Id");
        }
    });
}
//delete:
function deleteLoanData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loanById = yield Loans_1.Loan.findByPk(id);
            if (loanById) {
                yield loanById.destroy();
                console.log("Deleted loan data successfully");
            }
            else {
                console.log("Loan data not found");
            }
        }
        catch (err) {
            console.log("Error deleting loan data by the given Id");
        }
    });
}
//Update:
function updateLoanData(id, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loanById = yield Loans_1.Loan.findByPk(id);
            if (loanById) {
                yield loanById.update(updatedData);
                console.log("Updated loan data");
            }
            else {
                console.log("Loan id  not found");
            }
        }
        catch (err) {
            console.log("Error updating loan data");
        }
    });
}
