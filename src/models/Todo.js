const {Sequelize, DataTypes} = require('sequelize');
const path = require('path');
const sequelize = require(path.join(__dirname, '../../helper/database'));

const Todo = sequelize.define(
    'Todo',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
  
module.exports = Todo;