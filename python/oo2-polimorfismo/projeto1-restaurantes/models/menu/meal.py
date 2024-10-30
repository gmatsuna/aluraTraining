from models.menu.menu_item import MenuItem

class Meal(MenuItem):
    def __init__(self, name, price, description):
        super().__init__(name, price)
        self.description = description

    def __str__(self):
        return f'{self._name.capitalize()}: {self.description.capitalize()} - Price: {self._price:.2f}'