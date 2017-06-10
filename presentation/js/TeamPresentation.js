 const TEAM_CRUD_API = new CrudAPI('http://localhost:8080/teams/');

class TeamPresentation {

    static save(team) {
        (team.self ? TEAM_CRUD_API.edit(team.self, team) : TEAM_CRUD_API.new(team))
            .done(() => {
                Messages.success('Team saved successfully')
                this.resetForm();
                this.list();
             })
            .fail(() => Messages.error('Error on save Team, try again.'));
    }

    static resetForm() {
        $('form')[0].reset();
    }

    static loadTeam(team) {
        this.resetForm();
        $('#name').val(team.name);
        $('#self').val(team._links.self.href);
        $('#foundation').val(team.foundation);
    }

    static list() {
        this.clearTeamTable();
        TEAM_CRUD_API.list().done((data) => {
            data._embedded.teams.map((team) => this.addTeamOnTable(team));
        });
    }

    static clearTeamTable() {
        $('#list-table tbody').empty();
    }

    static addTeamOnTable(team) {
        $('#list-table tbody')
            .append(
                $('<tr />')
                    .append($('<td />').html(team.name))
                    .append($('<td />').html(team.foundation))
                    .append($('<td />').html(this.btnActions(team)))
            );
    }

    static btnActions(team) {
        return $('<div />')
                .append(this.btnDelete(team))
                .append(this.btnEdit(team));
    }


    static btnDelete(team) {
        return $('<a />')
                    .data('teamId', team.id)
                    .addClass('btn btn-danger btn-xs')
                    .html('Delete')
                    .on('click', () => {
                        TEAM_CRUD_API
                            .delete(team._links.self.href)
                            .done(() => {
                                Messages.success('Team deleted successfully.');
                                this.list();
                            })

                     });
    }

    static btnEdit(team) {
        return $('<a />')
                    .data('team', team)
                    .addClass('btn btn-warning btn-xs')
                    .html('Edit')
                    .on('click', () => { this.loadTeam(team); });
    }

};

$(function() {
    TeamPresentation.list();

    $('form').on('submit', function(e) {
        e.preventDefault();
        let team = $(this).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
        TeamPresentation.save(team);
        return false;
    })
})