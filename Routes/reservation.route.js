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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.app = exports.deleteReservation = exports.UpdateReservationData = exports.newReservation = exports.getOneReservation = exports.getAllReservations = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const router = express_1.default.Router();
exports.router = router;
const Reservations_1 = require("../Models/Reservations");
//get:
const getAllReservations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservations = yield Reservations_1.Reservation.findAll();
        if (reservations.length === 0) {
            res.json("No reservation data found");
        }
        else {
            res.json({ Reservations: reservations });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllReservations = getAllReservations;
router.get('/', exports.getAllReservations);
//Get one reservation:
const getOneReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield Reservations_1.Reservation.findByPk(req.params.id);
        if (reservation === null) {
            res.json("Reservation data not found");
        }
        res.json(reservation);
    }
    catch (err) {
        res.json("error fetching reservation data");
    }
});
exports.getOneReservation = getOneReservation;
router.get('/:id', exports.getOneReservation);
//Create a new reservation:
const newReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield Reservations_1.Reservation.create(req.body);
        res.json(reservation);
    }
    catch (err) {
        res.json("Error creating new reservation");
    }
});
exports.newReservation = newReservation;
router.post('/', exports.newReservation);
//update an reservation:
const UpdateReservationData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Reservations_1.Reservation.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedReservationData = yield Reservations_1.Reservation.findByPk(req.params.id);
            res.json(updatedReservationData);
        }
        else {
            res.json("Reservation not found");
        }
    }
    catch (err) {
        res.json("Error updating reservation data");
    }
});
exports.UpdateReservationData = UpdateReservationData;
router.put('/:id', exports.UpdateReservationData);
//Delete a reservation data:
const deleteReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Reservations_1.Reservation.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json("Reservation deleted");
        }
        else {
            res.json("Reservation data not found");
        }
    }
    catch (err) {
        res.json("error deleting reservation details");
    }
});
exports.deleteReservation = deleteReservation;
router.delete('/:id', exports.deleteReservation);
