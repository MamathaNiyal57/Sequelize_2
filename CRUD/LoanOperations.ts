import { Loan } from '../Models/Loans'

async function createLoan( loan_date: Date, due_date: Date, book_id: number, member_id: number): Promise<void>{
    try{
    const loan = await Loan.create({
        loan_date, due_date, book_id, member_id
    });
    console.log("Loan data created !");
}catch(err){
    console.log("error inserting loan data",err);
}
}

//BulkCreate:

async function createBulkLoanRecords(loans:any):Promise<void> {
    try{
        const allLoans = await Loan.bulkCreate(loans)
        console.log("All loan data inserted successfully");
    }catch(err){
        console.log("error inserting all loans data", err);
    }
}

//getAllLoansData:

async function getAllLoansData(){
    try{
        const loans = await Loan.findAll();
        console.table(loans.map((loan)=>loan.toJSON()));
    }catch(err){
        console.log("error fetching all loans data");
    }
}

//getLoansDataById:

async function getLoansDataById(id: number){
    try{
        const loanById = await Loan.findByPk(id);
        if(loanById){
            console.table(loanById.toJSON());
        }
        else{
            console.log("Loan not found");
        }
    }catch(err){
        console.log("Error fetching loan data by the given Id");
    }

}

//delete:
async function deleteLoanData(id: number){
    try{
        const loanById = await Loan.findByPk(id);
        if(loanById){
            await loanById.destroy();
            console.log("Deleted loan data successfully");
        }
        else{
            console.log("Loan data not found");
        }
    }catch(err){
        console.log("Error deleting loan data by the given Id");
    }

}

//Update:
async function updateLoanData(id: number, updatedData: object){
    try{
        const loanById = await Loan.findByPk(id);
        if(loanById){
            await loanById.update(updatedData);
            console.log("Updated loan data");
        }else{
            console.log("Loan id  not found");
        }
    }catch(err){
        console.log("Error updating loan data");
    }
}

export {createLoan, createBulkLoanRecords, getAllLoansData, getLoansDataById, deleteLoanData, updateLoanData};