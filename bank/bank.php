<?php

require_once 'src/Account.php';
require_once 'src/Holder.php';

$firstAccount = new Account(new Holder('Gilberto Hideaki Matsunaga', '123.456.789-10'));
$firstAccount -> deposit(1000);
$firstAccount -> withdraw(200);

$secondAccount = new Account(new Holder('Nome2', '123.456.789-11'));

$firstAccount -> transfer(500, $secondAccount);

$thirdAccount = new Account(new Holder('Nome3', '123.456.789-12'));
$thirdAccount -> deposit(2000);
$thirdAccount -> transfer(500, $firstAccount);
$thirdAccount -> transfer(300, $secondAccount);

$accounts = [$firstAccount, $secondAccount, $thirdAccount];

//...PRINT BLOCk...
foreach ($accounts as $account) {
    ?>
    <h1><?php echo $account->getName() . PHP_EOL; ?></h1>
    <h2><?php echo $account->getCpf(). PHP_EOL;?></h2>
    <h2><?php echo $account->getBalance() . PHP_EOL?></h2>
    <?php
    echo PHP_EOL;
    var_dump($account);
}

?>
<h1>
    <?php
    echo Account::getNumeroDeContas();
 ?>
</h1>