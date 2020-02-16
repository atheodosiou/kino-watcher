
const { app } = require('./src/app');
const {logger} = require('./src/utils/logger');

(async () => {
    console.info('kino-watcher: App is running!\nSee the log files under the logs dir.')
    logger.info('Kino Watcher was started!');
    await app();
})()