send = (res, code, data, totalRecords, msg = '') => {
    let result = {
    };
    
    var m = require('./msgs')[code];
    result.status = m ? m.status : code;
    result.message = msg ? msg : m ? m.message : '';
    
    result.result = data;
    if(totalRecords)
    result.totalRecords = totalRecords;
    res.status(m ? m.httpCode : 400).json(result);
}

module.exports = {
    send
}