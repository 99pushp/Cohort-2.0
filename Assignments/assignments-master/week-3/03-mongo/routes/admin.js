//routes for the admins
const {Admin, Course} = require('../db/index')
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    //create in db
    Admin.create({
        username : username,
        password: password
    })
    .then(()=>{
        res.status(200).json({
            msg:'Admin created successfully'
        })
    })
});

router.post('/courses', adminMiddleware, (req, res,error) => {
    // Implement course creation logic

    const username = req.headers.username;
    const password = req.headers.password;

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    let newCourse = Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink
    })
    newCourse.then((response)=>{
        res.json({
            message : 'course created successfully', 
            courseId : response._id
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    let courses = Course.find({});
    courses.then((response)=>{
        res.status(200).json({
            courses : response
        })
    })

});

module.exports = router;