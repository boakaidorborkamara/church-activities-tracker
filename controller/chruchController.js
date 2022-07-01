//Display all books
const church_list = (req, res) => {
    res.send("Not yet implemented.")
}


//Display detail page for a specific book
const church_detail = (req, res) => {
    res.send("Not yet implemented" + req.params.id);
}

// Handle church create on POST
const church_create_post = (req, res) => {
    res.send("Not ye implemented Book create POST")
}

// Handle church delete on POST.
const church_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Church delete POST');
};


// Handle book update on POST.
const church_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};



module.exports = {
    church_list,
    church_detail,
    church_create_post,
    church_delete_post,
    church_update_post
}