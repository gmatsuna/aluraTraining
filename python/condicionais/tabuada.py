# 5 - Solicite ao usuário um número e, em seguida, utilize um loop for para imprimir a tabuada desse número, indo de 1 a 10.

num = int(input('Digite o numero de qual tabuada deseja: '))
print()
for i in range(1, 11):
    print(num*i)