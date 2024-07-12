import { Book } from  '../Models/Books';
import { Author } from '../Models/Authors';
import { setAssociations } from '../controller/Associations';
import { title } from 'process';



async function bookAuthor () {
    const book:any= await Book.findOne({where:{title: 'Neuromancer'}})
    if (book){
        const author = await Author.findOne({where:{id:book.authorId}})
        if(author){
            console.table(author.toJSON());}

    }
    else{
        console.log("Book doesnt exist.")
    }
}


async function FindBookByAuthor(Id: number){
    try{
        const author = await Author.findByPk(Id);
        if(!author){
            throw new Error('Author not found');
        }
        const books = await Book.findAll({where: {authorId: author.id }})
        console.table(books.map((book) => book.toJSON()));
    }catch(error){
        throw new Error('Error finding books');
    }

}


async function groupByGenre(){
    try{
        const books = await Book.findAll({
            attributes: ['genre','title'],
            group: ['genre','title'],
            order: ['genre'],
        });
        console.table(books.map((book) => book.toJSON()));
    }catch(error){
        throw new Error('Error');
    }
}

async function getBooks() {
    try {
      const books = await Book.findAll();
      console.log(`Total Books: ${books.length}`);
      console.table(books.map(book => book.toJSON()));

    } catch (error) {
      throw new Error(`Error fetching all books: ${error}`);
    }
}
  
async function getBooksWithAuthors(){
    try{
        const booksWithAuthors = await Book.findAll({
            include: [ { model: Author, attributes: ['name', 'birth_year', 'nationality'],},],
        });

        const op = booksWithAuthors.map(book => {
            const bookdetails =  book.toJSON()
            return {
                id: bookdetails.id,
                title: book.title,
                genre: book.genre,
                isbn: book.isbn,
                publication_year: book.publication_year,
                authorName: `${bookdetails.Author.name}`,
                birth_year: `${bookdetails.Author.birth_year}`,
                nationality:`${bookdetails.Author.nationality}`
            }
        });
        console.table(op);
    }catch(error){
        throw new Error('Error fetching books with authors');
    }
}


  

export { bookAuthor, FindBookByAuthor, groupByGenre, getBooks, getBooksWithAuthors};






