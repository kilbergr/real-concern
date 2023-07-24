import subprocess
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('./index.html')

@app.route("/on", methods=["GET"])
def turn_on():
    kasaIP = '192.168.0.1'
    timeOn = request.args.get('time')
    try:
        stdout = subprocess.run(['./on.sh', kasaIP, timeOn], check=True)
        return '<h1>Turning On {}: {}</h1>'.format(kasaIP, stdout)
    except subprocess.CalledProcessError:
        return '<h1>Failed to turn on {}</h1>'.format(kasaIP)

@app.route("/off", methods=["GET"])
def turn_off():
    kasaIP = '192.168.0.1'
    stdout = subprocess.run(['./off.sh', kasaIP])
    return '''<h1>Turning Off {}: {}</h1>'''.format(kasaIP, stdout)


if __name__ == "__main__":
  app.run()