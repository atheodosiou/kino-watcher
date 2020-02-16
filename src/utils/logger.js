const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

module.exports.logger = createLogger({
    format: combine(
        label({ label: 'KINO-WHATCHER' }),
        timestamp(),
        // prettyPrint()
        format.simple()
    ),
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
});