pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "madhunath"
        IMAGE_NAME = "react-project"
        BUILD_NUMBER = "${env.BUILD_NUMBER}"
        UNIQUE_IMAGE_TAG = "${IMAGE_NAME}:${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/madhunath/project2.git'
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    sh "docker build -t ${UNIQUE_IMAGE_TAG} -f Dockerfile ."
                    sh "docker tag ${UNIQUE_IMAGE_TAG} ${DOCKER_REGISTRY}/${UNIQUE_IMAGE_TAG}"
                    withDockerRegistry(credentialsId: 'docker', toolName: 'docker') {
                        sh "docker push ${DOCKER_REGISTRY}/${UNIQUE_IMAGE_TAG}"
                    }
                }
            }
        }

        stage('Docker Deploy to Container') {
            steps {
                script {
                    sh "docker ps -aqf name=react-project | xargs -r docker stop | xargs -r docker rm"
                    sh "docker images -q ${DOCKER_REGISTRY}/${IMAGE_NAME} | xargs -r docker rmi -f"
                    sh "docker run -d --name react-project -p 3000:3000 ${DOCKER_REGISTRY}/${UNIQUE_IMAGE_TAG}"
                }
            }
        }
    }
}
