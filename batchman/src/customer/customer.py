from src.data import Data

class Customer(object):
    def __init__(self, cpf, nm_customer, is_active, vl_total):
        self.cpf = cpf
        self.nm_customer = nm_customer
        self.is_active = self.val_status(is_active)
        self.vl_total = vl_total
        Data.store_data(self.cpf, self.nm_customer, self.is_active, self.vl_total)


    def val_status(self, status):
        '''
            set status.
        '''
        if status == "y" or status =="Y":
            return True
        else:
            return False
