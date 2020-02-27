const fs = require("fs");

exports.postStart = () => {
  console.log("Welcome to the Test Exercise");
};

exports.preFinish = () => {
  if (!fs.existsSync("./check.json")) {
    throw new Error("Please create a check.json file to finish the exercise!");
  } else {
    console.log("You did it!");
  }
};
