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
    }