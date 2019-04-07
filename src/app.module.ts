import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationService } from './shared/configuration/configuration.service';
import { SharedModule } from './shared/shared.module';
import { configuration } from './shared/configuration.enum';

@Module({
  imports: [SharedModule, MongooseModule.forRoot(ConfigurationService.connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static host: string;
  static port: string | number;
  static isDev: boolean;

  constructor(private readonly _configurationService: ConfigurationService) {
    AppModule.port = AppModule.normalizePort(_configurationService.getVariable(configuration.PORT));
    AppModule.host = _configurationService.getVariable(configuration.HOST);
    AppModule.isDev = _configurationService.isDevelopment;
  }

  private static normalizePort(param: number | string): number | string {
    const portNumber: number = typeof param === 'string' ? parseInt(param, 10) : param;
    if (isNaN(portNumber))  return param;
    else if (portNumber >= 0) return portNumber;
  }
}
