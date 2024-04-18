describe("E2E Test 1", () => {
    it("Open GoIT website", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    });
    it("Log in user 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("user888@gmail.com", "1234567890");
    });
    it("Log out user 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("user888@gmail.com", "1234567890");
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
    });
});

describe("E2E Test 2", () => {
    it("Open GoIT website", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    });
    it("Log in user 2", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("testowyqa@qa.team", "QA!automation-1");
    });
    it("Log out user 2", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("testowyqa@qa.team", "QA!automation-1");
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(8) > .next-bve2vl').click();
    });
});