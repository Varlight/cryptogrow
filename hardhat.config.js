require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.9',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    txdc: {
      url: "https://rpc.apothem.network",
      accounts: ["853bd654b1efd5b2ba7a46fcda8ab0628d1a000d20cb713921b1a84df6cec0c7"],
      chainId: 51,
    },
  },
};
