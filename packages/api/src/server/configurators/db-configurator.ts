import { Express } from 'express';
import { Pool } from 'pg';
import { QueryExecutor } from "../../core/dal/query-executor";
import { IServerConfigurator } from "./server-configurator";

export class DBConfigurator implements IServerConfigurator {
    async configure(app: Express) {
        await this.connect(this.initPool());
    };

    private initPool(): Pool {
        // TODO: fetch from config
        return new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'managair',
            password: 'root',
            port: 5432,
        });
    }

    private async connect(pool: Pool): Promise<void> {
        const client = await pool.connect();
        QueryExecutor.initClient(client);
    }
}
