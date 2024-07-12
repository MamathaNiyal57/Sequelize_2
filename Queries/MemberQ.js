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
exports.getMemberDetails = getMemberDetails;
const Members_1 = require("../Models/Members");
const Loans_1 = require("../Models/Loans");
const Reservations_1 = require("../Models/Reservations");
function getMemberDetails(memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const memberDetails = yield Members_1.Member.findByPk(memberId, {
                include: [
                    {
                        model: Loans_1.Loan,
                        attributes: ['id', 'book_id', 'loan_date', 'due_date'],
                    },
                    {
                        model: Reservations_1.Reservation,
                        attributes: ['id', 'book_id', 'reservation_date'],
                    }
                ],
            });
            if (!memberDetails) {
                throw new Error(`Member with ID ${memberId} not found`);
            }
            // console.log(memberDetails.Loans)
            const op = {
                id: memberDetails.id,
                name: memberDetails.name,
                address: memberDetails.address,
                phone_number: memberDetails.phone_number,
                email: memberDetails.email,
                loans: memberDetails.Loans.map((loan) => {
                    loan = loan.toJSON();
                    console.log(loan);
                    return {
                        id: loan.id,
                        book_id: loan.book_id,
                        loan_date: loan.loan_date,
                        due_date: loan.due_date
                    };
                }),
                reservations: memberDetails.Reservations.map((reservation) => ({
                    id: reservation.id,
                    book_id: reservation.book_id,
                    reservation_date: reservation.reservation_date
                })),
            };
            console.table(op);
        }
        catch (error) {
            throw new Error(`Error fetching data ${error}`);
        }
    });
}
