/* eslint-disable prettier/prettier */
export type LevelInterface = {
  id: number
  name: string
}
export type LevelSubjectInterface = {
  level: LevelInterface | undefined
  subject: InterfaceSubject
}
