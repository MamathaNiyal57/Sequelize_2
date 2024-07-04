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
const db_js_1 = require("./controller/db.js");
const AuthorOperations_js_1 = require("./CRUD/AuthorOperations.js");
const BookOperations_js_1 = require("./CRUD/BookOperations.js");
const MemberOperations_js_1 = require("./CRUD/MemberOperations.js");
const LoanOperations_js_1 = require("./CRUD/LoanOperations.js");
const ReservationOperations_js_1 = require("./CRUD/ReservationOperations.js");
const Data_js_1 = require("./Data/Data.js");
function SyncDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_js_1.sequelize.sync({ force: true });
            console.log('Synced');
            //await insertAuthors();
            //console.log('Authors created successfully');
            yield (0, AuthorOperations_js_1.createAuthor)('Mamtha', 2003, 'Indian');
            console.log("Author data inserted");
            yield (0, AuthorOperations_js_1.createBulkAuthors)(Data_js_1.authorsData);
            yield (0, AuthorOperations_js_1.getAllAuthors)();
            console.log("All authors data fetched");
            yield (0, AuthorOperations_js_1.getAuthorById)(4);
            console.log("Author data fetched by its id");
            // await deleteAuthor(6);
            // console.log("Author deleted successfully");
            yield (0, AuthorOperations_js_1.updateAuthorData)(5, { nationality: 'Indian' });
            console.log("Updated author data successfully");
            yield (0, BookOperations_js_1.createBook)('The subtle art of not giving a f**', 'self-help', '9780062641540', 2016, 3);
            console.log("Book data inserted successfully");
            yield (0, BookOperations_js_1.createBulkBooks)(Data_js_1.booksData);
            yield (0, BookOperations_js_1.getAllBooks)();
            console.log("All books data fetched");
            yield (0, BookOperations_js_1.getBookById)(2);
            console.log("Book data fetched");
            // await deleteBook(3);
            // console.log("Book deleted succesfully");
            yield (0, BookOperations_js_1.updateBookData)(2, { title: 'Life' });
            console.log("Updated book data successfully");
            //await insertBooks();
            //console.log('Books created successfully');
            yield (0, MemberOperations_js_1.createMember)('Vinay', 'h-231, Warangal', '9845672396', 'vinay@gmail.com');
            console.log("Member inserted ");
            yield (0, MemberOperations_js_1.createBulkMembers)(Data_js_1.MembersData);
            yield (0, MemberOperations_js_1.getAllMembers)();
            console.log("ALL Members data fetched");
            yield (0, MemberOperations_js_1.getMemberById)(1);
            console.log("Member data fetched");
            // await deleteMember(3);
            // console.log("Member deleted successfully");
            yield (0, MemberOperations_js_1.updateMemberData)(2, { name: 'Anju', address: '678-m bsr, NZB', phone_number: '9456798700', email: 'anju@gmail.com' });
            console.log("updated member data successfully");
            yield (0, LoanOperations_js_1.createLoan)(new Date('2024-07-05'), new Date('2024-07-16'), 3, 2);
            console.log("Loan data inserted");
            yield (0, LoanOperations_js_1.createBulkLoanRecords)(Data_js_1.LoansData);
            yield (0, LoanOperations_js_1.getAllLoansData)();
            yield (0, LoanOperations_js_1.getLoansDataById)(4);
            console.log("Loan data fetched");
            //await deleteLoanData(2);
            yield (0, LoanOperations_js_1.updateLoanData)(1, { book_id: 3 });
            console.log("updated loan data by its id ");
            // await insertMembers();
            // console.log('Members created successfully');
            // await insertLoans();
            // console.log('Loans data created successfully');
            yield (0, ReservationOperations_js_1.createReservation)(new Date('2024-07-09'), 6, 3);
            console.log("Reservation created");
            yield (0, ReservationOperations_js_1.createBulkReservations)(Data_js_1.ReservationsData);
            yield (0, ReservationOperations_js_1.getAllReservations)();
            yield (0, ReservationOperations_js_1.getReservationById)(1);
            console.log("reservation data fetched");
            //await deleteReservation(2);
            yield (0, ReservationOperations_js_1.updateReservationData)(2, { member_id: 3 });
            console.log("Updated reservation data");
            // await insertReservations();
            // console.log('Reservations data created successfully');
        }
        catch (error) {
            console.error('Unable to sync to db:', error);
        }
    });
}
SyncDb();