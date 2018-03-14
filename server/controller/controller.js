const loginMe = {
    firstName: "Chris",
    lastName: "Foster",
    codeName: "ChrisDEV'r Foster",
    email: "chris.foster@devmounta.in",
    age: 100,
    city: "Allen",
    state: "Texas"

}

const logUserIn = (req, res) => {
    req.session.user = loginMe
    res.status(200).json(req.session.user)
}

const ageAdder = (req, res) => {
    const {age} = req.body
    req.session.user.age += age
    res.status(200).json(req.session.user)
}

const logout = (req, res) => {
    req.session.destroy()
    res.status(200).json(req.session)
}


module.exports= {
logUserIn,
ageAdder,
logout
}