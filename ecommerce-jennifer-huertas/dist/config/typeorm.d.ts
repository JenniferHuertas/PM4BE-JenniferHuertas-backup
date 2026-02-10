export declare const config: {
    type: string;
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    synchronize: boolean;
    dropSchema: boolean;
    logging: string[];
    entities: string[];
    subscribers: never[];
};
declare const _default: (() => {
    type: string;
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    synchronize: boolean;
    dropSchema: boolean;
    logging: string[];
    entities: string[];
    subscribers: never[];
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    synchronize: boolean;
    dropSchema: boolean;
    logging: string[];
    entities: string[];
    subscribers: never[];
}>;
export default _default;
