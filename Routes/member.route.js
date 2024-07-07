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
exports.router = exports.app = exports.deleteMember = exports.UpdateMember = exports.newMember = exports.getOneMember = exports.getAllMembers = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const router = express_1.default.Router();
exports.router = router;
const Members_1 = require("../Models/Members");
//get:
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield Members_1.Member.findAll();
        if (members.length === 0) {
            res.json("No Members Found");
        }
        else {
            res.json({ Members: members });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllMembers = getAllMembers;
router.get('/', exports.getAllMembers);
//Get one member:
const getOneMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Members_1.Member.findByPk(req.params.id);
        if (member === null) {
            res.json("Member not found");
        }
        res.json(member);
    }
    catch (err) {
        res.json("error fetching member");
    }
});
exports.getOneMember = getOneMember;
router.get('/:id', exports.getOneMember);
//Create a new member:
const newMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Members_1.Member.create(req.body);
        res.json(member);
    }
    catch (err) {
        res.json("Error creating new member");
    }
});
exports.newMember = newMember;
router.post('/', exports.newMember);
//update a member:
const UpdateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Members_1.Member.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedMember = yield Members_1.Member.findByPk(req.params.id);
            res.json(updatedMember);
        }
        else {
            res.json("Member not found");
        }
    }
    catch (err) {
        res.json("Error updating member data");
    }
});
exports.UpdateMember = UpdateMember;
router.put('/:id', exports.UpdateMember);
//Delete a member:
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Members_1.Member.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json("Member deleted");
        }
        else {
            res.json("Member not found");
        }
    }
    catch (err) {
        res.json("error deleting member");
    }
});
exports.deleteMember = deleteMember;
router.delete('/:id', exports.deleteMember);
