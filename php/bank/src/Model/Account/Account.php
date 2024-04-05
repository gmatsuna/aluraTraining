<?php

class Account
{
    private Holder $holder;
    private float $balance;
    private static int $accounts = 0;
    private static string $agNumber;
    public function __construct(Holder $holder)
    {
        $this->holder = $holder;
        $this->balance = 0;

        self::$accounts++;
        self::$agNumber = "0001";
    }
    public function __destruct()
    {
        /*if (self::$accounts > 2) {
            echo PHP_EOL . "Accounts are more then 2";
        }*/
        self::$accounts--;
    }

    public function deposit(float $amount): void
    {
        if ($amount < 0) {
            echo 'Amount cannot be negative';
            return;
        }
        $this->balance += $amount;
    }
    public function withdraw(float $amount): void
    {
        if ($amount < 0) {
            throw new \Exception('Amount cannot be negative');
            return;
        }
        $this->balance -= $amount;
    }

    public function transfer(int $amount, Account $destinationAccount): void
    {
        if ($amount < 0 || $amount > $this->balance) {
            throw new \Exception('Amount cannot be negative');
            return;
        }
        $this->withdraw($amount);
        $destinationAccount->deposit($amount);
    }

    public function getBalance(): string
    {
        return $this->balance;
    }
    public static function getAccounts(): int
    {
        return self::$accounts;
    }
    public static function getAgNumber(): int
    {
        return self::$agNumber;
    }

    public function getCpf(): string
    {
        return $this->holder->getCpf();
    }
    public function getName(): string
    {
        return $this->holder->getName();
    }
}