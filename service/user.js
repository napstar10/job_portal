import Sequelize from 'sequelize'
const  { DataTypes, Model, Op } = Sequelize;
import db from "../model/index.js";


/**
 * service for user signup/create
 *  
 */
export const signup = async(reqData) => {
    try{
        //note: not hashing the password because of time limits of this assignment
        reqData.otp = Math.floor(1000 + Math.random() * 9000);
        let otp = Math.floor(1000 + Math.random() * 9000);
        const createRes = await db.User.create(reqData);
        console.log(`createRes is : ${JSON.stringify(createRes)}`);
        return {};
    }
    catch(e){
        console.log('Error in signup', e.stack);
        return {success: false, message: e.message};
    }
}

/**
 * service for user verification
 *  
 */
export const verifyUser = async(reqData) => {
    try{
        let query = {};
        if(reqData.email) {
            query.email= reqData.email;
        } else {
            query.mobile= reqData.mobile;
        }

        query.otp = reqData.otp;


        const createRes = await db.User.findOne({where: query});
        if(createRes !== null) {
            await db.User.update({is_active: true}, {where: query});
            console.log(`createRes is : ${JSON.stringify(createRes)}`);
            return true;
        } else {
            throw new Error('Invalid otp or email/mobile');
        }
        
    }
    catch(e){
        console.log('Error in verifyUser', e.stack);
        return {success: false, message: e.message};
    }
}


/**
 * service for user login
 *  
 */
export const loginUser = async(reqData) => {
    try{
        const loginRes = await db.User.findOne({where: {email : reqData.email}});
        // console.log(loginRes);
        let responseCode = {error : null, token : null};
        if(loginRes === null) {
            responseCode.code = 100;
        } else if(loginRes.dataValues.password !== reqData.password){
            responseCode.code = 200;
        } else if(loginRes.dataValues.role !== reqData.role) {
            responseCode.code = 300;
        } else {
            responseCode.code = 200; 
            responseCode.token = 'some JWT web token here';
        }
        return responseCode;
    }
    catch(e){
        console.log('Error in verifyUser', e.stack);
        return {success: false, message: e.message};
    }
}









