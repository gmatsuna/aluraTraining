<?php

class Store
{
    private string $cnpj;
    private string $storeName;
    private int $carsBalance;
    private int $carsPurchased;
    private int $carsSold;
    private static int $totalStores = 0;

    public function __construct(string $cnpj, string $storeName)
    {
        $this->cnpj = $cnpj;
        $this->storeName = $storeName;
        $this->carsBalance = 0;
        $this->carsPurchased = 0;
        $this->carsSold = 0;

        self::$totalStores ++;
    }
    public function __destruct()
    {
        self::$totalStores --;
    }

    public function purchasedCars(int $purchasedAmount): void
    {
        if ($purchasedAmount < 0) {
            echo 'Impossible negative value.';
            return;
        }
        $this->carsBalance += $purchasedAmount;
        $this->carsPurchased += $purchasedAmount;
    }

    public function soldCars(int $soldAmount): void
    {
        if ($this->carsBalance < $soldAmount) {
            echo 'Car amount not available.';
        }
        $this->carsBalance -= $soldAmount;
        $this->carsSold += $soldAmount;
    }

    public function getCnpj(): string
    {
        return $this->cnpj;
    }

    public function getStoreName(): string
    {
        return $this->storeName;
    }

    public function getCarsBalance(): int
    {
        return $this->carsBalance;
    }

    public function getCarsPurchased(): int
    {
        return $this->carsPurchased;
    }

    public function getCarsSold(): int
    {
        return $this->carsSold;
    }

    public static function getTotalStores(): int
    {
        return self::$totalStores;
    }

}