import { ApiProperty } from '@nestjs/swagger';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Review } from 'src/review/entities/review.entity';
import { Story } from 'src/story/entities/story.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pizza {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => Story, (story) => story.pizza)
  story: Story;

  @OneToMany(() => Review, (review) => review.pizza)
  reviews: Review[];

  @ApiProperty()
  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];
}
