import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TokenController } from './token/token.controller';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { IngredientModule } from './ingredient/ingredient.module';
import { Ingredient } from './ingredient/entities/ingredient.entity';
import { ReviewModule } from './review/review.module';
import { StoryModule } from './story/story.module';
import { Review } from './review/entities/review.entity';
import { Story } from './story/entities/story.entity';
import { Pizza } from './pizza/entities/pizza.entity';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // default port for mysql
      username: 'root',
      password: '',
      database: 'test-api',
      autoLoadEntities: true,
      synchronize: true, // création des tables automatiquement à partir des entités (pas en prod)
    }),
    UsersModule,
    PizzaModule,
    IngredientModule,
    ReviewModule,
    StoryModule,
    TypeOrmModule.forFeature([User, Ingredient, Review, Story, Pizza]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'banana',
      signOptions: {
        audience: process.env.JWT_AUDIENCE || 'my-digita-school',
      },
    }),
  ],
  controllers: [AppController, TokenController],
  providers: [AppService, UsersService],
})
export class AppModule {}
