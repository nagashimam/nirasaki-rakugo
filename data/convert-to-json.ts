const csvFilePath = "data/events.csv";
const csv = require("csvtojson");
const fs = require("fs");

const convert = async () => {
	for (const sheet of ["events", "members", "performances"]) {
		const jsonArray = await csv().fromFile(`data/${sheet}.csv`);
		const fileContent = `export const ${sheet.toUpperCase()} = ${JSON.stringify(jsonArray)};`;
		fs.writeFileSync(`data/${sheet}.ts`, fileContent);
	}
};

convert();
