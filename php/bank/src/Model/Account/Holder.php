<?php

namespace Training\Bank\Model\Account;

use Training\Bank\Model\Address;
use Training\Bank\Model\{CPF, Person};

class Holder
{
    private Person $person;
    private Address $address;

    public function __construct(Person $person, Address $address)
    {
        $this->address = $address;
        $this->person = $person;
    }

    public function getPerson(): Person
    {
        return $this->person;
    }
    public function getAddress(): Address
    {
        return $this->address;
    }
}