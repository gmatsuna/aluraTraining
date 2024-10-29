# 1. Implemente uma classe chamada Carro com os atributos básicos, como modelo, cor e ano. Crie uma instância dessa classe e atribua valores aos seus atributos.

class Carro:
    modelo = ''
    cor = ''
    ano = 0

carro = Carro()
carro.modelo = "carro1"
carro.cor = "color1"
carro.ano = 2000

print(vars(carro))

# 2. Crie uma classe chamada Restaurante com os atributos nome, categoria, ativo e crie mais 2 atributos. Instancie um restaurante e atribua valores aos seus atributos.

""" class Restaurante:
        nome = ''
        categoria = ''
        ativo = False
        taxa_entrega = 0
        tempo_medio_preparo = 0

restaurante = Restaurante()
restaurante.nome = "restaurante1"
restaurante.categoria = "cozinha"
restaurante.ativo = True
restaurante.taxa_entrega = 5
restaurante.tempo_medio_preparo = 30

print(vars(restaurante)) """

# 3.Modifique a classe Restaurante adicionando um construtor que aceita nome e categoria como parâmetros e inicia ativo como False por padrão. Crie uma instância utilizando o construtor.

class Restaurante:
    def __init__(self, nome, categoria, ativo=False):
        self.nome = nome
        self.categoria = categoria
        self.ativo = ativo

    # 4. Adicione um método especial __str__ à classe Restaurante para que, ao imprimir uma instância, seja exibida uma mensagem formatada com o nome e a categoria. Exiba essa mensagem para uma instância de restaurante.
    def __str__(self):
        print(f'Nome: {restaurante.nome} | {restaurante.categoria}')

restaurante = Restaurante("restaurante1", "cozinha")

print(vars(restaurante))

# 5. Crie uma classe chamada Cliente e pense em 4 atributos. Em seguida, instancie 3 objetos desta classe e atribua valores aos seus atributos através de um método construtor.

class Cliente:
    def __init__(self, nome, idade, telefone, email):
        self.nome = nome
        self.idade = idade
        self.telefone = telefone
        self.email = email

cliente1 = Cliente("cliente1", 30, "11999999999", "cliente1@email.com")
cliente2 = Cliente("cliente2", 30, "11999999999", "cliente2@email.com")
cliente3 = Cliente("cliente3", 30, "11999999999", "cliente3@email.com")