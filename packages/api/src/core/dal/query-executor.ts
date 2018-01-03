import { Client } from 'pg';

export class QueryExecutor {
    private static client: Client;

    public static initClient(client: Client) {
        QueryExecutor.client = client;
    }

    public static async execute(query: string) {
        console.log(`Executing query [${query}]`);
        let result;

        try {
            result = await QueryExecutor.client.query(query);
        } catch (err) {
            console.log("Error while executing query, see causing exception: ", err);
        }

        return result.rows;
    }

}
