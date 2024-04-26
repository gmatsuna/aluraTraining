<?php

namespace Training\Bank\Model\Employees;

use Training\Bank\Model\Person;

class Employee
{
    private Person $person;
    private string $role;

    public function __construct(Person $person, string $role)
    {
        $this->person = $person;
        $this->role = $role;
    }
    public function getPerson(): Person
    {
        return $this->person;
    }
    public function getRole(): string
    {
        return $this->role;
    }
}