"use client"

import { use } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@bengaluru/components/ui/button"
import Link from 'next/link'
import { getScoreInterpretation, getSpecialAchievement } from '@bengaluru/lib/interpretations'
import type { SpecialAchievements } from '@bengaluru/lib/interpretations'
import { Footer } from '@bengaluru/components/footer'

interface ResultsPageProps {
  params: Promise<{
    range: string
  }>
}

const decodeData = (encoded: string): { score: number, achievements: (keyof SpecialAchievements)[] } => {
  try {
    const decoded = JSON.parse(atob(encoded))
    return {
      score: decoded.s,
      achievements: decoded.a as (keyof SpecialAchievements)[]
    }
  } catch {
    return { score: 0, achievements: [] }
  }
}

export default function ResultsPage({ params }: ResultsPageProps) {
  const searchParams = useSearchParams()
  const resolvedParams = use(params)
  const range = parseInt(resolvedParams.range)
  const encodedData = searchParams.get('d') || ''
  const { score, achievements } = decodeData(encodedData)
  const interpretation = getScoreInterpretation(score)

  const scoreMessages = {
    0: "Guru, fresh off the Uber from airport??",
    10: "Macha, Google Maps is your best friend. Swalpa adjust maadi with the traffic",
    20: "Da, getting used to 'one tight slap' and filter kaapi life. Still says KGF is just a movie",
    30: "Fully sorted now! Knows which cafes have 'little little' power backup",
    40: "Telling everyone 'do the needful' while working from Third Wave, no?",
    50: "Simply waste expert at finding 'cool cool' startup jobs only!",
    60: "Knows all 'types types' of startup founders in HSR Layout men",
    70: "Getting 'too much' LinkedIn connections from tech people only",
    80: "Covering full full Bangalore tech scene! Every weekend some some meetup",
    90: "Telling VCs 'first first let me explain' about your next unicorn idea, eh?",
    100: "Aiyo, you're doing too much only! Time to step out of Koramangala da",
    110: "Don't show too much cock! Come to Malleshwaram, I'll pop you da"
  }

  return (
    <>
      <div className="h-screen flex flex-col">
      <div className="flex-1 bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-y-auto">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Bengaluru Purity Score
          </h1>

          <div className="text-6xl sm:text-7xl font-bold text-orange-500 mb-6">
            {score} / 110
          </div>

          <p className="text-lg sm:text-xl mb-3">
            {scoreMessages[range as keyof typeof scoreMessages]}
          </p>

          <p className="text-base sm:text-lg mb-6 text-gray-600">
            {interpretation}
          </p>

          {achievements.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Special Achievements Unlocked
              </h2>
              <ul className="space-y-1.5">
                {achievements.map((achievement, i) => (
                  <li key={i} className="text-base sm:text-lg">
                    {getSpecialAchievement(achievement)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-x-4">
            <Link href="/">
              <Button variant="outline">
                Try Again
              </Button>
            </Link>
            <Button
              onClick={() => {
                const text = `I scored ${score}/110 on the Blr Purity Test!`
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
              } }
              className="bg-[#1DA1F2] hover:bg-[#1a8cd8]"
            >
              Share on Twitter
            </Button>
         </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
  )
}