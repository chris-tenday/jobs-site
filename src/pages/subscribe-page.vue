<template>
    <div class="page-wraper">
        <!-- HEADER START -->
        <header-layout></header-layout>
        <!-- HEADER END -->
        <div class="page-content" id="content-top">

            <!-- INNER PAGE BANNER -->
            <div class="wt-bnr-inr overlay-wraper bg-center"
                style="background-image:url(assets/images/background/bg-3.jpg);">
                <div class="overlay-main site-bg-white opacity-01"></div>
                <div class="container">
                    <div class="wt-bnr-inr-entry">
                        <div class="banner-title-outer">
                            <div class="banner-title-name">
                                <h2 class="wt-title">Candidat souscription</h2>
                            </div>
                        </div>
                        <!-- BREADCRUMB ROW -->

                        <div>
                            <ul class="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="#/">Accueil</a></li>
                                <li>Souscription</li>
                            </ul>
                        </div>

                        <!-- BREADCRUMB ROW END -->
                    </div>
                </div>
            </div>
            <!-- INNER PAGE BANNER END -->

            <!-- OUR BLOG START -->
            <div class="section-full p-t40  p-b40 site-bg-white" id="content-section">
                <div class="panel panel-default mb-3">
                    <div class="panel-body wt-panel-body p-a20 text-center">
                        <div class="tw-sidebar-tags-wrap">
                            <div class="tagcloud">
                                <a href="javascript:void(0)" data-aos="zoom-in" v-for="(item, index) in domaines"
                                    :key="index"> <i :class="item.icon" style="margin-right:2px"></i>{{ item.title
                                    }}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">

                        <div class="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                            <div class="side-bar-st-1">
                                <div class="twm-candidate-profile-pic">
                                    <img src="assets/img/avatar.jpg" v-if="!isCapture" alt="">
                                    <div id="camera-display" v-show="isCapture"></div>
                                    <button class="btn-shoot" v-if="isRefreshCamera" @click="startCapture"><i
                                            class="fa fa-camera-retro"></i></button>
                                    <button class="btn-shoot" :class="isCapture ? 'active' : ''" v-else-if="isCapture"
                                        @click="takePhoto"><i class="fa fa-camera"></i></button>
                                    <button class="btn-shoot" v-else @click="startCapture"><i
                                            class="fa fa-camera"></i></button>
                                </div>
                                <div class="twm-mid-content text-center">
                                    <p>Cliquer pour faire une capture de vous !</p>
                                    <small v-if="captureMissed" class="text-danger">La capture est requise !</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                            <!--Filter Short By-->
                            <div class="twm-right-section-panel site-bg-gray">
                                <form @submit.prevent="submitForm" enctype="multipart/form-data">
                                    <!--Basic Information-->
                                    <div class="panel panel-default">
                                        <div class="panel-body wt-panel-body p-a20 m-b30 ">
                                            <div class="row">
                                                <div class="col-12">
                                                    <p class="text-primary">Veuillez renseigner tous les champs requis
                                                        pour
                                                        souscrire !</p>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Nom <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <input class="form-control" name="company_name" type="text"
                                                                placeholder="ex: kuela" v-model="form.nom" required>
                                                            <i class="fs-input-icon fa fa-user "></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Postnom <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <input class="form-control" v-model="form.postnom"
                                                                name="company_phone" type="text" placeholder="ex: Ngomi"
                                                                required>
                                                            <i class="fs-input-icon fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Prénom <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <input class="form-control" v-model="form.prenom"
                                                                name="company_phone" type="text"
                                                                placeholder="ex: Blaise" required>
                                                            <i class="fs-input-icon fa fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Email <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <input class="form-control" v-model="form.email"
                                                                name="company_Email" type="email"
                                                                placeholder="ex: blaise@example.com" required>
                                                            <i class="fs-input-icon fas fa-envelope"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Téléphone <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <input class="form-control" v-model="form.telephone"
                                                                name="company_Email" type="text"
                                                                placeholder="ex: (+243)..........." required>
                                                            <i class="fs-input-icon fa fa-phone-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6 col-lg-6 col-md-12">
                                                    <div class="form-group">
                                                        <label>Diplome <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box">
                                                            <select class="form-control" required
                                                                @change="form.diplome = $event.target.value">
                                                                <option label="Sélectionnez votre diplôme..." selected
                                                                    hidden>
                                                                </option>
                                                                <option value="Baccalaureat">Baccalaureat</option>
                                                                <option value="Graduat">Graduat
                                                                </option>
                                                                <option value="Licence">Licence
                                                                </option>
                                                                <option value="Master">Master
                                                                </option>
                                                                <option value="Doctorat">Doctorat
                                                                </option>
                                                                <option value="Autre">Autre
                                                                </option>
                                                            </select>
                                                            <i class="fs-input-icon fa fa-user-graduate"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-12 col-lg-12 col-md-12">
                                                    <div class="form-group city-outer-bx has-feedback"><label>Adresse
                                                            complet <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box"><input class="form-control"
                                                                v-model="form.adresse" name="company_since" type="text"
                                                                placeholder="ex: 03 Rue badio,C.Kitambo,Kinshasa"
                                                                required>
                                                            <i class="fs-input-icon fas fa-map-marker-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>Parlez nous de vous en détail <sup
                                                                class="text-danger">*</sup></label>
                                                        <textarea class="form-control" v-model="form.description"
                                                            placeholder="Entrez votre description !" rows="3"
                                                            required></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-xl-12 col-lg-12 col-md-12">
                                                    <h5>Pièce jointe</h5>
                                                    <div class="form-group city-outer-bx has-feedback"><label>CV(en PDF)
                                                            <sup class="text-danger">*</sup></label>
                                                        <div class="ls-inputicon-box"><input class="form-control"
                                                                ref="file" name="company_since" type="file"
                                                                accept=".pdf" required @change="onUpload">
                                                            <i class="fs-input-icon fas fa-paperclip"></i>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 col-md-12">
                                                    <div class="d-flex justify-content-end">
                                                        <button data-aos="zoom-in" type="submit"
                                                            class="site-button green flex-fill me-2"
                                                            :disabled="isLoading">
                                                            <svg width="24" v-if="isLoading" fill="#FFFFFF" height="24"
                                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <circle class="spinner_S1WN" cx="4" cy="12" r="3" />
                                                                <circle class="spinner_S1WN spinner_Km9P" cx="12"
                                                                    cy="12" r="3" />
                                                                <circle class="spinner_S1WN spinner_JApP" cx="20"
                                                                    cy="12" r="3" />
                                                            </svg> Soumettre
                                                            vos informations</button>
                                                        <button data-aos="zoom-in" type="button" class="site-button"
                                                            @click.prevent="submitPlainte">Je
                                                            n'arrive pas à me souscrire.</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- OUR BLOG END -->
        </div>
        <!-- FOOTER START -->
        <footer-layout></footer-layout>
        <!-- FOOTER END -->
    </div>
</template>

<script>
import HeaderLayout from '../layouts/header.layout';
import FooterLayout from '../layouts/footer.layout';
import axios from "axios";

function convertBase64ToFile(base64Data, fileName) {
    // Convertir la représentation base64 en tableau de bytes
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    // Créer un objet Blob à partir du tableau de bytes
    const blob = new Blob([byteArray], { type: 'image/png' });

    // Créer un objet File à partir du Blob
    const file = new File([blob], fileName, { type: 'image/png' });

    return file;
}

export default {
    name: 'SubscribePage',
    data() {
        return {
            isCapture: false,
            isRefreshCamera: false,
            captureMissed: false,
            domaines: [],
            form: {
                nom: '',
                postnom: '',
                prenom: '',
                telephone: '',
                adresse: '',
                email: '',
                diplome: '',
                description: '',
                domaine: '',
                fichier: null,
                profil: null,
            },
            isLoading: false,
        }
    },
    components: {
        HeaderLayout,
        FooterLayout
    },

    mounted() {
        if ($('.sticky-header').length) {
            var sticky = new Waypoint.Sticky({
                element: jQuery('.sticky-header')
            });
        }
        this.$nextTick(() => {
            let currentSelectedDomaines = JSON.parse(localStorage.getItem('domaines'));
            this.domaines = currentSelectedDomaines;
            $('html, body').animate({
                scrollTop: $('#content-top').offset().top
            }, 'slow');
        });
    },

    methods: {
        startCapture() {
            const cameraDisplay = document.getElementById('camera-display');
            // Vérifier la compatibilité avec la caméra
            this.isCapture = true;
            this.isRefreshCamera = false;
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Accéder à la caméra vidéo
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        // Afficher la caméra dans le div
                        cameraDisplay.innerHTML = `<video id="videoStream" autoplay playsinline style="width: 100%; height: 100%;"></video>`;
                        const video = document.getElementById('videoStream');
                        video.srcObject = stream;
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    })
                    .catch(function (err) {
                        console.error('Accès à la caméra refusé', err);
                    });
            } else {
                alert('Votre navigateur ne prend pas en charge l\'accès à la caméra.');
            }
        },
        takePhoto() {
            const cameraDisplay = document.getElementById('camera-display');
            const video = document.getElementById('videoStream');
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            // Afficher la photo capturée dans le div
            cameraDisplay.innerHTML = '';
            const capturedImage = new Image();
            capturedImage.src = canvas.toDataURL('image/png');
            capturedImage.style.borderRadius = '10px';
            capturedImage.style.width = '190px';
            cameraDisplay.appendChild(capturedImage);
            const base64Data = canvas.toDataURL('image/png');
            // Générer un nom de fichier unique
            const fileName = 'temp_image_' + Date.now() + '.png';
            // Convertir la représentation base64 en fichier temporaire
            const imageFile = convertBase64ToFile(base64Data, fileName);
            this.form.profil = imageFile;
            this.isRefreshCamera = true;
        },
        onUpload(event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                this.form.fichier = selectedFile;
            } else {
                alert('Aucun fichier sélectionné.');
            }
        },
        submitForm(e) {

            if (this.form.profil == null) {
                this.captureMissed = true;
                Swal({
                    title: 'Capture de la photo requise !',
                    toast: true,
                    icon: 'warning',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000
                });
                return
            }
            if (this.domaines == null || this.domaines.length == 0) {
                Swal({
                    title: 'Veuillez sélectionner vos domaines puis continuer !',
                    toast: true,
                    icon: 'warning',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000
                });
                this.$router.go(-1);
                return;
            }
            let splitDomaines = [];
            for (let domaine of this.domaines) {
                splitDomaines.push(domaine.title);
            }
            this.form.domaine = splitDomaines.toString();
            let formData = new FormData();
            formData.append('nom', this.form.nom);
            formData.append('postnom', this.form.postnom);
            formData.append('prenom', this.form.prenom);
            formData.append('email', this.form.email);
            formData.append('adresse', this.form.adresse);
            formData.append('telephone', this.form.telephone);
            formData.append('profile', this.form.profil);
            formData.append('domaine', this.form.domaine);
            formData.append('cv', this.form.fichier);
            formData.append('description', this.form.description);
            formData.append('diplome', this.form.diplome);
            this.isLoading = true;
            axios.post("https://mosala.bakend.milleniumhorizon.com/api/candidate.create", formData
            ).then((result) => {
                this.isLoading = false;
                if (result.data.errors !== undefined) {
                    Swal({
                        icon: "warning",
                        title: result.errors.toString(),
                        toast: true,
                        placement: 'bottom-end',
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
                    this.$router.go(-1);
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
        submitPlainte() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success m-2",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Etes-vous sûr de vouloir envoyer une plainte ?",
                text: "Ce message indique que vous n'arrivez pas à vous enregistrer !",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Valider",
                cancelButtonText: "Annuler!",
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log("plainte en cours....");
                    const lienEmail = `mailto:${this.form.email}?subject=${encodeURIComponent("Echec d'enregistrement")}&body=${encodeURIComponent("Je n'arrive pas à m'enregistrer à partir du site mosala.net")}`;
                    window.location.href = lienEmail;
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    console.log("annuler !");
                }
            });
        },
        convertToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = () => {
                    const base64String = reader.result.split(',')[1]; // Récupérer uniquement la partie base64 du résultat
                    resolve(base64String);
                };

                reader.onerror = error => {
                    reject(error);
                };

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    reject(new Error('Fichier non valide'));
                }
            });
        }

    },
}
</script>

<style>
.spinner_S1WN {
    animation: spinner_MGfb .8s linear infinite;
    animation-delay: -.8s
}

.spinner_Km9P {
    animation-delay: -.65s
}

.spinner_JApP {
    animation-delay: -.5s
}

@keyframes spinner_MGfb {

    93.75%,
    100% {
        opacity: .2
    }
}
</style>