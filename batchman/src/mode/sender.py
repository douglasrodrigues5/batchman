from src.connection import client
from src.customer import Customer
from src.database import Database
from src.data import Data

def init_sender(server_host, server_port):
    
    db = Database()
    done = False

    while not done:
        customer_cpf = input("Type the customer's cpf or cnpj: ")
        customer_name = input("Type the customer's name: ")
        customer_is_active = input("Active customer? (Y-y/N-n): ")
        customer_total_value = input("Customers total value: ")

        customer = Customer(
            customer_cpf,
            customer_name,
            customer_is_active,
            customer_total_value
        )

        option = input("Want to send the data to server(Y-y/N-y)?")

        if (option == "y" or option == "Y"):
            done = True
    
    for i in Data.load_data():
        client.send_data(server_host, server_port, i)
    