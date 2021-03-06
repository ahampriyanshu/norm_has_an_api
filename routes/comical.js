const comicalRoute = (app, fs) => {

    const jsonData = './model/comical.json';
    const { json } = require("body-parser");
    const where = require("lodash");
    const _ = require("underscore");


    app.get('/comical/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data)
            const keys = Object.keys(parsedJSON);
            const query = parseInt(req.params.query) || 1;
            const limit = query > keys.length ? keys.length : query;
            let filteredData = new Array(limit);
            let object;

            for (let i = 0; i < limit; i++) {
                do {
                    object = parsedJSON[keys[Math.floor(keys.length * Math.random())]]
                } while (filteredData.indexOf(object) > -1);
                filteredData[i] = object;
            }
            res.send(filteredData);
            console.log(`⚡️[comical]:${limit} comical query/queries fetched successfully`);
        });
    });


    app.get('/comical/id/:query?', (req, res) => {
        fs.readFile(jsonData, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const parsedJSON = JSON.parse(data);
            const keys = Object.keys(parsedJSON);
            const query = parseInt(req.params.query) || parseInt(keys[Math.floor(keys.length * Math.random())]) + 1;
            const filteredData = _.where(parsedJSON, { id: query });
            console.log(`⚡️[comical]: comical query with ${query} id fetched successfully`);
            res.send(filteredData);
        });
    });


};
module.exports = comicalRoute;