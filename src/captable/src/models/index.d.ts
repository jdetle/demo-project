import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Owner {
  readonly id: string;
  readonly percent?: number;
  readonly roundsInvested?: string;
  readonly lastModified?: number;
  readonly fundingrounds?: (FundingRoundOwner | null)[];
  readonly isFounder?: boolean;
  readonly firstName?: string;
  readonly lastName?: string;
  constructor(init: ModelInit<Owner>);
  static copyOf(source: Owner, mutator: (draft: MutableModel<Owner>) => MutableModel<Owner> | void): Owner;
}

export declare class FundingRoundOwner {
  readonly id: string;
  readonly fundinground: FundingRound;
  readonly owner: Owner;
  constructor(init: ModelInit<FundingRoundOwner>);
  static copyOf(source: FundingRoundOwner, mutator: (draft: MutableModel<FundingRoundOwner>) => MutableModel<FundingRoundOwner> | void): FundingRoundOwner;
}

export declare class FundingRound {
  readonly id: string;
  readonly valuation?: number;
  readonly date?: string;
  readonly FundingRoundOwners?: FundingRoundOwner[];
  constructor(init: ModelInit<FundingRound>);
  static copyOf(source: FundingRound, mutator: (draft: MutableModel<FundingRound>) => MutableModel<FundingRound> | void): FundingRound;
}