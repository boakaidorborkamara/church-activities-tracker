// Display all user
const user_list = (req, res) => {
    res.send("User list not implemented");
}


//Display details for a specific user
const user_details = (req, res) => {
    res.send("User detail is not implemented");
}


// Handle user create on POST
const user_create_post = (req, res) => {
    res.send("Not ye implemented User create POST")
}

// Handle church delete on POST.
const user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete POST');
};


// Handle book update on POST.
const user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};


module.exports = {
    user_list,
    user_details,
    user_create_post,
    user_delete_post,
    user_update_post
}