export interface OrchardPage {
  contentItemId?: string
  displayText: string
  contentType?: string
  [key: string]: unknown
}

const API_BASE = import.meta.env.VITE_ORCHARD_API_URL ?? "http://localhost:8080"

async function request(path: string, init: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    ...init,
  })

  if (!res.ok) {
    throw new Error(`Orchard request failed: ${res.status}`)
  }

  return res.status === 204 ? null : res.json()
}

export function listPages() {
  return request("/api/content?contentType=Page")
}

export function getPage(id: string) {
  return request(`/api/content/${id}`)
}

export function createPage(page: OrchardPage) {
  return request("/api/content", {
    method: "POST",
    body: JSON.stringify({ contentType: "Page", ...page }),
  })
}

export function updatePage(id: string, page: Partial<OrchardPage>) {
  return request(`/api/content/${id}`, {
    method: "PUT",
    body: JSON.stringify(page),
  })
}

export function deletePage(id: string) {
  return request(`/api/content/${id}`, { method: "DELETE" })
}
