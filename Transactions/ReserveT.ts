import { Reservation } from "../Models/Reservations";
import { Book } from '../Models/Books';
import { Member } from "../Models/Members";
import { Loan } from "../Models/Loans";
import { sequelize } from "../controller/db";

async function cancelReservation(bookId:number, memberId:number){
    const transaction = await sequelize.transaction();

    try{
        const book = await Book.findOne({where: {id: bookId}, transaction});
        if(!book){
            throw new Error('The book doesnot exist');
        }
        await Reservation.destroy({
            where: {bookId, memberId}, 
            transaction
        });

        const reservationCount = await Reservation.count({
            where: {id: bookId}, 
            transaction,
        });
        if(reservationCount === 0){
            await Book.update(
                {status: 'available'},
                 {where: {id: bookId}, transaction}
            );
        }

        await transaction.commit();
        console.log('Transaction has been committed');
    }catch(error){
        await transaction.rollback();
        console.log('Transaction has been rolled back', error);
    }
}

export { cancelReservation};