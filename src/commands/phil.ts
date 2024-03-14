const philObj = {
  message: [
    [
      "To forget one's purpose is the commonest form of stupidity.",
      "- F. Nietzsche",
    ],
    [
      "True beauty is something that attacks, overpowers, robs and finally destroys.",
      "- Y. Mishima",
    ],
    [
      "Perfect purity is possible if you turn your life into a line of poetry written with a splash of blood.",
      "- Y. Mishima",
    ],
    [
      "As contraries are known by contraries, so is the delight of presence best known by the torments of absence.",
      "- Alcibiades",
    ],
  ],
};

export const createPhil = (): string[] => {
  const phil: string[] = [];
  const r = Math.floor(Math.random() * philObj.message.length);
  phil.push("<br>");
  philObj.message[r].forEach((ele, idx) => {
    if (idx === philObj.message[r].length - 1) {
    }
    phil.push(ele);
  });
  phil.push("<br>");
  return phil;
};
