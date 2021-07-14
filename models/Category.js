const {
  Model,
  DataTypes
} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
  // define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
});

module.exports = Category;


// // This column will store a reference of the `id` of the `Driver` that owns this License
// driver_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     // This references the `driver` model, which we set in `Driver.js` as its `modelName` property
//     model: 'driver',
//     key: 'id',
//   },
// },