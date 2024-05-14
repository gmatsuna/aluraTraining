<?php

namespace Training\Bank\Model\Account;

class CheckingAccount extends Account
{
    public function tax(): float
    {
        return 0.05;
    }
    public function transfer(Account $accountToIn, float $amount): void
    {
        $this->withdraw($amount);
        $accountToIn->deposit($amount);
    }
}
