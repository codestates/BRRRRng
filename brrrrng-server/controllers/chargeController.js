const converter = require("xml-js");
const request = require("request");
const config = require("../config/key");

const chargeApi = (req, res) => {
  const { address } = req.body;
  const url =
    "http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList";
  const serviceKey = config.serviceKey;
  let queryParams = "?" + encodeURIComponent("ServiceKey") + `=${serviceKey}`;
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1");
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("9999");
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
