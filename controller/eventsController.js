// Display all events 
const event_list = (req, res) => {
    res.send("Church list not implemented");
}


//Display details for a specific event
const event_details = (req, res) => {
    res.send("Church detail is not implemented");
}


// Handle event create on POST
const event_create_post = (req, res) => {
    res.send("Not ye implemented Event create POST")
}

// Handle church delete on POST.
const event_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Event delete POST');
};


// Handle book update on POST.
const event_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};


module.exports = {
    event_list,
    event_details,
    event_create_post,
    event_delete_post,
    event_update_post
}