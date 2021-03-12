'use strict';

// Handle Service Bus Queue Message

module.exports.handler = async function(context, item) {
  context.log(`Received item: ${item}`);

  // Do something with message...
  
  context.done();
};
