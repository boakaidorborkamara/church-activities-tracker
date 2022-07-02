// Display all attendance 
const attendance_list = (req, res) => {
    res.send("Attendance list not implemented");
}


//Display details for a specific attendance
const attendance_details = (req, res) => {
    res.send("Attendance detail is not implemented");
}


// Handle attendance create on POST
const attendance_create_post = (req, res) => {
    res.send("Not ye implemented Attendance create POST")
}

// Handle church delete on POST.
const attendance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Attendance delete POST');
};


// Handle book update on POST.
const attendance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};


module.exports = {
    attendance_list,
    attendance_details,
    attendance_create_post,
    attendance_delete_post,
    attendance_update_post
}