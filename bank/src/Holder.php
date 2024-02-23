<?php

class Holder
{
    private string $name;
    private string $cpf;

    public function __construct(string $name, string $cpf)
    {
        $this->name = $name;
        $this->cpf = $cpf;
    }
}