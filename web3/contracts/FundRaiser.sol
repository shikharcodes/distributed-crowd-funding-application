// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FundRaiser {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    // to create a new campaign
    function createCampaign() {}

    // to donate to a specific campaign
    function donateToCampaign() {}

    // gives us a list of all the people who have donated to the campaign
    function getDoantors() {}

    // get a list of all campaigns
    function getCampaigns() {} 
}