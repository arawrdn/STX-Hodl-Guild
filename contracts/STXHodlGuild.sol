// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/**
 * @title STX Hodl Guild Membership
 * @dev Non-transferable membership token (SBT) for STX holders on Base.
 */
contract STXHodlGuild {
    string public name = "STX Hodl Guild Member";
    string public symbol = "STXHG";
    uint256 public totalSupply;
    address public owner;

    mapping(address => bool) public isMember;
    mapping(address => uint256) public memberId;

    event Joined(address indexed member, uint256 id);

    constructor() {
        owner = msg.sender;
    }

    function joinGuild() external {
        require(!isMember[msg.sender], "Already a member of the Guild");
        
        totalSupply++;
        isMember[msg.sender] = true;
        memberId[msg.sender] = totalSupply;

        emit Joined(msg.sender, totalSupply);
    }

    // Membership is non-transferable (Soulbound)
    // No transfer functions implemented to ensure identity stays with the wallet
}
