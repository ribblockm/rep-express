import { Express } from 'express'
import { rateLimit } from 'express-rate-limit'

export default (app: Express): void => {
    app.use(rateLimit())
}