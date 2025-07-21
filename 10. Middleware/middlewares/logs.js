const isValidId = (req, res, next) => {
  console.log("Name = Manoharsinh");
  console.log("Age = 21");
  next();
};

export default isValidId;
