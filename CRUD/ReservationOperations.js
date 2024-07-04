"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = createReservation;
exports.createBulkReservations = createBulkReservations;
exports.getAllReservations = getAllReservations;
exports.getReservationById = getReservationById;
exports.deleteReservation = deleteReservation;
exports.updateReservationData = updateReservationData;
const Reservations_1 = require("../Models/Reservations");
function createReservation(reservation_date, book_id, member_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reserved = yield Reservations_1.Reservation.create({
                reservation_date, book_id, member_id
            });
            console.log("Reservation of a member created !");
        }
        catch (err) {
            console.log("error inserting reservation for a member", err);
        }
    });
}
//BulkCreate:
function createBulkReservations(reservations) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allReservations = yield Reservations_1.Reservation.bulkCreate(reservations);
            console.log("All reservations inserted successfully");
        }
        catch (err) {
            console.log("error inserting all reservations", err);
        }
    });
}
//getAllReservations:
function getAllReservations() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reservations = yield Reservations_1.Reservation.findAll();
            console.table(reservations.map((reserved) => reserved.toJSON()));
        }
        catch (err) {
            console.log("error fetching reservation details");
        }
    });
}
//getReservationById:
function getReservationById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reservationById = yield Reservations_1.Reservation.findByPk(id);
            if (reservationById) {
                console.table(reservationById.toJSON());
            }
            else {
                console.log("Reservation id not found");
            }
        }
        catch (err) {
            console.log("Error fetching reservation data by the given Id");
        }
    });
}
//delete:
function deleteReservation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reservationById = yield Reservations_1.Reservation.findByPk(id);
            if (reservationById) {
                yield reservationById.destroy();
                console.log("Deleted reservation successfully");
            }
            else {
                console.log("Reservation id  not found");
            }
        }
        catch (err) {
            console.log("Error deleting reservation by the given Id");
        }
    });
}
//Update:
function updateReservationData(id, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reservationById = yield Reservations_1.Reservation.findByPk(id);
            if (reservationById) {
                yield reservationById.update(updatedData);
                console.log("Updated reservation data");
            }
            else {
                console.log("Reservation id not found");
            }
        }
        catch (err) {
            console.log("Error updating reservation data");
        }
    });
}
