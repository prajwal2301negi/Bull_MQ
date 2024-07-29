import pkg from 'bullmq';
const { Queue } = pkg;
import { redisConfig } from '../redisConfig.js';

const emailQueue = new Queue('email', { connection: redisConfig });

export { emailQueue };
