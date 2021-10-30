import Sequelize from 'sequelize'

module.exports = (sequelize) => {
  const User = sequelize.define('User',{
      //Attributes
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email : {
        type: Sequelize.STRING,
      },
      password : {
        type: Sequelize.STRING,
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
      tableName: "Users",
      underscored:true,
      timestamps: true,
      paranoid: true,
    })
  return User;
}
