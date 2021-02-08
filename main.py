
from flask import Flask, render_template
import requests
import datetime
from datetime import timedelta
import maya

app = Flask(__name__)

print("""
         @author Arijit Paine
    @email arijitpaine647@gmail.com
--------------------------------------
|         Clash Royale API           | 
--------------------------------------
""")

@app.route("/")  #  home page  #
def hello():
    url = "https://api.clashroyale.com/v1/clans/ LCC0JUG9"
    #  API key  #
    my_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJmZGQ3NDcwLTdkNjEtNDAyNC1hNjNjLTIzODIxN2RkODE3MyIsImlhdCI6MTYxMjc4MDQ4NSwic3ViIjoiZGV2ZWxvcGVyLzYxYmY3NmVkLTJlNGEtODFjZS1kYjJlLTlmOGE1NzBhY2UzNiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMTcuMjI2LjEzOC4xNyIsIjExNy4yMjcuMTAuMTciXSwidHlwZSI6ImNsaWVudCJ9XX0.XoosMidWAA84QpmOc_DV2LudMbGRoB-Sul2tiVqhjhLFFIveFEMrE4pY8liIpdkI9Ft5qvfpKF4ChzlBzRBE6g"
    headers = {
        'Accept': "application/json",
        'authorization': "Bearer %s" % my_key
        }
    response = requests.request("GET", url, headers=headers)
    data = response.json()
    print(data)

    mArrey = data['memberList']
    now = datetime.datetime.now()
    now2 = maya.parse(now).datetime()
    i = 0
    lsArr = []
    dayArr = []
    H_arr = []
    M_arr = []

    while i < data['members']:
        lastSeen = mArrey[i]['lastSeen']
        lastSeen2 = maya.parse(lastSeen).datetime()
        lastOnline = ((now2 - timedelta(hours=5, minutes=30)) - lastSeen2)
        i += 1
        dayArr.append(lastOnline.days) 
        H_arr.append(int(((lastOnline.seconds)/60)/60))
        minutes = ((((lastOnline.seconds)/60)/60) - int(((lastOnline.seconds)/60)/60))
        M_arr.append(int(minutes * 60)) 
    # print(dayArr,"\n",H_arr,"\n",M_arr)
    return render_template('index.html', data = data,mArrey = mArrey, dayArr = dayArr,H_arr = H_arr,M_arr = M_arr)
 
    #________errorhandlers_________#
@app.errorhandler(404) 
def invalid_route(e): 
    return render_template('404.html')

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html')

app.run(debug=True)
