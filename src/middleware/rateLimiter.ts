import rateLimit from 'express-rate-limit'
import RedisStore from 'rate-limit-redis'
import { createClient } from 'redis'

const client = createClient({});

async () => {
    await client.connect();
}

export const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 3,
    standardHeaders: true,
    legacyHeaders: true,
    store: new RedisStore({
        sendCommand: (...args: string[]) => client.sendCommand(args),
    }),
})