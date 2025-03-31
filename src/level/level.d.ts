export type LevelInterface = {
  id: number
  name: string
}
export type LevelSubjectInterface = {
  level: LevelInterface | null
  subject: InterfaceSubject
}
