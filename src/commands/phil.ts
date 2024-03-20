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
    [
      "Neither pleasure nor pain should enter as motives when one must do what must be done.",
      "- J. Evola",
    ],
    ["He who thinks great thoughts often makes great errors.", "- M.Heidegger"],
    ["Man dies constantly until the moment of his demise.", "- M.Heidegger"],
    [
      "I am the master! I stretch forth my hands, even to the skies! I lay my hands upon the stars, as on the crystal wheels of the harmonica. Now fast, now slow, as my soul wills, I turn the stars. I weace them into rainbows, harmonies. I feel immortality! I create immortality!",
      "- A.Mickiewicz",
    ],
    [
      "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
      "- F.Dostoyevsky",
    ],
    [
      "The peoples of the world do not invent their gods. They deify their victims.",
      "- R.Girard",
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
