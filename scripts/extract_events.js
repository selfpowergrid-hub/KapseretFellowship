import xlsx from 'xlsx';
import fs from 'fs';
import path from 'path';

const excelPath = 'c:/AIC KAPSERET WEBSITE/Documents/AIC ELDORET AIRPORT DCC.xlsx';
const outputPath = 'c:/AIC KAPSERET WEBSITE/src/data/calendar_events.json';

// Ensure the data directory exists
const dataDir = path.dirname(outputPath);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

function extractData() {
    try {
        const workbook = xlsx.readFile(excelPath, { cellDates: true });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Use raw: false to get formatted strings
        const rawData = xlsx.utils.sheet_to_json(worksheet, { header: 1, raw: false });

        const months = [
            "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
            "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
        ];

        let processedData = {};
        months.forEach(m => {
            processedData[m] = {
                events: [],
                notes: []
            };
        });

        let currentMonth = null;

        rawData.forEach((row, index) => {
            if (!row || row.length === 0) return;

            // Header detection
            const firstCell = row[0] ? row[0].toString().toUpperCase().trim() : "";
            if (months.includes(firstCell)) {
                currentMonth = firstCell;
            }

            if (currentMonth) {
                // Column 1 is Date, Column 3 is Activity, Column 4 is Venue, Column 6 or 7 is Notes
                const date = row[1] ? row[1].toString().trim() : "";
                const activity = row[3] ? row[3].toString().trim() : "";
                const venue = row[4] ? row[4].toString().trim() : "";

                // Collect any extra text from col 6 onwards as notes
                const extraNote = row.slice(6).find(cell => cell && cell.toString().trim().length > 0);

                if (activity && activity !== "Activity / Event") {
                    processedData[currentMonth].events.push({
                        date: date,
                        activity: activity,
                        venue: venue,
                        isHighlight: !!extraNote
                    });
                }

                if (extraNote) {
                    // Check if note is already in the list to avoid duplicates from merged cells
                    const formattedNote = extraNote.toString().trim();
                    if (!processedData[currentMonth].notes.includes(formattedNote)) {
                        processedData[currentMonth].notes.push(formattedNote);
                    }
                }
            }
        });

        fs.writeFileSync(outputPath, JSON.stringify(processedData, null, 2));
        console.log(`Successfully extracted events to ${outputPath}`);
    } catch (err) {
        console.error("Error extracting data:", err);
    }
}

extractData();
