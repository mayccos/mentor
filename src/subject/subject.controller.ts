import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { LevelSubjectInterface } from 'src/level/level'
import { SUBJECTS } from './bdd'
import { SubjectEntity } from './entities/subject.entity'
import { InterfacePostSubject, InterfaceSubject } from './subject'
import { SubjectService } from './subject.service'

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS
  }
  @Get(':id')
  findOneById(@Param('id') id: string): Promise<SubjectEntity | null> {
    return this.subjectService.findOneById(+id)
  }
  @Post()
  addSubject(@Body() subject: InterfacePostSubject): Promise<SubjectEntity> {
    return this.subjectService.createNewSubject(subject)
  }
  @Get(':name/level')
  findLevelAndSubject(
    @Param('name') name: string,
  ): Promise<LevelSubjectInterface | null> {
    return this.subjectService.levelAndSubjectFromName(name)
  }
  @Get('favorite')
  findFavorite(): string {
    return this.subjectService.findFavorite()
  }
}
