const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
  'audit pledge alert glove peanut clever balcony shuffle shift narrow piano brave',
  'https://goerli.infura.io/v3/59628b926dda4de4b677eb5f8b27fc1e'
);

const web3 = new Web3(provider);
