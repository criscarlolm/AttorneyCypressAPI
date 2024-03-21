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
