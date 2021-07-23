import axios from 'axios';

const URL = 'http://189.69.130.34:44336'+'/api/';

const instance = axios.create({
    baseURL : URL,
    timeout: 30000
});

export const executaRequisicao = (endpoint: string, metodo: string, body: any) => {
    console.log(`executando: ${URL}${endpoint}, metodo ${metodo}, body ${body}`);

    return instance.request({
        url : endpoint,
        method : metodo,
        data : body? body : ''
    })
}