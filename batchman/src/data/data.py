'''
    CSV DATA MANAGER
'''
import csv
import os
import pkg_resources

class Data(object):
    '''
        This static class handle the data storage
    '''
    CUSTOMER_DATA = {
        'cpf_cnpj': None,
        'nm_customer': None,
        'is_active': None,
        'vl_total': None
    }
    #A customer struct(dict) for easy data manipulation 


    DEFAULT_DATA_FILE = pkg_resources.resource_filename(__name__, "../customers.csv") #target for data storage

    fields = ['cpf_cnpj', 'nm_customer', 'is_active','vl_total']
    #CSV fields
    def __init__(self):
        '''
            The class will search for the file. If not exists, then create.
        '''
        if not os.path.isfile(Data.DEFAULT_DATA_FILE):
            with open(Data.DEFAULT_DATA_FILE, "w") as data_file:
                data_file.close()
        
    @staticmethod
    def get_data_file(option):
        '''
            Returns the default target file for data storage
        '''
        return open(Data.DEFAULT_DATA_FILE, option)

    
    @staticmethod
    def has_header():
        '''
            Check if csv file has header
        '''
        if os.stat(Data.DEFAULT_DATA_FILE).st_size == 0:
            return False
        else:
            return True

    @staticmethod
    def store_data(cpf, nm_customer, is_active, vl_total):
        '''
            Handles the data storage
        '''
        #Fill customer struct
        Data.CUSTOMER_DATA["cpf_cnpj"] = cpf
        Data.CUSTOMER_DATA["nm_customer"] = nm_customer
        Data.CUSTOMER_DATA["is_active"] = is_active
        Data.CUSTOMER_DATA["vl_total"] = vl_total

        #Store the customer data in file
        with Data.get_data_file("a") as data_file:
            file_content = csv.DictWriter(data_file, fieldnames=Data.fields)
            if not Data.has_header():
                file_content.writeheader()
            file_content.writerow(Data.CUSTOMER_DATA)
            data_file.close()
            Data.CUSTOMER_DATA.clear()

        return "Stored data."

    @staticmethod
    def load_data():
        '''
            Returns a list with all data stored 
        '''
        data = []
        with Data.get_data_file("r") as data_file:
            file_content = csv.DictReader(data_file)
            for row in file_content:
                data.append(row) 
            data_file.close()
        return data


    @staticmethod
    def erase_data():
        '''
            Erase the Csv data file
        '''
        data_file = Data.get_data_file("w+")
        data_file.truncate()
        data_file.close()