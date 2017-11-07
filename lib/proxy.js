var createProxy = require('coin-hive-stratum');

var apiInterfaces = require('./apiInterfaces.js')(config.daemon, config.wallet);

var logSystem = 'proxy';
require('./exceptionWriter.js')(logSystem);

log('info', logSystem, 'Started');

var proxy = createProxy(config.proxy.pool);
proxy.listen(config.proxy.port);
