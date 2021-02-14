const fs = require('fs');
const moment = require('moment');
const LOGFILENAME = 'server/db/stats.json';

const log = (action, productName) => {
    try {
        createStatFileIfNotExists();
        let dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        fs.readFile(LOGFILENAME, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            let lines = JSON.parse(data);
            lines.push({
                dateTime: dateTime,
                action: action,
                productName: productName
            });

            fs.writeFile(LOGFILENAME, JSON.stringify(lines, null, 4), err => {
                if (err) {
                    throw err;
                }
            });
        });
    } catch (e) {
        console.error(e);
    }
};

const createStatFileIfNotExists = () => {
    fs.open(LOGFILENAME, 'wx', (err, fd) => {
        if (err) {
            if (err.code === 'EEXIST') {
                return;
            }
            throw err;
        }

        // запишем болванку
        fs.write(fd, JSON.stringify([]), 0, 'utf-8', err => {
            if (err) {
                throw err;
            }
        });

        fs.close(fd, err => {
            if (err) {
                throw err;
            }
        })
    });
};


module.exports.log = log;
