# 6 - Crie uma lista de números e utilize um loop for para calcular a soma de todos os elementos. Utilize um bloco try-except para lidar com possíveis exceções.

list = [1, 2, 3, 4, 6, 7, 8, 9]

def soma():
    try:
        total = 0
        for num in list:
            total += num
        print(f'A soma dos elementos da lista é: {total}')
    except TypeError:
        print('A lista contém elementos que não são numéricos.')
    except Exception as e:
        print(f'Ocorreu um erro inesperado: {e}')

def main():
    soma()


if __name__ == '__main__':
    main()