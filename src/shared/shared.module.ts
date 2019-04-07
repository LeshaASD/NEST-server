import { Module } from '@nestjs/common';
import { MapperService } from './mapper/mapper.service';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
    providers: [MapperService, ConfigurationService],
    exports: [MapperService, ConfigurationService]
})
export class SharedModule {}
