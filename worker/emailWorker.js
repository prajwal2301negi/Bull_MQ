import pkg from 'bullmq';
const { Worker } = pkg;
import { redisConfig } from '../redisConfig.js';

const emailWorker = new Worker('email', async job => {
    const { email, subject, body } = job.data;
    console.log(`Sending email to ${job.data.email}`);
    // Logic to send Email
}, { connection: redisConfig });

emailWorker.on('waiting', job => {
    console.log(`${job.id} is waiting!`);
});

emailWorker.on('active', job => {
    console.log(`${job.id} is active`);
});

emailWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

emailWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});

export { emailWorker };
