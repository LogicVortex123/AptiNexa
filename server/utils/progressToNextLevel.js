const getProgressToNextLevel = (readinessScore) => {

    let currentLevel;
    let nextLevel;
    let targetScore;

    if (readinessScore >= 90) {
        currentLevel = "A+";
        nextLevel = "Completed";
        targetScore = 100;
    }
    else if (readinessScore >= 80) {
        currentLevel = "A";
        nextLevel = "A+";
        targetScore = 90;
    }
    else if (readinessScore >= 70) {
        currentLevel = "B+";
        nextLevel = "A";
        targetScore = 80;
    }
    else if (readinessScore >= 60) {
        currentLevel = "B";
        nextLevel = "B+";
        targetScore = 70;
    }
    else if (readinessScore >= 50) {
        currentLevel = "C+";
        nextLevel = "B";
        targetScore = 60;
    }
    else if (readinessScore >= 40) {
        currentLevel = "C";
        nextLevel = "C+";
        targetScore = 50;
    }
    else {
        currentLevel = "Beginner";
        nextLevel = "C";
        targetScore = 40;
    }

    return {
        currentScore: readinessScore,
        currentLevel,
        nextLevel,
        targetScore,
        remainingPoints: Math.max(0, targetScore - readinessScore)
    };

};

module.exports = getProgressToNextLevel;