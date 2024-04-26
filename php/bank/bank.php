<?php

require_once 'autoload.php';

use Training\Bank\Model\{CPF, Address, Person};
use Training\Bank\Model\Account\{Account, Holder};
use Training\Bank\Model\Employees\{Employee};

$endereco01 = new Address('City1','Neighborhood01','Street01','1007A');
$firstAccount = new Account (
                    new Holder (
                        new Person (
                            new CPF ('123.456.789-11'),
                            'account01'),
                        $endereco01
                    )
);

$endereco02 = new Address('City02','Neighborhood02','Street02','1007B');
$secondAccount = new Account (
                    new Holder (
                        new Person (
                            new CPF ('123.456.789-12'),
                            'account02'
                        ),
                        $endereco02
                    )
);

$accountList = [$firstAccount, $secondAccount];

foreach ($accountList as $account) {
    echo 'CPF: ' . $account->getHolder()->getPerson()->getCpf() . PHP_EOL;
    echo 'Name: ' . $account->getHolder()->getPerson()->getName() . PHP_EOL;
    echo 'Balance: ' . $account->getBalance() . PHP_EOL;
    echo 'City: ' . $account->getHolder()->getAddress()->getCity() . PHP_EOL;
    echo 'Neighborhood: ' . $account->getHolder()->getAddress()->getNeighborhood() . PHP_EOL;
    echo 'Street: ' . $account->getHolder()->getAddress()->getStreet() . PHP_EOL;
    echo 'Number: ' . $account->getHolder()->getAddress()->getNumber() . PHP_EOL;
    echo PHP_EOL;
};

$firstEmployee = new Employee (
                    new Person(
                        new CPF('123.456.789-10'),
                        'Nome deve ter mais que 5 caracteres'),
                    'Role01'
);

$employeeList = [$firstEmployee];

foreach ($employeeList as $employee) {
    echo 'CPF: ' . $employee->getPerson()->getCpf() . PHP_EOL;
    echo 'Name: ' . $employee->getPerson()->getName() . PHP_EOL;
    echo 'Role: ' . $employee->getRole() . PHP_EOL;
    echo PHP_EOL;
};