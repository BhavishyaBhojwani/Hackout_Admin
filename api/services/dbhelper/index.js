class DbHelper {
    constructor() {
        this.mysql = require('mysql2/promise');
        this.config = require('../../config/local-config');
        this.options = {
            database: this.config.database.db,  
            host: this.config.database.host,
            user: this.config.database.user,
            // password: this.config.database.password 
        };
        this.connection = null;
    }

    async getConnection() {
        try {
            this.connection = await this.mysql.createConnection(this.options);
            return console.log("Connected to MySQL Server");
        } catch (error) {
            console.error("Connection Error: ", error);
            throw error;
        }
    }

    async executeQuery(query, params = []) {
        if (!this.connection) await this.getConnection();
        try {
            const [rows] = await this.connection.execute(query, params);
            return rows;
        } catch (error) {
            console.error("Query Execution Error: ", error);
            throw error;
        }
    }
}

module.exports = DbHelper;
