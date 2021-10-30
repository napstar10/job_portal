import Sequelize from 'sequelize'
const  { DataTypes, Model, Op } = Sequelize;
import db from "../model/index.js";


/**
 * service for addJob
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

/**
 * service for viewJob
 *  
 */
export const viewJob = async(jobId) => {
    try{
        const viewRes = await db.Job.findOne({where : {id : jobId}});     
        console.log(`viewRes is : ${JSON.stringify(viewRes)}`);
        return viewRes;
    }
    catch(e){
        console.log('Error in viewJob', e.stack);
        return {success: false, message: e.message};
    }
}

/**
 * service for listJobs
 *  
 */
export const listJobs = async() => {
    try{
        const viewRes = await db.Job.findAll({where : {is_active : true}});    
        console.log(`viewRes is : ${JSON.stringify(viewRes)}`);
        return viewRes;
    }
    catch(e){
        console.log('Error in viewJob', e.stack);
        return {success: false, message: e.message};
    }
}