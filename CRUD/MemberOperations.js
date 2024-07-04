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
exports.createMember = createMember;
exports.createBulkMembers = createBulkMembers;
exports.getAllMembers = getAllMembers;
exports.getMemberById = getMemberById;
exports.deleteMember = deleteMember;
exports.updateMemberData = updateMemberData;
const Members_1 = require("../Models/Members");
function createMember(name, address, phone_number, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const member = yield Members_1.Member.create({
                name, address, phone_number, email
            });
            console.log("Member created !");
        }
        catch (err) {
            console.log("error inserting Member", err);
        }
    });
}
//BulkCreate:
function createBulkMembers(members) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allMembers = yield Members_1.Member.bulkCreate(members);
            console.log("All members inserted successfully");
        }
        catch (err) {
            console.log("error inserting all members", err);
        }
    });
}
//getAllMembers:
function getAllMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const members = yield Members_1.Member.findAll();
            console.table(members.map((member) => member.toJSON()));
        }
        catch (err) {
            console.log("error fetching all members");
        }
    });
}
//getMemberById:
function getMemberById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const memberById = yield Members_1.Member.findByPk(id);
            if (memberById) {
                console.table(memberById.toJSON());
            }
            else {
                console.log("Member not found");
            }
        }
        catch (err) {
            console.log("Error fetching member by the given Id");
        }
    });
}
//delete:
function deleteMember(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const memberById = yield Members_1.Member.findByPk(id);
            if (memberById) {
                yield memberById.destroy();
                console.log("Deleted Member successfully");
            }
            else {
                console.log("Member not found");
            }
        }
        catch (err) {
            console.log("Error deleting member by the given Id");
        }
    });
}
//Update:
function updateMemberData(id, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const memberById = yield Members_1.Member.findByPk(id);
            if (memberById) {
                yield memberById.update(updatedData);
                console.log("Updated member data");
            }
            else {
                console.log("Member not found");
            }
        }
        catch (err) {
            console.log("Error updating member data");
        }
    });
}
