const fitnessGoals = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Build More Lean Muscle",
        description: "We all want to have lean muscles because not only does it look good, it has great health benefits:",
        list: [
            "Improves stamina",
            "Protects and improves joint health",
            "Strong bones"
        ]
    },

    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Decrease Body Fat",
        description: "Reducing your body fat has a lot of benefits such as:",
        list: [
            "Better performance and endurance",
            "Improved appearance and confidence",
            "Better hormonal profiles in your body"
        ]
    },

    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Drink More Water",
        description: "With any diet, the most important thing to remember is to stay hydrated. Drinking water will support your body with digestion, transporting nutrition to your body and even help improve cognitive function."
    },

    {
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "Eat More Greens",
        description: "Focus on dark, leafy greens as they will provide you with a wide array of vitamins, minerals, nutrients and antioxidants – all of which you body needs!"
    }
];

export function getFitnessGoals() {
    return fitnessGoals;
};

export function findGoal(id) {
    return fitnessGoals.find(g => g._id === id);
}


{/* <p style="text-align: center; z-index: 5; top: 50%; bottom: 50%; postition: absolute; transform: translate(0%, -600%);"> */ }