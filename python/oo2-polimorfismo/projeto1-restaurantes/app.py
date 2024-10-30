from models.restorants import Restaurant
from models.menu.meal import Meal
from models.menu.drink import Drink

restorant01 = Restaurant(name='Restaurante 01', category='Categoria 01')
restorant01.change_status()

restorant01.add_rating("Lais", 3)
restorant01.add_rating("Eu", 5)

juice01 = Drink(name='juice01', price= 5.00, size= 'large')
meal01 = Meal(name='Meal 01', price= 8.00, description="pan")

restorant01.add_menu_item(juice01)
restorant01.add_menu_item(meal01)

def main():
    print(restorant01)
    Restaurant.rest_list()
    print(juice01)
    print(meal01)
    restorant01.list_menu_items

if __name__ == '__main__':
    main()