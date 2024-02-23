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
    public function getName(): string
    {
        return $this->name;
    }
    public function getCpf(): string
    {
        return $this->cpf;
    }
}