<?php

namespace Training\Bank\Model\Service;

class BonusCalculator
{
    public function calculate($salari, $bonus)
    {
        return $salari * $bonus;
    }
}
