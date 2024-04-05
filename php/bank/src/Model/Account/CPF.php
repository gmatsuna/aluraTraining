<?php

class CPF
{
    private string $cpf;

    public function __construct(string $cpf)
    {
        $cpf = filter_var($cpf, FILTER_VALIDATE_REGEXP, [
            'options' => [
               'regexp' => '/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/'
            ]
        ]);
        if ($cpf === false) {
            throw new \Exception('CPF inválido');
            exit();
        }
        $this->cpf = $cpf;
    }

    public function getCpf(): string
    {
        return $this->cpf;
    }

}