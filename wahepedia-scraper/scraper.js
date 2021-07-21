const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

function scrapePhaseData(html) {
  const $ = cheerio.load(html);
  const phaseRaw = $('div[class*="DiagramBox1"]');

  const phaseData = [];

  phaseRaw.each(function () {
    const name = $(this).children("div").text();

    const stratagems = [];

    $(this)
      .children("p")
      .each(function () {
        stratagems.push(
          $(this)
            .children("span")
            .children()
            .map(function () {
              return $(this).text();
            })
            .get()
            .join(" ")
        );
      });

    phaseData.push({
      name: name,
      stratagems: stratagems,
    });
  });

  return phaseData;
}

function scrapeStratagemData(html) {
  const $ = cheerio.load(html);
  const stratDiv = $('a[name="Stratagems"]').next().next().next();
  const stratsRaw = stratDiv.children();

  const stratagemData = [];

  stratsRaw.each(function (index) {
    const info = $(this)
      .children(".stratName_9k, .stratBattleTactic")
      .children();
    const name = info.eq(0).text();
    const cp = info.eq(1).text();

    const metaData = $(this).children(".stratFaction_CS").text().split("–");
    const source = metaData[0].trim();
    const type = metaData[1].trim();

    const lore = $(this).children(".ShowFluff, .stratLegend2").text();
    const impact = $(this).children(".stratText_CS").contents().unwrap().text();

    stratagemData.push({
      id: `s${index}`,
      name: name,
      cp: cp,
      source: source,
      type: type,
      description: {
        lore: lore,
        impact: impact,
      },
    });
  });

  return stratagemData;
}

async function main() {
  const response = await axios(
    // "https://wahapedia.ru/wh40k9ed/factions/space-marines/blood-angels"
    "https://wahapedia.ru/wh40k9ed/factions/necrons/"
  );

  const html = response.data;

  const stratagemData = await scrapeStratagemData(html);
  const phaseData = await scrapePhaseData(html);

  const data = stratagemData.map((stratagem) => {
    return {
      phase: phaseData.reduce((phases, currentPhase) => {
        if (currentPhase.stratagems.includes(stratagem.name)) {
          phases.push(currentPhase.name);
        }

        return phases;
      }, []),
      ...stratagem,
    };
  });

  fs.writeFile(
    "./Stratagems/Necrons.json",
    JSON.stringify(data),
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    }
  );
}

try {
  main();
} catch (error) {
  console.log(error.message);
}
