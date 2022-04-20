


async function createTables (){
   try{
      await this.connection.raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );
   `)

   await this.connection.raw(`
   CREATE TABLE IF NOT EXISTS labook_posts(
      id VARCHAR(255) PRIMARY KEY,
      photo VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      type ENUM("normal","event") DEFAULT "normal",
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      author_id VARCHAR(255),
      FOREIGN KEY (author_id) REFERENCES labook_users (id)
   );
   `)
   console.log('tabelas criadas com sucesso')
   }catch(error){
      console.log(error)
   }
}

createTables()

  