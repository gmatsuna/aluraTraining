from models.restorants import Restaurant
from models.menu.meal import Meal
from models.menu.drink import Drink
from models.menu.dessert import Dessert

restorant01 = Restaurant(name='Restaurante 01', category='Categoria 01')
restorant01.change_status()
restorant02 = Restaurant(name='Restaurante 02', category='Categoria 02')
restorant02.change_status()
restorant03 = Restaurant(name='Restaurante 03', category='Categoria 03')

restorant01.add_rating("Lais", 3)
restorant01.add_rating("Eu", 5)

restorant02.add_rating("João", 2)
restorant02.add_rating("Maria", 4)


juice01 = Drink(name='juice01', price= 5.00, size= 'large')
juice01.apply_desc()
meal01 = Meal(name='Meal 01', price= 8.00, description="pan")
meal01.apply_desc()
dessert = Dessert('sobremesa 01', 10.00, 'sobremesa', 'pequeno', 'sobremesa pequeno')
dessert.apply_desc()

restorant01.add_menu_item(juice01)
restorant01.add_menu_item(meal01)
restorant01.add_menu_item(dessert)

def main():
    # print(restorant01)
    Restaurant.rest_list()
    # print()
    # print(juice01)
    # print(meal01)
    # print(dessert)
    restorant01.list_menu_items

if __name__ == '__main__':
    main()