require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/FLEmHs6TQR_aQH9Lkc52V5PdjlEh8b64",
      accounts: ["43d59865bbe917800c0f1f96693c19d718743a4c37e07cc682efd7c5c611ccd4"],
    }
  }
}