pipeline {
    agent none 

    triggers {
        cron('*/10 * * * *')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                    args '-u root'
                }
            }
            steps {
                echo '=== Iniciando o Estágio de Build ==='
                echo 'Rodando npm install no Container de Build isolado...'
                sh 'npm install'
            }
        }
        
        stage('Teste') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                    args '-u root'
                }
            }
            steps {
                echo '=== Iniciando o Estágio de Testes ==='
                echo 'Rodando os testes no Container de Teste isolado...'
                
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    sh 'CI=true npm test'
                }
            }
        }
    }
}