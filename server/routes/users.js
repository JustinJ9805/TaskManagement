import express from 'express'
const router = express.Router();
import User from '../models/users.js'

router.get('/', (req,res) => {
    res.send({data: 'go one level deeper for endpoints'})
})

router.get('/names', async(req,res) => {

    console.log('request received')
    try{
        const users = await User.find();
        //console.log(users);
        const names = users.map(user => user.name).join(' ');
        res.send(names);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


export default router;