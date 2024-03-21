export type PutCaseResponsePayload = {
  initialConsultationFee?: null;
  responseAcceptanceDays?: null;
  displayFeeInfo?: boolean;
  initialConsultationLength?: number;
  flatFeeFlag?: number;
  hourlyFeeFlag?: null;
  contingentFeeFlag?: number;
  andOrFlag?: number;
  flatFeeTotalAmount?: number;
  flatFeeBreakdownCode?: number;
  billingTimeIncrement?: number;
  simplePercent?: number;
  structPercent1?: null;
  structPercent2?: null;
  structPercent3?: null;
  structPercent4?: null;
  structPercent5?: null;
  structPercent6?: null;
  structPercent7?: null;
  negotiableFlag?: number;
  subjectToChangeFlag?: number;
  filingFeeFlag?: number;
  courtCostFlag?: number;
  travelExpenseFlag?: number;
  phoneExpenseFlag?: number;
  copyingExpenseFlag?: number;
  postageExpenseFlag?: number;
  otherExpenseFlag?: number;
  flatFeeRangeLow?: null;
  flatFeeRangeHigh?: null;
  flatFeeTypeFlag?: number;
  flatFeeDesc?: null;
  contingentFeeDesc?: null;
  visaAccepted?: boolean;
  masterCardAccepted?: boolean;
  discoverAccepted?: boolean;
  amexAccepted?: boolean;
  consultationTimeSlots?: Array<number>;
  shortDesc?: string;
  longDesc?: string;
};

export type GetCaseResponsePayload = {};

export type PostCaseNotesPayload = {
  note?: string;
};

export type GetCaseNotesPayload = {};

export type PatchCaseResponsePayload = {
  initialConsultationFee?: null;
  responseAcceptanceDays?: null;
  displayFeeInfo?: boolean;
  initialConsultationLength?: number;
  flatFeeFlag?: number;
  hourlyFeeFlag?: null;
  contingentFeeFlag?: number;
  andOrFlag?: number;
  flatFeeTotalAmount?: number;
  flatFeeBreakdownCode?: number;
  billingTimeIncrement?: number;
  simplePercent?: number;
  structPercent1?: null;
  structPercent2?: null;
  structPercent3?: null;
  structPercent4?: null;
  structPercent5?: null;
  structPercent6?: null;
  structPercent7?: null;
  negotiableFlag?: number;
  subjectToChangeFlag?: number;
  filingFeeFlag?: number;
  courtCostFlag?: number;
  travelExpenseFlag?: number;
  phoneExpenseFlag?: number;
  copyingExpenseFlag?: number;
  postageExpenseFlag?: number;
  otherExpenseFlag?: number;
  flatFeeRangeLow?: null;
  flatFeeRangeHigh?: null;
  flatFeeTypeFlag?: number;
  flatFeeDesc?: null;
  contingentFeeDesc?: null;
  visaAccepted?: boolean;
  masterCardAccepted?: boolean;
  discoverAccepted?: boolean;
  amexAccepted?: boolean;
  consultationTimeSlots?: Array<number>;
  shortDesc?: string;
  longDesc?: string;
};

export type PostArchiveCasePayload = {};

export type PostRestoreCasePayload = {};

export type PostEngageCasePayload = {};

export type PostCompleteCasePayload = {};

export type PostRequestRatingPayload = {
  responseNumber?: string;
};
