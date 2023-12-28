import json

def json_file_to_string(file_path):
    with open(file_path, 'r') as file:
        # Load the JSON data from file
        json_data = json.load(file)

    # Convert JSON object to a single-line string, with proper escaping of newlines
    json_string = json.dumps(json_data).replace('\n', '\\n')
    
    return json_string

# Replace 'path/to/your/file.json' with the actual file path
json_string = json_file_to_string('/Users/jakabasej/Downloads/us.sitesucker.mac.sitesucker/www.insilicoresearch.com/serverless/test-sheets-407121-6e29ecef7e3f.json')
print(json_string)
