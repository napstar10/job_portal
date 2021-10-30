import Sequelize from 'sequelize'
const  { DataTypes, Model, Op } = Sequelize;
import db from "../model/index.js";


/**
 * service for user signup/create
 *  
 */
export const addJob = async(userId, reqData) => {
    try{
        const createRes = await db.User.findOne({where : {id : userId}});
        if(createRes === null) {
            //user does not exist
        } else if (createRes.role !== 'ADMIN') {
            throw new Error('You do not have admin rights !');
        } 

        reqData.JobId = userId;
        reqData.listed_by = createRes.email;

        const addJobRes = await db.Job.create(reqData);        
        console.log(`addJobRes is : ${JSON.stringify(addJobRes)}`);
        return {};
    }
    catch(e){
        console.log('Error in addJob', e.stack);
        return {success: false, message: e.message};
    }
}