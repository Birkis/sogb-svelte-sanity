<script lang="ts">
	import type { PageData } from '../about/$types';

	export let data: PageData;

	// Henter inn data fra Crystallize
	const cat = data.bunnies.catalogue.children;
</script>


<!-- morsom sak hvor vi henter inn data fra Crystallize -->
<!-- 
{#each cat as item}

    <p>{item.name}</p>

{/each} -->
<div class="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">    
    <h1 class="text-4xl font-bold text-center py-5">Om Sørensen og Balchen</h1>
    <p class="text-md text-justify">
        AS Sørensen og Balchen eier og driver konseptene BilXtra butikk og BilXtra verksted.
		Konsernomsetning for 2017 var rett i underkant av 790 millioner kr. 38 butikker er egen eid av
		AS Sørensen og Balchen og 29 eid av franchiser. Når det gjelder Bilxtra verkstedkonseptet eier
		SogB 2 verksteder mens ca. 260 verksteder er eid av lokale drivere.
    </p>

    <div class="mt-10">
        <h2 class="text-3xl font-bold">Sogb eier to kjedekonsept:</h2>
        <h3 class="text-2xl font-semibold mt-5">BilXtra butikk</h3>
        <p class="text-md text-justify">Butikkjeden har ca 70 medlemmer rundt om i hele landet. Halvparten er eid av Sogb.</p>

        <h3 class="text-2xl font-semibold mt-5">BilXtra verksted</h3>
        <p class="text-md text-justify">
          
                I dag har vi 235 medlemmer i BilXtra verkstedkjeden. Alle disse er franchiser. De siste årene
                har antall medlemmer økt betydelig. Dette har skjedd i parallell med at vi har utviklet
                konseptet og økt kjennskapen. Sogb skal kjennetegnes av:
         
    
          
                Original-kvalitet på alle deler vi selger Evne til å levere riktig, og ha de produkter våre
                kunder etterspør Høyt kompetansenivå Sterke og godt kjente konsepter Være ledende i utviklingen
                av bransjen I 2011 ble Sogb kjøpt opp av Mekonomen AB. Med dette har vi fått inn en solid
                industriell eier med betydelig bransjekompetanse. SogB og BilXtra skal bestå som selvstendig
                selskap. Så lenge bilene går vil det være behov for våre butikker og verksteder, og vi mener at
                SogB og BilXtra er godt forberedte på å møte fremtiden. Hver dag jobber vi for at våre kunder
                skal ha gode opplevelser i våre virksomheter, og få den hjelpen de fortjener.
        
        </p>
    </div>

    <div class="my-6">
        <h2 class="text-3xl font-bold my-8">Vår historie</h2>
        <p class="text-md text-justify">
            AS Sørensen og Balchen er et bilfirma med en av de lengste historiene i Norge. Bedriften ble
                etablert som en handelsvirksomhet i 1904 og en bilimportør i 1907. Selskapet har vært en ledende
                distributør av slitedeler og tilbehør i flere tiår, og i dag representerer det mange av de mest
                respekterte produsentene i verden. AS Sørensen og Balchen leverer tilbehør til selskaper,
                grossister og reparasjonsverksteder. Selskapet deltar i et omfattende arbeidsforhold sentrert
                rundt integrerte bransjeløsninger for logistikk og verkstedsystemer for å sikre en effektiv
                vareflyt – og dermed gi kundene størst mulig konkurranseevne. I de senere årene har AS Sørensen
                og Balchen utvidet sitt distribusjonsnettverk i rask takt. Gjennom oppkjøp og etablering av
                tilbehørsbutikker og distriktsgrossister, har konsernet styrket sin posisjon som den ledende
                distributøren i Norge til tilbehørs- og verkstedsektoren.
        </p>
    </div>
</div>