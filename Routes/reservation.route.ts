import express from 'express';
const app =express();
const router = express.Router();

import { Request, Response } from 'express';
import { Reservation } from '../Models/Reservations';



//get:
export const getAllReservations = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const reservations = await Reservation.findAll();
        if (reservations.length === 0) {
            res.json( "No reservation data found" );
        } else {
            res.json({ Reservations: reservations });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
router.get('/', getAllReservations);


//Get one reservation:
export const getOneReservation = async (req: Request, res: Response): Promise<void> => {
    try{
        const reservation = await Reservation.findByPk(req.params.id);
        if(reservation === null){
            res.json("Reservation data not found");
        }
        res.json(reservation);
    }catch(err){
        res.json("error fetching reservation data");
    }
};
router.get('/:id',getOneReservation );


//Create a new reservation:
export const newReservation = async (req: Request, res:Response):Promise<void> => {
    try{
        const reservation = await Reservation.create(req.body);
        res.json(reservation);
    }catch(err){
        res.json("Error creating new reservation");
    }
};
router.post('/', newReservation);


//update an reservation:
export const UpdateReservationData = async (req:Request, res: Response):Promise<void> => {
    try{
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if(updated){
            const updatedReservationData = await Reservation.findByPk(req.params.id);
            res.json(updatedReservationData);
        }else{
            res.json("Reservation not found");
        }
    }catch(err){
        res.json("Error updating reservation data");
    }
};
router.put('/:id', UpdateReservationData);


//Delete a reservation data:
export const deleteReservation = async (req:Request, res:Response):Promise<void> => {
    try{
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if(deleted){
            res.json("Reservation deleted");
        }else{
            res.json("Reservation data not found");
        }
    }catch(err){
        res.json("error deleting reservation details");
    }
};

router.delete('/:id',deleteReservation );

export { app, router };

