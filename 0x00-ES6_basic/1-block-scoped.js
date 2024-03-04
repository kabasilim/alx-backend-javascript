export default function taskFirst() {
  const firstTask = 'I prefer const when I can.';
  return firstTask;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

