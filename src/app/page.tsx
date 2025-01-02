"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox } from "@bengaluru/components/ui/checkbox"
import { Button } from "@bengaluru/components/ui/button"
import { Card, CardContent } from "@bengaluru/components/ui/card"
import { questions } from '@bengaluru/lib/questions'
import { Footer } from '@bengaluru/components/footer'

type AchievementType = 'lived_all_areas' | 'coffee_expert' | 'startup_survivor' | 'traffic_master' | 'meetup_enthusiast'

export default function PurityTest() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set())
  const router = useRouter()

  const handleCheckboxChange = (questionIndex: number) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(questionIndex)) {
      newSelected.delete(questionIndex)
    } else {
      newSelected.add(questionIndex)
    }
    setSelectedItems(newSelected)
  }

  const calculateScore = () => {
    const totalScore = selectedItems.size
    const scoreRange = Math.floor(totalScore / 10) * 10
    const achievements: string[] = []

    const achievementChecks: Array<{ indices: number[], type: AchievementType }> = [
      { indices: [13, 14, 15], type: 'lived_all_areas' },
      { indices: [20, 21, 22], type: 'coffee_expert' },
      { indices: [30, 31, 32], type: 'startup_survivor' },
      { indices: [40, 41, 42], type: 'traffic_master' },
      { indices: [50, 51, 52], type: 'meetup_enthusiast' }
    ]

    achievementChecks.forEach(({ indices, type }) => {
      if (indices.every(index => selectedItems.has(index))) {
        achievements.push(type)
      }
    })

    // Encode all data in a single base64 parameter
    const data = btoa(JSON.stringify({
      s: totalScore,
      a: achievements
    }))
    
    router.push(`/results/${scoreRange}?d=${data}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
       <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-orange-500 mb-4">
          Bengaluru Purity Test
        </h1>
        <p className="text-lg text-gray-600 mb-3">
          Namaskara! 🙏 <br /> The official checklist for techies surviving and thriving in India&apos;s Silicon Valley.
          Check every item you&apos;ve experienced in your Bengaluru tech journey.
        </p>
        <p className="text-sm font-semibold text-gray-800">
          Caution: This is not your startup&apos;s roadmap. Scoring 100% means you&apos;ve spent too much time at Third Wave Coffee and not enough time coding. ☕
        </p>
      </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox
                    id={`question-${index}`}
                    checked={selectedItems.has(index)}
                    onCheckedChange={() => handleCheckboxChange(index)}
                  />
                  <label
                    htmlFor={`question-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {`${index + 1}. ${question}`}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={calculateScore}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Calculate My Score
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}