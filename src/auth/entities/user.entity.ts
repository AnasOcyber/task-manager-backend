import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  readonly firstName: string;

  @Column()
  readonly email: string;

  @Column()
  readonly password: string;
}
