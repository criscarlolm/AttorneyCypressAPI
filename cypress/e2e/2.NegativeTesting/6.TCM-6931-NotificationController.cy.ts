/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import {
  NotificationControllerPayload,
  ReadNotificationPayload,
} from '../../types/notificationController';

import {
  generateNotificationControllerPayload,
  generateReadNotificationPayload,
} from '../../support/utils/notificationControllerData';

/** notification-controller: Notification Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/notification-controller
 *
 */

describe('AUT-4157:  Negative Testing[Schema Validation Tests] - Notification Controller', () => {
  describe('Unautorized - No authentication', () => {
    it('TCM-6931 - Streamed notification', () => {
      cy.unathorizedRequestStreamedNotification();
    });

    it('TCM-6931 - Notification Count', () => {
      cy.unautorizedNotificationCount();
    });

    it('TCM-6931 - Read the notification', () => {
      const getNotificationCountResponse: NotificationControllerPayload =
        generateNotificationControllerPayload();
      cy.unathorizedRequestReadNotification(getNotificationCountResponse);
    });

    it('TCM-6931 - Delete the notification', () => {
      const deleteNotificationResponse: ReadNotificationPayload = generateReadNotificationPayload();
      cy.unautorizedRequestDeleteNotification(deleteNotificationResponse);
    });
  });

  describe('AUT-4157: LM Attorney API - Login and Case Response', () => {
    it('TCM-6510 - POST Token-endpoint Attorney Login  successfully', () => {
      const attorneyLogin: EndpointPayload = generateEndpointPayload();
      const headers: EndpointHeaders = generateEndpointHeaders();
      cy.tokenEndpoint(attorneyLogin, headers);
    });
  });

  describe('Streamed notification', () => {
    it('TCM-6931 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidRequestStreamedNotification(headers);
    });

    it('TCM-6931 - 404 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidEndpointStreamedNotification(headers);
    });
    it('TCM-6931 - GET Get streamed notification successfully', () => {
      const getNotificationControllerResponse: NotificationControllerPayload =
        generateNotificationControllerPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.getStreamedNotification(getNotificationControllerResponse, headers);
    });
  });

  describe('Notification Count', () => {
    it('TCM-6931 - 405 Invalid Request Method', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidRequestNotificationCount(headers);
    });

    it('TCM-6931 - 404 Invalid Endpoint Request', () => {
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidEndpointNotificationCount(headers);
    });
  });

  describe('Read the notification', () => {
    it('TCM-6931 - 404 No Notification Id', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.noNotificationIdReadNotification(postReadNotificationResponse, headers);
    });
    it('TCM-6931 - 405 Invalid Request Method', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidRequestReadNotification(postReadNotificationResponse, headers);
    });
    it('TCM-6931 - 400 Invalid Endpoint Request', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidEndpointReadNotification(postReadNotificationResponse, headers);
    });
    it('TCM-6931 - POST Read the notification successfully', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.postReadNotification(postReadNotificationResponse, headers);
    });
  });

  describe('Delete the notification', () => {
    it('TCM-6931 - 404 No Notification Id', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.noNotificationIdDeleteNotification(postReadNotificationResponse, headers);
    });
    it('TCM-6931 - 405 Invalid Request Method', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidRequestDeleteNotification(postReadNotificationResponse, headers);
    });
    it('TCM-6931 - 400 Invalid Endpoint Request', () => {
      const postReadNotificationResponse: ReadNotificationPayload =
        generateReadNotificationPayload();
      const headers: EndpointToken = generateEndpointToken();
      cy.invalidEndpointDeleteNotification(postReadNotificationResponse, headers);
    });
  });
});
