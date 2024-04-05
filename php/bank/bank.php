<?php

require_once 'src/Model/Account/Account.php';
require_once 'src/Model/Account/Holder.php';
require_once 'src/Model/Account/CPF.php';

$firstAccount = new Account(
                    new Holder(
                            new CPF('123.456.789-10'),
                            'Name 1',
                    )
);
$secondAccount = new Account(
                    new Holder(
                            new CPF('123.456.789-11'),
                            'Name 2',
                    )
);
$thirdAccount = new Account(
                    new Holder(
                            new CPF('123.456.789-12'),
                            'Name 3',
                    )
);
$fourthAccount = new Account(
                    new Holder(
                            new CPF('123.456.789-13'),
                            'Name 4',
                    )
);

$firstAccount->deposit(2500);
$secondAccount->deposit(500);
$thirdAccount->deposit(500);
$fourthAccount->deposit(300);

$firstAccount->withdraw(500);

$firstAccount->transfer(500, $secondAccount);
$firstAccount->transfer(500, $thirdAccount);
$secondAccount->transfer(100, $fourthAccount);
$thirdAccount->transfer(100, $fourthAccount);

//unset($secondAccount);

$accounts = [$firstAccount, $secondAccount, $thirdAccount, $fourthAccount];

//...PRINT BLOCk...
foreach ($accounts as $account) {
    ?>
    <h1><?php echo 'Name: ' . $account->getName() . PHP_EOL; ?></h1>
    <h2><?php echo 'CPF: ' . $account->getCpf(). PHP_EOL;?></h2>
    <h2><?php echo 'Ag: ' . Account::getAgNumber() . PHP_EOL;?></h2>
    <h2><?php echo 'Balance: ' . $account->getBalance() . PHP_EOL?></h2>
    <?php
    echo PHP_EOL;
    //var_dump($account);
}

?>
<h1>
    <?php
    echo 'Accounnts total: ' . Account::getAccounts();
 ?>
</h1>