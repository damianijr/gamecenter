
CrudAPI = (function() {
    function CrudAPI(url) {
        this.url = url;
    }


    CrudAPI.prototype.list = function(url) {
        return $.get(url || this.url);
    }

    CrudAPI.prototype.new = function(model) {
        return $.ajax({
            url: this.url,
            type: 'POST',
            data: JSON.stringify(model),
            contentType:"application/json; charset=utf-8",
        });
    }

    CrudAPI.prototype.edit = function(self, model) {
        return $.ajax({
            url: self,
            type: 'PUT',
            data: JSON.stringify(model),
            contentType:"application/json; charset=utf-8",
        });
    }

    CrudAPI.prototype.delete = function(self) {
        return $.ajax({
            url: self,
            type: 'DELETE'
        });
    }

    return CrudAPI;
})();