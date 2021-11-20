const logger = require('../../utils/logger');
const recordLogger = new logger('records');
var fs = require('fs');
const { DATA } = require('../../data');

const getRecords = async(req, res) => {
    recordLogger.info("Get all records");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        // result.data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        result.data = DATA;
        result.status = 1,
        result.message = "records";
        res.status(200).send(result);
    } catch (error) {
        recordLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
}

const manageRecords = async(req, res) => {
    recordLogger.info("Manage records");
    let result = {
        data: null,
        message: '',
        status: 0
    };
    try {
        // result.data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

        const { limit = 10, page = 1 } = req.query;

        result.data = {
            Ids: [],
            Open: [],
            ClosedCount: 0,
            PreviousPage: +page > 1 ? +page - 1 : null,
            NextPage: DATA.length > +page*limit ? +page + 1 : null
        };

        const paginatedData = paginate(DATA, limit, page);
        
        paginatedData.map(e => {
            result.data.Ids.push(e.id);
            if(e.disposition === "open")
                result.data.Open.push(e);
            else
                result.data.ClosedCount += 1;
        });

        result.status = 1,
        result.message = "records";
        res.status(200).send(result);
    } catch (error) {
        recordLogger.error(error);
        result.message = error.message;
        res.status(500).send(result);
    }
}

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

module.exports = {
    getRecords,
    manageRecords
}