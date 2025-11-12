const logger = require('winston');

const log = (level, message) => {
    logger.log({ level, message });
};

module.exports = { log };