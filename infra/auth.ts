import * as jwt from 'jsonwebtoken';
import Configs from './configs'

class Auth {
    validate(req, res, next) {
        var token = req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, Configs.secret, function (err, decoded) {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: '403 - Token Inválido'
                    })
                } else {
                    next();
                }
            })
        } else {
            return res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            })
        }
    }

    newToken(req, res){
        let payload = {
            iat: new Date().getSeconds(),
            exp: new Date().setMinutes(60),
            name: "Anderson Clavico",
            email: "short.acm@gmail.com"
        };

        var token = jwt.sign(payload, "short short short");
        return res.status(200).send({
            success: true,
            token: token,
            expire: payload.exp
        })
    }
}

export default new Auth();