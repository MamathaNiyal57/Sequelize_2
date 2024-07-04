"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsData = exports.LoansData = exports.MembersData = exports.authorsData = exports.booksData = void 0;
const booksData = [
    { title: 'Do Epic Shit', genre: 'Self-help', isbn: '9781234567801', publication_year: 2015, authorId: 1 },
    { title: 'The Monk Who Sold His Ferrari', genre: 'Self-help', isbn: '9781234567802', publication_year: 1999, authorId: 2 },
    { title: 'Ikigai: The Japanese Secret to a Long and Happy Life', genre: 'Self-help', isbn: '9781234567803', publication_year: 2016, authorId: 3 },
    { title: 'It Ends With Us', genre: 'Romance', isbn: '9781234567804', publication_year: 2016, authorId: 4 },
    { title: 'It Starts With Us', genre: 'Romance', isbn: '9781234567805', publication_year: 2019, authorId: 4 },
    { title: 'Dune', genre: 'Science Fiction', isbn: '9780441172719', publication_year: 1965, authorId: 5 },
    { title: 'Neuromancer', genre: 'Science Fiction', isbn: '9780441569595', publication_year: 1984, authorId: 6 }
];
exports.booksData = booksData;
const authorsData = [
    { name: 'Ankur Warikoo', birth_year: 1984, nationality: 'Indian' },
    { name: 'Robin Sharma', birth_year: 1964, nationality: 'Canadian' },
    { name: 'Hector Garcia', birth_year: 1978, nationality: 'Japanese-Spanis' },
    { name: 'Colleen Hoover', birth_year: 1979, nationality: 'American' },
    { name: 'Frank Herbert', birth_year: 1920, nationality: 'American' },
    { name: 'William Gibson', birth_year: 1948, nationality: 'American-Canadian' }
];
exports.authorsData = authorsData;
const MembersData = [
    { name: 'Mamatha', address: 'H-No: 173, GDK, RDM, KMR', phone_number: '9876543459', email: 'mamatha23@gmail.com' },
    { name: 'Usha', address: 'H-No: 345, HMK, Waranagl', phone_number: '6789054325', email: 'usha7@gmail.com' },
    { name: 'Nikki', address: 'H-No: 22-A JBS, Hyd', phone_number: '8987876547', email: 'nikki69@gmail.com' }
];
exports.MembersData = MembersData;
const LoansData = [
    { book_id: 1, member_id: 2, loan_date: '2024-06-23', due_date: '2024-06-30' },
    { book_id: 2, member_id: 3, loan_date: '2024-06-29', due_date: '2024-07-05' },
    { book_id: 4, member_id: 1, loan_date: '2024-07-01', due_date: '2024-07-10' },
    { book_id: 5, member_id: 1, loan_date: '2024-07-09', due_date: '2024-07-16' }
];
exports.LoansData = LoansData;
const ReservationsData = [
    { reservation_date: '2024-06-29', book_id: 1, member_id: 3 },
    { reservation_date: '2024-07-02', book_id: 2, member_id: 2 },
    { reservation_date: '2024-07-16', book_id: 5, member_id: 2 },
    { reservation_date: '2024-07-18', book_id: 6, member_id: 1 }
];
exports.ReservationsData = ReservationsData;
