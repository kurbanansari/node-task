const winston = require('winston');
const moment = require('moment');
require('winston-daily-rotate-file');

const dateFormat = () => moment().utcOffset('+05:30').format('hh:mm A');
class LoggerService {
  constructor(route) {
    const transport = new winston.transports.DailyRotateFile({
      filename: './logs/%DATE%.log',
      datePattern: 'yyyy-MM-DD',
      // prepend: true,
      level: 'info',
      maxSize: '10m',
      maxFiles: '2d'
    });
    this.log_data = null;
    this.log_url = null;
    this.route = route;
    const logger = winston.createLogger({
      transports: [new winston.transports.Console(), transport],
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${route} | ${
          info.message
        } | `;
        message = info.obj
          ? `${message}data:${JSON.stringify(info.obj)} | `
          : message;
        message = this.log_data
          ? `${message}log_data:${JSON.stringify(this.log_data)} | `
          : message;
        return message;
      })
    });
    this.logger = logger;
  }

  setUrl(log_url) {
    this.log_url = log_url;
  }

  setLogData(log_data) {
    this.log_data = log_data;
  }

  async info(message) {
    this.logger.log('info', message);
  }

  async info(message, obj) {
    this.logger.log('info', message, {
      obj
    });
  }

  async debug(message) {
    this.logger.log('debug', message);
  }

  async debug(message, obj) {
    this.logger.log('debug', message, {
      obj
    });
  }

  async error(message) {
    this.logger.log('error', message);
  }

  async error(message, obj) {
    this.logger.log('error', message, {
      obj
    });
  }
}
module.exports = LoggerService;
