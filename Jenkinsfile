pipeline {
    agent any
    stages{
        stage("checkout"){
            steps{
                echo 'Hello checkout'
            }
        }

        stage("Test"){
            steps{
                echo 'Hello test'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run build'
                echo 'Hello build success'
            }
        }


       
    }
}
