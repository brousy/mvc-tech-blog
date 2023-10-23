const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model by extending Sequelize's Model class
class Post extends Model {}

// Initialize the Post model by defining its attributes
Post.init(
  {
    // Define the "id" attribute
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define the "title" attribute
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define the "content" attribute
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {

    sequelize,
    timestamps: true, // Add "created_at" and "updated_at" timestamps
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use snake_case for column names
    modelName: 'post' // Set the model name to "post"
  }
);


module.exports = Post;