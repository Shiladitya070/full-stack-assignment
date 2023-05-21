import requests
import json

url = 'http://localhost:3000/newquestion'  # Replace with your actual URL

data = {"email": "example@example.com",
         "question": {
              "title": "Word Count",
              "description": "Given a string, count the number of words in the string.",
              "testCases": [
                  {
                      "input": "'Hello, how are you?'",
                      "output": "4"
                  },
                  {
                      "input": "'The quick brown fox jumps over the lazy dog.'",
                      "output": "9"
                  }
              ]}

}

response = requests.post(url, json=data)
print(response.status_code)
print(response.text)

if response.status_code == 200:
  data = json.loads(response.text)
  print(data)
