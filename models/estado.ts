import { DataTypes } from "sequelize";
import db from "../database/connect";
import Campo from "./campo";

const Estado = db.define('estados',{
    nombre:{
        type:DataTypes.STRING
    },
    actividad:{
        type:DataTypes.STRING
    },
    color:{
        type:DataTypes.STRING
    },
    activo:{
        type:DataTypes.BOOLEAN
    },
});

export default Estado;