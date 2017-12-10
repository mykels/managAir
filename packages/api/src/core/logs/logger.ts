import * as moment from 'moment';
import { Logger } from 'winston';
import * as winston from 'winston';
import { LOG_LEVEL } from "../config/config";

export const logger = new Logger({
  transports: [
    new winston.transports.Console({
      timestamp: () => {
        return moment().format('DD/MM/YYYY HH:mm:ss');
      },
      level: LOG_LEVEL || 'info',
      colorize: true
    }),
  ],
});

export default logger;
