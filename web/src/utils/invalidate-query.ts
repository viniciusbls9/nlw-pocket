import type { QueryClient } from '@tanstack/react-query'

export const invalidateQuery = ({
  queryClient,
  queryId,
}: { queryClient: QueryClient; queryId: string }) => {
  queryClient.invalidateQueries({ queryKey: [queryId] })
}
