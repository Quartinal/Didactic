import { Client } from "https://deno.land/x/postgres@v0.18.1/mod.ts";
import { connect } from "https://deno.land/x/redis@v0.32.1/mod.ts";

const client = new Client({
    user: Deno.env.get("POSTGES_USERNAME"),
    database: Deno.env.get("POSTGRES_DB"),
    hostname: "localhost",
    port: 5432
});
await client.connect();

const result = await client.queryArray("");

