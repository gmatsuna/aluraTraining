<?php

spl_autoload_register(function (string $class) {
    $class = str_replace('\\', '/', $class) . '.php';
    $class = str_replace('Training/Bank', 'src', $class);

    if (file_exists($class)) {
        require_once $class;
    }
});