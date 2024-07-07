import express from 'express';
const app =express();
const router = express.Router();

import { Request, Response } from 'express';
import { Book } from '../Models/Books';



//get:
export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const books = await Book.findAll();
        if (books.length === 0) {
            res.json( "No Book Found" );
        } else {
            res.json({ Books: books });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
router.get('/', getAllBooks);


//Get one book:
export const getOneBook = async (req: Request, res: Response): Promise<void> => {
    try{
        const book = await Book.findByPk(req.params.id);
        if(book === null){
            res.json("Book not found");
        }
        res.json(book);
    }catch(err){
        res.json("error fetching book");
    }
};
router.get('/:id',getOneBook );


//Create a new book:
export const newBook = async (req: Request, res:Response):Promise<void> => {
    try{
        const book = await Book.create(req.body);
        res.json(book);
    }catch(err){
        res.json("Error creating new book");
    }
};
router.post('/', newBook);


//update a book:
export const UpdateBook = async (req:Request, res: Response):Promise<void> => {
    try{
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if(updated){
            const updatedBook = await Book.findByPk(req.params.id);
            res.json(updatedBook);
        }else{
            res.json("Book not found");
        }
    }catch(err){
        res.json("Error updating book data");
    }
};
router.put('/:id', UpdateBook);


//Delete a book:
export const deleteBook = async (req:Request, res:Response):Promise<void> => {
    try{
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if(deleted){
            res.json("Book deleted");
        }else{
            res.json("Book not found");
        }
    }catch(err){
        res.json("error deleting book");
    }
};

router.delete('/:id',deleteBook );

export { app, router };

