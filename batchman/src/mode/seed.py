from src.customer import Customer
from src.database import Database
from src.data import Data
import random

names = ['Douglas', 'Carlos', 'Lucas', 'Yasmim', 'Roberta']
salary = ['700', '800', '900', '600', '400']

def seed():
    '''
        Seeds the db.
    '''
    db = Database()
    done = False

    for i in range(0, 1800):
        customer_cpf = "12345678911"
        customer_name = random.choice(names)
        customer_is_active = "y"
        customer_total_value = random.choice(salary)

        customer = Customer(
            customer_cpf,
            customer_name,
            customer_is_active,
            customer_total_value
        )

    for i in Data.load_data():
        db.write_data(i)
