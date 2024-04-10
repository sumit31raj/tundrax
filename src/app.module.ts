import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsModule } from "./cats/cats.module";
import { CoreModule } from "./core/core.module";
import { dataSourceOptions } from "./db/ormconfig";
import { CatsService } from "./cats/cats.service";
import config from "./configuration";
import { User } from "./entities/User.entity";
import { Cat } from "./entities/Cat.entity";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "../.env",
      ignoreEnvFile: false,
      load: [config],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([User, Cat]),
    CoreModule,
    CatsModule,
    AuthModule,
  ],
  providers: [
    CatsService, 
  ],
})
export class AppModule {}

