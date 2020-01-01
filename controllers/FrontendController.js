const fs = require('fs');

class FrontendController
{
    call(method, res) {
        eval(`this.${method}`)(res);
    }

    index(res) {
        var data = fs.readFileSync(__dirname + '/../pages/index.html', "utf-8");
        res.write(data);
    }

    services(res) {
        var data = fs.readFileSync(__dirname + '/../pages/services.html', "utf-8");
        res.write(data);
    }

    test(res) {
        var data = fs.readFileSync(__dirname + '/../pages/test.html', "utf-8");
        res.write(data);
    }
}

module.exports = FrontendController;