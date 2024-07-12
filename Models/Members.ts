import {  DataTypes } from 'sequelize';
import { sequelize } from '../controller/db';

type MemberAttributes = any;

const Member = sequelize.define<MemberAttributes>('Member', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address:{
        type: DataTypes.STRING(255)
    },
    phone_number: {
        type: DataTypes.STRING(20)
    },
    email:{
        type: DataTypes.STRING(255),
        unique: true
    },
    loanCount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
},{
    timestamps:false,
    indexes:[
        {
            unique:true,
            fields:['name'],
        }
    ]
});

export {Member, MemberAttributes};