<?php

require_once 'src/Account.php';
require_once 'src/Holder.php';

$firstAccount = new Account(new Holder('Gilberto Hideaki Matsunaga', '123.456.789-10'));

var_dump ($firstAccount);