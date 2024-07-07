import express from 'express';
const app =express();
const router = express.Router();

import { Request, Response } from 'express';
import { Member  } from '../Models/Members';



//get:
export const getAllMembers = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const members = await Member.findAll();
        if (members.length === 0) {
            res.json( "No Members Found" );
        } else {
            res.json({ Members: members });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
router.get('/', getAllMembers);


//Get one member:
export const getOneMember = async (req: Request, res: Response): Promise<void> => {
    try{
        const member = await Member.findByPk(req.params.id);
        if(member === null){
            res.json("Member not found");
        }
        res.json(member);
    }catch(err){
        res.json("error fetching member");
    }
};
router.get('/:id',getOneMember );


//Create a new member:
export const newMember = async (req: Request, res:Response):Promise<void> => {
    try{
        const member = await Member.create(req.body);
        res.json(member);
    }catch(err){
        res.json("Error creating new member");
    }
};
router.post('/', newMember);


//update a member:
export const UpdateMember = async (req:Request, res: Response):Promise<void> => {
    try{
        const [updated] = await Member.update(req.body, {where: {id: req.params.id}});
        if(updated){
            const updatedMember = await Member.findByPk(req.params.id);
            res.json(updatedMember);
        }else{
            res.json("Member not found");
        }
    }catch(err){
        res.json("Error updating member data");
    }
};
router.put('/:id', UpdateMember);


//Delete a member:
export const deleteMember = async (req:Request, res:Response):Promise<void> => {
    try{
        const deleted = await Member.destroy({where: {id: req.params.id}});
        if(deleted){
            res.json("Member deleted");
        }else{
            res.json("Member not found");
        }
    }catch(err){
        res.json("error deleting member");
    }
};

router.delete('/:id',deleteMember );

export { app, router };

