pipeline {
    agent none 

    triggers {
        cron('H H(0-4) * * *')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                echo '=== Iniciando o Estágio de Build ==='
                echo 'Rodando dentro do Container 1 (Node.js 20)...'
                
                sh 'npm install'
                
            }
        }
        
        stage('Teste') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                echo '=== Iniciando o Estágio de Testes ==='
                echo 'Rodando dentro do Container 2 (Node.js 20)...'
                
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'npm test'
                }
            }
        }
    }
}