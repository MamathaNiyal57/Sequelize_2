import { DataTypes } from 'sequelize';
import { sequelize } from '../controller/db';

import { Book } from './Books';
import { Member } from './Members';

type ReservationAttributes = any;

const Reservation =sequelize.define<ReservationAttributes>('Reservation', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true

    },
    reservation_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Book,
            key: 'id'
        }
    },
    member_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Member,
            key: 'id'
        }
    }
},{
    timestamps:false
});



export {Reservation, ReservationAttributes}