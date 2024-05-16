<?php

namespace Training\Bank\Model\Employees;

class Director extends Employee
{
    private $role = 'Director';
    private $salary = 5000;
    private $bonus = 3;

    public function getRole(): string
    {
        return $this->role;
    }
    public function getSalary(): float
    {
        return $this->salary;
    }
    public function getBonus(): float
    {
        return $this->bonus;
    }
}
