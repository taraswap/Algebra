const path = require('path');
const config = require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const { PRIVATE_KEY } = config.parsed || {};

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      loggingEnabled: false,
      evm: 'paris',
    },
    localHardhat: {
      url: `http://127.0.0.1:8545`,
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
    localGeth: {
      url: `http://127.0.0.1:8545`,
      chainId: 1337,
      gas: 10000000,
    },
    taraxaMainnet: {
      url: `https://rpc.mainnet.taraxa.io`,
      chainId: 841,
      accounts: [PRIVATE_KEY],
      sourcify: {
        enabled: true,
        // Optional: specify a different Sourcify server
        apiUrl: 'https://sourcify.dev/server',
        // Optional: specify a different Sourcify repository
        browserUrl: 'https://repo.sourcify.dev',
      },
    },
    taraxaTestnet: {
      url: `https://rpc.testnet.taraxa.io`,
      chainId: 842,
      accounts: [PRIVATE_KEY],
      sourcify: {
        enabled: true,
        // Optional: specify a different Sourcify server
        apiUrl: 'https://sourcify.dev/server',
        // Optional: specify a different Sourcify repository
        browserUrl: 'https://repo.sourcify.dev',
      },
    },
  },
  sourcify: {
    enabled: true,
    // Optional: specify a different Sourcify server
    apiUrl: 'https://sourcify.dev/server',
    // Optional: specify a different Sourcify repository
    browserUrl: 'https://repo.sourcify.dev',
    customChains: {
      network: {
        network: 'taraxaMainnet',
        chainId: 841,
        urls: {
          apiURL: 'https://sourcify.dev/server',
          browserURL: 'https://repo.sourcify.dev',
        },
      },
    },
  },
};
