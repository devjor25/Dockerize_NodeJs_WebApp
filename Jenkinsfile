pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/devjor25/Dockerize_NodeJs_WebApp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
