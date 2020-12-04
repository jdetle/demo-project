// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Owner, FundingRoundOwner, FundingRound } = initSchema(schema);

export {
  Owner,
  FundingRoundOwner,
  FundingRound
};