
import pandas as pd
import sys

def search_excel(file_path):
    try:
        xl = pd.ExcelFile(file_path)
        for sheet_name in xl.sheet_names:
            df = xl.parse(sheet_name)
            # Search for "Theme", "Meli", "Tenure", "Joined"
            mask = df.apply(lambda x: x.astype(str).str.contains('Theme|Meli|Tenure|Joined|2024|2025|2026', case=False, na=False)).any(axis=1)
            results = df[mask]
            if not results.empty:
                print(f"--- Results in sheet: {sheet_name} ---")
                print(results.to_string())
    except Exception as e:
        print(f"Error reading Excel: {e}")

if __name__ == "__main__":
    search_excel(r'c:\AIC KAPSERET WEBSITE\Documents\AIC ELDORET AIRPORT DCC.xlsx')
