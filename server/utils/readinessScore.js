const calculateReadinessScore = (
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    ranking
) => {

    let problemScore = 0;
    let difficultyScore = 0;
    let rankingScore = 0;
    let balanceScore = 0;

    // =====================================
    // Problem Score (35 Marks)
    // =====================================

    if (totalSolved >= 500)
        problemScore = 35;
    else
        problemScore = (totalSolved / 500) * 35;

    // =====================================
    // Difficulty Score (25 Marks)
    // =====================================

    const easyScore = Math.min((easySolved / 100) * 5, 5);
    const mediumScore = Math.min((mediumSolved / 150) * 10, 10);
    const hardScore = Math.min((hardSolved / 50) * 10, 10);

    difficultyScore = easyScore + mediumScore + hardScore;

    // =====================================
    // Ranking Score (20 Marks)
    // =====================================

    if (ranking <= 50000)
        rankingScore = 20;
    else if (ranking <= 100000)
        rankingScore = 18;
    else if (ranking <= 250000)
        rankingScore = 16;
    else if (ranking <= 500000)
        rankingScore = 14;
    else if (ranking <= 750000)
        rankingScore = 12;
    else if (ranking <= 1000000)
        rankingScore = 10;
    else if (ranking <= 1500000)
        rankingScore = 8;
    else if (ranking <= 2000000)
        rankingScore = 6;
    else
        rankingScore = 4;

    // =====================================
    // Balance Score (20 Marks)
    // =====================================

    const mediumRatio =
        easySolved === 0 ? 0 : mediumSolved / easySolved;

    const hardRatio =
        mediumSolved === 0 ? 0 : hardSolved / mediumSolved;

    // Medium Balance (10)

    if (mediumRatio >= 0.7)
        balanceScore += 10;
    else if (mediumRatio >= 0.5)
        balanceScore += 8;
    else if (mediumRatio >= 0.3)
        balanceScore += 6;
    else
        balanceScore += 4;

    // Hard Balance (10)

    if (hardRatio >= 0.3)
        balanceScore += 10;
    else if (hardRatio >= 0.2)
        balanceScore += 8;
    else if (hardRatio >= 0.1)
        balanceScore += 6;
    else if (hardRatio >= 0.05)
        balanceScore += 4;
    else
        balanceScore += 2;

    // =====================================
    // Final Score
    // =====================================

    const readinessScore = Math.round(
        problemScore +
        difficultyScore +
        rankingScore +
        balanceScore
    );

    return {
        readinessScore,
        breakdown: {
            problemScore: Math.round(problemScore),
            difficultyScore: Math.round(difficultyScore),
            rankingScore,
            balanceScore
        }
    };

};

module.exports = calculateReadinessScore;