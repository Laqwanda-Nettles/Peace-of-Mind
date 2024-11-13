// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "11 Healthy Ways to Handle Life's Stressors",
      description:
        "When stress becomes unmanageable, try these evidence-based tools to tackle it.",
      tags: ["Exercise and Fitness", "Stress", "Sport and Rehabilitaion"],
      url: "https://www.apa.org/topics/stress/tips",
      img: "https://www.apa.org/images/tile-stress-tips_tcm7-264814.jpg",
    },
    {
      title:
        "How much is too much social media use: A Q&A with Mitch Prinstein, PhD",
      description:
        "APA's chief science officer provides several recommendations on how to help teens develop social media literacy skills.",
      tags: [
        "Parenting",
        "Journalism and Facts",
        "Social Media and Internet",
        "Teens",
      ],
      url: "https://www.apa.org/topics/social-media-internet/social-media-literacy-teens",
      img: "https://www.apa.org/images/tile-social-media-literacy_tcm7-316454.jpg",
    },
    {
      title: "How to cope with traumatic stress",
      description:
        "Psychologists recommend people lean on loved ones, prioritize self-care, and be patient with themselves to help manage the stressful effects of trauma.",
      tags: ["PTSD", "Stress", "Trauma"],
      url: "https://www.apa.org/topics/trauma/stress",
      img: "https://www.apa.org/images/article-traumatic-stress_tcm7-286598.png",
    },
  ]);
}
