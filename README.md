# STX Hodl Guild

STX Hodl Guild is a decentralized community-driven platform built on the Stacks blockchain. It is designed to incentivize long-term holding (HODLing) of STX through a guild-based loyalty system, transforming static assets into active participation in a digital brotherhood.

## Key Features

* **Time-Locked Guild Membership:** Proof of holding STX over time grants tiers of guild membership.
* **On-Chain Reputation:** Your holding duration and consistency are recorded on-chain, creating a trustless reputation for guild members.
* **Community Governance:** Guild members can participate in collective decision-making regarding the treasury and guild direction.
* **Wallet Integration:** Full support for Hiro, Xverse, and WalletConnect v2.

## Unique Innovation: The Guild Achievement System

To differentiate this project, we are introducing the following concepts:

### 1. Proof of Loyalty (PoL) SBTs
Integrated with the `SBTReward.sol` infrastructure, the guild will automatically mint non-transferable Soulbound Tokens for members who reach milestones (e.g., 6 Months Loyalty, Diamond Hands Tier). These SBTs act as your resume within the Stacks ecosystem.

### 2. Guild-Only Voting Vaults
Using the `VoteManager.sol` contract, the guild can host exclusive votes that are only accessible to users with a specific HODL score. This ensures that only committed long-term holders influence the project's trajectory.

### 3. Dynamic Metadata Rewards
Your digital guild crest (NFT) evolves visually based on your holding status. If you sell or "paper hand" your STX, the metadata resets, encouraging users to maintain their position within the guild.

## Tech Stack

* **Smart Contracts:** Clarity (Stacks Blockchain)
* **Frontend:** React.js / Vite
* **Incentive Logic:** Proof of Holding & Time-Lock mechanisms
* **Wallet Support:** WalletConnect Project ID: a5f9260bc9bca570190d3b01f477fc45

## Prerequisites

* Clarinet (Stacks development suite)
* Node.js v18+
* Hiro or Xverse Wallet

## Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/arawrdn/STX-Hodl-Guild.git](https://github.com/arawrdn/STX-Hodl-Guild.git)
    cd STX-Hodl-Guild
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file:
    ```env
    VITE_WALLETCONNECT_PROJECT_ID=a5f9260bc9bca570190d3b01f477fc45
    VITE_GUILD_CONTRACT=0xa1D5aC2C86A4215Bfb64738cd5655fEf8A21Bce8
    ```

4.  **Launch**
    ```bash
    npm run dev
    ```

## Roadmap

* Phase 1: Launch of the Guild Membership Contract.
* Phase 2: Integration of SBTReward for loyalty milestones.
* Phase 3: Implementation of Guild Governance via VoteManager.
* Phase 4: Cross-chain guild verification (Base Network bridge).

## License

This project is licensed under the MIT License.
