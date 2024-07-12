import { Member } from'../Models/Members';
import { Book } from '../Models/Books';
import { Author } from '../Models/Authors';
import { Loan } from '../Models/Loans';
import { Reservation } from '../Models/Reservations';
import { setAssociations } from '../controller/Associations';

async function getMemberDetails(memberId: number){
  try{
    const memberDetails =  await Member.findByPk(memberId, {
      include: [
        {
          model: Loan,
          attributes: [ 'id', 'book_id', 'loan_date', 'due_date'],
        },
        {
          model: Reservation,
          attributes: [ 'id', 'book_id', 'reservation_date'],
        }
      ],
    });
    if(!memberDetails){
      throw new Error (`Member with ID ${memberId} not found`);
    }
    // console.log(memberDetails.Loans)
    const op = {
      id : memberDetails.id,
      name: memberDetails.name,
      address: memberDetails.address,
      phone_number: memberDetails.phone_number,
      email: memberDetails.email,
      loans: memberDetails.Loans.map((loan:any) => {
        loan  = loan.toJSON();
        console.log(loan)
        return{
          id: loan.id,
          book_id: loan.book_id,
          loan_date: loan.loan_date,
          due_date: loan.due_date
        }

      }),
      reservations: memberDetails.Reservations.map((reservation:any) => ({
        id: reservation.id,
        book_id: reservation.book_id,
        reservation_date: reservation.reservation_date
      })),

    };
    console.table(op);
  }catch(error){
    throw new Error (`Error fetching data ${error}`);
  }

}

export { getMemberDetails};