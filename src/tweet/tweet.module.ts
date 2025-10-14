import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [TypeOrmModule.forFeature([Tweet])],
})
export class TweetModule {}
