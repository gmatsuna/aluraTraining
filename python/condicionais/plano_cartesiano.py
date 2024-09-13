x = int(input('Coordenada X:\n'))
y = int(input('Coordenada Y:\n'))

if (x > 0 and y > 0):
    print('Ponto está no quadrante 1.')
elif (x < 0 and y > 0):
    print('Ponto está no quadrante 2.')
elif (x < 0 and y < 0):
    print('Ponto está no quadrante 3.')
elif (x > 0 and y < 0):
    print('Ponto está no quadrante 4.')
elif (x == 0 and y == 0):
    print('Ponto está na Origem do plano.')
else:
    print('Ponto está na Eixo Y.') if x == 0 else print('Ponto está na Eixo X.')