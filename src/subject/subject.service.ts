/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { SUBJECTS } from './bdd'
import { InterfacePostSubject, InterfaceSubject } from './subject'

@Injectable()
export class SubjectService {
  findAll(): InterfaceSubject[] {
    return SUBJECTS
  }
  findOneById(id: number): InterfaceSubject | undefined {
    const subject = SUBJECTS.find((s) => s.id === id)
    return subject
  }
  createNewSubject({ name }: InterfacePostSubject): InterfaceSubject[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id)
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1
    return [...SUBJECTS, { id: newId, name, levelId: 1 }]
  }
}
