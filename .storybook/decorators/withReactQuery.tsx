import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function withReactQuery(Story, context) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
}
