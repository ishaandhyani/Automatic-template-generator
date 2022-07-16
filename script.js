const { readFileSync, writeFileSync } = require("fs");
const yaml = require("js-yaml");
const { v4 } = require("uuid");

const questionObj = {
  uuid: "uuid",
  type: "MultipleChoice",
  content: "question",
  hint: "hint",
  explanation: "explanation",
  answerKeys: ["A"],
  topic: "01_data_types",
  subTopics: ["variables"],
  difficultyLevel: "Low",
  choices: [
    {
      content: "option 1",
      key: "A",
      order: 0,
    },
    {
      content: "option 2",
      key: "B",
      order: 1,
    },
    {
      content: "option 3",
      key: "C",
      order: 2,
    },
    {
      content: "option 4",
      key: "D",
      order: 3,
    },
  ],
};

let arrayOfQuestions = [];
for (let i = 0; i < 50; i++) {
  let tempObj = questionObj;
  tempObj.uuid = v4();
  arrayOfQuestions.push(JSON.parse(JSON.stringify(tempObj)));
}
//writeFileSync("emptyFile.json", JSON.stringify(arrayOfQuestions), "utf8");
//console.log(arrayOfQuestions[7].uuid);

let yamlStr = yaml.dump(arrayOfQuestions);
writeFileSync("emptyFile.yaml", yamlStr, "utf8");
