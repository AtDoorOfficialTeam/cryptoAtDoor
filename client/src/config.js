//BITCOIN
export const BITCOIN_MAINNET_BASE_URL =
  "https://api.blockcypher.com/v1/btc/main/";
export const BITCOIN_TESTNET_BASE_URL =
  "https://api.blockcypher.com/v1/btc/test3/";
export const BITCOIN_ADDRESS_DETAIL_PATH = "addrs/";
export const BITCOIN_TRANSACTION_PUSH_PATH = "txs/push";
export const BITCOIN_TO_USD_URL = `https://blockchain.info/ticker`;

//GENERAL
export const BITCOIN_TRANSACTION_FEE_ADDRESS =
  "1LCtkRypCALBohbYGBGR9gEKZkTkpYps9X";
export const CLOVE_EMAIL_LOGO =
  "https://res.cloudinary.com/clove/image/upload/v1574576898/clove%20cdn/clove-banner-54_10x_qfanwz.png";

//ETHEREUM
export const ETHEREUM_TO_USD_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
export const ETHEREUM_MAINNET_BASE_URL_FORBALANCE =
  "https://api.etherscan.io/api?module=account&action=balance&address=";
export const ETHEREUM_BALANCE_DETAIL_PATH =
  "&tag=latest&apikey=67KACY4NGUMCTFJDJR4IZSSNZTMVM4BK1V";
export const ETHEREUM_MAINNET_BASE_URL_FORTRANSACTIONLIST =
  "https://api.etherscan.io/api?module=account&action=txlist&address=";
export const ETHEREUM_TRANSACTIONLIST_DETAIL_PATH =
  "&startblock=0&endblock=99999999&sort=desc&apikey=GAMPDYGBVUK2YVINX7PUYP9MPDQSAUEGZM";
export const ERC20_MAINNET_BASE_URL_FORTRANSACTIONLIST =
  "https://api.etherscan.io/api?module=account&action=tokentx&address=";

//ETHEREUM TESTNET
export const ETHEREUM_TESTNET_BASE_URL_FORBALANCE =
  "https://api-ropsten.etherscan.io/api?module=account&action=balance&address=";
export const ETHEREUM_TESTNET_BASE_URL_FORTRANSACTIONLIST =
  "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=";
export const ERC20_TESTNET_BASE_URL_FORTRANSACTIONLIST =
  "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=";

export const GAS_LIMIT = 21000;
export const ERC20_GAS_LIMIT = 200000;
export const GAS_PRICE_IN_GWEI = "8";
export const ETHEREUM_TRANSACTION_FEE_ADDRESS =
  "0x1CF7837E107Cb67efFEdF5dF2494162b5D44D8C2";

//ERC20 TOKEN SUPPORT
export const ERC_20_TOKENS = [
  "USDC",
  "USDT",
  "BNB",
  "LEO",
  "LINK",
  "HT",
  "MKR",
  "WEENUS",
  "BAT"
];
export const ERC_20_TOKEN_BASE_URL =
  "https://api.etherscan.io/api?module=account&action=";
export const ERC_20_TOKEN_TESTNET_BASE_URL =
  "https://api-ropsten.etherscan.io/api?module=account&action=";
export const ERC_20_TOKENS_DETAILS = {
  bat: {
    contractAddress: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    decimal: 18,
    name: "BAT",
    isTestToken: false
  },
  usdt: {
    contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimal: 6,
    name: "Tether",
    isTestToken: false
  },
  bnb: {
    contractAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    decimal: 18,
    name: "Binance Coin",
    isTestToken: false
  },
  leo: {
    contractAddress: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    decimal: 18,
    name: "UNUS SED LEO",
    isTestToken: false
  },
  link: {
    contractAddress: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimal: 18,
    name: "Chain Link",
    isTestToken: false
  },
  ht: {
    contractAddress: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    decimal: 18,
    name: "Huobi Token",
    isTestToken: false
  },
  mkr: {
    contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimal: 18,
    name: "Maker",
    isTestToken: false
  },
  weenus: {
    contractAddress: "0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA",
    decimal: 18,
    name: "WEENUS TestNet",
    isTestToken: true
  },
  usdc: {
    contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimal: 6,
    name: "USD Coin",
    isTestToken: false
  }
};

export const coinsObj = {
  xtz: {
    name: "Tezos",
    isTestToken: true
  }
};

//COIN TYPES
export const COIN_TYPE = {
  btc: 0,
  btctestnet: 1,
  eth: 60,
  ropsten: 60,
  xtz: 1729
};

//TEZOS
export const TEZOS_MAINNET_BASE_URL = "https://api.tzstats.com/";
export const TEZOS_TESTNET_BASE_URL = "https://api.carthagenet.tzstats.com/";
export const TEZOS_ADDRESS_DETAIL_PATH = "explorer/account/";
export const TEZOS_TRANSACTION_EXTENDED_PATH = "/op";

export const TEZOS_TO_USD_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd";

export const tezosNetwork = "mainnet";
export const tezosNode = "https://tezos-prod.cryptonomic-infra.tech";
export const conseilServer = {
  url: "https://conseil-prod.cryptonomic-infra.tech",
  apiKey: "4b5696de-9269-447c-a47a-31aac15f5176",
  tezosNetwork
};

export const tezosBabylonnetNetwork = "babylonnet";
export const babylonnetTezosNode = "https://tezos-dev.cryptonomic-infra.tech";
export const babylonnetConseilServer = {
  url: "https://conseil-dev.cryptonomic-infra.tech",
  apiKey: "4e3622e8-385e-4c0d-abbe-d30f60455f83",
  tezosBabylonnetNetwork
};

export const ropstenEthTxHashExplorer = "https://ropsten.etherscan.io/tx/";
export const ethTxHashExplorer = "https://etherscan.io/tx/";

export const testNetBtcTxHashExplorer =
  "https://live.blockcypher.com/btc-testnet/tx/";
export const btcTxHashExplorer = "https://live.blockcypher.com/btc/tx/";

export const tesNetTezosTxHashExplorer = "https://carthage.tzkt.io/";
export const tezosTxHashExplorer = "https://tzkt.io/";
