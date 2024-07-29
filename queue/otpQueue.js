import pkg from 'bullmq';
const { Queue } = pkg;
import { redisConfig } from '../redisConfig.js';

const otpQueue = new Queue('otp', { connection: redisConfig });

export { otpQueue };
