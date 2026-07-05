const axios = require("axios");

const calculateReadinessScore = require("../utils/readinessScore");
const detectWeakAreas = require("../utils/weakAreas");
const detectStrengthAreas = require("../utils/strengthAreas");
const generateRecommendations = require("../utils/recommendations");
const getProfileGrade = require("../utils/profileGrade");
const getProgressToNextLevel = require("../utils/progressToNextLevel");

const generateAIInsights = require("../services/aiService");

const analyzeProfile = async (req, res) => {
    try {

        // Get username
        const { username } = req.query;

        if (!username) {
            return res.status(400).json({
                success: false,
                message: "LeetCode username is required."
            });
        }

        // GraphQL Query
        const query = `
        query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
                username

                profile {
                    ranking
                    reputation
                    starRating
                }

                submitStatsGlobal {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }
        `;

        // Fetch data from LeetCode
        const response = await axios.post(
            "https://leetcode.com/graphql",
            {
                query,
                variables: {
                    username
                }
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        const user = response.data.data.matchedUser;

        // User not found
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "LeetCode user not found."
            });
        }

        // Extract solved stats
        const solvedStats = user.submitStatsGlobal.acSubmissionNum;

        const totalSolved =
            solvedStats.find(stat => stat.difficulty === "All")?.count || 0;

        const easySolved =
            solvedStats.find(stat => stat.difficulty === "Easy")?.count || 0;

        const mediumSolved =
            solvedStats.find(stat => stat.difficulty === "Medium")?.count || 0;

        const hardSolved =
            solvedStats.find(stat => stat.difficulty === "Hard")?.count || 0;

        // Readiness Score
        const score = calculateReadinessScore(
            totalSolved,
            easySolved,
            mediumSolved,
            hardSolved,
            user.profile.ranking
        );

        // Weak Areas
        const weakAreas = detectWeakAreas(
            easySolved,
            mediumSolved,
            hardSolved,
            user.profile.ranking
        );

        // Strength Areas
        const strengthAreas = detectStrengthAreas(
            easySolved,
            mediumSolved,
            hardSolved,
            user.profile.ranking
        );

        // Recommendations
        const recommendations = generateRecommendations(weakAreas);

        // Profile Grade
        const profileGrade = getProfileGrade(score.readinessScore);

        // Progress
        const progress = getProgressToNextLevel(score.readinessScore);

        // AI Insights
        const aiInsights = await generateAIInsights(
            {
                username: user.username,
                totalSolved,
                easySolved,
                mediumSolved,
                hardSolved,
                ranking: user.profile.ranking,
                reputation: user.profile.reputation,
                starRating: user.profile.starRating
            },
            {
                readinessScore: score.readinessScore,
                profileGrade,
                scoreBreakdown: score.breakdown,
                weakAreas,
                strengthAreas,
                recommendations,
                progress
            }
        );

        // Final Response
        return res.status(200).json({
            success: true,
            data: {

                username: user.username,

                profile: {
                    totalSolved,
                    easySolved,
                    mediumSolved,
                    hardSolved,
                    ranking: user.profile.ranking,
                    reputation: user.profile.reputation,
                    starRating: user.profile.starRating
                },

                analysis: {
                    readinessScore: score.readinessScore,

                    profileGrade,

                    progress,

                    scoreBreakdown: score.breakdown,

                    weakAreas,

                    strengthAreas,

                    recommendations
                },

                aiInsights

            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    analyzeProfile
};