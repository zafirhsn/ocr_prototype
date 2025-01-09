const hexCodeOptions = [
  '0', '1', '2', '3', '4', '5', '6',
  'A', 'B', 'C', 'D', 'E', 'F',
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function generateRandomHexColor() {
  const numOptions = hexCodeOptions.length;
  let hex = '#';

  for(let i = 0; i < 6; i++) {
    hex += hexCodeOptions[getRandomInt(numOptions)]
  }
  return hex;
}