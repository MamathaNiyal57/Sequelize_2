import { Reservation } from '../Models/Reservations'

async function createReservation(reservation_date: Date, book_id: number, member_id: number): Promise<void>{
    try{
    const reserved = await Reservation.create({
        reservation_date, book_id, member_id
    });
    console.log("Reservation of a member created !");
}catch(err){
    console.log("error inserting reservation for a member",err);
}
}

//BulkCreate:

async function createBulkReservations(reservations:any):Promise<void> {
    try{
        const allReservations = await Reservation.bulkCreate(reservations)
        console.log("All reservations inserted successfully");
    }catch(err){
        console.log("error inserting all reservations", err);
    }
}

//getAllReservations:

async function getAllReservations(){
    try{
        const reservations = await Reservation.findAll();
        console.table(reservations.map((reserved)=>reserved.toJSON()));
    }catch(err){
        console.log("error fetching reservation details");
    }
}

//getReservationById:

async function getReservationById(id: number){
    try{
        const reservationById = await Reservation.findByPk(id);
        if(reservationById){
            console.table(reservationById.toJSON());
        }
        else{
            console.log("Reservation id not found");
        }
    }catch(err){
        console.log("Error fetching reservation data by the given Id");
    }

}

//delete:
async function deleteReservation(id: number){
    try{
        const reservationById = await Reservation.findByPk(id);
        if(reservationById){
            await reservationById.destroy();
            console.log("Deleted reservation successfully");
        }
        else{
            console.log("Reservation id  not found");
        }
    }catch(err){
        console.log("Error deleting reservation by the given Id");
    }

}

//Update:
async function updateReservationData(id: number, updatedData: object){
    try{
        const reservationById = await Reservation.findByPk(id);
        if(reservationById){
            await reservationById.update(updatedData);
            console.log("Updated reservation data");
        }else{
            console.log("Reservation id not found");
        }
    }catch(err){
        console.log("Error updating reservation data");
    }
}

export {createReservation, createBulkReservations, getAllReservations, getReservationById, deleteReservation, updateReservationData};