import requests
import json

url = 'https://guilhermeonrails.github.io/api-restaurantes/restaurantes.json'
resp = requests.get(url)

if resp.status_code == 200:
    json_data = resp.json()
    restaurant_data = {}
    for item in json_data:
        # print(f'Restaurante: {item["Company"]}, Item: {item["Item"]}, Preço: {item["price"]}, Descrição: {item["description"]}')
        restaurant_name = item["Company"]
        if restaurant_name not in restaurant_data:
            restaurant_data[restaurant_name] = []

        restaurant_data[restaurant_name].append({
            "item": item["Item"],
            "price": item["price"],
            "description": item["description"]
        })

else:
    print(f'Error: {resp.status_code}')
    
# print(restaurant_data['McDonald’s'])
# print(restaurant_data['KFC'])

for restaurant_name, data in restaurant_data.items():
    file_name = f'{restaurant_name}.json'
    with open(file_name, 'w') as restaurant_file:
        json.dump(data, restaurant_file, indent=4)
