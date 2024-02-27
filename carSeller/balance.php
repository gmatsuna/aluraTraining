<?php

require_once 'src/car.php';
require_once 'src/store.php';

$firstStore = new Car(new Store('Loja 1', 'SP'));
$firstStore->purchasedCarAmount(10);
$firstStore->soldCarAmount(4);

$secondStore = new Car(new Store('Loja 2', 'MG'));
$secondStore->purchasedCarAmount(7);
$secondStore->soldCarAmount(2);

$thirdStore = new Car(new Store('Loja 3', 'MT'));
$thirdStore->purchasedCarAmount(13);
$thirdStore->soldCarAmount(9);

$storeList = [$firstStore, $secondStore, $thirdStore];

foreach ($storeList as $store) {
    echo $store->getStoreName() . PHP_EOL;
    echo $store->getStoreState() . PHP_EOL;
    echo $store->getCarAmount() . PHP_EOL;
    echo $store->getPurchasedCarAmount() . PHP_EOL;
    echo $store->getSoldCarAmount(). PHP_EOL;
    var_dump($store);
    echo PHP_EOL;
}