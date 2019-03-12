import ssl
ssl._create_default_https_context = ssl._create_unverified_context
from urllib.request import urlopen
#import urllib
import json
import requests
"""
response = urlopen('https://localhost:44306/api/monan')
data = json.load(response)
#print(data[0])
for row in data:
    print(row['tenmonan'])
"""
r=requests.get("https://localhost:44306/api/monan",verify=False)
data=json.loads(r._content)
for row in data:
    print(row['tenmonan'])
