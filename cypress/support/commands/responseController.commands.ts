import { EndpointToken } from '../../types/tokenEndpoint';
import {
  PutCaseResponsePayload,
  GetCaseResponsePayload,
  PostCaseNotesPayload,
  GetCaseNotesPayload,
  PatchCaseResponsePayload,
  PostRequestRatingPayload,
} from './../../types/responseController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/************ Positive Testing - Schema Validation *************************/
const putCaseResponse = (
  caseResponse: PutCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PutCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'PUT',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('responseNumber', response.body.responseNumber);
      cy.log(Cypress.env('responseNumber'));
    });
};

const getCaseResponse = (
  caseResponse: GetCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: GetCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postCaseNotes = (
  caseNotesRequest: PostCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    notesResponse: PostCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/case-notes/${responseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getCaseNotes = (
  caseNotesRequest: GetCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    notesResponse: GetCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/case-notes/${responseNumber}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const patchUpdateCaseResponse = (
  caseResponseRequest: PatchCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponseRequest: PatchCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: caseResponseRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const postRequestRatingResponse = (
  requestRatingRequest: PostRequestRatingPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    requestRatingRequest: PostRequestRatingPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/request-rating/${responseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: requestRatingRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/************ Negative Testing - Schema Validation *************************/

/* PUT Method -  Empty Body Payload Request */
const emptyBodyPayloadPutCaseResponse = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'PUT',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* PUT Method -  No Case Number Request */
const noCaseNumberPutCaseResponse = (
  caseResponse: PutCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PutCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/case-response/';
  return cy
    .request({
      method: 'PUT',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.eq('Not Found');
      expect(response.body.message).to.eq('No message available');
    });
};

/* PUT Method - Invalid Request Method */
const invalidRequestMethodResponse = (
  caseResponse: PutCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PutCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* GET Method -  No Case Number Request */
const noCaseNumberGetCaseResponse = (
  caseResponse: PutCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PutCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/case-response/';
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.eq('Not Found');
      expect(response.body.message).to.eq('No message available');
    });
};

/* GET Method - Invalid Request Method */
const invalidRequestGetCaseResponse = (
  caseResponse: PutCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponse: PutCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* POST Method - Add Case Notes (Empty Body Payload Request) */
const emptyBodyPayloadCaseNotes = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/case-notes/${responseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* POST Method - No Response Number Request) */
const noResponseNumberCaseNotes = (
  caseNotesRequest: PostCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    notesResponse: PostCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/case-notes/';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* POST Method - Invalid Request Method */
const invalidRequestCaseNotes = (
  caseNotesRequest: PostCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseNotesRequest: PostCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/case-notes/${responseNumber}`;
  return cy
    .request({
      method: 'PUT',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* GET Method Case Notes -  No Response Number Request */
const noResponseNumberGetCaseNotes = (
  caseNotesRequest: GetCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    notesResponse: GetCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/case-notes/';
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* GET Method Case Notes - Invalid Request Method */

const invalidRequestGetCaseNotes = (
  caseNotesRequest: GetCaseNotesPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    notesResponse: GetCaseNotesPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/case-notes/${responseNumber}`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseNotesRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* PATCH Method - Update Case Response (Empty Body Payload Request) */

const emptyBodyPayloadPatchUpdateCase = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* PATCH Method - Update Case Response (No Case Number Request) */

const noCaseNumberPatchUpdateCase = (
  caseResponseRequest: PatchCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponseRequest: PatchCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/case-response/';
  return cy
    .request({
      method: 'PATCH',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponseRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* PATCH Method - Update Case Response (Invalid Request Method) */

const invalidRequestPatchUpdateCase = (
  caseResponseRequest: PatchCaseResponsePayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseResponseRequest: PatchCaseResponsePayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const caseNumber = Cypress.env('caseNumber');
  const endPointValue = `/attorney/case-response/${caseNumber}`;
  return cy
    .request({
      method: 'DELETE',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: caseResponseRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* POST Method - Request Rating (Cannot Request Rating) */

const cantPostRequestRating = (
  requestRatingRequest: PostRequestRatingPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    requestRatingRequest: PostRequestRatingPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/request-rating/${responseNumber}`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: requestRatingRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(403);
    });
};

/* POST Method - Request Rating (No Response Number Request) */

const noResponseNumberPostRequestRating = (
  requestRatingRequest: PostRequestRatingPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    requestRatingRequest: PostRequestRatingPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = '/attorney/request-rating/';
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: requestRatingRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* POST Method - Request Rating (Invalid Request Method) */

const invalidRequestPostRequestRating = (
  requestRatingRequest: PostRequestRatingPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    requestRatingRequest: PostRequestRatingPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const responseNumber = Cypress.env('responseNumber');
  const endPointValue = `/attorney/request-rating/${responseNumber}`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: requestRatingRequest,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

// Positive Test Commands
Cypress.Commands.add('putCaseResponse', putCaseResponse);
Cypress.Commands.add('getCaseResponse', getCaseResponse);
Cypress.Commands.add('postCaseNotes', postCaseNotes);
Cypress.Commands.add('getCaseNotes', getCaseNotes);
Cypress.Commands.add('patchUpdateCaseResponse', patchUpdateCaseResponse);
Cypress.Commands.add('postRequestRatingResponse', postRequestRatingResponse);

// Negative Test Commands
Cypress.Commands.add('emptyBodyPayloadPutCaseResponse', emptyBodyPayloadPutCaseResponse);
Cypress.Commands.add('noCaseNumberPutCaseResponse', noCaseNumberPutCaseResponse);
Cypress.Commands.add('invalidRequestMethodResponse', invalidRequestMethodResponse);
Cypress.Commands.add('noCaseNumberGetCaseResponse', noCaseNumberGetCaseResponse);
Cypress.Commands.add('invalidRequestGetCaseResponse', invalidRequestGetCaseResponse);
Cypress.Commands.add('emptyBodyPayloadCaseNotes', emptyBodyPayloadCaseNotes);
Cypress.Commands.add('noResponseNumberCaseNotes', noResponseNumberCaseNotes);
Cypress.Commands.add('invalidRequestCaseNotes', invalidRequestCaseNotes);
Cypress.Commands.add('noResponseNumberGetCaseNotes', noResponseNumberGetCaseNotes);
Cypress.Commands.add('invalidRequestGetCaseNotes', invalidRequestGetCaseNotes);
Cypress.Commands.add('emptyBodyPayloadPatchUpdateCase', emptyBodyPayloadPatchUpdateCase);
Cypress.Commands.add('noCaseNumberPatchUpdateCase', noCaseNumberPatchUpdateCase);
Cypress.Commands.add('invalidRequestPatchUpdateCase', invalidRequestPatchUpdateCase);
Cypress.Commands.add('cantPostRequestRating', cantPostRequestRating);
Cypress.Commands.add('noResponseNumberPostRequestRating', noResponseNumberPostRequestRating);
Cypress.Commands.add('invalidRequestPostRequestRating', invalidRequestPostRequestRating);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Create a new Legal Case in the API.
       * @param {PutCaseResponsePayload} putCaseResponse - The putCaseResponse information to case response
       * @param {GetCaseResponsePayload} getCaseResponse - The getCaseResponse information to get Case Response
       * @param {PostCaseNotesPayload} postCaseNotes - The postCaseNotes information to add Case Notes
       * @param {GetCaseNotesPayload} getCaseNotes - The postCaseNotes information to get Case Notes
       * @param {PatchCaseResponsePayload} patchUpdateCaseResponse - The patchUpdateCaseResponse information to update Case Response
       * @param {PostRequestRatingPayload} postRequestRatingResponse - The postRequestRatingResponse information to request rating
       * @param {emptyBodyPayloadPutCaseResponse} emptyBodyPayloadPutCaseResponse - The negativePutCaseResponse empty body payload request negative test schema validation
       * @param {noCaseNumberPutCaseResponse} noCaseNumberPutCaseResponse - The negativePutCaseResponse no case number negative test schema validation
       * @param {invalidRequestMethodResponse} invalidRequestMethodResponse - The invalidRequestMethod method not allowed negative test schema validation
       * @param {noCaseNumberGetCaseResponse} noCaseNumberGetCaseResponse - The noCaseNumberGetCaseResponse no case number negative test schema validation
       * @param {invalidRequestGetCaseResponse} invalidRequestGetCaseResponse - The invalidRequestGetCaseResponse method not allowed negative test schema validation
       * @param {emptyBodyPayloadCaseNotes} emptyBodyPayloadCaseNotes - The emptyBodyPayloadCaseNotes empty body payload request negative test schema validation
       * @param {noResponseNumberCaseNotes} noResponseNumberCaseNotes - The noResponseNumberCaseNotes no response number negative test schema validation
       * @param {invalidRequestCaseNotes} invalidRequestCaseNotes - The invalidRequestCaseNotes method not allowed negative test schema validation
       * @param {noResponseNumberGetCaseNotes} noResponseNumberGetCaseNotes - The noResponseNumberGetCaseNotes no response number negative test schema validation
       * @param {invalidRequestGetCaseNotes} invalidRequestGetCaseNotes - The invalidRequestGetCaseNotes method not allowed negative test schema validation
       * @param {emptyBodyPayloadPatchUpdateCase} emptyBodyPayloadPatchUpdateCase - The emptyBodyPayloadPatchUpdateCase empty body payload request negative test schema validation
       * @param {noCaseNumberPatchUpdateCase} noCaseNumberPatchUpdateCase - The noCaseNumberPatchUpdateCase no case number negative test schema validation
       * @param {invalidRequestPatchUpdateCase} invalidRequestPatchUpdateCase - The invalidRequestPatchUpdateCase method not allowed negative test schema validation
       * @param {cantPostRequestRating} cantPostRequestRating - The cantPostRequestRating "error": "Forbidden", "message": "Cannot request rating", negative test schema validation
       * @param {noResponseNumberPostRequestRating} noResponseNumberPostRequestRating - The noResponseNumberPostRequestRating no response number negative test schema validation
       * @param {invalidRequestPostRequestRating} invalidRequestPostRequestRating - The invalidRequestPostRequestRating method not allowed negative test schema validation
       *
       *
       *
       */
      putCaseResponse: typeof putCaseResponse;
      getCaseResponse: typeof getCaseResponse;
      postCaseNotes: typeof postCaseNotes;
      getCaseNotes: typeof getCaseNotes;
      patchUpdateCaseResponse: typeof patchUpdateCaseResponse;
      postRequestRatingResponse: typeof postRequestRatingResponse;
      emptyBodyPayloadPutCaseResponse: typeof emptyBodyPayloadPutCaseResponse;
      noCaseNumberPutCaseResponse: typeof noCaseNumberPutCaseResponse;
      invalidRequestMethodResponse: typeof invalidRequestMethodResponse;
      noCaseNumberGetCaseResponse: typeof noCaseNumberGetCaseResponse;
      invalidRequestGetCaseResponse: typeof invalidRequestGetCaseResponse;
      emptyBodyPayloadCaseNotes: typeof emptyBodyPayloadCaseNotes;
      noResponseNumberCaseNotes: typeof noResponseNumberCaseNotes;
      invalidRequestCaseNotes: typeof invalidRequestCaseNotes;
      noResponseNumberGetCaseNotes: typeof noResponseNumberGetCaseNotes;
      invalidRequestGetCaseNotes: typeof invalidRequestGetCaseNotes;
      emptyBodyPayloadPatchUpdateCase: typeof emptyBodyPayloadPatchUpdateCase;
      noCaseNumberPatchUpdateCase: typeof noCaseNumberPatchUpdateCase;
      invalidRequestPatchUpdateCase: typeof invalidRequestPatchUpdateCase;
      cantPostRequestRating: typeof cantPostRequestRating;
      noResponseNumberPostRequestRating: typeof noResponseNumberPostRequestRating;
      invalidRequestPostRequestRating: typeof invalidRequestPostRequestRating;
    }
  }
}

export {};
