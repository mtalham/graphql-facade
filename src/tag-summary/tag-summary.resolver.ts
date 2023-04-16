import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Context,
  GraphQLExecutionContext,
} from '@nestjs/graphql';
import { TagSummaryService } from './tag-summary.service';
import { AttributeSummaryFilter, TagSummary } from '../types/graphql';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs';

@Resolver('TagSummary')
export class TagSummaryResolver {
  constructor(
    private readonly tagSummaryService: TagSummaryService,
    private readonly authService: AuthService,
  ) {}

  @Query('tagSummary')
  findOne(
    @Args('itemId') itemId: string,
    @Context() context: GraphQLExecutionContext,
  ) {
    const headers = context['headers'];
    const tenant = this.authService.getTenantIdFrom(headers);
    const twinId = headers['x-twin-id'];
    return this.tagSummaryService.findByItemBy(tenant, twinId, itemId);
  }

  @ResolveField()
  attributes(
    @Parent() tagSummary: TagSummary,
    @Context() context: GraphQLExecutionContext,
    @Args('filter') filter: AttributeSummaryFilter,
  ) {
    const { id } = tagSummary;
    const headers = context['headers'];
    const tenant = this.authService.getTenantIdFrom(headers);
    const twinId = headers['x-twin-id'];

    return this.tagSummaryService
      .getItemAttributes(tenant, twinId, id.toString())
      .pipe(
        map((res) =>
          res.filter((it) => filter.dtmName_in.includes(it.dtmName)),
        ),
      );
  }
}
