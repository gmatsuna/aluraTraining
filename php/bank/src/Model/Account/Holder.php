<?php

class Holder
{
    private CPF $cpf;
    private string $name;

    public function __construct(CPF $cpf, string $name)
    {
        $this->cpf = $cpf;
        $this->nameValidation($name);
        $this->name = $name;
    }

    public function getCpf(): string
    {
        return $this->cpf->getCpf();
    }

    public function getName(): string
    {
        return $this->name;
    }
    private function nameValidation(string $name)
    {
        if (strlen($name) < 5) {
            throw new \Exception('Name must have at least 5 characters');
            exit();
        }
    }
}