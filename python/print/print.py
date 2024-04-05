print ('Python na Escola de Programação da Alura\n')

nome = input ('Digite seu nome:')
idade = input ('Digite sua idade:')
print ('\n')
print ('Meu nome é',nome,'e tenho',idade,'anos.')
print (f'Meu nome é {nome} e tenho {idade} anos.')
print ('Meu nome é {} e tenho {} anos.'.format(nome,idade))
print ('Meu nome é %s e tenho %s anos.' % (nome,idade))

print ("""
A
L
U
R
A

""")

print (
    'A',
    'L',
    'U',
    'R',
    'A',
    sep='\n'
)

pi = 3.14159
pi_arredondado = round(pi,2)
print (f'\nO valor arredondado de pi é: {pi:.2f}')
print ('O valor arredondado de pi é: {:.2f}'.format(pi))
print ('O valor arredondado de pi é:', round(pi, 2))
print (f'O valor arredondado de pi é: {pi_arredondado}')