const axios = require("axios");

module.exports = {
  async show(req, res) {
    try {
      let { language } = req.params;
      if (language === "C") {
        language = "C#";
      }
      let objeto = {};
      const { data } = await axios.get(
        `https://api.github.com/orgs/takenet/repos?page=1&per_page=100&language=${language}&order=desc`
      );

      const result = data
        .filter((repo, index) => repo.language === language)
        .slice(0, 5)
        .map((repo, index) => {
          objeto["repo" + index] = {
            name: repo.name,
            description: repo.description,
            avatar_url: repo.owner.avatar_url,
          };
          return objeto;
        })
        .slice(0, 1);

      return res.status(200).json(result[0]);
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .send({ error: "Falha na consulta, verifique suas informações!" });
    }
  },
};
