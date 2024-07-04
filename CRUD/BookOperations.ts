
import { Book } from '../Models/Books'

async function createBook(title: string, genre: string, isbn: string, publication_year: number, authorId: number): Promise<void>{
    try{

    const book = await Book.create({
        title, genre, isbn, publication_year, authorId
    });
    console.log("Book created !");
}catch(err){
    console.log("error inserting book",err);
}
}

//BulkCreate:

async function createBulkBooks(books:any):Promise<void> {
    try{
        const allBooks = await Book.bulkCreate(books)
        console.log("All books inserted successfully");
        //return allBooks;
    }catch(err){
        console.log("error inserting all books", err);
    }
}

//getAllBooks:

async function getAllBooks(){
    try{
        const books = await Book.findAll();
        console.table(books.map((book)=>book.toJSON()));
    }catch(err){
        console.log("error fetching all books");
    }
}

//getBookById:

async function getBookById(id: number){
    try{
        const bookById = await Book.findByPk(id);
        if(bookById){
            console.table(bookById.toJSON());
        }
        else{
            console.log("Book not found");
        }
    }catch(err){
        console.log("Error fetching book by the given Id");
    }

}

//delete:
async function deleteBook(id: number){
    try{
        const bookById = await Book.findByPk(id);
        if(bookById){
            await bookById.destroy();
            console.log("Deleted book successfully");
        }
        else{
            console.log("Book not found");
        }
    }catch(err){
        console.log("Error deleting book by the given Id");
    }

}

//Update:
async function updateBookData(id: number, updatedData: object){
    try{
        const bookById = await Book.findByPk(id);
        if(bookById){
            await bookById.update(updatedData);
            console.log("Updated book data");
        }else{
            console.log("Book not found");
        }
    }catch(err){
        console.log("Error updating book data");
    }
}

export {createBook,createBulkBooks, getAllBooks, getBookById , deleteBook, updateBookData };