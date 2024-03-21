import {
  PostArchiveCasePayload,
  PostRestoreCasePayload,
  PostEngageCasePayload,
  PostCompleteCasePayload,
  GetAttorneyCaseDetailsPayload,
  GetAttorneyListCasesPayload,
  GetIntakeQuestionsPayload,
  PatchUpdatesCaseDetailsPayload,
  PatchUpdatesCaseDetailsIccPayload,
} from 'cypress/types/legalCaseController';

export const generatePostArchiveCasePayload = (): PostArchiveCasePayload => {
  return {};
};

export const generatePostRestoreCasePayload = (): PostRestoreCasePayload => {
  return {};
};
export const generatePostEngageCasePayload = (): PostEngageCasePayload => {
  return {};
};
export const generatePostCompleteCasePayload = (): PostCompleteCasePayload => {
  return {};
};
export const generateGetAttorneyCaseDetailsPayload = (): GetAttorneyCaseDetailsPayload => {
  return {};
};
export const generateGetAttorneyListCasesPayload = (): GetAttorneyListCasesPayload => {
  return {};
};
export const generateGetIntakeQuestionsPayload = (): GetIntakeQuestionsPayload => {
  return {};
};
export const generatePatchUpdatesCaseDetailsPayload = (): PatchUpdatesCaseDetailsPayload => {
  return {
    liked: false,
    opened: true,
  };
};
export const generatePatchUpdatesCaseDetailsIccPayload = (): PatchUpdatesCaseDetailsIccPayload => {
  return {
    icc: true,
  };
};
