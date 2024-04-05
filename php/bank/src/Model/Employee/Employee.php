<?php

class Employee extends Person
{
    private string $role;

    public function __construct(CPF $cpf, string $name, string $role)
    {
        parent::__construct($cpf, $name);
        $this->role = $role;
    }
    public function getRole(): string
    {
        return $this->role;
    }
}