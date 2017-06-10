Messages = {
    success: function(msg) {
        $('#success').html(msg).show().fadeOut(2000);
    },

    error: function(msg) {
        $('#error').show().html(msg).fadeOut(2000);
    }
}