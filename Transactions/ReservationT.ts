import { Reservation } from "../Models/Reservations";
import { Book } from '../Models/Books';
import { Member } from "../Models/Members";
import { Loan } from "../Models/Loans";
import { sequelize } from "../controller/db";

async function placeReservation(bookId: number, memberId: number){
    const transaction = await sequelize.transaction();

    try{
        const book = await Book.findOne({
                where: {id: bookId, status: 'available'}, transaction
            });
        if(!book) throw new Error('The book is not available');

        await Reservation.create({
            bookId,
            memberId,
            reservation_date: new Date(),
        }, {transaction});

        await Book.update({ status: 'reserved'}, {where: {id: bookId},transaction});

        await transaction.commit();
        console.log('Transaction has been committed');
    }catch(error){
        await transaction.rollback();
        console.log('Transaction has been rolled back', error);
    }
}

export { placeReservation};