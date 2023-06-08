import { ApiProperty } from '@nestjs/swagger';
import { Pizza } from 'src/pizza/entities/pizza.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 100 })
  name!: string;

  @ApiProperty()
  @ManyToMany(() => Pizza)
  pizzas: Pizza[];
}
