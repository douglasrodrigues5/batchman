import socket 
import base64
from src.data import Data

def send_data(server_host, server_port, data):      
    '''
        Send encoded data to server.
    ''' 
    udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    target = (server_host, server_port)
    udp.sendto (base64.b64encode(str(data).encode(encoding="UTF-8")), target) #passing encoded data.
    udp.close()
    Data.erase_data()
