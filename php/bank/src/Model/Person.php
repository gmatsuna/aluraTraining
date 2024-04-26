<?php

namespace Training\Bank\Model;

use Training\Bank\Model\CPF;

class Person
{
    private CPF $cpf;
    private string $name;

    public function __construct(CPF $CPF, string $name)
    {
        $this->cpf = $CPF;
        $this->nameValidation($name);
        $this->name = $name;
    }

    private function nameValidation(string $name)
    {
        if (strlen($name) < 5) {
            throw new \Exception('Name must have at least 5 characters');
            exit();
        }
    }

    public function getCpf(): string
    {
        return $this->cpf->getCpf();
    }
    public function getName(): string
    {
        return $this->name;
    }

}