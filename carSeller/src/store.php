<?php

class Store
{
    private string $storeName;
    private string $storeState;

    public function __construct(string $storeName, string $storeState)
    {
        $this->storeName = $storeName;
        $this->stateValidator($storeState);
        $this->storeState = $storeState;
    }
    public function getStoreName(): string
    {
        return $this->storeName;
    }
    public function getStoreState(): string
    {
        return $this->storeState;
    }
    public function stateValidator($storeState)
    {
        if (strlen ($storeState) != 2) {
            echo "A sigla do estado deve ter exatos 2 caracteres";
            exit();
        }
    }
}