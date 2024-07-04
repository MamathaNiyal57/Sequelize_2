import { sequelize, dbConnect } from './controller/db.js';
//import { createBook } from './CRUD/BookOperations.js';
import {Author} from './Models/Authors.js';
import {Book} from './Models/Books.js';
import {Loan} from './Models/Loans.js';
import {Member} from './Models/Members.js';
import {Reservation} from './Models/Reservations.js';

import { createAuthor, createBulkAuthors, getAllAuthors, getAuthorById, deleteAuthor, updateAuthorData} from './CRUD/AuthorOperations.js';
import { createBook, createBulkBooks , getAllBooks, getBookById, deleteBook, updateBookData} from './CRUD/BookOperations.js';
import {  createMember , createBulkMembers, getAllMembers , getMemberById, deleteMember, updateMemberData} from './CRUD/MemberOperations.js';
import { createLoan, createBulkLoanRecords, getAllLoansData, getLoansDataById, deleteLoanData, updateLoanData } from './CRUD/LoanOperations.js';
import { createReservation, createBulkReservations, getAllReservations, getReservationById, deleteReservation , updateReservationData} from './CRUD/ReservationOperations.js';


import { booksData, authorsData, MembersData, LoansData, ReservationsData } from './Data/Data.js';



async function SyncDb() {
    try {
        await sequelize.sync({ force: true });
        console.log('Synced');
        

        await createAuthor('Mamtha', 2003, 'Indian');
        console.log("Author data inserted");

        await createBulkAuthors(authorsData);

        await getAllAuthors();
        console.log("All authors data fetched");

        await getAuthorById(4);
        console.log("Author data fetched by its id");

        // await deleteAuthor(6);
        // console.log("Author deleted successfully");

        await updateAuthorData(5, { nationality: 'Indian'});
        console.log("Updated author data successfully");

        await createBook('The subtle art of not giving a f**', 'self-help', '9780062641540', 2016 , 3);
        console.log("Book data inserted successfully");

        await createBulkBooks(booksData);

        await getAllBooks();
        console.log("All books data fetched");
        
        await getBookById(2);
        console.log("Book data fetched");
        
        // await deleteBook(3);
        // console.log("Book deleted succesfully");

        await updateBookData(2, {title:'Life'});
        console.log("Updated book data successfully");


        await createMember('Vinay', 'h-231, Warangal', '9845672396', 'vinay@gmail.com');
        console.log("Member inserted ");

        await createBulkMembers(MembersData);

        await getAllMembers();
        console.log("ALL Members data fetched");

        await getMemberById(1);
        console.log("Member data fetched");

        // await deleteMember(3);
        // console.log("Member deleted successfully");

        await updateMemberData(2, {name: 'Anju', address:'678-m bsr, NZB', phone_number: '9456798700', email: 'anju@gmail.com'});
        console.log("updated member data successfully");


        await createLoan(new Date('2024-07-05'), new Date('2024-07-16'), 3, 2);
        console.log("Loan data inserted");

        await createBulkLoanRecords(LoansData);

        await getAllLoansData();
        
        await getLoansDataById(4);
        console.log("Loan data fetched");

        //await deleteLoanData(2);

        await updateLoanData(1, {book_id: 3});
        console.log("updated loan data by its id ");



        await createReservation(new Date('2024-07-09'), 6, 3);
        console.log("Reservation created");

        await createBulkReservations(ReservationsData);

        await getAllReservations();

        await getReservationById(1);
        console.log("reservation data fetched");

        //await deleteReservation(2);
        
        await updateReservationData(2, { member_id: 3});
        console.log("Updated reservation data");

        

        
    } catch (error) {
        console.error('Unable to sync to db:', error);
    }
}

SyncDb();




