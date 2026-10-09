const userController = (req ,res) => {
    const data = {
        userName: "Jon Snow",
        id: 1
    };

    res.render("index", data)
}

export { userController };