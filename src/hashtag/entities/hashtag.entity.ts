import { Tweet } from 'src/tweet/entities/tweet.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @ManyToMany(() => Tweet, (tweet) => tweet.hashtags, {"onDelete": "CASCADE"})
  tweets: Tweet[];
}
