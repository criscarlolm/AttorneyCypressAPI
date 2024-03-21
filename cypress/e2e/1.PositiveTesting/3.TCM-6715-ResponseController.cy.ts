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

import {
  PutCaseResponsePayload,
  GetCaseResponsePayload,
  PostCaseNotesPayload,
  GetCaseNotesPayload,
  PatchCaseResponsePayload,
  PostRequestRatingPayload,
} from '../../types/responseController';

import {
  generatePutCaseResponsePayload,
  generateGetCaseResponsePayload,
  generatePostCaseNotesPayload,
  generateGetCaseNotesPayload,
  generatePatchCaseResponsePayload,
  generatePostRequestRatingPayload,
} from '../../support/utils/responseControllerData';

import {
  PostArchiveCasePayload,
  PostRestoreCasePayload,
  PostEngageCasePayload,
  PostCompleteCasePayload,
} from '../../types/legalCaseController';
import {
  generatePostArchiveCasePayload,
  generatePostRestoreCasePayload,
  generatePostEngageCasePayload,
  generatePostCompleteCasePayload,
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

/** response-controller: Response Controller API Swagger documents reference
 *  https://attorney-apiqa3.legalmatch.com/swagger-ui.html#/response-controller
 *
 */

describe('AUT-3942: LM Attorney API - Response Controller', () => {
  describe('AUT-3929: LM Attorney API - Login and Case Response', () => {
    it('TCM-6510 - POST Token-endpoint Attorney Login  successfully', () => {
      const attorneyLogin: EndpointPayload = generateEndpointPayload();
      const headers: EndpointHeaders = generateEndpointHeaders();
      cy.tokenEndpoint(attorneyLogin, headers);
    });
  });
  describe('Response Controller', () => {
    it('TCM-6715 - PUT Case Response successfully', () => {
      const casePutCaseResponse: PutCaseResponsePayload = generatePutCaseResponsePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.putCaseResponse(casePutCaseResponse, headers);
    });

    it('TCM-6715 - GET Case Response successfully', () => {
      const getCaseResponse: GetCaseResponsePayload = generateGetCaseResponsePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.getCaseResponse(getCaseResponse, headers);
    });

    it('TCM-6715 - POST Case Notes successfully', () => {
      const postCaseNotes: PostCaseNotesPayload = generatePostCaseNotesPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postCaseNotes(postCaseNotes, headers);
    });

    it('TCM-6715 - GET Case Notes successfully', () => {
      const getCaseNotes: GetCaseNotesPayload = generateGetCaseNotesPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.getCaseNotes(getCaseNotes, headers);
    });

    it('TCM-6715 - PATCH Update Case Response successfully', () => {
      const patchCaseResponse: PatchCaseResponsePayload = generatePatchCaseResponsePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.patchUpdateCaseResponse(patchCaseResponse, headers);
    });

    it('TCM-6677 - POST Complete Case  successfully', () => {
      // Archieve Case
      const postArchiveCase: PostArchiveCasePayload = generatePostArchiveCasePayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postArchiveCaseResponse(postArchiveCase, headers);

      // Restore Case
      const postRestoreCase: PostRestoreCasePayload = generatePostRestoreCasePayload();
      cy.postRestoreCaseResponse(postRestoreCase, headers);

      // Engage Case
      const postEngageCase: PostEngageCasePayload = generatePostEngageCasePayload();
      cy.postEngageCaseResponse(postEngageCase, headers);

      // Complete Case
      const postCompleteCase: PostCompleteCasePayload = generatePostCompleteCasePayload();
      cy.postCompleteCaseResponse(postCompleteCase, headers);
    });

    it('TCM-6715 - POST Request Rating successfully', () => {
      const postRequestRating: PostRequestRatingPayload = generatePostRequestRatingPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postRequestRatingResponse(postRequestRating, headers);
    });
  });
});
