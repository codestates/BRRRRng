const converter = require("xml-js");
const request = require("request");

const chargeApi = (req, res) => {
  const { address } = req.body;
  const url =
    "http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList";
  const serviceKey =
    "3GMHWqWKJx%2BB3lWvNoDiUVWyqMlUVBJ2H9GsCW8f9nwOeQi7wE2Ka85m8kYECISttOXcYN2QtzI6RVoNFxaWuQ%3D%3D";
  let queryParams =
    "?" + encodeURIComponent("ServiceKey") + `=${serviceKey}`; /* Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /* */
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("9999"); /* */
  queryParams +=
    "&" + encodeURIComponent("addr") + "=" + encodeURIComponent(`${address}`);

  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    function (error, response, body) {
      const xmlToJson = converter.xml2json(body, { compact: true, spaces: 4 });
      res.status(200).send(xmlToJson);
    },
  );
};

module.exports = {
  chargeApi,
};
