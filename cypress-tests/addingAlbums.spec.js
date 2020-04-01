context("Admin page", () => {

    beforeEach(() => {
        cy.visit("http://localhost:4000/login");
        cy.clearCookies();
        cy.get("#username").type("balthazar");
        cy.get("#password").type("1234");
        cy.get("#post-login-form").submit();
        cy.url().should('eq', 'http://localhost:4000/admin');
    })

    it("Add 18 albums", () => {
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/Madonna/The+Immaculate+Collection').should('have.value', 'https://www.last.fm/music/Madonna/The+Immaculate+Collection');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/The+Beatles/Abbey+Road').should('have.value', 'https://www.last.fm/music/The+Beatles/Abbey+Road');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/Madonna/Celebration').should('have.value', 'https://www.last.fm/music/Madonna/Celebration');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nas/Illmatic').should('have.value', 'https://www.last.fm/music/Nas/Illmatic');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/The+xx/I+See+You').should('have.value', 'https://www.last.fm/music/The+xx/I+See+You');
        cy.get('#post-album-form').submit();
        
        cy.get('#urlLastFm').type('https://www.last.fm/music/2Pac/Me+Against+the+World').should('have.value', 'https://www.last.fm/music/2Pac/Me+Against+the+World');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nirvana/Nevermind').should('have.value', 'https://www.last.fm/music/Nirvana/Nevermind');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nirvana/Nirvana').should('have.value', 'https://www.last.fm/music/Nirvana/Nirvana');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Radiohead/In+Rainbows').should('have.value', 'https://www.last.fm/music/Radiohead/In+Rainbows');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/R.E.M./Automatic+for+the+People').should('have.value', 'https://www.last.fm/music/R.E.M./Automatic+for+the+People');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Pixies/Surfer+Rosa').should('have.value', 'https://www.last.fm/music/Pixies/Surfer+Rosa');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/The+Dandy+Warhols/...The+Dandy+Warhols+Come+Down').should('have.value', 'https://www.last.fm/music/The+Dandy+Warhols/...The+Dandy+Warhols+Come+Down');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Discovery').should('have.value', 'https://www.last.fm/music/Daft+Punk/Discovery');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Homework').should('have.value', 'https://www.last.fm/music/Daft+Punk/Homework');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Random+Access+Memories').should('have.value', 'https://www.last.fm/music/Daft+Punk/Random+Access+Memories');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Daft+Punk/Human+After+All').should('have.value', 'https://www.last.fm/music/Daft+Punk/Human+After+All');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Nas/It+Was+Written').should('have.value', 'https://www.last.fm/music/Nas/It+Was+Written');
        cy.get('#post-album-form').submit();

        cy.get('#urlLastFm').type('https://www.last.fm/music/Bryson+Tiller/T+R+A+P+S+O+U+L').should('have.value', 'https://www.last.fm/music/Bryson+Tiller/T+R+A+P+S+O+U+L');
        cy.get('#post-album-form').submit();


        // Delete the first 2 albums (cause: wrong price setting by progress to do in setPrice function)

        cy.get('#remove-admin-album').click();
        cy.get('#remove-admin-album').click();

    });

    afterEach(() => {
        cy.clearCookies();
        cy.visit('http://localhost:4000/');
    });

});