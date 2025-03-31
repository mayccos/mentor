import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LevelEntity } from 'src/level/entities/level.entity'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { BddModule } from './bdd/bdd.module'
import { BddService } from './bdd/bdd.service'
import { ConfigModule } from './config/config.module'
import { LevelModule } from './level/level.module'
import { SubjectEntity } from './subject/entities/subject.entity'
import { SubjectModule } from './subject/subject.module'

@Module({
  imports: [
    SubjectModule,
    LevelModule,
    BddModule,
    ConfigModule.forRoot({
      folder: './config',
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mentor',
      entities: [SubjectEntity, LevelEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BddService],
})
export class AppModule {}
