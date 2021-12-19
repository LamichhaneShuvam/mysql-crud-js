/*                                  Blog
    +-----------------+---------+---------+------------------+------------------+
    | id              | title   | body    | creation_date    | update_date      |
    +-----------------+---------+---------+------------------+------------------+
    | int not null ai | varchar | varchar | date(yyyy-mm-dd) | date(yyyy-mm-dd) |
    +-----------------+---------+---------+------------------+------------------+
 */


const db = require('../config/db');

class Blog {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    } 

    async save(){
        const date = new Date();
        const creationDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        const sql = `
            INSERT INTO Blog(
                title,
                body,
                creation_date
            )
            VALUES(
                '${this.title}',
                '${this.body}',
                '${creationDate}'
            );

        `;
        const [result, _] = await db.execute(sql);
        return result;
    }

    static findByIdAndUpdate(id, title, body){
        let sql;
        const date = new Date();
        const updateDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        if(!(title || body)) throw { message: "Parameters for update query not provided." };
        else if((title && body) !== undefined){
            sql = `
                UPDATE Blog
                SET title = '${title}', body = '${body}', update_date = '${updateDate}' 
                WHERE id = '${id}';
            `;
        }
        else if(title !== undefined){
            sql = `
                UPDATE Blog
                SET title = '${title}', update_date = '${updateDate}'
                WHERE id = '${id}';
            `;
        }
        else{
            sql = `
                UPDATE Blog
                SET body = '${body}', update_date = '${updateDate}'
                WHERE id = '${id}'
            `;
        }
        return db.execute(sql);
    }

    static findById(id){
        const sql = `
            SELECT * from Blog WHERE id = '${id}';
        `;
        return db.execute(sql);
    }

    static findAll(){
        const sql = `
            SELECT * FROM Blog;
        `;
        return db.execute(sql);
    }

    static findByIdAnddelete(id){
        const sql = `
            DELETE FROM Blog
            WHERE id = '${id}';
        `
        return db.execute(sql);
    }
}

module.exports = Blog;
