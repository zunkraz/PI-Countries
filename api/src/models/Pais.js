const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Country', {
    id: {
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'No capital'
      
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    area: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
  });
};
