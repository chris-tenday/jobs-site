<template>
    <div class="page-wraper">
        <!-- HEADER START -->
        <header-layout class-name='header-style-light'></header-layout>
        <!-- HEADER END -->

        <!-- CONTENT START -->
        <div class="page-content">
            <div class="section-full p-t120 p-b90 site-bg-gray bg-cover overlay-wraper"
                style="background-image:url(assets/images/background/bg-2.jpg)">
                <div class="overlay-main site-bg-primary opacity-01"></div>
                <div class="container">
                    <div class="section-content" id="parallax-content">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-5 col-md-12 m-b30">
                                <!--Block one-->
                                <div class="blog-post twm-blog-post-2-outer">
                                    <div class="wt-post-media">
                                        <a href="javascript:void(0)"><img src="assets/images/recrut.jpg" alt=""></a>
                                    </div>
                                    <div class="wt-post-info">
                                        <div class="wt-post-meta ">
                                            <ul>
                                                <li class="post-date w-100">Maitrisez l'utilisation
                                                    professionnelle de
                                                    l'IA</li>
                                            </ul>
                                        </div>

                                        <div class="wt-post-title ">
                                            <h4 class="post-title text-white">
                                                Cette session de formation a pour objectif de vous fournir une
                                                compréhension approfondie de l'intelligence artificielle (IA) et de son
                                                utilisation dans la vie quotidienne.
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="twm-testimonial-page8-left mt-4">
                                    <div class="testimonial-outline-text-small bounce2">
                                        <span>Exploiter la puissance d'internet grâce à l'utilsation de l'IA !</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-7 col-md-12">

                                <div class="twm-blog-post-wrap-right">
                                    <!--Block two-->
                                    <div class="blog-post twm-blog-post-1-outer shadow-none  m-b20">
                                        <div class="wt-post-info">

                                            <div class="wt-post-meta ">
                                                <ul>
                                                    <li class="post-date">Du Vendredi 12 Juillet au Mardi 16 Juillet
                                                    </li>
                                                    <li class="post-author"> De <a href="javascript:void(0)">16h30 à
                                                            20h</a></li>
                                                </ul>
                                            </div>

                                            <div class="wt-post-title ">
                                                <h4 class="post-title">
                                                    <a href="javascript:void(0)">Dispensation du cours et des ateliers
                                                        pratiques</a>
                                                </h4>
                                            </div>
                                            <div class="wt-post-title ">
                                                <p class="post-title">
                                                    <i class="fa fa-map-marker-alt text-info"></i><small>
                                                        03, Bismark, Golf, Gombe Kinshasa, Ref. Immeuble Startup en face
                                                        du Terrain maman Yemo à côté de la maison Koffi et securico !
                                                    </small>
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    <!--Block three-->
                                    <div class="blog-post twm-blog-post-1-outer shadow-none  m-b20">
                                        <div class="wt-post-info">

                                            <div class="wt-post-meta ">
                                                <ul>
                                                    <li class="post-date">Dimache 21 Juillet</li>
                                                    <li class="post-author"> à <a href="javascript:void(0)">13h</a></li>
                                                </ul>
                                            </div>

                                            <div class="wt-post-title ">
                                                <h4 class="post-title">
                                                    <a href="javascript:void(0)">Test et remise de brevet !</a>
                                                </h4>
                                                <div class="wt-post-title ">
                                                    <p class="post-title">
                                                        <i class="fa fa-map-marker-alt text-info"></i><small>
                                                            03, Bismark, Golf, Gombe Kinshasa, Ref. Immeuble Startup en
                                                            face
                                                            du Terrain maman Yemo à côté de la maison Koffi et securico
                                                            !
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="twm-right-section-panel-wrap2">
                                    <!--Filter Short By-->
                                    <div class="twm-right-section-panel site-bg-primary">

                                        <!--Basic Information-->
                                        <div class="panel panel-default">
                                            <div class="panel-heading wt-panel-heading p-a20">
                                                <h4 class="panel-tittle m-a0">Inscription</h4>
                                                <p class="mt-2 mb-0">Inscrivez-vous pour ne rien rater !</p>
                                            </div>
                                            <div class="panel-body wt-panel-body p-a20 ">
                                                <div class="twm-tabs-style-1">
                                                    <form @submit.prevent="createCandidate" class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Nom <sup
                                                                        class="text-danger">*</sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input class="form-control" name="company_name"
                                                                        type="text" v-model="form.nom"
                                                                        placeholder="Saisir votre nom..." required>
                                                                    <i class="fs-input-icon fa fa-user "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Prénom <sup
                                                                        class="text-danger">*</sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.prenom" class="form-control"
                                                                        name="company_name" type="text"
                                                                        placeholder="Saisir votre prenom..." required>
                                                                    <i class="fs-input-icon fa fa-user "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Email <sup
                                                                        class="text-danger">*</sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.email" class="form-control"
                                                                        name="company_Email" type="email"
                                                                        placeholder="deli@example.com">
                                                                    <i class="fs-input-icon fas fa-at"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Téléphone <sup
                                                                        class="text-danger">*</sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.telephone" class="form-control"
                                                                        name="company_phone" type="text"
                                                                        placeholder="+(243) xx-xx-xxxx" required>
                                                                    <i class="fs-input-icon fa fa-phone-alt"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Emploi <sup
                                                                        class="text-danger"><small>(optionnel)</small></sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.current_job"
                                                                        class="form-control" name="company_phone"
                                                                        type="text"
                                                                        placeholder="Saisir votre emploi actuel...ex: Agent commercial">
                                                                    <i class="fs-input-icon fa fa-briefcase"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Centres
                                                                    d'intérêt <sup
                                                                        class="text-danger"><small>(Optionnelle)</small></sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <Select class="form-control"
                                                                        @change="form.hobbie = $event.target.value">
                                                                        <option value="" selected hidden
                                                                            class="text-muted">
                                                                            Sélectionnez votre centre
                                                                            d'intérêt...
                                                                        </option>
                                                                        <option v-for="(item, index) in hobbies"
                                                                            :key="index" :value="item">
                                                                            {{ item }}
                                                                        </option>
                                                                    </Select>
                                                                    <i class="fs-input-icon fa fa-people-arrows"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Ville <sup
                                                                        class="text-danger">*</sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.ville" class="form-control"
                                                                        name="company_phone" type="text"
                                                                        placeholder="Saisir votre le nom de la ville..."
                                                                        required>
                                                                    <i class="fs-input-icon fa fa-map-marked"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                                            <div class="form-group">
                                                                <label class="mb-1">Adresse
                                                                    <sup
                                                                        class="text-danger"><small>(Optionnelle)</small></sup></label>
                                                                <div class="ls-inputicon-box">
                                                                    <input v-model="form.adresse" class="form-control"
                                                                        name="company_phone" type="text"
                                                                        placeholder="Saisir votre adresse">
                                                                    <i class="fs-input-icon fa fa-map-marker-alt"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-12 col-lg-12">
                                                            <div class="form-group">
                                                                <input class="form-check-input me-2" @change="openPay"
                                                                    type="checkbox" id="flexRadioDefault3">
                                                                <label class="form-check-label" for="flexRadioDefault3">
                                                                    Cochez cette case pour procéder au
                                                                    paiement ! <sup
                                                                        class="text-danger"><small>(optionnel)</small></sup>

                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-12 col-lg-12">
                                                            <div class="form-group">
                                                                <input class="form-check-input" type="checkbox"
                                                                    name="flexRadioDefault" id="flexRadioDefault2"
                                                                    checked="" v-model="accepted" required>
                                                                <label class="form-check-label flex-fill"
                                                                    for="flexRadioDefault2">
                                                                    J'accepte les Conditions Générales d'Utilisation et
                                                                    la Politique de Confidentialité. <small><a
                                                                            class="site-text-primary"
                                                                            href="javascript:void(0);"
                                                                            @click="showPrivacy">Lire les
                                                                            conditions</a></small>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                                            <div class="text-left">
                                                                <button type="submit"
                                                                    :disabled="formLoading || !accepted"
                                                                    class="site-button">S'inscrire
                                                                    maintenant <svg v-if="formLoading" width="24"
                                                                        fill="#FFFFFF" height="24" viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <circle class="spinner_S1WN" cx="4" cy="12"
                                                                            r="3" />
                                                                        <circle class="spinner_S1WN spinner_Km9P"
                                                                            cx="12" cy="12" r="3" />
                                                                        <circle class="spinner_S1WN spinner_JApP"
                                                                            cx="20" cy="12" r="3" />
                                                                    </svg> </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTENT END -->

        <!-- FOOTER START -->
        <footer-layout></footer-layout>
        <!-- FOOTER END -->
    </div>
    <privacy-modal />
    <pay-modal />
</template>

<script>
import HeaderLayout from '../layouts/header.layout';
import FooterLayout from '../layouts/footer.layout';
import axios from "axios";
import privacyModal from "@/components/modal_privacy_policy";
import payModal from "@/components/modal_pay.vue";
export default {
    name: 'HomePage',
    components: {
        HeaderLayout,
        FooterLayout,
        privacyModal,
        payModal
    },
    data() {
        return {
            form: {
                nom: '',
                prenom: '',
                adresse: '',
                email: '',
                telephone: '',
                current_job: '',
                ville: '',
                hobbie: ''
            },
            formLoading: false,
            accepted: false,
            hobbies: [
                "Lecture",
                "Voyages",
                "Cuisine",
                "Photographie",
                "Journalisme",
                "Infographie",
                "Nouvelle Technologie",
                "Electronique",
                "Sports",
                "Agriculture",
                "Musique",
                "Art",
                "Architecture",
                "Écriture",
                "Jeux vidéo",
                "Droit",
                "Autre..."
            ]
        }
    },

    mounted() {
        if ($('.sticky-header').length) {
            var sticky = new Waypoint.Sticky({
                element: jQuery('.sticky-header')
            });
        }
    },

    methods: {
        createCandidate(e) {
            this.formLoading = true;
            axios.post("https://mosala.bakend.milleniumhorizon.com/api/formation.save.candidate", this.form
            ).then((result) => {
                this.formLoading = false;
                if (result.data.errors !== undefined) {
                    Swal({
                        icon: "warning",
                        text: result.data.errors.toString(),
                        placement: 'bottom-end',
                        timer: 3000,
                        showConfirmButton: false,
                        showCancelButton: false
                    });
                    return;
                }
                if (result.data.status !== undefined) {
                    Swal({
                        icon: 'success',
                        title: 'Effectué avec succès !',
                        text: 'Votre candidature a été soumise avec succès ! Nous vous remercions pour votre intérêt. Vous serez notifié(e) dans les plus brefs délais. Merci pour votre patience. ',
                        showConfirmButton: false,
                        showCancelButton: false,
                        timer: 5000
                    });
                    this.cleanField();
                }
            }).catch((err) => {
                this.isLoading = false
                console.error(err);
                Swal({
                    title: 'Echec de traitement de la requête !',
                    toast: true,
                    icon: 'warning',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000
                });
            })
        },

        cleanField() {
            this.form.nom = '';
            this.form.prenom = '';
            this.form.email = '';
            this.form.telephone = '';
            this.form.adresse = '';
            this.form.current_job = '';
            this.form.ville = '';
            this.form.hobbie = '';
        },

        openPay(e) {
            if (e.target.checked) {
                $('#pay-modal').modal('show');
            }
        },

        showPrivacy() {
            $('#privacyModal').modal('show');
        }
    },

}
</script>