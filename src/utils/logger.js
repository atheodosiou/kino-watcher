const { createLogger, format, transports } = require('winston');
const { combine } = format;

module.exports.logger = createLogger({
    format: combine(
        format.simple()
    ),
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
});