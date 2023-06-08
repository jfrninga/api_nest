import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
export enum UserRole {
  ADMIN = 'A',
  MEMBER = 'M',
  Guest = 'G',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({ length: 150 })
  email: string;

  @Exclude()
  @Column({ length: 100 })
  hash!: string;

  @Column({ length: 150 })
  name!: string;

  @Index()
  @Column({ type: 'enum', enum: UserRole })
  role!: UserRole;
}
