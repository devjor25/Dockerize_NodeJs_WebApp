pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Hello checkout'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                echo 'Hello install'
            }
        }
        
        stage('Start') {
            steps {
                sh 'npm start'
                echo 'Hello start'
            }
        }

    }
}
