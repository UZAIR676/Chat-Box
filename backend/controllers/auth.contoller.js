import bcrypt from "bcryptjs";
import User from "../models/user,model.js";
import generateTokenAndSetCookie from "../utils/generattoken.js";
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;
        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await User.findOne({ username });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilepicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        if (user){
            generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            password: newUser.password,
            gender: newUser.gender,
        });
    }
    else{
        console.log("Internal error ")
        res.send(400).json({error:"Internal Error"})
    }
    } catch (error) {
        console.log("internal error ", error);
        res.status(500).json({ error: "Internal error" });
    }
};

export const login = (req, res) => {
    console.log('signup user');
    res.send("login ")

};

export const logout = (req, res) => {
    console.log('logout user');
   
};

