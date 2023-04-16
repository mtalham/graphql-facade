import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { AttributesModule } from './attributes/attributes.module';
import { TagSummaryModule } from './tag-summary/tag-summary.module';
import * as process from 'process';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      context: ({ req }) => ({ headers: req.headers }),
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), './src/types/graphql.ts'),
        outputAs: 'interface',
      },
    }),
    AuthModule,
    AttributesModule,
    TagSummaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
