import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly firstName: string;

  @Column()
  readonly email: string;

  @Column()
  readonly password: string;

  @Column('json', { nullable: true })
  tasks: string[];
}
