import {signup, verifyUser, loginUser} from '../service/user.js';

/**
 * Controller for user signup/create
 *  
 */
export const create = async (ctx) => {
	try{
		
        const body = ctx.request.body;
        console.log(body);
        if(!body.email || !body.password || !body.mobile || !body.role){
            ctx.status = 400;
            ctx.body = {success: false, message: 'Bad Request'};
            return;
        };

        const response = await signup(body);
        ctx.status = 200;
        ctx.body = {success: true, data : response};
    }
    catch(e){
        console.log('Error in create controller', e.message);
        ctx.status = 500;
        ctx.body = { success : false, message: e.message };
    }
}


/**
 * Controller for user verification
 *  
 */
export const verify = async (ctx) => {
	try{
		
        const { email, mobile, otp } = ctx.request.body;
        if((!email && !mobile) || !otp){
            ctx.status = 400;
            ctx.body = {success: false, message: 'Bad Request'};
            return;
        };

        const response = await verifyUser(ctx.request.body);
        ctx.status = 200;
        ctx.body = {success: true, data : 'User verified successfully!'};
    }
    catch(e){
        console.log('Error in verify controller', e.stack);
        ctx.status = 500;
        ctx.body = { success : false, message: e.message };
    }
}


/**
 * Controller for user login
 *  
 */
export const login = async (ctx) => {
	try{
		
        const { email, password, role } = ctx.request.body;

        if(!email && !password && !role){
            ctx.status = 400;
            ctx.body = {success: false, message: 'Bad Request'};
            return;
        }

        const response = await loginUser(ctx.request.body);
        ctx.status = response.code;
        ctx.body = {success: true, data : response.token};
    }
    catch(e){
        console.log('Internal Server Error', e.stack);
        ctx.status = 500;
        ctx.body = { success : false, message: e.message };
    }
}







