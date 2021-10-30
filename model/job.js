import pkg from 'sequelize';
const {  Sequelize, DataTypes, Model } = pkg;


export default class Job extends Model {
  static init(sequelize) {
    return super.init({
      //Attributes
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title : {
        type: Sequelize.STRING,
      },
      company_name : {
        type: Sequelize.STRING,
      },
      location : {
        type: Sequelize.STRING,
      },
      position : {
        type: Sequelize.STRING,
      },
      specialization: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      description: {
        type: Sequelize.STRING,
      },
      listed_by : {
        type : Sequelize.STRING,
      }
    },
    {
      sequelize,
      tableName: "Jobs",
      underscored:true,
      timestamps: true,
      paranoid: true,
    })
  }
}
