#     Author : MR.Arijit Paine     #
# Email : arijitpaine647@gmail.com #

import maya
import datetime
import requests

url = "https://api.clashroyale.com/v1/clans/ LCC0JUG9"

my_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZmMzFkYTc0LTYyZmMtNDI1MC05NGY0LWU4OGIxZjdiNTlkOCIsImlhdCI6MTYxMjU1MTU4OCwic3ViIjoiZGV2ZWxvcGVyLzYxYmY3NmVkLTJlNGEtODFjZS1kYjJlLTlmOGE1NzBhY2UzNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTcuMjI3LjI1LjI0OSIsIjExNy4yMjYuMTUzLjI0OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.pLRTmDrGKouzLPyS25gqZW7Su5hpYHstl_O8Hl3KylHWO3MBEa7tnlcRciW2Psq2tOWpye1h93KU4PCiqc_zQw"

headers = {
    'Accept': "application/json",
    'authorization': "Bearer %s" % my_key
    }

response = requests.request("GET", url, headers=headers)

data = response.json()
print(data)

lsArr = []
#print(data)
members = data['memberList']
for member in members:
    lastSeen = member['lastSeen']
    lastSeen2 = maya.parse(lastSeen).datetime()
    now = datetime.datetime.now()
    now2 = maya.parse(now).datetime()
    time = now2 - lastSeen2
    name = member['name']
    arr = [time,name]
    lsArr.append(arr)
    
print(lsArr)

