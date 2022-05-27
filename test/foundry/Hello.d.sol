pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";

import {Hello} from "src/Hello.sol";

contract HelloTest is Test {
    Hello hello;

    function setUp() public {
        hello = new Hello();
    }

    function testTimestamp() public view {
        require(hello.foo() == block.timestamp);
    }
}
