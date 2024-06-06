export interface CharacterI {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginOrLocation
  location: OriginOrLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string | null
}

export interface CharactersI {
  info: Info
  results: CharacterI[]
}

export interface OriginOrLocation {
  name: string
  url: string
}
