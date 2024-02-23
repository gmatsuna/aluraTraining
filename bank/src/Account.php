<?php
    class Account 
    {
        private $holder;
        private float $saldo;

        public function __construct(Holder $holder)
        {
            $this->holder = $holder;
            $this->saldo = 0;
        }
        public function deposit($amount)
        {
            if ($amount < 0) {
                echo "Error. Cannot deposit negative amount";
            }
            $this->saldo += $amount;
        }
        public function withdraw($amount)
        {
            if ($amount < 0 || $amount > $this->saldo) {
                echo "Error. Cannot withdraw negative amount or Insufficient funds";
                exit();
            }
            $this->saldo -= $amount;
        }
        public function transfer ($amount, $destinationAccount)
        {
            if ($amount < 0 || $amount > $this->saldo) {
                echo "Error. Cannot transfer negative amount or Insufficient funds";
                exit();
            }
            $this->saldo -= $amount;
            $destinationAccount->deposit($amount);
        }
        public function getBalance(): float
        {
            return $this->saldo;
        }
        public function getName(): string 
        {
            return $this->holder->getName();
        }
        public function getCpf(): string 
        {
            return $this->holder->getCpf();
        }
    }