<template>
    <header class="site-header  mobile-sider-drawer-menu" :class="className">

        <div class="sticky-header main-bar-wraper  navbar-expand-lg">
            <div class="main-bar">

                <div class="container-fluid clearfix">
                    <div class="logo-header">
                        <div class="logo-header-inner logo-header-one">
                            <a href="#/" class="d-flex align-content-center align-items-center">
                                <img src="assets/images/logo.png" class="img-fluid" alt="logo"
                                    style="height: 50px; border-radius: 4px;">
                            </a>
                        </div>
                    </div>

                    <!-- NAV Toggle Button -->
                    <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                        class="navbar-toggler collapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar icon-bar-first"></span>
                        <span class="icon-bar icon-bar-two"></span>
                        <span class="icon-bar icon-bar-three"></span>
                    </button>

                    <!-- MAIN Vav -->
                    <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">

                        <ul class=" nav navbar-nav">
                            <li class="has-mega-menu"><a href="#/">Accueil</a>
                            </li>
                            <!-- <li class="has-child"><a href="javascript:;">Formations</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Formation en ligne</a></li>
                                    <li><a href="#">Formation présentielle</a></li>
                                </ul>
                            </li> -->
                            <li class="has-child"><a href="javascript:;">Recrutements</a>
                                <ul class="sub-menu">
                                    <li><a href="javascript:void(0)" @click.stop="scrollToAnchor('recrut')">Recrutement
                                            employé</a></li>
                                    <li><a href="#/formation">Formation</a></li>
                                </ul>
                            </li>
                            <li class="has-mega-menu">
                                <!-- <a href="#" >Nous contacter</a> -->
                                <a href="javascript:void(0)" @click.stop="scrollToAnchor('bottom')">Nous
                                    contacter</a>
                            </li>
                        </ul>

                    </div>

                    <!-- Header Right Section-->
                    <!-- <div class="extra-nav header-2-nav">

                        <div class="extra-cell">
                            <div class="header-nav-btn-section">
                                <div class="twm-nav-btn-left">
                                    <a class="twm-nav-sign-up btn-primary" href="javascript:void(0)" role="button">
                                        <i class="feather-user"></i> Connexion
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div> -->
                </div>

            </div>
        </div>

    </header>
</template>
<script>
export default {
    name: 'HeaderLayout',

    props: {
        className: {
            type: String,
            default: 'header-style-3'
        }
    },

    methods: {
        scrollToAnchor(id) {
            console.log("scroll started");
            // Récupère la référence de l'élément ayant l'ancre
            const anchor = document.getElementById(id);

            // Fait défiler la page vers l'ancre
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

        }
    },
}
</script>