import sqlite3
import os.path
import pkg_resources

class Database(object):
    DEFAULT_DB_FILE = pkg_resources.resource_filename(__name__, "costumers.db")

    def __init__(self):
        if not os.path.isfile(Database.DEFAULT_DB_FILE):
            conn = sqlite3.connect(Database.DEFAULT_DB_FILE)
            cursor = conn.cursor()
            
            cursor.execute(
                '''
                    CREATE TABLE IF NOT EXISTS customers 
                    (id_customer INTEGER PRIMARY KEY AUTOINCREMENT,
                    cpf_cnpj VARCHAR(14) NOT NULL,
                    nm_customer VARCHAR(255) NOT NULL,
                    is_active BOOLEAN NOT NULL,
                    vl_total INTEGER NOT NULL);
                ''')
            conn.commit()
            conn.close()

    @staticmethod
    def connect_db():
        conn = sqlite3.connect(Database.DEFAULT_DB_FILE)
        return conn

    @staticmethod
    def write_data(data):
        db = Database.connect_db()
        cursor = db.cursor()
        cursor.execute(
                """
                    INSERT INTO customers VALUES (NULL, ?, ?, ?, ?);
                """ , (data['cpf_cnpj'], data['nm_customer'], data['is_active'], data['vl_total'])
            )
        db.commit()
        db.close()

    @staticmethod
    def execute_query(query):
        db = Database.connect_db()
        cursor = db.cursor()
        result = cursor.execute(query)
        db.commit()
        db.close
        return result