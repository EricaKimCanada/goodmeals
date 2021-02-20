import jwt from 'jsonwebtoken';

//key to encrypt to data to generate token
//process.env.JWT_SECRET - keep it secure file
export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email
        }, //when sign... we passed this as a information
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
};

//middle wear -> if user don't have this auth it will be error
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer oooooo
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode; //decode : information of the user
                    next(); //pass the property of user to next middle wear
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

