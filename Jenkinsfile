pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/itkarank/react-pro/my-app/'
            }
        }

       stage('Docker Build & Push') {
            steps {
                script{

                    
                    withDockerRegistry(credentialsId: '4dc60544-f54b-48cd-ad44-bd685badc389', toolName: 'react-pro') {
                        
                        sh "docker build -t react-pro -f Dockerfile ."
                        sh "docker tag  react-pro karan143/react-pro:latest"
                        sh "docker push karan143/react-pro:latest"
                    }
                }
            }
        }    
        
        stage('Docker Deploy to Container') {
            steps {
                script {
                withDockerRegistry(credentialsId: '4dc60544-f54b-48cd-ad44-bd685badc389', toolName: 'react-pro') {
                    sh "docker run -d --name react-pro -p 8070:8070 karan143/react-pro:latest" }
                }
                
            }
        }
    }
}

