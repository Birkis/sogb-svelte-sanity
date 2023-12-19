<script lang="ts">
    import type { PageData } from './$types';
    import { contactInfo } from '$lib/contactInfo';   
    export let data: PageData;

    console.log("The contactInfo object is:", contactInfo);

</script>
<head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
</head>

<div class="p-6">
    <h1 class="text-2xl font-bold mb-4">{contactInfo.title}</h1>
    <div class="flex flex-col md:flex-row md:space-x-6">
        <section class="mb-6 md:w-1/4">
            <h2 class="text-xl font-semibold mb-2">Adresse</h2>
            <p class="mb-2">{contactInfo.location.address}</p>
            <p>Åpningstider: {contactInfo.location.openingHours}</p>
        </section>
        <section class="mb-6 md:w-1/4">
            <section class="pb-4">
                <h2 class="text-xl font-semibold mb-2">Kontakt - Kontor</h2>
                <p>Telefon: {contactInfo.contactOffice.phone}</p>
                <p>E-post: <a href="mailto:{contactInfo.contactOffice.email}" class="text-blue-500 underline">{contactInfo.contactOffice.email}</a></p>
                <p>Org.nr: {contactInfo.contactOffice.orgNumber}</p>
            </section>
            <section class="pt-8">
                <h2 class="text-xl font-semibold mb-2">Kontakt - Ordre</h2>
                <p>Telefon: {contactInfo.contactOrders.phone}</p>
            </section>
            <section class="my-6">
                <h2 class="text-xl font-semibold mb-2">Følg Oss</h2>
                <a href={contactInfo.socialMedia.facebook} class="text-blue-500 underline mr-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href={contactInfo.socialMedia.linkedIn} class="text-blue-500 underline">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </section>
        </section>

        <!-- Flere seksjoner kan legges til her -->
        <section class="mb-6 md:w-1/4">
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.3214341171545!2d10.794365677885205!3d59.82719217106928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168ed44619aa5%3A0xb8fcbd241e975ce1!2sRosenholmveien%2012%2C%201252%20Oslo!5e0!3m2!1sno!2sno!4v1702986133504!5m2!1sno!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
</div>