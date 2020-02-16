
const { app } = require('./src/app');
(async () => {
    console.log('Kino Watcher was started!\n');
    await app();
})()