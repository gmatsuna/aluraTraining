from models.agency.agencia import Agencia

agencia1 = Agencia("Nome 01", "Endereco 01", 1)


def main():
    print(agencia1.nome)
    print(agencia1.endereco)
    print(agencia1.numero)

if __name__ == "__main__":
    main()