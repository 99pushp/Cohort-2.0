const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const password = req.body.password;
    const username = req.body.username;
    User.create({
        username,
        password
    })
    .then(()=>{
        res.status(200).json({
            msg:'user created successfully'
        })
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const password = req.headers.password;
    const username = req.headers.username;

    let allCourses = Course.find({})

    allCourses.then((value)=>{
        res.status(200).json({
            courses: value
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourses: new mongoose.Types.ObjectId(courseId)
        }
    })
    .then(()=>{
        res.status(200).json({
            msg  : 'course updated successfully'
        })
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router