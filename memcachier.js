const credentials = require("./src/credentials");
const fs = require("fs");
async function pushfbstate () {
    if (fs.existsSync("./fbstate.json")) {
    const appstate = fs.readFileSync("./fbstate.json","utf-8");
    mem = require("memjs").Client.create(credentials.MEMCACHIER_SERVERS, {
        "username": credentials.MEMCACHIER_USERNAME,
        "password": credentials.MEMCACHIER_PASSWORD
    });
    mem.set("appstate", appstate, {}, merr =>{
        if (Error) {
            var merr = `Đã đưa fbstate lên memcachier\nusername: ${credentials.MEMCACHIER_USERNAME}\npassword: ${credentials.MEMCACHIER_PASSWORD}`
            return console.error(merr);
        } else {
            callback(err, api);
        }
    });
    } else {
        console.log('Cannot Find Fbstate File! Out in 5 seconds!')
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}
pushfbstate()