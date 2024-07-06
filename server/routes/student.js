

const router = require('express').Router();
let Student = require('../models/Student');


// Create
// http://localhost:8070/student/add
router.route('/add').post((req, res) => {
    const age = Number(req.body.age); // Convert to number. // model eke age eka define kral thiyenne number ekak widihat.e nisa request eke ena data eka convert krnwa number ekka wdihata
    const name = req.body.name;
    const gender = req.body.gender;

    // Create new student object
    const newStudent = new Student({
        name,
        age,
        gender
    });

    // Save the new student to the database
    // hadagththa object eka database ekat  pass krann oni 
    newStudent.save()
        .then(() => {
            res.json('Student Added'); // success nam front end ekat responce ekak yawnn json format eken
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});







// Read
// successs wenn puluwan fail wenn puluwn e dekam dann oni. (then, catch)
router.route('/').get((req, res) => {
    Student.find()
        .then((students) => {
            res.json(students);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error: ' + err);
        });
});





// async function ekakdi wenne, eka task ekak iwara wenn kalin thawa task ekak awoth kalin task eka background eke run kran gaman aluth task eka gana balnwa
// application eke performance wadi wenawa asynce, await function use krankota
// loku application waladi eka para backend ekat request milion ganak enn puluwan. e wage welawat godak watinwa






// Update
router.route('/update/:id').put(async (req, res) => {
    let userId = req.params.id; // request eke pramamer ekak widihat en value eka ganna 

    const { name, age, gender } = req.body;   // update krann oni data tika gannwa request eke body eken
    // request eke ena dat tika gann oni 
   // me widihat gannth puluwan, namuth eka prama destructure krala gann pluwan

   // const age = number(req.body.age); 
   // const name = req.body.name;
   // const gender = req.body.gender;
    
   // update krann oni data tika dala  object ekak hadanwa
    const updateStudent = {
        name,
        age: Number(age), // Convert to number
        gender
    };

    await Student.findByIdAndUpdate(userId, updateStudent) // useId eken user hoyagen aluth data walin userwa update kranwa
        .then(() => {
            res.status(200).send({ status: 'User Updated' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: 'Error with Updating data', error: err.message });
        });
});








// Delete
router.route('/delete/:id').delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: 'User deleted' });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: 'Error with delete user', error: err.message });
        });
});








// Get a specific user by ID
router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id;

    await Student.findById(userId)
        .then((user) => {
            res.status(200).send({ status: 'User fetched', user });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: 'Error with get user', error: err.message });
        });
});



module.exports = router;