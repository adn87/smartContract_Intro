const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
//updated web3 and hdwallet-provider imports added for convenience
const { interface, bytecode } = require('./compile')

// deploy code will go here
const provider = new HDWalletProvider(
  '*',
  '*'
);

const web3 = new Web3(provider);
