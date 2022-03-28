'use strict';

const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

export default async (req, res) => {
    await fastify.ready();
    fastify.server.emit('request', req, res);
}

// // Run the server!
// const start = async () => {
//   try {
//     await fastify.listen(3000);
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// };
// start();
