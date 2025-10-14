import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        nullable: false,
    })
    text: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    imageUrl?: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.tweets)
    user: User
}
