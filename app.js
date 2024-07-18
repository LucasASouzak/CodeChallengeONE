const texto = document.getElementById('texto');
const saida = document.getElementById('saida');
const criptografarBtn = document.getElementById('criptografar');
const descriptografarBtn = document.getElementById('descriptografar');
const copiarBtn = document.getElementById('copiar');
const saidaTexto = document.querySelector('.saida-texto'); 

// Função para criptografar o texto
function criptografarTexto() {
    // Implementação da criptografia (próximo passo)
}

// Função para descriptografar o texto
function descriptografarTexto() {
    // Implementação da descriptografia (próximo passo)
}

// Função para copiar o texto da saída
function copiarTexto() {
    saida.select();
    document.execCommand('copy');
}

// Event Listeners para os botões
criptografarBtn.addEventListener('click', () => {
    criptografarTexto();
    saidaTexto.style.display = 'block'; // Mostra a seção de saída
});

descriptografarBtn.addEventListener('click', () => {
    descriptografarTexto();
    saidaTexto.style.display = 'block'; // Mostra a seção de saída
});

copiarBtn.addEventListener('click', copiarTexto);