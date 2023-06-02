const mp = {

    cardForm : ( { key, formid, totalCost , description, orderId } ) => {

        if( !key || !formid || !totalCost || !description || !orderId ){
            console.log('Mp Initialize', !key, !formid, !totalCost, !description, !orderId)
            alert('Erro ao inicializar Mercado Pago.');
            return
        }

        const mp = new window.MercadoPago( key );

        console.log('[MercadoPago] Initialization')

        let loading = false
        const cardForm = mp.cardForm({
            amount: String(totalCost),
            iframe: true,
            form: {
                id: formid,
                cardNumber: {
                    id: "form-checkout__cardNumber",
                    placeholder: "Número do cartão",
                },
                expirationDate: {
                    id: "form-checkout__expirationDate",
                    placeholder: "MM/YY",
                },
                securityCode: {
                    id: "form-checkout__securityCode",
                    placeholder: "Código de segurança",
                },
                cardholderName: {
                    id: "form-checkout__cardholderName",
                    placeholder: "Titular do cartão",
                },
                issuer: {
                    id: "form-checkout__issuer",
                    placeholder: "Banco emissor",
                },
                installments: {
                    id: "form-checkout__installments",
                    placeholder: "Parcelas",
                },
                identificationType: {
                    id: "form-checkout__identificationType",
                    placeholder: "Tipo de documento",
                },
                identificationNumber: {
                    id: "form-checkout__identificationNumber",
                    placeholder: "Número do documento",
                },
                cardholderEmail: {
                    id: "form-checkout__cardholderEmail",
                    placeholder: "E-mail",
                },
            },
            callbacks: {
                onFormMounted: error => {
                    if (error) return console.warn("Form Mounted handling error: ", error);
                    console.log("Form mounted");
                },
                onSubmit: event => {
                    event.preventDefault();

                    if( loading ){
                        console.log('Aguardando processamento')
                        return
                    }

                    loading=true

                    const {
                        paymentMethodId: payment_method_id,
                        issuerId: issuer_id,
                        cardholderEmail: email,
                        amount,
                        token,
                        installments,
                        identificationNumber,
                        identificationType,
                    } = cardForm.getCardFormData();

                    fetch(`${process.env.VUE_APP_API_URL}/client/v1/order/${orderId}/payment?domain=${process.env.VUE_APP_DOMAIN}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            token,
                            issuer_id,
                            payment_method_id,
                            transaction_amount: Number(amount),
                            installments: Number(installments),
                            description,
                            payer: {
                                email,
                                identification: {
                                    type: identificationType,
                                    number: identificationNumber,
                                },
                            },
                        }),
                    }).then(response => {
                        return response.json();
                    })
                        .then(result => {
                            console.log("result", result, result.success, result.hasOwnProperty("success"), result.success === true)
                            if( result.hasOwnProperty("success") && result.success == true ) {
                                setTimeout(()=>{
                                    window.location.href = `/checkout/${orderId}/obrigado`;
                                }, 1000)
                            } else {
                                document.getElementById("error-message").textContent = JSON.stringify(result.message);
                                document.getElementById("fail-response").style.display = "";
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            document.getElementById("error-message").textContent = JSON.stringify(error);
                            document.getElementById("fail-response").style.display = "";
                        }).finally(()=>{
                        loading=false
                    });

                },
                onFetching: (resource) => {
                    console.log("Fetching resource: ", resource);

                    // Animate progress bar
                    const progressBar = document.querySelector(".progress-bar");
                    progressBar.removeAttribute("value");

                    return () => {
                        progressBar.setAttribute("value", "0");
                    };
                }
            },
        })
    }
}

export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.mp = mp
})
