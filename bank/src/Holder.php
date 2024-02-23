<?php

class Holder
{
    private string $name;
    private string $cpf;

    public function __construct(string $name, string $cpf)
    {
        $this->name = $name;
        $this->cpfValidate($cpf);
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
    public function cpfValidate($cpf)
    {
        $regex = '/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/';
        if (!preg_match($regex, $cpf)) {
            throw new \Exception('CPF inválido');
        }
        return;
    }
}