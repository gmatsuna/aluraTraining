<?php

namespace Training\Bank\Model\Account;

final class SavingsAccount extends Account
{
    public function tax (): float
    {
        return 0.03;
    }
}
