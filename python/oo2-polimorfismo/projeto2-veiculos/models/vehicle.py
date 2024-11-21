from abc import ABC, abstractmethod

class Vehicle:
    def __init__(self, brand, model):
        self._brand = brand
        self._model = model

    @abstractmethod
    def turn_on(self):
        pass