'''
    - Após a inserção, percorra os objetos e calcule a média do campo vl_total apenas para os itens que este valor
seja maior que 560 e o campo id_customer esteja entre 1500 e 2700.
    - Exiba a média final
    - Imprima cada um dos clientes utilizados para o cálculo da média, ordenando do maior para o menor saldo.
'''

from src.database import Database

query = ("SELECT * FROM customers WHERE (id_customer >= '1600') AND (id_customer <= '2700') AND (vl_total >= '560') ORDER BY vl_total ASC;")
customers_names = []

def run():
    rows = Database.execute_query(query)
    values = [field[4] for field in rows]

    rows = Database.execute_query(query)
    names = [field[2] for field in rows]

    final_media = sum(values) / len(values)
    
    for name, value in zip(names, values):
        print("The customer: %s is in the list with $%s as salary." % (name, value))
    return "Final media: %s" % (final_media)