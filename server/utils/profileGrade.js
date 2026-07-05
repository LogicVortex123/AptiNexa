const getProfileGrade = (readinessScore) => {

    if (readinessScore >= 90) {
        return "A+";
    }

    if (readinessScore >= 80) {
        return "A";
    }

    if (readinessScore >= 70) {
        return "B+";
    }

    if (readinessScore >= 60) {
        return "B";
    }

    if (readinessScore >= 50) {
        return "C+";
    }

    if (readinessScore >= 40) {
        return "C";
    }

    return "Beginner";

};

module.exports = getProfileGrade;