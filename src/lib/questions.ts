interface BangaloreTechBingo {
  questions: readonly string[]
}

export const bingoQuestions: BangaloreTechBingo = {
  questions: [
    "Applied to a job at Microsoft/Amazon/Google in their Bengaluru office",
    "Been asked 'which IIT/NIT are you from?'",
    "Said 'I'm from tier 2 college but...'",
    "Attended a Bengaluru Open Coffee Club meetup",
    "Attended HasGeek/JSFoo conference",
    "Worked late at Third Wave Coffee",
    "Worked from Matteo Coffee",
    "Had filter coffee at Airlines Hotel",
    "Had masala dosa at CTR",
    "Complained about Bengaluru traffic in a standup",
    "Missed a meeting because of traffic",
    "Used traffic as an excuse when actually WFH",
    "Lived in HSR Layout",
    "Lived in Koramangala",
    "Lived in Indiranagar",
    "Changed 3+ houses in 2 years",
    "Paid 6 months rent as advance",
    "Got rejected by a house owner for being 'bachelor'",
    "Attended a pitch meeting at WeWork EGL",
    "Co-worked from BHIVE",
    "Worked from Starbucks Indiranagar 100 ft road",
    "Met a VC at Social",
    "Pitched to investors at VR Bengaluru",
    "Attended an event at Microsoft Reactor",
    "Been to NASSCOM 10000 Startups warehouse",
    "Attended Construkt Festival",
    "Been to startup events at CoWrks",
    "Attended AWS Community Day",
    "Got connection requests from recruiting agencies on LinkedIn",
    "Added 'Building in stealth' to LinkedIn bio",
    "Changed jobs for less than 30% hike",
    "Changed jobs for more than 100% hike",
    "Worked at a startup with less than 10 people",
    "Had a failed startup",
    "Pivoted your startup twice",
    "Been featured on YourStory",
    "Attended Startup Saturday",
    "Used 'Jugaad' in a professional context",
    "Told someone you're building 'X of India'",
    "Called your startup 'Uber for X'",
    "Used Metro to avoid traffic",
    "Bought a Royal Enfield after first salary",
    "Owned a MacBook but used Windows on it",
    "Used Dunzo more than 10 times a week",
    "Subscribed to FreshMenu",
    "Had team meetings at Truffles",
    "Attended standup at Chai Point",
    "Had midnight coffee at Empire",
    "Worked from Church Street Social",
    "Been to Microsoft Developer Conference",
    "Attended Google DevFest",
    "Used BMTC bus timing as an excuse",
    "Lived in a PG with 'strict rules'",
    "Shared a flat with 4+ techies/non-techies",
    "Changed house because no IT company cab pickup",
    "Bought furniture from second hand shop",
    "Used second hand office chairs at startup",
    "Had team lunch at MTR",
    "Been to TiE Bengaluru events",
    "Attended Unpluggd conference",
    "Used 'jugaad' for office infrastructure",
    "Called Koramangala 'India's Silicon Valley'",
    "Used #PeakBengaluru in a tweet",
    "Posted about Bengaluru weather on social media",
    "Compared Bengaluru & Hyderabad tech scenes",
    "Said 'Namma Bengaluru' in a presentation",
    "Used Rapido during surge pricing",
    "Had meetings at Chaayos",
    "Used OYO for office meetings",
    "Attended Reddit Bengaluru meetup",
    "Posted on r/bangalore about house hunting",
    "Asked for startup advice on r/bangalore",
    "Complained about broker fees on social media",
    "Used 'proximity to tech park' in house search",
    "Changed house due to bad internet",
    "Worked from Dialogues Cafe",
    "Had investor meeting at Flying Squirrel",
    "Used WeWork day pass for investor meeting",
    "Attended Python Bengaluru meetup",
    "Been to Dell/IBM open house",
    "Participated in Microsoft Imagine Cup",
    "Attended midnight hackathon",
    "Used Swiggy/Zomato 5+ times a week",
    "Had team celebration at Toit",
    "Attended Angular Bengaluru meetup",
    "Been to SAP Labs open day",
    "Used Uber Auto for office commute",
    "Had Meghana Biryani for team lunch",
    "Worked from Cafe Coffee Day",
    "Used Quikr/OLX for office furniture",
    "Attended AI/ML Bengaluru meetup",
    "Been to Intel India events",
    "Used Metro for client meeting to save time",
    "Had filter coffee during standup",
    "Worked from Barista",
    "Used WhatsApp for work communication",
    "Had team outing at Nandi Hills",
    "Used BLR airport lounge for work",
    "Attended Startup Weekend Bengaluru",
    "Been to Texas Instruments tech talks",
    "Used co-working space monthly pass",
    "Had investor meeting at UB City",
    "Worked from Starbucks Phoenix Marketcity",
    "Used LinkedIn local Bengaluru events",
    "Attended blockchain meetup",
    "Had team meeting at Infinitea",
    "Used Twitter spaces for tech discussions",
    "Called 'Mafia' on someone who worked at all FAANG companies in Bengaluru",
    "Used 'Bengaluru weather' as an excuse to WFH during monsoon",
    "Attended a Twitter meetup just for the free t-shirt"
  ]
} as const

export const questions = bingoQuestions.questions

export function getRandomQuestion(): string {
  return questions[Math.floor(Math.random() * questions.length)]
}