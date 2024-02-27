<?php

class Car
{
    private $store;
    private int $carAmount;
    private int $purchasedCarAmount;
    private int $soldCarAmount;

    public function __construct(Store $store)
    {
        $this->store = $store;
        $this->carAmount = 0;
        $this->purchasedCarAmount = 0;
        $this->soldCarAmount = 0;
    }
    public function getCarAmount()
    {
        return $this->carAmount;
    }
    public function getPurchasedCarAmount()
    {
        return $this->purchasedCarAmount;
    }
    public function getSoldCarAmount()
    {
        return $this->soldCarAmount;
    }
    public function getStoreName()
    {
        return $this->store->getStoreName();
    }
    public function getStoreState()
    {
        return $this->store->getStoreState();
    }
    public function purchasedCarAmount(int $amount)
    {
        if ($amount < 0) {
            throw new \Exception("Amount cannot be negative");
        }
        return [$this->carAmount += $amount, $this->purchasedCarAmount += $amount];
    }
    public function soldCarAmount(int $amount)
    {
        if ($amount < 0 || $amount > $this -> carAmount) {
            throw new \Exception("Amount cannot be negative");
        }
        return [$this->carAmount -= $amount, $this->soldCarAmount += $amount];
    }
}