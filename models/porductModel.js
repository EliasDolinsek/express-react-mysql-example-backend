import {Sequelize} from "sequelize"
import db from "../config/database.js"

const {DataTypes} = Sequelize;

const Product = db.define('products', {
    idproducts: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE,
    },
}, {
    freezeTableName: true,
    updatedAt: "update_date",
    createdAt: "create_date"
})

export default Product