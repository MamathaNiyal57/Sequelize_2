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
exports.router = exports.app = exports.deleteLoan = exports.UpdateLoan = exports.newLoan = exports.getOneLoan = exports.getAllLoans = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const router = express_1.default.Router();
exports.router = router;
const Loans_1 = require("../Models/Loans");
//get:
const getAllLoans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield Loans_1.Loan.findAll();
        if (loans.length === 0) {
            res.json("No loans Found");
        }
        else {
            res.json({ Loans: loans });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllLoans = getAllLoans;
router.get('/', exports.getAllLoans);
//Get one loan:
const getOneLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield Loans_1.Loan.findByPk(req.params.id);
        if (loan === null) {
            res.json("Loan not found");
        }
        res.json(loan);
    }
    catch (err) {
        res.json("error fetching loan data");
    }
});
exports.getOneLoan = getOneLoan;
router.get('/:id', exports.getOneLoan);
//Create a new loan:
const newLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield Loans_1.Loan.create(req.body);
        res.json(loan);
    }
    catch (err) {
        res.json("Error creating new loan");
    }
});
exports.newLoan = newLoan;
router.post('/', exports.newLoan);
//update a loan:
const UpdateLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Loans_1.Loan.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedLoan = yield Loans_1.Loan.findByPk(req.params.id);
            res.json(updatedLoan);
        }
        else {
            res.json("Loan not found");
        }
    }
    catch (err) {
        res.json("Error updating loan data");
    }
});
exports.UpdateLoan = UpdateLoan;
router.put('/:id', exports.UpdateLoan);
//Delete a loan data:
const deleteLoan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Loans_1.Loan.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json("Loan data deleted");
        }
        else {
            res.json("Loan data not found");
        }
    }
    catch (err) {
        res.json("error deleting loans data");
    }
});
exports.deleteLoan = deleteLoan;
router.delete('/:id', exports.deleteLoan);
