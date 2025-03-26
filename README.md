# Chronos AI: Solana Blockchain Monitoring and Analysis

Chronos AI is an intelligent system built to monitor and analyze the Solana blockchain ecosystem. It uses advanced machine learning models to detect anomalies in transactions, predict Solana token prices, and analyze whale activity to track Dollar Cost Averaging (DCA) behavior.

## Key Features
- **Anomaly Detection:** Detects unusual behavior in Solana blockchain transactions.
- **Price Prediction:** Predicts future prices of Solana based on historical data.
- **Whale Activity Analysis:** Tracks large transactions and detects DCA activity among whales.

## Prerequisites
Before you begin, ensure that you have the following installed:
- Python 3.8 or above
- Jupyter Notebook
- pip (for installing Python packages)

## Installation
### Clone the Repository:
```sh
git clone https://github.com/your-repository/chronos-ai.git
cd chronos-ai
```

### Install Dependencies:
```sh
pip install -r requirements.txt
```

### Download Data:
Set up the system to pull data from the Solana API if you're working with real-time transaction data.

## Running the Notebooks
The project is composed of three main Jupyter notebooks:

### 1️⃣ Anomaly Detection (`anomaly_detection.ipynb`)
- Detects anomalies in Solana transactions using the Isolation Forest model.
- After running the notebook, results will be saved in `anomaly_detection_results.csv`.

### 2️⃣ Price Prediction (`price_prediction.ipynb`)
- Uses machine learning models to predict Solana prices based on historical data.
- The model's predictions are saved in `price_prediction_results.csv`.

### 3️Whale Activity Analysis (`whale_activity_analysis.ipynb`)
- Tracks whale transactions and analyzes DCA behavior in the Solana blockchain.
- Results are saved in `whale_activity_results.csv`.

## Folder Structure
```
Chronos-ai/
├── anomaly_detection.ipynb
├── price_prediction.ipynb
├── whale_activity_analysis.ipynb
├── requirements.txt
└── README.md
```
- 📜 **`anomaly_detection.ipynb`**: Detects anomalies in Solana transactions.
- 📜 **`price_prediction.ipynb`**: Predicts the price of Solana using historical data.
- 📜 **`whale_activity_analysis.ipynb`**: Tracks whale activities and DCA behavior.
- 📜 **`requirements.txt`**: Lists dependencies for the project.

## Dependencies
Here are the main dependencies used in Chronos AI:
- 📊 `pandas`
- 🔢 `numpy`
- 📉 `matplotlib`
- 🌐 `requests`
- 🧠 `scikit-learn`
- 💾 `joblib`

Install them by running:
```sh
pip install -r requirements.txt
```

## Future Enhancements
- Real-time data streaming from Solana using WebSocket or other methods.
- Integrate more complex machine learning models for enhanced anomaly detection and price prediction.
- Provide a REST API for easy integration with external apps.
- Expand the system to support multiple blockchain ecosystems like Ethereum.

## Contributing
We welcome contributions! If you have any suggestions, bug fixes, or features you'd like to add, please submit a pull request or open an issue.
