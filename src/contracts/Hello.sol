// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Hello {
    function foo() public view returns (uint256) {
        return block.timestamp;
    }
}
