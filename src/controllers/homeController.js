const getHomePage = (req, res) => {
  //process data
  //call model
  res.send("Hello Long Nhat !");
};

const getABC = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getABC,
};
