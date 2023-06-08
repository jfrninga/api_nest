import { ApiProperty } from '@nestjs/swagger';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Story {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Pizza)
  @JoinColumn()
  pizza: Pizza;

  @ApiProperty()
  @Column({ length: 500 })
  anecdocte!: string;

  @ApiProperty()
  @Index()
  @Column({ length: 100 })
  city?: string;
}
