import { faker } from '@faker-js/faker';
import {
  PutCaseResponsePayload,
  GetCaseResponsePayload,
  PostCaseNotesPayload,
  GetCaseNotesPayload,
  PatchCaseResponsePayload,
  PostArchiveCasePayload,
  PostRestoreCasePayload,
  PostEngageCasePayload,
  PostCompleteCasePayload,
  PostRequestRatingPayload,
} from './../../types/responseController';

export const generatePutCaseResponsePayload = (): PutCaseResponsePayload => {
  return {
    initialConsultationFee: null,
    responseAcceptanceDays: null,
    displayFeeInfo: true,
    initialConsultationLength: 30,
    flatFeeFlag: 1,
    hourlyFeeFlag: null,
    contingentFeeFlag: 1,
    andOrFlag: 1,
    flatFeeTotalAmount: 7890,
    flatFeeBreakdownCode: 4,
    billingTimeIncrement: 30,
    simplePercent: 88,
    structPercent1: null,
    structPercent2: null,
    structPercent3: null,
    structPercent4: null,
    structPercent5: null,
    structPercent6: null,
    structPercent7: null,
    negotiableFlag: 1,
    subjectToChangeFlag: 0,
    filingFeeFlag: 1,
    courtCostFlag: 1,
    travelExpenseFlag: 1,
    phoneExpenseFlag: 1,
    copyingExpenseFlag: 0,
    postageExpenseFlag: 0,
    otherExpenseFlag: 0,
    flatFeeRangeLow: null,
    flatFeeRangeHigh: null,
    flatFeeTypeFlag: 0,
    flatFeeDesc: null,
    contingentFeeDesc: null,
    visaAccepted: false,
    masterCardAccepted: false,
    discoverAccepted: false,
    amexAccepted: false,
    consultationTimeSlots: [],
    shortDesc: `Cypress API Test ` + faker.lorem.word(),
    longDesc: `<div>Cypress API test response only` + `${faker.lorem.word()}` + `</div>`,
  };
};

export const generateGetCaseResponsePayload = (): GetCaseResponsePayload => {
  return {};
};

export const generatePostCaseNotesPayload = (): PostCaseNotesPayload => {
  return {
    note: 'Cypress API Test Case Notes' + faker.lorem.words(),
  };
};

export const generateGetCaseNotesPayload = (): GetCaseNotesPayload => {
  return {};
};

export const generatePatchCaseResponsePayload = (): PatchCaseResponsePayload => {
  return {
    initialConsultationFee: null,
    responseAcceptanceDays: null,
    displayFeeInfo: true,
    initialConsultationLength: 30,
    flatFeeFlag: 1,
    hourlyFeeFlag: null,
    contingentFeeFlag: 1,
    andOrFlag: 1,
    flatFeeTotalAmount: 7890,
    flatFeeBreakdownCode: 4,
    billingTimeIncrement: 30,
    simplePercent: 88,
    structPercent1: null,
    structPercent2: null,
    structPercent3: null,
    structPercent4: null,
    structPercent5: null,
    structPercent6: null,
    structPercent7: null,
    negotiableFlag: 1,
    subjectToChangeFlag: 0,
    filingFeeFlag: 1,
    courtCostFlag: 1,
    travelExpenseFlag: 1,
    phoneExpenseFlag: 1,
    copyingExpenseFlag: 0,
    postageExpenseFlag: 0,
    otherExpenseFlag: 0,
    flatFeeRangeLow: null,
    flatFeeRangeHigh: null,
    flatFeeTypeFlag: 0,
    flatFeeDesc: null,
    contingentFeeDesc: null,
    visaAccepted: false,
    masterCardAccepted: false,
    discoverAccepted: false,
    amexAccepted: false,
    consultationTimeSlots: [],
    shortDesc: `Cypress API Test Update Case Notes ` + faker.lorem.word(),
    longDesc: `<div>Cypress API test Update Case Notes only` + `${faker.lorem.words()}` + `</div>`,
  };
};

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
export const generatePostRequestRatingPayload = (): PostRequestRatingPayload => {
  const responseNumberValue = Cypress.env('responseNumber');
  const responseNumber = `${responseNumberValue}`;
  return {
    responseNumber: `${responseNumber}`,
  };
};
