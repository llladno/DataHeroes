import axios from 'axios'

class Api {
  private api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  getCharacter() {
    return this.api.get('character/')
  }

  nextCharacter(url: string) {
    return this.api.get(url)
  }

  filterCharacter(name: string, status: string) {
    return this.api.get(`character/?name=${name}&status=${status}`)
  }
}

export default new Api()
