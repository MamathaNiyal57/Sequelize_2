import { Author } from '../Models/Authors'

async function createAuthor(name: string, birth_year: number, nationality: string): Promise<void>{
    try{
    const author = await Author.create({
        name, birth_year, nationality
    });
    console.log("Author created !");
}catch(err){
    console.log("error inserting Author",err);
}
}

//BulkCreate:
async function createBulkAuthors(authors:any):Promise<void> {
    try{
        const allAuthors = await Author.bulkCreate(authors)
        console.log("All Authors inserted successfully");
    }catch(err){
        console.log("error inserting all authors", err);
    }
}

//getAllAuthors:
async function getAllAuthors(){
    try{
        const authors = await Author.findAll();
        console.table(authors.map((author)=>author.toJSON()));
    }catch(err){
        console.log("error fetching all authors");
    }
}

//getAuthorById:
async function getAuthorById(id: number){
    try{
        const authorById = await Author.findByPk(id);
        if(authorById){
            console.table(authorById.toJSON());
        }
        else{
            console.log("Author not found");
        }
    }catch(err){
        console.log("Error fetching author by the given Id");
    }
}

//delete:
async function deleteAuthor(id: number){
    try{
        const authorById = await Author.findByPk(id);
        if(authorById){
            await authorById.destroy();
            console.log("Deleted author successfully");
        }
        else{
            console.log("Author not found");
        }
    }catch(err){
        console.log("Error deleting author by the given Id");
    }

}

//Update:
async function updateAuthorData(id: number, updateData: object){
    try{
        const authorById = await Author.findByPk(id);
        if(authorById){
            await authorById.update(updateData);
            console.log("Updated author data");
        }else{
            console.log("Author not found");
        }
    }catch(err){
        console.log("Error updating author data");
    }
}

export {createAuthor, createBulkAuthors, getAllAuthors, getAuthorById , deleteAuthor, updateAuthorData};