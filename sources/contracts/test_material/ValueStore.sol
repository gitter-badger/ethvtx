//
//    /$$    /$$$$$$$$ /$$$$$$    /$$
//   | $$   |_____ $$//$$__  $$ /$$$$
//  /$$$$$$      /$$/|__/  \ $$|_  $$
// |_  $$_/     /$$/   /$$$$$$/  | $$
//   | $$      /$$/   /$$____/   | $$
//   | $$ /$$ /$$/   | $$        | $$
//   |  $$$$//$$/    | $$$$$$$$ /$$$$$$
//    \___/ |__/     |________/|______/
//  t721: 0.1.0, sol: 0.5.0

pragma solidity 0.5.0;

contract ValueStore {

    uint256 internal value;

    constructor(uint256 _value) public {
        value = _value;
    }

    function setValue(uint256 _value) public {
        require(_value != 5, "5 is a test revert value");
        value = _value;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

}
