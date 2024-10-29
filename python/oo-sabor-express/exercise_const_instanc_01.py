class Music:
    def __init__(self, nome="", artista="", duracao=0):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao


music1 = Music(nome='Under Pressure', artista='Queen & David Bowie', duracao=248)
music2 = Music(nome='The Trooper', artista='Iron Maiden', duracao=245)
music3 = Music(nome='Hotel California', artista='Eagles', duracao=390)

musicas = [music1, music2, music3]

print(f'Nome: | Artista: | Duração: (segundos)')

for musica in musicas:
    print(f'{musica.nome} | {musica.artista} | {musica.duracao}')