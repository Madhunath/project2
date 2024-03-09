# Getting Started with Create React App deployment

This project was based on building and deploying a simple react web application using Jenkins and Docker.

## Tools used

1. I have used Docker to build, push and deploy the application.
2. I automate the entire process of building and deploying the application using Jenkins(CI/CD tool).
3. Used Git for version control and Github as SCM (Source Code Management).

## Dockerfile

The Dockerfile in this project is used to define the Docker image for the application. It includes the necessary steps to build an environment suitable for running your application.

## Jenkinsfile

The Jenkinsfile is used for defining the Jenkins pipeline, automating the build and deployment process.

## Jenkins Pipeline Setup

1. Install Jenkins and set up a pipeline project.
2. Configure Jenkins credentials for any necessary integrations.

## Pipeline Stages

The Jenkins pipeline consists of the following stages:
  1. Build Stage: Builds the application and creates artifacts.
  2. Deploy Stage: Deploys the application to the target environment.
