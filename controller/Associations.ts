import { Book } from '../Models/Books';
import { Author } from '../Models/Authors';
import { Loan } from '../Models/Loans';
import { Member } from '../Models/Members';
import { Reservation } from '../Models/Reservations';

async function setAssociations (){
    
    Author.hasMany(Book, { foreignKey: 'authorId' });
    Book.belongsTo(Author, { foreignKey: 'authorId' });

    Book.hasMany(Loan,{ foreignKey: 'id' });
    Loan.belongsTo(Book, { foreignKey: 'book_id' });
    Loan.belongsTo(Member, { foreignKey: 'member_id' });


    Book.hasMany(Reservation, { foreignKey: 'book_id' });
    Reservation.belongsTo(Book,{foreignKey: 'book_id' });
    Reservation.belongsTo(Member, { foreignKey: 'member_id' });

}

export { setAssociations}