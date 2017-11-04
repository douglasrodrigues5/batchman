WEB TEST(#1) Use case:
========

> Nosso cliente precisa de uma aplicação web que registre Corridas
> Compartilhadas oferecidas pela sua empresa em todo o Brasil. Neste
> sistema será possível cadastrar motoristas com Nome, Data de
> Nascimento, CPF, Modelo do carro, Status e Sexo, todos os campos são
> obrigatórios. Quando um motorista entrar em período de férias será
> possível alterar seu status de Ativo, para Inativo e o sistema deve
> conter uma consulta aos motoristas já cadastrados. Para o cadastro de
> passageiros o sistema precisa de Nome do Passageiro, Data de
> Nascimento, CPF e Sexo, todos os campos são obrigatórios. Nosso
> cliente também precisará consultar os passageiros já cadastrados no
> sistema. Por fim será possível registrar e consultar uma lista de
> corridas. Para registrar uma corrida será necessário informar qual o
> motorista, qual o passageiro e o valor da corrida. O sistema deve
> bloquear o registro de corridas para motoristas Inativos.


WEB TEST(#1) Technical requirements:
=====

> **1.** Todas as consultas devem ser apresentadas em tabelas.
> **2.** As interações/Validações da tela devem ser feitas via Javascript.
> **3.** Utilização de bibliotecas de JavaScript e CSS (Bootstrap, Angular X, Jquery, Backbone, etc.).
> **4.** A tela deve funcionar perfeitamente, dentro do mínimo proposto.
> **5.** Todos os dados devem ser persistidos em um Banco de dados de sua escolha.


**What i did:**
==
Recently I have researched a lot about **micro services**. Enough for me to feel inspired enough to start developing something similar or equal.
The challenge was flexible and gave me the possibility to work with tools that would make me more comfortable, and so I did.
I chose the [Lumen framework](https://lumen.laravel.com/) (laravel), for reasons of performance and rate of web requests.
For the database I chose [Postgresql](https://www.postgresql.org/) because one of the requirements is to put the application running on [Heroku](https://www.heroku.com/). This choice allowed me to deploy much faster and more effectively.
As I was thinking of micro services, I created an application in [ReactJS](https://reactjs.org/). So I was able to meet various requirements, and still work with a library with an innovative concept.

**It works as follows:**
------------------------

 1. > ***A driver registers himself***
 2. > ***The driver can create a travel at the time of registration, or leave and return later***
 3. > ***There is a login screen by cpf***
 4. > ***After creating a travel, the travel will be available for the search mechanism***
 5. > ***In the passengers section, the passenger can search for travel from the Start Location address, End Location and the Price for the
    travel.***
 6. > ***The available travels are displayed and provide an access link for passenger registration.***
 7. > ***A passenger can pay more or even than the price of the travel. But never less than that.***
 8. > ***A driver can edit his active or inactive status whenever he want in the edit section.***

Why?
--

Well, i wanted to create a driver-focused application. Because passengers come and go, but drivers are the same for many years.


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
A little more deep in my micro services studies. I wanted to create a program that ran independent of a server hosted somewhere.
Batchman is a tool capable of archiving hundreds of records and then sending (securely) to a server, or locally for database management.

**How it works:**
>When you start the batchman command on the terminal, a cli is displayed and the user has 4 options.
1. >It can start a batchman server to receive records from another computer;
2. >It can start a batchman client to send records to another computer;
3. >can start local mode where there is no interaction with servers.
4. >can populate the database (locally).

The program writes records to a CSV file, and then sends them to the server or local database.
