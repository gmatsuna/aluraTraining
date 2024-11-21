from models.car import Car

car1 = Car("marca1", "modelo1", "cor1")
car2 = Car("marca2", "modelo2", "cor2")
car3 = Car("marca3", "modelo3", "cor3")

def main():
    Car.get_car_list()

if __name__ == "__main__":
    main()