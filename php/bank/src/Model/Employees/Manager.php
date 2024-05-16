<?php

namespace Training\Bank\Model\Employees;

class Manager extends Employee
{
    private $role = 'Manager';
    private $salary = 3000;
    private $bonus = 2;

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
