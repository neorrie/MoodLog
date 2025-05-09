import { useState } from "react";

function JournalEntry() {
  const [journalData, setJournalData] = useState([
    {
      title: "Exploring Nature Trails",
      img: "https://placehold.co/600x400",
      description:
        "Today I went hiking through a lesser-known nature trail just outside the city. The path was lined with tall trees whose branches formed a canopy overhead, filtering sunlight into scattered beams on the ground. I spotted wildflowers blooming in clusters, and the occasional rustle in the underbrush hinted at hidden wildlife. It felt like I had stepped into another world—calm, untouched, and full of life. The air smelled fresh and earthy, and for the first time in a while, I felt completely present.",
      date: "2025-05-01",
    },
    {
      title: "Coffee Shop Reflections",
      img: "https://placehold.co/600x400",
      description:
        "This afternoon, I tucked myself into a quiet corner of a cozy coffee shop downtown. The sound of soft jazz filled the space as I sipped on a caramel latte and watched people come and go. I spent a few hours writing in my journal, reflecting on the week, my goals, and how far I’ve come. There's something about being surrounded by strangers that makes it easier to be introspective. The warm aroma of roasted beans, the clink of cups, and the hum of conversation created the perfect atmosphere to think, observe, and recharge.",
      date: "2025-05-05",
    },
    {
      title: "A Rainy Day Indoors",
      img: "https://placehold.co/600x400",
      description:
        "It rained steadily from morning till night today—a gentle, consistent drizzle that made the whole city feel slower and more peaceful. I stayed indoors, wrapped in a blanket with a cup of tea by my side, and finally began reading a novel that’s been sitting on my shelf for months. The sound of rain tapping against the windows added to the coziness, and I lost track of time completely. It was one of those rare days where doing nothing felt perfectly fine, even necessary. Sometimes, the best kind of productivity is rest.",
      date: "2025-05-08",
    },
    {
      title: "Unexpected Conversation with a Stranger",
      img: "https://placehold.co/600x400",
      description:
        "While waiting for my bus this evening, I struck up a conversation with an elderly man sitting next to me on the bench. He shared stories about his youth, his travels across Southeast Asia, and how much the city has changed over the years. What started as small talk turned into a genuinely meaningful exchange. It reminded me how much wisdom and perspective older generations carry—and how rarely we take the time to listen. I left that conversation feeling grateful, humbled, and surprisingly uplifted by the kindness of a stranger.",
      date: "2025-05-03",
    },
    {
      title: "Evening Walk Under the Stars",
      img: "https://placehold.co/600x400",
      description:
        "Tonight, I went for a slow walk just after dinner, long after the sun had set. The air was cool and crisp, and the sky was unusually clear, revealing a blanket of stars overhead. There was a quiet calm in the neighborhood—just the sound of crickets and my footsteps. As I walked, I thought about where I’m heading in life and how uncertain but exciting everything feels right now. It was one of those nights that made me feel small in the best way possible—like I'm part of something much bigger than myself.",
      date: "2025-05-07",
    },
  ]);

  return <div>something here</div>;
}

export default JournalEntry;
