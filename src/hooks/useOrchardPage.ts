import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  createPage,
  deletePage,
  getPage,
  listPages,
  updatePage,
  type OrchardPage,
} from "@/lib/orchard"

export const useOrchardPages = () =>
  useQuery({ queryKey: ["orchard", "pages"], queryFn: listPages })

export const useOrchardPage = (id: string) =>
  useQuery({
    queryKey: ["orchard", "page", id],
    queryFn: () => getPage(id),
    enabled: !!id,
  })

export const useCreateOrchardPage = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createPage,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["orchard", "pages"] }),
  })
}

export const useUpdateOrchardPage = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, page }: { id: string; page: Partial<OrchardPage> }) =>
      updatePage(id, page),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: ["orchard", "page", id] })
      qc.invalidateQueries({ queryKey: ["orchard", "pages"] })
    },
  })
}

export const useDeleteOrchardPage = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: deletePage,
    onSuccess: (_, id) => {
      qc.invalidateQueries({ queryKey: ["orchard", "page", id] })
      qc.invalidateQueries({ queryKey: ["orchard", "pages"] })
    },
  })
}
