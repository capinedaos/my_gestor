const { db, DataTypes } = require("../../utils/database.util");

// Create our first model (table)
const Area = db.define("area", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  nameArea: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Area };
