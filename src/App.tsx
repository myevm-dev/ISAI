import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Index
                walletAddress={walletAddress}
                setWalletAddress={setWalletAddress}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
