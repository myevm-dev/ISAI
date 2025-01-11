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
    chain: {  // Specify the associated chain for the collection
      name: "Ethereum",
      id: 1,
      rpc: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      symbol: "ETH",
      explorerUrl: "https://etherscan.io",
      image: "https://path-to-ethereum-image",
    },
  },
  // Add more collections as needed, each specifying its associated chain
];
