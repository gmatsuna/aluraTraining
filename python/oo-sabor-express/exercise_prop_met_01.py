# Crie uma nova classe chamada Pessoa com atributos como nome, idade e profissão. 
class Pessoa:
    def __init__(self, nome='', idade=0, profissao=''):
        self.nome = nome
        self.idade = idade
        self.profissao = profissao

# Adicione um método especial __str__ para imprimir uma representação em string da pessoa.
    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}, Profissão: {self.profissao}'

# Implemente também um método de instância chamado aniversario que aumenta a idade da pessoa em um ano.
    def aniversario(self):
        self.idade += 1

# Por fim, adicione uma propriedade chamada saudacao que retorna uma mensagem de saudação personalizada com base na profissão da pessoa.
    @property
    def saudacao(self):
        if self.profissao:
            return f'Olá, eu sou o {self.nome}. A minha profissão é {self.profissao}.'
        else:
            return f'Olá, eu sou o {self.nome}.'
        
# Criando 3 instâncias da classe Pessoa
pessoa1 = Pessoa('Nome 01', 25, 'Desenvolvedor')
pessoa2 = Pessoa('Nome 02', 35, 'Profissão 02')
pessoa3 = Pessoa('Nome 03', 20)

# Imprimindo informações iniciais
print("Informações Iniciais:")
print(pessoa1)
print(pessoa2)
print(pessoa3)
print()

# Utilizando o método de instância aniversario para aumentar a idade de uma pessoa
pessoa1.aniversario()
pessoa3.aniversario()

# Imprimindo informações após aniversário
print("Informações após aniversário:")
print(pessoa1)
print(pessoa3)
print()

# Utilizando o método de classe saudacao para exibir mensagens personalizadas
print(pessoa1.saudacao)
print(pessoa2.saudacao)
print(pessoa3.saudacao)