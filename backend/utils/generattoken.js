import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.jwt_screat,{
        expiresin:"30 d",
    })
    res.cookie("jwt",token,{
        maxAge: 30 * 24* 60* 1000,
        httponly : true,  //prevent the access of xss
        samesite:"strict"
    })
}
export default generateTokenAndSetCookie;