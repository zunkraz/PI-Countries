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
      // allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
