<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Software Engineer and passionate about Web Technologies, I have been working freelance as a Web and Mobile Developer for more than 5 years',
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
						'Frameworks : Laravel - Flutter - VueJs',
				},
				{
					id: 5,
					bio:
						'Content Managment System (CMS) : WordPress - Woocommerce',
				},
				{
					id: 6,
					bio:
						'Database : MySQL - MariaDB - PostgreSQL - SQLite',
				},
				{
					id: 7,
					bio:
						'Platform : Heroku - Firebase',
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
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="https://res.cloudinary.com/sthanial2002/image/upload/v1657173363/sthanial/profil/SAM_3025_yvvjpp.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
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
