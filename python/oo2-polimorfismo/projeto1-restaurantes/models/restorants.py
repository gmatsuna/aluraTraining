from models.rating import Rating
from models.menu.menu_item import MenuItem

class Restaurant:
    restaurants = []

    def __init__(self, name, category):
        self._name = name
        self._category = category
        self._active = False
        self._rating = []
        self._menu = []
        Restaurant.restaurants.append(self)

    def __str__(self):
        return f"Restaurant: {self._name.ljust(20)} | Category: {self._category.ljust(20)}"
    
    @classmethod
    def rest_list(cls):
        print(f'{'Nome do restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Avaliação'.ljust(25)} |{'Status'}')
        for restaurant in cls.restaurants:
            print(f'{restaurant._name.ljust(25)} | {restaurant._category.ljust(25)} | {str(restaurant.get_average_rating).ljust(25)} | {restaurant.activated}')

    def change_status(self):
        self._active = not self._active

    @property
    def activated(self):
        return '⌧' if self._active else '☐'
    
    def add_rating(self, name, rating):
        if 0 < rating <= 5:
            rating = Rating(name, rating)
            self._rating.append(rating)

    @property
    def get_average_rating(self):
        if not self._rating:
            return "#"
        total_rating = sum(rating._rate for rating in self._rating)
        qtd_rate = len(self._rating)
        return round(total_rating / qtd_rate, 1)
    
    def add_menu_item(self, item_menu):
        if isinstance(item_menu, MenuItem):
            self._menu.append(item_menu)

    @property
    def list_menu_items(self):
        print(f'Cardapio do restaurante {self._name}')
        print(f'{"ID".ljust(3)} | {"Nome do item".ljust(25)} | {"Preço".ljust(15)} | {"Descrição/Tamanho".ljust(25)}')
        for i, item in enumerate (self._menu, 1):
            if hasattr(item, 'description'):
                message = f'{str(i).ljust(3)} | {item._name.ljust(25)} | R${str(item._price).ljust(15)} | {item.description.ljust(25)}'
                print(message)
            else:
                message = f'{str(i).ljust(3)} | {item._name.ljust(25)} | R${str(item._price).ljust(15)} | {item.size.ljust(25)}'
                print(message)