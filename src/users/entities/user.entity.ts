import { Profile } from 'src/profile/entities/profile.entity';
import { Tweet } from 'src/tweet/entities/tweet.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 24,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  password: string;

  @OneToOne(() => Profile,(profile) => profile.user ,{ cascade: true })
  profile?: Profile;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Tweet[]

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
