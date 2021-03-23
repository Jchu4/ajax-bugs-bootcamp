export default function initBugModel(sequelize, DataTypes) {
  return sequelize.define(
    'Bug',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      problem: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      errorText: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      commit: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      featureId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    },
  );
}
