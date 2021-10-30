import {addJob} from '../service/jobListing.js'
/**
 * Controller for adding a job 
 *  
 */
export const add = async (ctx) => {
	try{
		
        const body = ctx.request.body;
        const {userid} = ctx.request.header;
        console.log(body, ctx.request.header);
        if(!body.title || !body.company_name || !body.location || !userid){
            ctx.status = 400;
            ctx.body = {success: false, message: 'Bad Request'};
            return;
        };

        const response = await addJob(userid, body);
        ctx.status = 200;
        ctx.body = {success: true, data : response};
    }
    catch(e){
        console.log('Error in create controller', e.message);
        ctx.status = 500;
        ctx.body = { success : false, message: e.message };
    }
}

    