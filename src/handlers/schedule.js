'use strict';

// Handle CRON like schedule

module.exports.handler = async function(context, timerObj) {
  context.log('CRON triggered this function');

  // Do something here ...
  
  context.done()
};
