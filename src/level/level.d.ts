export type LevelInterface = {
  id: number | undefined
  name: string | undefined
} | null
export type LevelSubjectInterface = {
  level: LevelInterface
  subject: InterfaceSubject
} | null
