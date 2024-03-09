pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/madhunath/project2.git'
            }
        }

       stage('Docker Build & Push') {
            steps {
                script{

                    
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        
                        sh "docker build -t react-pro -f Dockerfile ."
                        sh "docker tag  react-pro madhunath/react-app:latest"
                        sh "docker push madhunath/react-app:latest"
                    }
                }
            }
        }    
        
        stage('Docker Deploy to Container') {
            steps {
                script {
                      withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                    sh "docker run -d --name react-app -p 3000:3000 madhunath/react-app:latest" }
                }
                
            }
        }
    }
}
