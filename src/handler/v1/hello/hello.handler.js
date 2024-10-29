const { OK } = require("@utils/helper");
const logger = require("@utils/logger");

/**
 * hello
 * @public
 */
exports.hello = async (event) => {
  // logger.debug(event);
  return OK();
};
