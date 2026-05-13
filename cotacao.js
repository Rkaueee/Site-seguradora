const form = document.getElementById("formCotacao");
const loading = document.getElementById("loading");

loading.style.opacity = "0";

form.addEventListener("submit", function(e){

    e.preventDefault();

    loading.style.opacity = "1";

    // ETAPA 1
    loading.innerHTML = `
        <span></span>
        <p>Analisando perfil...</p>
    `;

    // ETAPA 2
    setTimeout(() => {

        loading.innerHTML = `
            <span></span>
            <p>Buscando planos...</p>
        `;

    }, 1500);

    // ETAPA 3
    setTimeout(() => {

        loading.innerHTML = `
            <span></span>
            <p>Calculando cotação...</p>
        `;

    }, 3000);

    // RESULTADO FINAL
    setTimeout(() => {

        const basico = Math.floor(Math.random() * 100 + 120);
        const premium = Math.floor(Math.random() * 120 + 220);
        const completo = Math.floor(Math.random() * 150 + 350);

        loading.innerHTML = `

        <div class="resultado-cotacao">

            <div class="resultado-topo">

                <div class="check">
                    ✔
                </div>

                <div>
                    <h3>Cotação Finalizada</h3>
                    <p>Encontramos os melhores planos para você.</p>
                </div>

            </div>

            <div class="planos">

                <!-- BÁSICO -->
                <div class="plano">

                    <span>BÁSICO</span>

                    <h2>
                        R$ ${basico}
                        <small>/mês</small>
                    </h2>

                    <ul>
                        <li>✔ Roubo e furto</li>
                        <li>✔ Assistência básica</li>
                    </ul>

                </div>

                <!-- PREMIUM -->
                <div class="plano destaque">

                    <div class="mais-vendido">
                        MAIS VENDIDO
                    </div>

                    <span>PREMIUM</span>

                    <h2>
                        R$ ${premium}
                        <small>/mês</small>
                    </h2>

                    <ul>
                        <li>✔ Cobertura completa</li>
                        <li>✔ Carro reserva</li>
                        <li>✔ Assistência 24h</li>
                    </ul>

                </div>

                <!-- COMPLETO -->
                <div class="plano">

                    <span>COMPLETO</span>

                    <h2>
                        R$ ${completo}
                        <small>/mês</small>
                    </h2>

                    <ul>
                        <li>✔ Cobertura total</li>
                        <li>✔ Vidros e terceiros</li>
                        <li>✔ Guincho ilimitado</li>
                    </ul>

                </div>

            </div>

        </div>

        `;

    }, 4500);

});