import pymongo
import pandas as pd
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# MongoDB connection string
Mongo = os.getenv("MONGO")
print(Mongo)

# Function to import CSV data into MongoDB
def import_csv_to_mongodb(csv_file, collection_name):
    # Load CSV data into a DataFrame
    df = pd.read_csv(csv_file)
    
    # Convert DataFrame to dictionary format
    data_dict = df.to_dict(orient='records')
    
    # Connect to MongoDB
    client = pymongo.MongoClient(Mongo)
    db = client.get_database("test")  
    collection = db[collection_name]
    
    # Delete existing data from MongoDB collection
    collection.delete_many({})
    
    # Insert new data into MongoDB collection
    collection.insert_many(data_dict)
    
    print(f"Data from {csv_file} imported successfully into MongoDB collection {collection_name}")

# List of CSV files and corresponding MongoDB collection names
csv_files = [
    {"file": "Schulen.csv", "collection": "schulens"},
    {"file": "Schulsozialarbeit.csv", "collection": "schulsozialarbeits"},
    {"file": "Kindertageseinrichtungen.csv", "collection": "kindertageseinrichtungens"},
    {"file": "Jugendberufshilfen.csv", "collection": "jugendberufshilfens"}
]

# Import data from each CSV file into MongoDB
for entry in csv_files:
    import_csv_to_mongodb(entry["file"], entry["collection"])
