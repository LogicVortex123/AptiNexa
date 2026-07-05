const generateRecommendations = (weakAreas) => {

    const recommendations = [];

    weakAreas.forEach((item) => {

        switch (item.area) {

            case "Easy Problems":
                recommendations.push({
                    title: "Strengthen Fundamentals",
                    priority: item.severity,
                    recommendation:
                        "Solve 20-30 more Easy problems to build strong problem-solving fundamentals."
                });
                break;

            case "Medium Problems":
                recommendations.push({
                    title: "Improve Medium Problem Solving",
                    priority: item.severity,
                    recommendation:
                        "Aim to solve 2-3 Medium problems daily to improve interview readiness."
                });
                break;

            case "Hard Problems":
                recommendations.push({
                    title: "Practice Hard Problems",
                    priority: item.severity,
                    recommendation:
                        "Start solving at least 2-3 Hard problems every week."
                });
                break;

            case "Global Ranking":
                recommendations.push({
                    title: "Improve Global Ranking",
                    priority: item.severity,
                    recommendation:
                        "Practice consistently and participate in contests to improve your ranking."
                });
                break;

        }

    });

    return recommendations;

};

module.exports = generateRecommendations;