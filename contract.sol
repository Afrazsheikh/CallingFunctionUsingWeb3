// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract demo{ 

//state
    uint public x = 10;
    function set(uint _x)  public {

        x = _x;
    }
}