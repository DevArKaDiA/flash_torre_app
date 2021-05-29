interface Genoma{
    "person": {
        "professionalHeadline": string,
        "completion": Number,
        "showPhone": Boolean,
        "created": Date,
        "verified": Boolean,
        "flags": {
            "benefits": Boolean,
            "canary": Boolean,
            "enlauSource": Boolean,
            "fake": Boolean,
            "featureDiscovery": Boolean,
            "firstSignalSent": Boolean,
            "signalsOnboardingCompleted": Boolean,
            "importingLinkedin": Boolean,
            "onBoarded": Boolean,
            "remoter": Boolean,
            "signalsFeatureDiscovery": Boolean,
            "importingLinkedinRecommendations": Boolean,
            "contactsImported": Boolean,
            "appContactsImported": Boolean,
            "genomeCompletionAcknowledged": Boolean
        },
        "weight": Number
        "locale": string,
        "subjectId": Number,
        "picture": string, // LINK
        "hasEmail": Boolean,
        "isTest": Boolean,
        "name": string,
        "links": Array<{
            "id": string,
            "name": string,
            "address": string // LINK
        }>,
        "location": {
            "name": string,
            "shortName": string,
            "country": string,
            "latitude": Number,
            "longitude": Number,
            "timezone": string,
            "timezoneOffSet": Number
        },
        "theme": string,
        "id": string,
        "pictureThumbnail": string,
        "claimant": Boolean,
        "summaryOfBio": string,
        "weightGraph": string,
        "publicId": string

    },
    "stats": object,
    "strengths": Array<{
        "additionalInfo": string,
        "code": number,
        "created": string,
        "media": object
        "id": string,
        "name": string,
        "recomendations": number,
        "weight": number
    }>
    "interests": object,
    "experiences": object,
    "awards": object,
    "jobs": object,
    "projects": object,
    "publications": object,
    "education": object,
    "opportunities": object,
    "languages": object,
    "personalityTraitsResults": object,
    "professionalCultureGenomeResults": object,
};      

export default Genoma;