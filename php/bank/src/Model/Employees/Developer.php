<?php

namespace Training\Bank\Model\Employees;

class Developer extends Employee
{
    private string $role = 'Developer';
    private $salary = 1000;
    private $bonus = 0.1;

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
