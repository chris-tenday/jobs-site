<template>
    <div class="modal fade twm-sign-up show" id="pay-modal" aria-labelledby="pay-modalLabel2" tabindex="-1"
        aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="sign_up_popupLabel2">Procéder au paiement</h2>
                    <p>Veuillez renseigner les champs requis pour procéder au paiement !</p><button type="button"
                        class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="twm-tabs-style-2">
                        <ul class="nav nav-tabs" id="myTab2" role="tablist">
                            <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab"
                                    data-bs-target="#login-candidate" type="button">
                                    <div class="d-flex mb-1">
                                        <img src="assets/pay/mpesa.png" class="img-fluid" style="height: 25px;">
                                        <img src="assets/pay/orange.png" class="img-fluid" style="height: 26px;">
                                        <img src="assets/pay/airtel.png" class="img-fluid" style="height: 25px;">
                                    </div> Paiement mobile
                                </button></li>
                            <li class="nav-item"><button class="nav-link" data-bs-toggle="tab"
                                    data-bs-target="#login-Employer" type="button">
                                    <div class="d-flex mb-1">
                                        <img src="assets/pay/mastercard.svg" class="img-fluid" style="height: 25px;">
                                        <img src="assets/pay/visa.png" class="img-fluid" style="height: 25px;">
                                    </div>
                                    Paiement par carte
                                </button></li>
                        </ul>
                        <div class="tab-content" id="myTab2Content">
                            <form class="tab-pane fade active show" id="login-candidate">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <input v-model="referenceCode" @input="formatReferenceCode" type="text"
                                                require class="form-control"
                                                placeholder="Entrez votre Code de reférence !">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <input type="text" require class="form-control"
                                                placeholder="Numéro de téléphone (mpesa, orange money ou airtel money) *">
                                        </div>
                                    </div>

                                    <div class="col-md-12"><button type="submit" class="site-button"
                                            data-bs-dismiss="modal">Continuer le paiement</button>
                                    </div>
                                </div>
                            </form>
                            <form class="tab-pane fade" id="login-Employer">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <input v-model="referenceCode" type="text" @input="formatReferenceCode"
                                                require class="form-control"
                                                placeholder="Entrez votre code de reférence !">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <input v-model="cardNumber" @input="formatCardNumber" name="username"
                                                type="text" required class="form-control"
                                                placeholder="Numéro de la carte" maxlength="19" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="form-group mb-3">
                                            <input v-model="expirationDate" @input="formatExpirationDate" type="text"
                                                class="form-control" required placeholder="Date d'expiration (MM/AA)"
                                                maxlength="5" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-6">
                                        <div class="form-group mb-3">
                                            <input v-model="cvv" type="text" class="form-control" required
                                                placeholder="CVV/CVC" maxlength="3" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <input v-model="cardName" type="text" required class="form-control"
                                                placeholder="Nom de la carte" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="site-button">
                                            Continuer le paiement
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PayModal',
    props: {
        currentCandidate: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            referenceCode: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            cardName: ''
        }
    },

    methods: {
        formatCardNumber() {
            this.cardNumber = this.cardNumber
                .replace(/\s+/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim();
        },
        formatExpirationDate() {
            this.expirationDate = this.expirationDate
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{0,2})/, '$1/$2')
                .trim();
        },

        formatReferenceCode() {
            this.referenceCode = this.referenceCode.toUpperCase()
                .replace(/[^A-Z0-9]/g, '') // Enlever les caractères non alphanumériques
                .replace(/^([A-Z]{2})(\d{0,6})/, '$1-$2') // Ajouter un tiret après les deux premières lettres
                .slice(0, 9); // Limiter à 9 caractères au total
        },
        handleSubmit() {
            // Handle the form submission
            alert('Form submitted');
        }
    }
}
</script>