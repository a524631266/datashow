var client = require('scp2');
var upconfig = require("./uploadconfig.json");
client.scp('dist', {
        port: upconfig.port,
        host: upconfig.host,
        username: upconfig.username,
        password: upconfig.password,
        path: upconfig.path
    }, function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log('上传完毕!\n')
    }
})
