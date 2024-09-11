import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
