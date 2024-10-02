interface BaseClient {
    connection(): Promise<void>;
    disconnect(): Promise<void>;
}