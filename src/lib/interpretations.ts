interface ScoreInterpretations {
  [range: string]: string
}

interface SpecialAchievements {
  lived_all_areas: string
  coffee_expert: string
  startup_survivor: string
  traffic_master: string
  meetup_enthusiast: string
}

interface Interpretations {
  score_interpretations: ScoreInterpretations
  special_achievements: SpecialAchievements
}

export const interpretations: Interpretations = {
  score_interpretations: {
    "0-10": "Freshly landed in Namma Bengaluru! You probably still call it 'Bangalore' and haven't experienced a proper traffic jam yet.",
    "11-20": "Beginner Bangalorean: You've discovered filter coffee but still haven't mastered the art of traffic excuses.",
    "21-30": "Rising Techie: You know the difference between HSR and Koramangala startups, and have strong opinions about the best dosa place.",
    "31-40": "Intermediate Bengaluru Dev: You've survived at least one house hunting season and know the best coffee shops for WiFi.",
    "41-50": "Seasoned Startup Employee: You've memorized all WeWork locations and have strong opinions about which area has the worst traffic.",
    "51-60": "Professional Bangalorean: You've mastered the art of using traffic as an excuse and know exactly when to leave for airport.",
    "61-70": "Bangalore Tech Veteran: You've been through multiple startup pivots and have a favorite filter coffee place in every tech hub.",
    "71-80": "Elite Bengaluru Techie: You've lived in all the startup hubs and have strong opinions about every co-working space.",
    "81-90": "Bangalore Tech Guru: You're probably running a startup or have had multiple failed ones. You judge people by their choice of coffee place.",
    "91-100": "Peak Bengaluru Achievement Unlocked: You're practically a local landmark. You probably have a viral #PeakBengaluru tweet and give advice about house hunting on r/bangalore."
  },
  special_achievements: {
    lived_all_areas: "Triangle Master: Achieved the HSR-Koramangala-Indiranagar trifecta!",
    coffee_expert: "Coffee Connoisseur: Worked from every major coffee chain in Bangalore",
    startup_survivor: "Startup Warrior: Been through the complete startup lifecycle multiple times",
    traffic_master: "Traffic Ninja: Mastered all possible traffic excuses and shortcuts",
    meetup_enthusiast: "Community Pioneer: Attended every major tech meetup in the city"
  }
} as const

export function getScoreInterpretation(score: number): string {
  const ranges = Object.keys(interpretations.score_interpretations)
  
  for (const range of ranges) {
    const [min, max] = range.split('-').map(Number)
    if (score >= min && score <= max) 
      return interpretations.score_interpretations[range]
  }
  
  return interpretations.score_interpretations["0-10"]
}

export function getSpecialAchievement(key: keyof SpecialAchievements): string {
  return interpretations.special_achievements[key]
}