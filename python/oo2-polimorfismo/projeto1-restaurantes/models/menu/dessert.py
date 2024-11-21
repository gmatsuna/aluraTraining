from models.menu.menu_item import MenuItem

class Dessert(MenuItem):
    def __init__(self, name, price, type, size, description):
        super().__init__(name, price)
        self.type = type
        self.size = size
        self.description = description

    def __str__(self):
        return f'{self._name} | {self.size} - {self.description.capitalize()} - {self.type} - Price: {self._price:.2f}'
    
    def apply_desc(self):
        self._price -= (self._price*0.15)