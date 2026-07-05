const detectWeakAreas = (
    easySolved,
    mediumSolved,
    hardSolved,
    ranking
) => {

    const weakAreas = [];

    // Easy Problems
    if (easySolved < 20) {
        weakAreas.push({
            area: "Easy Problems",
            severity: "High"
        });
    }
    else if (easySolved < 50) {
        weakAreas.push({
            area: "Easy Problems",
            severity: "Medium"
        });
    }

    // Medium Problems
    if (mediumSolved < 30) {
        weakAreas.push({
            area: "Medium Problems",
            severity: "High"
        });
    }
    else if (mediumSolved < 75) {
        weakAreas.push({
            area: "Medium Problems",
            severity: "Medium"
        });
    }

    // Hard Problems
    if (hardSolved < 10) {
        weakAreas.push({
            area: "Hard Problems",
            severity: "High"
        });
    }
    else if (hardSolved < 30) {
        weakAreas.push({
            area: "Hard Problems",
            severity: "Medium"
        });
    }

    // Global Ranking
    if (ranking > 2000000) {
        weakAreas.push({
            area: "Global Ranking",
            severity: "High"
        });
    }
    else if (ranking > 1000000) {
        weakAreas.push({
            area: "Global Ranking",
            severity: "Medium"
        });
    }

    return weakAreas;

};

module.exports = detectWeakAreas;