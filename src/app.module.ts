import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { SupermarketModule } from './modules/supermarket/supermarket.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [AuthModule, SupermarketModule, CategoriesModule, ProductsModule],
})
export class AppModule {}
