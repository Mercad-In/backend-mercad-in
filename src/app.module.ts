import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { SupermarketModule } from './modules/supermarket/supermarket.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [AuthModule, SupermarketModule, CategoriesModule],
})
export class AppModule {}
