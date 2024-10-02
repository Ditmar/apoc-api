class MongoDbFactory implements BaseClient {
    async connection() {
        console.log('mongo connection');
    }
    async disconnect() {
        console.log('mongo disconnection');
    }
    
}
export default MongoDbFactory