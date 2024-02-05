// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ReadyToFightToken is ERC20, ERC20Burnable {
    
    constructor(address initialOwner, uint256 _supply)
        ERC20("Ready To Fight", "RTF")
    {
        _mint(initialOwner, _supply);
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20)
    {
        super._update(from, to, value);
    }
}
