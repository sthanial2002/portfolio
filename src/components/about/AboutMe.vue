<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Software Engineer and passionate about Web Technologies with more than 7 years of experiences',
				},
				{
					id: 2,
					bio:
						'I mainly use this languages and Frameworks and CMS that are associated :',
				},
				{
					id: 3,
					bio:
						'Languages : PHP - Javascript',
				},
				{
					id: 4,
					bio:
						'Frameworks : Laravel - VueJs - Flutter',
				},
				{
					id: 5,
					bio:
						'Content Managment System (CMS) : WordPress - Woocommerce',
				},
				{
					id: 6,
					bio:
						'Databases : MySQL - MariaDB - PostgreSQL - SQLite',
				},
				{
					id: 7,
					bio:
						'Platforms : Heroku - Firebase',
				},
				{
					id: 8,
					bio:
						'Tools : Git - Github - Bitbucket',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image 
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="https://res.cloudinary.com/sthanial2002/image/upload/v1657173363/sthanial/profil/SAM_3025_yvvjpp.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>-->

		<!-- About details -->
		<div class="w-full sm:w-4/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				style="color:#fff"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
