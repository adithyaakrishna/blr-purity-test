import React, { useState } from 'react';
import { Checkbox } from "@bengaluru/components/ui/checkbox";
import { Button } from "@bengaluru/components/ui/button";
import { Card, CardContent } from "@bengaluru/components/ui/card";
import { useToast } from '@bengaluru/hooks/use-toast';
import { questions } from '@bengaluru/lib/questions';
import { getScoreInterpretation, getSpecialAchievement } from '@bengaluru/lib/interpretations';

export default function PurityTest() {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [score, setScore] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCheckboxChange = (questionIndex: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(questionIndex)) {
      newSelected.delete(questionIndex);
    } else {
      newSelected.add(questionIndex);
    }
    setSelectedItems(newSelected);
  };

  const calculateScore = () => {
    const totalScore = selectedItems.size;
    const interpretation = getScoreInterpretation(totalScore);
    const achievements: string[] = [];
    
    // Example check for "lived_all_areas" achievement
    if (selectedItems.has(13) && selectedItems.has(14) && selectedItems.has(15)) {
      achievements.push(getSpecialAchievement('lived_all_areas'));
    }

    // Add more achievement checks as needed
    if (selectedItems.has(20) && selectedItems.has(21) && selectedItems.has(22)) {
      achievements.push(getSpecialAchievement('coffee_expert'));
    }

    if (selectedItems.has(30) && selectedItems.has(31) && selectedItems.has(32)) {
      achievements.push(getSpecialAchievement('startup_survivor'));
    }

    if (selectedItems.has(40) && selectedItems.has(41) && selectedItems.has(42)) {
      achievements.push(getSpecialAchievement('traffic_master'));
    }

    if (selectedItems.has(50) && selectedItems.has(51) && selectedItems.has(52)) {
      achievements.push(getSpecialAchievement('meetup_enthusiast'));
    }
    
    toast({
      title: `Your Score: ${totalScore}/100`,
      description: (
        <div className="mt-2">
          <p className="mb-2">{interpretation}</p>
          {achievements.length > 0 && (
            <div className="mt-4">
              <strong>Special Achievements Unlocked:</strong>
              <ul className="list-disc pl-4 mt-2">
                {achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ),
      duration: 10000,
    });
    
    setScore(totalScore);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-orange-500 mb-4">
            Bangalore Tech Purity Test
          </h1>
          <p className="text-lg text-gray-600">
            The official Purity Test checklist for the techies of Bangalore.
            Click on every item you have done.
          </p>
          <p className="text-sm font-semibold text-gray-800 mt-2">
            Caution: This is not a bucket-list. Completion of all items on this test
            will make you a loser.
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
    </div>
  );
}