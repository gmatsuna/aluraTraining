<?php

spl_autoload_register (function ($class) {
    $path = str_replace('Training\Store', 'src', $class);
    $path = str_replace('\\', DIRECTORY_SEPARATOR, $path) . '.php';

    if (file_exists($path)) {
        require_once $path;
    }
});

//Training\Store\Model\Store
//src\Model\Store.php