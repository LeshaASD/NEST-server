import { Injectable } from '@nestjs/common';
import { configuration } from '../configuration.enum';
import { get } from 'config';

@Injectable()
export class ConfigurationService {

    static connectionString: string = process.env[configuration.MONGO_URL] || get(configuration.MONGO_URL);
    private hostingEnvironment: string = process.env.NODE_ENV || 'development';

    getVariable(name: string) {
        return process.env[name] || get(name);
    }

    get isDevelopment(): boolean {
        return this.hostingEnvironment === 'development';
    }
}
