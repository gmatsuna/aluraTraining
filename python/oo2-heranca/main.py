# 7. Crie um Arquivo Main (main.py): Crie um arquivo chamado main.py no mesmo diretório que suas classes.

# 8. Importe e Instancie Objetos: No arquivo main.py, importe as classes Carro e Moto. Em seguida, crie três instâncias de Carro e Moto com diferentes marcas, modelos, quantidade de portas e tipos.

from models.carro import Carro
from models.moto import Moto

carro01 = Carro("MARCA 01", "MODELO 01", 4)
carro02 = Carro("MARCA 02", "MODELO 02", 2)
carro03 = Carro("MARCA 03", "MODELO 03", 5)

moto01 = Moto("moto marca 01", "moto modelo 01")
moto02 = Moto("moto marca 02", "moto modelo 01")
moto03 = Moto("moto marca 03", "moto modelo 01", True)

# 9. Exiba as Informações: Para cada instância, imprima no console as informações utilizando o método str.

print(carro01)
print(carro02)
print(carro03)

print(moto01)
print(moto02)
print(moto03)

def main():
    pass

if __name__ == "__main__":
    main()