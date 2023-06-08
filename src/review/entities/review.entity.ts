import { ApiProperty } from '@nestjs/swagger';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 100 })
  name!: string;

  @ManyToOne(() => Pizza, (pizza) => pizza.reviews)
  pizza: Pizza;
}
