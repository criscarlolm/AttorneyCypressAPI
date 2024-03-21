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

describe('Notification Controller', () => {
  beforeEach('AUT-3929: LM Attorney API - Login and Case Response', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
  it('TCM-6734 - GET Get streamed notification successfully', () => {
    const getNotificationControllerResponse: NotificationControllerPayload =
      generateNotificationControllerPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getStreamedNotification(getNotificationControllerResponse, headers);
  });

  it('TCM-TCM-6734 - GET Get the notification count successfully', () => {
    const getNotificationCountResponse: NotificationControllerPayload =
      generateNotificationControllerPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getNotificationCount(getNotificationCountResponse, headers);
  });
  it('TCM-TCM-6734 - POST Read the notification successfully', () => {
    const postReadNotificationResponse: ReadNotificationPayload = generateReadNotificationPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.postReadNotification(postReadNotificationResponse, headers);
  });
  it('TCM-TCM-6734 - DELETE Delete the notification successfully', () => {
    const deleteNotificationResponse: ReadNotificationPayload = generateReadNotificationPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.deleteNotification(deleteNotificationResponse, headers);
  });
});
