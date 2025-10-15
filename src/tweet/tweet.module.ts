import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';
import { UsersModule } from 'src/users/users.module';
import { HashtagModule } from 'src/hashtag/hashtag.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [TypeOrmModule.forFeature([Tweet]), UsersModule, HashtagModule],
  
})
export class TweetModule {}
