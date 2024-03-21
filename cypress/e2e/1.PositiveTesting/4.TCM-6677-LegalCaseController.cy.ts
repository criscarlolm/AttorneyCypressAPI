/// <reference types="cypress" />
import {
  InsertCasePayload,
  MatchCasePayload,
  InsertCaseHeadersPayload,
  MatchCaseHeadersPayload,
} from '../../types/casePostingModule';
import {
  generateInsertCasePayload,
  generateMatchCasePayload,
  generateInsertCaseHeadersPayload,
  generateMatchCaseHeadersPayload,
} from 'cypress/support/utils/casePostingModule';

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import { PutCaseResponsePayload } from '../../types/responseController';

import { generatePutCaseResponsePayload } from '../../support/utils/responseControllerData';

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
} from '../../types/legalCaseController';
import {
  generatePostArchiveCasePayload,
  generatePostRestoreCasePayload,
  generatePostEngageCasePayload,
  generatePostCompleteCasePayload,
  generateGetAttorneyCaseDetailsPayload,
  generateGetAttorneyListCasesPayload,
  generateGetIntakeQuestionsPayload,
  generatePatchUpdatesCaseDetailsPayload,
  generatePatchUpdatesCaseDetailsIccPayload,
} from 'cypress/support/utils/legalCaseControllerData';

describe('AUT-3914: Case Posting Module (CCPM)', () => {
  it('TCM-6510 - Should POST Insert Legal Case successfully', () => {
    const newLegalCase: InsertCasePayload = generateInsertCasePayload();
    const headersCase: InsertCaseHeadersPayload = generateInsertCaseHeadersPayload();
    cy.insertLegalCase(newLegalCase, headersCase);
  });

  it('TCM-6510 - Should POST Match Legal Case successfully', () => {
    const newLegalCase: MatchCasePayload = generateMatchCasePayload();
    const headersCase: MatchCaseHeadersPayload = generateMatchCaseHeadersPayload();
    cy.matchLegalCase(newLegalCase, headersCase);
  });
});

describe('AUT-3929: LM Attorney API - Login and Case Response', () => {
  it('TCM-6510 - POST Token-endpoint Attorney Login  successfully', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
});

describe('AUT-3929: LM Attorney API - Put Case Response', () => {
  it('TCM-6677 - PUT Case Response successfully', () => {
    const casePutCaseResponse: PutCaseResponsePayload = generatePutCaseResponsePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.putCaseResponse(casePutCaseResponse, headers);
  });
});

/** legal-case-controller: Legal Case Controller API Swagger documents reference
 *  https://attorney-apiqa3.legalmatch.com/swagger-ui.html#/legal-case-controller
 *
 */

describe('AUT-3929: LM Attorney API - Legal Case Controller', () => {
  it('TCM-6677 - POST Archive Case  successfully', () => {
    const postArchiveCase: PostArchiveCasePayload = generatePostArchiveCasePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.postArchiveCaseResponse(postArchiveCase, headers);
  });

  it('TCM-6677 - POST Restore Case successfully', () => {
    const postRestoreCase: PostRestoreCasePayload = generatePostRestoreCasePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.postRestoreCaseResponse(postRestoreCase, headers);
  });

  it('TCM-6677 - POST Engage Case successfully', () => {
    const postEngageCase: PostEngageCasePayload = generatePostEngageCasePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.postEngageCaseResponse(postEngageCase, headers);
  });

  it('TCM-6677 - POST Complete Case successfully', () => {
    const postCompleteCase: PostCompleteCasePayload = generatePostCompleteCasePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.postCompleteCaseResponse(postCompleteCase, headers);
  });

  it('TCM-6677 - GET gets the case details by case number successfully', () => {
    const getAttorneyCaseDetails: GetAttorneyCaseDetailsPayload =
      generateGetAttorneyCaseDetailsPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAttorneyCaseDetailsResponse(getAttorneyCaseDetails, headers);
  });

  it('TCM-6677 - GET gets the case details by case number successfully', () => {
    const getAttorneyListCases: GetAttorneyListCasesPayload = generateGetAttorneyListCasesPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAttorneyListCasesResponse(getAttorneyListCases, headers);
  });

  it('TCM-6677 - GET get Intake Questions successfully', () => {
    const getIntakeQuestions: GetIntakeQuestionsPayload = generateGetIntakeQuestionsPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getIntakeQuestionsResponse(getIntakeQuestions, headers);
  });

  it('TCM-6677 - PATCH updates the case details by case number "opened", "liked" successfully', () => {
    const patchUpdatesCaseDetails: PatchUpdatesCaseDetailsPayload =
      generatePatchUpdatesCaseDetailsPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.patchUpdatesCaseDetailsResponse(patchUpdatesCaseDetails, headers);
  });

  it('TCM-6677 - PATCH updates the case details by case number "icc" successfully', () => {
    const patchUpdatesCaseDetailsIcc: PatchUpdatesCaseDetailsIccPayload =
      generatePatchUpdatesCaseDetailsIccPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.patchUpdatesCaseDetailsIccResponse(patchUpdatesCaseDetailsIcc, headers);
  });
});
