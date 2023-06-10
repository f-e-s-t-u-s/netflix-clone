import bcrypt from 'bcrypt';

console.log(req.body.email_address)

const value = {
    email: req.body.email_address,
    password: req.body.password
}
