# GenQuest

GenQuest is a web application that generates daily general culture questions. The questions are fetched from an API and displayed on the webpage. The project also includes a GitHub Actions workflow to update the questions daily.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/GenQuest.git
    cd GenQuest
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Rapid API key:
    ```
    API_KEY='your_rapid_api_key'
    ```

## Usage

1. To run the application locally, open `index.html` in your browser.

2. To manually generate questions, run:
    ```sh
    node [get_questions.js](http://_vscodecontentref_/8)
    ```

## GitHub Actions Workflow

The project includes a GitHub Actions workflow defined in [workflows/generate-questions.yml](workflows/generate-questions.yml) that runs daily at 12:00 PM UTC to update the questions.

## Files

- **index.html**: The main HTML file for the web application.
- **style.css**: The CSS file for styling the web application.
- **script.js**: The JavaScript file that fetches and displays the daily question.
- **api/get_questions.js**: The Node.js script that fetches questions from the API and saves them to `questions.json`.
- **workflows/generate-questions.yml**: The GitHub Actions workflow file.

## Dependencies

- axios
- dotenv
- express

## License

This project is licensed under the MIT License.