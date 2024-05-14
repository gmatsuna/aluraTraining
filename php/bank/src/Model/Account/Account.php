<?php

namespace Training\Bank\Model\Account;

abstract class Account extends Holder
{
    private Holder $holder;
    private float $balance;

    public function __construct(Holder $holder)
    {
        $this->holder = $holder;
        $this->balance = 0;
    }

// Account information Getter

    public function getHolder(): Holder
    {
        return $this->holder;
    }
    public function getBalance(): float
    {
        return $this->balance;
    }

// Account Operations
    abstract protected function tax (): float;

    public function deposit(float $amount): void
    {
        $this->balance += $amount;
    }
    public function withdraw(float $amount): void
    {
        $this->balance -= $amount + ($this->tax() * $amount);
    }
}