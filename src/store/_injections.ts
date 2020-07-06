
import { ApiService } from '../services/ApiService'

export interface Injections {
  ApiService: typeof ApiService
}

export const injections: Injections = {
  ApiService: ApiService,
}
