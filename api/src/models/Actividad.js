const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true
    },
    nombre: {
        type:DataTypes.STRING,
        allowNull:false,
      },
    dificultad: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    duracion: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    temporada: {
        type:DataTypes.ENUM('Verano', 'Otoño','Invierno','Primavera'),
        allowNull:false,
    },
  });
};
