# 1. Crie uma classe chamada ContaBancaria com um construtor que aceita os parâmetros titular e saldo. Inicie o atributo ativo como False por padrão.
class ContaBancaria:
    def __init__(self, titular, saldo=0, ativo=False):
        self._titular = titular
        self._saldo = saldo
        self._ativo = ativo

    # 2. Na classe ContaBancaria, adicione um método especial __str__ que retorna uma mensagem formatada com o titular e o saldo da conta. Crie duas instâncias da classe e imprima essas instâncias.
    def __str__(self):
        return f'Titular: {self.titular} | Saldo: {self.saldo}'
    
    # 3. Adicione um método de classe chamado ativar_conta à classe ContaBancaria que define o atributo ativo como True. Crie uma instância da classe, chame o método de classe e imprima o valor de ativo.
    @classmethod
    def ativar_conta(cls, conta):
        conta._ativo = True

    # 4. Refatore a classe ContaBancaria para utilizar a abordagem "pythonica" na criação de atributos. Utilize propriedades, se necessário.
    @property
    def titular(self):
        return self._titular
    
    @property
    def saldo(self):
        return self._saldo
    
    @property
    def ativo(self):
        return self._ativo
    
    
conta1 = ContaBancaria('Alice', 1000)
conta2 = ContaBancaria('Bob', 2000)

print(conta2)
print(conta1)

conta3 = ContaBancaria('Charlie')
ContaBancaria.ativar_conta(conta3)

print(conta3.ativo)

# 5. Crie uma instância da classe e imprima o valor da propriedade titular.
conta4 = ContaBancaria('Diana', 3000)
print (f'O titular da conta 4 é {conta4.titular}')

# 6. Crie uma classe chamada ClienteBanco com um construtor que aceita 5 atributos. Instancie 3 objetos desta classe e atribua valores aos seus atributos através do método construtor.

class ClienteBanco:
    def __init__(self, nome, sobrenome, cpf, saldo=0, ativo=False):
        self.nome = nome
        self.sobrenome = sobrenome
        self.cpf = cpf
        self.saldo = saldo
        self.ativo = ativo

    # 7. Crie um método de classe para a conta ClienteBanco.
    @classmethod
    def criar_conta(cls, titular, saldo_inicial):
        conta = ContaBancaria(titular, saldo_inicial)
        return conta

cliente1 = ClienteBanco('Alice', 'Smith', '12345678901')
cliente2 = ClienteBanco('Bob', 'Johnson', '98765432109')
cliente3 = ClienteBanco('Charlie', 'Williams', '09876543210')

clients = [cliente1, cliente2, cliente3]

for client in clients:
    print(f'Nome: {client.nome} | Sobrenome: {client.sobrenome} | CPF: {client.cpf}')

conta_cliente1 = ClienteBanco.criar_conta('Alice', 5000)

print(f'Titular: {conta_cliente1.titular} | Saldo: {conta_cliente1.saldo}')