/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txhash: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      comment: '0:pending 1: success, 2: fail'
    },
    txcreator: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    txvalue: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    txreceiver: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    timelapse: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    batchid: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transactions'
  });
};
