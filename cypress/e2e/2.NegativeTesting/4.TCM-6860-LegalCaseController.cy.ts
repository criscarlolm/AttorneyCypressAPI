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

describe('AUT-4121: Negative Testing[Schema Validation Tests] - Legal Case Controller', () => {
  describe('Archive Case', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.archiveEmptyPayloadRequest(headers);
    });
    it('TCM-6860 - 404 Case Number Not Found', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.archiveNoCaseNumber(headers);
    });
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.archiveInvalidRequestMethod(headers);
    });
    it('TCM-6860 - 400 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.archiveInvalidEndpointRequest(headers);
    });
    it('TCM-6860 - POST Archive Case  successfully', () => {
      const postArchiveCase: PostArchiveCasePayload = generatePostArchiveCasePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postArchiveCaseResponse(postArchiveCase, headers);
    });
  });

  describe('Restore Archive Case', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.restoreEmptyPayloadRequest(headers);
    });
    it('TCM-6860 - 404 Case Number Not Found', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.restoreNoCaseNumber(headers);
    });
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.restoreInvalidRequestMethod(headers);
    });
    it('TCM-6860 - 400 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.restoreInvalidEndpointRequest(headers);
    });
    it('TCM-6860 - POST Restore Case successfully', () => {
      const postRestoreCase: PostRestoreCasePayload = generatePostRestoreCasePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postRestoreCaseResponse(postRestoreCase, headers);
    });
  });
  describe('Engage Case', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.engageEmptyPayloadRequest(headers);
    });
    it('TCM-6860 - 404 Case Number Not Found', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.engageNoCaseNumber(headers);
    });
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.engageInvalidRequestMethod(headers);
    });
    it('TCM-6860 - 400 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.engageInvalidEndpointRequest(headers);
    });
    it('TCM-6860 - POST Engage Case successfully', () => {
      const postEngageCase: PostEngageCasePayload = generatePostEngageCasePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postEngageCaseResponse(postEngageCase, headers);
    });
  });

  describe('Complete Case', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.completeEmptyPayloadRequest(headers);
    });
    it('TCM-6860 - 404 Case Number Not Found', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.completeNoCaseNumber(headers);
    });
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.completeInvalidRequestMethod(headers);
    });
    it('TCM-6860 - 400 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.completeInvalidEndpointRequest(headers);
    });
    it('TCM-6860 - POST Complete Case successfully', () => {
      const postCompleteCase: PostCompleteCasePayload = generatePostCompleteCasePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postCompleteCaseResponse(postCompleteCase, headers);
    });
  });
  describe('Attorney Case List', () => {
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.attorneyCasesInvalidRequest(headers);
    });
    it('TCM-6860 - 404  Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.attorneyCasesInvalidEndpointRequest(headers);
    });
  });

  describe('Attorney Cases Details', () => {
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.attorneyCaseDetailsInvalidRequest(headers);
    });
    it('TCM-6860 - 404  No Case Number Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.attorneyCaseDetailsNoCaseNumber(headers);
    });
    it('TCM-6860 - 404  Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.attorneyCaseDetailsInvalidEndpointRequest(headers);
    });
  });

  describe('Intake Questions', () => {
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.intakeQuestionsInvalidRequest(headers);
    });
    it('TCM-6860 - 404  No Case Number Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.intakeQuestionsNoCaseNumber(headers);
    });
    it('TCM-6860 - 404  Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.intakeQuestionsInvalidEndpoint(headers);
    });
  });

  describe('Updates the case details by case number "opened", "liked" ', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsLikeOpenedEmptyBodyPayload(headers);
    });
    it('TCM-6860 - 405 Invalid Request Method', () => {
      const patchUpdatesCaseDetails: PatchUpdatesCaseDetailsPayload =
        generatePatchUpdatesCaseDetailsPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsLikeOpenedInvalidRequest(patchUpdatesCaseDetails, headers);
    });
    it('TCM-6860 - 404  No Case Number Request', () => {
      const patchUpdatesCaseDetails: PatchUpdatesCaseDetailsPayload =
        generatePatchUpdatesCaseDetailsPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsLikeOpenedNoCaseNumber(patchUpdatesCaseDetails, headers);
    });
    it('TCM-6860 - 404  Invalid Endpoint Request', () => {
      const patchUpdatesCaseDetails: PatchUpdatesCaseDetailsPayload =
        generatePatchUpdatesCaseDetailsPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsLikeOpenedInvalidEndpoint(patchUpdatesCaseDetails, headers);
    });
  });

  describe('Updates the case details by case number "icc" ', () => {
    it('TCM-6860 - 400 Bad Request (Empty Request Body Payload)', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsIccEmptyBodyPayload(headers);
    });

    it('TCM-6860 - 405 Invalid Request Method', () => {
      const patchUpdatesCaseDetailsIcc: PatchUpdatesCaseDetailsIccPayload =
        generatePatchUpdatesCaseDetailsIccPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsIccInvalidRequest(patchUpdatesCaseDetailsIcc, headers);
    });

    it('TCM-6860 - 404  No Case Number Request', () => {
      const patchUpdatesCaseDetailsIcc: PatchUpdatesCaseDetailsIccPayload =
        generatePatchUpdatesCaseDetailsIccPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsIccNoCaseNumber(patchUpdatesCaseDetailsIcc, headers);
    });

    it('TCM-6860 - 404  Invalid Endpoint Request', () => {
      const patchUpdatesCaseDetailsIcc: PatchUpdatesCaseDetailsIccPayload =
        generatePatchUpdatesCaseDetailsIccPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.updateDetailsIccInvalidEndpoint(patchUpdatesCaseDetailsIcc, headers);
    });
  });
});
