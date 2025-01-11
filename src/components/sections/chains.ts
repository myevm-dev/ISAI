export interface Chain {  // Interface for an individual chain
  name: string;
  id: number; // This should be your network ID
  rpc: string;
  symbol?: string;
  explorerUrl?: string;
  image?: string; // Image field for each chain
}

// Chains array: A list of Chain objects
export const chains: Chain[] = [

  {
    name: "ApeChain",
    id: 33139, // Example ID, replace with the actual ID
    rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "APE",
    explorerUrl: "https://apescan.io/",
    image: "/apechainlogo.png", // Add an image URL for ApeChain
  },
  {
    name: "Abstract",
    id: 2741, // Example ID, replace with the actual ID
    rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ABS",
    explorerUrl: "https://explorer.testnet.abs.xyz/",
    image: "/abstractlogo.jpg", // Add an image URL for Abstract
  },
  {
    name: "UniChain",
    id: 130, // Example ID, replace with the actual ID
    rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "UNI",
    explorerUrl: "https://sepolia.uniscan.xyz/",
    image: "/unichainlogo.svg", // Add an image URL for UniChain
  },
  {
    name: "BeraChain",
    id: 80084, // Example ID, replace with the actual ID
    rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BERA",
    explorerUrl: "https://berachain.nodefleet.net/",
    image: "/berachainlogo.webp", // Add an image URL for UniChain
  },
  {
    name: "Base",
    id: 8453, // Example ID, replace with the actual ID
    rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "BASE",
    explorerUrl: "https://basescan.org/",
    image: "/basechainlogo.svg", // Add an image URL for Base
  },
  {
    name: "Optimism",
    id: 10,
    rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "OP",
    explorerUrl: "https://optimistic.etherscan.io",
    image: "/optimismlogo.svg", // Add an image URL for Optimism
  },
  {
    name: "Arbitrum",
    id: 42161,
    rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "ARB",
    explorerUrl: "https://arbiscan.io",
    image: "/arbitrumlogo.svg", // Add an image URL for Arbitrum
  },
  {
    name: "Polygon",
    id: 137,
    rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
    symbol: "MATIC",
    explorerUrl: "https://polygonscan.com",
    image: "/polygonlogo.svg", // Reference the SVG in the public folder
  },

];
