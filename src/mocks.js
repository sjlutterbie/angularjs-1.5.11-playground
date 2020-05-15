// mocks.js
// 1. Import mocking utils
import { setupWorker, rest } from 'msw';

// 2. Define request handlers and response resolvers
const worker = setupWorker(
  rest.get('/foo', (req, res, ctx) => {
    console.log('Responding!');
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Hello, MSW!',
      })
    );
  })
);

// 3. Start the Service Worker
console.log('Starting the service worker...');
worker.start();
