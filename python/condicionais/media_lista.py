# 7 - Construa um código que calcule a média dos valores em uma lista. Utilize um bloco try-except para lidar com a divisão por zero, caso a lista esteja vazia.

list = [5, 10, 15, 20, 30, 40, 50, 60, 70]

def media():
    soma = 0
    try:
        for i in list:
            soma += i
        media = soma / len(list)
        print("A média dos valores da lista é: ", media)
        
    except ZeroDivisionError:
        print("A lista está vazia, não é possível calcular a média.")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")


def main():
    media()

if __name__ == '__main__':
    main()