declare global {
    interface EthereumProvider {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
    }
  
    interface Window {
      ethereum?: EthereumProvider;
    }
  }
  
  export {};
  