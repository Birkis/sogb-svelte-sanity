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
<div>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3 p-4">
            <h2 class="text-4xl font-black text-gray-700 w-8/12">Våre dyktige selgere kan sakene sine!</h2>
            
        </div>
        <div class=" p-4">
            <h3 class="text-lg text-gray-600 font-extrabold">Og våre selgere er veldig dyktige</h3>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
        <div class=" p-4 col-span-2 h-[300px]">
            <img class="w-full h-2/3 object-cover" src="TeamPicture.png" alt="">
            <h3 class="text-3xl font-semibold text-gray-500 py-4">Se alt hva vi har å by på</h3>
        </div>
        <div class=" p-4 col-span-1 h-[300px]">
            <img class="w-full h-3/4 object-cover" src="profilePic_2.png" alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">Some text</p>
            </div>
        </div>
        <div class=" p-4 col-span-1 h-[300px]">
            <img class="w-full h-3/4 object-cover" src="profilePic_4.png" alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">Some text</p>
            </div>
        </div>
    </div>
</div>