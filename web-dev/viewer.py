from flask import *

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('starter-template.html')

if __name__ == '__main__':
    app.run(debug=True)
