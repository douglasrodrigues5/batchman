import socket
import base64
from src.database import Database

from ast import literal_eval

def init_server(server_host, server_port):
    '''
        Start a server.
        Handles data decoding, read and storage.
    '''
    udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    orig = (server_host, server_port)
    udp.bind(orig)
    print("""Initialized batchman server on:
    HOST = %s
    PORT = %s""" % (server_host, str(server_port)))
    while True:
        msg, client = udp.recvfrom(1024)  
        #Show encoded entry. 
        print("""New customer entry: %s
        FROM(SENDER IP): %s
        ON PORT(SENDER PORT): %s""" % (msg, client[0], client[1]))
        msg = (base64.b64decode(msg).decode("utf-8")) 
        customer_struct = literal_eval(msg)
        Database.write_data(customer_struct)
    udp.close()