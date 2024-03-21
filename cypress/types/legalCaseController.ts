export type PostArchiveCasePayload = {};

export type PostRestoreCasePayload = {};

export type PostEngageCasePayload = {};

export type PostCompleteCasePayload = {};

export type GetAttorneyCaseDetailsPayload = {};

export type GetAttorneyListCasesPayload = {};

export type GetIntakeQuestionsPayload = {};

export type PatchUpdatesCaseDetailsPayload = {
  liked?: boolean;
  opened?: boolean;
};

export type PatchUpdatesCaseDetailsIccPayload = {
  icc?: boolean;
};
