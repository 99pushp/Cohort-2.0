const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db");
const JWT_SECRET = "secret";
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

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
       
    const user = User.find({
        username,
        password
    })
    user.then(()=>{
        if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    
        res.json({
            token:token
        })}else{
            res.status(411).json({
                message:"Incorrect email and password"
            })
        }
    })

    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
   

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
  

    let courses = Course.find({});
    courses.then((response)=>{
        res.status(200).json({
            courses : response
        })
    })
});

module.exports = router;