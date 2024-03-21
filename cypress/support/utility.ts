export class CCPMEnvironment {
  getBaseUrl() {
    let envi = Cypress.env('ENV_CCPM');
    if (envi == 'test') return 'https://apitest.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa1') return 'https://apiqa1.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa2') return 'https://apiqa2.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa3') return 'https://apiqa3.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa4') return 'https://apiqa4.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa5') return 'https://apiqa5.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa6') return 'https://apiqa6.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa7') return 'https://apiqa7.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa8') return 'https://apiqa8.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa9') return 'https://apiqa9.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa10') return 'https://apiqa10.legalmatch.com/ccpm/graphql';
    else if (envi == 'qa11') return 'https://apiqa11.legalmatch.com/ccpm/graphql';
    else if (envi == 'dev0') return 'https://apidev0.legalmatch.com/ccpm/graphql';
    else if (envi == 'dev1') return 'https://apidev1.legalmatch.com/ccpm/graphql';
    else if (envi == 'aws') return 'https://api1.aws.legalmatch.com/ccpm/graphql';
  }
}

export class AttorneyEnvironment {
  getBaseUrl() {
    let envi = Cypress.env('ENV_ATTORNEY');
    if (envi == 'test') return 'https://attorney-apitest.legalmatch.com';
    else if (envi == 'qa1') return 'https://attorney-apiqa1.legalmatch.com';
    else if (envi == 'qa2') return 'https://attorney-apiqa2.legalmatch.com';
    else if (envi == 'qa3') return 'https://attorney-apiqa3.legalmatch.com';
    else if (envi == 'qa4') return 'https://attorney-apiqa4.legalmatch.com';
    else if (envi == 'qa5') return 'https://attorney-apiqa5.legalmatch.com';
    else if (envi == 'qa6') return 'https://attorney-apiqa6.legalmatch.com';
    else if (envi == 'qa7') return 'https://attorney-apiqa7.legalmatch.com';
    else if (envi == 'qa8') return 'https://attorney-apiqa8.legalmatch.com';
    else if (envi == 'qa9') return 'https://attorney-apiqa9.legalmatch.com';
    else if (envi == 'qa10') return 'https://attorney-apiqa10.legalmatch.com';
    else if (envi == 'qa11') return 'https://attorney-apiqa11.legalmatch.com';
    else if (envi == 'dev0') return 'https://attorney-apidev0.legalmatch.com';
    else if (envi == 'dev1') return 'https://attorney-apidev1.legalmatch.com';
    else if (envi == 'aws') return 'https://attorney-api1.aws.legalmatch.com';
  }
}

export class CCPMOrigin {
  getBaseUrl() {
    let envi = Cypress.env('ORIGIN');
    if (envi == 'test') return 'https://apitest.legalmatch.com';
    else if (envi == 'qa1') return 'https://apiqa1.legalmatch.com';
    else if (envi == 'qa2') return 'https://apiqa2.legalmatch.com';
    else if (envi == 'qa3') return 'https://apiqa3.legalmatch.com';
    else if (envi == 'qa4') return 'https://apiqa4.legalmatch.com';
    else if (envi == 'qa5') return 'https://apiqa5.legalmatch.com';
    else if (envi == 'qa6') return 'https://apiqa6.legalmatch.com';
    else if (envi == 'qa7') return 'https://apiqa7.legalmatch.com';
    else if (envi == 'qa8') return 'https://apiqa8.legalmatch.com';
    else if (envi == 'qa9') return 'https://apiqa9.legalmatch.com';
    else if (envi == 'qa10') return 'https://apiqa10.legalmatch.com';
    else if (envi == 'qa11') return 'https://apiqa11.legalmatch.com';
    else if (envi == 'dev0') return 'https://apidev0.legalmatch.com';
    else if (envi == 'dev1') return 'https://apidev1.legalmatch.com';
    else if (envi == 'aws') return 'https://api1.aws.legalmatch.com';
  }
}
