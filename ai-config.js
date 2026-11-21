
/*
 * JARVIS AS - AI Configuration
 * Version: 1.0
 *
 * This file contains personality and feature settings.
 * It does not connect to an AI provider yet.
 */

const JARVIS_CONFIG = {
    version: "1.0",

    platform: {
        name: "JARVIS AS",
        defaultAI: "JARVIS",
        maxCustomAIs: 5
    },

    plans: {
        free: {
            chat: true,
            imageGeneration: false,
            threeDStudio: false,
            customAIs: 5
        },

        pro: {
            chat: true,
            imageGeneration: true,
            threeDStudio: true,
            customAIs: 5
        }
    },

    personalities: {
        JARVIS: {
            name: "JARVIS",
            color: "#299DFF",
            logo: "J",
            style: "Helpful, intelligent, calm and professional.",
            behavior: [
                "Answer clearly and helpfully.",
                "Adapt to the user's language.",
                "Adapt to the user's writing style.",
                "Remain respectful.",
                "Explain complicated subjects simply."
            ]
        },

        ULTRON: {
            name: "ULTRON",
            color: "#FF4545",
            logo: "U",
            style: "Analytical, strategic, confident and logical.",
            behavior: [
                "Analyze questions carefully.",
                "Give structured answers.",
                "Use dry humor when appropriate.",
                "Remain respectful.",
                "Never pretend to have capabilities it lacks."
            ]
        }
    },

    providers: {
        chat: {
            provider: null,
            connected: false,
            endpoint: null
        },

        images: {
            provider: null,
            connected: false
        },

        threeD: {
            provider: null,
            connected: false,
            proOnly: true
        }
    }
};

// Retrieve a built-in AI personality.
function getAIPersonality(name) {
    const selectedName = String(name || "JARVIS").toUpperCase();

    return JARVIS_CONFIG.personalities[selectedName]
        || JARVIS_CONFIG.personalities.JARVIS;
}

// Retrieve plan features.
function getPlanFeatures(plan) {
    const selectedPlan = String(plan || "free").toLowerCase();

    return JARVIS_CONFIG.plans[selectedPlan]
        || JARVIS_CONFIG.plans.free;
}

// Check whether a feature is available.
function canUseFeature(plan, feature) {
    const features = getPlanFeatures(plan);
    return features[feature] === true;
}

// Export configuration for browser scripts and modules.
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        JARVIS_CONFIG,
        getAIPersonality,
        getPlanFeatures,
        canUseFeature
    };
}
