"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "@/components/sidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600 * 1000, // 10 minutes
    },
  },
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
