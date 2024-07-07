import express from 'express';
const app =express();
const router = express.Router();

import { Request, Response } from 'express';
import { Loan } from '../Models/Loans';



//get:
export const getAllLoans = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const loans = await Loan.findAll();
        if (loans.length === 0) {
            res.json( "No loans Found" );
        } else {
            res.json({ Loans: loans });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
router.get('/', getAllLoans);


//Get one loan:
export const getOneLoan = async (req: Request, res: Response): Promise<void> => {
    try{
        const loan = await Loan.findByPk(req.params.id);
        if(loan === null){
            res.json("Loan not found");
        }
        res.json(loan);
    }catch(err){
        res.json("error fetching loan data");
    }
};
router.get('/:id',getOneLoan );


//Create a new loan:
export const newLoan = async (req: Request, res:Response):Promise<void> => {
    try{
        const loan = await Loan.create(req.body);
        res.json(loan);
    }catch(err){
        res.json("Error creating new loan");
    }
};
router.post('/', newLoan);


//update a loan:
export const UpdateLoan = async (req:Request, res: Response):Promise<void> => {
    try{
        const [updated] = await Loan.update(req.body, {where: {id: req.params.id}});
        if(updated){
            const updatedLoan = await Loan.findByPk(req.params.id);
            res.json(updatedLoan);
        }else{
            res.json("Loan not found");
        }
    }catch(err){
        res.json("Error updating loan data");
    }
};
router.put('/:id', UpdateLoan);


//Delete a loan data:
export const deleteLoan = async (req:Request, res:Response):Promise<void> => {
    try{
        const deleted = await Loan.destroy({where: {id: req.params.id}});
        if(deleted){
            res.json("Loan data deleted");
        }else{
            res.json("Loan data not found");
        }
    }catch(err){
        res.json("error deleting loans data");
    }
};

router.delete('/:id',deleteLoan );

export { app, router };

