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
    const attorneyPayload: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyPayload, headers);
  });
});

describe('AUT-4122: Negative Testing[Schema Validation Tests] response-controller', () => {
  describe('PUT Case Response', () => {
    it('TCM-6715 - PUT Case Response successfully', () => {
      // PUT Case Response
      const casePutCaseResponse: PutCaseResponsePayload = generatePutCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.putCaseResponse(casePutCaseResponse, caseHeaders);
    });
  });
  describe('PUT - Case Response Method', () => {
    it('TCM-6828 - 400 Bad Request (Empty Request Body Payload)', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.emptyBodyPayloadPutCaseResponse(caseHeaders);
    });

    it('TCM-6828 - 404 Case Number Not Found', () => {
      const casePutCaseResponse: PutCaseResponsePayload = generatePutCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noCaseNumberPutCaseResponse(casePutCaseResponse, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const casePutCaseResponse: PutCaseResponsePayload = generatePutCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestMethodResponse(casePutCaseResponse, caseHeaders);
    });
  });

  describe('GET - Case Response Method', () => {
    it('TCM-6828 - 404 Case Number Not Found', () => {
      const casePutCaseResponse: GetCaseResponsePayload = generateGetCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noCaseNumberGetCaseResponse(casePutCaseResponse, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const caseGetCaseResponse: GetCaseResponsePayload = generateGetCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestGetCaseResponse(caseGetCaseResponse, caseHeaders);
    });
  });

  describe('POST - Add Case Notes Method', () => {
    it('TCM-6828 - 400 Bad Request (Empty Request Body Payload) ', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();

      cy.emptyBodyPayloadCaseNotes(caseHeaders);
    });

    it('TCM-6828 - 404 Case Number Not Found', () => {
      const postCaseNotes: PostCaseNotesPayload = generatePostCaseNotesPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noResponseNumberCaseNotes(postCaseNotes, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const postCaseNotes: PostCaseNotesPayload = generatePostCaseNotesPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestCaseNotes(postCaseNotes, caseHeaders);
    });
  });

  describe('GET - Get Case Notes Method', () => {
    it('TCM-6828 - 404 Case Number Not Found', () => {
      const getCaseNotes: GetCaseNotesPayload = generateGetCaseNotesPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noResponseNumberGetCaseNotes(getCaseNotes, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const getCaseNotes: GetCaseNotesPayload = generateGetCaseNotesPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestGetCaseNotes(getCaseNotes, caseHeaders);
    });
  });

  describe('PATCH - Update Case Response Method', () => {
    it('TCM-6828 - 400 Bad Request (Empty Request Body Payload) ', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.emptyBodyPayloadPatchUpdateCase(caseHeaders);
    });

    it('TCM-6828 - 404 Case Number Not Found', () => {
      const casePatchCaseResponse: PatchCaseResponsePayload = generatePatchCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noCaseNumberPatchUpdateCase(casePatchCaseResponse, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const casePatchCaseResponse: PatchCaseResponsePayload = generatePatchCaseResponsePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestPatchUpdateCase(casePatchCaseResponse, caseHeaders);
    });
  });

  describe('POST - Request Rating Method', () => {
    it('TCM-6828 - 403 Forbidden - Cannot request rating) ', () => {
      const casePostRequestRating: PostRequestRatingPayload = generatePostRequestRatingPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.cantPostRequestRating(casePostRequestRating, caseHeaders);
    });

    it('TCM-6828 - 404 Case Number Not Found', () => {
      const casePostRequestRating: PostRequestRatingPayload = generatePostRequestRatingPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.noResponseNumberPostRequestRating(casePostRequestRating, caseHeaders);
    });

    it('TCM-6828 - 405 Invalid Request Method', () => {
      const casePostRequestRating: PostRequestRatingPayload = generatePostRequestRatingPayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestPostRequestRating(casePostRequestRating, caseHeaders);
    });
  });
});
