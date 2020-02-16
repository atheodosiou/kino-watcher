
const { app } = require('./src/app');
const {logger} = require('./src/utils/logger');
const { createMessage } =require('./src/utils/create-messages');
(async () => {
    console.info('kino-watcher: App is running!\nSee the log files under the logs dir.')
    logger.info(createMessage('Kino Watcher was started!'));
    await app();
})()