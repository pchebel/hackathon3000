from flask import Flask, request
from datetime import datetime
import requests
import time
import re

app = Flask(__name__)

key = "faeb0760f809a89e7ef621189697c912"

@app.route("/")
def home():
    return "Hello, Flask"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route("/hello/<name>")
def hello_there(name):
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")

    # Filter the name argument to letters only using regular expressions. URL arguments
    # can contain arbitrary text, so we restrict to safe characters only.
    match_object = re.match("[a-zA-Z]+", name)

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend"

    content = "Hello there, " + clean_name + "! It's " + formatted_now
    return content

@app.route("/api/actor", methods = ['POST'])
def post_actor_name():
    name = request.form.get('name')
    actor_id = get_actor_id(name)

    base_url = "http://image.tmdb.org/t/p/"
    image_size = "w500"
    get_people_url = f"https://api.themoviedb.org/3/person/{actor_id}?api_key={key}&language=en-US"
    actor_info_res = requests.get(get_people_url)
    image_path = actor_info_res.json()["profile_path"]

    if image_path is None:
        image_path = "/21m2psUsFlsSdbsxGPjZdLRoAjs.jpg" # jean benguigui

    image_url = f"{base_url}{image_size}{image_path}"

    
    return image_url


def get_actor_id(name):
    name = request.form.get('name')
    name.replace(" ", "%20")
    search_url = f"https://api.themoviedb.org/3/search/person?api_key={key}&language=en-US&query={name}&page=1&include_adult=false"
    res_search = requests.get(search_url)

    print(res_search.json())

    if res_search.json()['total_results'] != 0:
        actor_id = res_search.json()['results'][0]['id']
    else:
        actor_id = 35899 # jean benguigui


    return actor_id
