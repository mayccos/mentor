import { Injectable } from '@nestjs/common'
import bdd, { DatabaseKey } from './bdd'

@Injectable()
export class BddService {
  get<T>(key: DatabaseKey): T[] {
    return bdd[key] as T[]
  }
  getById<T>(key: DatabaseKey, id: number): T {
    return bdd[key].find((entity) => entity.id === id) as T
  }
}
