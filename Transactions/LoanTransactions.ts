import { DATE } from 'sequelize';
import { Book } from '../Models/Books';
import { Loan } from '../Models/Loans';
import { Member} from '../Models/Members';
import { setAssociations } from '../controller/Associations';
import { sequelize } from '../controller/db';

async function issueBook(bookId: number, memberId: number){

    const transaction = await sequelize.transaction();

    try{
        const book = await Book.findOne({
            where:{ id: bookId,status: 'available'},
            transaction
        });
        if(!book)
            throw new Error('The book is not available for loan');

        await Loan.create({
            bookId,
            memberId,
            loan_date: new Date(),
            due_date: new Date(new Date().setDate(new Date().getDate()+10)),
        }, { transaction});

        await Book.update(
            { status: 'loaned'},
            { where: { id: bookId}, transaction}
        );

        await Member.increment(
            'loanCount',
            { by: 1, where: {id: memberId}, transaction}
        );

        await transaction.commit();
        console.log('Transaction has been committed');
    }catch(error){
        await transaction.rollback();
        console.log('Transaction has been rolled back', error);
    }
}

export { issueBook};