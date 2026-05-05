// ================================
// cotacao.js — VERSÃO CORRIGIDA
// ================================

// Espera o HTML carregar (ANTI BUG)
document.addEventListener('DOMContentLoaded', function () {

    const btnCalcular  = document.getElementById('btn-calcular');
    const btnNova      = document.getElementById('btn-nova');
    const formulario   = document.getElementById('formulario-cotacao');
    const resultado    = document.getElementById('resultado');
    const campoAno     = document.getElementById('campo-ano');

    const inputNome  = document.getElementById('nome');
    const inputTipo  = document.getElementById('tipo');
    const inputAno   = document.getElementById('ano');
    const inputValor = document.getElementById('valor');
    const inputCep   = document.getElementById('cep');

    const saidaNome  = document.getElementById('resultado-nome');
    const saidaTipo  = document.getElementById('resultado-tipo');
    const saidaPreco = document.getElementById('resultado-preco');

    // -------------------------------
    // MOSTRAR / ESCONDER ANO
    // -------------------------------
    inputTipo.addEventListener('change', function () {
        campoAno.style.display = this.value === 'auto' ? 'flex' : 'none';
    });

    // -------------------------------
    // TABELAS
    // -------------------------------
    const taxas = {
        auto: 0.0020,
        vida: 0.0008,
        residencial: 0.0012,
        empresarial: 0.0025,
    };

    const fatorAno = {
        novo: 1.0,
        medio: 1.2,
        antigo: 1.5,
    };

    const nomesTipo = {
        auto: '🚗 Seguro Auto',
        vida: '❤️ Seguro de Vida',
        residencial: '🏠 Residencial',
        empresarial: '🏢 Empresarial',
    };

    // -------------------------------
    // CALCULAR
    // -------------------------------
    function calcular() {

        console.log("Botão clicado"); // DEBUG

        const nome  = inputNome.value.trim();
        const tipo  = inputTipo.value;
        const ano   = inputAno.value;
        const valor = parseFloat(inputValor.value);

        // VALIDAÇÃO
        if (!nome) {
            alert('Informe seu nome');
            return;
        }

        if (!tipo) {
            alert('Selecione o tipo de seguro');
            return;
        }

        if (isNaN(valor) || valor < 1000) {
            alert('Valor inválido (mínimo R$1000)');
            return;
        }

        // CALCULO
        let taxa = taxas[tipo];

        if (!taxa) {
            alert('Erro no tipo de seguro');
            return;
        }

        if (tipo === 'auto') {
            const fator = fatorAno[ano] || 1;
            taxa *= fator;
        }

        let preco = valor * taxa;

        const precoFormatado = preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        // SAÍDA
        saidaNome.textContent  = nome;
        saidaTipo.textContent  = nomesTipo[tipo];
        saidaPreco.textContent = precoFormatado + '/mês';

        formulario.style.display = 'none';
        resultado.style.display  = 'block';
    }

    // -------------------------------
    // NOVA SIMULAÇÃO
    // -------------------------------
    function novaCotacao() {
        formulario.style.display = 'flex';
        resultado.style.display  = 'none';

        inputNome.value  = '';
        inputTipo.value  = '';
        inputValor.value = '';
        campoAno.style.display = 'none';
    }

    // -------------------------------
    // EVENTOS (SUPER IMPORTANTE)
    // -------------------------------
    btnCalcular.addEventListener('click', calcular);
    btnNova.addEventListener('click', novaCotacao);

    // -------------------------------
    // MÁSCARA CEP
    // -------------------------------
    inputCep.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '');
        if (v.length > 5) {
            v = v.slice(0, 5) + '-' + v.slice(5, 8);
        }
        this.value = v;
    });

});

