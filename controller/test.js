export const test = async (ctx) => {
	ctx.status = 200;
    ctx.body = {success: true, data : "Setup is workig fine"};
}