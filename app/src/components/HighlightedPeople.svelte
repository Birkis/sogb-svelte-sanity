<script>

</script>

<!-- <div class="flex justify-between items-center bg-gray-100 p-4">
    <div class="flex">
        <div class="flex">
            <div class="w-7/10">
                <h2 class="text-4xl font-black text-gray-700 ">Våre dyktige selgere</h2>
            </div>
            <div class="ml-4 w-3/10">
                <h3 class="text-lg text-gray-600 font-extrabold">Og våre selgere er veldig dyktige</h3>
            </div>
        </div>
        <div>
            <img class="w-[200px] h-auto" src="profilePic_1.png" alt="">
        </div>
    </div>
</div> -->
  

<!-- I want to use CSS GRID to create two rows. The first row with two columns. The second row with three columns  -->
<div class="py-8 px-2 md:px-14">
    <!-- Cols with txt -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        <div class="md:col-span-3 p-4">
            <h2 class="text-3xl md:text-5xl font-black text-gray-700 w-12/12 md:w-10/12">Våre dyktige selgere kan sakene sine!</h2>   
        </div>
        <div class="p-4">
            <h3 class="text-2xl text-gray-400 font-extrabold md:text-3xl">Og våre selgere er veldig dyktige</h3>
        </div>
    </div>

    <!-- cols  with images -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
        <div class="p-4 md:col-span-2 h-[500px] md:h-[500]">
            <img class="w-full h-2/3 object-cover object-top" src="TeamPicture.png" alt="">
            <h3 class="text-3xl font-semibold text-gray-500 py-4">Se alt hva vi har å by på</h3>
        </div>
        <div class="p-4 md:col-span-1 h-[500px] md:h-[500]">
            <img class="w-full h-3/4 object-cover object-top" src="profilePic_2.png" alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">Some text</p>
            </div>
        </div>
        <div class="p-4 md:col-span-1 h-[500px] md:h-[500]">
            <img class="w-full h-3/4 object-cover object-top" src="profilePic_4.png" alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">Some text</p>
            </div>
        </div>
    </div>
</div>