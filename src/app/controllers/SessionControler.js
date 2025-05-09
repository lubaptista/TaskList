import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../../config/auth'


class SessionControler {
    async store (req, res) {
        const  { email, password } = req.body;

        //Verificando se esse email existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Usuário não existe. Verifique o email inserido.' });
        }

        // Verificar se a senha inserida não bate com a cadastrada no banco
        if(!(await user.checkPassword(password))){
            return res.status(401).json({ error: 'Senha incorreta.' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default  new SessionControler
