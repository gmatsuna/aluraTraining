class Restaurante:
    nome = ''
    categoria = ''
    ativo = False

restaurante = Restaurante()
restaurante.nome = 'Praca'
restaurante.categoria = 'Gourmet'

# 1. Atribua o valor 'Italiana' ao atributo categoria da instância restaurante_praca da classe Restaurante.
restaurante.categoria = 'Italiana'

# 2. Acesse o valor do atributo nome da instância restaurante_praca da classe Restaurante.
print(restaurante.nome)

# 3. Verifique o valor inicial do atributo ativo para a instância restaurante_praca e exiba uma mensagem informando se o restaurante está ativo ou inativo.
print(restaurante.ativo)

# 4. Acesse o valor do atributo de classe categoria diretamente da classe Restaurante e armazene em uma variável chamada categoria.
categoria = restaurante.categoria

# 5. Altere o valor do atributo nome para 'Bistrô'.
restaurante.nome = 'Bistrô'

# 6. Crie uma nova instância da classe Restaurante chamada restaurante_pizza com o nome 'Pizza Place' e categoria 'Fast Food'.

restaurante_pizza = Restaurante()
restaurante_pizza.nome = 'Pizza Place'
restaurante_pizza.categoria = 'Fast Food'

# 7. Verifique se a categoria da instância restaurante_pizza é 'Fast Food'.
print(restaurante_pizza.categoria)

# 8. Mude o estado da instância restaurante_pizza para ativo.
restaurante_pizza.ativo = True

# 9. Imprima no console o nome e a categoria da instância restaurante_praca.
restaurante_praca = Restaurante()
restaurante_praca.nome = 'Praca'
restaurante_praca.categoria = 'Gourmet'

print(vars(restaurante_praca))
