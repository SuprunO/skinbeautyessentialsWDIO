module.exports = {
  //Example: AutoFramework_057602943343303625@webdriveruni.com
  generateRandomEmailAddress: function() {
    let emailAddress =
      "TestEmail_" +
      Math.random()
        .toString()
        .replace("0.", "") +
      "@gmail.com";
    return emailAddress;
  },

  //Example: d7913n4vixuutisf9eopza
  generateRandomString: function() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }
};

