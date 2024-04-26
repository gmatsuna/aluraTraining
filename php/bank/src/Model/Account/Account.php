<?php

namespace Training\Bank\Model\Account;

class Account extends Holder
{
    private Holder $holder;
    private float $balance;

    public function __construct(Holder $holder)
    {
        $this->holder = $holder;
        $this->balance = 0;
    }

    public function getHolder(): Holder
    {
        return $this->holder;
    }
    public function getBalance(): float
    {
        return $this->balance;
    }
}