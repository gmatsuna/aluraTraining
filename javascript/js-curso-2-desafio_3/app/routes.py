from flask import Flask, render_template, request

app = Flask(__name__)

# Route Index

@app.route("/")

# @app.route('/index')

# Funcao

def index():
    var = "Exercicios feito como proposta das aulas da Alura."
    dados = {"profissao": "trabalho 1", "cidade": "Sao Paulo"}
    return render_template('index.html', text=var, dados=dados)
    # return render_template("index.html")









# Colocar no ar
if __name__ == '__main__':
    app.run(debug=True)
