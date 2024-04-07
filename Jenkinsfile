pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/madhunath/project2.git'
            }
        }

        stage('Sonarqube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonar') {
                        sh """${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=react-application \
                            -Dsonar.sources=. \
                            -Dsonar.projectName='React Application' \
                            -Dsonar.projectVersion='1.0' \
                            -Dsonar.login='squ_feacd82942b3ffae6adfd4718db6e791edca237e'"""
                    }
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker build -t react-application -f Dockerfile ."
                        sh "docker tag react-application madhunath/react-application:latest"
                        sh "docker push madhunath/react-application:latest"
                    }
                }
            }
        }

        stage('Docker Deploy to Container') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker run -d --name react-app -p 3000:3000 madhunath/react-application:latest"
                    }
                }
            }
        }
    }
}
