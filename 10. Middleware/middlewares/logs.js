const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (id <= 10 && id >= 0) {
    console.log("Valid User...");
    next();
  } else {
    console.log("Invalid User...");
    res.send("Invaid Id!!");
  }
};

export default isValidId;
