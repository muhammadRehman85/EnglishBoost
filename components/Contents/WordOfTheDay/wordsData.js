const words = [
  {
    id: 1,
    word: "Pernicious",
    meaning: "having a harmful effect, especially in a gradual or subtle way",
    example:
      "The pernicious influence of social media on mental health is a growing concern.",
    sentence:
      "The pernicious rumors spread like wildfire, causing unnecessary panic.",
    synonyms: ["deleterious", "harmful", "noxious"],
  },
  {
    id: 2,
    word: "Ephemeral",
    meaning: "lasting for a very short time",
    example:
      "The beauty of cherry blossoms is ephemeral, lasting only a few days each spring.",
    sentence:
      "Success in showbiz is often ephemeral; today's star may be forgotten tomorrow.",
    synonyms: ["transient", "fleeting", "momentary"],
  },
  {
    id: 3,
    word: "Ubiquitous",
    meaning: "present, appearing, or found everywhere",
    example: "Smartphones have become ubiquitous in modern society.",
    sentence:
      "The ubiquitous presence of fast-food chains is a symbol of globalization.",
    synonyms: ["omnipresent", "widespread", "pervasive"],
  },
  {
    id: 4,
    word: "Idiosyncrasy",
    meaning: "a mode of behavior or way of thought peculiar to an individual",
    example:
      "One of his idiosyncrasies was the habit of humming while working.",
    sentence:
      "Her idiosyncrasy of collecting vintage postcards made her room unique.",
    synonyms: ["peculiarity", "quirk", "eccentricity"],
  },
  {
    id: 5,
    word: "Esoteric",
    meaning:
      "intended for or likely to be understood by only a small number of people with special knowledge",
    example:
      "The professor's lecture on quantum physics was esoteric, leaving most students bewildered.",
    sentence:
      "Her taste in literature was rather esoteric, delving into obscure and challenging works.",
    synonyms: ["arcane", "obscure", "abstruse"],
  },
  {
    id: 6,
    word: "Munificent",
    meaning: "more generous than is usual or necessary",
    example:
      "His munificent donation to the charity helped fund several community projects.",
    sentence:
      "The king was known for his munificent gifts to his loyal subjects.",
    synonyms: ["bountiful", "generous", "liberal"],
  },
  {
    id: 7,
    word: "Supercilious",
    meaning:
      "behaving or looking as though one thinks one is superior to others",
    example:
      "His supercilious attitude made it difficult for others to approach him.",
    sentence:
      "The supercilious expression on her face suggested arrogance and disdain.",
    synonyms: ["haughty", "arrogant", "condescending"],
  },
  {
    id: 8,
    word: "Parsimonious",
    meaning: "unwilling to spend money or use resources; stingy",
    example:
      "His parsimonious approach to household expenses meant cutting corners wherever possible.",
    sentence:
      "The parsimonious boss refused to approve any unnecessary expenditures.",
    synonyms: ["frugal", "stingy", "thrifty"],
  },
  {
    id: 9,
    word: "Sycophant",
    meaning:
      "a person who acts obsequiously towards someone important in order to gain advantage",
    example:
      "The sycophant constantly praised the CEO, hoping for a promotion.",
    sentence:
      "His reputation as a sycophant made it difficult for others to trust his motives.",
    synonyms: ["flatterer", "toady", "brown-noser"],
  },
  {
    id: 10,
    word: "Languid",
    meaning:
      "displaying or having a disinclination for physical exertion or effort; slow and relaxed",
    example: "She spent a languid afternoon by the pool, reading a book.",
    sentence: "The hot weather made everyone feel languid and lethargic.",
    synonyms: ["listless", "lethargic", "sluggish"],
  },
  {
    id: 11,
    word: "Sagacious",
    meaning:
      "having or showing keen mental discernment and good judgment; wise",
    example:
      "The sagacious old man provided invaluable advice to the community.",
    sentence:
      "Her sagacious decision-making skills earned her the trust of her colleagues.",
    synonyms: ["wise", "perceptive", "astute"],
  },

  {
    id: 12,
    word: "Mellifluous",
    meaning:
      "having a smooth, rich flow; filled with something (such as honey) that sweetens",
    example: "The mellifluous melody of the violin captivated the audience.",
    sentence:
      "His mellifluous voice made the poetry recitation a delightful experience.",
    synonyms: ["harmonious", "soothing", "musical"],
  },

  {
    id: 13,
    word: "Obstreperous",
    meaning: "noisy and difficult to control",
    example: "The obstreperous crowd disrupted the peaceful protest.",
    sentence: "Her obstreperous laughter echoed through the quiet library.",
    synonyms: ["boisterous", "rowdy", "unruly"],
  },

  {
    id: 14,
    word: "Quixotic",
    meaning: "exceedingly idealistic; unrealistic and impractical",
    example:
      "His quixotic dreams of solving world hunger seemed noble but unattainable.",
    sentence:
      "Attempting to change the entire political system overnight is a quixotic endeavor.",
    synonyms: ["idealistic", "impractical", "romantic"],
  },

  {
    id: 15,
    word: "Cacophony",
    meaning: "a harsh, discordant mixture of sounds",
    example: "The cacophony of honking horns in the city was overwhelming.",
    sentence:
      "The cacophony of voices backstage created chaos before the performance.",
    synonyms: ["dissonance", "discord", "noise"],
  },

  {
    id: 16,
    word: "Sycophantic",
    meaning: "behaving or done in an obsequious way in order to gain advantage",
    example:
      "His sycophantic gestures towards the celebrity were evident during the interview.",
    sentence:
      "She grew tired of the sycophantic colleagues who constantly sought her approval.",
    synonyms: ["fawning", "bootlicking", "adulatory"],
  },

  {
    id: 17,
    word: "Ineffable",
    meaning: "too great or extreme to be expressed or described in words",
    example:
      "The ineffable beauty of the mountain sunrise left them speechless.",
    sentence: "The ineffable joy of the moment brought tears to her eyes.",
    synonyms: ["indescribable", "unutterable", "unspeakable"],
  },

  {
    id: 18,
    word: "Recalcitrant",
    meaning:
      "having an obstinately uncooperative attitude toward authority or discipline",
    example:
      "The recalcitrant student refused to follow the teacher's instructions.",
    sentence:
      "Dealing with a recalcitrant employee can be a challenging managerial task.",
    synonyms: ["obstinate", "defiant", "unyielding"],
  },

  {
    id: 19,
    word: "Quotidian",
    meaning: "occurring every day; ordinary",
    example:
      "The quotidian routine of commuting and office work became monotonous.",
    sentence:
      "Despite the quotidian tasks, he found joy in small, everyday moments.",
    synonyms: ["daily", "routine", "mundane"],
  },

  {
    id: 20,
    word: "Desultory",
    meaning: "lacking a plan, purpose, or enthusiasm; random",
    example:
      "Her desultory attempts at studying did not yield positive results.",
    sentence:
      "The conversation drifted into desultory topics without a clear direction.",
    synonyms: ["aimless", "haphazard", "unfocused"],
  },
];

export default words;
