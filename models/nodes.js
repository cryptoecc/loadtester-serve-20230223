/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nodes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    enode: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ipaddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastalive: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lastaliveunix: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cumulcount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nodes'
  });
};
