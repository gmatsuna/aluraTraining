from models.vehicle import Vehicle

class Car(Vehicle):
    car_list = []
    def __init__(self, brand, model, color):
        super().__init__(brand, model)
        self.color = color
        Car.car_list.append(self)

    def __str__(self):
        return f"Car: {self._brand} {self._model}, Color: {self.color}"
    
    @classmethod
    def get_car_list(cls):
        for car in cls.car_list:
            print(f"Car: {car._brand} - {car._model}, Color: {car.color}")