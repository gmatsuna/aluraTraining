<?php

namespace Training\Bank\Model\Employees;

use Training\Bank\Model\Person;

abstract class Employee
{
    private Person $person;
    private string $role;

    public function __construct(Person $person)
    {
        $this->person = $person;
    }
    public function getPerson(): Person
    {
        return $this->person;
    }
    abstract public function getRole (): string;
    abstract public function getsalary (): float;
    abstract public function getBonus (): float;
}