describe('1 - GET - httpbin return 200 without any response', () => {
    it('response should be 200', () => {
        cy.request('https://httpbin.org/').its('status').should('eq', 200);
    });
});

describe('2 - GET - httpbin return 200 with response', () => {
    it('resposne should be 200', () => {
        cy.request('https://httpbin.org/').then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    }); 
});

describe('3 - GET - Checking request duration within 300ms limit', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/',
        failOnStatusCode: false
    };

    it('duration test', () => {
        cy.request(request).then(response => {
            cy.log(response.duration)

            assert.isTrue(response.duration <= 300)
        });
    });
});

describe('4 - POST - Checking request duration within 300ms limit', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };

    it('duration test', () => {
        cy.request(request).then(response => {
            cy.log(response.duration)

            assert.isTrue(response.duration <= 300)
        });
    });
});

describe('5 - GET - httpbin response with incorrect url', () => {
    const request = {
        url: 'https://httpbin.org/get',
        failOnStatusCode: false
    };

    it('resposne should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    });
});

describe('6 - POST - httpbin response with incorrect url', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };

    it('resposne should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    });
});

describe('7 - GET - httpbin response and data', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    };

    it('response and data should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentArgValue = response.body.args.key
            const expectedArgValue = "value"

            assert.equal(expectedStatus, currentStatus);
            assert.equal(expectedArgValue, currentArgValue);

            cy.log(response.body.args);
        });
    });
});

describe('8 - POST - httpbin with Body', () => {
    const bodyRequest = {
        userName: "Marcelina Tester"
    };

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyRequest,
        failOnStatusCode: false
    };

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const responseData = response.body.json

            assert.equal(bodyRequest.userName, responseData.userName)
            assert.notStrictEqual(bodyRequest, response.body.data)
            assert.equal(expectedStatus, currentStatus);
        });
    });
});

describe('9 - GET - API headers', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/',
        headers: {
            "customHeader": "customValue"
        },
        failOnStatusCode: false
    };

    it('response and headers should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentHeaderValue = response.requestHeaders.customHeader

            assert.equal('customValue', currentHeaderValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(response.requestHeaders);
            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});

describe('10 - GET - API User Agent', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/',
        headers: {
            "User-Agent": "My-test-user-agent"
        },
        failOnStatusCode: false
    };

    it('response and user agent should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentUserAgentValue = response.requestHeaders['User-Agent']

            assert.equal('My-test-user-agent', currentUserAgentValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});

describe('11 - GET - Test API Random Data', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    };

    const requestDuration = {
        method: 'GET',
        url: 'https://httpbin.org/',
        failOnStatusCode: false
    };

    it('random data ', () => {
        for (let i = 0; i < 8; i++) {
            const randomId = getRandomInt(1000)

            const requestRandom = {
                method: 'GET',
                url: 'https://httpbin.org/get',
                failOnStatusCode: false
            };

            cy.request(requestRandom).then(response => {
                assert.equal(200, response.status);
                cy.log(response.body)
            });
        };
    });
});
