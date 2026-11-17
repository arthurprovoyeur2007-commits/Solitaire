// ─────────────────────────────────────────────────────────────
//  Configuration du site Solitaire
//  Ces valeurs ne sont pas secrètes : la sécurité vient des règles Firestore.
// ─────────────────────────────────────────────────────────────

// 1) Comptes et classement en ligne (Firebase) — projet : solitaire-2fecf
window.SOLITAIRE_FIREBASE = {
  apiKey: "AIzaSyDDED-W2qzwCXzH8o9BSblLnZJYIq9gUts",
  authDomain: "solitaire-2fecf.firebaseapp.com",
  projectId: "solitaire-2fecf",
  storageBucket: "solitaire-2fecf.firebasestorage.app",
  messagingSenderId: "452259994903",
  appId: "1:452259994903:web:ca8ff0ecff1d90e821ab52",
  measurementId: "G-L0X7CG9JVG"
};

// 2) Publicités (colonne de gauche, sur grand écran)
//    - Tant que "client" et "slot" sont vides, "preview: true" affiche juste un cadre « Espace publicitaire ».
//    - Quand ton compte Google AdSense est validé, remplis :
//        client : ton identifiant éditeur, du type "ca-pub-1234567890123456"
//        slot   : le numéro de ton bloc d'annonces (AdSense → Annonces → Par bloc d'annonces)
//      puis mets preview à false.
//    - Pour ne plus rien afficher du tout : preview: false avec client et slot vides.
window.SOLITAIRE_ADS = {
  client: "",
  slot: "",
  preview: true
};
