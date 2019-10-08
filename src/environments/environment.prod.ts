import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  // @TODO: This will need to be changed once we have a production server
  apiUrl: 'http://localhost:4200/',
  // No logs will be displayed in the console in production mode
  logLevel: NgxLoggerLevel.OFF,
  // Send only error logs to the server side
  serverLogLevel: NgxLoggerLevel.ERROR,
  // Don't want to expose source maps in browser development tools
  enableSourceMaps: false
};
