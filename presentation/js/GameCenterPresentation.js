const map = {" ":"_", "â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
class GameCenterPresentation {


    static list() {
        this.clearGameCenterTable();
        new CrudAPI('http://localhost:8080/games?projection=gameCenter').list().done((data) => {
            data._embedded.games.map((game) => this.addGameOnTable(game));
        });
    }

    static clearGameCenterTable() {
        $('#gamecenter tbody').empty();
    }

    static addGameOnTable(game) {
        $('#gamecenter tbody')
            .append(
                $('<tr />')
                    .append($('<td />').html(this.thumbFlag(game.home)))
                    .append($('<td />').html($('<span/>').addClass('team').html(game.home)))
                    .append($('<td />').html($('<span/>').addClass('score').html(game.homeScore)))
                    .append($('<td />').html($('<span/>').addClass('vs').html('X')))
                    .append($('<td />').html($('<span/>').addClass('score').html(game.awayScore)))
                    .append($('<td />').html($('<span/>').addClass('team').html(game.away)))
                    .append($('<td />').html(this.thumbFlag(game.away)))
            );
    }

    static thumbFlag(team) {
        let fileName    = team.replace(/[\W\[\] ]/g, function(a){ return map[a] || a });
        let flagUrl     = 'http://aimore.org/escudos/' + fileName + '.jpg';
        return $('<img />').attr('src', flagUrl);
    }



};

$(function() {
    GameCenterPresentation.list();
})