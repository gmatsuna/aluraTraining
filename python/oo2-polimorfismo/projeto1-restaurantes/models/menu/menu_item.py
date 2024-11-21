from abc import ABC, abstractmethod

class MenuItem(ABC):
    def __init__(self, name, price):
        self._name = name
        self._price = price

    @abstractmethod
    def apply_desc(self):
        pass