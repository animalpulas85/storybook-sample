describe('Company Info', () => {
    beforeEach(() => {
      cy.visit('/'); // ここでアプリのルートURLを設定してください。
    });
  
    it('renders the company name', () => {
      cy.get('.company-name').should('contain', 'Hello');
    });
  
    it('renders the navigation links', () => {
      cy.get('.navigation .nav-item')
        .eq(0)
        .should('contain', 'スケジュール')
        .and('have.attr', 'href', 'https://www.google.com');
  
      cy.get('.navigation .nav-item')
        .eq(1)
        .should('contain', '結果')
        .and('have.attr', 'href', 'https://www.yahoo.co.jp/');
    });
  
    it('renders the data table with correct data', () => {
      cy.get('.info-table').within(() => {
        cy.get('tr').eq(0).within(() => {
          cy.get('th').eq(0).should('contain', 'id');
          cy.get('th').eq(1).should('contain', 'name');
          cy.get('th').eq(2).should('contain', 'value');
          cy.get('th').eq(3).should('contain', 'status');
        });
  
        cy.get('tr').eq(1).within(() => {
          cy.get('td').eq(0).should('contain', '11111');
          cy.get('td').eq(1).should('contain', 'hello');
          cy.get('td').eq(2).should('contain', 'hello-test');
          cy.get('td').eq(3).should('contain', 'ok');
        });
      });
    });
  });
  