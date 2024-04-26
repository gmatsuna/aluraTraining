<?php

require_once 'autoload.php';

use Training\Store\Model\Store\Store;

$firstStore = new Store(
    '11.111.111/0001-11',
    'First Store',
);
$secondStore = new Store(
    '11.111.111/0001-12',
    'Second Store',
);
$thirdStore = new Store(
    '11.111.111/0001-13',
    'Third Store',
);

$firstStore->purchasedCars(100);
$secondStore->purchasedCars(100);
$thirdStore->purchasedCars(100);

$firstStore->soldCars(10);
$secondStore->soldCars(5);
$thirdStore->soldCars(5);

new Store(
    '11.111.111/0001-14',
    'Fourth Store',
);

$storeList = [$firstStore, $secondStore, $thirdStore];

foreach ($storeList as $store) {
    echo 'CNPJ: ' . $store->getCnpj() . PHP_EOL;
    echo 'Store Name: ' . $store->getStoreName() . PHP_EOL;
    echo 'Cars balance: ' . $store->getCarsBalance() . PHP_EOL;
    echo 'Purchased cars: ' . $store->getCarsPurchased() . PHP_EOL;
    echo 'Sold cars: ' . $store->getCarsSold(). PHP_EOL;
    //var_dump($store);
    echo PHP_EOL;
}

echo 'Total operating stores: ' . Store::getTotalStores();