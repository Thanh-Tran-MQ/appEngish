const user = require('../model/user')
const userMysql = require('../model/userMysql')

const index = async (req,res) => {
    try {
        const users =  await user.find({})
        return res.status(200).json({users})
    } catch (error) {
        console.log(error)
    }

}

const newUsers =(req,res) => {
    const newUser = new user(req.body)
    try {
        userMysql.creatuser(newUser.firstName,newUser.lastName,newUser.email)
        newUser.save()
        console.log('save user successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    index,
    newUsers
};