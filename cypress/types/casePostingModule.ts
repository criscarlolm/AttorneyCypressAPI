export type InsertCasePayload = {
  query?: string;
  variables?: {
    data?: {
      categories: Array<number>;
      matchingZip: string;
      state: string;
      zip: string;
      county: string;
      city: string;
      client?: {
        firstName: string;
        lastName: string;
        email: string;
        zip: string;
      };
      shortDesc?: string;
      longDesc?: string;
    };
  };
  data?: string;
};

export type InsertCaseHeadersPayload = {
  'Content-Type'?: string;
  Origin?: string;
  'x-api-key'?: string;
};

export type MatchCasePayload = {
  query?: string;
  Bearer?: string;
};

export type MatchCaseHeadersPayload = {
  Authorization?: string;
  Origin?: string;
  'x-api-key'?: string;
};
