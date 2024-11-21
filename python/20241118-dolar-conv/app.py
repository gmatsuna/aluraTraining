import requests

url = 'https://economia.awesomeapi.com.br/last/USD-BRL'

response = requests.get(url)

if response.status_code == 200:
    json_data = response.json()
    print (json_data)
    cot = float(json_data['USDBRL']['bid'])
    message = f"U$ 1 dólar corresponde a R$ {cot:.2f}"
    print(message)
else:
    print(f"A requisição falhou com o código de status {response.status_code}") 

usd = 10

brl = usd * cot

print(f"U$ {usd:.2f} equivale a R$ {brl:.2f}")