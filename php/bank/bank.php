<?php

require_once 'autoload.php';

use Training\Bank\Model\{CPF, Address, Person};
use Training\Bank\Model\Account\{CheckingAccount, SavingsAccount, Holder};
use Training\Bank\Model\Employees\{Developer, Manager};

$endereco01 = new Address('City1','Neighborhood01','Street01','1007A');
$firstAccount = new CheckingAccount (
                    new Holder (
                        new Person (
                            new CPF ('123.456.789-11'),
                            'account01'),
                        $endereco01
                    )
);

$endereco02 = new Address('City02','Neighborhood02','Street02','1007B');
$secondAccount = new SavingsAccount (
                    new Holder (
                        new Person (
                            new CPF ('123.456.789-12'),
                            'account02'
                        ),
                        $endereco02
                    )
);

$firstAccount->deposit(10000);
$firstAccount->withdraw(1000);
$firstAccount->transfer($secondAccount, 5000);

$secondAccount->withdraw(1000);

$accountList = [$firstAccount, $secondAccount];

foreach ($accountList as $account) {
    echo 'CPF: ' . $account->getHolder()->getPerson()->getCpf() . PHP_EOL;?><br><?php
    echo 'Name: ' . $account->getHolder()->getPerson()->getName() . PHP_EOL;?><br><?php
    echo 'Balance: ' . $account->getBalance() . PHP_EOL;?><br><?php
    echo 'City: ' . $account->getHolder()->getAddress()->getCity() . PHP_EOL;?><br><?php
    echo 'Neighborhood: ' . $account->getHolder()->getAddress()->getNeighborhood() . PHP_EOL;?><br><?php
    echo 'Street: ' . $account->getHolder()->getAddress()->getStreet() . PHP_EOL;?><br><?php
    echo 'Number: ' . $account->getHolder()->getAddress()->getNumber() . PHP_EOL;?><br><?php
    echo PHP_EOL;?><br><br><?php
};

$firstEmployee = new Developer (
                    new Person(
                        new CPF('123.456.789-10'),
                        'Nome deve ter mais que 5 caracteres'),
);

$secondEmployee = new Manager (
                    new Person(
                        new CPF('123.456.789-10'),
                        'Nome deve ter mais que 5 caracteres'),
);

$employeeList = [$firstEmployee, $secondEmployee];

foreach ($employeeList as $employee) {
    echo 'CPF: ' . $employee->getPerson()->getCpf() . PHP_EOL;?><br><?php
    echo 'Name: ' . $employee->getPerson()->getName() . PHP_EOL;?><br><?php
    echo 'Role: ' . $employee->getRole() . PHP_EOL;?><br><?php
    echo 'Salary: ' . $employee->getSalary() . PHP_EOL;?><br><?php
    echo 'Bonus: ' . $employee->getBonus() . PHP_EOL;?><br><?php
    echo PHP_EOL;?><br><br><?php
};