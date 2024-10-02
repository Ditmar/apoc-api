class PostgressDb implements BaseClient {
    async connection() {
        console.log('postgress connection');
    }
    async disconnect() {
        console.log('postgress disconnection');
    }
    
}
export default PostgressDb