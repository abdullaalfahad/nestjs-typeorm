import { Module } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { HashtagController } from './hashtag.controller';
import { Hashtag } from './entities/hashtag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HashtagController],
  providers: [HashtagService],
  imports: [TypeOrmModule.forFeature([Hashtag])],
  exports: [HashtagService],
})
export class HashtagModule {}
