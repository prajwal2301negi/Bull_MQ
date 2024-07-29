import { emailQueue } from './queue/emailQueue.js';
import { otpQueue } from './queue/otpQueue.js';

import { emailWorker } from './worker/emailWorker.js';
import { otpWorker } from './worker/otpWorker.js';

async function initialize() {
    try {
        await emailQueue.add('sendEmail', {
            email: 'user@example.com',
            subject: 'Welcome!',
            body: 'Thank you for signing up.'
        });
        await otpQueue.add('sendOtp', {
            phoneNumber: '1234567890',
            otp: '123456'
        });
        console.log('Jobs have been added to the queues.');
    } catch (err) {
        console.error('Error adding jobs to the queues:', err);
    }

}

initialize().catch(err => console.error('Initialization error:', err));
