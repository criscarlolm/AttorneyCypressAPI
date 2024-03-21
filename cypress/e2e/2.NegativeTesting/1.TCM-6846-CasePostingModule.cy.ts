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

describe('AUT-4124: Negative Testing - Case Posting Module (CCPM)', () => {
  describe('Post a case (“insertLegalCase” mutation)', () => {
    it('TCM-6846 - Post 400 Bad Request (Empty Body Payload Request)', () => {
      const headersCase: InsertCaseHeadersPayload = generateInsertCaseHeadersPayload();
      cy.emptyBodyRequestInsertLegalCase(headersCase);
    });

    it('TCM-6846 - Post 401 Unauthorized (No Headers Request Method)', () => {
      const newLegalCase: InsertCasePayload = generateInsertCasePayload();
      cy.unauthorizedInsertLegalCase(newLegalCase);
    });

    it('TCM-6846 - 403 Forbidden (Invalid Request Method)', () => {
      const newLegalCase: InsertCasePayload = generateInsertCasePayload();
      const headersCase: InsertCaseHeadersPayload = generateInsertCaseHeadersPayload();
      cy.forbiddenInsertLegalCase(newLegalCase, headersCase);
    });
  });

  describe('Match a case (“matchLegalCase” mutation)', () => {
    it('TCM-6846 - 400 Bad Request (Empty Body Payload Request)', () => {
      const headersCase: MatchCaseHeadersPayload = generateMatchCaseHeadersPayload();
      cy.emptyBodyRequestMatchLegalCase(headersCase);
    });

    it('TCM-6846 - Post 401 Unauthorized (No Headers Request Method)', () => {
      const newLegalCase: MatchCasePayload = generateMatchCasePayload();
      cy.unauthorizedMatchLegalCase(newLegalCase);
    });

    it('TCM-6846 - 403 Forbidden (Invalid Request Method)', () => {
      const newLegalCase: MatchCasePayload = generateMatchCasePayload();
      const headersCase: MatchCaseHeadersPayload = generateMatchCaseHeadersPayload();
      cy.forbiddenMatchLegalCase(newLegalCase, headersCase);
    });
  });
});
