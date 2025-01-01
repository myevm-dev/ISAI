import { ethers } from "ethers";

export const switchToApeChain = async (provider: ethers.BrowserProvider) => {
  try {
    // Attempt to switch to ApeChain
    await provider.send("wallet_switchEthereumChain", [{ chainId: "0x8153" }]); // Hexadecimal for 33139
  } catch (error: any) {
    // If chain is not added, request the user to add it
    if (error.code === 4902) {
      try {
        await provider.send("wallet_addEthereumChain", [
          {
            chainId: "0x8153",
            chainName: "ApeChain",
            rpcUrls: ["https://apechain.calderachain.xyz/http"],
            nativeCurrency: {
              name: "APE",
              symbol: "APE",
              decimals: 18,
            },
            blockExplorerUrls: ["https://apechain.calderaexplorer.xyz/"],
          },
        ]);
      } catch (addError) {
        console.error("Failed to add ApeChain:", addError);
        alert("Switch to ApeChain. Please try again.");
      }
    } else {
      console.error("Failed to switch to ApeChain:", error);
      alert("Switch to ApeChain. Please try again.");
    }
  }
};
