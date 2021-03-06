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
      email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isValid(value) {
          if (isNaN(value) || value.length != 10) {
            throw new Error('invalid mobile number!');
          }
        }
      },
      role : {
        type: Sequelize.STRING,
        isIn : [['SEEKER', "ADMIN"]]
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      otp : {
        type : Sequelize.SMALLINT,
      },
    },
    {
      sequelize,
      tableName: "Users",
      underscored:true,
      timestamps: true,
      paranoid: true,
    })
  }
}
