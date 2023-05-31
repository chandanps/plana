# PlanA Assignment

* UI Tests - > Cypress
* API Tests - > pactumjs

## Getting Started

* Prerequisites 
```
Make sure below mentioned are installed

[nodejs](https://nodejs.org/en/)
[pnpm](https://pnpm.io/installation)
```

* I have used url directly in test but it can be specified in cypress config file as well like below
```
-- cypress.config.ts

e2e: {
baseUrl: "https://demoqa.com"
}

-- spec file

cy.visit('/books');
```
* On first clone, execute below command
Run commands on root folder
```
pnpm install
```
* To run UI tests 
```
pnpm cypress open
```
* To run API Tests
* default timeout is set to 50000ms because of slow api respose
```
pnpm api-tests
```
