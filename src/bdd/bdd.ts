import { InterfaceSubject } from 'src/subject/subject'
import { LevelInterface } from './../level/level.d'

export const LEVELS = [
  {
    id: 1,
    name: 'primaire',
  },
  {
    id: 2,
    name: 'collège',
  },
  {
    id: 3,
    name: 'lycée',
  },
]

export const SUBJECTS = [
  {
    id: 1,
    name: 'français',
    levelId: 1,
  },
  {
    id: 2,
    name: 'anglais',
    levelId: 1,
  },
  {
    id: 3,
    name: 'mathématiques',
    levelId: 3,
  },
]
export type DatabaseKey = 'levels' | 'subjects'
export type DatabaseRecord = LevelInterface | InterfaceSubject

export default {
  subjects: SUBJECTS,
  levels: LEVELS,
}
