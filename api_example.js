$.ajax({
    url:'https://api.github.com/repos/baalx/new-repos',
    success: function(response) {
        console.log(response)
    }
})