import express from 'express';
const app =express();
const router = express.Router();

import { Request, Response } from 'express';
import { Author } from '../Models/Authors';



//get:
export const getAllAuthors = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const authors = await Author.findAll();
        if (authors.length === 0) {
            res.json( "No Authors Found" );
        } else {
            res.json({ Authors: authors });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
router.get('/', getAllAuthors);


//Get one authors:
export const getOneAuthor = async (req: Request, res: Response): Promise<void> => {
    try{
        const author = await Author.findByPk(req.params.id);
        if(author === null){
            res.json("Author not found");
        }
        res.json(author);
    }catch(err){
        res.json("error fetching author");
    }
};
router.get('/:id',getOneAuthor );


//Create a new author:
export const newAuthor = async (req: Request, res:Response):Promise<void> => {
    try{
        const author = await Author.create(req.body);
        res.json(author);
    }catch(err){
        res.json("Error creating new author");
    }
};
router.post('/', newAuthor);


//update an author:
export const UpdateAuthor = async (req:Request, res: Response):Promise<void> => {
    try{
        const [updated] = await Author.update(req.body, {where: {id: req.params.id}});
        if(updated){
            const updatedAuthor = await Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        }else{
            res.json("Author not found");
        }
    }catch(err){
        res.json("Error updating author data");
    }
};
router.put('/:id', UpdateAuthor);


//Delete an author:
export const deleteAuthor = async (req:Request, res:Response):Promise<void> => {
    try{
        const deleted = await Author.destroy({where: {id: req.params.id}});
        if(deleted){
            res.json("Author deleted");
        }else{
            res.json("Author not found");
        }
    }catch(err){
        res.json("error deleting author");
    }
};

router.delete('/:id',deleteAuthor );

export { app, router };

