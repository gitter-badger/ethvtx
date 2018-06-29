pragma solidity ^0.4.17;

contract Migrations {
  address public owner;
  uint public last_completed_migration;
  event Test(address indexed _who);

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function Migrations() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
    emit Test(msg.sender);
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
