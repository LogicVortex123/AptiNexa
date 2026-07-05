require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});

const generateAIInsights = async (profile, analysis) => {

const prompt = `
You are AptiNexa AI.

You are an experienced Software Engineer, DSA Mentor and Technical Interview Coach.

Your job is to mentor ONE student based on their coding profile.

You are NOT a chatbot.

You are NOT generating generic advice.

You are reviewing this profile exactly like a mentor reviewing one student's journey.

======================================================

PROFILE

Username : ${profile.username}

Problems Solved

Total : ${profile.totalSolved}

Easy : ${profile.easySolved}

Medium : ${profile.mediumSolved}

Hard : ${profile.hardSolved}

Ranking : ${profile.ranking}

Star Rating : ${profile.starRating}

======================================================

APTINEXA ANALYSIS

Readiness Score : ${analysis.readinessScore}/100

Profile Grade : ${analysis.profileGrade}

Progress

${JSON.stringify(analysis.progress, null, 2)}

Strength Areas

${JSON.stringify(analysis.strengthAreas, null, 2)}

Weak Areas

${JSON.stringify(analysis.weakAreas, null, 2)}

Recommendations

${JSON.stringify(analysis.recommendations, null, 2)}

======================================================

Instructions

The readiness score and weak/strength areas have already been calculated.

Do NOT repeat statistics.

Interpret them.

Provide meaningful mentoring.

Explain WHY your recommendations make sense.

Mention realistic companies.

Give confidence but remain honest.

Avoid generic advice like "Practice more."

Instead mention exactly what should be practiced.

Return ONLY valid JSON.

{
  "careerSummary": "",

  "currentStage": "",

  "biggestStrength": "",

  "biggestWeakness": "",

  "readinessAssessment": {
    "internship": 0,
    "serviceBased": 0,
    "productBased": 0,
    "faang": 0
  },

  "recommendedCompanies": {
    "currentlyReady": [],
    "targetAfterImprovement": []
  },

  "weeklyRoadmap": [
    {
      "day": "",
      "task": ""
    },
    {
      "day": "",
      "task": ""
    },
    {
      "day": "",
      "task": ""
    }
  ],

  "focusTopics": [
    {
      "topic": "",
      "reason": ""
    }
  ],

  "interviewTips": [],

  "thirtyDayGoal": "",

  "nextMilestone": "",

  "whyThisRecommendation": "",

  "motivation": ""
}

Rules

1. Output ONLY JSON.
2. No markdown.
3. No code block.
4. careerSummary should be around 120-150 words.
5. Readiness assessment values must be integers between 0 and 100.
6. Recommend companies that realistically match the profile.
7. Give exactly 3 roadmap entries.
8. Give exactly 4 focus topics.
9. Give exactly 3 interview tips.
10. Explain WHY the chosen focus topics matter.
11. Motivation should feel personal.
12. Never exaggerate the student's current level.
13. Base all advice on the supplied profile.
`;

    try {

        const completion = await client.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content:
                        "You are AptiNexa AI, an expert Software Engineering Career Mentor."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.8,

            response_format: {
                type: "json_object"
            }

        });

        const response = completion.choices[0].message.content;

        return JSON.parse(response);

    } catch (error) {

        console.error("AI Error:", error);

        return {

            careerSummary:
                "AI insights are currently unavailable.",

            currentStage: "",

            biggestStrength: "",

            biggestWeakness: "",

            recommendedCompanies: [],

            internshipReadiness: "",

            productCompanyReadiness: "",

            weeklyRoadmap: [],

            focusTopics: [],

            interviewTips: [],

            nextMilestone: "",

            motivation: ""

        };

    }

};

module.exports = generateAIInsights;