pipeline {
    environment {
        PROJECT = "th-aderabiruk"
        APP_NAME = "investup"
        FE_SVC_NAME = "${APP_NAME}-frontend"
        CLUSTER = "jenkins-cd"
        CLUSTER_ZONE = "us-central1-a"
        IMAGE_TAG = "gcr.io/${PROJECT}/${APP_NAME}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
        JENKINS_CRED = "${PROJECT}"
    }
    agent {
        kubernetes {
            label 'frontend-web'
            defaultContainer 'jnlp'
            yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  # Use service account that can deploy to all namespaces
  serviceAccountName: cd-jenkins
  containers:
  - name: gcloud
    image: gcr.io/cloud-builders/gcloud
    command:
    - cat
    tty: true
  - name: kubectl
    image: gcr.io/cloud-builders/kubectl
    command:
    - cat
    tty: true
"""
        }
    }
    stages {
        stage('Build and push image with Container Builder') {
            steps {
                container('gcloud') {
                sh "PYTHONUNBUFFERED=1 gcloud builds submit -t ${IMAGE_TAG} ."
                }
            }
        }
        stage('Deploy master Branch') {
            when { branch 'master' }
            steps {
                container('kubectl') {
                    sh("sed -i.bak 's#gcr.io/th-ekramhassen/gceme:1.0.0#${IMAGE_TAG}#' ./k8s/frontend-deployment/*.yaml")
                    step([$class: 'KubernetesEngineBuilder',namespace:'investup', projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/frontend-service', credentialsId: env.JENKINS_CRED, verifyDeployments: false])
                    step([$class: 'KubernetesEngineBuilder',namespace:'investup', projectId: env.PROJECT, clusterName: env.CLUSTER, zone: env.CLUSTER_ZONE, manifestPattern: 'k8s/frontend-deployment', credentialsId: env.JENKINS_CRED, verifyDeployments: true])
                    sh("echo http://`kubectl --namespace=investup get service/${FE_SVC_NAME} -o jsonpath='{.status.loadBalancer.ingress[0].ip}'` > ${FE_SVC_NAME}")
                }
            }
        }
    }
}
