// Import necessary modules and database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the User model by extending Sequelize's Model class
class User extends Model {}

// Initialize the User model by defining its attributes
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true 
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4] 
      }
    }
  },
  {

    sequelize,
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'user' 
  }
);


module.exports = User;