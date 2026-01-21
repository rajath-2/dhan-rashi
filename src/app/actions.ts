"use server";

import fs from "fs";
import path from "path";

type FeedbackData = {
    rating: number;
    missingFeature: string;
    email: string;
    payPreference: string;
};

export async function submitFeedback(data: FeedbackData) {
    const filePath = path.join(process.cwd(), "feedback.csv");

    // Create header if file doesn't exist
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "Date,Rating,Missing Feature,Email,Willing to Pay\n");
    }

    // Escape fields to handle commas and quotes in user input
    const escapeCsv = (field: string | number) => {
        const stringField = String(field);
        if (stringField.includes(",") || stringField.includes('"') || stringField.includes("\n")) {
            return `"${stringField.replace(/"/g, '""')}"`;
        }
        return stringField;
    };

    const timestamp = new Date().toISOString();
    const row = [
        escapeCsv(timestamp),
        escapeCsv(data.rating),
        escapeCsv(data.missingFeature),
        escapeCsv(data.email),
        escapeCsv(data.payPreference),
    ].join(",") + "\n";

    try {
        fs.appendFileSync(filePath, row);
        return { success: true };
    } catch (error) {
        console.error("Error writing feedback:", error);
        return { success: false, error: "Failed to save feedback" };
    }
}
