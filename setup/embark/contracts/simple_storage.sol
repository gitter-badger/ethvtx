pragma solidity ^0.4.23;


contract SimpleStorage {
  uint public storedData;
  address public owner;
  event Test(address indexed _who);

  constructor(uint initialValue) public {
    owner = tx.origin;
    storedData = initialValue;
  }

  function set(uint x) public {
    storedData = x;
    emit Test(msg.sender);
  }

  function get() public view returns (uint retVal) {
    return storedData;
  }

}
