const userModel =require("../models/users.model");

module.exports.indexController = async (req,res) => {
    const documents = await userModel.find({});
    res.send(documents);
}
module.exports.createUserController = async (req,res) => {
    const { username ,img, phoneNo , email , role ,bio, gender,age } = req.body;
    const newUser = new userModel({
        img : img,
        username:username,
        phoneNo: phoneNo,
        email:email,
        role: role,
        bio:bio,
        gender:gender,
        age: age,
    });
    await newUser.save();
    res.send(newUser);
}
