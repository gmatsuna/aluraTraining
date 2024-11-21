from models.menu.menu_item import MenuItem

class Drink(MenuItem):
    def __init__(self, name, price, size):
        super().__init__(name, price)
        self.size = size

    def __str__(self):
        return f"{self._name} - {self.size} - R$ {self._price:.2f}"
    
    def apply_desc(self):
        self._price -= (self._price*0.08)