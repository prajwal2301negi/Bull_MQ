import pkg from 'bullmq';
const { Worker } = pkg;
import { redisConfig } from '../redisConfig.js';

const otpWorker = new Worker('otp', async job => {
    const { phoneNumber, otp } = job.data;
    console.log(`Sending OTP to ${job.data.phoneNumber}`);
    // Logic to send OTP
}, { connection: redisConfig });

otpWorker.on('waiting', job => {
    console.log(`${job.id} is waiting!`);
});

otpWorker.on('active', job => {
    console.log(`${job.id} is active`);
});

otpWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

otpWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});

export { otpWorker };
