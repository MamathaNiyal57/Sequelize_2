import { Member } from '../Models/Members'

async function createMember(name: string, address: string, phone_number: string, email: string ): Promise<void>{
    try{

    const member = await Member.create({
        name, address, phone_number, email
    });
    console.log("Member created !");
}catch(err){
    console.log("error inserting Member",err);
}
}

//BulkCreate:
async function createBulkMembers(members:any):Promise<void> {
    try{
        const allMembers = await Member.bulkCreate(members)
        console.log("All members inserted successfully");
        
    }catch(err){
        console.log("error inserting all members", err);
    }
}

//getAllMembers:
async function getAllMembers(){
    try{
        const members = await Member.findAll();
        console.table(members.map((member)=>member.toJSON()));
    }catch(err){
        console.log("error fetching all members");
    }
}

//getMemberById:
async function getMemberById(id: number){
    try{
        const memberById = await Member.findByPk(id);
        if(memberById){
            console.table(memberById.toJSON());
        }
        else{
            console.log("Member not found");
        }
    }catch(err){
        console.log("Error fetching member by the given Id");
    }

}

//delete:
async function deleteMember(id: number){
    try{
        const memberById = await Member.findByPk(id);
        if(memberById){
            await memberById.destroy();
            console.log("Deleted Member successfully");
        }
        else{
            console.log("Member not found");
        }
    }catch(err){
        console.log("Error deleting member by the given Id");
    }

}

//Update:
async function updateMemberData(id: number, updatedData: object){
    try{
        const memberById = await Member.findByPk(id);
        if(memberById){
            await memberById.update(updatedData);
            console.log("Updated member data");
        }else{
            console.log("Member not found");
        }
    }catch(err){
        console.log("Error updating member data");
    }
}

export {createMember, createBulkMembers, getAllMembers, getMemberById, deleteMember, updateMemberData};