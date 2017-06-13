const GAMES_CRUD_API = new CrudAPI('http://localhost:8080/games/');
const TEAM_CRUD_API = new CrudAPI('http://localhost:8080/teams');
class GamePresentation {

    static save(game) {
        (game.self ? GAMES_CRUD_API.edit(game.self, game) : GAMES_CRUD_API.new(game))
            .done(() => {
                Messages.success('Game saved successfully')
                this.resetForm();
                this.list();
             })
            .fail(() => Messages.error('Error on save Game, try again.'));
    }

    static resetForm() {
        $('form')[0].reset();
        $('form input:hidden').val('');
    }

    static loadGame(game) {
        this.resetForm();
        this.selectByText($('#away'), game.away);
        $('#awayScore').val(game.awayScore);
        this.selectByText($('#home'), game.home);
        $('#homeScore').val(game.homeScore);
        $('#time').val(game.time);
        $('#self').val(game._links.self.href);
    }

    static selectByText($select, text) {
        $select.find(':selected').removeAttr("selected");
        $select.find('option').filter(function () { return $(this).html() === text; }).prop('selected', 'selected');
    }

    static list() {
        this.clearGameTable();
        GAMES_CRUD_API.list('http://localhost:8080/games?projection=gameCenter').done((data) => {
            data._embedded.games.map((game) => this.addGameOnTable(game));
        });
    }

    static clearGameTable() {
        $('#list-table tbody').empty();
    }

    static addGameOnTable(game) {
        $('#list-table tbody')
            .append(
                $('<tr />')
                    .append($('<td />').html(game.time))
                    .append($('<td />').html(game.home))
                    .append($('<td />').html(game.homeScore))
                    .append($('<td />').html(game.awayScore))
                    .append($('<td />').html(game.away))
                    .append($('<td />').html(this.btnActions(game)))
            );
    }

    static btnActions(game) {
        return $('<div />')
                .append(this.btnDelete(game))
                .append(this.btnEdit(game));
    }


    static btnDelete(game) {
        return $('<a />')
                    .addClass('btn btn-danger btn-xs')
                    .html('Delete')
                    .on('click', () => {
                        GAMES_CRUD_API
                            .delete(game._links.self.href)
                            .done(() => {
                                Messages.success('Game deleted successfully.');
                                this.list();
                            })

                     });
    }

    static btnEdit(game) {
        return $('<a />')
                    .addClass('btn btn-warning btn-xs')
                    .html('Edit')
                    .on('click', () => { this.loadGame(game); });
    }

    static fillTeams(teams) {
        $('.teams').empty();
        $('.teams').append($('<option />'))
        teams.forEach((team) => {
            $('.teams').append($('<option />', { 'text': team.name, 'value': team._links.self.href }))
        });
    }

};

$(function() {
    GamePresentation.list();
    TEAM_CRUD_API.list().done((teams) => GamePresentation.fillTeams(teams._embedded.teams));

    $('form').on('submit', function(e) {
        e.preventDefault();
        let game = $(this).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
        GamePresentation.save(game);
        return false;
    })

})