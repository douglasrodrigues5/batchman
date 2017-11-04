import sys
import configparser
import connection
import mode
import analysis
import pkg_resources

config = configparser.ConfigParser()
config.read(pkg_resources.resource_filename(__name__, "batchman.cfg"))
conn_settings = (config['SERVER_SETTINGS']['SERVER_HOST'], int(config['SERVER_SETTINGS']['SERVER_PORT']))

USAGE_MESSAGE_HELPER = """Usage: 
    Ex1: batchman server   -> Start a batchman server
    Ex2: batchman client   -> Start a batchman client
    Ex3: batchman local    -> Start a local batchman 'server'(+performance)
    Ex4: batchman analysis -> Init the analyze script"""
def main():
    if len(sys.argv) < 2:
        print(USAGE_MESSAGE_HELPER)
    else:
        OPTION = sys.argv[1]

        if OPTION == "server":
            connection.server.init_server(*conn_settings)
        elif OPTION == "client":
            mode.sender.init_sender(*conn_settings)
        elif OPTION == "local":
            mode.local.init_local()
        elif OPTION == "seed":
            mode.seed.seed()
        elif OPTION == "analysis":
            print(analysis.final_media.run())
        else:
            print(USAGE_MESSAGE_HELPER)
        

if __name__ == "__main__":
    main()