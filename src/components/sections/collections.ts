import { Chain } from "./chains";  // Import the Chain interface

// Interface for a collection
export interface NFTCollection {
  image: string;
  name: string;
  description: string;
  link?: string;
  contractAddress: string;
  requiredAmount: number;
  chain: Chain;  // Adding the 'chain' field that refers to the associated chain
}

// Array of collections
export const collections: NFTCollection[] = [
  {
    image: "/degenlogo.png",
    name: "Degen",
    description: "Must Own 3",
    link: "https://magiceden.io/collections/apechain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1",
    contractAddress: "0x0e342F41e1B96532207F1Ad6D991969f4b58e5a1",
    requiredAmount: 3,
    chain: {
      name: "ApeChain",
      id: 33139,
      rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "APE",
      explorerUrl: "https://apescan.io/",
      image: "/apechainlogo.png", // Add an image URL for ApeChain
    },
  },
  {
    image: "/apechainlogo.png",
    name: "ApeChain Collection",
    description: "A Coming Soon Collection for ApeChain",
    link: "https://magiceden.io/collections/apechain/",
    contractAddress: "0x",
    requiredAmount: 3,
    chain: {
      name: "ApeChain",
      id: 33139,
      rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "APE",
      explorerUrl: "https://apescan.io/",
      image: "/apechainlogo.png", // Add an image URL for ApeChain
    },
  },
  {
    image: "/apechainlogo.png",
    name: "ApeChain Collection",
    description: "A Coming Soon Collection for Arbitrum",
    link: "https://magiceden.io/collections/apechain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1",
    contractAddress: "0x0e342F41e1B96532207F1Ad6D991969f4b58e5a1",
    requiredAmount: 3,
    chain: {
      name: "ApeChain",
      id: 33139,
      rpc: "https://apechain-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "APE",
      explorerUrl: "https://apescan.io/",
      image: "/apechainlogo.png", // Add an image URL for ApeChain
    },
  },
  {
    image: "/abstractlogo.jpg",
    name: "Abstract Collection",
    description: "A Coming Soon Collection for Abstract",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    requiredAmount: 5,
    chain: {
      name: "Abstract",
      id: 2741,
      rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ABS",
      explorerUrl: "https://explorer.testnet.abs.xyz/",
      image: "/abstractlogo.jpg", // Add an image URL for Abstract
    },
  },
  {
    image: "/abstractlogo.jpg",
    name: "Abstract Collection",
    description: "A Coming Soon Collection for Abstract",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    requiredAmount: 5,
    chain: {
      name: "Abstract",
      id: 2741,
      rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ABS",
      explorerUrl: "https://explorer.testnet.abs.xyz/",
      image: "/abstractlogo.jpg", // Add an image URL for Abstract
    },
  },
  {
    image: "/abstractlogo.jpg",
    name: "Abstract Collection",
    description: "A Coming Soon Collection for Abstract",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    requiredAmount: 5,
    chain: {
      name: "Abstract",
      id: 2741,
      rpc: "https://abstract-testnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ABS",
      explorerUrl: "https://explorer.testnet.abs.xyz/",
      image: "/abstractlogo.jpg", // Add an image URL for Abstract
    },
  },
  {
    image: "/unichainlogo.svg",
    name: "UniChain Collection",
    description: "A Coming Soon Collection for UniChain",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 2,
    chain: {
      name: "UniChain",
      id: 130,
      rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "UNI",
      explorerUrl: "https://sepolia.uniscan.xyz/",
      image: "/unichainlogo.svg", // Add an image URL for UniChain
    },
  },
  {
    image: "/unichainlogo.svg",
    name: "UniChain Collection",
    description: "A Coming Soon Collection for UniChain",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 2,
    chain: {
      name: "UniChain",
      id: 130,
      rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "UNI",
      explorerUrl: "https://sepolia.uniscan.xyz/",
      image: "/unichainlogo.svg", // Add an image URL for UniChain
    },
  },
  {
    image: "/unichainlogo.svg",
    name: "UniChain Collection",
    description: "A Coming Soon Collection for UniChain",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 2,
    chain: {
      name: "UniChain",
      id: 130,
      rpc: "https://unichain-sepolia.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "UNI",
      explorerUrl: "https://sepolia.uniscan.xyz/",
      image: "/unichainlogo.svg", // Add an image URL for UniChain
    },
  },
  {
    image: "/berachainlogo.webp",
    name: "BeraChain Collection",
    description: "A Coming Soon Collection for BeraChain",
    contractAddress: "0x9876543210abcdef9876543210abcdef98765432",
    requiredAmount: 4,
    chain: {
      name: "BeraChain",
      id: 80084,
      rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BERA",
      explorerUrl: "https://berachain.nodefleet.net/",
      image: "/berachainlogo.webp", // Add an image URL for BeraChain
    },
  },
  {
    image: "/berachainlogo.webp",
    name: "BeraChain Collection",
    description: "A Coming Soon Collection for BeraChain",
    contractAddress: "0x9876543210abcdef9876543210abcdef98765432",
    requiredAmount: 4,
    chain: {
      name: "BeraChain",
      id: 80084,
      rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BERA",
      explorerUrl: "https://berachain.nodefleet.net/",
      image: "/berachainlogo.webp", // Add an image URL for BeraChain
    },
  },
 
  {
    image: "/berachainlogo.webp",
    name: "BeraChain Collection",
    description: "A Coming Soon Collection for BeraChain",
    contractAddress: "0x9876543210abcdef9876543210abcdef98765432",
    requiredAmount: 4,
    chain: {
      name: "BeraChain",
      id: 80084,
      rpc: "https://berachain-bartio.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BERA",
      explorerUrl: "https://berachain.nodefleet.net/",
      image: "/berachainlogo.webp", // Add an image URL for BeraChain
    },
  },
  {
    image: "/basechainlogo.svg",
    name: "Base Collection",
    description: "A Coming Soon Collection for Base",
    contractAddress: "0x2468abcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 6,
    chain: {
      name: "Base",
      id: 8453,
      rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BASE",
      explorerUrl: "https://basescan.org/",
      image: "/basechainlogo.svg", // Add an image URL for Base
    },
  },
  {
    image: "/basechainlogo.svg",
    name: "Base Collection",
    description: "A Coming Soon Collection for Base",
    contractAddress: "0x2468abcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 6,
    chain: {
      name: "Base",
      id: 8453,
      rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BASE",
      explorerUrl: "https://basescan.org/",
      image: "/basechainlogo.svg", // Add an image URL for Base
    },
  },
  {
    image: "/basechainlogo.svg",
    name: "Base Collection",
    description: "A Coming Soon Collection for Base",
    contractAddress: "0x2468abcdefabcdefabcdefabcdefabcdef",
    requiredAmount: 6,
    chain: {
      name: "Base",
      id: 8453,
      rpc: "https://base-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "BASE",
      explorerUrl: "https://basescan.org/",
      image: "/basechainlogo.svg", // Add an image URL for Base
    },
  },
  {
    image: "/optimismlogo.svg",
    name: "Optimism Collection",
    description: "A Coming Soon Collection for Optimism",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef12",
    requiredAmount: 3,
    chain: {
      name: "Optimism",
      id: 10,
      rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "OP",
      explorerUrl: "https://optimistic.etherscan.io",
      image: "/optimismlogo.svg", // Add an image URL for Optimism
    },
  },
  {
    image: "/optimismlogo.svg",
    name: "Optimism Collection",
    description: "A Coming Soon Collection for Optimism",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef12",
    requiredAmount: 3,
    chain: {
      name: "Optimism",
      id: 10,
      rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "OP",
      explorerUrl: "https://optimistic.etherscan.io",
      image: "/optimismlogo.svg", // Add an image URL for Optimism
    },
  },
  {
    image: "/optimismlogo.svg",
    name: "Optimism Collection",
    description: "A Coming Soon Collection for Optimism",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef12",
    requiredAmount: 3,
    chain: {
      name: "Optimism",
      id: 10,
      rpc: "https://opt-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "OP",
      explorerUrl: "https://optimistic.etherscan.io",
      image: "/optimismlogo.svg", // Add an image URL for Optimism
    },
  },
  {
    image: "/arbitrumlogo.svg",
    name: "Arbitrum Collection",
    description: "A Coming Soon Collection for Arbitrum",
    contractAddress: "0x9876abcdefabcdefabcdefabcdefabcdef1234",
    requiredAmount: 2,
    chain: {
      name: "Arbitrum",
      id: 42161,
      rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ARB",
      explorerUrl: "https://arbiscan.io",
      image: "/arbitrumlogo.svg", // Add an image URL for Arbitrum
    },
  },
  {
    image: "/arbitrumlogo.svg",
    name: "Arbitrum Collection",
    description: "A Coming Soon Collection for Arbitrum",
    contractAddress: "0x9876abcdefabcdefabcdefabcdefabcdef1234",
    requiredAmount: 2,
    chain: {
      name: "Arbitrum",
      id: 42161,
      rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ARB",
      explorerUrl: "https://arbiscan.io",
      image: "/arbitrumlogo.svg", // Add an image URL for Arbitrum
    },
  },
  {
    image: "/arbitrumlogo.svg",
    name: "Arbitrum Collection",
    description: "A Coming Soon Collection for Arbitrum",
    contractAddress: "0x9876abcdefabcdefabcdefabcdefabcdef1234",
    requiredAmount: 2,
    chain: {
      name: "Arbitrum",
      id: 42161,
      rpc: "https://arb-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "ARB",
      explorerUrl: "https://arbiscan.io",
      image: "/arbitrumlogo.svg", // Add an image URL for Arbitrum
    },
  },
  {
    image: "/polygonlogo.svg",
    name: "Polygon Collection",
    description: "A Coming Soon Collection for Polygon",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef34",
    requiredAmount: 1,
    chain: {
      name: "Polygon",
      id: 137,
      rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "MATIC",
      explorerUrl: "https://polygonscan.com",
      image: "/polygonlogo.svg", // Reference the SVG in the public folder
    },
  },
  {
    image: "/polygonlogo.svg",
    name: "Polygon Collection",
    description: "A Coming Soon Collection for Polygon",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef34",
    requiredAmount: 1,
    chain: {
      name: "Polygon",
      id: 137,
      rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "MATIC",
      explorerUrl: "https://polygonscan.com",
      image: "/polygonlogo.svg", // Reference the SVG in the public folder
    },
  },
  {
    image: "/polygonlogo.svg",
    name: "Polygon Collection",
    description: "A Coming Soon Collection for Polygon",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdef34",
    requiredAmount: 1,
    chain: {
      name: "Polygon",
      id: 137,
      rpc: "https://polygon-mainnet.g.alchemy.com/v2/Q-PUqxJnC1RsVq_KZG1KeNSxJOHZXs4g",
      symbol: "MATIC",
      explorerUrl: "https://polygonscan.com",
      image: "/polygonlogo.svg", // Reference the SVG in the public folder
    },
  },
];
