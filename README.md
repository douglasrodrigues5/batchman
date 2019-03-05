BACK END TEST(#2) Use case:
===========================
>A ideia é basicamente a seguinte:
>- Vamos criar uma tabela na base de dados chamada tb_customer_account.
>id_customer – Identificação unica do cliente.
>cpf_cnpj – CPF ou CNPJ do Cliente
>nm_customer – Nome do Cliente
>is_active – Indica se o cliente está ativo ou não
>vl_total – Mostra quando que o cliente possui de saldo.
>- Na sua aplicação, insira ‘N’ registros na tabela tb_customer_account
>- Após a inserção, percorra os objetos e calcule a média do campo vl_total apenas para os itens que este valor
>seja maior que 560 e o campo id_customer esteja entre 1500 e 2700.
>- Exiba a média final
>- Imprima cada um dos clientes utilizados para o cálculo da média, ordenando do maior para o menor saldo.

BACK END TEST(#2) Technical requirements:
========================================
1. Criar um sistema batch, em Java ou Python.
2. Persistir os dados em uma base de dados SQL Server ou similar.

**What i did**
A little more deep in my services studies. I wanted to create a program that ran independent of a server hosted somewhere.
Batchman is a tool capable of archiving hundreds of records and then sending (securely) to a server, or locally for database management.

**How it works:**
>When you start the batchman command on the terminal, a cli is displayed and the user has 4 options.
1. >It can start a batchman server to receive records from another computer;
2. >It can start a batchman client to send records to another computer;
3. >can start local mode where there is no interaction with servers.
4. >can populate the database (locally).

The program writes records to a CSV file, and then sends them to the server or local database.
