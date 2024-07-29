let raceNumber = Math.floor(Math.random() * 1000);

var registerEarly = false;

const runnersAge = 18;

if (runnersAge >= 18 && registerEarly) {
  raceNumber += 1000;
}

if (runnersAge >= 18 && registerEarly) {
  console.log(
    `You are over 18, and registered early, You will race at 9:30 a.m. Your race number is ${raceNumber}`
  );
} else if (runnersAge >= 18 && !registerEarly) {
  console.log(
    `You are over 18 but did not register early, You will race at 11:00 a.m. Your race number is ${raceNumber}`
  );
} else if (runnersAge <= 17) {
  console.log(
    `Youth registrants run at 12:30 p.m (regardless of registation times) Your race numger is ${raceNumber}`
  );
}
