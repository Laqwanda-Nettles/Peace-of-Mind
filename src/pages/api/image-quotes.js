export default function handler(req, res) {
  res.status(200).json({
    quotes: [
      {
        quote:
          "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        img: "road",
      },
      {
        quote:
          "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
        author: "John Wooden",
        img: "mountain",
      },
      {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audry Hepburn",
        img: "sky",
      },
      {
        quote:
          "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        author: "Nelson Mandela",
        img: "stars",
      },
      {
        quote: "In the midst of chaos, there is also opportunity.",
        author: "Sun Tzu",
        img: "light",
      },
      {
        quote:
          "You are too concerned about what was and what will be. There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
        author: "Master Oogway",
        img: "ice",
      },
    ],
  });
}
