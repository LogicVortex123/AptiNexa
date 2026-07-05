const detectStrengthAreas = (
    easySolved,
    mediumSolved,
    hardSolved,
    ranking
) => {

    const strengthAreas = [];

    // Easy Problems
    if (easySolved >= 100) {
        strengthAreas.push({
            area: "Easy Problems",
            level: "Excellent"
        });
    }
    else if (easySolved >= 50) {
        strengthAreas.push({
            area: "Easy Problems",
            level: "Good"
        });
    }

    // Medium Problems
    if (mediumSolved >= 100) {
        strengthAreas.push({
            area: "Medium Problems",
            level: "Excellent"
        });
    }
    else if (mediumSolved >= 50) {
        strengthAreas.push({
            area: "Medium Problems",
            level: "Good"
        });
    }

    // Hard Problems
    if (hardSolved >= 50) {
        strengthAreas.push({
            area: "Hard Problems",
            level: "Excellent"
        });
    }
    else if (hardSolved >= 30) {
        strengthAreas.push({
            area: "Hard Problems",
            level: "Good"
        });
    }

    // Global Ranking
    if (ranking <= 100000) {
        strengthAreas.push({
            area: "Global Ranking",
            level: "Excellent"
        });
    }
    else if (ranking <= 500000) {
        strengthAreas.push({
            area: "Global Ranking",
            level: "Good"
        });
    }

    return strengthAreas;
};

module.exports = detectStrengthAreas;